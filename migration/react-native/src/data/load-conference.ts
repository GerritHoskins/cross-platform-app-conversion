import type { Conference } from '@migration/core';
import { normalizeConference } from '@migration/core';
import rawConferenceData from './conference.json';

export function loadConference(): Conference {
  return normalizeConference(rawConferenceData);
}
