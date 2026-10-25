import '../test-utils/gesture-test-setup';
import { router } from 'expo-router';
import { Alert, SectionList, StyleSheet, Text } from 'react-native';
import Swipeable, { type SwipeableMethods } from 'react-native-gesture-handler/ReanimatedSwipeable';
import type { ComponentProps } from 'react';
import type { Fiber } from 'test-renderer';
import { act, fireEvent, render, screen, within } from '@testing-library/react-native';

import { loadConference } from '../src/data/load-conference';
import { ConferenceProvider, useConference, type ConferenceContextValue } from '../src/state/conference-state';
import ScheduleScreen from '../src/screens/schedule-screen';

type SwipeProps = ComponentProps<typeof Swipeable>;
type Case = 'new' | 'already-favorite' | 'favorites-mode';
let conference: ConferenceContextValue;

// Observe/control the real provider; no substitute reducer, loader, list or handler.
function Probe() {
  conference = useConference();
  return <Text testID="selection-probe">{JSON.stringify(conference.state.selection)}</Text>;
}

async function mount() {
  const loader = jest.fn(loadConference);
  const view = await render(<ConferenceProvider loader={loader}><ScheduleScreen /><Probe /></ConferenceProvider>);
  await screen.findByTestId('session-1');
  return { view, loader };
}

function swipe(id = 1) {
  let fiber: Fiber | null = screen.getByTestId(`session-${id}`).unstable_fiber;
  while (fiber && fiber.type !== Swipeable && fiber.elementType !== Swipeable) fiber = fiber.return;
  expect(fiber).not.toBeNull();
  const props = fiber!.memoizedProps as SwipeProps;
  const ref = props.ref as { current: SwipeableMethods };
  expect(ref.current).toBeTruthy();
  return { props, methods: ref.current };
}

async function open(id = 1) {
  const row = swipe(id);
  await act(async () => {
    row.methods.openRight();
    // The A2 double has no simulated pan/animation: drive the forwarded callback.
    row.props.onSwipeableWillOpen?.('right' as Parameters<NonNullable<SwipeProps['onSwipeableWillOpen']>>[0]);
  });
  return row;
}

async function closed(id = 1) {
  await act(async () => {
    swipe(id).props.onSwipeableClose?.('right' as Parameters<NonNullable<SwipeProps['onSwipeableClose']>>[0]);
  });
}

function action(id = 1) {
  return within(screen.getByTestId(`swipe-action-${id}`, { includeHiddenElements: true })).getByText(
    conference.state.selection?.mode === 'favorites' ? 'Remove' : 'Favorite',
    { includeHiddenElements: true },
  );
}

function unchangedSelection() {
  const selection = conference.state.selection!;
  return { searchText: selection.searchText, mode: selection.mode, selectedTracks: [...selection.selectedTracks] };
}

async function prepare(kind: Case) {
  await act(async () => {
    conference.dispatch({ type: 'setSearchText', searchText: 'break' });
    conference.dispatch({ type: 'setSelectedTracks', selectedTracks: ['Food'] });
    if (kind !== 'new') conference.dispatch({ type: 'favoriteAdded', sessionId: 1 });
    if (kind === 'favorites-mode') conference.dispatch({ type: 'setMode', mode: 'favorites' });
  });
  await screen.findByTestId('session-1');
}

function alertPresentation(args: Parameters<typeof Alert.alert>) {
  return [args[0], args[1], args[2]?.map(({ onPress: _onPress, ...button }) => button), ...args.slice(3)];
}

async function pressAlert(alert: jest.SpyInstance, text: string) {
  const buttons = alert.mock.calls[alert.mock.calls.length - 1][2] as NonNullable<Parameters<typeof Alert.alert>[2]>;
  const button = buttons.find(b => b.text === text);
  expect(button).toBeDefined();
  await act(async () => { button!.onPress?.(); });
}

describe('schedule swipe wiring (A2 double; real provider/core/SectionList)', () => {
  afterEach(() => jest.restoreAllMocks());

  test('each mounted row has right-only mode actions, proposed thresholds, hidden panel and unchanged keys/buttons', async () => {
    const { view } = await mount();
    for (const row of screen.getAllByTestId(/^session-/)) {
      const id = Number(row.props.testID.slice('session-'.length));
      const panel = screen.getByTestId(`swipe-action-${id}`, { includeHiddenElements: true });
      expect(panel.props.accessibilityElementsHidden).toBe(true);
      expect(panel.props.importantForAccessibility).toBe('no-hide-descendants');
      expect(StyleSheet.flatten(panel.props.style)).toMatchObject({ width: 96, minHeight: 48 });
      expect(within(panel).getByText('Favorite', { includeHiddenElements: true })).toBeTruthy();
      const { props } = swipe(id);
      expect(props).toMatchObject({ friction: 2, rightThreshold: 40, overshootRight: false });
      expect(props.renderLeftActions).toBeUndefined();
      expect(props.dragOffsetFromRight).toBeUndefined();
    }
    expect(screen.getByRole('button', { name: 'Favorite Breakfast' })).toBeTruthy();
    // Inspect the real SectionList ancestor, including off-viewport keys.
    let list: Fiber | null = screen.getByTestId('session-1').unstable_fiber;
    while (list && list.type !== SectionList && list.elementType !== SectionList) list = list.return;
    expect(list).not.toBeNull();
    for (const section of list!.memoizedProps.sections) {
      for (const session of section.data) expect(list!.memoizedProps.keyExtractor(session)).toBe(String(session.id));
    }
    await prepare('favorites-mode');
    for (const row of screen.getAllByTestId(/^session-/)) {
      const id = Number(row.props.testID.slice('session-'.length));
      expect(within(screen.getByTestId(`swipe-action-${id}`, { includeHiddenElements: true })).getByText('Remove', { includeHiddenElements: true })).toBeTruthy();
    }
    expect(screen.getByRole('button', { name: 'Remove Breakfast' })).toBeTruthy();
    await view.unmount();
  });

  test('adds immediately before informational OK, without closing for the favorite change', async () => {
    const alert = jest.spyOn(Alert, 'alert');
    const { view, loader } = await mount();
    const { methods } = await open();
    await fireEvent.press(action());
    expect(conference.state.selection!.favoriteIds).toEqual([1]);
    expect(alert).toHaveBeenCalledWith('Favorite Added', undefined, [{ text: 'OK', onPress: expect.any(Function) }]);
    expect(methods.close).not.toHaveBeenCalled();
    await pressAlert(alert, 'OK');
    expect(methods.close).toHaveBeenCalledTimes(1);
    expect(conference.state.selection!.favoriteIds).toEqual([1]);
    expect(loader).toHaveBeenCalledTimes(1);
    await view.unmount();
  });

  test.each(['Cancel', 'Remove'])('already-favorite all-mode quirk: %s settles and closes only on the alert button', async (choice) => {
    const alert = jest.spyOn(Alert, 'alert');
    const { view } = await mount();
    await prepare('already-favorite');
    const { methods } = await open();
    await fireEvent.press(action());
    expect(alert).toHaveBeenCalledWith('Favorite already added', 'Would you like to remove this session from your favorites?', [
      { text: 'Cancel', style: 'cancel', onPress: expect.any(Function) },
      { text: 'Remove', style: 'destructive', onPress: expect.any(Function) },
    ]);
    expect(conference.state.selection!.favoriteIds).toEqual([1]);
    expect(methods.close).not.toHaveBeenCalled();
    await pressAlert(alert, choice);
    expect(methods.close).toHaveBeenCalledTimes(1);
    expect(conference.state.selection!.favoriteIds).toEqual(choice === 'Cancel' ? [1] : []);
    expect(screen.getByTestId('session-1')).toBeTruthy();
    await view.unmount();
  });

  test.each(['Cancel', 'Remove'])('favorites-mode %s keeps/removes the row with the same confirmation', async (choice) => {
    const alert = jest.spyOn(Alert, 'alert');
    const { view } = await mount();
    await prepare('favorites-mode');
    const { methods } = await open();
    await fireEvent.press(action());
    expect(alert).toHaveBeenCalledWith('Remove Favorite', 'Would you like to remove this session from your favorites?', [
      { text: 'Cancel', style: 'cancel', onPress: expect.any(Function) },
      { text: 'Remove', style: 'destructive', onPress: expect.any(Function) },
    ]);
    expect(methods.close).not.toHaveBeenCalled();
    expect(screen.getByTestId('session-1')).toBeTruthy();
    await pressAlert(alert, choice);
    expect(methods.close).toHaveBeenCalledTimes(1);
    expect(conference.state.selection!.favoriteIds).toEqual(choice === 'Cancel' ? [1] : []);
    expect(screen.queryByTestId('session-1') !== null).toBe(choice === 'Cancel');
    await view.unmount();
  });

  test.each<Case>(['new', 'already-favorite', 'favorites-mode'])('button/action alert presentation and all state transitions match: %s', async (kind) => {
    const alert = jest.spyOn(Alert, 'alert');
    const outcomes = [];
    for (const path of ['button', 'action']) {
      const { view } = await mount();
      await prepare(kind);
      alert.mockClear();
      const press = async () => {
        if (path === 'action') await fireEvent.press(action());
        else await fireEvent.press(screen.getByRole('button', { name: `${kind === 'favorites-mode' ? 'Remove' : 'Favorite'} Breakfast` }));
      };
      await press();
      const args = alertPresentation(alert.mock.calls[0] as Parameters<typeof Alert.alert>);
      const before = [...conference.state.selection!.favoriteIds];
      await pressAlert(alert, kind === 'new' ? 'OK' : 'Cancel');
      const afterFirst = [...conference.state.selection!.favoriteIds];
      if (kind !== 'new') {
        await press();
        await pressAlert(alert, 'Remove');
      }
      outcomes.push({ args, before, afterFirst, afterLast: [...conference.state.selection!.favoriteIds] });
      await view.unmount();
    }
    // Callback identity differs by design: only the action supplies onSettled.
    expect(outcomes[1]).toEqual(outcomes[0]);
  });

  test.each<Case>(['new', 'already-favorite', 'favorites-mode'])('every action flow preserves search/mode/tracks, navigation and loader count: %s', async (kind) => {
    const alert = jest.spyOn(Alert, 'alert');
    const push = jest.spyOn(router, 'push').mockImplementation(() => {});
    const { view, loader } = await mount();
    await prepare(kind);
    const before = unchangedSelection();
    await open();
    await fireEvent.press(action());
    expect(unchangedSelection()).toEqual(before);
    await pressAlert(alert, kind === 'new' ? 'OK' : 'Cancel');
    expect(unchangedSelection()).toEqual(before);
    if (kind !== 'new') {
      await fireEvent.press(action());
      await pressAlert(alert, 'Remove');
      expect(unchangedSelection()).toEqual(before);
    }
    expect(loader).toHaveBeenCalledTimes(1);
    expect(push).not.toHaveBeenCalled();
    await view.unmount();
  });

  test('opening-row link closes without navigation; after close callback the ordinary link navigates', async () => {
    const push = jest.spyOn(router, 'push').mockImplementation(() => {});
    const { view } = await mount();
    const { methods } = await open();
    await fireEvent.press(screen.getByRole('link', { name: 'Breakfast' }));
    expect(methods.close).toHaveBeenCalledTimes(1);
    expect(push).not.toHaveBeenCalled();
    await closed();
    await fireEvent.press(screen.getByRole('link', { name: 'Breakfast' }));
    expect(push).toHaveBeenCalledWith({ pathname: '/session/[sessionId]', params: { sessionId: '1' } });
    await view.unmount();
  });

  test('opening a different row closes only the prior row; late close does not clear the new row', async () => {
    const { view } = await mount();
    const ids = screen.getAllByTestId(/^session-/).map(row => Number(row.props.testID.slice('session-'.length)));
    expect(ids.length).toBeGreaterThan(1);
    const first = await open(ids[0]);
    await open(ids[0]);
    expect(first.methods.close).not.toHaveBeenCalled();
    const second = await open(ids[1]);
    expect(first.methods.close).toHaveBeenCalledTimes(1);
    expect(second.methods.close).not.toHaveBeenCalled();
    expect(first.methods.openRight).toHaveBeenCalledTimes(2);
    expect(second.methods.openRight).toHaveBeenCalledTimes(1);
    await closed(ids[0]);
    await open(ids[0]);
    expect(second.methods.close).toHaveBeenCalledTimes(1);
    await closed(ids[0]);
    await open(ids[1]);
    expect(first.methods.close).toHaveBeenCalledTimes(1);
    await view.unmount();
  });

  test.each(['search', 'mode', 'tracks'])('%s changes close the open row, unlike favorites', async (change) => {
    const { view } = await mount();
    await act(async () => { conference.dispatch({ type: 'favoriteAdded', sessionId: 1 }); });
    const { methods } = await open();
    await act(async () => {
      if (change === 'search') conference.dispatch({ type: 'setSearchText', searchText: 'break' });
      if (change === 'mode') conference.dispatch({ type: 'setMode', mode: 'favorites' });
      if (change === 'tracks') conference.dispatch({ type: 'setSelectedTracks', selectedTracks: ['Food'] });
    });
    expect(methods.close).toHaveBeenCalledTimes(1);
    await closed();
    await view.unmount();
  });
});
