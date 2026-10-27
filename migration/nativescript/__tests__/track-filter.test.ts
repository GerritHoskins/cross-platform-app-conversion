import { describe, expect, test, vi } from 'vitest';
import reference from '../../reference/expected-cases.json';
import { loadConference } from '../src/data/load-conference';
import { createConferenceStore, type ConferenceStore, type TrackOption } from '../src/state/conference-store';
import { applyFilterResult, checkedTrackNames, setAllTracks, toggleTrack } from '../src/state/track-filter';

const frozenDraft = Object.freeze([
  Object.freeze({ name: 'Design', checked: false }),
  Object.freeze({ name: 'Food', checked: true }),
  Object.freeze({ name: 'Ionic', checked: true }),
]);

function expectReference(store: ConferenceStore, id: string) {
  const fixture = reference.cases.find(item => item.id === id)!;
  const groups = store.getters.scheduleGroups;
  expect(groups.map(group => ({ groupTime: group.groupTime, sessionIds: group.sessions.map(session => session.id) })))
    .toEqual(fixture.expected.groups);
  expect(groups.flatMap(group => group.sessions.map(session => session.id))).toEqual(fixture.expected.sessionIds);
}

function expectFreshOptions(result: TrackOption[], input: readonly TrackOption[]) {
  expect(result).not.toBe(input);
  result.forEach((track, index) => expect(track).not.toBe(input[index]));
}

async function loadedStore() {
  const loader = vi.fn(loadConference);
  const store = createConferenceStore(loader);
  await store.dispatch('load');
  return { store, loader };
}

describe('pure track filter drafts', () => {
  test('toggle changes only the named row in either direction and preserves frozen input', () => {
    const toggled = toggleTrack(frozenDraft, 'Ionic');
    expect(toggled).toEqual([
      { name: 'Design', checked: false },
      { name: 'Food', checked: true },
      { name: 'Ionic', checked: false },
    ]);
    expect(toggleTrack(toggled, 'Ionic')).toEqual(frozenDraft);
    expectFreshOptions(toggled, frozenDraft);
    expect(frozenDraft[2].checked).toBe(true);
  });

  test('toggle of an unknown name still returns independent unchanged options', () => {
    const result = toggleTrack(frozenDraft, 'Unknown');
    expect(result).toEqual(frozenDraft);
    expectFreshOptions(result, frozenDraft);
  });

  test.each([false, true])('setAllTracks(%s) changes every row without mutating input', checked => {
    const result = setAllTracks(frozenDraft, checked);
    expect(result).toEqual(frozenDraft.map(track => ({ name: track.name, checked })));
    expectFreshOptions(result, frozenDraft);
    expect(checkedTrackNames(frozenDraft)).toEqual(['Food', 'Ionic']);
  });

  test('Reset uses the same draft-only clear as Deselect All', () => {
    const selected = setAllTracks(frozenDraft, true);
    const reset = setAllTracks(selected, false);
    expect(checkedTrackNames(reset)).toEqual([]);
    expect(checkedTrackNames(selected)).toEqual(['Design', 'Food', 'Ionic']);
    expectFreshOptions(reset, selected);
  });

  test('checked names keep displayed sorted order and return a fresh array', () => {
    const names = checkedTrackNames(frozenDraft);
    expect(names).toEqual(['Food', 'Ionic']);
    expect(checkedTrackNames(frozenDraft)).not.toBe(names);
    names.push('Design');
    expect(checkedTrackNames(frozenDraft)).toEqual(['Food', 'Ionic']);
  });

  test('empty drafts remain empty with fresh outputs for every operation', () => {
    const empty = Object.freeze([]);
    for (const result of [toggleTrack(empty, 'Ionic'), setAllTracks(empty, true), setAllTracks(empty, false), checkedTrackNames(empty)]) {
      expect(result).toEqual([]);
      expect(result).not.toBe(empty);
    }
  });
});

describe('modal results through the real store, loader and core', () => {
  test('draft toggles, deselect, select and Reset never affect applied state or groups', async () => {
    const { store, loader } = await loadedStore();
    const selection = store.state.selection;
    const groups = store.getters.scheduleGroups;
    let draft = store.getters.trackOptions;
    draft = toggleTrack(draft, 'Ionic');
    expect(draft.filter(track => !track.checked).map(track => track.name)).toEqual(['Ionic']);
    draft = setAllTracks(draft, false);
    expect(checkedTrackNames(draft)).toEqual([]);
    draft = setAllTracks(draft, true);
    expect(checkedTrackNames(draft)).toHaveLength(10);
    draft = setAllTracks(draft, false);
    expect(checkedTrackNames(draft)).toEqual([]);
    expect(store.state.selection).toBe(selection);
    expect(store.getters.scheduleGroups).toBe(groups);
    expectReference(store, 'default-all');
    expect(loader).toHaveBeenCalledTimes(1);
  });

  test('Done with only Ionic matches single-track and reopening mirrors the applied filter', async () => {
    const { store, loader } = await loadedStore();
    const draft = toggleTrack(setAllTracks(store.getters.trackOptions, false), 'Ionic');
    const result = checkedTrackNames(draft);
    applyFilterResult(store, result);
    expectReference(store, 'single-track');
    expect(checkedTrackNames(store.getters.trackOptions)).toEqual(['Ionic']);
    result.push('Design');
    expect(store.state.selection!.selectedTracks).toEqual(['Ionic']);
    expect(loader).toHaveBeenCalledTimes(1);
  });

  test('Done with Design and Ionic then search Ionic matches search-plus-track', async () => {
    const { store, loader } = await loadedStore();
    const draft = toggleTrack(toggleTrack(setAllTracks(store.getters.trackOptions, false), 'Ionic'), 'Design');
    applyFilterResult(store, checkedTrackNames(draft));
    expect(store.state.selection!.selectedTracks).toEqual(['Design', 'Ionic']);
    store.commit('setSearchText', 'Ionic');
    expectReference(store, 'search-plus-track');
    expect(store.state.selection!.mode).toBe('all');
    expect(loader).toHaveBeenCalledTimes(1);
  });

  test('empty Done matches no-tracks, reopens unchecked, and Select All restores default-all', async () => {
    const { store, loader } = await loadedStore();
    applyFilterResult(store, checkedTrackNames(setAllTracks(store.getters.trackOptions, false)));
    expectReference(store, 'no-tracks');
    expect(store.getters.scheduleGroups).toEqual([]);
    expect(store.state.selection!.selectedTracks).toEqual([]);
    expect(store.getters.trackOptions.every(track => !track.checked)).toBe(true);
    applyFilterResult(store, checkedTrackNames(setAllTracks(store.getters.trackOptions, true)));
    expectReference(store, 'default-all');
    expect(store.getters.trackOptions.every(track => track.checked)).toBe(true);
    expect(loader).toHaveBeenCalledTimes(1);
  });

  test.each([undefined, false, null, true, 'Ionic', { tracks: ['Design'] }])('closing with %j discards edits without a commit or reload', async result => {
    const { store, loader } = await loadedStore();
    applyFilterResult(store, ['Ionic']);
    const selection = store.state.selection;
    const groups = store.getters.scheduleGroups;
    const draft = toggleTrack(store.getters.trackOptions, 'Design');
    expect(checkedTrackNames(draft)).toEqual(['Design', 'Ionic']);
    const commits: string[] = [];
    const unsubscribe = store.subscribe((mutation: { type: string }) => commits.push(mutation.type));
    applyFilterResult(store, result);
    unsubscribe();
    expect(commits).toEqual([]);
    expect(store.state.selection).toBe(selection);
    expect(store.getters.scheduleGroups).toBe(groups);
    expectReference(store, 'single-track');
    expect(checkedTrackNames(store.getters.trackOptions)).toEqual(['Ionic']);
    expect(loader).toHaveBeenCalledTimes(1);
  });

  test('Food with favorites 12 and 3 matches favorites-some without resetting mode or search', async () => {
    const { store, loader } = await loadedStore();
    store.commit('favoriteAdded', 12);
    store.commit('favoriteAdded', 3);
    store.commit('setMode', 'favorites');
    const before = store.state.selection!;
    applyFilterResult(store, ['Food']);
    expectReference(store, 'favorites-some');
    expect(store.state.selection).toEqual({ ...before, selectedTracks: ['Food'] });
    expect(store.state.selection!.favoriteIds).toEqual([12, 3]);
    expect(loader).toHaveBeenCalledTimes(1);
  });

  test('applying and dismissing retain a nonempty search, favorites and mode throughout', async () => {
    const { store, loader } = await loadedStore();
    store.commit('setSearchText', 'Ionic');
    store.commit('favoriteAdded', 4);
    store.commit('setMode', 'favorites');
    const before = store.state.selection!;
    for (const result of [['Ionic'], undefined, false, [], ['Design', 'Ionic']]) {
      applyFilterResult(store, result);
      expect(store.state.selection!.searchText).toBe(before.searchText);
      expect(store.state.selection!.mode).toBe(before.mode);
      expect(store.state.selection!.favoriteIds).toEqual(before.favoriteIds);
    }
    expect(loader).toHaveBeenCalledTimes(1);
  });
});
