#!/usr/bin/env node
/**
 * P01 reference behavior contract: expected-case derivation (deterministic).
 *
 * Dependency-free Node ES module. Run from the repository root:
 *   node migration/reference/derive-expected.mjs
 * (paths are also resolved relative to this script's location, so any cwd works)
 *
 * Reads public/data/data.json, transcribes the frozen source logic into pure
 * functions, and writes migration/reference/expected-cases.json.
 * No third-party modules, no network, no timestamps, no randomness:
 * re-running with the same data.json produces byte-identical output (P01 step 5).
 *
 * Transcribed logic (citations, read 2026-10-18 at HEAD 0b1f469):
 *   normalization         src/store/modules/sessions.ts:102-120 (loadSessionData)
 *   first-load track list src/store/modules/sessions.ts:123-128
 *   allFiltered           src/store/modules/sessions.ts:192-207
 *   favoritesFiltered     src/store/modules/sessions.ts:208-225
 *   addFavorite           src/store/modules/sessions.ts:72-76
 *   removeFavorite        src/store/modules/sessions.ts:77-79
 *   time parse + compare  src/utils/time.ts:1-23
 *   groupedByStartTime    src/views/SessionList.vue:269-291
 *
 * Deliberate contract policy decisions (NOT observed source behavior):
 *   - Unresolved speaker names are OMITTED from speakerIds. The source maps an
 *     unknown speaker name to `undefined` (sessions.ts:103-105,115); the
 *     contract for migration targets says to omit such entries instead.
 *   - Time ordering must use the explicit 12-hour parse in src/utils/time.ts,
 *     never engine-dependent `Date` parsing; unparseable timestamps sort last,
 *     and equal timestamps (including both-unparseable) keep stable input
 *     order (ES2019-mandated stable Array.prototype.sort, JS host: V8).
 */

import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const dataPath = join(repoRoot, 'public', 'data', 'data.json');
const outPath = join(repoRoot, 'migration', 'reference', 'expected-cases.json');

// ---------------------------------------------------------------------------
// src/utils/time.ts:1 — same pattern as the source
const TIME_PATTERN = /^\s*(\d{1,2}):(\d{2})\s*(am|pm)\s*$/i;

// src/utils/time.ts:8-18 — verbatim logic; unparseable -> Infinity (sorts last)
const parseTimeToMinutes = (time) => {
  const match = TIME_PATTERN.exec(time);
  if (!match) return Number.POSITIVE_INFINITY;

  const hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  if (hours < 1 || hours > 12 || minutes > 59) return Number.POSITIVE_INFINITY;

  const isPm = match[3].toLowerCase() === 'pm';
  return ((hours % 12) + (isPm ? 12 : 0)) * 60 + minutes;
};

// src/utils/time.ts:20-23 — verbatim logic
const compareTimes = (a, b) => {
  const diff = parseTimeToMinutes(a) - parseTimeToMinutes(b);
  return Number.isNaN(diff) ? 0 : diff;
};

// src/store/modules/sessions.ts:102-120 — loadSessionData normalization,
// pure. Contract policy: unresolved speaker names are omitted from
// speakerIds (source leaves `undefined` entries, see sessions.ts:115).
const normalizeSessions = (data) => {
  const speakerNameToId = new Map(
    data.speakers.map((s) => [s.name, parseInt(s.id)])
  );

  return data.schedule[0].groups.flatMap((group) =>
    group.sessions.map((session) => ({
      id: parseInt(session.id),
      timeStart: session.timeStart,
      timeEnd: session.timeEnd,
      name: session.name,
      location: session.location,
      description: session.description || '', // sessions.ts:114
      speakerIds: (session.speakerNames || [])
        .map((name) => speakerNameToId.get(name))
        .filter((id) => id !== undefined), // contract policy (see header)
      tracks: session.tracks,
      selectedTrackFilters: [],
      groupTime: group.time, // sessions.ts:118
    }))
  );
};

// src/store/modules/sessions.ts:123-128 — first-load track selection:
// every track that appears on a session, first-appearance order.
const firstLoadTrackFilters = (sessions) =>
  [...new Set(sessions.flatMap((s) => s.tracks))];

// src/store/modules/sessions.ts:192-207 — allFiltered, pure:
// no selected tracks -> no sessions; every session track must be selected;
// optional case-insensitive name `includes` search.
const allFiltered = (sessions, { searchText, trackFilters }) =>
  sessions.filter((session) => {
    if (trackFilters.length === 0) return false; // sessions.ts:194-195
    const matchesTracks = session.tracks.every((track) =>
      trackFilters.includes(track)
    ); // sessions.ts:198
    const matchesSearch = searchText
      ? session.name.toLowerCase().includes(searchText.toLowerCase())
      : true; // sessions.ts:201-203
    return matchesTracks && matchesSearch;
  });

// src/store/modules/sessions.ts:208-225 — favoritesFiltered, pure:
// favorite membership first, then the same track + search rules.
const favoritesFiltered = (sessions, { searchText, trackFilters, favoriteSessions }) =>
  sessions.filter((session) => {
    if (!favoriteSessions.includes(session.id)) return false; // sessions.ts:210
    if (trackFilters.length === 0) return false; // sessions.ts:212-213
    const matchesTracks = session.tracks.every((track) =>
      trackFilters.includes(track)
    ); // sessions.ts:216
    const matchesSearch = searchText
      ? session.name.toLowerCase().includes(searchText.toLowerCase())
      : true; // sessions.ts:219-221
    return matchesTracks && matchesSearch;
  });

// src/views/SessionList.vue:269-291 — groupedByStartTime, pure:
// stable sort by timeStart, then group by groupTime in first-occurrence
// order; group heading is the group time from the data.
const groupedByStartTime = (sessions) => {
  const sortedSessions = [...sessions].sort((a, b) => compareTimes(a.timeStart, b.timeStart));

  const groups = {};
  sortedSessions.forEach((session) => {
    const groupTime = session.groupTime;
    if (!groups[groupTime]) {
      groups[groupTime] = [];
    }
    groups[groupTime].push(session);
  });

  return Object.entries(groups).map(([groupTime, groupSessions]) => ({
    groupTime,
    sessionIds: groupSessions.map((s) => s.id),
  }));
};

// src/store/modules/sessions.ts:72-76 — addFavorite, pure form:
// no duplicates, insertion order preserved.
const applyAddFavorite = (favoriteSessions, sessionId) =>
  favoriteSessions.includes(sessionId)
    ? [...favoriteSessions]
    : [...favoriteSessions, sessionId];

// src/store/modules/sessions.ts:77-79 — removeFavorite, pure form:
// absent ID is a no-op.
const applyRemoveFavorite = (favoriteSessions, sessionId) =>
  favoriteSessions.filter((id) => id !== sessionId);

// ---------------------------------------------------------------------------
// Derivation
// ---------------------------------------------------------------------------
const dataRaw = readFileSync(dataPath, 'utf8');
const sourceDataSha256 = createHash('sha256').update(dataRaw).digest('hex');
const data = JSON.parse(dataRaw);
const sessions = normalizeSessions(data);
const ALL_TRACKS = firstLoadTrackFilters(sessions);

const viewFor = (input, favoriteIdsOverride) => {
  const favoriteIds = favoriteIdsOverride ?? input.favoriteIds;
  return input.mode === 'favorites'
    ? favoritesFiltered(sessions, {
        searchText: input.searchText,
        trackFilters: input.selectedTracks,
        favoriteSessions: favoriteIds,
      })
    : allFiltered(sessions, {
        searchText: input.searchText,
        trackFilters: input.selectedTracks,
      });
};

const standardCase = (id, description, input) => {
  const pool = viewFor(input);
  const groups = groupedByStartTime(pool);
  return {
    id,
    description,
    input,
    expected: {
      // P01 r2 (finding 1): the flat list is the DISPLAY order, i.e. the
      // flatten of the grouped result. r1 used `pool.map((s) => s.id)`, which
      // is the getter/input pool order and disagrees with the grouped order.
      sessionIds: groups.flatMap((g) => g.sessionIds),
      groups,
    },
  };
};

const cases = [];

cases.push(
  standardCase(
    'default-all',
    'First-load state (sessions.ts:123-128): every track appearing on a session is selected, search empty, "all" mode (SessionList.vue:293-299). All 20 sessions render; group headings come from the group time and groups appear in first-occurrence order after the timeStart sort; within the 10:00 am group sessions 6 and 7 share 10:15 am and keep input order, and in the 11:00 am group sessions 10 and 11 share 11:30 am and keep input order (stability, SessionList.vue:270-272).',
    { searchText: '', selectedTracks: ALL_TRACKS, favoriteIds: [], mode: 'all' }
  ),
  standardCase(
    'no-tracks',
    'Track filter emptied: allFiltered returns no sessions when trackFilters is empty (sessions.ts:194-195), so the list shows the "No Sessions Found" state (SessionList.vue:102-104).',
    { searchText: '', selectedTracks: [], favoriteIds: [], mode: 'all' }
  ),
  standardCase(
    'single-track',
    'Only the "Ionic" track selected: every session track must be included in the selection (sessions.ts:198), so only the single-track "Ionic" sessions 2, 4, 5 remain; session 3 ("Ionic Tooling", a "Tooling" session) is excluded despite matching the text. Fixture note: every session in this data.json is single-track [derived], so the multi-track exclusion branch of the rule is encoded but not separately exercised by any fixture.',
    { searchText: '', selectedTracks: ['Ionic'], favoriteIds: [], mode: 'all' }
  ),
  standardCase(
    'search-case-insensitive',
    'Mixed-case query "IOnic" with all tracks selected: both query and name are lowercased (sessions.ts:202), so 15 sessions whose names contain "ionic" render, including "The Evolution of Ionicons" (session 7) via substring match. Sessions without the substring (1, 6, 10, 12, 20) are excluded.',
    { searchText: 'IOnic', selectedTracks: ALL_TRACKS, favoriteIds: [], mode: 'all' }
  ),
  standardCase(
    'search-no-match',
    'Query matching no session name: empty pool, "No Sessions Found" state (SessionList.vue:102-104).',
    { searchText: 'zzz-no-such-session', selectedTracks: ALL_TRACKS, favoriteIds: [], mode: 'all' }
  ),
  standardCase(
    'search-plus-track',
    'Query "Ionic" intersected with the track subset [Ionic, Design]: a session must satisfy both the name match and the every-track-inclusion rule (sessions.ts:193-205). Remaining: the name-matching sessions whose track is Ionic (2, 4, 5) or Design (7, 18). Excluded although their names match the query: 3 (Tooling), 8 and 15 and 16 (Services), 9 (Workshop), 11 (Navigation), 13 and 14 (Communication), 17 (Documentation), 19 (Vue).',
    { searchText: 'Ionic', selectedTracks: ['Ionic', 'Design'], favoriteIds: [], mode: 'all' }
  ),
  standardCase(
    'favorites-empty',
    '"Favorites" mode with an empty favorite list: favoritesFiltered excludes everything (sessions.ts:210), so no sessions render.',
    { searchText: '', selectedTracks: ALL_TRACKS, favoriteIds: [], mode: 'favorites' }
  ),
  standardCase(
    'favorites-some',
    'Favorite list [12, 3] with only [Food] selected: favorite 12 (Lunch, Food) renders; favorite 3 (Ionic Tooling, Tooling) is still excluded by the track filter although it is favorited (sessions.ts:208-224).',
    { searchText: '', selectedTracks: ['Food'], favoriteIds: [12, 3], mode: 'favorites' }
  ),
  standardCase(
    'favorites-order',
    'Favorite list [20, 1] built in reverse chronological order (20 starts 3:30 pm, 1 starts 8:00 am): groupedByStartTime re-sorts by timeStart, so the 8:00 am section renders before the 3:00 pm section (SessionList.vue:269-291); input order of the favorite list does not affect display order.',
    { searchText: '', selectedTracks: ALL_TRACKS, favoriteIds: [20, 1], mode: 'favorites' }
  )
);

// Favorite-list mutation cases: input.favoriteIds is the state BEFORE the
// named store action; expected.favoriteIds is the list AFTER it
// (applyAddFavorite/applyRemoveFavorite transcribe sessions.ts:72-79).
// expected.sessionIds/groups show the "favorites" view under that new list.
{
  const before = [1, 12];
  const after = applyAddFavorite(before, 12);
  const pool = viewFor({ searchText: '', selectedTracks: ALL_TRACKS, favoriteIds: [], mode: 'favorites' }, after);
  const groups = groupedByStartTime(pool);
  cases.push({
    id: 'add-duplicate',
    description:
      'favoriteSessions is [1, 12] and the list "Favorite" action fires for session 12: the action branch detects the existing favorite instead of adding (SessionList.vue:306-308) and the store mutation itself is a no-op without duplicates (sessions.ts:72-76). expected.favoriteIds equals the pre-state.',
    action: { op: 'addFavorite', sessionId: 12 },
    input: { searchText: '', selectedTracks: ALL_TRACKS, favoriteIds: before, mode: 'favorites' },
    expected: {
      favoriteIds: after,
      sessionIds: groups.flatMap((g) => g.sessionIds),
      groups,
    },
  });
}

{
  const before = [1, 12];
  const after = applyRemoveFavorite(before, 99); // 99 is not a favorite
  const pool = viewFor({ searchText: '', selectedTracks: ALL_TRACKS, favoriteIds: [], mode: 'favorites' }, after);
  const groups = groupedByStartTime(pool);
  cases.push({
    id: 'remove-absent',
    description:
      'favoriteSessions is [1, 12] and removeFavorite is dispatched for session 99, which is not in the list: the filter is a no-op (sessions.ts:77-79). expected.favoriteIds equals the pre-state.',
    action: { op: 'removeFavorite', sessionId: 99 },
    input: { searchText: '', selectedTracks: ALL_TRACKS, favoriteIds: before, mode: 'favorites' },
    expected: {
      favoriteIds: after,
      sessionIds: groups.flatMap((g) => g.sessionIds),
      groups,
    },
  });
}

// ----- P01 r2 (finding 1): the flat list MUST equal the flatten of groups ----
// This is a hard invariant: if a case's expected.sessionIds ever disagrees with
// its expected.groups flattened (the display order), the derivation is wrong and
// we must fail the run instead of emitting an inconsistent fixture.
for (const c of cases) {
  const fromGroups = c.expected.groups.flatMap((g) => g.sessionIds);
  if (JSON.stringify(c.expected.sessionIds) !== JSON.stringify(fromGroups)) {
    console.error(
      `flat/group order disagreement in '${c.id}': ` +
        `flat=[${c.expected.sessionIds.join(',')}] vs groups=[${fromGroups.join(',')}]`
    );
    process.exit(1);
  }
}

// ----- P01 r2 (finding 3): supplemental self-check (NOT part of the fixture) --
// The fixture data.json contains only single-track sessions, so it cannot
// exercise the every-track-inclusion rule for multi-track sessions. We therefore
// synthesize two two-track sessions inline and run them through the SAME
// transcribed allFiltered(). Selecting only one of the two tracks must exclude
// the session; selecting both must include it.
// IMPORTANT: these sessions are local to this check and are NEVER written to
// expected-cases.json. If the check disagrees with the expected behavior we exit
// non-zero rather than continue.
{
  const synthetic = [
    { id: 100, name: 'Synthetic Dual-Track A', tracks: ['AlphaTrack', 'BetaTrack'], groupTime: '9:00 am', timeStart: '9:00 am' },
    { id: 200, name: 'Synthetic Dual-Track B', tracks: ['AlphaTrack', 'BetaTrack'], groupTime: '9:30 am', timeStart: '9:30 am' },
  ];
  const ids = (list) => list.map((s) => s.id);
  const favorites = [100, 200];
  const failures = [];
  const expectInclude = (label, got) => {
    if (JSON.stringify([...ids(got)].sort((a, b) => a - b)) !== JSON.stringify([100, 200])) {
      failures.push(`${label}: expected BOTH dual-track sessions included [100,200], but got [${ids(got).join(',')}]`);
    }
  };
  const expectExclude = (label, got) => {
    if (ids(got).length !== 0) {
      failures.push(`${label}: expected BOTH dual-track sessions EXCLUDED, but got [${ids(got).join(',')}]`);
    }
  };

  // 'all' mode: every-track inclusion
  expectExclude('all mode, [AlphaTrack]', allFiltered(synthetic, { searchText: '', trackFilters: ['AlphaTrack'] }));
  expectInclude('all mode, [AlphaTrack, BetaTrack]', allFiltered(synthetic, { searchText: '', trackFilters: ['AlphaTrack', 'BetaTrack'] }));

  // 'favorites' mode: both synthetic sessions are favorited, same every-track rule on top
  expectExclude('favorites mode, [AlphaTrack]', favoritesFiltered(synthetic, { searchText: '', trackFilters: ['AlphaTrack'], favoriteSessions: favorites }));
  expectInclude('favorites mode, [AlphaTrack, BetaTrack]', favoritesFiltered(synthetic, { searchText: '', trackFilters: ['AlphaTrack', 'BetaTrack'], favoriteSessions: favorites }));

  if (failures.length > 0) {
    console.error('supplemental self-check FAILED (synthetic dual-track; all + favorites modes):\n - ' + failures.join('\n - '));
    process.exit(1);
  }
  console.log('supplemental self-check PASSED (synthetic dual-track; not fixture): all + favorites — [AlphaTrack] -> excluded; [AlphaTrack, BetaTrack] -> [100,200] included');
}

const output = {
  sourceDataSha256,
  normalizedSessionCount: sessions.length,
  cases,
};

writeFileSync(outPath, JSON.stringify(output, null, 2) + '\n');

console.log(
  `derived ${cases.length} cases over ${sessions.length} normalized sessions; ` +
  `data.json sha256 ${sourceDataSha256}; wrote migration/reference/expected-cases.json`
);
