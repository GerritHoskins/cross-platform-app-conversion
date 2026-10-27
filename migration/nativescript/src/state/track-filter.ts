import type { ConferenceStore, TrackOption } from './conference-store';

export function toggleTrack(draft: readonly TrackOption[], name: string): TrackOption[] {
  return draft.map(track => ({ ...track, checked: track.name === name ? !track.checked : track.checked }));
}

export function setAllTracks(draft: readonly TrackOption[], checked: boolean): TrackOption[] {
  return draft.map(track => ({ ...track, checked }));
}

export function checkedTrackNames(draft: readonly TrackOption[]): string[] {
  return draft.filter(track => track.checked).map(track => track.name);
}

export function applyFilterResult(store: ConferenceStore, result: unknown): void {
  if (Array.isArray(result)) store.commit('setSelectedTracks', result);
}
