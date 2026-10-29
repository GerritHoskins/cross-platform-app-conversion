/// <reference types="node" />
jest.mock('react-native/Libraries/Utilities/Platform', () =>
  jest.requireActual('react-native/Libraries/Utilities/Platform.android'));

import '../test-utils/gesture-test-setup';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { act, fireEvent, renderRouter, screen, testRouter } from 'expo-router/testing-library';
import { render, within } from '@testing-library/react-native';
import { StyleSheet } from 'react-native';
import type { SpeakerProfile } from '@migration/core';

import * as RootLayout from '../src/app/_layout';
import * as TabsLayout from '../src/app/(tabs)/_layout';
import * as ScheduleLayout from '../src/app/(tabs)/(schedule)/_layout';
import * as ScheduleRoute from '../src/app/(tabs)/(schedule)/index';
import * as ScheduleSessionRoute from '../src/app/(tabs)/(schedule)/session/[sessionId]';
import * as SpeakersLayout from '../src/app/(tabs)/speakers/_layout';
import * as SpeakersRoute from '../src/app/(tabs)/speakers/index';
import * as SpeakerRoute from '../src/app/(tabs)/speakers/speaker/[speakerId]';
import * as SpeakerSessionRoute from '../src/app/(tabs)/speakers/session/[sessionId]';
import * as FilterRoute from '../src/app/filter';
import * as conferenceData from '../src/data/load-conference';
import SpeakerDetailScreen from '../src/screens/speaker-detail-screen';
import { speakerPhoto } from '../src/data/speaker-photos';
import { ConferenceProvider } from '../src/state/conference-state';

type Expected = {
  speakerDetails: SpeakerProfile[];
  sessionsBySpeaker: { speakerId: number; sessionIds: number[]; sessionNames: string[] }[];
  unknownSpeakerIds: { input: string }[];
};
const expected = JSON.parse(readFileSync(path.join(__dirname, '../../reference/expected-speakers.json'), 'utf8').replace(/^\uFEFF/, '')) as Expected;
const routes = {
  _layout: RootLayout,
  '(tabs)/_layout': TabsLayout,
  '(tabs)/(schedule)/_layout': ScheduleLayout,
  '(tabs)/(schedule)/index': ScheduleRoute,
  '(tabs)/(schedule)/session/[sessionId]': ScheduleSessionRoute,
  '(tabs)/speakers/_layout': SpeakersLayout,
  '(tabs)/speakers/index': SpeakersRoute,
  '(tabs)/speakers/speaker/[speakerId]': SpeakerRoute,
  '(tabs)/speakers/session/[sessionId]': SpeakerSessionRoute,
  filter: FilterRoute,
};
const known = expected.speakerDetails.find(s => s.id === 4)!;

function expectProfile(speaker: SpeakerProfile) {
  expect(screen.getByRole('header', { name: speaker.name })).toBeTruthy();
  expect(screen.getByText(speaker.title)).toBeTruthy();
  expect(screen.getByText(speaker.about)).toBeTruthy();
  expect(screen.getByRole('image', { name: `Profile photo of ${speaker.name}` }).props.source).toEqual(speakerPhoto(speaker.profilePic));
  expect(screen.queryByText(/Say hello on social media!/i)).toBeNull();
  for (const name of ['Contact', 'Share', 'Twitter', 'GitHub', 'Instagram', 'Email', 'Call']) {
    expect(screen.queryByRole('button', { name: new RegExp(name, 'i') })).toBeNull();
    expect(screen.queryByRole('link', { name: new RegExp(name, 'i') })).toBeNull();
  }
  expect(screen.queryByText('Speaker not found.')).toBeNull();
}

async function expectNotFoundAndBack(view: Awaited<ReturnType<typeof renderRouter>>) {
  await screen.findByText('Speaker not found.');
  expect(screen.getByText('Return to Speakers and choose a speaker.')).toBeTruthy();
  for (const speaker of expected.speakerDetails) {
    expect(screen.queryByRole('header', { name: speaker.name })).toBeNull();
    expect(screen.queryByText(speaker.about)).toBeNull();
  }
  expect(screen.queryAllByRole('image')).toHaveLength(0);
  expect(screen.queryByText('Loading sessions…')).toBeNull();
  expect(testRouter.canGoBack()).toBe(true);
  await testRouter.back();
  expect(view.getPathname()).toBe('/speakers');
  expect(await screen.findByTestId('speaker-1')).toBeTruthy();
  await view.unmount();
}

afterEach(() => jest.restoreAllMocks());

// A1: every real list button is pressed; no router, navigator or onPress mock.
test.each(expected.speakerDetails)('header and About buttons for $name navigate to its full profile and Back to Speakers', async speaker => {
  const view = await renderRouter(routes, { initialUrl: '/speakers' });
  await screen.findByTestId(`speaker-${speaker.id}`);
  const card = screen.getByTestId(`speaker-${speaker.id}`);
  const decorative = screen.getAllByTestId(/^speaker-photo-\d+$/, { includeHiddenElements: true });
  expect(decorative).toHaveLength(13);
  for (const image of decorative) {
    expect(image.props.accessible).toBe(false);
    expect(image.props.importantForAccessibility).toBe('no-hide-descendants');
  }
  expect(within(card).queryAllByRole('image')).toHaveLength(0);
  for (const label of [speaker.name, `About ${speaker.name}`]) {
    await fireEvent.press(within(screen.getByTestId(`speaker-${speaker.id}`)).getByRole('button', { name: label }));
    expect(view.getPathname()).toBe(`/speakers/speaker/${speaker.id}`);
    expectProfile(speaker);
    await testRouter.back();
    expect(view.getPathname()).toBe('/speakers');
  }
  await view.unmount();
});

const sessionRows = expected.sessionsBySpeaker.flatMap(s => s.sessionIds.map((id, index) => ({ speakerId: s.speakerId, id, name: s.sessionNames[index] })));
test.each(sessionRows)('speaker $speakerId session $id button opens the reused session detail and Back to Speakers', async row => {
  const view = await renderRouter(routes, { initialUrl: '/speakers' });
  await screen.findByTestId(`speaker-${row.speakerId}`);
  const button = within(screen.getByTestId(`speaker-${row.speakerId}`)).getByRole('button', { name: row.name });
  await fireEvent.press(button);
  expect(view.getPathname()).toBe(`/speakers/session/${row.id}`);
  const session = conferenceData.loadConference().sessions.find(s => s.id === row.id)!;
  expect(screen.getByRole('header', { name: session.name })).toBeTruthy();
  expect(screen.getByText(`${session.timeStart} – ${session.timeEnd}`)).toBeTruthy();
  expect(screen.getByText(session.location)).toBeTruthy();
  if (session.description) expect(screen.getByText(session.description)).toBeTruthy();
  expect(screen.getByRole('button', { name: 'Add to favorites' })).toBeTruthy();
  await testRouter.back();
  expect(view.getPathname()).toBe('/speakers');
  await view.unmount();
});

test('cold /speakers/speaker/4 shows complete profile, labeled photo, no social actions and Back to Speakers', async () => {
  const view = await renderRouter(routes, { initialUrl: '/speakers/speaker/4' });
  await screen.findByRole('header', { name: known.name });
  expectProfile(known);
  expect(screen.getByRole('image', { name: `Profile photo of ${known.name}` }).props.accessible).toBe(true);
  expect(screen.getByRole('header', { name: known.name }).props.allowFontScaling).not.toBe(false);
  expect(StyleSheet.flatten(screen.getByRole('header', { name: known.name }).props.style).height).toBeUndefined();
  await testRouter.back();
  expect(view.getPathname()).toBe('/speakers');
  await view.unmount();
});

test('cold /speakers/session/3 reuses session detail and Back goes to Speakers rather than Schedule', async () => {
  const view = await renderRouter(routes, { initialUrl: '/speakers/session/3' });
  await screen.findByRole('header', { name: 'Ionic Tooling' });
  expect(screen.getByRole('button', { name: 'Add to favorites' })).toBeTruthy();
  await testRouter.back();
  expect(view.getPathname()).toBe('/speakers');
  await view.unmount();
});

test.each(expected.unknownSpeakerIds.filter(({ input }) => input !== ''))('cold URL-encoded P02 input $input is explicit not-found with working Speakers Back', async ({ input }) => {
  const view = await renderRouter(routes, { initialUrl: `/speakers/speaker/${encodeURIComponent(input)}` });
  await expectNotFoundAndBack(view);
});

test.each([
  { label: 'empty P02 string (URL cannot carry an empty dynamic segment)', input: '' },
  { label: 'undefined (URL cannot carry a missing parameter)', input: undefined },
  { label: 'array (malformed; do not pick its first element)', input: ['4', '1'] },
  { label: 'trailing newline (raw input independent of URL transport)', input: '4\n' },
])('direct detail param: $label; real cold stack still Backs to Speakers', async ({ input }) => {
  const directRoutes = { ...routes, '(tabs)/speakers/speaker/[speakerId]': { ...SpeakerRoute, default: () => <SpeakerDetailScreen speakerId={input} /> } };
  const view = await renderRouter(directRoutes, { initialUrl: '/speakers/speaker/invalid' });
  await expectNotFoundAndBack(view);
});

test('raw param changes clear the previous speaker instead of showing stale fields or photo', async () => {
  const view = await render(<ConferenceProvider><SpeakerDetailScreen speakerId="4" /></ConferenceProvider>);
  await screen.findByRole('header', { name: known.name });
  await view.rerender(<ConferenceProvider><SpeakerDetailScreen speakerId={['4']} /></ConferenceProvider>);
  expect(screen.getByText('Speaker not found.')).toBeTruthy();
  expect(screen.queryByRole('header', { name: known.name })).toBeNull();
  expect(screen.queryByText(known.about)).toBeNull();
  expect(screen.queryAllByRole('image')).toHaveLength(0);
  await view.unmount();
});

test('cold speaker entry waits for profiles and conference, then resolves only after ready', async () => {
  let resolve!: (profiles: SpeakerProfile[]) => void;
  const pending = new Promise<SpeakerProfile[]>(res => { resolve = res; });
  jest.spyOn(conferenceData, 'loadSpeakerProfiles').mockImplementation(() => pending as never);
  const view = await renderRouter(routes, { initialUrl: '/speakers/speaker/4' });
  expect(screen.getByRole('progressbar', { name: 'Loading sessions' })).toBeTruthy();
  expect(screen.getByText('Loading sessions…')).toBeTruthy();
  expect(screen.queryByText('Speaker not found.')).toBeNull();
  expect(screen.queryAllByRole('image')).toHaveLength(0);
  await act(async () => { resolve(expected.speakerDetails); });
  expectProfile(known);
  await view.unmount();
});

test.each(['conference', 'profiles'])('cold speaker %s failure shows error not not-found; Retry recovers', async kind => {
  const name = kind === 'conference' ? 'loadConference' : 'loadSpeakerProfiles';
  const loader = jest.spyOn(conferenceData, name).mockImplementationOnce(() => { throw new Error('speaker-detail-load-failed'); });
  const view = await renderRouter(routes, { initialUrl: '/speakers/speaker/4' });
  await screen.findByText('Unable to load sessions.');
  expect(screen.getByText('speaker-detail-load-failed')).toBeTruthy();
  expect(screen.queryByText('Speaker not found.')).toBeNull();
  expect(screen.queryAllByRole('image')).toHaveLength(0);
  await fireEvent.press(screen.getByRole('button', { name: 'Retry' }));
  await screen.findByRole('header', { name: known.name });
  expectProfile(known);
  expect(loader).toHaveBeenCalledTimes(2);
  await view.unmount();
});

test.each(['', '/unknown.jpg'])('defensive missing photo URI %j renders text with no image or network fallback', async uri => {
  const loader = () => [{ ...known, profilePic: uri, title: '', about: '' }];
  const view = await render(<ConferenceProvider speakerProfilesLoader={loader}><SpeakerDetailScreen speakerId="4" /></ConferenceProvider>);
  await screen.findByRole('header', { name: known.name });
  expect(screen.queryAllByRole('image')).toHaveLength(0);
  expect(screen.queryByText('Loading biography…')).toBeNull();
  await view.unmount();
});

test('Speakers session favorite is shared while Schedule search, mode, tracks and both stacks persist', async () => {
  const view = await renderRouter(routes, { initialUrl: '/' });
  await screen.findByTestId('session-3');
  await fireEvent.changeText(screen.getByLabelText('Search sessions'), 'tool');
  await fireEvent.press(screen.getByTestId('mode-favorites'));
  await fireEvent.press(screen.getByRole('button', { name: 'Filter sessions' }));
  await fireEvent.press(screen.getByRole('button', { name: 'Deselect All' }));
  await fireEvent.press(screen.getByRole('checkbox', { name: 'Tooling' }));
  await fireEvent.press(screen.getByRole('button', { name: 'Done' }));
  const search = screen.getByLabelText('Search sessions');
  await fireEvent.press(screen.getByRole('tab', { name: 'Speakers' }));
  await fireEvent.press(within(screen.getByTestId('speaker-12')).getByRole('button', { name: 'Ionic Tooling' }));
  expect(view.getPathname()).toBe('/speakers/session/3');
  await fireEvent.press(screen.getByRole('button', { name: 'Add to favorites' }));
  await fireEvent.press(screen.getByRole('tab', { name: 'Schedule' }));
  expect(view.getPathname()).toBe('/');
  expect(screen.getByLabelText('Search sessions')).toBe(search);
  expect(search.props.value).toBe('tool');
  expect(screen.getByTestId('mode-favorites').props.accessibilityState).toMatchObject({ selected: true });
  expect(screen.getByTestId('session-3')).toBeTruthy();
  expect(screen.getAllByTestId(/^session-\d+$/)).toHaveLength(1);
  await fireEvent.press(screen.getByRole('button', { name: 'Filter sessions' }));
  expect(screen.getAllByRole('checkbox').filter(row => row.props.accessibilityState.checked).map(row => row.props.accessibilityLabel)).toEqual(['Tooling']);
  await fireEvent.press(screen.getByRole('button', { name: 'Done' }));
  await fireEvent.press(screen.getByRole('tab', { name: 'Speakers' }));
  expect(view.getPathname()).toBe('/speakers/session/3');
  expect(screen.getByRole('button', { name: 'Remove from favorites' }).props.accessibilityState).toMatchObject({ selected: true });
  await testRouter.back();
  expect(view.getPathname()).toBe('/speakers');
  await view.unmount();
});
