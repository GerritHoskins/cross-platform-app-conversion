import test from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

import { ConferenceDataError, normalizeConference } from '@migration/core';

// The test script runs node with migration/core as the working directory.
const dataBuffer = fs.readFileSync(path.resolve('../../public/data/data.json'));
const expectedCases = JSON.parse(fs.readFileSync(path.resolve('../reference/expected-cases.json'), 'utf8')) as {
  sourceDataSha256: string;
};
assert.equal(
  crypto.createHash('sha256').update(dataBuffer).digest('hex'),
  expectedCases.sourceDataSha256,
  'data.json sha256 does not match expected-cases.json sourceDataSha256; refusing to normalize unverified data',
);

// JSON.parse yields `any`; the tests treat this as the raw fixture document.
const raw: any = JSON.parse(dataBuffer.toString('utf8'));

function freshCopy(): any {
  return JSON.parse(JSON.stringify(raw));
}

function expectedSpeakerId(name: string): number {
  for (let i = raw.speakers.length - 1; i >= 0; i -= 1) {
    if (raw.speakers[i].name === name) return Number(raw.speakers[i].id);
  }
  throw new Error(`fixture speaker "${name}" not found`);
}

function assertConferenceDataError(input: unknown, expectedPath: string): void {
  assert.throws(
    () => normalizeConference(input),
    (error: unknown) => {
      assert.ok(
        error instanceof ConferenceDataError,
        `expected a ConferenceDataError, got ${error instanceof Error ? error.name : typeof error}`,
      );
      assert.equal(error.path, expectedPath);
      assert.ok(error.message.startsWith(expectedPath), `message ${JSON.stringify(error.message)} does not start with ${JSON.stringify(expectedPath)}`);
      return true;
    },
  );
}

test('fixture data normalizes to the contracted shape', () => {
  const conference = normalizeConference(raw);
  assert.equal(conference.sessions.length, 20);
  assert.deepStrictEqual(
    conference.sessions.map((session: any) => session.id),
    Array.from({ length: 20 }, (_, index) => index + 1),
  );
  assert.equal(new Set(conference.sessions.map((session: any) => session.groupTime)).size, 8);
  assert.equal(conference.tracks.length, 10);
  assert.equal(conference.speakers.length, 13);
  assert.equal(typeof conference.date, 'string');
  assert.ok(conference.date.length > 0, 'date must be a non-empty string');
});

test('session 1 matches the frozen contract values', () => {
  const conference = normalizeConference(raw);
  const first = conference.sessions[0];
  assert.equal(first.description, '');
  assert.equal(first.groupTime, '8:00 am');
  assert.equal(first.startMinutes, 480);
});

test('every session is finite, ordered, and fully resolved', () => {
  const conference = normalizeConference(raw);
  const rawSessions = raw.schedule[0].groups.flatMap((group: any) => group.sessions);
  conference.sessions.forEach((session: any, index: number) => {
    assert.ok(Number.isFinite(session.startMinutes), `session ${index + 1}: startMinutes finite`);
    assert.ok(Number.isFinite(session.endMinutes), `session ${index + 1}: endMinutes finite`);
    assert.ok(session.endMinutes >= session.startMinutes, `session ${index + 1}: endMinutes >= startMinutes`);
    for (const speakerId of session.speakerIds) {
      assert.ok(Number.isInteger(speakerId), `session ${index + 1}: speakerIds are integers`);
    }
    const rawNames: string[] = rawSessions[index].speakerNames ?? [];
    // The fixture has no unresolved speaker names, so every entry must resolve.
    assert.deepStrictEqual(session.speakerIds, rawNames.map(expectedSpeakerId), `session ${index + 1}: all speakerNames resolved`);
  });
});

test('unresolved speaker names are omitted from speakerIds', () => {
  const modified = freshCopy();
  const firstSession = modified.schedule[0].groups[0].sessions[0];
  const originalNames: string[] = firstSession.speakerNames ?? [];
  const rogueName = 'A Speaker That Does Not Exist In The Fixture';
  firstSession.speakerNames = [...originalNames, rogueName];

  const conference = normalizeConference(modified);
  assert.deepStrictEqual(conference.sessions[0].speakerIds, originalNames.map(expectedSpeakerId));
  assert.ok(
    conference.speakers.every((speaker) => speaker.name !== rogueName),
    'the rogue name must not appear among normalized speakers',
  );
  assert.ok(
    conference.sessions[0].speakerIds.every((id) => Number.isInteger(id) && id !== undefined),
    'no undefined ids may be emitted',
  );
});

test('missing schedule is reported at path "schedule"', () => {
  assertConferenceDataError({}, 'schedule');
});

test('non-numeric session id fails at its path', () => {
  const modified = freshCopy();
  modified.schedule[0].groups[0].sessions[0].id = 'not-a-number';
  assertConferenceDataError(modified, 'schedule[0].groups[0].sessions[0].id');
});

test('duplicate session id fails at the second occurrence', () => {
  const modified = freshCopy();
  modified.schedule[0].groups[1].sessions[0].id = modified.schedule[0].groups[0].sessions[0].id;
  assertConferenceDataError(modified, 'schedule[0].groups[1].sessions[0].id');
});

test('missing session name fails at its path', () => {
  const modified = freshCopy();
  delete modified.schedule[0].groups[0].sessions[0].name;
  assertConferenceDataError(modified, 'schedule[0].groups[0].sessions[0].name');
});

test('unparseable timeStart fails at its path', () => {
  const modified = freshCopy();
  modified.schedule[0].groups[0].sessions[0].timeStart = '25:00';
  assertConferenceDataError(modified, 'schedule[0].groups[0].sessions[0].timeStart');
});

test('non-string description fails at its path', () => {
  const modified = freshCopy();
  modified.schedule[0].groups[0].sessions[0].description = 42;
  assertConferenceDataError(modified, 'schedule[0].groups[0].sessions[0].description');
});

test('non-array session tracks fails at its path', () => {
  const modified = freshCopy();
  modified.schedule[0].groups[0].sessions[0].tracks = 'Main';
  assertConferenceDataError(modified, 'schedule[0].groups[0].sessions[0].tracks');
});

test('speaker without id fails at its path', () => {
  const modified = freshCopy();
  delete modified.speakers[0].id;
  assertConferenceDataError(modified, 'speakers[0].id');
});

test('normalization does not mutate its input', () => {
  const before = freshCopy();
  normalizeConference(raw);
  assert.deepStrictEqual(raw, before);
});

test('mutating one result cannot affect a later normalization of the same input', () => {
  const first = normalizeConference(raw);
  const untouchedTracks = [...(first.sessions[0] as any).tracks];
  (first.sessions[0] as any).tracks.push('Injected Track');
  const second = normalizeConference(raw);
  assert.notStrictEqual(first.sessions[0], second.sessions[0]);
  assert.deepStrictEqual((second.sessions[0] as any).tracks, untouchedTracks);
});
