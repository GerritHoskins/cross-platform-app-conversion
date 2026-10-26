import { normalizeConference, type Conference } from '@migration/core';
import conferenceData from './conference.json';

export function loadConference(): Conference {
  return normalizeConference(conferenceData);
}
