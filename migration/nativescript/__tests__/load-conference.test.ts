import { expect, test } from 'vitest';
import { loadConference } from '../src/data/load-conference';
import { normalizedSessionCount } from '../../reference/expected-cases.json';

test('loads the bundled fixture through the real public core with the reference count', () => {
  expect(loadConference().sessions).toHaveLength(normalizedSessionCount);
});

test('normalizes the first session and preserves its original time strings', () => {
  expect(loadConference().sessions[0]).toMatchObject({
    id: 1,
    name: 'Breakfast',
    timeStart: '8:00 am',
    timeEnd: '9:00 am',
    startMinutes: 480,
    endMinutes: 540,
    groupTime: '8:00 am',
    tracks: ['Food'],
    description: '',
  });
});

test('returns independent objects and nested arrays on every call', () => {
  const first = loadConference();
  const second = loadConference();
  expect(first).toEqual(second);
  expect(first).not.toBe(second);
  expect(first.sessions).not.toBe(second.sessions);
  expect(first.sessions[0]).not.toBe(second.sessions[0]);
  expect(first.sessions[0].tracks).not.toBe(second.sessions[0].tracks);
  expect(first.sessions[0].speakerIds).not.toBe(second.sessions[0].speakerIds);
  expect(first.tracks).not.toBe(second.tracks);
  expect(first.tracks[0]).not.toBe(second.tracks[0]);
  expect(first.speakers).not.toBe(second.speakers);
  expect(first.speakers[0]).not.toBe(second.speakers[0]);

  first.sessions[0].name = 'Changed only in the first result';
  first.sessions[0].tracks.push('Changed');
  first.sessions[0].speakerIds.push(-1);
  first.sessions.pop();
  first.tracks[0].name = 'Changed';
  first.speakers[0].name = 'Changed';
  expect(second).toEqual(loadConference());
  expect(second.sessions).toHaveLength(normalizedSessionCount);
  expect(second.sessions[0].name).toBe('Breakfast');
});
