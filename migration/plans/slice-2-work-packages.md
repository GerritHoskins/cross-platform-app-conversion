# Slice 2 work packages: speakers list and speaker-to-session entry

Date: 2026-10-29
Status: approved planning specification. Each row below is expanded into `migration/work-packages/<ID>.md` by the coordinator immediately before it is assigned; the matrix itself is not an executable task.
Basis: E01 revision 2 recommendation (`migration/reports/E01-comparison.md`, section 7) and the slice 1 plan (`migration/plans/qwen-work-packages.md`), whose protocol still applies except where this file changes it.

## Human acceptance and decisions (2026-10-29)

- **Accepted:** NS07 revision 2 (`2a79815c`) and E01 revision 2 (`5fa41cc2`) are accepted by the human (Done). This records acceptance only for those two packages.
- **D1 targets:** build slice 2 on both targets with the same cases and evidence standard, React Native / Expo first (the E01 lead), then NativeScript-Vue, then a comparison package E02.
- **D2 scope:** speakers list, speaker-to-session detail entry, and a read-only speaker detail page (photo, name, title, biography). The source's contact, share and social actions (`window.open`, `mailto:`, `tel:`, clipboard) are not rendered.
- **D3 standalone builds:** the acceptance packages RN10 and NS10 may build and install a local standalone Android APK (JavaScript bundled in, no development server, production-mode bundle) on the existing AVD, to test cold known/unknown entry (E01 condition 1) and, for NativeScript, that the development-only direct-entry harness is excluded. No store upload; any signing key is a local throwaway in an ignored build folder and is never committed.
- **D4 continuation:** after an APPROVE the coordinator commits the manifest, pushes, and launches the next package without asking. It stops for a human go-ahead before RN10, before NS10 and before E02, and it stops on BLOCKED, on an unresolved advice cycle, or on anything that needs a human permission (for example clearing Gboard's clipboard history).

Coordinator decisions (the human may overrule them):

- **Branch:** `migration/slice-2`, created from `migration/slice-1` at `5fa41cc2` so the open slice 1 pull request stays unchanged. Commits and pushes follow the slice 1 rules on this branch.
- **Navigation shell:** bottom tabs **Schedule** and **Speakers**, each with its own stack, as in the source (`src/views/Tabs.vue`). The source's Map and About tabs are not rendered.
- **Time log:** E01 condition 3 asks for prospective coordinator and human time. The coordinator appends one JSON line per activity to `tools/qwen-supervisor/.runs/slice-2-time.jsonl` (`{package, revision, activity: run|verify|review|commit|human, start, end}`); E02 reads it as a measured source.

## Source facts (static, read 2026-10-29)

- `src/views/SpeakerList.vue`: speakers sorted with `a.name.localeCompare(b.name)`; each speaker card lists that speaker's sessions (`sessions.filter(s => s.speakerIds.includes(id))`, store order) and an "About <name>" entry; session rows push `/tabs/speakers/session/:id`, speaker rows push `/tabs/speakers/speaker/:id`. Loads speakers and sessions on mount if empty.
- `src/store/modules/speakers.ts`: speaker normalization (`id` via `parseInt`, `name`, `profilePic`, `title`, `about` and contact fields defaulting to `''`); fetches `/data/data.json` separately from the session store.
- `src/views/SpeakerDetail.vue`: back `defaultHref="/tabs/speakers"`; photo, name and "<about> Say hello on social media!"; an unknown ID leaves `currentSpeaker` null, so the page shows "Loading..." and "Loading biography..." indefinitely (a source quirk). Contact/share action sheets and social chips are out of scope (D2).
- `src/router.ts:85-90`: `/tabs/speakers/session/:sessionId` reuses `SessionDetail.vue`; its `defaultHref` is the fixed `/tabs/schedule` (`SessionDetail.vue:180`), used only without history.
- Data: 13 speakers, all with photos under `public/assets/img/speakers/` (13 JPEG files, 34–86 kB); every speaker has 1–4 sessions (26 speaker-session links in total); no speaker record has its own `sessions` field.
- Core today: `Speaker` is `{ id, name }` only (`migration/core/src/types.ts`); sessions already carry resolved `speakerIds`.

## Contract decisions P02 must freeze

1. Speaker order: a deterministic, locale-independent comparison (no engine-dependent `localeCompare` defaults), with a stated tie rule; record that it reproduces the source order for the fixture.
2. Sessions per speaker: source store order (data order), not time order; a speaker without sessions gets an empty list (synthetic check, not in the fixture).
3. Speaker detail fields and defaults; unknown or malformed speaker ID shows an explicit not-found state instead of the source's endless "Loading..." (a deliberate deviation, recorded as such).
4. Speaker-session entry: the existing session-ID detail screen is reused; Back returns to the speakers context it came from; a cold entry's Back goes to the Speakers tab root (the source's fixed `/tabs/schedule` default is recorded as a quirk, not copied).
5. Tab switching preserves each tab's stack and the schedule's search, mode, filter and favorites; a favorite toggled from the speaker-session detail shows on the schedule.
6. Profile images: the 13 source files are bundled byte-identically in each target and hash-verified; the fixture has no missing photo.

## Execution order

`P02 -> C04 -> RN08 -> RN09 -> [human go-ahead] RN10 -> NS08 -> NS09 -> [human go-ahead] NS10 -> [human go-ahead] E02`

| ID | Required reads | Allowed output | Acceptance |
| --- | --- | --- | --- |
| P02: speakers contract | This plan; slice 1 contract (read-only); `SpeakerList.vue`, `SpeakerDetail.vue` (template and script, not the actions), `speakers.ts`, `sessions.ts` normalization, `router.ts`, `Tabs.vue`; data via script | `migration/reference/speakers-contract.md`, `derive-speakers.mjs`, `expected-speakers.json`; P02 evidence | The six decisions above frozen; tagged `[static]`/`[derived]`/`[unverified]` with file:line; expected cases for sorted speakers, sessions per speaker, detail fields, image hashes, unknown IDs; two byte-identical runs; slice 1 contract and fixtures unchanged. |
| C04: core speakers | P02; core sources and tests | Core types/normalization for speaker fields; `sortSpeakers`, `sessionsForSpeaker`; tests; `CORE_API_VERSION` 2 | Additive API; all P02 cases pass; existing 53 tests still pass; both targets still typecheck against the rebuilt core without changes. |
| RN08: Expo tabs and speakers list | C04; RN slice 1 layout and state | Tab layout with per-tab stacks; speakers list screen; core refresh; focused tests | Schedule tab behaves exactly as in slice 1 (existing 99 tests green); speakers list matches P02 order and sessions; tab switches keep schedule state. |
| RN09: Expo speaker detail and session entry | P02; RN08 | Speaker detail screen and route; speaker-session route reusing the session detail screen; bundled photos with hash check; tests | Known/unknown speaker; speaker → session → Back returns to speakers; detail star updates the shared favorites; cold-entry routes covered by tests. |
| RN10: Android acceptance (RN) | Slice 2 checklist; RN08/RN09 handoffs | Target-only in-scope fixes and evidence; local standalone APK (D3) | Checklist cases on the AVD, including cold known/unknown speaker and session entry in the standalone build, Back/hardware Back, large text and recreation on the new paths, light/dark, labels; TalkBack walkthrough of the new path by the human (recorded). |
| NS08: NativeScript tabs and speakers list | C04; NS slice 1 layout and store | Native tab view with per-tab Frames; speakers page; core refresh; tests | Same cases as RN08; existing 115 tests green. |
| NS09: NativeScript speaker detail and session entry | P02; NS08 | Speaker detail page; speaker-session navigation reusing the session detail; bundled photos; tests | Same cases as RN09; development entry harness extended only behind `__DEV__`. |
| NS10: Android acceptance (NS) | Slice 2 checklist; NS08/NS09 handoffs | As RN10 | Same evidence standard as RN10, plus proof that the `__DEV__` harness is absent from the standalone build. |
| E02: slice 2 comparison | E01 method; both acceptance results; time log | Comparison report and derived data only | E01's method applied to slice 2; coordinator/human time reported from the time log; conditions 1–3 of E01 answered with evidence; lead-target conclusion; no full-app cost claims. |

The slice 2 acceptance checklist (`migration/plans/slice-2-android-acceptance-checklist.md`, target-neutral like the slice 1 checklist) is written by the coordinator before RN10 and frozen for both targets.

## Process

- **Executor:** Hermes `translation-migration`, invocation override `--provider openai-codex --model gpt-6.1-sol --reasoning high`, toolsets `terminal,file`, no delegation; one fresh session per phase; checkpoints before budget limits.
- **Review:** the coordinator verifies the frozen packet, then dispatches exactly one independent GPT-6.1 Sol high review per revision (goal from `migration/instructions/qwen.md`) and saves the matching verdict verbatim.
- **Commit:** exactly the manifest files, one commit per package, `migration(<ID>): <summary>`, the pre-commit sensitive-data hook never skipped; the root `package-lock.json` change is never staged.
- **Privacy:** slice 1 rules continue: never capture `dumpsys input_method`; inspect every device frame; redact screenshots together with every raw receipt found by PNG signature; keep literal scan patterns only in run prompts and helpers under `tools/`; the human clears Gboard's clipboard history before keyboard runs.
- **Budgets:** about six implementation files per package; split rather than exceed. Unavailable checks are unverified, never passed.

## Out of scope

Map and About tabs, tutorial/startup/storage, login, working contact/share/social/calendar actions, favorite persistence, iOS, physical devices, codemods, and any change to the Ionic source.
