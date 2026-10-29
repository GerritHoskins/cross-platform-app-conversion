import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';

import type {
  Conference,
  ScheduleMode,
  Selection,
  Session,
  SessionGroup,
  SpeakerProfile,
} from '@migration/core';
import { addFavorite, createInitialSelection, groupSessions, removeFavorite, selectSessions, sortTracksByName } from '@migration/core';

import { loadConference, loadSpeakerProfiles } from '../data/load-conference';

export type ConferenceStatus = 'idle' | 'loading' | 'ready' | 'error';

export interface ConferenceState {
  status: ConferenceStatus;
  conference: Conference | null;
  selection: Selection | null;
  error: string | null;
}

export function createConferenceState(): ConferenceState {
  return {
    status: 'idle',
    conference: null,
    selection: null,
    error: null,
  };
}

export type ConferenceAction =
  | { type: 'loadStarted' }
  | { type: 'loadSucceeded'; conference: Conference }
  | { type: 'loadFailed'; error: string }
  | { type: 'setSearchText'; searchText: string }
  | { type: 'setMode'; mode: ScheduleMode }
  | { type: 'setSelectedTracks'; selectedTracks: readonly string[] }
  | { type: 'setFavoriteIds'; favoriteIds: readonly number[] }
  | { type: 'favoriteAdded'; sessionId: number }
  | { type: 'favoriteRemoved'; sessionId: number };

function toErrorMessage(error: unknown): string {
  if (typeof error === 'string') {
    return error.length > 0 ? error : 'Unknown loading error';
  }
  if (error instanceof Error && error.message.length > 0) {
    return error.message;
  }
  try {
    const serialized = JSON.stringify(error);
    return serialized && serialized.length > 0 ? serialized : 'Unknown loading error';
  } catch {
    return 'Unknown loading error';
  }
}

function updateSelection(
  state: ConferenceState,
  update: (selection: Selection) => Selection,
): ConferenceState {
  if (state.selection === null) {
    return state;
  }
  return { ...state, selection: update(state.selection) };
}

export function conferenceReducer(state: ConferenceState, action: ConferenceAction): ConferenceState {
  switch (action.type) {
    case 'loadStarted':
      // Clear any prior error but preserve previously loaded data and selection.
      return { ...state, status: 'loading', error: null };
    case 'loadSucceeded':
      return {
        ...state,
        status: 'ready',
        conference: action.conference,
        // A later load must preserve the existing selection; initialize only once.
        selection: state.selection ?? createInitialSelection(action.conference),
        error: null,
      };
    case 'loadFailed':
      // Failure preserves previously loaded data and selection.
      return { ...state, status: 'error', error: action.error };
    case 'setSearchText':
      return updateSelection(state, (selection) => ({
        ...selection,
        searchText: action.searchText,
      }));
    case 'setMode':
      return updateSelection(state, (selection) => ({
        ...selection,
        mode: action.mode,
      }));
    case 'setSelectedTracks':
      // Copy the payload array so later caller mutation cannot mutate stored state.
      return updateSelection(state, (selection) => ({
        ...selection,
        selectedTracks: [...action.selectedTracks],
      }));
    case 'setFavoriteIds':
      return updateSelection(state, (selection) => ({
        ...selection,
        favoriteIds: [...action.favoriteIds],
      }));
    case 'favoriteAdded':
      return updateSelection(state, (selection) => ({
        ...selection,
        favoriteIds: addFavorite(selection.favoriteIds, action.sessionId),
      }));
    case 'favoriteRemoved':
      return updateSelection(state, (selection) => ({
        ...selection,
        favoriteIds: removeFavorite(selection.favoriteIds, action.sessionId),
      }));
    default:
      return state;
  }
}

export function selectSessionById(state: ConferenceState, sessionId: number): Session | undefined {
  if (state.status !== 'ready' || state.conference === null) {
    return undefined;
  }
  return state.conference.sessions.find((session) => session.id === sessionId);
}

export function selectIsFavorite(state: ConferenceState, sessionId: number): boolean {
  return state.selection?.favoriteIds.includes(sessionId) ?? false;
}

export function selectScheduleGroups(state: ConferenceState): SessionGroup[] {
  if (state.status !== 'ready' || state.conference === null || state.selection === null) {
    return [];
  }
  return groupSessions(selectSessions(state.conference.sessions, state.selection));
}

export interface TrackOption {
  name: string;
  checked: boolean;
}

export function selectTrackOptions(state: ConferenceState): TrackOption[] {
  if (state.status !== 'ready' || state.conference === null || state.selection === null) {
    return [];
  }
  const { selectedTracks } = state.selection;
  return sortTracksByName(state.conference.tracks).map(({ name }) => ({
    name,
    checked: selectedTracks.includes(name),
  }));
}

export type ConferenceLoader = () => Conference | Promise<Conference>;
export type SpeakerProfilesLoader = () => SpeakerProfile[] | Promise<SpeakerProfile[]>;

export interface ConferenceContextValue {
  state: ConferenceState;
  dispatch: React.Dispatch<ConferenceAction>;
  retry: () => void;
  groups: SessionGroup[];
  speakerProfiles: SpeakerProfile[];
}

const ConferenceContext = createContext<ConferenceContextValue | null>(null);

export interface ConferenceProviderProps {
  children: React.ReactNode;
  /** Must be referentially stable across renders. */
  loader?: ConferenceLoader;
  /** Must be referentially stable across renders. */
  speakerProfilesLoader?: SpeakerProfilesLoader;
}

export function ConferenceProvider({
  children,
  loader = loadConference,
  speakerProfilesLoader = loadSpeakerProfiles,
}: ConferenceProviderProps) {
  const [state, dispatch] = useReducer(conferenceReducer, undefined, createConferenceState);
  const [speakerProfiles, setSpeakerProfiles] = useState<SpeakerProfile[]>([]);

  // Request-generation marker: incrementing invalidates any in-flight completion,
  // so stale completions (superseded retries, dev-effect replays, unmount) never
  // overwrite newer results.
  const requestRef = useRef(0);

  const runLoad = useCallback(() => {
    const generation = ++requestRef.current;
    dispatch({ type: 'loadStarted' });
    // Both loaders run beyond the render boundary; profile failures use the
    // same error/retry lifecycle, and superseded pairs cannot publish stale data.
    Promise.all([
      Promise.resolve().then(() => loader()),
      Promise.resolve().then(() => speakerProfilesLoader()),
    ])
      .then(([conference, profiles]) => {
        if (requestRef.current !== generation) {
          return;
        }
        setSpeakerProfiles(profiles);
        dispatch({ type: 'loadSucceeded', conference });
      })
      .catch((error: unknown) => {
        if (requestRef.current !== generation) {
          return;
        }
        dispatch({ type: 'loadFailed', error: toErrorMessage(error) });
      });
  }, [loader, speakerProfilesLoader]);

  useEffect(() => {
    runLoad();
    return () => {
      requestRef.current += 1;
    };
  }, [runLoad]);

  const groups = useMemo(() => selectScheduleGroups(state), [state]);

  const value = useMemo<ConferenceContextValue>(
    () => ({ state, dispatch, retry: runLoad, groups, speakerProfiles }),
    [state, dispatch, runLoad, groups, speakerProfiles],
  );

  return <ConferenceContext.Provider value={value}>{children}</ConferenceContext.Provider>;
}

export function useConference(): ConferenceContextValue {
  const context = useContext(ConferenceContext);
  if (context === null) {
    throw new Error('useConference must be used inside a <ConferenceProvider>');
  }
  return context;
}
