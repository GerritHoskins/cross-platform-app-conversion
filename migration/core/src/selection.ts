import type { Conference, Selection, Session, Track } from './types';

// Behavior is from migration/reference/contract.md, "Selection rules" (lines 25-33),
// mirroring src/store/modules/sessions.ts (allFiltered at 192-206, favoritesFiltered at 208-224):
// - an empty selectedTracks means no session passes;
// - a session passes only if EVERY one of its tracks is selected (not just some);
// - a truthy searchText is a case-insensitive substring check against the lowercased
//   name only (no trimming: a single space is truthy and matches names containing a space);
// - in 'favorites' mode the session id must also be in favoriteIds (ids absent from
//   the session list simply never match, so they are ignored);
// - passing sessions come back in input order: sorting is groupSessions' job.
export function selectSessions(sessions: readonly Session[], selection: Selection): Session[] {
  const query = selection.searchText.toLowerCase();
  return sessions.filter((session) => {
    if (selection.mode === 'favorites' && !selection.favoriteIds.includes(session.id)) {
      return false;
    }
    if (selection.selectedTracks.length === 0) {
      return false;
    }
    const matchesTracks = session.tracks.every((track) => selection.selectedTracks.includes(track));
    const matchesSearch = selection.searchText ? session.name.toLowerCase().includes(query) : true;
    return matchesTracks && matchesSearch;
  });
}

// First-load track selection, sessions.ts:124-128:
// every track that appears on a session, in first-appearance order
// (`new Set(sessions.flatMap((s) => s.tracks))`).
export function initialSelectedTracks(sessions: readonly Session[]): string[] {
  return [...new Set(sessions.flatMap((session) => session.tracks))];
}

// First-load selection: no search, every session track selected, no favorites, 'all' mode.
export function createInitialSelection(conference: Conference): Selection {
  return {
    searchText: '',
    selectedTracks: initialSelectedTracks(conference.sessions),
    favoriteIds: [],
    mode: 'all',
  };
}

// Track-list ordering, sessions.ts:187-191 (allTracksFilter): localeCompare by name.
export function sortTracksByName(tracks: readonly Track[]): Track[] {
  return [...tracks].sort((a, b) => a.name.localeCompare(b.name));
}
