import type { ScheduleMode } from '@migration/core';

export function parseSessionId(raw: string): number | undefined {
  return raw.length > 0 && !/[^0-9]/.test(raw) ? Number(raw) : undefined;
}

export type ListFavoriteAction =
  | { kind: 'add-then-alert'; dialog: { title: 'Favorite Added'; okButtonText: 'OK' } }
  | {
    kind: 'confirm-remove';
    dialog: {
      title: 'Favorite already added' | 'Remove Favorite';
      message: 'Would you like to remove this session from your favorites?';
      cancelButtonText: 'Cancel';
      okButtonText: 'Remove';
    };
  };

export function listFavoriteAction(mode: ScheduleMode, isFavorite: boolean): ListFavoriteAction {
  if (mode === 'all' && !isFavorite) {
    return { kind: 'add-then-alert', dialog: { title: 'Favorite Added', okButtonText: 'OK' } };
  }
  return {
    kind: 'confirm-remove',
    dialog: {
      title: mode === 'favorites' ? 'Remove Favorite' : 'Favorite already added',
      message: 'Would you like to remove this session from your favorites?',
      cancelButtonText: 'Cancel',
      okButtonText: 'Remove',
    },
  };
}

export function directEntrySessionId(extra: string | null | undefined, isDev: boolean): string | undefined {
  return isDev && typeof extra === 'string' && extra.length > 0 ? extra : undefined;
}
