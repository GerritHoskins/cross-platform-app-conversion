export const CORE_PACKAGE_NAME = '@migration/core';
export const CORE_API_VERSION = 2;

export type {
  Conference, ScheduleMode, Selection, Session, SessionGroup, Speaker,
  SpeakerLookup, SpeakerNotFoundReason, SpeakerProfile, Track,
} from './types';
export { compareTimes, parseTimeToMinutes } from './time';
export { ConferenceDataError, normalizeConference, normalizeSpeakerProfiles } from './normalize';
export { addFavorite, removeFavorite } from './favorites';
export { groupSessions } from './grouping';
export { createInitialSelection, initialSelectedTracks, selectSessions, sortTracksByName } from './selection';
export { findSpeakerByRouteId, parseSpeakerRouteId, sessionsForSpeaker, sortSpeakers } from './speakers';
