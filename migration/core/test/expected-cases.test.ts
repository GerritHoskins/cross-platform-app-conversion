import test from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

import {
  addFavorite,
  createInitialSelection,
  groupSessions,
  normalizeConference,
  removeFavorite,
  selectSessions,
} from '@migration/core';

// The test script runs node with migration/core as the working directory.
const FIXTURE_PATH = '../reference/expected-cases.json';
const DATA_PATH = '../../public/data/data.json';

// Recorded in migration/work-packages/C03.md (step 4, revision 1) and read via node -e
// in the C03 session; if the file on disk does not match, the fixture was regenerated
// or edited and C03 must not proceed with it (the fixture is frozen by contract).
const EXPECTED_FIXTURE_SHA256 = 'ab44df1e22e95051e7f994565a90188679c11ff2b7715f43e8285b0619693fe1';

interface FixtureCase {
  id: string;
  input: {
    searchText: string;
    selectedTracks: string[];
    favoriteIds: number[];
    mode: 'all' | 'favorites';
  };
  // The case's machine-readable favorite action (C03 step 4), e.g.
  //   add-duplicate: { "op": "addFavorite", "sessionId": 12 }
  //   remove-absent: { "op": "removeFavorite", "sessionId": 99 }
  // Applied directly (revision 2, migration/reviews/C03-r1.md finding 1); the
  // FAVORITE_ACTION_OPS case-name map and the description ID parsing are deleted.
  // A case has an action if and only if it records expected.favoriteIds; this is
  // asserted for every case in step 1 of each case's test.
  action?: { op: 'addFavorite' | 'removeFavorite'; sessionId: number };
  expected: {
    groups: { groupTime: string; sessionIds: number[] }[];
    sessionIds: number[];
    favoriteIds?: number[];
  };
}

interface Fixture {
  sourceDataSha256: string;
  normalizedSessionCount: number;
  cases: FixtureCase[];
}

function sha256(buffer: Buffer): string {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

const fixtureBuffer = fs.readFileSync(path.resolve(FIXTURE_PATH));
assert.equal(
  sha256(fixtureBuffer),
  EXPECTED_FIXTURE_SHA256,
  'FROZEN FIXTURE MISMATCH: migration/reference/expected-cases.json no longer hashes to ' +
  EXPECTED_FIXTURE_SHA256 +
  '; the fixture is frozen by contract and may not be regenerated or edited during C03',
);
const fixture = JSON.parse(fixtureBuffer.toString('utf8')) as Fixture;

const dataBuffer = fs.readFileSync(path.resolve(DATA_PATH));
assert.equal(
  sha256(dataBuffer),
  fixture.sourceDataSha256,
  'public/data/data.json SHA-256 does not match sourceDataSha256 recorded in expected-cases.json; ' +
  'selection is not being exercised against the verified source data',
);
const data = JSON.parse(dataBuffer.toString('utf8'));
const conference = normalizeConference(data);
assert.equal(
  conference.sessions.length,
  fixture.normalizedSessionCount,
  `normalized session count ${conference.sessions.length} does not match the fixture's ` +
  `normalizedSessionCount ${fixture.normalizedSessionCount}`,
);

// Revision 2 (per migration/reviews/C03-r1.md findings 1-2):
//   finding 1 -- the case's machine-readable `action` is applied directly (the
//   FAVORITE_ACTION_OPS case-name map and the description ID parsing are
//   deleted); the case fails if expected.favoriteIds is present without an
//   action, or an action without expected.favoriteIds (step 1, each case test).
//   finding 2 -- the raw selectSessions output order is asserted now too: it
//   must equal the order those sessions appear in conference.sessions (input
//   order), not the grouped display order (step 2, each case test).

// C03 contract (C03.md behavior bullet 1, contract.md "Grouping and ordering"):
// selectSessions returns the passing sessions in INPUT order -- sorting and
// display order are groupSessions' job. The fixture's flat expected.sessionIds
// is the flatten of expected.groups (contract.md line 42), i.e. the display
// order, so it must be compared against the grouped result, not the raw pool.
for (const testCase of fixture.cases) {
  test(testCase.id, () => {
    // Step 1: apply the case's machine-readable action (if any) to the case's
    // starting favorite list with the C03 favorites API and assert the
    // resulting list. The action field is read straight off the case -- it is
    // never parsed out of description text.
    assert.equal(
      testCase.action !== undefined,
      testCase.expected.favoriteIds !== undefined,
      `${testCase.id}: an action is present if and only if expected.favoriteIds is recorded`,
    );
    let favoriteIds = testCase.input.favoriteIds;
    if (testCase.action !== undefined) {
      favoriteIds =
        testCase.action.op === 'addFavorite'
          ? addFavorite(favoriteIds, testCase.action.sessionId)
          : removeFavorite(favoriteIds, testCase.action.sessionId);
      assert.deepEqual(favoriteIds, testCase.expected.favoriteIds, 'favorite list after the case action');
    }
    // Step 2: selection. The RAW selectSessions output must carry the passing
    // sessions in exactly the order they appear in conference.sessions (input
    // order) -- not the grouped display order, which is groupSessions' contract.
    const selected = selectSessions(conference.sessions, { ...testCase.input, favoriteIds });
    const selectedIds = new Set(selected.map((session) => session.id));
    assert.deepEqual(
      selected.map((session) => session.id),
      conference.sessions.filter((session) => selectedIds.has(session.id)).map((session) => session.id),
      'raw selectSessions output order equals the conference.sessions (input) order of the passing sessions',
    );
    assert.equal(
      selected.length,
      testCase.expected.groups.reduce((count, group) => count + group.sessionIds.length, 0),
      'selection must admit exactly the fixture sessions (display order is groupSessions\' contract)',
    );
    // Step 3: grouping, then group-level and flat display-order assertions.
    const groups = groupSessions(selected).map((group) => ({
      groupTime: group.groupTime,
      sessionIds: group.sessions.map((session) => session.id),
    }));
    assert.deepEqual(groups, testCase.expected.groups, 'group order, membership and in-group order');
    assert.deepEqual(
      groups.flatMap((group) => group.sessionIds),
      testCase.expected.sessionIds,
      'flat display order equals the flatten of the expected groups',
    );
  });
}

test('createInitialSelection selects every session track in first-appearance order', () => {
  const defaultCase = fixture.cases.find((candidate) => candidate.id.includes('default'));
  assert.ok(defaultCase !== undefined, 'the fixture must contain a default case');
  assert.deepEqual(
    createInitialSelection(conference).selectedTracks,
    defaultCase.input.selectedTracks,
    'initial selectedTracks must equal the fixture default case input',
  );
});
