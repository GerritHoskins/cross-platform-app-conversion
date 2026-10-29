// jest-expo defaults to iOS, where upstream deliberately reports tab buttons as
// buttons. Exercise the Android platform implementation for this Android slice;
// the router, tab navigator, stacks and application routes remain real.
jest.mock('react-native/Libraries/Utilities/Platform', () =>
  jest.requireActual('react-native/Libraries/Utilities/Platform.android'));

import '../test-utils/gesture-test-setup';
import { fireEvent, renderRouter, screen, testRouter } from 'expo-router/testing-library';

import * as RootLayout from '../src/app/_layout';
import * as TabsLayout from '../src/app/(tabs)/_layout';
import * as ScheduleLayout from '../src/app/(tabs)/(schedule)/_layout';
import * as ScheduleRoute from '../src/app/(tabs)/(schedule)/index';
import * as SessionRoute from '../src/app/(tabs)/(schedule)/session/[sessionId]';
import * as SpeakersLayout from '../src/app/(tabs)/speakers/_layout';
import * as SpeakersRoute from '../src/app/(tabs)/speakers/index';
import * as SpeakerDetailRoute from '../src/app/(tabs)/speakers/speaker/[speakerId]';
import * as SpeakerSessionRoute from '../src/app/(tabs)/speakers/session/[sessionId]';
import * as FilterRoute from '../src/app/filter';
import * as conferenceData from '../src/data/load-conference';
import { useConference } from '../src/state/conference-state';

const routes = {
  _layout: RootLayout,
  '(tabs)/_layout': TabsLayout,
  '(tabs)/(schedule)/_layout': ScheduleLayout,
  '(tabs)/(schedule)/index': ScheduleRoute,
  '(tabs)/(schedule)/session/[sessionId]': SessionRoute,
  '(tabs)/speakers/_layout': SpeakersLayout,
  '(tabs)/speakers/index': SpeakersRoute,
  '(tabs)/speakers/speaker/[speakerId]': SpeakerDetailRoute,
  '(tabs)/speakers/session/[sessionId]': SpeakerSessionRoute,
  filter: FilterRoute,
};

async function pressTab(name: 'Schedule' | 'Speakers') {
  await fireEvent.press(screen.getByRole('tab', { name }));
}

async function filterToFood() {
  await fireEvent.press(screen.getByRole('button', { name: 'Filter sessions' }));
  await fireEvent.press(screen.getByRole('button', { name: 'Deselect All' }));
  await fireEvent.press(screen.getByRole('checkbox', { name: 'Food' }));
  await fireEvent.press(screen.getByRole('button', { name: 'Done' }));
}

afterEach(() => jest.restoreAllMocks());

test('both labeled tabs are accessible tabs, with schedule at / and speakers at /speakers', async () => {
  const view = await renderRouter(routes, { initialUrl: '/' });
  await screen.findByTestId('session-1');
  expect(view.getPathname()).toBe('/');
  expect(screen.getByRole('tab', { name: 'Schedule' }).props.accessibilityState).toMatchObject({ selected: true });
  expect(screen.getByRole('tab', { name: 'Speakers' }).props.accessibilityState).toMatchObject({ selected: false });
  expect(screen.getAllByRole('tab')).toHaveLength(2);
  await pressTab('Speakers');
  expect(view.getPathname()).toBe('/speakers');
  expect(await screen.findByTestId('speaker-1')).toBeTruthy();
  expect(screen.getByRole('tab', { name: 'Speakers' }).props.accessibilityState).toMatchObject({ selected: true });
  await view.unmount();
});

test('tab switches retain search, favorites mode, one applied track and favorites in the single mounted provider', async () => {
  const load = jest.spyOn(conferenceData, 'loadConference');
  const profiles = jest.spyOn(conferenceData, 'loadSpeakerProfiles');
  const view = await renderRouter(routes, { initialUrl: '/' });
  await screen.findByTestId('session-1');
  // Add the real session via detail, avoiding an informational native alert.
  await fireEvent.press(screen.getByRole('link', { name: 'Breakfast' }));
  await fireEvent.press(screen.getByRole('button', { name: 'Add to favorites' }));
  await testRouter.back();
  await fireEvent.changeText(screen.getByLabelText('Search sessions'), 'break');
  await fireEvent.press(screen.getByTestId('mode-favorites'));
  await filterToFood();
  const search = screen.getByLabelText('Search sessions');
  await pressTab('Speakers');
  expect(view.getPathname()).toBe('/speakers');
  expect(screen.getAllByTestId(/^speaker-\d+$/)).toHaveLength(13);
  expect(screen.getAllByTestId(/^speaker-\d+-session-\d+$/)).toHaveLength(26);
  await pressTab('Schedule');
  expect(view.getPathname()).toBe('/');
  expect(screen.getByLabelText('Search sessions')).toBe(search);
  expect(screen.getByLabelText('Search sessions').props.value).toBe('break');
  expect(screen.getByTestId('mode-favorites').props.accessibilityState).toMatchObject({ selected: true });
  expect(screen.getByTestId('session-1')).toBeTruthy();
  await fireEvent.press(screen.getByRole('button', { name: 'Filter sessions' }));
  expect(screen.getAllByRole('checkbox').filter(row => row.props.accessibilityState.checked).map(row => row.props.accessibilityLabel)).toEqual(['Food']);
  await testRouter.back();
  expect(load).toHaveBeenCalledTimes(1);
  expect(profiles).toHaveBeenCalledTimes(1);
  await view.unmount();
});

test('Schedule stack stays on /session/3 across a Speakers round trip and Back returns to /', async () => {
  const view = await renderRouter(routes, { initialUrl: '/' });
  await screen.findByTestId('session-1');
  await fireEvent.press(screen.getByRole('link', { name: 'Ionic Tooling' }));
  expect(view.getPathname()).toBe('/session/3');
  await pressTab('Speakers');
  expect(view.getPathname()).toBe('/speakers');
  await pressTab('Schedule');
  expect(view.getPathname()).toBe('/session/3');
  expect(screen.getByRole('button', { name: 'Add to favorites' })).toBeTruthy();
  await testRouter.back();
  expect(view.getPathname()).toBe('/');
  expect(screen.getByRole('search', { name: 'Search sessions' })).toBeTruthy();
  await view.unmount();
});

test('filter is still the root modal at /filter and Done and Back return to the schedule', async () => {
  const view = await renderRouter(routes, { initialUrl: '/' });
  await screen.findByTestId('session-1');
  await fireEvent.press(screen.getByRole('button', { name: 'Filter sessions' }));
  expect(view.getPathname()).toBe('/filter');
  expect(screen.getByRole('header', { name: 'Tracks' })).toBeTruthy();
  const state = view.getRouterState();
  const rootStack = state?.routes[state.index ?? 0].state;
  expect(rootStack?.routes[rootStack.index ?? 0].name).toBe('filter');
  await fireEvent.press(screen.getByRole('button', { name: 'Done' }));
  expect(view.getPathname()).toBe('/');
  await fireEvent.press(screen.getByRole('button', { name: 'Filter sessions' }));
  await testRouter.back();
  expect(view.getPathname()).toBe('/');
  await view.unmount();
});

test('default firstRoute tab Back returns from Speakers root to Schedule', async () => {
  const view = await renderRouter(routes, { initialUrl: '/' });
  await screen.findByTestId('session-1');
  await pressTab('Speakers');
  await testRouter.back();
  expect(view.getPathname()).toBe('/');
  expect(screen.getByRole('tab', { name: 'Schedule' }).props.accessibilityState).toMatchObject({ selected: true });
  await view.unmount();
});
