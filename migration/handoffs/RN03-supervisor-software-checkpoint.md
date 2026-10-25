# RN03 revision 2 — supervisor software-verification checkpoint (summarize-and-hold)

Created: 2026-10-21, phase `summarize-and-hold` of run
`tools/qwen-supervisor/.runs/2026-10-21T21-07-40-271Z-c611cd40/` (supervisor
isolated; not a submission, not a review dispatch).

Scope: record the verified software state at the stop point and the remaining
native evidence. No product code, manifest, review or work-package status
changes made in this phase. No claim of native capture, pixel inspection,
manifest freeze or reviewer approval is made here.

## 1. Baseline and source preservation (verified this session, read-only)

- Branch: `migration/slice-1`; HEAD: `f78a759741b57ed1a19c7b6630af67640571ff61`
  (approved RN02 commit; `git rev-parse HEAD` this session; matches the
  01-phase baseline receipt "expected ancestor confirmed").
- Source preservation: unchanged from the previous validated handoff.
  `git status` this session shows exactly:
  - Tracked modified (2): `migration/react-native/src/app/_layout.tsx`,
    `migration/react-native/src/app/index.tsx`
  - Untracked carry-over: `IDEA.md` (protected, hash-only, untouched),
    `migration/evidence/RN03/`, `migration/handoffs/RN03.md` (r1) +
    `RN03-checkpoint.md`, `migration/plans/rn07-android-acceptance-checklist.md`,
    `migration/react-native/__tests__/conference-state.test.ts`,
    `migration/react-native/__tests__/schedule-screen.test.tsx`,
    `migration/react-native/src/screens/schedule-screen.tsx`,
    `migration/react-native/src/state/`, `migration/reviews/RN03-r1.md`,
    `migration/submissions/RN03-r1.json`, `migration/work-packages/RN03.md`,
    `tools/`
- Prior submissions (RN03-r1 manifest), earlier reviews, and RN02 records
  untouched. No commit, no stage, no push.

## 2. Machine gates — ACTUAL, from 01-verify-software receipts/logs (all exit 0)

Invocation (all 10 receipts): pinned Node v24.19.0 at
`C:/Users/Gerrit/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe`
executing `C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js` with the
pinned Node dir prepended to child `PATH`; `npm.cmd` was never executed under
Node. Repo-root cwd.

| Gate | Result (verbatim from logs) | Exit |
|---|---|---|
| pinned-runtime-and-baseline | `v24.19.0; HEAD f78a759741b57ed1a19c7b6630af67640571ff61; expected ancestor confirmed` | 0 |
| core-integration (`verify-core-integration.cjs`) | `RESULT: all checks passed` — fixture SHA matches reference (da6cdc…ed7fb75), 20 === 20 normalized sessions, 14/14 dist files byte-identical to sibling core, first session Breakfast 8:00 am | 0 |
| typecheck (`tsc --noEmit`) | clean run, no diagnostics | 0 |
| Jest pass 1 | `Test Suites: 3 passed, 3 total / Tests: 36 passed, 36 total / Snapshots: 0 total / Time: 8.599 s` (stderr log) | 0 |
| Jest pass 2 | `Test Suites: 3 passed, 3 total / Tests: 36 passed, 36 total / Time: 1.347 s` (stderr log) | 0 |
| android-export (`expo export --platform android --output-dir dist-android`) | `Android Bundled 4954ms … (1305 modules)`, Assets (27), `entry-1c2fb05c5c4216cc1ec07e9437066ba3.hbc (2.9MB)`, `metadata.json (1.9KB)`, `Exported: dist-android` | 0 |
| export-inventory (dist-android listing + per-file sha256) | 36 files: metadata.json 1,877 B; 34 assets; HBC bundle 2,872,597 B | 0 |
| whitespace (`git diff --check`) | clean | 0 |
| protected-baselines (allowlist `git diff --exit-code`) | clean | 0 |
| index-clean (`git diff --cached --exit-code`) | clean | 0 |

Counts: the machine logs attest the 36/36 total across 3 suites; the per-suite
split (current structure 24/8/4 per RN03-checkpoint §1 and the r1 reviewer's
JSON run) is NOT in these logs — the upcoming r2 manifest must take per-suite
counts from a fresh JSON-report run, per the r1 finding MINOR-1.

Android export output inventory (recorded sha256, from
`01-verify-software/export-inventory.stdout.log`):
- `migration/react-native/dist-android/metadata.json` — 1,877 B, sha256 `15b3a27b8bf0450a60ec723d345390403121853400e977ff7aef2d12f506a0cc`
- 34 hashed asset files (fonts/icons), e.g. 970,844 B font `8b042be199…`
- `migration/react-native/dist-android/_expo/static/js/android/entry-1c2fb05c5c4216cc1ec07e9437066ba3.hbc` — 2,872,597 B, sha256 `f3950e7ccfc85e4f92198d9dd43c2468579c9bff8ea3159305c52946837f2229`

Evidence paths (run directory):
- `tools/qwen-supervisor/.runs/2026-10-21T21-07-40-271Z-c611cd40/01-verify-software/*.receipt.json`
- `01-verify-software/core-integration.stdout.log`, `jest-pass-{1,2}.stderr.log`,
  `android-export.stdout.log`, `export-inventory.stdout.log`,
  `pinned-runtime-and-baseline.stdout.log`, `typecheck.stdout.log`
- Pre-existing r2 evidence: `migration/evidence/RN03/RN03-pixel-inspection-r2.md`,
  `migration/evidence/RN03/RN03-native-observations.txt` (still r1 content),
  `migration/handoffs/RN03-checkpoint.md`, `migration/reviews/RN03-r1.md`

## 3. Unresolved native / pixel / observations / packet steps

1. **Observations (MAJOR-1, still open):** `migration/evidence/RN03/RN03-native-observations.txt`
   still holds r1 data (5 matches, wrong times; actual core result is 15
   matches for `IOnic`, University of Ionic 9:15 am, Ionic Tooling 9:45 am).
   Rebuild blocked: two of the cited screenshots (below) are invalid, so the
   file cannot yet cite them as observed fact.
2. **Native re-capture (MAJOR-2):** RN03-05 (restored state) and RN03-06
   (no-match) are INVALID evidence — the "Try out your stylus" tutorial
   obscured/hijacked those states (r1 reviewer: no app defect found, evidence
   unsound). Existing captures 05/06 remain invalid. RN03-01/RN03-03 had
   edge-cropping limitations (viewport/scroll edges), NOT established layout
   defects. Re-capture requires dismissing the stylus tutorial and confirming
   the focused app input visibly holds the text before shooting — which is
   HOLD.
3. **Pixel inspection (r2):** verdict on hand (RN03-pixel-inspection-r2.md):
   PASS 2, 4, 7, 8; FAIL 1, 3 (edge cropping only); 5, 6 invalid evidence.
   A further inspection run is required after valid re-captures exist.
4. **r2 packet:** r1 handoff `migration/handoffs/RN03.md` counts remain
   stale (MINOR-1); no r2 manifest exists yet. Freeze requires: per-suite
   counts from a fresh JSON run, `node migration/tools/manifest-hashes.mjs
   migration/submissions/RN03-r2.json --write` then verify with `0
   problem(s)`, handoff finished before freeze.
5. **HOLD preserved:** emulator-5554 and Metro 8082 untouched (no dismiss,
   typing, tap, capture, restart, stop). This phase made no native actions.

## 4. Resume path (only under an explicit resumed assignment)

1. Dismiss the stylus tutorial on emulator-5554; verify the app search field
   visibly holds typed text pre-screenshot.
2. Re-capture RN03-05 (ionic cleared/restored) and RN03-06 (no-match),
   optionally re-shoot RN03-01/RN03-03 to clear edge-crop ambiguity.
3. Run fresh pixel inspection (Sol/high, vision) over the new captures.
4. Rebuild `RN03-native-observations.txt` from the actual capture transcript
   (15 matches, correct times per checkpoint §5 ground truth).
5. Run a Jest JSON-report pass for per-suite counts (expected 24/8/4 from
   actual output, not inherited).
6. Write r2 handoff + `migration/submissions/RN03-r2.json` (empty sha256
   fields), then `manifest-hashes.mjs --write` + verify `0 problem(s)`.
7. Submit RN03-r2 under the existing openai-codex / gpt-6.1-sol / high
   dispatcher (no fallback); await verdict; stop on verdict. STOP on
   APPROVE or BLOCKED. No RN04, no commit, no push, no publication.

Status: **blocked on native evidence** — software gates green, native
evidence incomplete by design under the standing HOLD.
