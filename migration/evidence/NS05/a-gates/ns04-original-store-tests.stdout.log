import { describe, expect, test, vi } from 'vitest';
import { toRaw } from 'vue';
import {
  addFavorite,
  createInitialSelection,
  removeFavorite,
  type Conference,
  type ScheduleMode,
  type SessionGroup,
} from '@migration/core';
import reference from '../../reference/expected-cases.json';
import { loadConference } from '../src/data/load-conference';
import { createConferenceStore, type ConferenceState } from '../src/state/conference-store';

function deepFreeze<T>(value: T): T {
  if (value && typeof value === 'object') {
    Object.values(value).forEach(deepFreeze);
    Object.freeze(value);
  }
  return value;
}

function freezeState(state: ConferenceState) {
  return deepFreeze(toRaw(state));
}

function deferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (reason: unknown) => void;
  const promise = new Promise<T>((yes, no) => { resolve = yes; reject = no; });
  return { promise, resolve, reject };
}

function smallConference(name = 'Small conference'): Conference {
  const data = loadConference();
  return { ...data, date: name, sessions: data.sessions.slice(0, 1) };
}

describe('conference store state and mutations', () => {
  test('fresh stores start idle with independent state and request generations', async () => {
    const first = createConferenceStore();
    const second = createConferenceStore();
    expect(first.state).toEqual({ status: 'idle', conference: null, selection: null, error: null });
    expect(first.state).not.toBe(second.state);
    expect(first.getters.scheduleGroups).toEqual([]);
    await first.dispatch('load');
    expect(second.state.status).toBe('idle');
    await second.dispatch('load');
    expect(first.state.conference).toEqual(second.state.conference);
    expect(first.state.conference).not.toBe(second.state.conference);
    expect(first.state.selection).not.toBe(second.state.selection);
    expect(first.state.selection?.selectedTracks).not.toBe(second.state.selection?.selectedTracks);
  });

  test('frozen prior states and load payloads survive success, loading, failure and later success', () => {
    const store = createConferenceStore();
    const idle = freezeState(store.state);
    const conference = deepFreeze(loadConference());
    const action = deepFreeze({ type: 'loadSucceeded', payload: conference });
    store.commit(action.type, action.payload);
    expect(idle).toEqual({ status: 'idle', conference: null, selection: null, error: null });
    expect(store.state.status).toBe('ready');
    expect(store.state.selection).toEqual(createInitialSelection(conference));
    expect(store.state.selection?.favoriteIds).toEqual([]);
    store.commit('setSearchText', 'IOnic');
    store.commit('setMode', 'favorites');
    store.commit('setSelectedTracks', ['Ionic']);
    store.commit('setFavoriteIds', [4]);
    const ready = freezeState(store.state);
    store.commit('loadStarted');
    expect(store.state).toEqual({ ...ready, status: 'loading', error: null });
    expect(store.state.conference).toBe(ready.conference);
    expect(store.state.selection).toBe(ready.selection);
    expect(store.getters.scheduleGroups).toEqual([]);
    const loading = freezeState(store.state);
    const failureAction = deepFreeze({ type: 'loadFailed', payload: 'offline' });
    store.commit(failureAction.type, failureAction.payload);
    expect(loading.status).toBe('loading');
    expect(store.state).toEqual({ ...ready, status: 'error', error: 'offline' });
    expect(store.getters.scheduleGroups).toEqual([]);
    const failed = freezeState(store.state);
    store.commit('loadStarted');
    expect(failed.error).toBe('offline');
    expect(store.state.error).toBeNull();
    store.commit('loadSucceeded', deepFreeze(loadConference()));
    expect(store.state.status).toBe('ready');
    expect(store.state.selection).toBe(ready.selection);
    expect(ready.status).toBe('ready');
    expect(store.getters.scheduleGroups.flatMap(group => group.sessions.map(session => session.id))).toEqual([4]);
  });

  test.each([
    ['setSearchText', 'searchText', ' IOnic '],
    ['setMode', 'mode', 'favorites'],
    ['setSelectedTracks', 'selectedTracks', ['Food']],
    ['setFavoriteIds', 'favoriteIds', [12, 1]],
  ] as const)('%s changes only its selection field and leaves frozen history intact', (mutation, field, value) => {
    const store = createConferenceStore();
    store.commit('loadSucceeded', deepFreeze(loadConference()));
    const before = freezeState(store.state);
    const action = deepFreeze({ type: mutation, payload: value });
    store.commit(action.type, action.payload);
    expect(store.state).toEqual({ ...before, selection: { ...before.selection, [field]: value } });
    expect(store.state).not.toBe(before);
    expect(store.state.selection).not.toBe(before.selection);
    expect(before.selection).toEqual(createInitialSelection(before.conference!));
    expect(store.state.conference).toBe(before.conference);
  });

  test('copies incoming arrays and preserves search, tracks and favorites across mode switches', () => {
    const store = createConferenceStore();
    store.commit('loadSucceeded', loadConference());
    const tracks = ['Ionic'];
    const favorites = [4, 2];
    store.commit('setSelectedTracks', tracks);
    store.commit('setFavoriteIds', favorites);
    expect(toRaw(store.state.selection!.selectedTracks)).not.toBe(tracks);
    expect(toRaw(store.state.selection!.favoriteIds)).not.toBe(favorites);
    tracks.push('Food');
    favorites.push(1);
    store.commit('setSearchText', ' IOnic ');
    const before = freezeState(store.state);
    store.commit('setMode', 'favorites');
    store.commit('setMode', 'all');
    expect(store.state.selection).toEqual(before.selection);
    expect(store.state.selection?.selectedTracks).toEqual(['Ionic']);
    expect(store.state.selection?.favoriteIds).toEqual([4, 2]);
    expect(store.state.selection?.searchText).toBe(' IOnic ');
  });

  test('all selection mutations are pre-load no-ops even with a frozen initial state', () => {
    const store = createConferenceStore();
    const before = freezeState(store.state);
    for (const [type, payload] of [['setSearchText', 'x'], ['setMode', 'favorites'], ['setSelectedTracks', []], ['setFavoriteIds', [1]]] as const) {
      const action = deepFreeze({ type, payload });
      store.commit(action.type, action.payload);
      expect(toRaw(store.state)).toBe(before);
      expect(store.getters.scheduleGroups).toEqual([]);
    }
  });

  test('search/no-match/clear and mode switches derive groups without calling the loader again', async () => {
    const loader = vi.fn(loadConference);
    const store = createConferenceStore(loader);
    await store.dispatch('load');
    const originalGroups = store.getters.scheduleGroups;
    store.commit('setSearchText', 'IOnic');
    const searched = store.getters.scheduleGroups;
    expect(searched.flatMap(group => group.sessions.map(session => session.id)))
      .toEqual(reference.cases.find(item => item.id === 'search-case-insensitive')!.expected.sessionIds);
    store.commit('setMode', 'favorites');
    expect(store.getters.scheduleGroups).toEqual([]);
    expect(store.state.selection?.searchText).toBe('IOnic');
    store.commit('setMode', 'all');
    expect(store.getters.scheduleGroups).toEqual(searched);
    store.commit('setSearchText', 'zzz-no-such-session');
    expect(store.getters.scheduleGroups).toEqual([]);
    store.commit('setSearchText', '');
    expect(store.getters.scheduleGroups).toEqual(originalGroups);
    expect(loader).toHaveBeenCalledTimes(1);
  });
});

describe('frozen reference cases through public mutations and the real loader/core', () => {
  test.each(reference.cases)('$id', async (fixture) => {
    deepFreeze(fixture);
    const store = createConferenceStore();
    await store.dispatch('load');
    store.commit('setSearchText', fixture.input.searchText);
    store.commit('setSelectedTracks', fixture.input.selectedTracks);
    store.commit('setFavoriteIds', fixture.input.favoriteIds);
    store.commit('setMode', fixture.input.mode as ScheduleMode);
    if ('action' in fixture && fixture.action) {
      const ops = { addFavorite, removeFavorite };
      const op = fixture.action.op as keyof typeof ops;
      expect(Object.keys(ops)).toContain(op);
      store.commit('setFavoriteIds', ops[op](store.state.selection!.favoriteIds, fixture.action.sessionId));
      expect(store.state.selection?.favoriteIds).toEqual(fixture.expected.favoriteIds);
    }
    const groups: SessionGroup[] = store.getters.scheduleGroups;
    expect(groups.map(group => ({ groupTime: group.groupTime, sessionIds: group.sessions.map(session => session.id) })))
      .toEqual(fixture.expected.groups);
    expect(groups.flatMap(group => group.sessions.map(session => session.id))).toEqual(fixture.expected.sessionIds);
  });
});

describe('NS04 favorite mutations and detail getters', () => {
  test('favorite mutations are no-ops before selection exists, including loading and error', () => {
    const store = createConferenceStore();
    for (const status of ['idle', 'loading', 'error'] as const) {
      if (status === 'loading') store.commit('loadStarted');
      if (status === 'error') store.commit('loadFailed', 'offline');
      const before = freezeState(store.state);
      store.commit('favoriteAdded', 3);
      store.commit('favoriteRemoved', 3);
      expect(toRaw(store.state)).toBe(before);
      expect(store.getters.sessionById(3)).toBeUndefined();
      expect(store.getters.isFavorite(3)).toBe(false);
    }
  });

  test('add, duplicate add, remove and absent remove preserve all other fields and frozen history', async () => {
    const store = createConferenceStore();
    await store.dispatch('load');
    store.commit('setSearchText', ' IOnic ');
    store.commit('setSelectedTracks', ['Ionic']);
    store.commit('setMode', 'favorites');
    const operations = [
      ['favoriteAdded', 3, [3]],
      ['favoriteAdded', 3, [3]],
      ['favoriteRemoved', 3, []],
      ['favoriteRemoved', 9999, []],
    ] as const;
    for (const [type, id, expected] of operations) {
      const before = freezeState(store.state);
      const priorIds = [...before.selection!.favoriteIds];
      store.commit(type, id);
      expect(store.state).toEqual({ ...before, selection: { ...before.selection, favoriteIds: expected } });
      expect(before.selection!.favoriteIds).toEqual(priorIds);
      expect(store.state.conference).toBe(before.conference);
      expect(store.state).not.toBe(before);
    }
  });

  test('two consecutive adds compose in order from current state without mutating either snapshot', async () => {
    const store = createConferenceStore();
    await store.dispatch('load');
    const initial = freezeState(store.state);
    store.commit('favoriteAdded', 12);
    const first = freezeState(store.state);
    store.commit('favoriteAdded', 3);
    expect(store.state.selection!.favoriteIds).toEqual([12, 3]);
    expect(initial.selection!.favoriteIds).toEqual([]);
    expect(first.selection!.favoriteIds).toEqual([12]);
  });

  test('detail getters resolve known/unknown IDs and hide sessions outside ready without losing favorite state', async () => {
    const store = createConferenceStore();
    expect(store.getters.sessionById(3)).toBeUndefined();
    expect(store.getters.isFavorite(3)).toBe(false);
    await store.dispatch('load');
    expect(store.getters.sessionById(3)).toEqual(loadConference().sessions.find(session => session.id === 3));
    expect(store.getters.sessionById(9999)).toBeUndefined();
    expect(store.getters.sessionById(Number.NaN)).toBeUndefined();
    expect(store.getters.isFavorite(3)).toBe(false);
    store.commit('favoriteAdded', 3);
    expect(store.getters.isFavorite(3)).toBe(true);
    expect(store.getters.isFavorite(9999)).toBe(false);
    store.commit('loadStarted');
    expect(store.getters.sessionById(3)).toBeUndefined();
    expect(store.getters.isFavorite(3)).toBe(true);
    store.commit('loadFailed', 'offline');
    expect(store.getters.sessionById(3)).toBeUndefined();
    expect(store.getters.isFavorite(3)).toBe(true);
    store.commit('favoriteRemoved', 3);
    expect(store.getters.isFavorite(3)).toBe(false);
  });

  test.each(['favorites-some', 'favorites-order'])('%s through the new mutations and real loader/core', async (id) => {
    const fixture = deepFreeze(reference.cases.find(item => item.id === id)!);
    const store = createConferenceStore();
    await store.dispatch('load');
    store.commit('setSearchText', fixture.input.searchText);
    store.commit('setSelectedTracks', fixture.input.selectedTracks);
    for (const sessionId of fixture.input.favoriteIds) store.commit('favoriteAdded', sessionId);
    store.commit('setMode', 'favorites');
    expect(store.state.selection!.favoriteIds).toEqual(fixture.input.favoriteIds);
    expect(store.getters.scheduleGroups.map(group => ({
      groupTime: group.groupTime, sessionIds: group.sessions.map(session => session.id),
    }))).toEqual(fixture.expected.groups);
    expect(store.getters.scheduleGroups.flatMap(group => group.sessions.map(session => session.id)))
      .toEqual(fixture.expected.sessionIds);
  });
});

describe('controlled loader lifecycle', () => {
  test('pending load starts synchronously but calls the loader behind a promise boundary', async () => {
    const pending = deferred<Conference>();
    const loader = vi.fn(() => pending.promise);
    const store = createConferenceStore(loader);
    const work = store.dispatch('load');
    expect(store.state.status).toBe('loading');
    expect(store.state.error).toBeNull();
    expect(store.state.conference).toBeNull();
    expect(store.getters.scheduleGroups).toEqual([]);
    expect(loader).not.toHaveBeenCalled();
    await Promise.resolve();
    expect(loader).toHaveBeenCalledTimes(1);
    expect(store.state.status).toBe('loading');
    pending.resolve(smallConference());
    await work;
    expect(store.state.status).toBe('ready');
    expect(store.state.conference?.sessions).toHaveLength(1);
  });

  test.each(['throw', 'reject'] as const)('%s is captured and retry success clears the error', async (kind) => {
    const conference = smallConference();
    let fail = true;
    const loader = vi.fn(() => {
      if (!fail) return conference;
      if (kind === 'throw') throw new Error('controlled failure');
      return Promise.reject(new Error('controlled failure'));
    });
    const store = createConferenceStore(loader);
    await store.dispatch('load');
    expect(store.state).toEqual({ status: 'error', conference: null, selection: null, error: 'controlled failure' });
    expect(store.getters.scheduleGroups).toEqual([]);
    fail = false;
    const retry = store.dispatch('retry');
    expect(store.state.status).toBe('loading');
    expect(store.state.error).toBeNull();
    await retry;
    expect(store.state.status).toBe('ready');
    expect(store.state.error).toBeNull();
    expect(store.getters.scheduleGroups).toHaveLength(1);
    expect(loader).toHaveBeenCalledTimes(2);
  });

  test('a failed retry retains earlier data/selection and a later retry keeps selection', async () => {
    const pending = deferred<Conference>();
    let attempt = 0;
    const loader = () => ++attempt === 1 ? smallConference() : attempt === 2 ? pending.promise : smallConference('retry success');
    const store = createConferenceStore(loader);
    await store.dispatch('load');
    store.commit('setSearchText', 'Breakfast');
    store.commit('setFavoriteIds', [1]);
    store.commit('setMode', 'favorites');
    const before = freezeState(store.state);
    const retry = store.dispatch('retry');
    expect(store.state.status).toBe('loading');
    expect(store.state.conference).toBe(before.conference);
    expect(store.state.selection).toBe(before.selection);
    expect(store.getters.scheduleGroups).toEqual([]);
    pending.reject('plain string failure');
    await retry;
    expect(store.state.status).toBe('error');
    expect(store.state.error).toBe('plain string failure');
    expect(store.state.conference).toBe(before.conference);
    expect(store.state.selection).toBe(before.selection);
    expect(store.getters.scheduleGroups).toEqual([]);
    await store.dispatch('retry');
    expect(store.state.conference?.date).toBe('retry success');
    expect(store.state.selection).toBe(before.selection);
    expect(store.state.error).toBeNull();
  });

  test.each(['resolve', 'reject'] as const)('stale earlier %s cannot overwrite a newer retry', async (completion) => {
    const old = deferred<Conference>();
    const latest = deferred<Conference>();
    const loader = vi.fn().mockImplementationOnce(() => old.promise).mockImplementationOnce(() => latest.promise);
    const store = createConferenceStore(loader);
    const oldWork = store.dispatch('load');
    await Promise.resolve();
    const newWork = store.dispatch('retry');
    await Promise.resolve();
    latest.resolve(smallConference('latest'));
    await newWork;
    store.commit('setSearchText', 'Breakfast');
    const before = freezeState(store.state);
    if (completion === 'resolve') old.resolve(smallConference('stale'));
    else old.reject(new Error('stale error'));
    await oldWork;
    expect(toRaw(store.state)).toBe(before);
    expect(store.state.status).toBe('ready');
    expect(store.state.conference?.date).toBe('latest');
    expect(store.state.error).toBeNull();
    expect(loader).toHaveBeenCalledTimes(2);
  });

  test('a stale success leaves a newer pending request loading', async () => {
    const old = deferred<Conference>();
    const latest = deferred<Conference>();
    const loader = vi.fn().mockImplementationOnce(() => old.promise).mockImplementationOnce(() => latest.promise);
    const store = createConferenceStore(loader);
    const oldWork = store.dispatch('load');
    await Promise.resolve();
    const newWork = store.dispatch('retry');
    await Promise.resolve();
    old.resolve(smallConference('stale'));
    await oldWork;
    expect(store.state.status).toBe('loading');
    expect(store.state.conference).toBeNull();
    expect(store.getters.scheduleGroups).toEqual([]);
    latest.resolve(smallConference('latest'));
    await newWork;
    expect(store.state.conference?.date).toBe('latest');
  });
});
