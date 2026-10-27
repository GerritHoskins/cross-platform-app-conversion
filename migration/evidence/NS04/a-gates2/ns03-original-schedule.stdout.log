<script lang="ts" setup>
import { computed, onMounted } from 'nativescript-vue';
import type { EventData, SearchBar, SegmentedBar } from '@nativescript/core';
import { useConferenceStore } from '../state/conference-store';
import { toScheduleRows, type ScheduleRow } from '../state/schedule-rows';

const store = useConferenceStore();
const ready = computed(() => store.state.status === 'ready');
const loading = computed(() => store.state.status === 'idle' || store.state.status === 'loading');
const rows = computed(() => toScheduleRows(store.getters.scheduleGroups));
const emptyMessage = computed(() => store.state.selection?.mode === 'favorites' && !store.state.selection.favoriteIds.length
  ? 'No favorite sessions.'
  : 'No sessions match your search or filters.');
const templateFor = ({ item }: { item: ScheduleRow }) => item.kind;

function changeSearch(event: EventData) {
  store.commit('setSearchText', (event.object as SearchBar).text);
}

function changeMode(event: EventData) {
  store.commit('setMode', (event.object as SegmentedBar).selectedIndex === 1 ? 'favorites' : 'all');
}

function clearLaunchFocus(event: EventData) {
  const search = event.object as SearchBar;
  if (search.android) {
    // Give the containing layout focus so Android does not immediately refocus
    // its first text input after SearchView.clearFocus(). Tapping still works.
    const parent = search.parent?.android;
    parent?.setFocusable(true);
    parent?.setFocusableInTouchMode(true);
    parent?.requestFocus();
    search.android.clearFocus();
    search.dismissSoftInput();
  }
}

onMounted(() => {
  if (store.state.status === 'idle') void store.dispatch('load');
});
</script>

<template>
  <Page class="conference-page">
    <ActionBar title="Conference" class="conference-action-bar" />
    <GridLayout rows="auto,auto,*">
      <SearchBar
        row="0"
        hint="Search sessions"
        automationText="Search sessions"
        :text="store.state.selection?.searchText ?? ''"
        :isEnabled="ready"
        color="#111111"
        backgroundColor="#ffffff"
        textFieldHintColor="#555555"
        @textChange="changeSearch"
        @loaded="clearLaunchFocus"
      />
      <SegmentedBar
        row="1"
        :selectedIndex="store.state.selection?.mode === 'favorites' ? 1 : 0"
        :isEnabled="ready"
        color="#111111"
        backgroundColor="#eeeeee"
        selectedBackgroundColor="#c5ddf4"
        margin="8,12"
        @selectedIndexChange="changeMode"
      >
        <SegmentedBarItem title="All sessions" />
        <SegmentedBarItem title="Favorite sessions" />
      </SegmentedBar>
      <StackLayout v-if="loading" row="2" verticalAlignment="center" margin="24">
        <ActivityIndicator :busy="true" color="#245a91" />
        <Label text="Loading sessions…" textAlignment="center" color="#111111" />
      </StackLayout>
      <StackLayout v-else-if="store.state.status === 'error'" row="2" verticalAlignment="center" margin="24">
        <Label text="Unable to load sessions." textWrap="true" textAlignment="center" color="#111111" />
        <Label :text="store.state.error ?? ''" textWrap="true" textAlignment="center" color="#111111" />
        <Button text="Retry" @tap="store.dispatch('retry')" />
      </StackLayout>
      <Label
        v-else-if="!rows.length"
        row="2"
        :text="emptyMessage"
        textWrap="true"
        textAlignment="center"
        verticalAlignment="center"
        margin="24"
        color="#111111"
      />
      <ListView v-else row="2" :items="rows" :itemTemplateSelector="templateFor" separatorColor="#dddddd">
        <template #header="{ item }">
          <Label :key="item.key" :text="item.groupTime" class="schedule-heading" />
        </template>
        <template #session="{ item }">
          <StackLayout :key="item.key" :automationText="`session-${item.session.id}`" class="schedule-session">
            <Label :text="item.session.name" textWrap="true" fontSize="18" fontWeight="bold" color="#111111" />
            <Label :text="`${item.session.timeStart}–${item.session.timeEnd}`" textWrap="true" color="#333333" />
            <Label :text="item.session.location" textWrap="true" color="#333333" />
            <Label :text="item.session.tracks.join(', ')" textWrap="true" color="#333333" />
          </StackLayout>
        </template>
      </ListView>
    </GridLayout>
  </Page>
</template>

<style scoped>
.conference-page,
.conference-action-bar {
  background-color: #ffffff;
  color: #111111;
}
.schedule-heading {
  background-color: #e9eff5;
  color: #111111;
  font-size: 18;
  font-weight: bold;
  padding: 12 16;
}
.schedule-session {
  background-color: #ffffff;
  padding: 12 16;
}
</style>
