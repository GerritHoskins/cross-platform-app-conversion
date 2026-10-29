/// <reference types="node" />
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

import { SPEAKER_PHOTOS, speakerPhoto } from '../src/data/speaker-photos';

type Photo = { profilePic: string; profilePicFile: string; profilePicBytes: number; profilePicSha256: string };
const fixtureBytes = readFileSync(path.join(__dirname, '../../reference/expected-speakers.json'));
const expected = JSON.parse(fixtureBytes.toString('utf8').replace(/^\uFEFF/, '')) as { speakerDetails: Photo[] };
const folder = path.join(__dirname, '../assets/images/speakers');

test('guards the frozen P02 photo fixture SHA-256', () => {
  expect(createHash('sha256').update(fixtureBytes).digest('hex')).toBe('421435b6a09720f72a346256270ae03c2dfbec9c720f8a016517f7538de9e29e');
});

test.each(expected.speakerDetails)('bundles $profilePic byte-identically with the P02 size and SHA-256 and a static map entry', photo => {
  const bytes = readFileSync(path.join(folder, path.basename(photo.profilePicFile)));
  expect(bytes.length).toBe(photo.profilePicBytes);
  expect(createHash('sha256').update(bytes).digest('hex')).toBe(photo.profilePicSha256);
  expect(bytes.equals(readFileSync(path.join(__dirname, '../../..', photo.profilePicFile)))).toBe(true);
  expect(Object.prototype.hasOwnProperty.call(SPEAKER_PHOTOS, photo.profilePic)).toBe(true);
  expect(speakerPhoto(photo.profilePic)).toBeDefined();
});

test('asset folder and static photo map hold exactly the 13 fixture photos', () => {
  expect(expected.speakerDetails).toHaveLength(13);
  expect(readdirSync(folder).sort()).toEqual(expected.speakerDetails.map(photo => path.basename(photo.profilePicFile)).sort());
  expect(Object.keys(SPEAKER_PHOTOS).sort()).toEqual(expected.speakerDetails.map(photo => photo.profilePic).sort());
});

test.each(['', '/unknown.jpg', 'toString', '__proto__'])('empty or unknown URI %j has no image and no network fallback', uri => {
  expect(speakerPhoto(uri)).toBeUndefined();
});
