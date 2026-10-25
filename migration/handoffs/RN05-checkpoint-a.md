RN05 revision 1 — phase A checkpoint

Executor: Hermes, GPT-6.1 Sol high, translation-migration profile. Human-assigned 2026-10-25. Not submitted; no review dispatched.

Baseline
  Repository: C:/Users/Gerrit/job-search/POCs/cross-platform-translation-test-app-main
  Branch: migration/slice-1
  HEAD: 3970e40a9debb3897e1bcd84cff431ac96e95cfc
  Tree: ecf8f2763366d7c780b6ea5a3c9ebebef8ba9b36
  RN04 commit from git log --format=%h -1 -- migration/reviews/RN04-r2.md: 3970e40; ancestry command exit 0. Index empty; tracked baseline unchanged.
  Protected IDEA.md SHA-256 (hash only): 56b5dc0ebd13907b3214f0325c11380e03d463c29284f3213054de7f0a097d9d
  Pre-existing untracked paths: IDEA.md, tools/, migration/plans/rn07-android-acceptance-checklist.md, migration/work-packages/RN05.md. Preserved. Initial direct Git gate preceded any writes; baseline.json additionally enumerates this session's newly created receipts/helpers.

Changed product files (relative to migration/react-native/)
  src/state/conference-state.tsx — additive TrackOption/selectTrackOptions using the public compiled core; all RN04 actions/exports retained.
  __tests__/conference-state.test.ts — five selector tests, real loader/core, sorted options, applied selections, freshness and fixture track-set equivalence.
  src/screens/filter-screen.tsx — accessible primitive checkbox rows, once-per-mount local draft, loading/error/retry, draft-only bulk controls and Done.
  src/app/filter.tsx — approved one-line screen re-export.
  src/app/_layout.tsx — only the approved modal Stack.Screen registration after existing screens.
  src/screens/schedule-screen.tsx — only the labeled, readiness-gated Filter button pushing /filter.
  __tests__/schedule-screen.test.tsx — one Filter control test covering readiness, disabled press and navigation.
  __tests__/filter-screen.test.tsx — twelve real-route tests covering draft isolation, apply/close/reopen, frozen groups/IDs, search/favorites retention, loader counts and cold loading/retry.
Other writes
  migration/work-packages/RN05.md — status line only, phase A complete and not submitted.
  migration/evidence/RN05/checks-a/ — receipts, LF stdout/stderr, both Jest JSON outputs, actual counts, paired Android artifact inventory and preservation/scope records.
  migration/handoffs/RN05-checkpoint-a.md — this checkpoint, not the phase C handoff.
  tools/qwen-supervisor/.runs/sol-rn05-r1-implement-20261025/ — spawnSync helpers and phase A result.json only.

Implemented decisions
  No separate Android Cancel; native stack header back/close is the approved cancel affordance for RN07 E06. Closing without Done has no dispatch; reopening creates a new draft from applied state.
  Reset and Deselect All clear only the draft; Reset neither cancels nor closes. Select All checks all draft rows. Done replaces selectedTracks in displayed sorted order, allows zero tracks, then router.back().
  No track icons; checkbox glyphs are visible state indicators, not track icons.
  No separate first-load flag: createInitialSelection selects all session tracks, and a real-loader selector test confirms the fixture's ten top-level tracks equal its ten session tracks. Thus first-load all-checked and later applied-filter mirroring use one rule. Differing future sets require a contract decision.
  Modal presentation remains the approved native-stack option. Android may show a full-screen card; unsupported backdrop/swipe dismissal is N/A in RN07 E08, not a reason to add gestures.
  Router tests use real layout/index/filter/detail routes, provider and core. SectionList assertions walk from a freshly queried rendered row's host fiber to the actual imported SectionList and compare every section key/title/ordered ID, including off-viewport rows. No provider probe, mocked SectionList or wholesale router mock.

Software execution from repository root
  Pinned Node: C:/Users/Gerrit/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe; --version returned v24.19.0.
  npm CLI: C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js, executed through pinned Node with its directory first in the child PATH. Helpers use spawnSync, full argument arrays and shell:false. Evidence text is LF.
  Receipt base below: migration/evidence/RN05/checks-a/. Each ID has <ID>.receipt.json plus <ID>.stdout.log and <ID>.stderr.log. Every receipt includes command,args,cwd,exitCode,startedAt,durationMs; exact argument arrays are authoritative.
  node-version: exit 0, node-version.receipt.json.
  baseline-branch: exit 0, baseline-branch.receipt.json.
  baseline-head: exit 0, baseline-head.receipt.json.
  baseline-tree: exit 0, baseline-tree.receipt.json.
  baseline-rn04: exit 0, baseline-rn04.receipt.json.
  baseline-ancestor: exit 0, baseline-ancestor.receipt.json.
  baseline-targets: exit 0, baseline-targets.receipt.json.
  baseline-tracked: exit 0, baseline-tracked.receipt.json.
  baseline-index: exit 0, baseline-index.receipt.json.
  baseline-status: exit 0, baseline-status.receipt.json.
  routing-model: exit 0, routing-model.receipt.json; Hermes config get delegation.model returned gpt-6.1-sol. No delegation performed.
  selector-tests: exit 0, selector-tests.receipt.json.
  implementation-typecheck: exit 2, implementation-typecheck.receipt.json. TS2345: "Argument of type 'Fiber | null' is not assignable to parameter of type 'Fiber'" at schedule observations. Fixed helper input nullability; no product/config workaround.
  implementation-typecheck-2: exit 0, implementation-typecheck-2.receipt.json.
  filter-focused: exit 1, filter-focused.receipt.json; 9 failed/15 passed. Exact observation error: "Expected length: 1 / Received length: 0 / Received array: []" at real SectionList lookup; progressbar query also failed because its View was not accessible.
  filter-focused-2: exit 1, filter-focused-2.receipt.json; 9 failed/15 passed. First observation fix used a fresh list-role host, but that host was not queryable; same exact length error remained. The accessible progressbar fix passed.
  fiber-diagnostic: exit 1, fiber-diagnostic.receipt.json; 1 failed/11 skipped. Diagnostic only, no attempted fix: listHost false, while a fresh session row's ancestry included VirtualizedSectionList and SectionList. Output preserved in stdout. Diagnostic logging removed.
  filter-focused-3: exit 0, filter-focused-3.receipt.json; second observation fix walks from that real row host to SectionList; both focused suites pass, without config changes.
  integration: exit 0, integration.receipt.json; pinned Node migration/react-native/scripts/verify-core-integration.cjs reports all checks passed, 20 normalized sessions and 14/14 compiled core files identical.
  typecheck: exit 0, typecheck.receipt.json; pinned Node/npm --prefix migration/react-native run typecheck.
  jest1: exit 0, jest1.receipt.json; full npm test -- --json --outputFile <absolute checks-a/jest1.json>.
  jest2: exit 0, jest2.receipt.json; same full run to the absolute jest2.json path, consecutive with no intervening edit.
  Both actual JSON reports: 5 suites/78 tests passed, 0 failed/pending. Per suite: state 35, schedule 12, detail 15, shell 4, filter 12. RN04 was 60 (30/11/15/4); additions are five state, one schedule and twelve filter tests, +18 total. Parsed report: checks-a/test-counts.json.
  bundle-android: exit 0, bundle-android.receipt.json; 1309 modules. Immediately inventoried that export read-only into checks-a/android-artifacts.json: 29 files with path,size,sha256, explicitly paired to this export receipt. Build evidence only; do not rebuild later and pair a new receipt with this old inventory.
  Existing initialRouteName deprecation and NO_COLOR/FORCE_COLOR warnings remain in logs; no configuration edited to suppress them.

Final checks (executed after this checkpoint was first written)
  git-diff-check: exit 0, checks-a/git-diff-check.receipt.json; git diff --check.
  protected-paths: exit 0, checks-a/protected-paths.receipt.json; git diff --exit-code -- with the exact RN05.md protected-path list, unchanged.
  cached-diff: exit 0, checks-a/cached-diff.receipt.json; git diff --cached --exit-code, index empty.
  idea-hash: exit 0, checks-a/idea-hash.receipt.json; hash-only Node helper matches the baseline IDEA.md SHA-256 above.
  final-status: exit 0, checks-a/final-status.receipt.json; git status --porcelain --untracked-files=all, raw stdout retained.
  scope-audit: exit 0, checks-a/scope-audit.receipt.json; parsed raw stdout with split("\n"), no trimming, paths from index 3. checks-a/scope-audit.json has no unexpected entries; pre-existing tools paths are distinguished from this run's new helpers.
  final-head: exit 0, checks-a/final-head.receipt.json; git rev-parse HEAD still matches baseline.
  checks-a/check-index.json enumerates every command receipt, including the fixed interim failures. checks-a/line-endings.json records zero CR bytes in the evidence present at preservation entry.
  preservation-verify: exit 0, checks-a/preservation-verify.receipt.json; pinned Node helper compares entry SHA-256/size, current export artifact SHA-256/size and evidence/checkpoint LF-only bytes. No mismatches or CR bytes; exact counts are in preservation-verify.stdout.log. check-index-final.json includes this last receipt.
  checks-a/preservation-entry.json records SHA-256/size for every changed/new implementation and then-present evidence file before final checks, plus the work-package. It excludes itself and the necessarily later final-check outputs. A final supplemental inventory binds those later outputs and this completed checkpoint for phase B/C without rewriting the entry inventory.

Unverified and exact remaining work
  All native behavior is unverified in phase A. No device/emulator interaction, Metro 8082 use, native rebuild, install, screenshot or pixel inspection was performed. No stage, commit, push, review dispatch, migration/handoffs/RN05.md or submission manifest.
  Phase B, separate session: first compare preservation hashes and baseline/scope. Establish emulator/Metro ownership and current serial without restarting another owner's service. Reuse installed development client under RN05's device-input rules. Acquire fresh screenshots plus UI XML for initial all-checked sorted modal; draft clear/reset; Ionic-only schedule (4,2,5 and not 3); reopen reflecting Ionic; changed draft closed with header back/close and schedule unchanged; zero tracks general empty state; Select All restoring all. Obtain coordinator pixel inspection. Preserve phase A receipts and paired export inventory; any later export requires a new paired inventory.
  Phase C, separate session: reconcile preserved inputs/evidence and any B observations, write final RN05 handoff and revision-1 submission manifest, run actual required hash write/check to zero problems, update status accurately, freeze, then perform the routing/review procedure only when assigned. No RN06 or commit authorization follows from this checkpoint. Hardware Back, supported/unsupported optional gestures, large text and dark mode acceptance remain RN07; iOS is outside RN05.
