export const CORE_PACKAGE_NAME = '@migration/core';
export const CORE_API_VERSION = 1;

export type { Conference, ScheduleMode, Selection, Session, SessionGroup, Speaker, Track } from './types';
export { compareTimes, parseTimeToMinutes } from './time';
export { ConferenceDataError, normalizeConference } from './normalize';
export { addFavorite, removeFavorite } from './favorites';
export { groupSessions } from './grouping';
export { createInitialSelection, initialSelectedTracks, selectSessions, sortTracksByName } from './selection';
