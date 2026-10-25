# RN04 revision 1 — phase A checkpoint

Status: CHECKPOINTED — phase A implementation, software and final Git/scope checks complete. Not submitted. STOP; phase B is a separate session.

## Assignment and baseline

Human assignment 2026-10-25 explicitly substitutes Hermes GPT-6.1 Sol high for the package's named local Qwen3.8-27B executor; all other RN04 requirements remain unchanged except the human's phase A boundary. Claude Code supervises with live output. No delegation/review dispatch or routing/profile changes were performed.

Pre-edit terminal gate: branch migration/slice-1; HEAD c283c7eaa0d80ad72dd4d39fe8c10d986ea74257; tree 214a695cdc318b2c0605d0b785842d681b598aa9. `git log --format=%h -1 -- migration/reviews/RN03-r2.md` returned c283c7e, identical to HEAD. `git merge-base --is-ancestor c283c7e HEAD`, target-path `git diff c283c7e --exit-code -- ...`, and `git diff --cached --exit-code` exited 0 before product edits. New target-path status was empty. Initial full status contained only untracked IDEA.md, tools/, migration/plans/rn07-android-acceptance-checklist.md and migration/work-packages/RN04.md. No applicable AGENTS.md/CLAUDE.md/.cursorrules was found in the checked repository/ancestor paths.

Protected IDEA.md SHA-256: 56b5dc0ebd13907b3214f0325c11380e03d463c29284f3213054de7f0a097d9d. Hash-only access, never text-read, edited or staged. Initial gate preceded the helper; baseline-status receipt additionally includes this session's newly created RN04 evidence directory. Baseline receipts and idea-baseline.json are under migration/evidence/RN04/checks-a/.

## Files changed

Paths below are relative to migration/react-native/ unless qualified:

- src/state/conference-state.tsx — reducer-owned core favorite additions/removals; session/favorite selectors; existing exports and lifecycle preserved.
- src/screens/session-detail-screen.tsx — independent raw-ID detail UI, loading/error/retry/not-found, immediate favorite toggle, disabled placeholders, scrollable themed content.
- src/app/session/[sessionId].tsx — raw parameter normalization and detail adapter only.
- src/app/_layout.tsx — detail registration and required initialRouteName; provider still wraps the single Stack.
- src/screens/schedule-screen.tsx — link content plus separate sibling Favorite/Remove buttons and native-alert semantics; existing row IDs/text retained.
- __tests__/conference-state.test.ts — six favorite action/selector/reference additions, all original tests retained.
- __tests__/schedule-screen.test.tsx — three alert/control tests including no navigation, all eight original tests retained.
- __tests__/session-detail-screen.test.tsx — fifteen real-router/detail tests, including strict raw-ID boundary cases.
- migration/work-packages/RN04.md — prescribed status line only; no other package text changed.
- migration/evidence/RN04/checks-a/ — new command receipts, stdout/stderr logs, actual Jest JSON, parsed counts, Android-export artifact inventory and preservation/scope evidence; LF endings.
- migration/handoffs/RN04-checkpoint-a.md — this checkpoint, not the final handoff.
- tools/qwen-supervisor/.runs/sol-rn04-r1-implement-20261025/ — shell-free check/summarize/finish helpers and final result.json.

## Decisions implemented

- IDs require a nonempty ASCII-decimal string and a matching loaded numeric session ID. Partial parses, signs, whitespace, decimal points and non-ASCII digits are rejected; leading zeros are accepted. This deliberately differs from source parseInt. Never show not-found while loading/error.
- Already-favorite all-mode action deliberately reproduces the source's `Favorite already added` removal-confirmation quirk. Cancel leaves state alone; destructive Remove dispatches removal. First-time add dispatches before `Favorite Added`; favorites-mode removal confirms with `Remove Favorite`. Detail toggles immediately without alerts.
- Slice 1's single root Stack is the schedule stack; no tabs added. Required initialRouteName gives cold entry a schedule beneath detail. The installed router warns this setting is deprecated in favor of anchor; requirement retained, warning not suppressed. Cold back can carry an irrelevant sessionId query parameter; tests assert actual pathname `/` and schedule UI rather than incorrectly requiring no query string.
- Product uses core addFavorite/removeFavorite inside the reducer, not captured favorite arrays. UI never uses fixture-only setFavoriteIds. No persistence, gestures, sharing or placeholder behavior added.
- Real renderRouter reuses the actual layout/index/detail modules under unchanged jest-expo configuration. No wholesale router, provider, core or SectionList mocks. Loader spies exercise async boundaries and retry. Back test confirms the same mounted search element, retained search/mode, changed favorites and unchanged loader count. Native scroll restoration remains unobserved.

## Software checks from this session

Pinned Node C:/Users/Gerrit/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe reports v24.19.0. npm CLI C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js runs through that Node; pinned Node directory first in child PATH. Commands use root cwd, spawnSync argument arrays, shell:false. No installs, core rebuild or native rebuild. Android export uses its own bundler; the human's Metro on 8082 was not used, stopped or restarted.

All receipt paths in the following list are relative to migration/evidence/RN04/checks-a/. Each receipt includes command, args, cwd, exitCode, startedAt and durationMs, with same-stem stdout/stderr logs.

- Node baseline/version: exit 0 — baseline-node.receipt.json, node-version.receipt.json; stdout v24.19.0.
- Baseline branch/head-tree/RN03/ancestor/status: exit 0 each — baseline-branch.receipt.json, baseline-head-tree.receipt.json, baseline-rn03.receipt.json, baseline-ancestor.receipt.json, baseline-status.receipt.json.
- Final battery branch/head-tree/ancestor: exit 0 each — branch.receipt.json, head-tree.receipt.json, ancestor.receipt.json.
- `node migration/react-native/scripts/verify-core-integration.cjs`: exit 0 — integration.receipt.json; fixture byte hashes match reference, 20 normalized sessions, 14/14 compiled core files match.
- `npm --prefix migration/react-native run typecheck`: exit 0 — typecheck.receipt.json.
- First full `npm --prefix migration/react-native test -- --json --outputFile <absolute checks-a/jest1.json>`: exit 0 — jest1.receipt.json.
- Second full equivalent run to jest2.json: exit 0 — jest2.receipt.json.
- `npm --prefix migration/react-native run bundle:android`: exit 0 — bundle-android.receipt.json; 1307 modules; output dist-android. Artifact paths/bytes/hashes recorded in android-artifacts.json; export is not device evidence.
- Focused state: exit 0, 30 tests — state-focused.receipt.json.
- Focused schedule: exit 0, 11 tests — schedule-focused.receipt.json.
- Initial implementation typecheck: exit 2 — implementation-typecheck.receipt.json; TS2345 rejected interpolated numeric route against generated route types. Fixed using the typed route object with sessionId params. Repeat exit 0 — implementation-typecheck-2.receipt.json; final typecheck also exit 0.
- First router test run: exit 1, 5 failed / 10 passed — router-focused.receipt.json. Failures: progress container lacked accessible=true for role query; testRouter.back('/') checked pathname-with-query while cold back retained sessionId. Added accessible=true and changed back assertions to actual pathname plus schedule UI. Repeat exit 0, 15 passed — router-focused-2.receipt.json. No config changes or second failed fix.
- `git diff --check`: exit 0 — diff-check.receipt.json.
- Exact RN04 protected-path `git diff --exit-code -- ...` list: exit 0 — protected-diff.receipt.json (full argument list in receipt).
- `git diff --cached --exit-code`: exit 0 — cached-diff.receipt.json; nothing staged.
- `git status --porcelain=v1 --untracked-files=all`: exit 0 — final-status.receipt.json; full output retained.
- Shell-free live branch/HEAD/tree/allowlist/index/IDEA/evidence-LF audit: exit 0 — scope-audit.receipt.json, details scope-audit.json. No out-of-allowlist changes, no staged entries; IDEA hash unchanged; LF evidence. idea-final.json records the hash comparison.
- These checks ran after the checkpoint was first written. After this results-only update, the same five checks run once more with `-final` receipt names; their actual exit codes are captured in result.json/check-index.json rather than claimed in advance here.

Both full JSON files were parsed, not inferred from summary text: each has 4 passed suites, 60 passed tests, 0 failed. Per suite in both runs: conference-state 30; schedule-screen 11; session-detail-screen 15; shell-screen 4. RN03 was 36 (24/8/4); increase is 24 = six state + three list + fifteen new detail/router tests. Original 36 remain passing. Actual parsed details: test-counts.json. Receipt index: check-index.json.

Warnings retained: required Expo initialRouteName deprecation in router runs; export's NO_COLOR/FORCE_COLOR warnings. Neither caused a failed final software command. Earlier failed checks remain in evidence and are not relabeled as passes.

## Unverified and exact phase B remainder

ALL Android/native behavior and pixels are unverified in phase A. No device/emulator/ADB interaction, screenshots, native observation, Metro management, review dispatch, staging, commit or push occurred. No migration/handoffs/RN04.md or migration/submissions/RN04-*.json was written. No RN05 work.

A separately assigned phase B must:

1. Recheck live branch/HEAD/full scope, IDEA.md hash and ownership of emulator/Metro; reuse the installed development client and discover the live ADB serial, without disrupting another owner's processes.
2. Acquire fresh screenshots and observations for row → detail; detail add/remove; back with search/mode retained (and observe scroll retention); list first add; already-favorite Cancel and Remove; favorites-mode Cancel and Remove; unknown ID.
3. Attempt the exact RN04 cold deep link `adb shell am start -a android.intent.action.VIEW -d "conference-migration-rn://session/3" dev.translationtest.rn`; if development-client routing fails, explicitly label native cold entry unverified/automated-only. Obtain vision-capable coordinator pixel inspection. Hardware back, keyboard, large text and full acceptance remain RN07.
4. Reconcile phase A software evidence with current files and any separately authorized changes; create the final RN04 handoff and revision-1 submission manifest, compute/check manifest hashes to zero problems, and follow the package's separately authorized reviewer-routing/submission gate. RN05 still requires separate human assignment; do not commit/stage/push without authorization.

This checkpoint is not the phase B handoff or a review submission. Final machine-readable disposition belongs at tools/qwen-supervisor/.runs/sol-rn04-r1-implement-20261025/result.json.
