import { Pressable, SectionList, Text } from 'react-native';
import type { Fiber } from 'test-renderer';

import type { Conference } from '@migration/core';
import expectedCases from '../../reference/expected-cases.json';

import { act, fireEvent, render, screen } from '@testing-library/react-native';

import { loadConference } from '../src/data/load-conference';
import { ConferenceProvider, useConference } from '../src/state/conference-state';
import ScheduleScreen from '../src/screens/schedule-screen';

function createDeferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (reason?: unknown) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

function makeConference(firstId: number, firstName: string): Conference {
  return {
    date: '2026-01-15',
    sessions: [
      {
        id: firstId,
        name: firstName,
        timeStart: '9:00 am',
        timeEnd: '10:00 am',
        startMinutes: 540,
        endMinutes: 600,
        location: 'Hall A',
        description: 'test session one',
        tracks: ['Services'],
        speakerIds: [1],
        groupTime: '9:00 am',
      },
      {
        id: firstId + 1,
        name: `${firstName} two`,
        timeStart: '10:00 am',
        timeEnd: '11:00 am',
        startMinutes: 600,
        endMinutes: 660,
        location: 'Room B',
        description: 'test session two',
        tracks: ['Services'],
        speakerIds: [],
        groupTime: '10:00 am',
      },
    ],
    tracks: [{ name: 'Services', icon: 'svc' }],
    speakers: [{ id: 1, name: 'Ada' }],
  };
}

// Test-only control that lets a mounted provider be retried through the UI.
function TestRetryControl() {
  const { retry } = useConference();
  return (
    <Pressable accessibilityLabel="test-retry" testID="test-retry" onPress={retry}>
      <Text>test-retry</Text>
    </Pressable>
  );
}

describe('ScheduleScreen lifecycle (provider-driven)', () => {
  test('pending loader shows loading, controls disabled; resolution shows the ready schedule', async () => {
    const conference = loadConference();
    const deferred = createDeferred<Conference>();
    let loaderCalls = 0;
    const loader = () => {
      loaderCalls += 1;
      return deferred.promise;
    };

    const view = await render(
      <ConferenceProvider loader={loader}>
        <ScheduleScreen />
      </ConferenceProvider>,
    );

    expect(screen.getByText('Loading sessions…')).toBeTruthy();
    expect(screen.getByLabelText('Search sessions').props.editable).toBe(false);
    expect(screen.getByLabelText('Search sessions').props.accessibilityState).toMatchObject({ disabled: true });
    expect(screen.getByTestId('mode-all').props.accessibilityState).toMatchObject({ disabled: true });
    expect(screen.getByTestId('mode-favorites').props.accessibilityState).toMatchObject({ disabled: true });
    expect(screen.queryByTestId('session-1')).toBeNull();

    await act(async () => {
      deferred.resolve(conference);
    });

    await screen.findByText('Breakfast');
    expect(screen.getByTestId('session-1')).toBeTruthy();
    expect(screen.getByLabelText('Search sessions').props.editable).toBe(true);
    expect(screen.getByTestId('mode-all').props.accessibilityState).toMatchObject({ selected: true, disabled: false });
    expect(screen.getByTestId('mode-favorites').props.accessibilityState).toMatchObject({ selected: false, disabled: false });
    expect(screen.queryByText('Loading sessions…')).toBeNull();
    expect(loaderCalls).toBe(1);
    await view.unmount();
  });

  test('a synchronously throwing loader shows the error UI and retry recovers', async () => {
    const conference = loadConference();
    let loaderCalls = 0;
    const loader = () => {
      loaderCalls += 1;
      if (loaderCalls === 1) {
        throw new Error('sync-boom');
      }
      return conference;
    };

    const view = await render(
      <ConferenceProvider loader={loader}>
        <ScheduleScreen />
        <TestRetryControl />
      </ConferenceProvider>,
    );

    await screen.findByText('Unable to load sessions.');
    expect(screen.getByText('sync-boom')).toBeTruthy();
    expect(screen.queryByText('Loading sessions…')).toBeNull();
    expect(screen.queryByTestId('session-1')).toBeNull();

    await fireEvent.press(screen.getByLabelText('Retry'));
    await screen.findByText('Breakfast');
    expect(screen.getByTestId('session-1')).toBeTruthy();
    expect(screen.queryByText('Unable to load sessions.')).toBeNull();
    expect(screen.queryByText('sync-boom')).toBeNull();
    expect(loaderCalls).toBe(2);
    await view.unmount();
  });

  test('a rejected loader promise shows the error UI and retry recovers', async () => {
    const conference = loadConference();
    let loaderCalls = 0;
    const loader = () => {
      loaderCalls += 1;
      if (loaderCalls === 1) {
        return Promise.reject(new Error('async-boom'));
      }
      return conference;
    };

    const view = await render(
      <ConferenceProvider loader={loader}>
        <ScheduleScreen />
        <TestRetryControl />
      </ConferenceProvider>,
    );

    await screen.findByText('Unable to load sessions.');
    expect(screen.getByText('async-boom')).toBeTruthy();
    expect(screen.queryByTestId('session-1')).toBeNull();

    await fireEvent.press(screen.getByLabelText('Retry'));
    await screen.findByText('Breakfast');
    expect(screen.queryByText('Unable to load sessions.')).toBeNull();
    expect(screen.queryByText('async-boom')).toBeNull();
    expect(loaderCalls).toBe(2);
    await view.unmount();
  });

  test('a stale first completion never overwrites a later retry result', async () => {
    const real = makeConference(101, 'Keynote');
    const stale = makeConference(999, 'STALE-FAKE');
    const pendingStale = createDeferred<Conference>();
    let loaderCalls = 0;
    const loader = () => {
      loaderCalls += 1;
      return loaderCalls === 1 ? pendingStale.promise : real;
    };

    const view = await render(
      <ConferenceProvider loader={loader}>
        <ScheduleScreen />
        <TestRetryControl />
      </ConferenceProvider>,
    );

    await screen.findByText('Loading sessions…');

    // Retry (provider API) while the first request is still in flight;
    // the second request completes with the real data.
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    await fireEvent.press(screen.getByLabelText('test-retry'));
    await screen.findByTestId('session-101');
    expect(screen.getByTestId('session-101')).toBeTruthy();

    // The superseded first request resolves later and must be ignored.
    await act(async () => {
      pendingStale.resolve(stale);
    });
    await act(async () => {
      // Flush microtasks so any (incorrect) dispatch would land.
      await Promise.resolve();
    });

    expect(consoleErrorSpy).not.toHaveBeenCalled();
    expect(screen.queryByTestId('session-999')).toBeNull();
    expect(screen.getByTestId('session-101')).toBeTruthy();
    expect(loaderCalls).toBe(2);
    consoleErrorSpy.mockRestore();
    await view.unmount();
  });

  test('replaying the load effect supersedes the previous request', async () => {
    const stale = makeConference(999, 'STALE-FAKE');
    const real = makeConference(101, 'Keynote');
    const deferredA = createDeferred<Conference>();
    const deferredB = createDeferred<Conference>();
    const loaderA = () => deferredA.promise;
    const loaderB = () => deferredB.promise;

    const view = await render(
      <ConferenceProvider loader={loaderA}>
        <ScheduleScreen />
      </ConferenceProvider>,
    );
    await screen.findByText('Loading sessions…');

    await act(async () => {
      view.rerender(
        <ConferenceProvider loader={loaderB}>
          <ScheduleScreen />
        </ConferenceProvider>,
      );
    });

    // The superseded first request resolves; it must not win.
    await act(async () => {
      deferredA.resolve(stale);
    });
    await act(async () => {
      await Promise.resolve();
    });
    expect(screen.queryByTestId('session-999')).toBeNull();
    expect(screen.getByText('Loading sessions…')).toBeTruthy();

    await act(async () => {
      deferredB.resolve(real);
    });
    await screen.findByTestId('session-101');
    expect(screen.getByTestId('session-101')).toBeTruthy();
    expect(screen.queryByTestId('session-999')).toBeNull();
    await view.unmount();
  });

  test('resolving a pending loader after unmount does not leak work or errors', async () => {
    const conference = loadConference();
    const deferred = createDeferred<Conference>();
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const view = await render(
      <ConferenceProvider loader={() => deferred.promise}>
        <ScheduleScreen />
      </ConferenceProvider>,
    );
    await screen.findByText('Loading sessions…');
    await view.unmount();

    await act(async () => {
      deferred.resolve(conference);
    });
    await act(async () => {
      await Promise.resolve();
    });

    expect(consoleErrorSpy).not.toHaveBeenCalled();
    consoleErrorSpy.mockRestore();
  });
});

describe('ScheduleScreen behavior (ready state)', () => {
  test('search filters live, shows the generic empty message, and restores on clear', async () => {
    let loaderCalls = 0;
    const loader = () => {
      loaderCalls += 1;
      return loadConference();
    };

    const view = await render(
      <ConferenceProvider loader={loader}>
        <ScheduleScreen />
      </ConferenceProvider>,
    );

    // RNTL 14 queries host elements only. Its renderer documents unstable_fiber
    // for the composite tree: inspect the real imported SectionList, not context
    // or a mocked list. Re-read the current host fiber after every update.
    function sectionListFibers(fiber: Fiber | null = view.root!.unstable_fiber): Fiber[] {
      if (fiber === null) return [];
      const matches = fiber.type === SectionList || fiber.elementType === SectionList ? [fiber] : [];
      return [...matches, ...sectionListFibers(fiber.child), ...sectionListFibers(fiber.sibling)];
    }

    function sectionMapping() {
      const lists = sectionListFibers();
      expect(lists).toHaveLength(1);
      const sections = lists[0].memoizedProps.sections as ReadonlyArray<{
        title: string;
        key: string;
        data: ReadonlyArray<{ id: number }>;
      }>;
      return sections.map(({ title, key, data }) => ({
        title,
        key,
        sessionIds: data.map(({ id }) => id),
      }));
    }

    function expectedMapping(caseId: string) {
      const referenceCase = expectedCases.cases.find(({ id }) => id === caseId)!;
      return referenceCase.expected.groups.map(({ groupTime, sessionIds }) => ({
        title: groupTime,
        key: groupTime,
        sessionIds,
      }));
    }
    await screen.findByText('Breakfast');

    const search = screen.getByLabelText('Search sessions');
    await fireEvent.changeText(search, 'IOnic');
    await screen.findAllByTestId(/session-/);
    expect(search.props.value).toBe('IOnic');

    // Compare every title, section key and ordered row ID received by the real
    // SectionList to the frozen reference case, regardless of mounted viewport.
    const conference = loadConference();
    const expectedSections = expectedMapping('search-case-insensitive');
    const expectedIds = expectedSections.flatMap(({ sessionIds }) => sessionIds);
    const expectedGroupTimes = expectedSections.map(({ title }) => title);
    const nonMatchingIds = conference.sessions
      .map((session) => session.id)
      .filter((id) => !expectedIds.includes(id));

    expect(expectedSections).toHaveLength(6);
    expect(expectedIds).toHaveLength(15);
    expect(nonMatchingIds).toHaveLength(5);
    const actualSections = sectionMapping();
    expect(actualSections).toEqual(expectedSections);

    // Safe negative controls on copied observations only; no rendered props or
    // product code is mutated. These must fail the same full-equality assertion.
    for (const incomplete of [actualSections.slice(0, 1), actualSections.slice(0, -1)]) {
      expect(() => expect(incomplete).toEqual(expectedSections)).toThrow();
    }

    // Rendered window checks: every mounted row is one of the 15 matching rows,
    // at least one row is mounted, and none of the 5 non-matching sessions
    // appears anywhere in the rendered tree.
    const mountedIds = (await screen.findAllByTestId(/session-/)).map((row) =>
      Number(String(row.props.testID).replace(/^session-/, '')),
    );
    expect(mountedIds.length).toBeGreaterThan(0);
    for (const id of mountedIds) {
      expect(expectedIds).toContain(id);
    }
    for (const id of nonMatchingIds) {
      expect(screen.queryByTestId(`session-${id}`)).toBeNull();
    }

    // Mounted section headers: a non-empty subset of the expected group times,
    // the first expected group time first (no scrolling yet), each mounted once.
    const mountedHeaders = expectedGroupTimes.filter(
      (time) => screen.queryAllByText(time, { exact: true }).length > 0,
    );
    expect(mountedHeaders.length).toBeGreaterThan(0);
    expect(mountedHeaders[0]).toBe(expectedGroupTimes[0]);
    for (const time of mountedHeaders) {
      expect(screen.queryAllByText(time, { exact: true })).toHaveLength(1);
    }

    expect(screen.queryByText('No sessions match your search or filters.')).toBeNull();

    // No-match state: generic message, zero rows, empty mapping, list unmounted.
    await fireEvent.changeText(search, 'zzz-no-such-session');
    await screen.findByText('No sessions match your search or filters.');
    // queryAll* (synchronous): findAll* throws when zero elements match, which
    // is exactly the state asserted here.
    expect(screen.queryAllByTestId(/session-/)).toHaveLength(0);
    expect(sectionListFibers()).toHaveLength(0);
    expect(screen.queryByRole('list')).toBeNull();

    // Clearing restores the full frozen-case mapping (all 20 sessions, 8 sections).
    await fireEvent.changeText(search, '');
    await screen.findByTestId('session-1');
    const restoredSections = expectedMapping('default-all');
    expect(restoredSections).toHaveLength(8);
    expect(restoredSections.flatMap(({ sessionIds }) => sessionIds)).toHaveLength(20);
    expect(sectionMapping()).toEqual(restoredSections);
    expect(screen.queryByText('No sessions match your search or filters.')).toBeNull();
    expect(loaderCalls).toBe(1);
    await view.unmount();
  });

  test('mode switching preserves search and selection; favorite-empty and restore work', async () => {
    let loaderCalls = 0;
    const loader = () => {
      loaderCalls += 1;
      return loadConference();
    };

    const view = await render(
      <ConferenceProvider loader={loader}>
        <ScheduleScreen />
      </ConferenceProvider>,
    );
    await screen.findByText('Breakfast');

    const search = screen.getByLabelText('Search sessions');
    await fireEvent.changeText(search, 'IOnic');
    await screen.findByTestId('session-4');

    await fireEvent.press(screen.getByTestId('mode-favorites'));
    await screen.findByText('No favorite sessions.');
    expect(screen.getByTestId('mode-favorites').props.accessibilityState).toMatchObject({ selected: true });
    expect(screen.getByTestId('mode-all').props.accessibilityState).toMatchObject({ selected: false });
    // Search text survives the mode switch.
    expect(search.props.value).toBe('IOnic');
    expect(screen.queryByTestId('session-4')).toBeNull();

    await fireEvent.press(screen.getByTestId('mode-all'));
    await screen.findByTestId('session-4');
    expect(screen.queryByText('No favorite sessions.')).toBeNull();
    // Search text still held and schedule restored.
    expect(search.props.value).toBe('IOnic');
    expect(screen.getByTestId('mode-all').props.accessibilityState).toMatchObject({ selected: true });
    expect(loaderCalls).toBe(1);
    await view.unmount();
  });
});
