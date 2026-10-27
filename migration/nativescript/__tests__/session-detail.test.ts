import { describe, expect, test } from 'vitest';
import { loadConference } from '../src/data/load-conference';
import { createConferenceStore } from '../src/state/conference-store';
import { directEntrySessionId, listFavoriteAction, parseSessionId } from '../src/state/session-detail';

describe('strict ASCII decimal session IDs', () => {
  test.each([
    ['3', 3], ['003', 3], ['9999', 9999], ['0', 0],
    ['abc', undefined], ['3abc', undefined], ['-1', undefined], ['', undefined],
    [' 3', undefined], ['3 ', undefined], ['3\n', undefined], ['3.0', undefined],
    ['+3', undefined], ['３', undefined], ['٣', undefined],
  ] as const)('parseSessionId(%j) returns %s', (raw, expected) => {
    expect(parseSessionId(raw)).toBe(expected);
  });

  test('parsed values must match a loaded session; unknown and malformed IDs never resolve', async () => {
    const store = createConferenceStore();
    expect(store.getters.sessionById(parseSessionId('3')!)).toBeUndefined();
    await store.dispatch('load');
    const expected = loadConference().sessions.find(session => session.id === 3);
    expect(store.getters.sessionById(parseSessionId('3')!)).toEqual(expected);
    expect(store.getters.sessionById(parseSessionId('003')!)).toEqual(expected);
    expect(store.getters.sessionById(parseSessionId('9999')!)).toBeUndefined();
    expect(parseSessionId('3abc')).toBeUndefined();
  });
});

describe('list favorite action plans', () => {
  test('all-mode non-favorite adds before the informational alert', () => {
    expect(listFavoriteAction('all', false)).toEqual({
      kind: 'add-then-alert', dialog: { title: 'Favorite Added', okButtonText: 'OK' },
    });
  });

  test('all-mode existing favorite reproduces the removal-confirmation quirk', () => {
    expect(listFavoriteAction('all', true)).toEqual({
      kind: 'confirm-remove',
      dialog: {
        title: 'Favorite already added',
        message: 'Would you like to remove this session from your favorites?',
        cancelButtonText: 'Cancel', okButtonText: 'Remove',
      },
    });
  });

  test.each([true, false])('favorites mode confirms removal regardless of current membership (%s)', (favorite) => {
    expect(listFavoriteAction('favorites', favorite)).toEqual({
      kind: 'confirm-remove',
      dialog: {
        title: 'Remove Favorite',
        message: 'Would you like to remove this session from your favorites?',
        cancelButtonText: 'Cancel', okButtonText: 'Remove',
      },
    });
  });
});

describe('development-only direct entry', () => {
  test.each(['3', '003', '9999', 'abc', '3abc', ' '])('preserves non-empty raw extra %j only in dev', (extra) => {
    expect(directEntrySessionId(extra, true)).toBe(extra);
    expect(directEntrySessionId(extra, false)).toBeUndefined();
  });

  test.each(['', null, undefined])('empty or missing extra %j never navigates', (extra) => {
    expect(directEntrySessionId(extra, true)).toBeUndefined();
    expect(directEntrySessionId(extra, false)).toBeUndefined();
  });
});
