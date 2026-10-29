import test from 'node:test';
import assert from 'node:assert/strict';

import {
  ConferenceDataError,
  findSpeakerByRouteId,
  normalizeConference,
  normalizeSpeakerProfiles,
  parseSpeakerRouteId,
  sessionsForSpeaker,
  sortSpeakers,
} from '@migration/core';
import type { Speaker, SpeakerLookup, SpeakerProfile } from '@migration/core';

function rawConference(speakers: unknown = [{ id: '1', name: 'Ada' }, { id: '2', name: 'Bea' }]) {
  return {
    speakers,
    tracks: [],
    schedule: [{ date: 'Synthetic', groups: [{ time: '8:00 am', sessions: [
      { id: '2', name: 'Later shared', timeStart: '11:00 am', timeEnd: '12:00 pm', location: '', tracks: [], speakerNames: ['Ada', 'Bea'] },
      { id: '1', name: 'Earlier solo', timeStart: '8:00 am', timeEnd: '9:00 am', location: '', tracks: [], speakerNames: ['Ada'] },
    ] }] }],
  };
}

function deepFreeze<T>(value: T): T {
  if (value !== null && typeof value === 'object') {
    Object.values(value).forEach(deepFreeze);
    Object.freeze(value);
  }
  return value;
}

function dataError(action: () => unknown): ConferenceDataError {
  try {
    action();
  } catch (error: unknown) {
    assert.ok(error instanceof ConferenceDataError);
    return error;
  }
  assert.fail('expected ConferenceDataError');
}

// speakers-contract.md, "Speaker order", P02 CD1.
test('speaker order uses case-sensitive raw code units without Unicode normalization', () => {
  const input = deepFreeze([
    { id: 5, name: 'É' }, { id: 4, name: 'z' }, { id: 3, name: 'alex' },
    { id: 2, name: 'Zed' }, { id: 1, name: 'E\u0301' },
  ]);
  const before = structuredClone(input);
  const sorted = sortSpeakers(input);
  assert.deepEqual(sorted.map((speaker) => speaker.name), ['E\u0301', 'Zed', 'alex', 'z', 'É']);
  assert.notStrictEqual(sorted, input);
  assert.deepEqual(input, before);
});

test('equal names use numeric ID order and identical name/ID pairs are stable', () => {
  const input = deepFreeze([
    { id: 20, name: 'Same', marker: 'first' },
    { id: 3, name: 'Same', marker: 'lower id' },
    { id: 20, name: 'Same', marker: 'second' },
  ]);
  assert.deepEqual(sortSpeakers(input).map((speaker) => speaker.marker), ['lower id', 'first', 'second']);
  assert.deepEqual(input.map((speaker) => speaker.marker), ['first', 'lower id', 'second']);
  const empty: Speaker[] = [];
  assert.deepEqual(sortSpeakers(empty), []);
  assert.notStrictEqual(sortSpeakers(empty), empty);
});

// speakers-contract.md, "Sessions per speaker", P02 CD2.
test('speaker sessions keep reversed-time store order and shared session identity', () => {
  const sessions = deepFreeze(normalizeConference(rawConference()).sessions);
  const before = structuredClone(sessions);
  assert.ok(sessions[0].startMinutes > sessions[1].startMinutes);
  const ada = sessionsForSpeaker(sessions, 1);
  const bea = sessionsForSpeaker(sessions, 2);
  assert.deepEqual(ada.map((session) => session.id), [2, 1]);
  assert.deepEqual(bea.map((session) => session.id), [2]);
  assert.strictEqual(ada[0], bea[0]);
  assert.strictEqual(ada[0], sessions[0]);
  assert.notStrictEqual(ada, sessions);
  assert.deepEqual(sessionsForSpeaker(sessions, 999), []);
  assert.deepEqual(sessions, before);
});

// speakers-contract.md, "Speaker detail", P02 CD3; router input is unknown.
const malformedInputs: unknown[] = [
  undefined, null, [], ['1'], ['1', '2'], 1, 0, -1, 1.5, NaN, Infinity,
  true, false, {}, new String('1'), 1n, Symbol('1'),
  '', ' ', '\t', '\n', ' 1', '1 ', '1\t', '1\n', '1\r\n', '1\u2028', '1\u2029',
  '+1', '-1', '0', '00', '01', '1.5', '1.0', '1abc', '1e2', '0x10', '١', '１',
  '9007199254740992', '999999999999999999999999999999999999999999999',
];
for (const [index, input] of malformedInputs.entries()) {
  test(`speaker route malformed input class ${index}: ${String(input)}`, () => {
    assert.equal(parseSpeakerRouteId(input), null);
    assert.deepEqual(findSpeakerByRouteId([{ id: 1, name: 'Ada' }], input), {
      status: 'not-found', reason: 'malformed-id',
    });
  });
}

for (const input of ['1', '13', '999', '9007199254740991']) {
  test(`speaker route accepts canonical safe integer ${input}`, () => {
    assert.equal(parseSpeakerRouteId(input), Number(input));
  });
}

test('speaker lookup preserves generic profile identity and separates unknown from malformed', () => {
  const profiles = deepFreeze(normalizeSpeakerProfiles({ speakers: [{ id: '1', name: 'Ada', title: 'Engineer' }] }));
  const result: SpeakerLookup<SpeakerProfile> = findSpeakerByRouteId(profiles, '1');
  assert.equal(result.status, 'found');
  if (result.status === 'found') {
    assert.strictEqual(result.speaker, profiles[0]);
    assert.equal(result.speaker.title, 'Engineer');
  }
  assert.deepEqual(findSpeakerByRouteId(profiles, '999'), { status: 'not-found', reason: 'unknown-id' });
  assert.deepEqual(findSpeakerByRouteId(profiles, '01'), { status: 'not-found', reason: 'malformed-id' });
  assert.deepEqual(findSpeakerByRouteId([], '1'), { status: 'not-found', reason: 'unknown-id' });
});

// speakers-contract.md, "Data and normalization", P02 CD3 / C04 name decision.
test('profile normalization defaults absent, null and empty text and preserves strings as-is', () => {
  const speakers = [
    { id: '3', name: 'Absent' },
    { id: '2', name: 'Null', title: null, about: null, profilePic: null },
    { id: '1', name: 'Empty', title: '', about: '', profilePic: '' },
    { id: '4', name: 'Text', title: ' Engineer ', about: '\nBiography\n', profilePic: '/photo.jpg' },
  ];
  const profiles = normalizeSpeakerProfiles({ speakers, schedule: 'not validated', tracks: false });
  assert.deepEqual(profiles, [
    { id: 3, name: 'Absent', title: '', about: '', profilePic: '' },
    { id: 2, name: 'Null', title: '', about: '', profilePic: '' },
    { id: 1, name: 'Empty', title: '', about: '', profilePic: '' },
    { id: 4, name: 'Text', title: ' Engineer ', about: '\nBiography\n', profilePic: '/photo.jpg' },
  ]);
  assert.notStrictEqual(profiles[0], speakers[0]);
});

for (const field of ['title', 'about', 'profilePic'] as const) {
  test(`profile ${field} rejects every non-text non-null type at its exact path`, () => {
    for (const value of [42, false, [], {}, 1n, Symbol('bad'), () => 'bad']) {
      const error = dataError(() => normalizeSpeakerProfiles({ speakers: [{ id: '1', name: 'Ada', [field]: value }] }));
      assert.equal(error.path, `speakers[0].${field}`);
    }
    const error = dataError(() => normalizeSpeakerProfiles({ speakers: [
      { id: '1', name: 'Ada' }, { id: '2', name: 'Bea' },
      { id: '3', name: 'Cee' }, { id: '4', name: 'Dee', [field]: 42 },
    ] }));
    assert.equal(error.path, `speakers[3].${field}`);
  });
}

test('profile id/name and speaker container errors exactly match existing conference errors', () => {
  const invalidSpeakers: unknown[] = [
    undefined, null, {}, 'speakers', [null], [[]],
    [{ name: 'Ada' }], [{ id: null, name: 'Ada' }], [{ id: 'bad', name: 'Ada' }],
    [{ id: -1, name: 'Ada' }], [{ id: '1' }], [{ id: '1', name: '' }],
    [{ id: '1', name: null }], [{ id: '1', name: 42 }],
  ];
  for (const speakers of invalidSpeakers) {
    const raw = rawConference(speakers);
    // A default parameter intentionally supplies speakers for undefined: delete it.
    if (speakers === undefined) delete (raw as { speakers?: unknown }).speakers;
    const expected = dataError(() => normalizeConference(raw));
    const actual = dataError(() => normalizeSpeakerProfiles(raw));
    assert.equal(actual.path, expected.path);
    assert.equal(actual.message, expected.message);
  }
  for (const root of [undefined, null, [], 'bad', 42]) {
    const expected = dataError(() => normalizeConference(root));
    const actual = dataError(() => normalizeSpeakerProfiles(root));
    assert.equal(actual.path, expected.path);
    assert.equal(actual.message, expected.message);
  }
});

test('every speaker function accepts deep-frozen input without mutation or shared result arrays', () => {
  const raw = deepFreeze(rawConference());
  const before = structuredClone(raw);
  const profiles = deepFreeze(normalizeSpeakerProfiles(raw));
  const sessions = deepFreeze(normalizeConference(raw).sessions);
  const sorted = sortSpeakers(profiles);
  const linked = sessionsForSpeaker(sessions, 1);
  assert.notStrictEqual(sorted, profiles);
  assert.notStrictEqual(linked, sessions);
  assert.notStrictEqual(normalizeSpeakerProfiles(raw), profiles);
  assert.notStrictEqual(normalizeSpeakerProfiles(raw)[0], profiles[0]);
  assert.equal(parseSpeakerRouteId('1'), 1);
  assert.equal(findSpeakerByRouteId(profiles, '1').status, 'found');
  assert.deepEqual(raw, before);
});
