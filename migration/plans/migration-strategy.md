# Migration comparison strategy

Date: 2026-10-18
Status: planning baseline; no migration implementation started.

## Goal and first milestone

Compare React Native with Expo and NativeScript-Vue 3 by implementing the same bounded schedule feature in separate applications. Preserve the Ionic application as the behavioral reference and retain its web support.

First milestone: Android schedule browsing, grouped sessions, search, all/favorites mode, track filtering, favorite actions, session detail, and back navigation in both targets. Measure actual implementation and validation results before expanding the migration.

## Source facts established during research

The inspected checkout was clean at `d177bc1979e35dd2960aa752b6618b4bba3b7b98`. Revalidate HEAD and status before acting.

- Vue 3, Ionic Vue, Capacitor, Vue Router, Vuex, and TypeScript.
- 13 Vue view files and five Vuex modules.
- Conference data is bundled in `public/data/data.json`; stores fetch it through the browser-relative URL `/data/data.json`.
- Track filtering requires every session track to be included in selected tracks; no selected tracks returns no sessions. Name search is case-insensitive.
- Grouping is embedded in UI/store code. Fixture time values include `8:00 am`. The source originally sorted with engine-dependent `Date` parsing; it now uses explicit 12-hour parsing in `src/utils/time.ts`, which core should match.
- The filter modal used to clear the store's `isFirstLoad` flag as well as the store itself. The store is now the only writer.
- The speakers tab reuses the session detail view (`/tabs/speakers/session/:sessionId`). Slice 1 reaches detail only from the schedule; target detail screens must stay independent of their parent so this entry can be added later.
- Ionic Storage persists the tutorial flag. Separate localStorage helpers appear unused. Favorite persistence is not established by the current code.
- Leaflet, DOM-driven tutorial scrolling, document-based dark mode, window.open, and a Cordova clipboard fallback need platform-specific treatment.
- Login is a TODO and several sharing/session actions are placeholders. Do not implement them as incidental migration work.
- List favorite actions use alerts; the detail star toggles immediately. Preserve the distinction.

Important source reads: `src/views/SessionList.vue`, `SessionDetail.vue`, `SessionListFilter.vue`, `src/router.ts`, `src/store/modules/sessions.ts`, `src/views/Tutorial.vue`, `src/views/Map.vue`, and `public/data/data.json`.

## Architecture decisions

- Keep existing source, root manifest, root lockfile, and native projects unchanged.
- Use independent npm projects under `migration/core`, `migration/react-native`, and `migration/nativescript`.
- Share normalized types and pure algorithms, not rendering, framework reactivity, navigation, gestures, or platform APIs.
- Export core as a compiled local package `@migration/core`, consumed through `file:../core`. Verify local-package refresh and native bundling in dedicated integration packages rather than copying algorithms into targets.
- Core uses TypeScript 5.9.3, CommonJS output, declaration files, and Node's built-in test runner.
- Expo target uses TypeScript, Expo Router, a development build, and reducer/context state.
- NativeScript target uses Vue 3, Vuex 4, and native Frame/Page navigation. Do not silently switch to Pinia if integration is difficult.
- Bundle identical source data into each target and verify its hash.
- Favorites remain in memory. Do not add persistence during the first milestone.
- Preserve behavior and information hierarchy using native controls; pixel-identical Ionic styling is not an acceptance requirement.

## Verification and evaluation

Freeze expected session IDs, grouping, ordering, and filtering results before building targets. Separate observed source behavior from static findings and existing defects.

Test shared algorithms, target state integration, cold detail entry, unknown IDs, modal apply/cancel, favorite confirmation/cancel, state synchronization on return, horizontal gestures versus scrolling, Android back, keyboard, accessible labels, large text, and light/dark presentation.

Record actual commands, exit codes, and device evidence. A successful web preview or TypeScript check does not verify native behavior. Missing native infrastructure leaves native checks unverified or blocked.

Compare measured work, corrections, duplicated/platform-specific code, build effort, and unresolved dependencies. Record time only when measured. Do not extrapolate full-app migration cost from one slice.

Later proposed trials: tutorial/storage/startup, then maps and external actions. iOS requires its own validation environment and evidence. Production replacement would additionally require testing installed-app upgrades and storage continuity.

## Automation policy

Derive narrow codemods only after a reviewed migration slice establishes correct output. Useful candidates include inventory, scaffolding, asset manifests, and deterministic AST edits. Navigation, lifecycle, gestures, styling, and plugin behavior require semantic review. Require fixture tests, repeat-run safety, and explicit unsupported-case reporting.

The historical `C:/Users/Gerrit/job-search/codemod/.../GerritHoskins` package was previously described as guidance-only. Those supplied paths were absent during this research; do not present the historical finding as currently verified.

## Research references

- Expo setup: https://docs.expo.dev/get-started/create-a-project/
- Expo Router: https://docs.expo.dev/router/introduction/
- Development builds: https://docs.expo.dev/develop/development-builds/introduction/
- React Native primitives: https://reactnative.dev/docs/components-and-apis
- NativeScript-Vue introduction: https://nativescript-vue.org/docs/getting-started/introduction
- NativeScript-Vue routing: https://nativescript-vue.org/docs/essentials/routing
- Vue plugin compatibility: https://nativescript-vue.org/docs/essentials/vue-plugins
- NativeScript setup: https://docs.nativescript.org/setup/
- Expo map candidate: https://docs.expo.dev/versions/latest/sdk/map-view/
- NativeScript map candidate: https://docs.nativescript.org/plugins/google-maps
- Codemod: https://github.com/codemod/codemod

These sources were consulted during planning; recheck version-specific setup before scaffolding.
