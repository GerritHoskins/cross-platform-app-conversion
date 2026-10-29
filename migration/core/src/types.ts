export interface Session {
  id: number;
  name: string;
  timeStart: string;
  timeEnd: string;
  startMinutes: number;
  endMinutes: number;
  location: string;
  description: string;
  tracks: string[];
  speakerIds: number[];
  groupTime: string;
}

export interface Track {
  name: string;
  icon: string;
}

export interface Speaker {
  id: number;
  name: string;
}

export interface SpeakerProfile extends Speaker {
  title: string;
  about: string;
  profilePic: string;
}

export type SpeakerNotFoundReason = 'malformed-id' | 'unknown-id';

export type SpeakerLookup<T extends Speaker = Speaker> =
  | { status: 'found'; speaker: T }
  | { status: 'not-found'; reason: SpeakerNotFoundReason };

export interface Conference {
  date: string;
  sessions: Session[];
  tracks: Track[];
  speakers: Speaker[];
}

export type ScheduleMode = 'all' | 'favorites';

export interface Selection {
  searchText: string;
  selectedTracks: readonly string[];
  favoriteIds: readonly number[];
  mode: ScheduleMode;
}

export interface SessionGroup { groupTime: string; sessions: Session[] }
