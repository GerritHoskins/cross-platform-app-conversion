import type { Conference, SpeakerProfile } from '@migration/core';
import { normalizeConference, normalizeSpeakerProfiles } from '@migration/core';
import rawConferenceData from './conference.json';

export function loadConference(): Conference {
  return normalizeConference(rawConferenceData);
}

export function loadSpeakerProfiles(): SpeakerProfile[] {
  return normalizeSpeakerProfiles(rawConferenceData);
}
