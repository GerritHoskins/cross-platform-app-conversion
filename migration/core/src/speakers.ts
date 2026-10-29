import type { Session, Speaker, SpeakerLookup } from './types';

// speakers-contract.md, "Speaker order", P02 CD1: raw UTF-16 code units,
// numeric ID ties, then stable input order; never locale collation.
export function sortSpeakers<T extends Speaker>(speakers: readonly T[]): T[] {
  return [...speakers].sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return a.id - b.id;
  });
}

// speakers-contract.md, "Sessions per speaker", P02 CD2: store order,
// including shared sessions, independent of schedule-tab selection or time.
export function sessionsForSpeaker(sessions: readonly Session[], speakerId: number): Session[] {
  return sessions.filter((session) => session.speakerIds.includes(speakerId));
}

// speakers-contract.md, "Speaker detail", P02 CD3: canonical positive decimal
// route strings only, with no trimming or partial parsing, and safe integers.
export function parseSpeakerRouteId(value: unknown): number | null {
  if (typeof value !== 'string') return null;
  const match = /^[1-9][0-9]*$/.exec(value);
  // JavaScript's $ can match before a final newline: require the full string.
  if (match === null || match[0] !== value) return null;
  const id = Number(value);
  return Number.isSafeInteger(id) ? id : null;
}

// speakers-contract.md, "Speaker detail", P02 CD3: completed lookup failure
// distinguishes malformed from unknown IDs; a hit retains the input object.
export function findSpeakerByRouteId<T extends Speaker>(
  speakers: readonly T[],
  routeId: unknown,
): SpeakerLookup<T> {
  const id = parseSpeakerRouteId(routeId);
  if (id === null) return { status: 'not-found', reason: 'malformed-id' };
  const speaker = speakers.find((candidate) => candidate.id === id);
  return speaker === undefined
    ? { status: 'not-found', reason: 'unknown-id' }
    : { status: 'found', speaker };
}
