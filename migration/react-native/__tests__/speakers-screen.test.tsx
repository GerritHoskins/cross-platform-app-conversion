/// <reference types="node" />
import '../test-utils/gesture-test-setup';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { act, fireEvent, render, screen, within } from '@testing-library/react-native';
import { StyleSheet, Text, useColorScheme } from 'react-native';
import * as ReactNative from 'react-native';
import type { Conference, SpeakerProfile } from '@migration/core';

import { loadConference, loadSpeakerProfiles } from '../src/data/load-conference';
import SpeakersScreen from '../src/screens/speakers-screen';
import { ConferenceProvider, useConference, type ConferenceContextValue } from '../src/state/conference-state';

type ExpectedSpeakers = {
  speakersSorted: { id: number; name: string; title: string }[];
  sessionsBySpeaker: { speakerId: number; sessionIds: number[]; sessionNames: string[] }[];
};
const fixtureBytes = readFileSync(path.join(__dirname, '../../reference/expected-speakers.json'));
const expected = JSON.parse(fixtureBytes.toString('utf8').replace(/^\uFEFF/, '')) as ExpectedSpeakers;

function deferred<T>() {
  let resolve!: (value: T) => void;
  const promise = new Promise<T>(res => { resolve = res; });
  return { promise, resolve };
}

function expectCards() {
  const cards = screen.getAllByTestId(/^speaker-\d+$/);
  expect(cards.map(card => Number(card.props.testID.slice('speaker-'.length)))).toEqual(expected.speakersSorted.map(({ id }) => id));
  let total = 0;
  for (const speaker of expected.speakersSorted) {
    const card = within(screen.getByTestId(`speaker-${speaker.id}`));
    expect(card.getByRole('header', { name: speaker.name })).toBeTruthy();
    expect(card.getByText(speaker.title)).toBeTruthy();
    const sessions = expected.sessionsBySpeaker.find(({ speakerId }) => speakerId === speaker.id)!;
    const rows = card.getAllByTestId(new RegExp(`^speaker-${speaker.id}-session-`));
    expect(rows.map(row => Number(row.props.testID.split('-session-')[1]))).toEqual(sessions.sessionIds);
    expect(rows.map(row => within(row).getByText(/./).props.children)).toEqual(sessions.sessionNames);
    const about = card.getByTestId(`speaker-${speaker.id}-about`);
    expect(within(about).getByText(`About ${speaker.name}`)).toBeTruthy();
    expect(card.getByRole('button', { name: speaker.name })).toBeTruthy();
    for (const name of sessions.sessionNames) expect(card.getByRole('button', { name })).toBeTruthy();
    expect(card.getByRole('button', { name: `About ${speaker.name}` })).toBeTruthy();
    total += rows.length;
  }
  expect(total).toBe(26);
  return cards.map(card => card.props.testID);
}

afterEach(() => jest.restoreAllMocks());

test('guards the frozen P02 fixture SHA-256', () => {
  expect(createHash('sha256').update(fixtureBytes).digest('hex')).toBe('421435b6a09720f72a346256270ae03c2dfbec9c720f8a016517f7538de9e29e');
});

test('renders all real bundled profiles, titles, ordered 26 session rows and About rows as navigation buttons with decorative photos', async () => {
  const view = await render(<ConferenceProvider><SpeakersScreen /></ConferenceProvider>);
  await screen.findByTestId('speaker-1');
  expectCards();
  expect(view.toJSON()).not.toBeNull();
  // No Image host is present; RN08 deliberately renders only read-only text cards.
  expect(screen.queryAllByRole('image')).toHaveLength(0);
  await view.unmount();
});

test('waits for both loaders with the schedule loading wording', async () => {
  const conference = deferred<Conference>();
  const profiles = deferred<SpeakerProfile[]>();
  const loader = jest.fn(() => conference.promise);
  const speakerProfilesLoader = jest.fn(() => profiles.promise);
  const view = await render(<ConferenceProvider loader={loader} speakerProfilesLoader={speakerProfilesLoader}><SpeakersScreen /></ConferenceProvider>);
  expect(screen.getByText('Loading sessions…')).toBeTruthy();
  expect(screen.getByRole('progressbar', { name: 'Loading sessions' })).toBeTruthy();
  await act(async () => { conference.resolve(loadConference()); });
  expect(screen.getByText('Loading sessions…')).toBeTruthy();
  expect(screen.queryAllByTestId(/^speaker-\d+$/)).toHaveLength(0);
  await act(async () => { profiles.resolve(loadSpeakerProfiles()); });
  expectCards();
  expect(loader).toHaveBeenCalledTimes(1);
  expect(speakerProfilesLoader).toHaveBeenCalledTimes(1);
  await view.unmount();
});

test.each(['conference throws', 'profiles throw', 'profiles reject'])('%s uses the schedule error wording and provider Retry recovers', async (kind) => {
  const failure = () => { throw new Error('speaker-load-failed'); };
  const loader = jest.fn(loadConference);
  const profiles = jest.fn<ReturnType<() => SpeakerProfile[] | Promise<SpeakerProfile[]>>, []>(loadSpeakerProfiles);
  if (kind === 'conference throws') loader.mockImplementationOnce(failure);
  else if (kind === 'profiles throw') profiles.mockImplementationOnce(failure);
  else profiles.mockImplementationOnce(() => Promise.reject(new Error('speaker-load-failed')));
  const view = await render(<ConferenceProvider loader={loader} speakerProfilesLoader={profiles}><SpeakersScreen /></ConferenceProvider>);
  expect(await screen.findByText('Unable to load sessions.')).toBeTruthy();
  expect(screen.getByText('speaker-load-failed')).toBeTruthy();
  expect(screen.queryAllByTestId(/^speaker-\d+$/)).toHaveLength(0);
  await fireEvent.press(screen.getByRole('button', { name: 'Retry' }));
  await screen.findByTestId('speaker-1');
  expectCards();
  expect(screen.queryByText('Unable to load sessions.')).toBeNull();
  expect(loader).toHaveBeenCalledTimes(2);
  expect(profiles).toHaveBeenCalledTimes(2);
  await view.unmount();
});

test('schedule search, favorites mode, one track and favorites do not filter speakers or their sessions', async () => {
  let context!: ConferenceContextValue;
  function Probe() {
    context = useConference();
    return <Text>{context.state.selection?.mode}</Text>;
  }
  const view = await render(<ConferenceProvider><SpeakersScreen /><Probe /></ConferenceProvider>);
  await screen.findByTestId('speaker-1');
  const before = expectCards();
  await act(async () => {
    context.dispatch({ type: 'setSearchText', searchText: 'break' });
    context.dispatch({ type: 'favoriteAdded', sessionId: 1 });
    context.dispatch({ type: 'setMode', mode: 'favorites' });
    context.dispatch({ type: 'setSelectedTracks', selectedTracks: ['Food'] });
  });
  expect(context.groups.flatMap(group => group.sessions.map(session => session.id))).toEqual([1]);
  expect(expectCards()).toEqual(before);
  await view.unmount();
});

test('a superseded profile completion cannot replace a successful retry', async () => {
  const stale = deferred<SpeakerProfile[]>();
  const loader = jest.fn(loadSpeakerProfiles).mockImplementationOnce(() => stale.promise as never);
  let context!: ConferenceContextValue;
  function Probe() { context = useConference(); return null; }
  const view = await render(<ConferenceProvider speakerProfilesLoader={loader}><SpeakersScreen /><Probe /></ConferenceProvider>);
  await act(async () => { context.retry(); });
  await screen.findByTestId('speaker-1');
  await act(async () => { stale.resolve([{ id: 100, name: 'Stale', title: '', about: '', profilePic: '' }]); });
  expectCards();
  expect(screen.queryByText('Stale')).toBeNull();
  await view.unmount();
});

test.each(['light', 'dark'] as const)('%s palette uses scalable text without fixed card or row heights', async (scheme) => {
  jest.spyOn(ReactNative, 'useColorScheme').mockReturnValue(scheme);
  const view = await render(<ConferenceProvider><SpeakersScreen /></ConferenceProvider>);
  await screen.findByTestId('speaker-1');
  const card = screen.getByTestId('speaker-1');
  expect(StyleSheet.flatten(card.props.style)).toMatchObject({ backgroundColor: scheme === 'dark' ? '#1c1c22' : '#ffffff' });
  for (const row of [card, ...screen.getAllByTestId(/^speaker-\d+-(session-\d+|about)$/)]) {
    expect(StyleSheet.flatten(row.props.style).height).toBeUndefined();
  }
  const heading = screen.getByRole('header', { name: 'Burt Bear' });
  expect(heading.props.allowFontScaling).not.toBe(false);
  expect(StyleSheet.flatten(heading.props.style).color).toBe(scheme === 'dark' ? '#f2f2f5' : '#111114');
  await view.unmount();
});
