import { expect, test } from 'vitest';
import { loadConference } from '../src/data/load-conference';
import { toScheduleRows } from '../src/state/schedule-rows';

test('preserves input group/session order, with a header immediately before each group', () => {
  const sessions = loadConference().sessions;
  const groups = [
    { groupTime: 'later first', sessions: [sessions[4], sessions[1]] },
    { groupTime: 'earlier second', sessions: [sessions[0]] },
  ];
  Object.freeze(groups[0].sessions);
  Object.freeze(groups[1].sessions);
  groups.forEach(Object.freeze);
  Object.freeze(groups);
  const rows = toScheduleRows(groups);
  expect(rows).toEqual([
    { kind: 'header', key: 'h:later first', groupTime: 'later first' },
    { kind: 'session', key: `s:${sessions[4].id}`, session: sessions[4] },
    { kind: 'session', key: `s:${sessions[1].id}`, session: sessions[1] },
    { kind: 'header', key: 'h:earlier second', groupTime: 'earlier second' },
    { kind: 'session', key: `s:${sessions[0].id}`, session: sessions[0] },
  ]);
  expect(rows[1].kind === 'session' && rows[1].session).toBe(sessions[4]);
});

test('uses distinct, stable header/time and session/id keys on repeated conversion', () => {
  const sessions = loadConference().sessions.slice(0, 2);
  const groups = [{ groupTime: '8:00 am', sessions }];
  const first = toScheduleRows(groups);
  const second = toScheduleRows(groups);
  expect(first.map(row => row.key)).toEqual(['h:8:00 am', 's:1', 's:2']);
  expect(new Set(first.map(row => row.key)).size).toBe(first.length);
  expect(second).toEqual(first);
  expect(second).not.toBe(first);
});

test('empty groups produce empty rows without placeholder content', () => {
  expect(toScheduleRows(Object.freeze([]))).toEqual([]);
});
