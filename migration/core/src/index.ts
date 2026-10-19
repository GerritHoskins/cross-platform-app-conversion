export const CORE_PACKAGE_NAME = '@migration/core';
export const CORE_API_VERSION = 1;

export type { Conference, Session, Speaker, Track } from './types';
export { compareTimes, parseTimeToMinutes } from './time';
export { ConferenceDataError, normalizeConference } from './normalize';
