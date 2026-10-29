import { parseTimeToMinutes } from './time';
import type { Conference, Speaker, SpeakerProfile, Track } from './types';

export class ConferenceDataError extends Error {
  readonly path: string;

  constructor(path: string, details: string) {
    super(`${path}: ${details}`);
    this.name = 'ConferenceDataError';
    this.path = path;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function describe(value: unknown): string {
  if (typeof value === 'string') return JSON.stringify(value);
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';
  if (Array.isArray(value)) return 'array';
  if (typeof value === 'object') return 'object';
  return String(value);
}

function parseId(value: unknown, path: string): number {
  if (typeof value !== 'string' && typeof value !== 'number') {
    throw new ConferenceDataError(path, `expected a numeric string or number, got ${describe(value)}`);
  }
  const digits = String(value);
  if (!/^\d+$/.test(digits)) {
    throw new ConferenceDataError(path, `expected a numeric string or number, got ${JSON.stringify(digits)}`);
  }
  return Number(digits);
}

function nonEmptyString(value: unknown, path: string): string {
  if (typeof value !== 'string') {
    throw new ConferenceDataError(path, `expected a non-empty string, got ${describe(value)}`);
  }
  if (value.length === 0) {
    throw new ConferenceDataError(path, 'expected a non-empty string, got ""');
  }
  return value;
}

function parseableTime(value: unknown, path: string): string {
  if (typeof value !== 'string') {
    throw new ConferenceDataError(path, `expected a string, got ${describe(value)}`);
  }
  if (!Number.isFinite(parseTimeToMinutes(value))) {
    throw new ConferenceDataError(path, `expected a 12-hour time like "8:00 am", got ${JSON.stringify(value)}`);
  }
  return value;
}

function optionalSpeakerText(value: unknown, path: string): string {
  if (value === undefined || value === null) return '';
  if (typeof value !== 'string') {
    throw new ConferenceDataError(path, `expected a string, null, or absent value, got ${describe(value)}`);
  }
  return value;
}

// speakers-contract.md, "Data and normalization", P02 CD3: read-only fields
// default to empty strings. C04 retains C02's stricter non-empty name rule,
// sharing its existing id/name validators and exact error paths/messages.
// Profiles are independent of schedule and track validation.
export function normalizeSpeakerProfiles(raw: unknown): SpeakerProfile[] {
  if (!isRecord(raw)) {
    throw new ConferenceDataError('(root)', `expected an object, got ${describe(raw)}`);
  }
  const rawSpeakers = raw['speakers'];
  if (!Array.isArray(rawSpeakers)) {
    throw new ConferenceDataError('speakers', `expected an array, got ${describe(rawSpeakers)}`);
  }
  return rawSpeakers.map((rawSpeaker: unknown, speakerIndex: number) => {
    const speakerPath = `speakers[${speakerIndex}]`;
    if (!isRecord(rawSpeaker)) {
      throw new ConferenceDataError(speakerPath, `expected an object, got ${describe(rawSpeaker)}`);
    }
    return {
      id: parseId(rawSpeaker['id'], `${speakerPath}.id`),
      name: nonEmptyString(rawSpeaker['name'], `${speakerPath}.name`),
      title: optionalSpeakerText(rawSpeaker['title'], `${speakerPath}.title`),
      about: optionalSpeakerText(rawSpeaker['about'], `${speakerPath}.about`),
      profilePic: optionalSpeakerText(rawSpeaker['profilePic'], `${speakerPath}.profilePic`),
    };
  });
}

export function normalizeConference(raw: unknown): Conference {
  if (!isRecord(raw)) {
    throw new ConferenceDataError('(root)', `expected an object, got ${describe(raw)}`);
  }

  const schedule = raw['schedule'];
  if (!Array.isArray(schedule)) {
    throw new ConferenceDataError('schedule', `expected an array, got ${describe(schedule)}`);
  }
  if (schedule.length === 0) {
    throw new ConferenceDataError('schedule', 'expected a non-empty array, got an empty array');
  }

  const firstDay = schedule[0];
  if (!isRecord(firstDay)) {
    throw new ConferenceDataError('schedule[0]', `expected an object, got ${describe(firstDay)}`);
  }

  const date = firstDay['date'];
  if (typeof date !== 'string') {
    throw new ConferenceDataError('schedule[0].date', `expected a string, got ${describe(date)}`);
  }

  const groups = firstDay['groups'];
  if (!Array.isArray(groups)) {
    throw new ConferenceDataError('schedule[0].groups', `expected an array, got ${describe(groups)}`);
  }

  const rawSpeakers = raw['speakers'];
  if (!Array.isArray(rawSpeakers)) {
    throw new ConferenceDataError('speakers', `expected an array, got ${describe(rawSpeakers)}`);
  }
  const speakers: Speaker[] = [];
  const speakerNameToId = new Map<string, number>();
  for (let speakerIndex = 0; speakerIndex < rawSpeakers.length; speakerIndex += 1) {
    const speakerPath = `speakers[${speakerIndex}]`;
    const rawSpeaker = rawSpeakers[speakerIndex];
    if (!isRecord(rawSpeaker)) {
      throw new ConferenceDataError(speakerPath, `expected an object, got ${describe(rawSpeaker)}`);
    }
    const id = parseId(rawSpeaker['id'], `${speakerPath}.id`);
    const name = nonEmptyString(rawSpeaker['name'], `${speakerPath}.name`);
    speakers.push({ id, name });
    // If two speakers share a name the later one wins, as with the source's
    // `new Map(speakers.map((s) => [s.name, ...]))`.
    speakerNameToId.set(name, id);
  }

  const rawTopTracks = raw['tracks'];
  if (!Array.isArray(rawTopTracks)) {
    throw new ConferenceDataError('tracks', `expected an array, got ${describe(rawTopTracks)}`);
  }
  const tracks: Track[] = [];
  for (let trackIndex = 0; trackIndex < rawTopTracks.length; trackIndex += 1) {
    const trackPath = `tracks[${trackIndex}]`;
    const rawTrack = rawTopTracks[trackIndex];
    if (!isRecord(rawTrack)) {
      throw new ConferenceDataError(trackPath, `expected an object, got ${describe(rawTrack)}`);
    }
    tracks.push({
      name: nonEmptyString(rawTrack['name'], `${trackPath}.name`),
      icon: ((): string => {
        const icon = rawTrack['icon'];
        if (typeof icon !== 'string') {
          throw new ConferenceDataError(`${trackPath}.icon`, `expected a string, got ${describe(icon)}`);
        }
        return icon;
      })(),
    });
  }

  const sessions: Conference['sessions'] = [];
  const seenSessionIds = new Set<number>();
  for (let groupIndex = 0; groupIndex < groups.length; groupIndex += 1) {
    const groupPath = `schedule[0].groups[${groupIndex}]`;
    const rawGroup = groups[groupIndex];
    if (!isRecord(rawGroup)) {
      throw new ConferenceDataError(groupPath, `expected an object, got ${describe(rawGroup)}`);
    }
    const groupTime = parseableTime(rawGroup['time'], `${groupPath}.time`);

    const rawSessions = rawGroup['sessions'];
    if (!Array.isArray(rawSessions)) {
      throw new ConferenceDataError(`${groupPath}.sessions`, `expected an array, got ${describe(rawSessions)}`);
    }

    for (let sessionIndex = 0; sessionIndex < rawSessions.length; sessionIndex += 1) {
      const sessionPath = `${groupPath}.sessions[${sessionIndex}]`;
      const rawSession = rawSessions[sessionIndex];
      if (!isRecord(rawSession)) {
        throw new ConferenceDataError(sessionPath, `expected an object, got ${describe(rawSession)}`);
      }

      const idPath = `${sessionPath}.id`;
      const id = parseId(rawSession['id'], idPath);
      if (seenSessionIds.has(id)) {
        throw new ConferenceDataError(idPath, `expected a unique session id, got ${id} (already used)`);
      }
      seenSessionIds.add(id);

      const name = nonEmptyString(rawSession['name'], `${sessionPath}.name`);
      const location = rawSession['location'];
      if (typeof location !== 'string') {
        throw new ConferenceDataError(`${sessionPath}.location`, `expected a string, got ${describe(location)}`);
      }
      const timeStart = parseableTime(rawSession['timeStart'], `${sessionPath}.timeStart`);
      const timeEnd = parseableTime(rawSession['timeEnd'], `${sessionPath}.timeEnd`);

      const rawSessionTracks = rawSession['tracks'];
      if (!Array.isArray(rawSessionTracks)) {
        throw new ConferenceDataError(
          `${sessionPath}.tracks`,
          `expected an array of non-empty strings, got ${describe(rawSessionTracks)}`,
        );
      }
      const sessionTracks: string[] = [];
      for (let trackIndex = 0; trackIndex < rawSessionTracks.length; trackIndex += 1) {
        sessionTracks.push(nonEmptyString(rawSessionTracks[trackIndex], `${sessionPath}.tracks[${trackIndex}]`));
      }

      const rawDescription = rawSession['description'];
      if (rawDescription !== undefined && rawDescription !== null && typeof rawDescription !== 'string') {
        throw new ConferenceDataError(
          `${sessionPath}.description`,
          `expected a string, null, or absent value, got ${describe(rawDescription)}`,
        );
      }
      const description = typeof rawDescription === 'string' ? rawDescription : '';

      const speakerIds: number[] = [];
      if (rawSession['speakerNames'] !== undefined) {
        const rawSpeakerNames = rawSession['speakerNames'];
        if (!Array.isArray(rawSpeakerNames)) {
          throw new ConferenceDataError(
            `${sessionPath}.speakerNames`,
            `expected an array of strings, got ${describe(rawSpeakerNames)}`,
          );
        }
        for (let speakerNameIndex = 0; speakerNameIndex < rawSpeakerNames.length; speakerNameIndex += 1) {
          const speakerName = rawSpeakerNames[speakerNameIndex];
          if (typeof speakerName !== 'string') {
            throw new ConferenceDataError(
              `${sessionPath}.speakerNames[${speakerNameIndex}]`,
              `expected a string, got ${describe(speakerName)}`,
            );
          }
          // Contract decision: unresolved names are omitted, never emitted as undefined.
          const speakerId = speakerNameToId.get(speakerName);
          if (speakerId !== undefined) speakerIds.push(speakerId);
        }
      }

      sessions.push({
        id,
        name,
        timeStart,
        timeEnd,
        startMinutes: parseTimeToMinutes(timeStart),
        endMinutes: parseTimeToMinutes(timeEnd),
        location,
        description,
        tracks: sessionTracks,
        speakerIds,
        groupTime,
      });
    }
  }

  return { date, sessions, tracks, speakers };
}
