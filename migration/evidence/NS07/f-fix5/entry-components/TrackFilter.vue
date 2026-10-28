<script lang="ts" setup>
import { $closeModal, ref } from 'nativescript-vue';
import { type EventData, type Page, type Switch } from '@nativescript/core';
import { useConferenceStore } from '../state/conference-store';
import { checkedTrackNames, setAllTracks, toggleTrack } from '../state/track-filter';

const store = useConferenceStore();
const draft = ref(store.getters.trackOptions);
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

function changeTrack(event: EventData, name: string) {
  // checkedChange also fires for programmatic updates; only a changed native
  // value should toggle the draft, not initialization or Select All / Reset.
  const checked = (event.object as Switch).checked;
  if (draft.value.find(track => track.name === name)?.checked !== checked) {
    draft.value = toggleTrack(draft.value, name);
  }
}
</script>

<template>
  <Frame>
    <Page class="filter-page" statusBarStyle="dark" androidStatusBarBackground="#ffffff" @loaded="pageLoaded" @unloaded="pageUnloaded">
      <ActionBar title="Filter Sessions" class="filter-action-bar">
        <NavigationButton
          text="Close"
          android.systemIcon="ic_menu_close_clear_cancel"
          automationText="Close filter"
          accessibilityLabel="Close filter"
          @tap="$closeModal()"
        />
      </ActionBar>
      <GridLayout rows="*,auto,auto">
        <ScrollView row="0">
          <StackLayout margin="12,24">
            <Label text="Tracks" fontSize="24" fontWeight="bold" accessibilityRole="header" color="#111111" />
            <GridLayout v-for="track in draft" :key="track.name" columns="*,auto" minHeight="48">
              <Label col="0" :text="track.name" verticalAlignment="center" color="#111111" />
              <Switch
                col="1"
                :checked="track.checked"
                :automationText="`track-${track.name}`"
                :accessibilityLabel="track.name"
                @checkedChange="changeTrack($event, track.name)"
              />
            </GridLayout>
          </StackLayout>
        </ScrollView>
        <GridLayout row="1" columns="*,*" margin="0,12">
          <Button col="0" text="Deselect All" @tap="draft = setAllTracks(draft, false)" />
          <Button col="1" text="Select All" @tap="draft = setAllTracks(draft, true)" />
        </GridLayout>
        <GridLayout row="2" columns="*,*" margin="0,12,12,12">
          <Button col="0" text="Reset" @tap="draft = setAllTracks(draft, false)" />
          <Button col="1" text="Done" @tap="$closeModal(checkedTrackNames(draft))" />
        </GridLayout>
      </GridLayout>
    </Page>
  </Frame>
</template>

<style scoped>
.filter-page,
.filter-action-bar {
  background-color: #ffffff;
  color: #111111;
}
</style>
