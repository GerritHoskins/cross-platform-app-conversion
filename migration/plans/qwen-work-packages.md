# Qwen work packages and Hermes reviewer routing

Date: 2026-10-18
Status: latest planning specification. Individual executable package files, target applications, and the Hermes project profile have not been created.

## User decisions (2026-10-18)

- Build both targets in the planned order: core, Expo (RN01-RN07), NativeScript (NS01-NS07), then E01.
- Work on a local branch `migration/slice-1`. After reviewer APPROVE, commit exactly the files in the approved submission manifest as one commit per package (`migration(<ID>): <summary>`). Never push. Commit only after approval; unapproved work stays uncommitted.
- Android acceptance (RN07/NS07) runs on an SDK emulator AVD.
- R00 is authorized after the R00/P01/C01 package documents are written: create the dedicated `translation-migration` profile and run the handshake. Global Hermes config stays unchanged.
- Default target test tooling, unless revised before RN01/NS01: Jest with React Native Testing Library (Expo template default) for Expo; Vitest for NativeScript store/logic tests.

## Environment prerequisites (observed 2026-10-18)

| Item | Observed | Needed |
| --- | --- | --- |
| Ollama | not running | running, with 65536 context (`OLLAMA_CONTEXT_LENGTH` or Modelfile `num_ctx`); verify via `/api/ps` |
| `JAVA_HOME` | points at JDK `bin` folder | JDK root (`...\jdk-21.0.7.6-hotspot`) |
| Android emulator | installed in SDK, not on `PATH`; no AVD/device attached | AVD created; `%ANDROID_HOME%\emulator` on `PATH` |
| Node | v26.3.0 | confirm Expo SDK and NativeScript CLI support; else use an LTS for target projects |
| NativeScript CLI | 8.9.2 | revalidate with `ns doctor android` |

## Routing evidence and limitation

Hermes is the user-confirmed Qwen client. Inspection found its active configuration at `C:/Users/Gerrit/AppData/Local/hermes/config.yaml` and installed source at `C:/Users/Gerrit/AppData/Local/hermes/hermes-agent`.

Observed configuration:

| Setting | Observed value |
| --- | --- |
| Parent model | `qwen3.8:27b` |
| Parent provider | `ollama-launch` |
| Endpoint | `http://127.0.0.1:11434/v1` |
| Configured context | 65536 |
| Delegation provider | `openai-codex` |
| Delegation model | `gpt-6-astra` |
| Parent reasoning | `xhigh` |
| Delegation reasoning override | absent |

A live, tool-free probe through the installed Hermes delegation credential/runtime resolvers succeeded with in-memory routing overrides. It constructed an AIAgent with provider `openai-codex`, model `gpt-6.1-sol`, reasoning `{enabled: true, effort: high}`, zero tools, and no fallback. Its actual response was `REVIEW_ROUTE_OK`; result model was `gpt-6.1-sol`; process exit code was 0. No repository content was sent. Global config was not changed.

This verifies provider authentication/access and the requested model/reasoning path. It does NOT verify Qwen calling delegate_task, asynchronous result delivery, a dedicated profile, the Ollama server's active context, or a full package review. R00 is the gate for those workflow checks.

## Proposed isolated profile

Create `translation-migration` with `hermes profile create translation-migration --no-skills --no-alias`. Inspect any existing profile before reuse; never overwrite blindly. Do not clone unrelated config, memory, messaging channels, or credentials. Installed Hermes supports profile-to-global auth fallback; verify access without displaying secret values.

Apply only to the new profile, not the current global default:

```yaml
model:
  default: qwen3.8:27b
  provider: ollama-launch
  base_url: http://127.0.0.1:11434/v1
  api_mode: chat_completions
  context_length: 65536
delegation:
  provider: openai-codex
  model: gpt-6.1-sol
  reasoning_effort: high
  fallback_providers: []
  max_concurrent_children: 1
  max_iterations: 30
fallback_providers: []
toolsets:
  - terminal
  - file
  - delegation
```

Verify these toolsets actually resolve in the installed client. Disable unrelated MCP/skills/browser surfaces for routine implementation. This profile configuration is proposed, not applied or tested.

The reviewer is a Hermes child using Sol/high, not this Codex desktop chat. Fresh child sessions provide continuity through saved submissions and reviews, not assumed shared conversation history.

## Package and review protocol

Use one package per fresh Qwen session. Read only instructions, the active package, named source files, and prerequisite handoffs. Aim for no more than six implementation files per package, excluding generated scaffolds. Request a split if scope exceeds that bound.

The approximately 12k fixed-overhead, 20k source-input, and 40k checkpoint thresholds are operational defaults, not measured Qwen capacity. Inspect actual client/server usage. Fixed overhead exceeding the window requires a restricted tool surface, not repeated compaction.

Each individual package must contain: prerequisites; exact reads; exact allowed edit paths; numbered steps; commands with working directories; expected outcomes; acceptance cases; exclusions; review submission; next eligible package. Expand the package matrix below into those files before assigning implementation. Do not give the full matrix to Qwen as a single implementation task.

Every package produces a handoff and revisioned submission manifest. Record package/revision, starting HEAD, pre-existing changes, changed and new files with SHA-256 hashes, command results, evidence paths, and failures/unverified checks. Include untracked files explicitly. Any edit after submission invalidates that revision and requires resubmission.

Submit one child through the installed delegate_task schema:

```json
{
  "tasks": [{
    "goal": "Review the submitted package for scope, correctness and evidence. Read-only: do not edit or run mutating commands. Return the required verdict and explicit next instruction.",
    "context": "Include package ID/revision, repository root, HEAD, submission and handoff paths, focused context, check results and next eligible package."
  }]
}
```

Model/provider/reasoning/tool-selection arguments are not exposed in the inspected model-facing schema. Configure routing outside the model call. Child tools inherit from the parent; read-only review is an instruction boundary, not a demonstrated filesystem sandbox.

If a dispatch handle returns, record it and END THE TURN. Installed async instructions state that results re-enter after the parent's turn ends. Do not poll transcripts, run sleep loops, edit the submission, or start another package. If a complete result returns synchronously, process it directly.

Require matching package and revision plus:

```text
Verdict: APPROVE | CHANGES_REQUIRED | BLOCKED
Findings:
Required checks:
Next instruction: CONTINUE <ID> | REVISE <ID> | STOP
```

No fallback reviewer. Missing, malformed, stale, failed or timed-out review results do not release the gate. Two unsuccessful fixes for one problem trigger focused reviewer advice rather than repeated retries. After an unresolved advice cycle, checkpoint and stop. Reviewer advice cannot authorize scope expansion, secrets, destructive work or external changes. Human acceptance remains separate from technical approval.

## Layout

```text
migration/
  plans/
  instructions/qwen.md
  instructions/reviewer.md
  work-packages/<ID>.md
  handoffs/<ID>.md
  submissions/<ID>-r<N>.json
  reviews/<ID>-r<N>.md
  reference/
  core/
  react-native/
  nativescript/
  evidence/
```

## Shared implementation decisions

- Independent npm projects; preserve existing product source, root manifests/lockfiles and native projects.
- `@migration/core` compiles CommonJS JavaScript plus declarations; target dependency is `file:../core`.
- TypeScript 5.9.3 and Node's built-in test runner for core. Build before target install and test local dependency freshness in RN02/NS02.
- Core exports `normalizeConference(raw)`, `selectSessions(sessions, selection)`, `groupSessions(sessions)`, `addFavorite(ids, sessionId)`, and `removeFavorite(ids, sessionId)`.
- Selection contains search text, selected tracks, favorite IDs, and `all | favorites` mode. Preserve case-insensitive name search, every-track matching, and no results with zero selected tracks.
- Parse 12-hour display times explicitly into numeric minutes. Preserve display strings and source IDs. Required malformed data raises descriptive errors; missing descriptions become empty strings; unresolved optional speaker references are omitted.
- Expo uses Router, development builds, and reducer/context. NativeScript-Vue uses Vuex 4 and Frame/Page navigation. No unreviewed state/framework substitutions.
- Each target bundles the source fixture and verifies its hash. No platform-relative `/data/data.json` fetch.
- Favorites remain in memory. Keep placeholder demo actions as placeholders. Maps, tutorial/storage/startup, the speaker list and its speaker-session detail entry, authentication, working sharing/calendar/downloads, iOS verification and codemod implementation are outside the first milestone.

## Execution order

`R00 -> P01 -> C01 -> C02 -> C03 -> RN01 -> RN02 -> RN03 -> RN04 -> RN05 -> RN06 -> RN07 -> NS01 -> NS02 -> NS03 -> NS04 -> NS05 -> NS06 -> NS07 -> E01`

Each row is a package definition to expand, not an instruction to implement the entire sequence in one session.

| ID | Required reads | Allowed output | Acceptance |
| --- | --- | --- | --- |
| R00: profile/handshake | Instructions; installed Hermes schema/config | Dedicated profile; routing evidence; workflow docs | Qwen sends a nonce through delegate_task; runtime evidence shows Sol/high/no fallback; result is delivered after waiting; global config unchanged. Verify parent remains Qwen and inspect active server context. |
| P01: reference contract | SessionList/Detail/Filter, router, session store, conference JSON | reference contract and expected-result fixtures | Expected IDs/order for search/tracks/favorites/groups; list confirmations versus immediate detail toggle; observed/static/unverified findings distinguished; reviewer freezes contract. |
| C01: core shell | P01 and root manifest | Core manifest/config, entrypoint, smoke test | Independent install/build/test; Node can load public package export. No domain algorithms yet. |
| C02: normalization | P01, source normalization, data fixture | Core types/normalization and tests | IDs, optional fields, unresolved speakers, malformed data and 12-hour parsing tested. |
| C03: selection/grouping | P01 expected cases; C02 interfaces | Core algorithms and tests | Exact IDs/order, stable equal-time ordering, input immutability, duplicate-safe favorite addition and absent-ID removal. |
| RN01: Expo shell | C03 handoff; official setup | Expo project and check scripts | TypeScript Router shell; exact generated versions locked; typecheck and Android development launch. |
| RN02: core integration | Core exports; RN01 | Local dependency/config, bundled fixture/loader, diagnostic screen | Source fixture hash, normalized count/first session, current core build consumption and clean target reinstall all verified. |
| RN03: state/schedule | P01; RN02 | Reducer/context, schedule/list, focused tests | Loading/error/retry/empty states; SectionList; search and all/favorites match reference. |
| RN04: detail/favorites | P01; RN03 | Nested stack/detail route, favorite controls/tests | Cold detail entry, unknown ID, immediate detail star, list confirmation/cancel, list state retained on back. Detail screen takes only a session ID and does not depend on the schedule as parent (speaker entry deferred). |
| RN05: filter modal | P01 filter cases; RN03/04 | Modal and focused tests | Local draft selection; apply/cancel; select-all/clear-all; dismissal without apply preserves filters. |
| RN06: swipes | RN04 favorite handlers; RN05 | Row gestures; required Expo-compatible gesture dependency/config | Swipe reuses existing actions; no accidental navigation; vertical scroll works; accessible buttons retained. |
| RN07: Android acceptance | Frozen contract and RN handoffs | Target-only in-scope fixes and evidence | Actual checks/build/device evidence for slice, hardware back, keyboard, labels, large text, light/dark and modal dismissal. |
| NS01: native shell | C03; official NativeScript-Vue setup | Vue 3 TS project and check scripts | Frame/Page shell; versions locked; typecheck and Android launch. |
| NS02: core integration | Core exports; NS01 | Local dependency/config, bundled fixture/loader, diagnostic page | Same hash/data/fresh-package/reinstall checks as RN02. No copied algorithms. |
| NS03: state/schedule | P01; NS02 | Vuex store, native virtualized list with header rows, tests | Shared selection drives reactive native rows; loading/error/retry/empty/search/mode cases match. Vuex integration failure is escalated, not silently replaced. |
| NS04: detail/favorites | P01; NS03 | Frame/Page navigation, detail, buttons, development-only direct-entry harness | Same business cases as RN04; native back preserves schedule state. |
| NS05: filter modal | P01; NS03/04 | Native modal and tests | Same business cases as RN05; native cancellation discards draft. |
| NS06: swipes | NS04 handlers; NS05 | Native touch handling on rows | Same actions/navigation/scroll/button cases as RN06. No unreviewed plugin fallback. |
| NS07: Android acceptance | Frozen contract and NS handoffs | Target-only in-scope fixes and evidence | Same evidence standard as RN07 plus native lifecycle/modal cancellation. |
| E01: comparison | Reference and both acceptance reports | Comparison report only | Measured versus unknown effort; actual results/blockers/unverified items; next slice recommendation. No full-app cost claims. |

## Commands to establish in package setup

```text
npm --prefix migration/core run build
npm --prefix migration/core test
npm --prefix migration/react-native run typecheck
npm --prefix migration/react-native test
npm --prefix migration/react-native run android
npm --prefix migration/nativescript run typecheck
npm --prefix migration/nativescript test
npm --prefix migration/nativescript run android
```

These commands do not exist yet. C01/RN01/NS01 must implement the relevant scripts; test scripts must terminate rather than watch. Freeze exact test tooling and per-file allowlists in each executable package before assigning it. Do not claim the matrix alone is fully executable.

Expo setup research recommended `default@sdk-58` and development builds as of 2026-10-18. Revalidate template availability, record exact resolved versions, and reuse generated lockfiles. For NativeScript use the official Vue 3 TypeScript blank template; record the exact template/CLI versions during package preparation.

## Scope and completion

No pushes, publishing, deployments, unrelated dependency changes or production changes. Commits follow the user decision above: one local commit per approved package on `migration/slice-1`, never before approval. Installing dependencies is allowed only in the new core/target packages where the assigned package explicitly authorizes them. Profile changes are limited to R00's dedicated Hermes profile.

Native infrastructure failure blocks native acceptance, not necessarily unrelated static work. Report every unavailable check explicitly. Android is the first milestone; iOS remains unverified until separately tested. Human acceptance is required for Done, even if reviewer approval permits continuation.

References: https://developers.openai.com/api/docs/guides/reasoning ; https://docs.expo.dev/get-started/create-a-project/ ; https://nativescript-vue.org/docs/getting-started/creating-an-application
