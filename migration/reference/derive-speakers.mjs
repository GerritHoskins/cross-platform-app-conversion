#!/usr/bin/env node
/**
 * P02 speakers reference derivation; dependency-free, static and derived only.
 * Run from the repository root: node migration/reference/derive-speakers.mjs
 * No app execution, network, timestamps, randomness or image copying/encoding.
 * Only expected-speakers.json is written; P01 files are never written or run.
 */
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const outputPath = join(repoRoot, 'migration/reference/expected-speakers.json');
const digest = bytes => createHash('sha256').update(bytes).digest('hex');

// src/store/modules/speakers.ts:60-72: parseInt ID; name/title/about || ''.
// D3 deliberate decision: profilePic also defaults to '' (source copies raw).
// Only the D2 read-only subset is retained; contact fields are out of scope.
// speaker.sessions || [] at line 72 is NOT the list-card session relationship.
const normalizeSpeaker = speaker => ({
  id: parseInt(speaker.id),
  name: speaker.name || '',
  title: speaker.title || '',
  about: speaker.about || '',
  profilePic: speaker.profilePic || '',
});

// src/store/modules/sessions.ts:102-120: name->ID map, group/session data order,
// parseInt IDs, description || '', speakerNames || [], tracks and groupTime.
// Inherited P01 decision: omit unresolved names, unlike source's undefined.
const normalizeSessions = data => {
  const speakerNameToId = new Map(data.speakers.map(s => [s.name, parseInt(s.id)]));
  return data.schedule[0].groups.flatMap(group => group.sessions.map(session => ({
    id: parseInt(session.id),
    timeStart: session.timeStart,
    timeEnd: session.timeEnd,
    name: session.name,
    location: session.location,
    description: session.description || '',
    speakerIds: (session.speakerNames || [])
      .map(name => speakerNameToId.get(name))
      .filter(id => id !== undefined),
    tracks: session.tracks,
    selectedTrackFilters: [],
    groupTime: group.time,
  })));
};

// src/views/SpeakerList.vue:109-111 uses name.localeCompare. D1 deliberately
// substitutes raw UTF-16 code-unit lexicographic name order (< and >), case-
// sensitive, no locale/case-fold/Unicode normalization; equal names use numeric
// ID ascending, then original input index for otherwise identical records.
const sortSpeakers = speakers => speakers
  .map((speaker, index) => ({ speaker, index }))
  .sort((a, b) => {
    const left = a.speaker;
    const right = b.speaker;
    return (left.name < right.name ? -1 : left.name > right.name ? 1 : 0)
      || left.id - right.id || a.index - b.index;
  })
  .map(entry => entry.speaker);

// src/views/SpeakerList.vue:113-117: includes membership + filter, never a time
// sort or schedule search/track/favorites filtering. D2 freezes store order;
// a speaker without matching sessions gets [] via the same filter.
const sessionsForSpeaker = (sessions, speakerId) =>
  sessions.filter(session => session.speakerIds.includes(speakerId));

// src/views/SpeakerDetail.vue:211-215,223-227 uses permissive parseInt.
// D3 deliberate replacement: accept only canonical positive decimal route
// strings whose value is a safe integer; reject blanks, signs, leading zeros,
// surrounding whitespace, fractions and trailing junk rather than partial parse.
// Missing or malformed ID -> explicit not-found, never endless loading text.
const speakerLookup = (speakers, input) => {
  if (typeof input !== 'string' || !/^[1-9][0-9]*$/.test(input)
      || !Number.isSafeInteger(Number(input))) {
    return { outcome: 'not-found', reason: 'malformed-id', speakerId: null };
  }
  const speaker = speakers.find(s => s.id === Number(input));
  return speaker
    ? { outcome: 'found', speakerId: speaker.id }
    : { outcome: 'not-found', reason: 'unknown-id', speakerId: null };
};

const raw = readFileSync(join(repoRoot, 'public/data/data.json'));
const sourceDataSha256 = digest(raw);
const data = JSON.parse(raw.toString('utf8').replace(/^\uFEFF/, ''));
const speakers = data.speakers.map(normalizeSpeaker);
const sessions = normalizeSessions(data);
assert.equal(speakers.length, 13, 'fixture must contain 13 speakers');
assert.equal(new Set(speakers.map(s => s.id)).size, speakers.length, 'speaker IDs must be unique');
assert.ok(speakers.every(s => Number.isSafeInteger(s.id) && s.id > 0));

const sorted = sortSpeakers(speakers);
// Compute the source comparator at runtime ONLY as a parity assertion. It never
// controls the emitted order. This fixture has no equal speaker names.
const sourceLocaleOrder = [...speakers].sort((a, b) => a.name.localeCompare(b.name)).map(s => s.id);
assert.deepEqual(sorted.map(s => s.id), sourceLocaleOrder, 'D1 must reproduce source fixture order');

const sessionsBySpeaker = sorted.map(speaker => {
  const matching = sessionsForSpeaker(sessions, speaker.id);
  return { speakerId: speaker.id, sessionIds: matching.map(s => s.id), sessionNames: matching.map(s => s.name) };
});
const sessionLinks = sessionsBySpeaker.reduce((sum, entry) => sum + entry.sessionIds.length, 0);
const resolvedSpeakerEntries = sessions.reduce((sum, session) => sum + session.speakerIds.length, 0);
assert.equal(sessionLinks, resolvedSpeakerEntries, 'per-speaker links must equal all resolved speakerIds entries');
assert.ok(sessions.every(session => session.speakerIds.every(id => speakers.some(s => s.id === id))));

// src/views/SpeakerList.vue:36-40, SpeakerDetail.vue:20-29 show profilePic.
// D6 deliberate packaging contract: bundle source files byte-identically and
// verify hashes. Read image bytes for SHA-256 only; never emit their contents.
const speakerDetails = sorted.map(speaker => {
  assert.ok(speaker.profilePic, `fixture speaker ${speaker.id} must have a photo`);
  const profilePicFile = 'public/' + speaker.profilePic.replace(/^\//, '');
  const path = resolve(repoRoot, profilePicFile);
  const imageRoot = resolve(repoRoot, 'public/assets/img/speakers') + sep;
  assert.ok(path.startsWith(imageRoot), 'photo must stay inside the speaker image directory');
  assert.ok(existsSync(path) && statSync(path).isFile(), `missing profile image: ${profilePicFile}`);
  return {
    ...speaker,
    profilePicFile: relative(repoRoot, path).split(sep).join('/'),
    profilePicSha256: digest(readFileSync(path)),
    profilePicBytes: statSync(path).size,
  };
});

const unknownSpeakerIds = ['999', '0', '-1', 'abc', '1.5', '', '1abc', '01', ' 1', '9007199254740992']
  .map(input => ({ input, ...speakerLookup(speakers, input) }));
assert.ok(unknownSpeakerIds.every(entry => entry.outcome === 'not-found'));
assert.ok(speakers.every(s => speakerLookup(speakers, String(s.id)).speakerId === s.id));

// Supplemental checks are SYNTHETIC, NOT fixture records; run through the same
// functions. Equal-name IDs deliberately start reversed to catch stable-only
// tie handling; no-sessions probe runs against the real normalized sessions.
const tieInput = [{ id: 200, name: 'Same' }, { id: 100, name: 'Same' }, { id: 300, name: 'After' }];
const tieOrder = sortSpeakers(tieInput).map(s => s.id);
assert.deepEqual(tieOrder, [300, 100, 200]);
const emptySessions = sessionsForSpeaker(sessions, 1000).map(s => s.id);
assert.deepEqual(emptySessions, []);
const emptyDetails = normalizeSpeaker({ id: '1000' });
assert.deepEqual(emptyDetails, { id: 1000, name: '', title: '', about: '', profilePic: '' });
const supplemental = {
  label: 'synthetic, not fixture',
  equalNames: { input: tieInput, expectedIds: tieOrder, passed: true },
  speakerWithoutSessions: { speaker: { id: 1000, name: 'Synthetic No Sessions' }, expectedSessionIds: emptySessions, passed: true },
  missingFields: { input: { id: '1000' }, expected: emptyDetails, passed: true },
};

const output = {
  sourceDataSha256,
  speakerCount: speakers.length,
  speakersSorted: sorted.map(({ id, name, title }) => ({ id, name, title })),
  sessionsBySpeaker,
  speakerDetails,
  unknownSpeakerIds,
  supplemental,
  invariants: {
    uniqueSpeakerIds: true,
    sessionCount: sessions.length,
    sessionLinks,
    resolvedSpeakerEntries,
    sourceLocaleOrder,
    deterministicOrderMatchesSource: true,
    everyProfileImageExists: true,
    unresolvedSpeakerNames: data.schedule[0].groups.flatMap(g => g.sessions)
      .flatMap(s => s.speakerNames || []).filter(name => !data.speakers.some(s => s.name === name)),
    speakersWithOwnSessionsField: data.speakers.filter(s => Object.hasOwn(s, 'sessions')).map(s => parseInt(s.id)),
  },
};
writeFileSync(outputPath, JSON.stringify(output, null, 2) + '\n');
console.log(`derived ${speakers.length} speakers; ${sessionLinks} speaker-session links; ${speakerDetails.length} image hashes; source order parity and synthetic checks passed; data sha256 ${sourceDataSha256}; wrote migration/reference/expected-speakers.json`);
