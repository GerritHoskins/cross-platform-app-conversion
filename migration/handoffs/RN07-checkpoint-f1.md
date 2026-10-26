RN07 F1 — CHECKPOINTED (candidate 1 -> candidate 2)
Executor: Hermes GPT-6.1 Sol high, human-selected. Phase F only; STOP after this checkpoint.
P = migration/evidence/RN07/f-fixes1
R = tools/qwen-supervisor/.runs/sol-rn07-r1-fix1-20261025

Candidate and preservation
  Branch migration/slice-1; HEAD 6e4bf9682285391ab00dca3b0a7dc2b01b61832a. git diff --name-only f5a1d83 HEAD lists exactly .gitignore. Index empty.
  Candidate 1 was hashed before any product/test edit: P/candidate1.json, 34 tracked src/__tests__/test-utils files. Candidate 2 uses the identical tracked set plus the new root-layout test in additionalFiles: P/candidate2.json.
  Candidate-manifest SHA-256: candidate1 2235398af08044a3de1afb6daccc16c429f61da49577d4ed31ea516cf9477429; candidate2 7113800d5635ee51a7ef64abe3c1bfa5114630603d2654dee31b8bf2bef3e38f.
  All 36 a-gates3 preservation paths checked before editing. Only RN07.md differs from that baseline; removing exactly D5/D6/D7 reproduces its baseline hash. New RN07.md SHA-256 d943c6d356b6a25a7aabf1875a1355cddfb28f623a3f8079e76a94f895d76f6b. This session did not write it.
  All 11,319 pre-existing evidence/checkpoint/coordinator-document paths in P/history-entry.json match at final verification. README.md and coordinator pixel report untouched; IDEA.md contents never read. P/preservation-entry.json, preservation-final.json, scope-entry.json, scope-final.json, scope-checkpoint.json. Porcelain parsed raw/untrimmed, paths from index 3.

Exactly four applied fixes
  S = migration/react-native/src/screens/schedule-screen.tsx
  T = migration/react-native/__tests__/schedule-screen.test.tsx
  L = migration/react-native/src/app/_layout.tsx
  U = migration/react-native/__tests__/root-layout.test.tsx (new)
  F-1 — G02 row/favorite first tap with keyboard open. Files S/T. Set SectionList keyboardShouldPersistTaps="handled"; no handler changes.
    Test: ScheduleScreen RN07 regressions F-1 keeps handled row and favorite taps available with the keyboard open
  F-2 — E06.apply-after-bottom-scroll. Files S/T. Typed list ref; existing search/mode/tracks effect calls scrollToLocation at section 0/item 0 without animation. Empty results unmount the list, safely guarded by optional ref access. Favorites do not scroll; nonempty changes do not remount.
    Test: ScheduleScreen RN07 regressions F-2 scrolls to top for tracks, search and mode, not favorites, without remounting a nonempty list
  F-3 — G05 font scale 2.0 search text clipping. Files S/T. Replace height 42 with minHeight 42 and paddingVertical 8; preserve default minimum while allowing growth.
    Test: ScheduleScreen RN07 regressions F-3 lets the search field grow with font scale instead of fixing its height
  F-4 — G07 dark native header/status bar. Files L/U. Root useColorScheme drives Stack header/content colors consistent with schedule palettes; installed expo-status-bar StatusBar uses style="auto". Test also checks light-scheme rerender.
    Test: F-4 follows dark and light schemes for native headers, content and the automatic status bar
  Failing-case evidence paths, rationale, complete per-file unified git diffs and test names: P/fixes.json. Full product/test diff including untracked new test: P/fixes.diff. Shared schedule/test diffs include F-1/F-2/F-3 together.

Tests and software results
  All four focused tests failed against candidate 1 (P/focused-red2.json) and passed after fixes (P/focused-green.json). First focused invocation failed before running tests because npm --prefix changed cwd; corrected with absolute paths in a new attempt. P/focused-red.json and its logs retained; not credited as red proof. focused-red2-check.json's expectedFailure flag is false due to its suffixed identifier; the four assertion failures are intentional red controls, not a failing software gate.
  Full Jest twice: 7 suites / 99 tests passed each, zero failed/pending. Programmatic comparison proves all previous 95 test names still pass. Per-suite counts in both runs: conference-state 35; schedule-swipe 17; session-detail 15; schedule-screen 15 (was 12); filter 12; shell 4; root-layout 1 (new). P/jest1-summary.json and jest2-summary.json list each new test.
  Core: 53/53 tests passed; no tracked core change. Integration before/after rebuilding core passes: consumed public entry is compiled migration/core/dist/index.js, sibling link disclosed, fixture hashes match, normalized count 20.
  Typecheck passed. Android export passed; same-run inventory immediately followed export: P/android-artifacts.json, 29 files including entry-70dbf735a09df83f4fb7f2ab58b390f5.hbc (4,116,491 bytes; SHA-256 9ae3fa9d4b9501bb52b5c4e677a5ceaf8267812ef4bc345792d0dd2b0680da65), paired to P/bundle-android.receipt.json.
  Pinned Node v24.19.0 and requested npm CLI used sequentially. No dependency/lockfile/native/Babel/Metro/Jest/tsconfig/app.json changes. No device/emulator or existing development-Metro interaction; only the authorized offline export (its own transient bundler output is retained).

Every recorded command/check: exit code; receipt path
  node-version: 0; P/node-version.receipt.json
  entry-branch: 0; P/entry-branch.receipt.json
  entry-head: 0; P/entry-head.receipt.json
  entry-base-diff: 0; P/entry-base-diff.receipt.json
  entry-index: 0; P/entry-index.receipt.json
  entry-status: 0; P/entry-status.receipt.json
  entry-gate: 0; P/entry-gate.receipt.json
  candidate1-tracked-files: 0; P/candidate1-tracked-files.receipt.json
  focused-red: 1; P/focused-red.receipt.json (setup error, corrected)
  focused-red2: 1; P/focused-red2.receipt.json (expected four failing regression assertions)
  focused-green: 0; P/focused-green.receipt.json
  core-integration-before: 0; P/core-integration-before.receipt.json
  core-tests: 0; P/core-tests.receipt.json
  core-tracked-clean: 0; P/core-tracked-clean.receipt.json
  typecheck: 0; P/typecheck.receipt.json
  jest1: 0; P/jest1.receipt.json
  jest1-inspect: 0; P/jest1-inspect.receipt.json
  jest2: 0; P/jest2.receipt.json
  jest2-inspect: 0; P/jest2-inspect.receipt.json
  core-integration: 0; P/core-integration.receipt.json
  bundle-android: 0; P/bundle-android.receipt.json
  android-inventory: 0; P/android-inventory.receipt.json
  diff-check: 0; P/diff-check.receipt.json
  protected-diff: 0; P/protected-diff.receipt.json
  index-empty: 0; P/index-empty.receipt.json
  software-gates-phase: 0; P/software-gates-phase.receipt.json
  candidate2-tracked-files: 0; P/candidate2-tracked-files.receipt.json
  diff-schedule-screen-tsx: 0; P/diff-schedule-screen-tsx.receipt.json
  diff-_layout-tsx: 0; P/diff-_layout-tsx.receipt.json
  diff-schedule-screen-test-tsx: 0; P/diff-schedule-screen-test-tsx.receipt.json
  diff-root-layout-test-tsx: 1; P/diff-root-layout-test-tsx.receipt.json (expected git diff --no-index difference)
  final-branch: 0; P/final-branch.receipt.json
  final-head: 0; P/final-head.receipt.json
  final-base-diff: 0; P/final-base-diff.receipt.json
  final-status: 0; P/final-status.receipt.json
  final-scope: 0; P/final-scope.receipt.json
  final-preservation: 0; P/final-preservation.receipt.json
  bootstrap-discovery: 0; P/bootstrap-discovery.receipt.json (initial discovery timing unavailable/null; timed gates repeated)
  record-candidate2-phase: 0; P/record-candidate2-phase.receipt.json
  checkpoint-diff-check: 0; P/checkpoint-diff-check.receipt.json
  checkpoint-protected-diff: 0; P/checkpoint-protected-diff.receipt.json
  checkpoint-index-empty: 0; P/checkpoint-index-empty.receipt.json
  checkpoint-status: 0; P/checkpoint-status.receipt.json
  checkpoint-preparation: 0; P/checkpoint-preparation.receipt.json
  Post-write validation/close receipts are appended to P/commands.jsonl and R/result.json; P/checkpoint-verification.json records this checkpoint's hash. Logs are adjacent .stdout.log/.stderr.log; command lines and required receipt fields are in P/commands.jsonl. Authored text LF; command-log CRLF normalized to LF, disclosed in P/log-format.json.

Warnings verbatim (export emitted the first pair twice; README warning repeated by diff --check)
  | (node:45592) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
  | (Use `node --trace-warnings ...` to show where the warning was created)
  | (node:45592) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
  | (Use `node --trace-warnings ...` to show where the warning was created)
  warning: in the working copy of 'README.md', LF will be replaced by CRLF the next time Git touches it
  Sources: P/bundle-android.stdout.log, P/diff-check.stderr.log, P/checkpoint-diff-check.stderr.log; P/warnings-verbatim.md. No warning was fixed by widening scope.

G2 requirements and STOP
  Candidate 2 is software-verified, NOT device-accepted. Rerun G02 row/favorite first taps with a real on-screen keyboard under D6; E06 apply a filter from the bottom; G05 font 2.0 search readability/growth plus default-scale appearance; G07 dark native header/status bar and live light/dark switching. Regression pass: F01–F05 swipe and C02/C06 favorites. F02 diagonal-left remains D5's known gesture-ambiguity limitation, not silently promoted to PASS.
  G01 keyboard/Back and G03/G04 TalkBack remain G2 work with authorized record/change/test/restore. D03/D04 remain BLOCKED by D3's development-client limitation. D7 modal-background draft retention is approved, no fix.
  No final handoff/submission, delegation/review dispatch, staging/commit/push. Earlier runs immutable. STOP at F1; result is R/result.json.
