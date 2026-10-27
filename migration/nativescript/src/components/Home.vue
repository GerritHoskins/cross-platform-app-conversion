<script lang="ts" setup>
import { $navigateTo } from 'nativescript-vue';
import { Application, type EventData, type Frame } from '@nativescript/core';
import Schedule from './Schedule.vue';
import SessionDetail from './SessionDetail.vue';
import { directEntrySessionId } from '../state/session-detail';

declare const __DEV__: boolean;
let handledFirstLoad = false;

function directEntry(event: EventData) {
  if (handledFirstLoad) return;
  handledFirstLoad = true;
  if (__DEV__) {
    const extra = Application.android.startActivity?.getIntent()?.getStringExtra('ns04SessionId');
    const sessionId = directEntrySessionId(extra, __DEV__);
    if (sessionId !== undefined) {
      $navigateTo(SessionDetail, { frame: event.object as Frame, props: { sessionId }, animated: false });
    }
  }
}
</script>

<template>
  <Frame @loaded="directEntry">
    <Schedule />
  </Frame>
</template>

