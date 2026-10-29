import test from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

import {
  ConferenceDataError,
  findSpeakerByRouteId,
  normalizeConference,
  normalizeSpeakerProfiles,
  sessionsForSpeaker,
  sortSpeakers,
} from '@migration/core';
import type { Speaker, SpeakerNotFoundReason, SpeakerProfile } from '@migration/core';

interface Fixture {
  sourceDataSha256: string;
  speakerCount: number;
  speakersSorted: { id: number; name: string; title: string }[];
  sessionsBySpeaker: { speakerId: number; sessionIds: number[]; sessionNames: string[] }[];
  speakerDetails: SpeakerProfile[];
  unknownSpeakerIds: { input: string; outcome: 'not-found'; reason: SpeakerNotFoundReason }[];
  supplemental: {
    equalNames: { input: Speaker[]; expectedIds: number[] };
    speakerWithoutSessions: { speaker: Speaker; expectedSessionIds: number[] };
    missingFields: { input: { id: string }; expected: SpeakerProfile };
  };
  invariants: { sessionLinks: number };
}

// Same working-directory resolution as expected-cases.test.ts; P02 is frozen.
const fixtureBuffer = fs.readFileSync(path.resolve('../reference/expected-speakers.json'));
const sha256 = (buffer: Buffer): string => crypto.createHash('sha256').update(buffer).digest('hex');
assert.equal(
  sha256(fixtureBuffer),
  '421435b6a09720f72a346256270ae03c2dfbec9c720f8a016517f7538de9e29e',
  'FROZEN FIXTURE MISMATCH: expected-speakers.json changed; do not regenerate or edit the P02 fixture',
);
const fixture = JSON.parse(fixtureBuffer.toString('utf8').replace(/^\uFEFF/, '')) as Fixture;
const dataBuffer = fs.readFileSync(path.resolve('../../public/data/data.json'));
assert.equal(
  sha256(dataBuffer),
  fixture.sourceDataSha256,
  'public/data/data.json SHA-256 differs from expected-speakers.json sourceDataSha256; refusing unverified data',
);
const data: unknown = JSON.parse(dataBuffer.toString('utf8').replace(/^\uFEFF/, ''));
const profiles = normalizeSpeakerProfiles(data);
const sorted = sortSpeakers(profiles);
const conference = normalizeConference(data);

// speakers-contract.md: "Speaker order" (CD1).
test('P02 sorted speakers match every frozen id, name and title', () => {
  assert.equal(profiles.length, fixture.speakerCount);
  assert.equal(profiles.length, 13);
  assert.deepEqual(sorted.map(({ id, name, title }) => ({ id, name, title })), fixture.speakersSorted);
});

// speakers-contract.md: "Sessions per speaker" (CD2).
for (const expected of fixture.sessionsBySpeaker) {
  test(`P02 speaker ${expected.speakerId} sessions retain exact store order and names`, () => {
    const sessions = sessionsForSpeaker(conference.sessions, expected.speakerId);
    assert.deepEqual(sessions.map((session) => session.id), expected.sessionIds);
    assert.deepEqual(sessions.map((session) => session.name), expected.sessionNames);
  });
}

test('P02 all per-speaker session links total the frozen invariant', () => {
  const total = fixture.sessionsBySpeaker.reduce(
    (sum, { speakerId }) => sum + sessionsForSpeaker(conference.sessions, speakerId).length,
    0,
  );
  assert.equal(total, fixture.invariants.sessionLinks);
  assert.equal(total, 26);
});

// speakers-contract.md: "Data and normalization" / "Speaker detail" (CD3).
test('P02 all sorted profiles match detail fields, excluding target asset metadata', () => {
  assert.deepEqual(
    sorted.map(({ id, name, title, about, profilePic }) => ({ id, name, title, about, profilePic })),
    fixture.speakerDetails.map(({ id, name, title, about, profilePic }) => ({ id, name, title, about, profilePic })),
  );
});

for (const expected of fixture.unknownSpeakerIds) {
  test(`P02 speaker route ${JSON.stringify(expected.input)} is ${expected.reason}`, () => {
    assert.deepEqual(findSpeakerByRouteId(profiles, expected.input), {
      status: expected.outcome,
      reason: expected.reason,
    });
  });
}

test('P02 every canonical fixture route finds the identical profile', () => {
  for (const profile of profiles) {
    const result = findSpeakerByRouteId(profiles, String(profile.id));
    assert.equal(result.status, 'found');
    if (result.status === 'found') assert.strictEqual(result.speaker, profile);
  }
});

test('P02 supplemental equal names use numeric ID ties', () => {
  const probe = fixture.supplemental.equalNames;
  assert.deepEqual(sortSpeakers(probe.input).map((speaker) => speaker.id), probe.expectedIds);
});

test('P02 supplemental speaker without sessions has an empty list', () => {
  const probe = fixture.supplemental.speakerWithoutSessions;
  assert.deepEqual(sessionsForSpeaker(conference.sessions, probe.speaker.id), probe.expectedSessionIds);
  assert.deepEqual(probe.expectedSessionIds, []);
});

test('P02 supplemental optional fields default, but C02 missing-name strictness remains', () => {
  const probe = fixture.supplemental.missingFields;
  const [profile] = normalizeSpeakerProfiles({ speakers: [{ ...probe.input, name: 'Present name' }] });
  for (const field of ['title', 'about', 'profilePic'] as const) {
    assert.equal(profile[field], probe.expected[field]);
    assert.equal(profile[field], '');
  }
  assert.throws(
    () => normalizeSpeakerProfiles({ speakers: [probe.input] }),
    (error: unknown) => error instanceof ConferenceDataError && error.path === 'speakers[0].name',
  );
});
