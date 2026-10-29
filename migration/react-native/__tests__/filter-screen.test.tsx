import '../test-utils/gesture-test-setup';
import { router } from 'expo-router';
import { SectionList } from 'react-native';
import type { Fiber } from 'test-renderer';
import { act, fireEvent, renderRouter, screen, testRouter } from 'expo-router/testing-library';

import type { Conference } from '@migration/core';
import expectedCases from '../../reference/expected-cases.json';
import * as RootLayout from '../src/app/_layout';
import * as IndexRoute from '../src/app/(tabs)/(schedule)/index';
import * as FilterRoute from '../src/app/filter';
import * as DetailRoute from '../src/app/(tabs)/(schedule)/session/[sessionId]';
import * as TabsLayout from '../src/app/(tabs)/_layout';
import * as ScheduleLayout from '../src/app/(tabs)/(schedule)/_layout';
import * as SpeakersLayout from '../src/app/(tabs)/speakers/_layout';
import * as SpeakersRoute from '../src/app/(tabs)/speakers/index';
import * as conferenceData from '../src/data/load-conference';
import type { ConferenceLoader } from '../src/state/conference-state';

const conference = conferenceData.loadConference();
const routes = {
  _layout: RootLayout,
  '(tabs)/_layout': TabsLayout,
  '(tabs)/(schedule)/_layout': ScheduleLayout,
  '(tabs)/(schedule)/index': IndexRoute,
  '(tabs)/(schedule)/session/[sessionId]': DetailRoute,
  '(tabs)/speakers/_layout': SpeakersLayout,
  '(tabs)/speakers/index': SpeakersRoute,
  filter: FilterRoute,
};
const trackNames = [
  'Communication', 'Design', 'Documentation', 'Food', 'Ionic',
  'Navigation', 'Services', 'Tooling', 'Vue', 'Workshop',
];

function spyLoader() {
  return jest.spyOn(conferenceData, 'loadConference') as jest.SpyInstance<ReturnType<ConferenceLoader>, []>;
}

function sectionLists(): Fiber[] {
  // Start at a freshly queried schedule row host. The native ScrollView does
  // not expose a queryable list role here, and the retained navigator root can
  // point at an alternate tree. Walk to the real imported SectionList ancestor.
  let fiber = screen.queryAllByTestId(/^session-/)[0]?.unstable_fiber ?? null;
  const matches: Fiber[] = [];
  while (fiber !== null) {
    if (fiber.type === SectionList || fiber.elementType === SectionList) matches.push(fiber);
    fiber = fiber.return;
  }
  return matches;
}

// Observe the real current SectionList props, including all off-viewport rows.
function expectSchedule(caseId: string) {
  const expected = expectedCases.cases.find(({ id }) => id === caseId)!.expected;
  const lists = sectionLists();
  if (expected.sessionIds.length === 0) {
    expect(lists).toHaveLength(0);
    expect(screen.queryAllByTestId(/^session-/)).toHaveLength(0);
    return;
  }
  expect(lists).toHaveLength(1);
  const sections = lists[0].memoizedProps.sections as ReadonlyArray<{
    title: string; key: string; data: ReadonlyArray<{ id: number }>;
  }>;
  expect(sections.map(({ title, key, data }) => ({ title, key, sessionIds: data.map(({ id }) => id) }))).toEqual(
    expected.groups.map(({ groupTime, sessionIds }) => ({ title: groupTime, key: groupTime, sessionIds })),
  );
  expect(sections.flatMap(({ data }) => data.map(({ id }) => id))).toEqual(expected.sessionIds);
}

function expectDraft(selected: readonly string[]) {
  const rows = screen.getAllByRole('checkbox');
  expect(rows.map(row => row.props.accessibilityLabel)).toEqual(trackNames);
  for (const row of rows) {
    expect(row.props.accessibilityState).toEqual({ checked: selected.includes(row.props.accessibilityLabel) });
  }
}

async function press(name: string) {
  await fireEvent.press(screen.getByRole('button', { name }));
}

async function openFilter() {
  await press('Filter sessions');
  await screen.findByRole('header', { name: 'Tracks' });
}

async function selectOnly(names: readonly string[]) {
  await press('Deselect All');
  for (const name of names) await fireEvent.press(screen.getByRole('checkbox', { name }));
  expectDraft(names);
}

describe('filter modal with real Expo routes and shared root provider', () => {
  afterEach(() => jest.restoreAllMocks());

  test('opens from schedule with ten sorted, checked rows and labeled controls', async () => {
    const view = await renderRouter(routes, { initialUrl: '/' });
    await screen.findByTestId('session-1');
    await openFilter();
    expect(view.getPathname()).toBe('/filter');
    expectDraft(trackNames);
    for (const name of ['Reset', 'Deselect All', 'Select All', 'Done']) {
      expect(screen.getByRole('button', { name }).props.accessibilityState).toMatchObject({ disabled: false });
    }
    expect(screen.queryByRole('button', { name: 'Cancel' })).toBeNull();
    await view.unmount();
  });

  test.each(['toggle Ionic', 'Deselect All', 'Select All', 'Reset'])('%s changes only the local draft; closing leaves full schedule intact', async (operation) => {
    const loader = spyLoader().mockImplementation(() => conference);
    const view = await renderRouter(routes, { initialUrl: '/' });
    await screen.findByTestId('session-1');
    expectSchedule('default-all');
    await openFilter();
    if (operation === 'toggle Ionic') {
      await fireEvent.press(screen.getByRole('checkbox', { name: 'Ionic' }));
      expectDraft(trackNames.filter(name => name !== 'Ionic'));
    } else {
      if (operation === 'Select All') await press('Deselect All');
      await press(operation);
      expectDraft(operation === 'Select All' ? trackNames : []);
    }
    expect(view.getPathname()).toBe('/filter');
    await act(async () => { router.back(); });
    expect(view.getPathname()).toBe('/');
    expectSchedule('default-all');
    await openFilter();
    expectDraft(trackNames);
    expect(loader).toHaveBeenCalledTimes(1);
    await view.unmount();
  });

  test('Done applies only Ionic, matching every frozen single-track group and row', async () => {
    const loader = spyLoader().mockImplementation(() => conference);
    const view = await renderRouter(routes, { initialUrl: '/' });
    await screen.findByTestId('session-1');
    await openFilter();
    await selectOnly(['Ionic']);
    await press('Done');
    expect(view.getPathname()).toBe('/');
    expectSchedule('single-track');
    expect(screen.queryByTestId('session-3')).toBeNull();
    await openFilter();
    expectDraft(['Ionic']);
    await testRouter.back();
    expectSchedule('single-track');
    expect(loader).toHaveBeenCalledTimes(1);
    await view.unmount();
  });

  test('Ionic and Design intersect with search, which survives another apply', async () => {
    const view = await renderRouter(routes, { initialUrl: '/' });
    await screen.findByTestId('session-1');
    await openFilter();
    await selectOnly(['Ionic', 'Design']);
    await press('Done');
    await fireEvent.changeText(screen.getByLabelText('Search sessions'), 'Ionic');
    expectSchedule('search-plus-track');
    await openFilter();
    expectDraft(['Ionic', 'Design']);
    await press('Done');
    expect(screen.getByLabelText('Search sessions').props.value).toBe('Ionic');
    expectSchedule('search-plus-track');
    await view.unmount();
  });

  test('zero tracks applies the general empty state; reopening then Select All restores default-all', async () => {
    const loader = spyLoader().mockImplementation(() => conference);
    const view = await renderRouter(routes, { initialUrl: '/' });
    await screen.findByTestId('session-1');
    await openFilter();
    await press('Deselect All');
    await press('Done');
    expect(screen.getByText('No sessions match your search or filters.')).toBeTruthy();
    expectSchedule('no-tracks');
    await openFilter();
    expectDraft([]);
    await press('Select All');
    expectDraft(trackNames);
    await press('Done');
    expectSchedule('default-all');
    expect(screen.queryByText('No sessions match your search or filters.')).toBeNull();
    expect(loader).toHaveBeenCalledTimes(1);
    await view.unmount();
  });

  test('closing a changed draft dispatches nothing; reopening mirrors the applied Ionic selection', async () => {
    const view = await renderRouter(routes, { initialUrl: '/' });
    await screen.findByTestId('session-1');
    await openFilter();
    await selectOnly(['Ionic']);
    await press('Done');
    await openFilter();
    await selectOnly(['Food', 'Design']);
    await act(async () => { router.back(); });
    expectSchedule('single-track');
    await openFilter();
    expectDraft(['Ionic']);
    await view.unmount();
  });

  test('favorites 12 and 3 plus Food match favorites-some, preserving mode, search and favorites without reloading', async () => {
    const loader = spyLoader().mockImplementation(() => conference);
    const view = await renderRouter(routes, { initialUrl: '/' });
    await screen.findByTestId('session-1');
    for (const sessionId of [12, 3]) {
      await testRouter.push(`/session/${sessionId}`);
      await press('Add to favorites');
      await testRouter.back();
    }
    await press('Favorite sessions');
    const searchBefore = screen.getByLabelText('Search sessions');
    await openFilter();
    await selectOnly(['Food']);
    await press('Done');
    expect(screen.getByLabelText('Search sessions')).toBe(searchBefore);
    expect(screen.getByLabelText('Search sessions').props.value).toBe('');
    expect(screen.getByRole('button', { name: 'Favorite sessions' }).props.accessibilityState).toMatchObject({ selected: true });
    expectSchedule('favorites-some');
    // Restoring all tracks exposes both preserved favorites, not just Lunch.
    await openFilter();
    await press('Select All');
    await press('Done');
    const lists = sectionLists();
    expect(lists).toHaveLength(1);
    expect(lists[0].memoizedProps.sections.flatMap((section: { data: { id: number }[] }) => section.data.map(({ id }) => id))).toEqual([3, 12]);
    expect(loader).toHaveBeenCalledTimes(1);
    await view.unmount();
  });

  test('cold filter waits for readiness, initializes once, and Done remains disabled while loading', async () => {
    let resolve!: (value: Conference) => void;
    const pending = new Promise<Conference>(res => { resolve = res; });
    const loader = spyLoader().mockImplementation(() => pending);
    const view = await renderRouter(routes, { initialUrl: '/filter' });
    expect(screen.getByText('Loading sessions…')).toBeTruthy();
    expect(screen.getByRole('progressbar', { name: 'Loading sessions' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Done' }).props.accessibilityState).toMatchObject({ disabled: true });
    await press('Done');
    expect(view.getPathname()).toBe('/filter');
    await act(async () => { resolve(conference); });
    expectDraft(trackNames);
    await fireEvent.press(screen.getByRole('checkbox', { name: 'Ionic' }));
    expectDraft(trackNames.filter(name => name !== 'Ionic'));
    expect(loader).toHaveBeenCalledTimes(1);
    await view.unmount();
  });

  test('cold filter load error shows message and labeled Retry; recovery initializes the draft', async () => {
    const loader = spyLoader()
      .mockImplementationOnce(() => Promise.reject(new Error('filter-load-failed')))
      .mockImplementation(() => conference);
    const view = await renderRouter(routes, { initialUrl: '/filter' });
    expect(await screen.findByText('Unable to load sessions.')).toBeTruthy();
    expect(screen.getByText('filter-load-failed')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Done' }).props.accessibilityState).toMatchObject({ disabled: true });
    expect(screen.queryAllByRole('checkbox')).toHaveLength(0);
    await press('Retry');
    expectDraft(trackNames);
    expect(loader).toHaveBeenCalledTimes(2);
    await view.unmount();
  });
});
