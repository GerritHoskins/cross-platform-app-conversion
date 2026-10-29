<script lang="ts" setup>
import { $navigateBack, computed, onMounted } from 'nativescript-vue';
import { Application, type EventData, type Page } from '@nativescript/core';
import { useConferenceStore } from '../state/conference-store';
import { parseSessionId } from '../state/session-detail';

const props = defineProps<{ sessionId: string }>();
const store = useConferenceStore();
let statusBarPage: Page | undefined;

function reapplyStatusBarStyle() {
  const page = statusBarPage;
  // Core refreshes edge-to-edge after emitting the appearance event.
  page?.android?.post(() => {
    if (statusBarPage === page && page.isLoaded) page.updateStatusBarStyle('dark');
  });
}

function pageLoaded(event: EventData) {
  if (statusBarPage) return;
  statusBarPage = event.object as Page;
  Application.on(Application.systemAppearanceChangedEvent, reapplyStatusBarStyle);
}

function pageUnloaded() {
  Application.off(Application.systemAppearanceChangedEvent, reapplyStatusBarStyle);
  statusBarPage = undefined;
}

const loading = computed(() => store.state.status === 'idle' || store.state.status === 'loading');
const session = computed(() => {
  const id = parseSessionId(props.sessionId);
  return id === undefined ? undefined : store.getters.sessionById(id);
});
const favorite = computed(() => session.value !== undefined && store.getters.isFavorite(session.value.id));
const placeholders = ['Share', 'Watch', 'Add to Calendar', 'Mark as Unwatched', 'Download Video', 'Leave Feedback'];

function toggleFavorite() {
  if (!session.value) return;
  store.commit(favorite.value ? 'favoriteRemoved' : 'favoriteAdded', session.value.id);
}

onMounted(() => {
  if (store.state.status === 'idle') void store.dispatch('load');
});
</script>

<template>
  <Page class="session-page" statusBarStyle="dark" androidStatusBarBackground="#ffffff" @loaded="pageLoaded" @unloaded="pageUnloaded">
    <ActionBar title="Session" class="session-action-bar">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
    </ActionBar>
    <ScrollView>
      <StackLayout margin="24">
        <StackLayout v-if="loading">
          <ActivityIndicator :busy="true" color="#245a91" accessibilityRole="progressBar" />
          <Label text="Loading session…" textWrap="true" textAlignment="center" color="#111111" />
        </StackLayout>
        <StackLayout v-else-if="store.state.status === 'error'">
          <Label text="Unable to load sessions." textWrap="true" color="#111111" />
          <Label :text="store.state.error ?? ''" textWrap="true" color="#111111" />
          <Button text="Retry" @tap="store.dispatch('retry')" />
        </StackLayout>
        <StackLayout v-else>
          <StackLayout v-if="session">
            <Label :text="session.name" textWrap="true" fontSize="24" fontWeight="bold" accessibilityRole="header" color="#111111" />
            <Label :text="session.tracks.join(', ')" textWrap="true" marginTop="12" color="#333333" />
            <Label v-if="session.description" :text="session.description" textWrap="true" marginTop="12" color="#111111" />
            <Label :text="`${session.timeStart}–${session.timeEnd}`" textWrap="true" marginTop="12" color="#333333" />
            <Label :text="session.location" textWrap="true" color="#333333" />
          </StackLayout>
          <Label v-else text="Session not found." textWrap="true" color="#111111" />
          <Button
            :text="favorite ? 'Remove from favorites' : 'Add to favorites'"
            automationText="favorite-toggle"
            :isEnabled="!!session"
            :accessibilityState="!session ? 'disabled' : favorite ? 'selected' : 'unchecked'"
            marginTop="16"
            @tap="toggleFavorite"
          />
          <Button
            v-for="label in placeholders"
            :key="label"
            :text="label"
            :isEnabled="false"
            accessibilityState="disabled"
          />
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<style scoped>
.session-page,
.session-action-bar {
  background-color: #ffffff;
  color: #111111;
}
</style>
