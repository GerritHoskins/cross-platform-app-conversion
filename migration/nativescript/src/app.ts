import { createApp } from 'nativescript-vue';
import Home from './components/Home.vue';
import { conferenceStoreKey, createConferenceStore } from './state/conference-store';

const store = createConferenceStore();
const app = createApp(Home);
app.use(store, conferenceStoreKey);
app.start();
