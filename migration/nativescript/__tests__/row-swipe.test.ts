import { describe, expect, test } from 'vitest';
import { listFavoriteAction } from '../src/state/session-detail';
import { rowSwipeReducer, rowTapAction, swipeActionLabel, type RowSwipeEvent } from '../src/state/row-swipe';

describe('row swipe reducer', () => {
  test.each([
    ['left opens a closed row', null, { type: 'swipe-left', id: 3 }, 3],
    ['left keeps the same row open', 3, { type: 'swipe-left', id: 3 }, 3],
    ['left replaces the single open row', 3, { type: 'swipe-left', id: 4 }, 4],
    ['right closes the matching row', 3, { type: 'swipe-right', id: 3 }, null],
    ['right on a closed row is a no-op', null, { type: 'swipe-right', id: 3 }, null],
    ['right on another row leaves the open row alone', 3, { type: 'swipe-right', id: 4 }, 3],
    ['settled closes the matching row', 3, { type: 'settled', id: 3 }, null],
    ['settled on a closed row is a no-op', null, { type: 'settled', id: 3 }, null],
    ['a late settled event does not close another row', 4, { type: 'settled', id: 3 }, 4],
    ['list changes close the open row', 3, { type: 'list-changed' }, null],
    ['list changes leave a closed list closed', null, { type: 'list-changed' }, null],
    ['zero is an ID rather than a closed sentinel', null, { type: 'swipe-left', id: 0 }, 0],
  ] satisfies [string, number | null, RowSwipeEvent, number | null][])('%s without mutating input', (_name, openId, event, expected) => {
    const state = Object.freeze({ openId });
    Object.freeze(event);
    expect(rowSwipeReducer(state, event)).toEqual({ openId: expected });
    expect(state).toEqual({ openId });
  });

  test('single-open replacement and dialog settlement preserve earlier state history', () => {
    const closed = Object.freeze({ openId: null });
    const first = Object.freeze(rowSwipeReducer(closed, { type: 'swipe-left', id: 3 }));
    const second = Object.freeze(rowSwipeReducer(first, { type: 'swipe-left', id: 4 }));
    const lateSettlement = rowSwipeReducer(second, { type: 'settled', id: 3 });
    const settled = rowSwipeReducer(lateSettlement, { type: 'settled', id: 4 });
    expect([closed.openId, first.openId, second.openId, lateSettlement.openId, settled.openId])
      .toEqual([null, 3, 4, 4, null]);
  });
});

describe('row tap routing', () => {
  test.each([
    [3, 3, 'close'],
    [null, 3, 'navigate'],
    [4, 3, 'navigate'],
    [0, 0, 'close'],
  ] as const)('open %s, tap %s returns %s without mutating state', (openId, id, expected) => {
    const state = Object.freeze({ openId });
    expect(rowTapAction(state, id)).toBe(expected);
    expect(state).toEqual({ openId });
  });
});

describe('swipe labels match the unchanged list favorite plans', () => {
  test.each([
    ['all', false, 'Favorite', 'add-then-alert', 'Favorite Added'],
    ['all', true, 'Favorite', 'confirm-remove', 'Favorite already added'],
    ['favorites', true, 'Remove', 'confirm-remove', 'Remove Favorite'],
    ['favorites', false, 'Remove', 'confirm-remove', 'Remove Favorite'],
  ] as const)('%s, favorite %s keeps label %s and the existing dialog branch', (mode, favorite, label, kind, title) => {
    expect(swipeActionLabel(mode)).toBe(label);
    const plan = listFavoriteAction(mode, favorite);
    expect(plan.kind).toBe(kind);
    expect(plan.dialog.title).toBe(title);
  });
});
