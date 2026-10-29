import '../test-utils/gesture-test-setup';
import { Alert } from 'react-native';
import {
  act,
  fireEvent,
  renderRouter,
  screen,
  testRouter,
} from 'expo-router/testing-library';

import type { Conference } from '@migration/core';

import * as RootLayout from '../src/app/_layout';
import * as IndexRoute from '../src/app/index';
import * as DetailRoute from '../src/app/session/[sessionId]';
import * as conferenceData from '../src/data/load-conference';
import { ConferenceProvider, type ConferenceLoader } from '../src/state/conference-state';
import SessionDetailScreen from '../src/screens/session-detail-screen';
import { render } from '@testing-library/react-native';

const conference = conferenceData.loadConference();
const known = conference.sessions.find(({ id }) => id === 3)!;
const routes = { _layout: RootLayout, index: IndexRoute, 'session/[sessionId]': DetailRoute };

function deferredConference() {
  let resolve!: (value: Conference) => void;
  const promise = new Promise<Conference>((res) => { resolve = res; });
  return { promise, resolve };
}

// The provider accepts sync or async loaders; the bundled loader itself is sync.
function spyLoader() {
  return jest.spyOn(conferenceData, 'loadConference') as jest.SpyInstance<ReturnType<ConferenceLoader>, []>;
}

describe('session detail with real Expo routes and root provider', () => {
  afterEach(() => jest.restoreAllMocks());

  test('cold entry shows loading before data, then complete session content, loading only once', async () => {
    const pending = deferredConference();
    const loader = spyLoader().mockImplementation(() => pending.promise);
    const view = await renderRouter(routes, { initialUrl: '/session/3' });
    expect(screen.getByText('Loading session…')).toBeTruthy();
    expect(screen.getByRole('progressbar', { name: 'Loading session' })).toBeTruthy();
    expect(screen.queryByText('Session not found.')).toBeNull();
    await act(async () => { pending.resolve(conference); });
    expect(await screen.findByRole('header', { name: known.name })).toBeTruthy();
    expect(screen.getByText(`${known.timeStart} – ${known.timeEnd}`)).toBeTruthy();
    expect(screen.getByText(known.location)).toBeTruthy();
    expect(screen.getByText(known.tracks.join(', '))).toBeTruthy();
    if (known.description) expect(screen.getByText(known.description)).toBeTruthy();
    expect(view.getPathname()).toBe('/session/3');
    expect(loader).toHaveBeenCalledTimes(1);
    await view.unmount();
  });

  test.each(['9999', 'abc', '3abc'])('unknown route ID %s disables the toggle and cannot favorite', async (id) => {
    const alert = jest.spyOn(Alert, 'alert');
    const view = await renderRouter(routes, { initialUrl: `/session/${id}` });
    await screen.findByText('Session not found.');
    const toggle = screen.getByRole('button', { name: 'Add to favorites' });
    expect(toggle.props.accessibilityState).toMatchObject({ disabled: true, selected: false });
    await fireEvent.press(toggle);
    expect(toggle.props.accessibilityState).toMatchObject({ disabled: true, selected: false });
    expect(screen.queryByRole('header', { name: known.name })).toBeNull();
    expect(alert).not.toHaveBeenCalled();
    await testRouter.back();
    expect(view.getPathname()).toBe('/');
    await fireEvent.press(screen.getByTestId('mode-favorites'));
    expect(screen.getByText('No favorite sessions.')).toBeTruthy();
    await view.unmount();
  });

  test('detail toggle adds/removes immediately with selected state and no alert; placeholders disabled', async () => {
    const alert = jest.spyOn(Alert, 'alert');
    const view = await renderRouter(routes, { initialUrl: '/session/3' });
    await screen.findByRole('header', { name: known.name });
    expect(screen.getByRole('button', { name: 'Add to favorites' }).props.accessibilityState).toMatchObject({ selected: false, disabled: false });
    await fireEvent.press(screen.getByRole('button', { name: 'Add to favorites' }));
    expect(screen.getByRole('button', { name: 'Remove from favorites' }).props.accessibilityState).toMatchObject({ selected: true, disabled: false });
    await fireEvent.press(screen.getByRole('button', { name: 'Remove from favorites' }));
    expect(screen.getByRole('button', { name: 'Add to favorites' }).props.accessibilityState).toMatchObject({ selected: false });
    expect(alert).not.toHaveBeenCalled();
    for (const name of ['Share', 'Watch', 'Add to Calendar', 'Mark as Unwatched', 'Download Video', 'Leave Feedback']) {
      const button = screen.getByRole('button', { name });
      expect(button.props.accessibilityState).toMatchObject({ disabled: true });
      expect(button.props.onPress).toBeUndefined();
    }
    await view.unmount();
  });

  test('schedule → detail → back preserves the mounted search/mode and reflects changed favorites without reloading', async () => {
    const loader = spyLoader().mockImplementation(() => conference);
    jest.spyOn(Alert, 'alert');
    const view = await renderRouter(routes, { initialUrl: '/' });
    await screen.findByTestId('session-1');
    await fireEvent.changeText(screen.getByLabelText('Search sessions'), 'break');
    await fireEvent.press(screen.getByRole('button', { name: 'Favorite Breakfast' }));
    await fireEvent.press(screen.getByTestId('mode-favorites'));
    const searchBefore = screen.getByLabelText('Search sessions');
    await fireEvent.press(screen.getByRole('link', { name: 'Breakfast' }));
    expect(view.getPathname()).toBe('/session/1');
    await fireEvent.press(screen.getByRole('button', { name: 'Remove from favorites' }));
    await testRouter.back();
    expect(view.getPathname()).toBe('/');
    expect(screen.getByLabelText('Search sessions')).toBe(searchBefore);
    expect(screen.getByLabelText('Search sessions').props.value).toBe('break');
    expect(screen.getByTestId('mode-favorites').props.accessibilityState).toMatchObject({ selected: true });
    expect(screen.getByText('No favorite sessions.')).toBeTruthy();
    expect(screen.queryByTestId('session-1')).toBeNull();
    expect(loader).toHaveBeenCalledTimes(1);
    await view.unmount();
  });

  test('cold detail entry has schedule beneath it and back lands there without another load', async () => {
    const loader = spyLoader().mockImplementation(() => conference);
    const view = await renderRouter(routes, { initialUrl: '/session/3' });
    await screen.findByRole('header', { name: known.name });
    expect(testRouter.canGoBack()).toBe(true);
    await testRouter.back();
    expect(view.getPathname()).toBe('/');
    expect(screen.getByRole('search', { name: 'Search sessions' })).toBeTruthy();
    expect(screen.getByTestId('session-1')).toBeTruthy();
    expect(loader).toHaveBeenCalledTimes(1);
    await view.unmount();
  });

  test('cold entry loader rejection shows error, not not-found; Retry recovers', async () => {
    const loader = spyLoader()
      .mockImplementationOnce(() => Promise.reject(new Error('detail-load-failed')))
      .mockImplementation(() => conference);
    const view = await renderRouter(routes, { initialUrl: '/session/3' });
    await screen.findByText('Unable to load sessions.');
    expect(screen.getByText('detail-load-failed')).toBeTruthy();
    expect(screen.queryByText('Session not found.')).toBeNull();
    await fireEvent.press(screen.getByRole('button', { name: 'Retry' }));
    await screen.findByRole('header', { name: known.name });
    expect(screen.queryByText('Unable to load sessions.')).toBeNull();
    expect(loader).toHaveBeenCalledTimes(2);
    await view.unmount();
  });
});

describe('raw detail ID validation independent of navigator', () => {
  test.each(['', '-1', '3.0', ' 3', '３', '3\n'])('rejects non-ASCII-decimal raw ID %j', async (sessionId) => {
    const view = await render(<ConferenceProvider><SessionDetailScreen sessionId={sessionId} /></ConferenceProvider>);
    await screen.findByText('Session not found.');
    expect(screen.getByRole('button', { name: 'Add to favorites' }).props.accessibilityState).toMatchObject({ disabled: true });
    await view.unmount();
  });

  test('decimal digits with leading zeros resolve; empty description paragraph is omitted', async () => {
    const emptyDescription: Conference = { ...conference, sessions: conference.sessions.map((session) => session.id === 3 ? { ...session, description: '' } : session) };
    const loader = () => emptyDescription;
    const view = await render(<ConferenceProvider loader={loader}><SessionDetailScreen sessionId="003" /></ConferenceProvider>);
    await screen.findByRole('header', { name: known.name });
    if (known.description) expect(screen.queryByText(known.description)).toBeNull();
    expect(screen.getByText(`${known.timeStart} – ${known.timeEnd}`)).toBeTruthy();
    await view.unmount();
  });
});
