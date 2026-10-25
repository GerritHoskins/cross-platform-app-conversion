// Behavior is from migration/reference/contract.md, "Favorites UI" (line 50:
// "The store mutations are pure state operations"), mirroring
// src/store/modules/sessions.ts:72-79 (addFavorite, removeFavorite):
// - addFavorite appends sessionId only if absent; a repeated add is a no-op
//   (it still returns a fresh copy of the input, not the input itself);
// - removeFavorite returns the list without any occurrence of sessionId;
//   an absent ID gives an equal copy of the input;
// - neither mutates its input.
export function addFavorite(ids: readonly number[], sessionId: number): number[] {
  if (ids.includes(sessionId)) {
    return [...ids];
  }
  return [...ids, sessionId];
}

export function removeFavorite(ids: readonly number[], sessionId: number): number[] {
  return ids.filter((id) => id !== sessionId);
}
