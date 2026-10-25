# RN03 checkpoint — 2026-10-21 (updated at human stop instruction)

Status: RN03-r1 review = CHANGES_REQUIRED (migration/reviews/RN03-r1.md). r2 fix
cycle IN PROGRESS, then STOPPED per human directive:

  "Stop edits. Save a concise RN03 checkpoint with the actual test output,
   changed files, and the suspected missing cases. Distinguish confirmed
   omissions from count-based suspicion. Preserve current files; do not submit
   review or alter emulator/Metro. Stop."

Current instruction: HOLD. No submission, no further gates, no RN04, no
commits (nothing may be committed without explicit human instruction).
Emulator (emulator-5554) and Metro (port 8082) left RUNNING and untouched.

## 0. Stop-time environment status (verified 22:57, read-only)

- Emulator `emulator-5554` (API 36): alive; app `dev.translationtest.rn` in
  foreground (All sessions tab, final screenshot RN03-08).
- Metro 127.0.0.1:8082: HTTP 200; `adb reverse --list`: 8082 -> 8081 intact.
- Assistant's last native action: 22:37 (screenshot RN03-08). After that only
  read-only checks and two Jest runs.
- PENDING background jobs (do NOT cite results until exits surface):
  - Android bundle re-run: `proc_1af9b046f991` / pid 5460 — REPORTED:
    invocation FAILED, `BUNDLE_EXIT=1`. Cause: command ran
    `node.exe "C:/Program Files/nodejs/npm.cmd" --prefix ... run
    bundle:android` — node.exe parsed the batch file as JS and died
    ("SyntaxError: Unexpected token ':'", line 1). The expo bundle was
    NEVER LAUNCHED in that job; it is an invocation error, not a bundle
    failure. No new dist-android artifacts; the on-disk bundle remains the
    21:33 one. Correct resume invocation: run npm the normal way
    (`npm --prefix migration/react-native run bundle:android` via the
    system node / cmd shim, NOT node.exe against npm.cmd).
  - Pixel inspection: `deleg_818eaf81` / `sa-0-f27a3219` — REPORTED
    (gpt-6.1-sol): 4 of 8 PASS (2, 4, 7, 8); 4 FAIL (1, 3 = viewport
    cropping only, not app defects; 5, 6 = invalid evidence, see §2
    MAJOR-2). Saved verbatim:
    migration/evidence/RN03/RN03-pixel-inspection-r2.md

## 1. The "31 tests / 5 missing cases" question — RESOLVED: not an omission

- A compacted transcript carried a claim of "Tests: 31 passed, 31 total" and a
  suspected 5-test gap. That figure is NOT reproducible: no saved log contains
  it, and fresh authoritative full runs on the current final files contradict
  it. The pre-compaction version of this checkpoint (backup
  scratch/RN03-checkpoint.md.bak-2258) already recorded the suite as
  24/8/4 = 36 with a targeted PASS.
- Fresh full Jest runs (this window, final file state), both EXIT 0, exact
  output:
      Test Suites: 3 passed, 3 total
      Tests:       36 passed, 36 total
      Snapshots:   0 total
      Time:        5.225 s (pass 1) / 1.393 s (pass 2)
    saved: scratch/jsr-r2-verbose.log, scratch/jsr-r2-final2.log
- Per-suite test counts (current file structure — all present, all passing):
    - conference-state.test.ts: 24 (13 named tests + 11 generated, one per
      frozen case of the 11-case expected-cases.json fixture; the fixture-list
      test asserts the 11 ids and passes)
    - schedule-screen.test.tsx: 8 (6 provider lifecycle + search + mode switch)
    - shell-screen.test.tsx: 4
    - Total: 36
- Classification per the human directive:
    - CONFIRMED: 36 tests exist and pass; NO test case is missing from the
      current suite; the r1-failing search test is present ('search filters
      live, shows the generic empty message, and restores on clear',
      schedule-screen.test.tsx:278) and passes.
    - REFUTED (was a count-based suspicion from a garbled transcript line):
      "5 tests missing / suite dropped to 31". No deletion happened; the
      current files contain every expected case.
- Residual documentation inconsistency (no code impact): r1 handoff
  migration/handoffs/RN03.md and the r1 manifest list the split as 25/7/4;
  the reviewer expects 24/8/4; both sum to the confirmed r1 total of 36.
  The CURRENT suite is structurally 24/8/4. The r1 per-suite split is
  unrecoverable (r1 file versions were overwritten in place, no in-repo
  backup). The r2 manifest must take per-suite counts from actual command
  output, not inherit the r1 handoff's split.

## 2. r1 findings — remediation status at stop

- MAJOR-1 (observations file disagrees with core output: 5 matches, wrong
  times): UNRESOLVED — migration/evidence/RN03/RN03-native-observations.txt
  (3,412 B, 21:42) still contains the r1 data; rewrite was in progress and is
  ON HOLD by the stop directive. Fresh r2 screenshots exist on disk:
    RN03-01-initial-schedule.png     151,977 B   22:32
    RN03-02-search-ionic-top.png     155,371 B   22:32
    RN03-03-search-ionic-scrolled.png 160,398 B  22:33
    RN03-04-search-ionic-bottom.png  163,275 B   22:34
    RN03-05-ionic-cleared-restored.png 169,357 B 22:35
    RN03-06-search-no-match.png      173,939 B   22:35
    RN03-07-favorites-empty.png       67,885 B   22:37
    RN03-08-all-sessions-restored.png 151,977 B  22:37
  (RN03-08 is byte-size-identical to RN03-01, consistent with full restore;
  pixel confirmation awaits the vision subagent. 5 stale r1 PNGs were removed
  during capture.)
- MAJOR-2 (pixel inspection missing): VERDICT IN — saved verbatim at
  migration/evidence/RN03/RN03-pixel-inspection-r2.md (deleg_818eaf81,
  gpt-6.1-sol, 47.4 s). Result: PASS 2, 4, 7, 8 (correct tab states, times,
  room/trail text); FAIL 1, 3 only because expected strings sit at
  viewport/scroll edges (reviewer: not an app layout defect). CRITICAL —
  image 5 (restored state) is obscured by the emulator's "Try out your
  stylus" tutorial overlay, and image 6 (no-match state) is INVALID: the
  "ioniczzz" text landed in the stylus tutorial's own input field, the app
  search still showed its placeholder, a live row remained visible, and the
  expected "No sessions match your search or filters." never appeared in the
  app. So: NO app defect confirmed by the reviewer; the 05/06 EVIDENCE is
  unsound and those two states must be re-captured (RN03-01/03 re-shots
  optional) before the observations file can cite them. New pitfall recorded
  in the file: dismiss/verify the stylus tutorial before any native
  typing, and confirm the focused input holds the text pre-screenshot.
  Re-capture is BLOCKED meanwhile by the standing "do not alter emulator"
  directive.
- MODERATE-1 (search test too weak / virtualization broke getByTestId):
  RESOLVED — final search test is virtualization-aware (visible session set
  is a subset of the 15 expected matches, generic empty message on no-match,
  full restore on clear; queryAllByTestId instead of find*, since find*
  throws on empty results). Targeted PASS earlier this window; included in
  both green full runs above.
- MINOR-1 (suite counts wrong in r1 handoff/manifest): RESOLVED in fact —
  actual = 36, current structure 24/8/4 (see §1). r2 manifest update still
  pending (suspended).

## 3. Gate battery at stop (pinned Node v24.19.0:
C:/Users/Gerrit/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe)

| # | Gate | Status | Basis |
|---|---|---|---|
| 1 | `verify-core-integration.cjs` (CORRECT path migration/react-native/scripts/, run from repo root — the migration/tools path does not exist) | PASS, exit 0, "RESULT: all checks passed" | this window |
| 2 | `tsc --noEmit` (npm run typecheck) | PASS, exit 0 | this window (after final rewrite) |
| 3 | Targeted Jest — search test | PASS, exit 0 | this window ("1 passed, 35 skipped, 36 total") |
| 4 | Full Jest pass 1 (terminating) | PASS, exit 0 — 36/36 | jsr-r2-verbose.log |
| 5 | Full Jest pass 2 (terminating) | PASS, exit 0 — 36/36 | jsr-r2-final2.log |
| 6 | Android export (`expo export --platform android`, RN03.md gate) | NOT PASSED — re-run job reported BUNDLE_EXIT=1 (npm.cmd executed under node.exe; bundle never launched); only artifact is the 21:33 bundle | §0 |
| 7 | Native behavior (8 screenshots incl. IOnic clear/return, favorites-empty, no-match) | CAPTURED 22:32–22:37 | §2 |
| 8 | Observations text rebuild | ON HOLD (still r1 content) | §2 MAJOR-1 |
| 9 | Pixel inspection | VERDICT IN — 4/8 pass; no app defect; 05+06 evidence invalid (stylus tutorial) → re-capture needed | §2 MAJOR-2 |
| 10 | git checks (diff --check, allowlist diff), IDEA.md hash recheck, manifest-hashes.mjs --write + verify | NOT RUN (r2) | suspended |

Earlier in this window (before the final rewrite): full suite "Tests: 1
failed, 35 passed, 36 total" — failure root cause confirmed: the RN 0.88
jest host mounts only the virtualized viewport (observed window: "9:15 am"
[4,2,3] and "10:00 am" [5,7,8] only). zz-probe diagnostics established that
`view.root` = `{ instance: <hostTreeNode> }` with no findAll/findByType and
no composite SectionList — component-props assertions are impossible here;
DOM-level (text/testID/label) or context-level assertions only. Do NOT
retry view.root.findAll.

## 4. Changed files (vs approved RN02 baseline f78a759741b57ed1a19c7b6630af67640571ff61, branch migration/slice-1)

Tracked, modified (r2):
- migration/react-native/src/app/_layout.tsx (ConferenceProvider wraps app;
  git diff: 8 insertions / 4 deletions)
- migration/react-native/src/app/index.tsx (re-export → schedule-screen;
  1 insertion / 1 deletion)

Untracked (RN03 r1+r2 work, all preserved as-is):
- migration/react-native/src/state/ (conference state + reducer +
  schedule-groups module)
- migration/react-native/src/screens/schedule-screen.tsx (SectionList
  schedule screen: day groups, live search, favorites/all, retry/error,
  accessibility — role "header" (NOT "heading", rejected by RN 0.88 bridge),
  "alert" on empty state)
- migration/react-native/__tests__/conference-state.test.ts (24 tests)
- migration/react-native/__tests__/schedule-screen.test.tsx (8 tests; final
  search-test rewrite applied 22:24)
- migration/react-native/__tests__/shell-screen.test.tsx (4 tests; restored
  in r1 cycle per work package §5)
- migration/evidence/RN03/ (8 fresh r2 PNGs listed in §2 + still-r1
  observations txt)
- migration/handoffs/RN03.md (r1 handoff — counts known-stale, see §1), this
  checkpoint
- migration/reviews/RN03-r1.md (verdict CHANGES_REQUIRED, 17 lines, verbatim)
- migration/submissions/RN03-r1.json (r1 manifest, 36 sha256 entries)
- migration/work-packages/RN03.md (human-authored spec)
- migration/plans/rn07-android-acceptance-checklist.md (pre-existing,
  untouched)
- IDEA.md (pre-existing, untracked, NOT part of RN03 — preserved)
- migration/react-native/dist-android/ (3.8 MiB HBC bundle, 21:33)

## 5. Ground truth (computed from core each time — never hardcoded)

- Core: migration/core/dist/index.js (CJS), `normalizeConference`; sessions
  carry `id`, `name`, `timeStart`, `timeEnd`, `tracks[]` (NO title/start/end).
  `parseConferenceRaw` does not exist.
- Fixture: 20 sessions / 8 day groups (8:00, 9:15, 10:00, 11:00, 12:00,
  1:00, 2:00, 3:00). First session: Breakfast 8:00 am.
- Case-insensitive name search: "IOnic" → 15 matches in 6 groups
  (9:15 am:[4,2,3] 10:00 am:[5,7,8] 11:00 am:[9,11] 1:00 pm:[13,14,15]
  2:00 pm:[16,17,18] 3:00 pm:[19]); "ionic" identical; "ioniczzz" / any
  no-match string → 0. 5 non-matching sessions remain hidden.
- Correct times: "University of Ionic" = 9:15 am (NOT 12:15 pm);
  "Ionic Tooling" = 9:45 am (NOT 2:30 pm).
- Verify with scratch/truth-r2.cjs + truth-r2.json (scratch dir under the
  profile cache).

## 6. Resume procedure (only on explicit human go-ahead)

1. Collect the two pending results (bundle export exit; pixel verdict), save
   them under migration/evidence/RN03/.
2. Rebuild RN03-native-observations.txt from the actual capture transcript:
   15 matches on both tabs, correct timestamps (§5), favorites-empty,
   screenshot inventory — BUT the restored-state (RN03-05) and no-match
   (RN03-06) evidence is currently invalid (stylus tutorial, §2 MAJOR-2):
   re-capture those states FIRST (dismiss the "Try out your stylus" tutorial;
   confirm the app search field visibly holds the text before shooting), or
   cite them as re-capture-pending rather than as observed fact.
3. Confirm the Android export job's exit; run a fresh terminating export if
   it failed or is stale; record exact exit + dist-android listing.
4. git checks (diff --check, allowlist diff); IDEA.md sha256 recheck (still
   56b5dc0ebd13907b3214f0325c11380e03d463c29284f3213054de7f0a097d9d at r1,
   hash-only protected: never read/edit/stage/commit).
5. manifest-hashes.mjs (migration/tools/) --write + verify for r2; per-suite
   24/8/4 from real output.
6. Submit r2 per standing instruction (reviewer: openai-codex / gpt-6.1-sol /
   high / no fallback; r1 dispatch was deleg_0f93af36 / sa-0-bb3b6df8) and
   await the verdict. STOP on APPROVE or BLOCKED.
   — Currently SUSPENDED by the stop directive.

## 7. Standing constraints (unchanged)

- Do not commit, push, or publish. Do not start RN04.
- Do not stop or alter the human's emulator (emulator-5554) or Metro (8082);
  coordinate, don't take over.
- IDEA.md: protected (see §6.4).
- Do not claim any verification passed without seeing its actual output —
  lesson of this window: no count or pass may be recorded from transcript
  memory; run the command and quote the output (the "31 tests" episode was
  exactly that failure mode, and it is refuted by fresh runs).
- Stop for focused reviewer support after two unsuccessful fixes for the
  same cause. Checkpoint before repeated compaction (this file).
