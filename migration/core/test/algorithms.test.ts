import test from 'node:test';
import assert from 'node:assert/strict';

import {
  addFavorite,
  createInitialSelection,
  groupSessions,
  initialSelectedTracks,
  normalizeConference,
  removeFavorite,
  selectSessions,
  sortTracksByName,
} from '@migration/core';
import type { Selection, Session } from '@migration/core';

// This file tests the C03 behavior rules against a small synthetic raw object
// (not the data.json fixture) so each rule is exercised in isolation. The raw
// shape mirrors src/public/data fixtures: schedule[].groups[].sessions[] with
// id, name, timeStart, timeEnd, location, tracks, description, speakerNames.
function rawSession(id: string, name: string, timeStart: string, timeEnd: string, tracks: string[], extra: Record<string, unknown> = {}) {
  return { id, name, timeStart, timeEnd, location: 'Room A', description: '', tracks, speakerNames: ['T. Test'], ...extra };
}

// Six sessions: the two-track joint session 103 'Alpha Beta Joint', a same-start
// pair (102/103 both at 10:15), a name without a space (105 'Solo'), and 106
// 'Quiet One' whose name lacks 'gamma' even though its description and location
// contain it.
const raw = {
  date: '2026-06-01',
  speakers: [{ id: '7', name: 'T. Test' }],
  tracks: [
    { name: 'Alpha', icon: 'alpha-icon' },
    { name: 'Beta', icon: 'beta-icon' },
    { name: 'Gamma', icon: 'gamma-icon' },
  ],
  schedule: [
    {
      date: '2026-06-01',
      groups: [
        { time: '9:00 am', sessions: [rawSession('101', 'Alpha One', '9:00 am', '9:45 am', ['Alpha'])] },
        {
          time: '10:00 am',
          sessions: [
            rawSession('102', 'Beta Two', '10:15 am', '11:00 am', ['Beta']),
            rawSession('103', 'Alpha Beta Joint', '10:15 am', '11:00 am', ['Alpha', 'Beta']),
          ],
        },
        { time: '11:00 am', sessions: [rawSession('104', 'Gamma Talk', '11:30 am', '12:00 pm', ['Gamma'])] },
        {
          time: '12:00 pm',
          sessions: [
            rawSession('105', 'Solo', '12:30 pm', '1:00 pm', ['Alpha']),
            rawSession('106', 'Quiet One', '1:15 pm', '2:00 pm', ['Alpha'], {
              description: 'gamma in the hills',
              location: 'Gamma Hall',
            }),
          ],
        },
      ],
    },
  ],
};

const conference = normalizeConference(raw);
const allTracks = ['Alpha', 'Beta', 'Gamma'];
const allTracksSelected = { searchText: '', selectedTracks: allTracks, favoriteIds: [], mode: 'all' as const };

test('all-tracks rule: a two-track session is filtered out unless every one of its tracks is selected', () => {
  // Only Alpha selected: 103 (Alpha+Beta) must be excluded; 101, 105, 106 (Alpha only) pass.
  assert.deepEqual(
    selectSessions(conference.sessions, { ...allTracksSelected, selectedTracks: ['Alpha'] }).map((s) => s.id),
    [101, 105, 106],
  );
  // Alpha and Beta selected: 103 now passes as well.
  assert.deepEqual(
    selectSessions(conference.sessions, { ...allTracksSelected, selectedTracks: ['Alpha', 'Beta'] }).map((s) => s.id),
    [101, 102, 103, 105, 106],
  );
});

test('all-tracks rule holds in favorites mode too', () => {
  // 103 is a favorite, but with only Alpha selected it must still be excluded.
  assert.deepEqual(
    selectSessions(conference.sessions, { searchText: '', selectedTracks: ['Alpha'], favoriteIds: [103], mode: 'favorites' }).map((s) => s.id),
    [],
  );
  // ...and included when all of its tracks are selected.
  assert.deepEqual(
    selectSessions(conference.sessions, { searchText: '', selectedTracks: ['Alpha', 'Beta'], favoriteIds: [103], mode: 'favorites' }).map((s) => s.id),
    [103],
  );
});

test('empty selectedTracks gives no pass even with matching search and a matching favorite', () => {
  assert.deepEqual(
    selectSessions(conference.sessions, { searchText: 'alpha', selectedTracks: [], favoriteIds: [101], mode: 'favorites' }).map((s) => s.id),
    [],
  );
});

test('search is a case-insensitive substring on the name', () => {
  assert.deepEqual(
    selectSessions(conference.sessions, { ...allTracksSelected, searchText: 'ALPHA' }).map((s) => s.id),
    [101, 103],
  );
});

test('search matches the name only, not description or location', () => {
  // 106 'Quiet One' has 'gamma' in its description and location, but its name does not.
  assert.deepEqual(
    selectSessions(conference.sessions, { ...allTracksSelected, searchText: 'gamma' }).map((s) => s.id),
    [104],
  );
});

test('a space is a truthy search text: names containing a space match, names without do not', () => {
  assert.deepEqual(
    selectSessions(conference.sessions, { ...allTracksSelected, searchText: ' ' }).map((s) => s.id),
    [101, 102, 103, 104, 106],
  );
});

test('grouping keeps equal start minutes in input order within their group', () => {
  // 102 and 103 both start at 10:15 and 102 comes first in input order.
  const groups = groupSessions(selectSessions(conference.sessions, allTracksSelected)).map((group) => ({
    groupTime: group.groupTime,
    sessionIds: group.sessions.map((session) => session.id),
  }));
  assert.deepEqual(groups, [
    { groupTime: '9:00 am', sessionIds: [101] },
    { groupTime: '10:00 am', sessionIds: [102, 103] },
    { groupTime: '11:00 am', sessionIds: [104] },
    { groupTime: '12:00 pm', sessionIds: [105, 106] },
  ]);
});

test('input with reverse-time sessions is grouped and sorted chronologically', () => {
  const reverseRaw = {
    date: '2026-06-02',
    speakers: [{ id: '1', name: 'R. Evers' }],
    tracks: [
      { name: 'Alpha', icon: 'a' },
      { name: 'Beta', icon: 'b' },
      { name: 'Gamma', icon: 'g' },
    ],
    schedule: [
      {
        date: '2026-06-02',
        groups: [
          { time: '12:00 pm', sessions: [rawSession('21', 'Afternoon Close', '12:00 pm', '12:30 pm', ['Beta'])] },
          { time: '11:00 am', sessions: [rawSession('22', 'Late Morning', '11:30 am', '12:00 pm', ['Gamma'])] },
          { time: '9:00 am', sessions: [rawSession('23', 'Morning Open', '9:00 am', '9:45 am', ['Alpha'])] },
        ],
      },
    ],
  };
  const reverseConference = normalizeConference(reverseRaw);
  const groups = groupSessions(reverseConference.sessions).map((group) => ({
    groupTime: group.groupTime,
    sessionIds: group.sessions.map((session) => session.id),
  }));
  assert.deepEqual(groups, [
    { groupTime: '9:00 am', sessionIds: [23] },
    { groupTime: '11:00 am', sessionIds: [22] },
    { groupTime: '12:00 pm', sessionIds: [21] },
  ]);
});

test('group order is first-occurrence order after sorting by start time, not the group label order', () => {
  // Input document order: 31 (11:00, group label '8:00 am'), 32 (9:45, '9:00 am'), 33 (10:30, '9:00 am').
  // After sorting: 32, 33, 31 -- so '9:00 am' appears first even though its label is later.
  const shuffledRaw = {
    date: '2026-06-03',
    speakers: [{ id: '1', name: 'R. Evers' }],
    tracks: [{ name: 'Alpha', icon: 'a' }],
    schedule: [
      {
        date: '2026-06-03',
        groups: [
          { time: '8:00 am', sessions: [rawSession('31', 'Late Late', '11:00 am', '11:30 am', ['Alpha'])] },
          {
            time: '9:00 am',
            sessions: [
              rawSession('32', 'Early Early', '9:45 am', '10:00 am', ['Alpha']),
              rawSession('33', 'Middle', '10:30 am', '11:00 am', ['Alpha']),
            ],
          },
        ],
      },
    ],
  };
  const shuffledConference = normalizeConference(shuffledRaw);
  const groups = groupSessions(shuffledConference.sessions).map((group) => ({
    groupTime: group.groupTime,
    sessionIds: group.sessions.map((session) => session.id),
  }));
  assert.deepEqual(groups, [
    { groupTime: '9:00 am', sessionIds: [32, 33] },
    { groupTime: '8:00 am', sessionIds: [31] },
  ]);
});

test('empty selectedTracks gives no pass and groupSessions of empty input gives []', () => {
  assert.deepEqual(selectSessions(conference.sessions, { searchText: '', selectedTracks: [], favoriteIds: [101], mode: 'favorites' }), []);
  assert.deepEqual(groupSessions([]), []);
});

test('addFavorite appends a new id and is a no-op copy for an existing id', () => {
  assert.deepEqual(addFavorite([1, 2], 3), [1, 2, 3]);
  assert.deepEqual(addFavorite([], 5), [5]);
  const input = [1, 2];
  const repeated = addFavorite(input, 2);
  assert.deepEqual(repeated, [1, 2]);
  assert.notStrictEqual(repeated, input, 'a no-op add still returns a fresh array');
});

test('removeFavorite removes every occurrence and gives an equal copy for an absent id', () => {
  assert.deepEqual(removeFavorite([1, 2, 1, 3], 1), [2, 3]);
  const input = [1, 2];
  const absent = removeFavorite(input, 9);
  assert.deepEqual(absent, [1, 2]);
  assert.notStrictEqual(absent, input, 'an absent id still returns a fresh array');
  assert.deepEqual(removeFavorite([], 5), []);
});

test('outputs are fresh arrays, never the input reference', () => {
  const sessions = conference.sessions;
  const ids = [1, 2];
  assert.notStrictEqual(selectSessions(sessions, allTracksSelected), sessions);
  assert.notStrictEqual(groupSessions(sessions)[0]?.sessions, sessions);
  assert.notStrictEqual(initialSelectedTracks(sessions), sessions);
  assert.notStrictEqual(addFavorite(ids, 3), ids);
  assert.notStrictEqual(removeFavorite(ids, 1), ids);
  assert.notStrictEqual(sortTracksByName(conference.tracks), conference.tracks);
});

test('initialSelectedTracks lists every session track in first-appearance order', () => {
  assert.deepEqual(initialSelectedTracks(conference.sessions), ['Alpha', 'Beta', 'Gamma']);
  assert.deepEqual(initialSelectedTracks([]), []);
});

test('every function works on deep-frozen inputs and returns new arrays', () => {
  const frozenConference = deepFreeze(JSON.parse(JSON.stringify(conference)));
  const frozenSelection: Selection = deepFreeze({
    searchText: '',
    selectedTracks: ['Alpha', 'Beta'],
    favoriteIds: [101, 103],
    mode: 'favorites',
  });
  const frozenFavorites = deepFreeze([1, 2, 3]);

  const selected = selectSessions(frozenConference.sessions, frozenSelection);
  const groups = groupSessions(selected);
  const initials = createInitialSelection(frozenConference);
  const added = addFavorite(frozenFavorites, 4);
  const removed = removeFavorite(frozenFavorites, 2);
  const sortedTracks = sortTracksByName(frozenConference.tracks);

  // Nothing was mutated: the inputs are still frozen.
  assert.ok(Object.isFrozen(frozenConference.sessions));
  assert.ok(Object.isFrozen(frozenSelection.selectedTracks));
  assert.ok(Object.isFrozen(frozenFavorites));
  assert.ok(Object.isFrozen(frozenConference.tracks));

  // Outputs are new arrays: fresh, unfrozen, and not aliased to the frozen inputs.
  for (const output of [selected, initials.selectedTracks, initials.favoriteIds, added, removed, sortedTracks]) {
    assert.ok(Array.isArray(output));
    assert.ok(!Object.isFrozen(output), 'every output array must be a fresh, mutable array');
  }
  assert.notStrictEqual(selected, frozenConference.sessions);
  assert.notStrictEqual(added, frozenFavorites);
  assert.notStrictEqual(removed, frozenFavorites);
  assert.notStrictEqual(sortedTracks, frozenConference.tracks);
  for (const group of groups) {
    assert.notStrictEqual(group.sessions, frozenConference.sessions);
    assert.ok(!Object.isFrozen(group.sessions));
  }

  // Writability proof: the output accepts (and drops) a sentinel element.
  selected.push(frozenConference.sessions[0]);
  assert.equal(selected.length, 3);
  selected.pop();
  assert.equal(selected.length, 2);
});

test('groupSessions on a deeply frozen, reverse-chronological input: no throw, chronological groups, input unchanged', () => {
  // A fresh copy of the six normalized sessions, reversed so the input is
  // reverse-chronological ([106, 105, 104, 103, 102, 101] by start time), then
  // deeply frozen: the array itself and every session object.
  const frozenInput: Session[] = deepFreeze(JSON.parse(JSON.stringify(conference.sessions)).reverse());
  assert.ok(Object.isFrozen(frozenInput), 'sanity: the input array is frozen');
  assert.ok(Object.isFrozen(frozenInput[0]), 'sanity: every session object is frozen');
  assert.deepEqual(
    frozenInput.map((s) => s.id),
    [106, 105, 104, 103, 102, 101],
    'sanity: the input is reverse-chronological (the reverse of conference.sessions)',
  );

  // Must not throw even though the input is deeply frozen (an in-place sort of the
  // frozen input would throw).
  const groups = groupSessions(frozenInput).map((group) => ({
    groupTime: group.groupTime,
    sessionIds: group.sessions.map((session) => session.id),
  }));

  // Must return the chronological groups. In-group order follows first-appearance
  // order in the (stably sorted) input, so the equal-start 10:15 pair appears in
  // its input order: [103, 102].
  assert.deepEqual(groups, [
    { groupTime: '9:00 am', sessionIds: [101] },
    { groupTime: '10:00 am', sessionIds: [103, 102] },
    { groupTime: '11:00 am', sessionIds: [104] },
    { groupTime: '12:00 pm', sessionIds: [105, 106] },
  ]);

  // The frozen input must be unchanged: still frozen, still in its original
  // reverse-chronological order (no in-place reordering).
  assert.ok(Object.isFrozen(frozenInput), 'the input array is still frozen after groupSessions');
  assert.deepEqual(
    frozenInput.map((s) => s.id),
    [106, 105, 104, 103, 102, 101],
    'groupSessions must not reorder (or otherwise mutate) its input',
  );
});

test('selectSessions returns the passing sessions in exactly the deliberately non-chronological input order', () => {
  // Scrambled input order: 104 (11:30 am) and 106 (1:15 pm) appear before
  // 102 (10:15 am), so the input is neither chronological nor
  // reverse-chronological -- neither a forward nor a backward sort of the
  // output can coincidentally reproduce this order (sorting is groupSessions'
  // job, not selectSessions', C03.md line 68).
  const byId = new Map(conference.sessions.map((s) => [s.id, s]));
  const scrambled: Session[] = [104, 101, 106, 102, 105, 103].map((id) => byId.get(id) as Session);
  assert.deepEqual(
    scrambled.map((s) => s.id),
    [104, 101, 106, 102, 105, 103],
    'sanity: the input is deliberately non-chronological',
  );
  assert.deepEqual(
    selectSessions(scrambled, allTracksSelected).map((s) => s.id),
    [104, 101, 106, 102, 105, 103],
    'all pass: the deliberately non-chronological input order is returned unchanged (no implicit sort)',
  );
  assert.deepEqual(
    selectSessions(scrambled, { ...allTracksSelected, selectedTracks: ['Alpha', 'Beta'] }).map((s) => s.id),
    [101, 106, 102, 105, 103],
    'partial pass: the passing sessions keep exactly the (scrambled) input order',
  );
});

function deepFreeze<T>(value: T): T {
  if (value !== null && typeof value === 'object') {
    Object.freeze(value);
    for (const member of Object.values(value as Record<string, unknown>)) {
      deepFreeze(member);
    }
  }
  return value;
}

test('sortTracksByName orders by name and leaves the input order untouched', () => {
  const unsorted = [
    { name: 'Zeta', icon: 'z' },
    { name: 'Alpha', icon: 'a' },
    { name: 'Mid', icon: 'm' },
  ];
  const sorted = sortTracksByName(unsorted);
  assert.deepEqual(
    sorted.map((track) => track.name),
    ['Alpha', 'Mid', 'Zeta'],
  );
  assert.deepEqual(
    unsorted.map((track) => track.name),
    ['Zeta', 'Alpha', 'Mid'],
    'the input array keeps its original order',
  );
  assert.deepEqual(sortTracksByName([]), []);
});

test('createInitialSelection gives empty search, all session tracks in first-appearance order, no favorites, all mode', () => {
  const initial = createInitialSelection(conference);
  assert.equal(initial.searchText, '');
  assert.deepEqual(initial.selectedTracks, ['Alpha', 'Beta', 'Gamma']);
  assert.deepEqual(initial.favoriteIds, []);
  assert.equal(initial.mode, 'all');
});
