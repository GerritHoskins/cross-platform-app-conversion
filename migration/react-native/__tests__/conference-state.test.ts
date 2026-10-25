import type { ScheduleMode } from '@migration/core';
import { addFavorite, initialSelectedTracks, removeFavorite } from '@migration/core';

import { loadConference } from '../src/data/load-conference';
import {
  conferenceReducer,
  createConferenceState,
  selectScheduleGroups,
  type ConferenceAction,
  type ConferenceState,
} from '../src/state/conference-state';
import expectedCases from '../../reference/expected-cases.json';

interface ReferenceCase {
  id: string;
  input: {
    searchText: string;
    selectedTracks: string[];
    favoriteIds: number[];
    mode: ScheduleMode;
  };
  action?: {
    op: 'addFavorite' | 'removeFavorite';
    sessionId: number;
  };
  expected: {
    favoriteIds?: number[];
    sessionIds: number[];
    groups: { groupTime: string; sessionIds: number[] }[];
  };
}

const expectedCaseList = (expectedCases as unknown as { cases: ReferenceCase[] }).cases;

function deepFreeze<T>(value: T): T {
  if (value !== null && typeof value === 'object') {
    for (const key of Object.keys(value as Record<string, unknown>)) {
      deepFreeze((value as Record<string, unknown>)[key]);
    }
    Object.freeze(value as object);
  }
  return value;
}

function readyState(): ConferenceState {
  let state = createConferenceState();
  state = conferenceReducer(state, { type: 'loadStarted' });
  state = conferenceReducer(state, { type: 'loadSucceeded', conference: loadConference() });
  return state;
}

describe('createConferenceState', () => {
  test('creates an independent initial state', () => {
    const a = createConferenceState();
    const b = createConferenceState();

    expect(a).not.toBe(b);
    expect(a.status).toBe('idle');
    expect(a.conference).toBeNull();
    expect(a.selection).toBeNull();
    expect(a.error).toBeNull();

    a.status = 'error';
    a.error = 'mutated';
    expect(b.status).toBe('idle');
    expect(b.error).toBeNull();
  });

  test('selectScheduleGroups is empty in the initial state', () => {
    expect(selectScheduleGroups(createConferenceState())).toEqual([]);
  });
});

describe('conferenceReducer loading lifecycle', () => {
  test('idle -> loading -> ready with exact initial selection via createInitialSelection', () => {
    const conference = loadConference();

    let state = createConferenceState();
    expect(state.status).toBe('idle');
    expect(selectScheduleGroups(state)).toEqual([]);

    state = conferenceReducer(state, { type: 'loadStarted' });
    expect(state.status).toBe('loading');
    expect(state.error).toBeNull();
    expect(selectScheduleGroups(state)).toEqual([]);

    state = conferenceReducer(state, { type: 'loadSucceeded', conference });
    expect(state.status).toBe('ready');
    expect(state.conference).toEqual(conference);
    expect(state.error).toBeNull();

    expect(state.selection).not.toBeNull();
    expect(state.selection?.searchText).toBe('');
    expect(state.selection?.selectedTracks).toEqual(initialSelectedTracks(conference.sessions));
    expect(state.selection?.favoriteIds).toEqual([]);
    expect(state.selection?.mode).toBe('all');

    // Ready state exposes the grouped schedule covering all 20 bundled sessions.
    // (Exact per-group order is asserted by the frozen reference cases below.)
    const flatIds = selectScheduleGroups(state).flatMap((group) => group.sessions.map((session) => session.id));
    expect(flatIds).toHaveLength(conference.sessions.length);
    expect([...flatIds].sort((a, b) => a - b)).toEqual(
      conference.sessions.map((session) => session.id).sort((a, b) => a - b),
    );
  });

  test('a later load preserves the existing selection while updating the conference', () => {
    const base = readyState();
    const withSearch = conferenceReducer(base, { type: 'setSearchText', searchText: 'IOnic' });

    const next = conferenceReducer(withSearch, {
      type: 'loadSucceeded',
      conference: loadConference(),
    });

    expect(next.status).toBe('ready');
    expect(next.conference?.sessions).toHaveLength(20);
    expect(next.selection?.searchText).toBe('IOnic');
    expect(next.selection?.selectedTracks).toEqual(base.selection?.selectedTracks);
    expect(next.selection?.favoriteIds).toEqual(base.selection?.favoriteIds);
    expect(next.selection?.mode).toBe('all');
  });

  test('failure preserves data and selection, records the error, and later success clears it', () => {
    const base = readyState();

    const failed = conferenceReducer(base, { type: 'loadFailed', error: 'network down' });
    expect(failed.status).toBe('error');
    expect(failed.error).toBe('network down');
    expect(failed.conference).toBe(base.conference);
    expect(failed.selection).toBe(base.selection);
    expect(selectScheduleGroups(failed)).toEqual([]);

    const failedAgain = conferenceReducer(failed, { type: 'loadFailed', error: 'still down' });
    expect(failedAgain.status).toBe('error');
    expect(failedAgain.error).toBe('still down');
    expect(failedAgain.conference).toBe(base.conference);

    const recovered = conferenceReducer(failedAgain, {
      type: 'loadSucceeded',
      conference: loadConference(),
    });
    expect(recovered.status).toBe('ready');
    expect(recovered.error).toBeNull();
    expect(recovered.selection?.searchText).toBe(base.selection?.searchText);
    expect(selectScheduleGroups(recovered).length).toBeGreaterThan(0);
  });

  test('loadStarted clears any prior error while preserving data and selection', () => {
    const base = readyState();
    const failed = conferenceReducer(base, { type: 'loadFailed', error: 'boom' });
    const started = conferenceReducer(failed, { type: 'loadStarted' });

    expect(started.status).toBe('loading');
    expect(started.error).toBeNull();
    expect(started.conference).toBe(base.conference);
    expect(started.selection).toBe(base.selection);
  });
});

describe('conferenceReducer selection field isolation', () => {
  test('each action changes only its own field', () => {
    const base = readyState();
    const baseSelection = base.selection;
    expect(baseSelection).not.toBeNull();

    const searchText = conferenceReducer(base, { type: 'setSearchText', searchText: 'IOnic' });
    expect(searchText.selection?.searchText).toBe('IOnic');
    expect(searchText.selection).not.toBe(baseSelection);
    expect(searchText.selection?.mode).toBe(baseSelection?.mode);
    expect(searchText.selection?.selectedTracks).toEqual(baseSelection?.selectedTracks);
    expect(searchText.selection?.favoriteIds).toEqual(baseSelection?.favoriteIds);
    expect(searchText.conference).toBe(base.conference);

    const mode = conferenceReducer(searchText, { type: 'setMode', mode: 'favorites' });
    expect(mode.selection?.mode).toBe('favorites');
    expect(mode.selection?.searchText).toBe('IOnic');
    expect(mode.selection?.selectedTracks).toEqual(baseSelection?.selectedTracks);
    expect(mode.selection?.favoriteIds).toEqual(baseSelection?.favoriteIds);

    const tracks = conferenceReducer(base, { type: 'setSelectedTracks', selectedTracks: ['Ionic'] });
    expect(tracks.selection?.selectedTracks).toEqual(['Ionic']);
    expect(tracks.selection?.searchText).toBe('');
    expect(tracks.selection?.mode).toBe('all');
    expect(tracks.selection?.favoriteIds).toEqual(baseSelection?.favoriteIds);

    const favorites = conferenceReducer(base, { type: 'setFavoriteIds', favoriteIds: [5] });
    expect(favorites.selection?.favoriteIds).toEqual([5]);
    expect(favorites.selection?.searchText).toBe('');
    expect(favorites.selection?.selectedTracks).toEqual(baseSelection?.selectedTracks);
  });

  test('mode switching preserves the search text and every other selection field', () => {
    const base = readyState();
    const searched = conferenceReducer(base, { type: 'setSearchText', searchText: 'IOnic' });
    const favorited = conferenceReducer(searched, { type: 'setFavoriteIds', favoriteIds: [1, 12] });
    const tracked = conferenceReducer(favorited, { type: 'setSelectedTracks', selectedTracks: ['Food', 'Ionic'] });

    const switched = conferenceReducer(tracked, { type: 'setMode', mode: 'favorites' });

    expect(switched.selection?.mode).toBe('favorites');
    expect(switched.selection?.searchText).toBe('IOnic');
    expect(switched.selection?.favoriteIds).toEqual([1, 12]);
    expect(switched.selection?.selectedTracks).toEqual(['Food', 'Ionic']);

    const switchedBack = conferenceReducer(switched, { type: 'setMode', mode: 'all' });
    expect(switchedBack.selection?.mode).toBe('all');
    expect(switchedBack.selection?.searchText).toBe('IOnic');
  });

  test('selection actions before a selection exists are no-ops', () => {
    const fresh = createConferenceState();

    const actions: ConferenceAction[] = [
      { type: 'setSearchText', searchText: 'IOnic' },
      { type: 'setMode', mode: 'favorites' },
      { type: 'setSelectedTracks', selectedTracks: ['Ionic'] },
      { type: 'setFavoriteIds', favoriteIds: [1] },
    ];

    for (const action of actions) {
      const next = conferenceReducer(fresh, action);
      expect(next).toBe(fresh);
      expect(next.selection).toBeNull();
      expect(next.status).toBe('idle');
    }
  });

  test('selection actions also no-op while loading without a selection', () => {
    const started = conferenceReducer(createConferenceState(), { type: 'loadStarted' });
    const next = conferenceReducer(started, { type: 'setSearchText', searchText: 'x' });
    expect(next).toBe(started);
    expect(next.selection).toBeNull();
  });
});

describe('conferenceReducer immutability', () => {
  test('never mutates a deeply frozen prior state', () => {
    const conference = deepFreeze(loadConference());

    let state = deepFreeze(createConferenceState());
    state = conferenceReducer(state, { type: 'loadStarted' });
    state = deepFreeze(state);
    state = conferenceReducer(state, { type: 'loadSucceeded', conference });
    state = deepFreeze(state);

    const mutated = conferenceReducer(state, { type: 'setSearchText', searchText: 'IOnic' });
    expect(mutated.selection?.searchText).toBe('IOnic');

    // The frozen prior state is untouched.
    expect(state.selection?.searchText).toBe('');
    expect(Object.isFrozen(state)).toBe(true);

    const frozenSelection = conferenceReducer(mutated, { type: 'setFavoriteIds', favoriteIds: [3] });
    expect(frozenSelection.selection?.favoriteIds).toEqual([3]);
    expect(mutated.selection?.favoriteIds).toEqual([]);
  });

  test('copies incoming array payloads so later caller mutation cannot change stored state', () => {
    const base = readyState();

    const trackPayload = ['Food', 'Ionic'];
    const favoritePayload = [3];

    const tracksState = conferenceReducer(base, { type: 'setSelectedTracks', selectedTracks: trackPayload });
    const favoriteState = conferenceReducer(base, { type: 'setFavoriteIds', favoriteIds: favoritePayload });

    trackPayload.push('MUTATED');
    favoritePayload.push(99);

    expect(base.selection?.selectedTracks).toEqual(
      initialSelectedTracks(base.conference?.sessions ?? []),
    );
    expect(base.selection?.favoriteIds).toEqual([]);
    expect(tracksState.selection?.selectedTracks).toEqual(['Food', 'Ionic']);
    expect(favoriteState.selection?.favoriteIds).toEqual([3]);
  });
});

describe('frozen reference cases (expected-cases.json)', () => {
  test('the case list is the 11-case frozen fixture', () => {
    expect(expectedCaseList).toHaveLength(11);
    expect(expectedCaseList.map((c) => c.id)).toEqual([
      'default-all',
      'no-tracks',
      'single-track',
      'search-case-insensitive',
      'search-no-match',
      'search-plus-track',
      'favorites-empty',
      'favorites-some',
      'favorites-order',
      'add-duplicate',
      'remove-absent',
    ]);
  });

  for (const referenceCase of expectedCaseList) {
    test(`reproduces frozen case: ${referenceCase.id}`, () => {
      const conference = loadConference();

      let state = createConferenceState();
      state = conferenceReducer(state, { type: 'loadStarted' });
      state = conferenceReducer(state, { type: 'loadSucceeded', conference });
      state = conferenceReducer(state, { type: 'setSearchText', searchText: referenceCase.input.searchText });
      state = conferenceReducer(state, { type: 'setSelectedTracks', selectedTracks: referenceCase.input.selectedTracks });
      state = conferenceReducer(state, { type: 'setFavoriteIds', favoriteIds: referenceCase.input.favoriteIds });
      state = conferenceReducer(state, { type: 'setMode', mode: referenceCase.input.mode });

      expect(state.selection).not.toBeNull();
      expect(state.selection?.searchText).toBe(referenceCase.input.searchText);
      expect(state.selection?.selectedTracks).toEqual(referenceCase.input.selectedTracks);
      expect(state.selection?.favoriteIds).toEqual(referenceCase.input.favoriteIds);
      expect(state.selection?.mode).toBe(referenceCase.input.mode);

      if (referenceCase.action !== undefined) {
        const { op, sessionId } = referenceCase.action;
        const currentFavoriteIds = state.selection?.favoriteIds ?? [];
        const nextFavoriteIds =
          op === 'addFavorite'
            ? addFavorite(currentFavoriteIds, sessionId)
            : removeFavorite(currentFavoriteIds, sessionId);
        state = conferenceReducer(state, { type: 'setFavoriteIds', favoriteIds: nextFavoriteIds });

        expect(state.selection?.favoriteIds).toEqual(referenceCase.expected.favoriteIds);
      }

      const groups = selectScheduleGroups(state);

      // groupSessions keeps the original session objects, so deep equality against
      // the bundled data also proves every expected id exists and maps to a real session.
      expect(groups).toEqual(
        referenceCase.expected.groups.map((group) => ({
          groupTime: group.groupTime,
          sessions: group.sessionIds.map((id) => conference.sessions.find((s) => s.id === id)),
        })),
      );
      expect(groups.map((group) => group.groupTime)).toEqual(
        referenceCase.expected.groups.map((group) => group.groupTime),
      );
      expect(groups.map((group) => group.sessions.map((session) => session.id))).toEqual(
        referenceCase.expected.groups.map((group) => group.sessionIds),
      );
      expect(groups.flatMap((group) => group.sessions.map((session) => session.id))).toEqual(
        referenceCase.expected.sessionIds,
      );
    });
  }
});


