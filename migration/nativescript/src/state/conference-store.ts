import { createStore, useStore, type Store } from 'vuex';
import type { InjectionKey } from 'vue';
import {
  createInitialSelection,
  groupSessions,
  selectSessions,
  type Conference,
  type ScheduleMode,
  type Selection,
  type SessionGroup,
} from '@migration/core';
import { loadConference } from '../data/load-conference';

export interface ConferenceState {
  status: 'idle' | 'loading' | 'ready' | 'error';
  conference: Conference | null;
  selection: Selection | null;
  error: string | null;
}

export type ConferenceLoader = () => Conference | Promise<Conference>;
export type ConferenceStore = Omit<Store<ConferenceState>, 'getters'> & {
  readonly getters: { readonly scheduleGroups: SessionGroup[] };
};

export const conferenceStoreKey: InjectionKey<Store<ConferenceState>> = Symbol('conference-store');

export function useConferenceStore(): ConferenceStore {
  const store = useStore<ConferenceState>(conferenceStoreKey);
  if (!store) throw new Error('useConferenceStore requires the conference store to be installed.');
  return store as ConferenceStore;
}

export function createConferenceStore(loader: ConferenceLoader = loadConference): ConferenceStore {
  let generation = 0;
  // Replace state inside mutations so even earlier whole-state snapshots stay immutable.
  const replace = (state: ConferenceState, patch: Partial<ConferenceState>) => {
    store.replaceState({ ...state, ...patch });
  };
  const store = createStore<ConferenceState>({
    strict: false,
    state: () => ({ status: 'idle', conference: null, selection: null, error: null }),
    mutations: {
      loadStarted(state) {
        replace(state, { status: 'loading', error: null });
      },
      loadSucceeded(state, conference: Conference) {
        replace(state, {
          status: 'ready',
          conference,
          selection: state.selection ?? createInitialSelection(conference),
          error: null,
        });
      },
      loadFailed(state, error: string) {
        replace(state, { status: 'error', error });
      },
      setSearchText(state, searchText: string) {
        if (state.selection) replace(state, { selection: { ...state.selection, searchText } });
      },
      setMode(state, mode: ScheduleMode) {
        if (state.selection) replace(state, { selection: { ...state.selection, mode } });
      },
      setSelectedTracks(state, selectedTracks: readonly string[]) {
        if (state.selection) replace(state, { selection: { ...state.selection, selectedTracks: [...selectedTracks] } });
      },
      setFavoriteIds(state, favoriteIds: readonly number[]) {
        if (state.selection) replace(state, { selection: { ...state.selection, favoriteIds: [...favoriteIds] } });
      },
    },
    getters: {
      scheduleGroups(state): SessionGroup[] {
        if (state.status !== 'ready' || !state.conference || !state.selection) return [];
        return groupSessions(selectSessions(state.conference.sessions, state.selection));
      },
    },
    actions: {
      async load({ commit }) {
        const request = ++generation;
        commit('loadStarted');
        try {
          const conference = await Promise.resolve().then(() => loader());
          if (request === generation) commit('loadSucceeded', conference);
        } catch (error) {
          if (request === generation) commit('loadFailed', error instanceof Error ? error.message : String(error));
        }
      },
      retry({ dispatch }) {
        return dispatch('load');
      },
    },
  });
  return store as ConferenceStore;
}
