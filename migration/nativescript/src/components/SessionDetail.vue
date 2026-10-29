<script lang="ts" setup>
import { $navigateBack, computed, onMounted } from 'nativescript-vue';
import { type EventData, type Page } from '@nativescript/core';
import { useConferenceStore } from '../state/conference-store';
import { parseSessionId } from '../state/session-detail';

const props = defineProps<{ sessionId: string }>();
const store = useConferenceStore();
let statusBarPage: Page | undefined;
let statusBarPreDraw: android.view.ViewTreeObserver.OnPreDrawListener | undefined;
let statusBarAttachState: android.view.View.OnAttachStateChangeListener | undefined;
let statusBarPreDrawRegistered = false;

function setStatusBarPreDraw(view: android.view.View, registered: boolean) {
  if (!statusBarPreDraw || statusBarPreDrawRegistered === registered) return;
  // F7: obtain the current observer while its view still owns it; never cache it.
  const observer = view.getViewTreeObserver();
  if (registered) observer.addOnPreDrawListener(statusBarPreDraw);
  else observer.removeOnPreDrawListener(statusBarPreDraw);
  statusBarPreDrawRegistered = registered;
}

function pageLoaded(event: EventData) {
  if (statusBarPage) return;
  const page = event.object as Page;
  const view = page.android;
  if (!view || android.os.Build.VERSION.SDK_INT < 30) return;
  statusBarPage = page;
  statusBarPreDraw = new android.view.ViewTreeObserver.OnPreDrawListener({
    onPreDraw() {
      if (statusBarPage !== page || !page.isLoaded) return true;
      // F5: repair after this window's configuration/insets/layout, not a posted delay.
      const controller = page.getClosestWindow().getInsetsController();
      const darkIcons = android.view.WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS;
      if (controller && !(controller.getSystemBarsAppearance() & darkIcons)) {
        page.updateStatusBarStyle('dark');
      }
      return true;
    },
  });
  statusBarAttachState = new android.view.View.OnAttachStateChangeListener({
    onViewAttachedToWindow(view) {
      if (statusBarPage === page && page.isLoaded) setStatusBarPreDraw(view, true);
    },
    onViewDetachedFromWindow(view) {
      // Android still exposes the attached tree here, before clearing AttachInfo.
      if (statusBarPage === page) setStatusBarPreDraw(view, false);
    },
  });
  view.addOnAttachStateChangeListener(statusBarAttachState);
  setStatusBarPreDraw(view, true);
}

function pageUnloaded() {
  const view = statusBarPage?.android;
  if (view) {
    setStatusBarPreDraw(view, false);
    if (statusBarAttachState) view.removeOnAttachStateChangeListener(statusBarAttachState);
  }
  statusBarPage = undefined;
  statusBarPreDraw = undefined;
  statusBarAttachState = undefined;
  statusBarPreDrawRegistered = false;
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
