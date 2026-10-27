import type { ScheduleMode } from '@migration/core';

export interface RowSwipeState {
  openId: number | null;
}

export type RowSwipeEvent =
  | { type: 'swipe-left'; id: number }
  | { type: 'swipe-right'; id: number }
  | { type: 'settled'; id: number }
  | { type: 'list-changed' };

export function rowSwipeReducer(state: RowSwipeState, event: RowSwipeEvent): RowSwipeState {
  switch (event.type) {
    case 'swipe-left':
      return { openId: event.id };
    case 'swipe-right':
    case 'settled':
      return state.openId === event.id ? { openId: null } : state;
    case 'list-changed':
      return { openId: null };
  }
}

export function rowTapAction(state: RowSwipeState, id: number): 'close' | 'navigate' {
  return state.openId === id ? 'close' : 'navigate';
}

export function swipeActionLabel(mode: ScheduleMode): 'Favorite' | 'Remove' {
  return mode === 'favorites' ? 'Remove' : 'Favorite';
}
