# E01 — slice 1: React Native versus NativeScript

Revision 2 comparison, 2026-10-29. Report-only, at the unchanged gated NS07 commit. Revision 1 returned CHANGES_REQUIRED for an omitted nested NOT RUN observation; revision 2 rebuilds the inventory recursively and independently cross-checks every non-PASS string-status pointer (migration/evidence/E01/r2/inventory-crosscheck.json). The 50 parent-case grades, effort/size data and recommendation are unchanged. Amendment A1 and A2's zero-hit rescan remain historical evidence. Revision 2 is READY_FOR_REVIEW; its complete-packet privacy scan is migration/evidence/E01/r2/privacy-scan.json, and authoritative freeze/check receipts and final FROZEN or BLOCKED disposition are in tools/qwen-supervisor/.runs/sol-e01-r2-b-20261029/. No freeze success is claimed before those checks finish.

## 1. Scope and method

Slice 1 is the conference schedule, session-ID detail entry, in-memory favorites, track-filter draft/apply/cancel, row swipes and accessible action parity. The reference has 20 sessions, eight displayed groups and 11 frozen algorithm cases: default-all, no-tracks, single-track, search-case-insensitive, search-no-match, search-plus-track, favorites-empty, favorites-some, favorites-order, add-duplicate and remove-absent. The source fixture contains only single-track sessions; synthetic every-track tests are explicitly separate from real-device fixture coverage. Source: migration/reference/contract.md:14,23-79,105-119; migration/reference/expected-cases.json.

Both independent npm targets consume the same compiled @migration/core, bundled source fixture and getter-level contract, not the original Ionic UI's competing-watchers defect. React Native uses Expo Router, reducer/context and SectionList; NativeScript uses NativeScript-Vue, Vuex and Frame/Page with a flattened native ListView. Sources: migration/plans/qwen-work-packages.md:130-169; migration/handoffs/RN07.md; migration/handoffs/NS03.md:12-14.

Out of scope: speaker list and speaker-session entry, maps, tutorial/startup/storage, authentication, real sharing/calendar/downloads, persistent favorites, upgrade continuity, production deployment, iOS validation and codemod implementation. Placeholder actions remain placeholders. Sources: migration/plans/qwen-work-packages.md:138-140,188-192; migration/reference/contract.md:74-79,97-103; migration/plans/rn07-android-acceptance-checklist.md:13.

Execution order was R00 → P01 → C01–C03 → RN01–RN07 → NS01–NS07 → E01. The parent was Qwen initially; the human chose GPT-6.1 Sol high in Hermes from the RN03 recovery onward, with Claude Code coordinating/live supervising and inspecting pixels. The intended independent reviewer is GPT-6.1 Sol high. Historical exception: P01 r2–r4 records include the wrong gpt-6-luna route and are not approval authority; P01 r5 explicitly revalidated against authoritative r1. The numeric archive begins with only classified RN03 revision-2 preparation/review runs, not all RN03 implementation. Sources: migration/plans/qwen-work-packages.md:142-169; migration/handoffs/RN01.md:9; migration/handoffs/RN06.md:4-5; migration/reviews/P01-r3.md:5; P01-r4.md:3; P01-r5.md:11; migration/evidence/E01/effort-runs.json.

Measured: package commit times and intervals, revision/review records, committed submission file counts, whitelisted local run durations/tokens/tool-call counts, current tracked source/test lines and dependency declarations, recorded artifact sizes, final checklist statuses, and this session's test-reporter JSON. Unknown: total active engineering time, missing early-session durations/tokens, coordinator time and human time (both unknown, not logged), price/cost and full-app effort. No estimates substitute for those gaps.

Entry identity and hashes: migration/evidence/E01/entry.json captures branch migration/slice-1, HEAD 2a79815c43e17bd3d40f0d80a15e5e6d6f3ccf91, tree e649a7a7b3981efe1e99923b9ccb80c9bea376f9, empty index, exact raw starting porcelain and NS07-r2 APPROVE. It hashes E01, the checklist, both r2 submissions, both final results ledgers and both acceptance handoffs before work. The root lockfile's contents and IDEA.md were not read. No device/emulator, install, target/native build or product/test/config/dependency/checklist change was performed in E01. The expressly prescribed core test script regenerates ignored compiled output internally.

Comparability limits apply throughout, not just at the end:

- NativeScript ran second and reused RN07's checklist, capture tooling and lessons; shorter calendar time is not a controlled productivity comparison.
- RN changed executor and has incomplete run coverage, especially RN01/RN02 and early RN03. NativeScript's classified archive covers its whole package sequence more consistently.
- One AVD and one developer/operator environment, with human interventions and coordinator effort not timed. Environment failures and evidence/privacy/review work are included in some run totals.
- Tests differ in level: RN includes component/router wiring, whereas NativeScript Vitest primarily covers store/pure logic, not Vue/native rendering. More tests does not establish stronger native coverage.
- Both acceptance ledgers carry forward explicitly identified earlier candidates; neither is a complete final-candidate re-execution. Technical APPROVE is not human acceptance or unconditional accessibility/native acceptance.

## 2. Effort, measured versus unknown

Source for every package row below: migration/evidence/E01/effort-summary.json, packages[] keyed by package. Each record gives the full commit ID, committer ISO time, previous package commit, exact millisecond interval, committed submission path, all review paths and verdicts, and the exact runId list joined to migration/evidence/E01/effort-runs.json. Git history is HEAD ancestry only, not --all: similarly named commits on other histories are not counted twice. Commit times are committer timestamps; intervals include nights, waits, review, coordinator activity and intervening non-package commits, not measured implementation duration. ISO offsets are honored, including the October offset change.

### Package history and recorded runs

| Package | Commit (HEAD ancestry), committer time | Interval h | Runs | Run total / median ms | Revisions; final manifest files | Review verdict sequence |
|---|---|---:|---:|---:|---|---|
| R00 | 7d8ae9eed80d; 2026-10-18T23:08:00+02:00 | unknown | 0 | unknown / unknown | 2; 9 | r1:CHANGES_REQUIRED → r2:APPROVE |
| P01 | e9bbdb05ccb2; 2026-10-19T11:21:22+02:00 | 12.223 | 0 | unknown / unknown | 5; 5 | r1:CHANGES_REQUIRED → r2:CHANGES_REQUIRED → r3:CHANGES_REQUIRED → r4:APPROVE → r5:APPROVE |
| C01 | b857af263eb3; 2026-10-19T11:43:00+02:00 | 0.361 | 0 | unknown / unknown | 1; 8 | r1:APPROVE |
| C02 | 7b4078063a03; 2026-10-19T13:12:07+02:00 | 1.485 | 0 | unknown / unknown | 3; 13 | r1:CHANGES_REQUIRED → r2:BLOCKED → r2-rerun:CHANGES_REQUIRED → r3:APPROVE |
| C03 | 7461a5ac88e0; 2026-10-20T16:57:58+02:00 | 27.764 | 0 | unknown / unknown | 2; 11 | r1:CHANGES_REQUIRED → r2:APPROVE |
| RN01 | af44ce10e1c3; 2026-10-21T17:31:53+02:00 | 24.565 | 0 | unknown / unknown | 2; 122 | r1:BLOCKED → r2:APPROVE |
| RN02 | f78a759741b5; 2026-10-21T20:24:58+02:00 | 2.885 | 0 | unknown / unknown | 3; 53 | r1:CHANGES_REQUIRED → r2:BLOCKED → r3:APPROVE |
| RN03 | c283c7eaa0d8; 2026-10-25T10:27:26+01:00 | 87.041 | 3 | 1244405 / 325712 | 2; 230 | r1:CHANGES_REQUIRED → r2:APPROVE |
| RN04 | a2d83ca18b7b; 2026-10-25T12:32:09+01:00 | 2.079 | 11 | 4618794 / 345667 | 2; 410 | r1:CHANGES_REQUIRED → r2:APPROVE |
| RN05 | 0bfead89e33f; 2026-10-25T14:03:25+01:00 | 1.521 | 4 | 2220291 / 530870 | 1; 241 | r1:APPROVE |
| RN06 | f8b50216c364; 2026-10-25T16:51:31+01:00 | 2.802 | 10 | 5405214 / 482144 | 1; 718 | r1:APPROVE |
| RN07 | c02ae32d0482; 2026-10-26T11:51:23+01:00 | 18.998 | 20 | 22685766 / 765051 | 2; 19338 | r1:CHANGES_REQUIRED → r2:APPROVE |
| NS01 | 8d5b2fe30fe8; 2026-10-26T14:33:01+01:00 | 2.694 | 8 | 4435847 / 499092 | 1; 842 | r1:APPROVE |
| NS02 | 533ed4ab41a7; 2026-10-26T21:18:13+01:00 | 6.753 | 5 | 2060979 / 373370 | 1; 537 | r1:APPROVE |
| NS03 | 66655162f7f0; 2026-10-27T08:14:56+01:00 | 10.945 | 6 | 2804731 / 493328.5 | 1; 710 | r1:APPROVE |
| NS04 | 230a054818bc; 2026-10-27T09:29:14+01:00 | 1.238 | 5 | 3045664 / 689379 | 1; 1143 | r1:APPROVE |
| NS05 | 96139c00be18; 2026-10-27T10:56:14+01:00 | 1.450 | 4 | 2350817 / 595333 | 1; 1403 | r1:APPROVE |
| NS06 | ff675971b465; 2026-10-27T13:56:01+01:00 | 2.996 | 8 | 5690406 / 633098 | 1; 4426 | r1:APPROVE |
| NS07 | 2a79815c43e1; 2026-10-28T23:14:01+01:00 | 33.300 | 20 | 25826198 / 1151679 | 2; 38407 | r1:CHANGES_REQUIRED → r2:APPROVE |

Revision count means committed revisioned submission files, not run attempts. Manifest size means files[].length in the last committed submission at that package's own commit, not all nested hash entries. Evidence-heavy packet sizes are not product size or code churn. C02 has two r2 reviews but only one r2 submission; C01-r1-advice.md is a support opinion, not an additional review round. P01 r2–r4 are retained historical verdicts, not valid-route authority; r5 is authoritative. Sources: same package records; migration/reviews/C02-r2.md and C02-r2-rerun.md; migration/reviews/C01-r1-advice.md; migration/reviews/P01-r5.md:11.

R00 has no preceding package commit, so its commit interval is unknown. R00–RN02 have no classified local run directories: wall-clock run duration, tokens and tool calls are unknown because their Qwen-parent sessions were not captured here. RN03 has only the classified recovery subset; its long commit interval must not be compared to its short observed run sum as if the archive were complete.

### Tokens and tool calls

The following numbers are copied from final result numeric fields and counted tool_use events only. Input includes cached-input reporting as emitted; cache-read is not added again to reporter total. Cache-write zero is a reported value, not an inferred absence. Tokens are neither billed dollars nor unique source tokens. Source for every cell: effort-summary.json packages[].runMetrics; exact numeric rows and init model/timestamps in effort-runs.json.

| Package | Input | Output | Cache read | Cache write | Reporter total | Tool calls |
|---|---:|---:|---:|---:|---:|---:|
| R00 | unknown | unknown | unknown | unknown | unknown | unknown |
| P01 | unknown | unknown | unknown | unknown | unknown | unknown |
| C01 | unknown | unknown | unknown | unknown | unknown | unknown |
| C02 | unknown | unknown | unknown | unknown | unknown | unknown |
| C03 | unknown | unknown | unknown | unknown | unknown | unknown |
| RN01 | unknown | unknown | unknown | unknown | unknown | unknown |
| RN02 | unknown | unknown | unknown | unknown | unknown | unknown |
| RN03 | 3593870 | 35066 | 3364480 | 0 | 3628936 | 129 |
| RN04 | 9986973 | 128423 | 9288704 | 0 | 10115396 | 356 |
| RN05 | 5576226 | 53866 | 5273856 | 0 | 5630092 | 160 |
| RN06 | 13827838 | 124395 | 13055232 | 0 | 13952233 | 415 |
| RN07 | 60237551 | 414782 | 57929088 | 0 | 60652333 | 1021 |
| NS01 | 7636605 | 99610 | 7095808 | 0 | 7736215 | 310 |
| NS02 | 4270949 | 57089 | 3909504 | 0 | 4328038 | 180 |
| NS03 | 9153083 | 93767 | 8643840 | 0 | 9246850 | 307 |
| NS04 | 8978999 | 72152 | 8517504 | 0 | 9051151 | 221 |
| NS05 | 6099874 | 59479 | 5683584 | 0 | 6159353 | 191 |
| NS06 | 17631999 | 149377 | 16599936 | 0 | 17781376 | 347 |
| NS07 | 77758661 | 505866 | 75167360 | 0 | 78264527 | 1487 |

### Track totals and shared cost

| Track | Sum of preceding-package commit intervals h | Classified runs | Total / median run ms | Input / output / cache-read / cache-write / total tokens | Tool calls | Submission revisions / review records |
|---|---:|---:|---:|---|---:|---:|
| R00 workflow | unknown | 0 | unknown / unknown | unknown | unknown | 2 / 2 |
| Shared P01, C01–C03 | 41.833 | 0 | unknown / unknown | unknown | unknown | 11 / 12 |
| RN01–RN07 | 139.890 | 48 | 36174470 / 579277.5 | 93222458 / 756532 / 88911360 / 0 / 93978990 | 2081 | 13 / 13 |
| NS01–NS07 | 59.377 | 56 | 46214642 / 640236 | 131530170 / 1037340 / 125617536 / 0 / 132567510 | 3043 | 8 / 8 |

Sources: effort-summary.json tracks.workflow/shared/reactNative/nativeScript. Shared reference/core work is not charged to either target. All track run phases are included: implementation, native acquisition, helper failures, reviews, freeze and redaction. All captured final CLI exit codes in the classified completed target rows are zero; that does NOT mean every package phase succeeded—checkpointed/BLOCKED work can end its CLI normally. Product outcomes come from results/reviews, not CLI exit status.

NativeScript's shorter calendar span coexists with a larger observed run sum and token total, but RN's early work is missing, the executor changed, and NativeScript ran second with reused infrastructure. These measurements do not show that either framework requires less engineering labor. Coordinator and human time are both unknown (not logged).

Archive scope: effort-runs.json has one row per top-level directory, including nonmatching names with classified:false. The snapshot has 115 directories: 104 completed classified target runs, the current open E01 run, and ten unclassified directories. Four unclassified directories contain a final result, with a combined known duration of 1345789 ms; they are not assigned to a package merely because adjacent history suggests one. Other unclassified directories have no top-level stream. E01 is excluded from completed migration-track totals. Source: effort-runs.json and effort-summary.json method/unclassified/selfRun. Run streams were parsed without retaining or displaying text, tool inputs or tool outputs; no other historical run-directory files were opened for this analysis.

Review friction also includes process rather than framework defects: P01 facts/order/citations and wrong routing, C02 baseline/hash errors, C03 insufficient mutation/order assertions, RN03 viewport-vs-whole-result evidence, RN04 missing removal evidence and mismatched export inventories, RN07 incomplete pixel inspection, and NS07 duplicate unredacted image receipts. Sources: migration/reviews/P01-r1.md, P01-r3.md, P01-r5.md, C02-r1.md, C02-r2.md, C02-r2-rerun.md, C03-r1.md, RN03-r1.md, RN04-r1.md, RN07-r1.md, NS07-r1.md. They must not all be labeled framework bugs or implementation revisions.

## 3. Product size

Source: migration/evidence/E01/size.json, targets keyed by directory, with the exact included file list and per-file line counts. Counts are physical LF-delimited lines, including blank lines/comments; a final unterminated line counts once. "Authored/maintained source" here includes retained template-derived application source, not a claim every line was written for this slice. It excludes dependencies, generated/build outputs and platform/resource folders, generated/ambient declarations, assets/fixture JSON, configuration, scripts, manifests/lockfiles, docs and evidence. Code/style extensions under src/, test/, __tests__/ and test-utils/ are included. Test utilities count with tests; shared core is separate.

| Target | Source files / lines | Test and test-utility files / lines | Direct runtime / dev dependencies | Lockfile package-location entries, excluding root (including root) |
|---|---:|---:|---:|---:|
| Shared core | 7 / 391 | 5 / 761 | 0 / 2 | 3 (4) |
| React Native | 26 / 1750 | 8 / 1888 | 25 / 7 | 1164 (1165) |
| NativeScript | 13 / 881 | 7 / 864 | 4 / 9 | 514 (515) |

Dependency sources: migration/core/package.json, migration/react-native/package.json, migration/nativescript/package.json and each target's own package-lock.json; root package-lock.json was not used. Direct counts include the local core dependency where declared. Lockfile counts are locations, including linkage, not unique packages or a runtime-only dependency graph.

Confounders beside these figures: RN retains substantially more Expo/web/template support; NativeScript retains its native template/resources outside the code-line rule. RN includes component/router tests and a gesture test double, while NS tests mostly pure/store behavior. The line-count difference is not normalized implementation complexity, UI parity, quality, security or maintenance effort. The excluded NativeScript Vuex declaration shim still exists and is disclosed in friction; exclusions are size rules, not claims those files are unnecessary.

Recorded Android artifacts, not rebuilt:

| Target / artifact | Bytes | Evidence |
|---|---:|---|
| RN candidate-2 Hermes bytecode export | 4116492 | migration/evidence/RN07/c-freeze/android-artifacts.json, files[] entry ending .hbc |
| RN complete recorded export, 29 files | 5111963 | Same inventory, sum of size fields |
| RN comparable fresh acceptance APK | unknown | RN07 D1 reused the installed development client; no RN07 native rebuild/install (migration/handoffs/RN07.md:21-22,100-102,201) |
| NS candidate-6 debug APK | 118191268 | migration/evidence/NS07/f-fix5/candidate6.json, candidate6.size |
| NS packaged assets/app/bundle.mjs | 160275 | Same evidence, bundle.size |

These are not equivalent artifacts: RN's Hermes export includes a different runtime/bundling strategy; NS's app bundle is not its separate vendor/runtime payload. The debug APK includes native/runtime resources, and RN reused a development client. No package-size ratio, download-size, startup/performance or release-footprint conclusion is warranted. Source and calculation inventory: size.json artifacts.

## 4. Results

Authority: migration/evidence/RN07/results-r2.json and migration/evidence/NS07/results.json, not earlier acquisition-time provisional grades. migration/evidence/E01/results-matrix.json joins the 50 case IDs parsed from migration/plans/rn07-android-acceptance-checklist.md. Every matrix cell retains its source JSON pointer, run, candidate where explicitly supplied, and evidence paths. Missing NS candidate fields are not invented; its candidate policy and cited run identify provenance.

| Checklist parents | PASS | FAIL | BLOCKED | NOT RUN | N/A | LIMITED |
|---|---:|---:|---:|---:|---:|---:|
| RN07 (50) | 42 | 1 | 4 | 1 | 1 | 1 |
| NS07 (50) | 45 | 0 | 1 | 0 | 1 | 3 |

These are parent-case counts, not test counts or a weighted quality score. Different approved limitations apply: RN cold links remain blocked by the reused development client; NS debug launch-extra entry is exercised but not a release-link equivalent. RN's G08 BLOCKED and NS's G08 LIMITED both leave docked-keyboard inset acceptance unproved. NS benefited from the earlier checklist/tooling; neither ledger fully reran every scenario on the final candidate. Sources: results-matrix.json counts/matrix; migration/handoffs/RN07.md:19,202,259-269; migration/handoffs/NS07.md:40-43,3741-3743.

### Case-by-case shared checklist

Case labels abbreviate checklist actions without changing requirements; full expectation/action text and exact source pointers are in results-matrix.json matrix[].

| Case | Assertion | RN07 | NS07 |
|---|---|---|---|
| A01 | Candidate, baseline and scope | PASS | PASS |
| A02 | Compiled core / fixture integration | PASS | PASS |
| A03 | Software checks and reference coverage | PASS | PASS |
| A04 | Export / native build | NOT RUN | PASS |
| A05 | Install/launch (RN reused client) | PASS | PASS |
| A06 | Representative bounded app/server logs | PASS | PASS |
| B01 | Complete schedule groups and fields | PASS | PASS |
| B02 | Equal-time order / no missing rows | PASS | PASS |
| B03 | Mixed-case name search | PASS | PASS |
| B04 | No-match then clear | PASS | PASS |
| B05 | Single-space search preserved | PASS | PASS |
| B06 | Search/tracks retained across modes | PASS | PASS |
| B07 | Controlled loader lifecycle (automated) | PASS | PASS |
| C01 | Favorites empty state | PASS | PASS |
| C02 | Immediate list addition / informational alert | PASS | PASS |
| C03 | Chronological favorite display | PASS | PASS |
| C04 | Already-favorite confirmation branches | PASS | PASS |
| C05 | Favorites removal cancel/confirm | PASS | PASS |
| C06 | Immediate detail toggle / schedule sync | PASS | PASS |
| C07 | Track exclusion still applies to favorites | PASS | PASS |
| C08 | Background retention / process-death reset | PASS | PASS |
| C09 | Duplicate/absent ID state cases (automated) | PASS | PASS |
| D01 | Detail fields / missing description | PASS | PASS |
| D02 | Toolbar/system back retains selection | PASS | PASS |
| D03 | Cold known detail entry | BLOCKED | PASS |
| D04 | Cold unknown detail entry | BLOCKED | PASS |
| D05 | Detail and root Android Back | PASS | PASS |
| E01 | Initial/applied track selection | PASS | PASS |
| E02 | Single-track selection | PASS | PASS |
| E03 | Search and tracks intersect | PASS | PASS |
| E04 | Zero tracks means no rows | PASS | PASS |
| E05 | Select all restores applicable rows | PASS | PASS |
| E06 | Explicit close discards draft | PASS | PASS |
| E07 | Android Back discards draft | PASS | PASS |
| E08 | Optional backdrop/swipe dismissal | N/A | N/A |
| E09 | Reset changes draft only | PASS | PASS |
| F01 | Swipe/button favorite semantics | PASS | PASS |
| F02 | Vertical and diagonal drags | FAIL | PASS |
| F03 | Action does not navigate / ordinary row does | PASS | PASS |
| F04 | Open-row recycling / correct session identity | PASS | PASS |
| F05 | Complete nonswipe workflow | PASS | PASS |
| G01 | Keyboard editing and first Back | PASS | PASS |
| G02 | Controls with keyboard visible | PASS | LIMITED |
| G03 | Accessibility semantics / TalkBack exploration | LIMITED | LIMITED |
| G04 | TalkBack containment / return | BLOCKED | BLOCKED |
| G05 | Font scaling | PASS | PASS |
| G06 | Larger display size | PASS | PASS |
| G07 | Light/dark and live change | PASS | PASS |
| G08 | System bars / keyboard insets / scroll edges | BLOCKED | LIMITED |
| G09 | Background/resume surface lifecycle | PASS | PASS |

### Fixes and what they addressed

RN07 has four recorded fixes, F-1..F-4, in one fix candidate after baseline: F-1 preserves handled list taps with the keyboard open; F-2 scrolls to the first item on search/mode/tracks changes to avoid a blank list after filtering from the bottom, without resetting on favorites; F-3 lets the search field grow at large font scale; F-4 aligns native header/status-bar colors with the scheme. Four focused regression tests fail on candidate 1 and pass on candidate 2. Source for each: migration/evidence/RN07/f-fixes1/fixes.json, corresponding id, failingCase, rationale and regressionEvidence; migration/handoffs/RN07.md:63-81.

NS07's phrase "F1–F10" names its phase range, not ten distinct defect fixes. The five software fix rounds are F1, F3, F5, F7 and F10; F2/F4/F6/F8/F9 are device reruns and F11 is the final device check. There are nine recorded fix entries across those rounds and six candidate APKs, not ten independently fixed defects. Source: results-matrix.json fixes.nativeScript; migration/handoffs/NS07.md:27-43,2755-2930; migration/work-packages/NS07.md:78-97.

| NS fix record | Problem and final disposition | Primary evidence |
|---|---|---|
| F1-G05-1 | SegmentedBar labels clipped at large fonts; replace with wrapping native mode buttons, subsequently corrected to radio semantics | migration/evidence/NS07/f-fix/results-f.json /fixes/0; F2/F4 coordinator grades |
| F1-G05-2 | Ordinary Favorite button text overflows; wrapping/padding | Same source /fixes/1; F2/F4 |
| F1-G07-1 | Dark-system status icons invisible on light pages; explicit page status-bar styling; live race remained | Same source /fixes/2; F2 |
| F3-A11Y | undefined binding deletion leaves stale selected/disabled state; explicit checked/unchecked, including detail toggle reset | migration/evidence/NS07/f-fix2/results-f3.json /fixes/0; F4 |
| F3-G07-LIVE | Appearance-event post attempted to restore live status icons; insufficient, superseded by F5 | Same source /fixes/1; F4 still-failing grade |
| F3-G05-3 | Fixed swipe strip too narrow at large fonts; measured auto width and matching translation | Same source /fixes/2; F4 |
| F5-G07-LIVE | Live status-bar race; conditional per-page/window pre-draw repair | migration/evidence/NS07/f-fix3/results-f5.json /fixes/0; F6 |
| F7-A06-UNLOAD | F5 cached ViewTreeObserver becomes a cleared native proxy during activity stop; fresh observer/attach-detach cleanup | migration/evidence/NS07/f-fix4/results-f7.json /fixes/0; F8/F9/F11 |
| F10-FILTER-RECREATE | Font-scale recreation strands Vue modal target; close/discard through normal API before teardown so reopen works | migration/evidence/NS07/f-fix5/results-f10.json /fixes/0; F11 |

Subsequent coordinator grades, not historical IMPLEMENTED/PENDING fields, govern the final result. F3's live-status attempt was not a separately successful resolution. NS07 added no new target test identities for these component fixes; native/coordinator reruns provide their rendering/lifecycle acceptance. This differs from RN's focused component regression tests and prevents treating raw fix-entry counts as a normalized defect rate. Source: migration/handoffs/NS07.md:2930; migration/evidence/NS07/pixel-inspection-coordinator.md; migration/reviews/NS07-r2.md.

### Current E01 software baseline (no installs)

Source: migration/evidence/E01/checks.json. Exact command, argument array, cwd, exit, timestamp and duration receipts, with bounded stdout/stderr, live under tools/qwen-supervisor/.runs/sol-e01-r1-a-20261029/. Node --version returned v24.19.0; child PATH pins it first and removes NoDefaultCurrentDirectoryInExePath.

| Check | Actual result | Receipt basename / reporter |
|---|---|---|
| npm --prefix migration/core test | exit 0 | core-test.receipt.json |
| Additional compiled core run with JSON event reporter | exit 0; 53 passed, 0 failed | core-json.receipt.json; core-reporter.json final test:summary |
| npm --prefix migration/react-native run typecheck | exit 0 | rn-typecheck.receipt.json |
| npm --prefix migration/react-native test -- --json --outputFile=… | exit 0; 7 suites, 99 passed, 0 failed | rn-jest.receipt.json; rn-jest.json |
| NativeScript npm run typecheck | exit 0 | ns-typecheck.receipt.json |
| NativeScript installed Vitest via npm exec --offline, JSON reporter | exit 0; 7 files, 115 passed, 0 failed | ns-vitest.receipt.json; ns-vitest.json |
| RN07-r2 original manifest checker, read-restricted | UNAVAILABLE in full: filesystem denial at IDEA.md; exit 1, not a mismatch or pass | rn07-manifest-restricted.receipt.json |
| RN07-r2 safe projection omitting protected IDEA hash objects | exit 0; 19340 hash entries, 0 problem(s) | rn07-manifest-safe-projection.receipt.json |
| NS07-r2 manifest checker | exit 0; 38527 hash entries, 0 problem(s) | ns07-manifest.receipt.json |
| git diff --check, excluding root package-lock.json | exit 0 | diff-check.receipt.json |
| git diff --cached --exit-code | exit 0 | index-empty.receipt.json |

Counts derive only from this session's reporters' JSON. NativeScript JSON's nested suite count is 20, not its seven test files; file count uses testResults.length. The stock npm core text is not used to derive the count; the additional identical compiled-suite run emits JSON summary events. npm exec --offline avoids a possible npx download/install. These tests are current HEAD baselines, not fresh device acceptance. Porcelain was byte-identical immediately before/after tests and checks (checks-status-before/after receipts); only E01 report artifacts were subsequently authored.

The original RN07 checker was launched with Node filesystem permission limited to migration/, so it could not open IDEA.md. A run-local projection checked the remaining entries, without editing the old manifest. Root package-lock.json was never opened or diffed. There were no hash mismatches in the permitted RN projection or NS07 check; the full RN protected hash remains unverified in E01. The two read-boundary deviations are explicit, not repaired by installing tools or weakening product checks.

## 5. Blockers and unverified items

Current checklist limits, with source case pointers in results-matrix.json:

- RN A04 / A04-native-build: NOT RUN under D1; JS export passed but no fresh native APK. RN A05 is installed-client reuse, not a new build/install. Sources: RN07 handoff:21-22,100-102; RN results A04.
- RN D03/D04: BLOCKED by the development client's cold-VIEW route limitation (D3). Automated route tests do not replace native cold known/unknown-ID proof. NS D03/D04 PASS is through its __DEV__ launch-extra harness; release exclusion and standalone entry are not proved. Sources: RN07 handoff:49,202,218; NS07 handoff:54-60,3742.
- RN F02 and F02.diagonal-left: FAIL retained by D5. A diagonal-left drag reveals an action without vertical scrolling, although it neither mutates a favorite nor navigates. No deeper gesture fix was authorized. NS's F02 PASS concerns a discrete swipe recognizer, not the same finger-following gesture feel. Sources: RN07 handoff:26,54-55,194; NS07 results F02; NS06 handoff:29,103.
- Both G03: LIMITED tree-only labels/roles/state audit, not spoken announcements, traversal or focus order. Both G04: BLOCKED; modal/dialog containment and focus return still need a manual TalkBack walkthrough. RN injected input did not drive accessibility focus; NS D5 deliberately did not enable TalkBack. Sources: RN07 handoff:31,58,190,202,217; NS07 handoff:54,3741.
- RN G08: BLOCKED for docked keyboard/insets despite separately passed bars/edges and G01/G02 floating-keyboard flows. NS G02/G08 and their controls/keyboard-insets subcases: LIMITED because floating keys obscure list content without docked insets. Incidental docked surfaces are explicitly ungraded in both histories; they do not close inset acceptance. Sources: RN07 handoff:32-33,58,242; NS07 handoff:3741; final result entries.
- Both E08: N/A only for unsupported optional full-screen-modal backdrop/swipe gestures. This does not waive required explicit close or hardware Back (E06/E07). NS has explicit E08.backdrop and E08.swipe-down N/A subcases. Sources: checklist:29,103; RN07 handoff:252-253; NS07 handoff:3741.
- RN D9: live font-scale activity recreation can show multiple navigation containers/configured-linking LogBox errors and reset the query. G05 parent PASS does not erase this known issue, left outside the fix policy. Source: RN07 handoff:30,195,219.
- NS F10 deliberately closes/discards the modal draft on configuration recreation rather than preserving an open modal. NativeScript core's internal modalMap configuration-dismissal entry remains a disclosed library limit, and post-recreation SearchBar focus/keyboard toolbar is an ungraded observation. Status-bar mapping on API 23–29 was not tested; the evidence is this API-36 environment. Sources: NS07 handoff:2804,2930,3742; NS07 work package:95-97.

All remaining final RN non-PASS subentries are retained, not silently collapsed into parent passes. A04-native-build, F02.diagonal-left and F03.invalid-target-attempt respectively mean not built, the retained gesture failure and a superseded tooling attempt (valid F03 passes). The G03/G04 family covers search/modes, detail-star/state-change, row context/entry/favorite/revealed action, checkbox/checked-state and filter controls, duplicate stops/announcements, alert buttons, modal/dialog background reachability/containment and return after filter/detail/alerts. Their individual BLOCKED/LIMITED/NOT RUN statuses—including differently named overlapping attempts—remain individually enumerated in results-matrix.json nonPassInventory with exact source pointers. G08.keyboard, keyboard-insets-docked (including dock, list-bottom-insets, search-and-modes), list-insets and presentation remain BLOCKED; its keyboard-insets-docked.filter branch is N/A, not a passed inset test. Source: RN results-r2 entries, exact IDs in that inventory.

For completeness, revision 2 nonPassInventory enumerates all 552 objects whose string status is not exactly PASS across both ledgers (RN 216; NS 336), walking every depth, including below PASS parents. Of these, 505 carry standard non-PASS grades: BLOCKED 162, FAIL 47, LIMITED 191, N/A 8 and NOT RUN 97. The remaining 47 are listed separately in nonstandardStatusInventory: 46 lowercase passed test-result fields and the NS ledger's root READY_FOR_REVIEW metadata field (RFC 6901 empty pointer); these are not failures or acceptance grades. Each inventory entry retains its ledger, RFC 6901 object pointer, status, enclosing-record pointer/id where available, kind and evidence paths. Compared with revision 1's 504 records, 48 pointers were added and none removed: 47 nonstandard fields plus NS /supplemental/7/observed (Settings.restore.g-settings, NOT RUN). That historical observation says no settings were changed, restoration was unnecessary, environment equality was unverified, and the repository entry gate failed before ADB; its parent remains PASS, not an unresolved settings-restoration defect. An independently written explicit-stack traversal matched all 552 pointer/status records with no missing, extra or mismatched status; the full pointer list, delta and counts by ledger/status/kind are in migration/evidence/E01/r2/inventory-crosscheck.json. Historical overlap is preserved, not presented as 552 distinct current defects. Every BLOCKED/LIMITED/NOT RUN/FAIL/N/A object is included without copying raw receipts or images into E01; current parent counts above still use only the unchanged 50 final cases. Sources: results-matrix.json nonPassInventory, nonstandardStatusInventory and inventoryMethod; both named source JSONs.

Historical blockers resolved or superseded, not current acceptance passes by inference: RN's Metro OOM, denied TalkBack notification prompt and injection limits, invalid hidden-target attempt, exact-HEAD/supervisor/parser gates; NS's build-path environment, system-server failure, hidden swipe-button hit interception, clipped-edge measurement gate, system Back edge gesture, Gboard/prompt limitations, overlapping-helper invalid frames, F8 startup ANRs on an overloaded AVD, corrected F9 insufficient-priority error scan, status-bar/unload/modal defects and privacy correction. Each retains its original run and status. Sources: RN01/RN02/RN06/RN07 handoffs and RN02-r1/r2, RN07-r1/r2 reviews; NS01 handoff:82-98; NS06 handoff:95-113; NS07 handoff:40-43,312-316,3738-3744; NS07 work package:81-100. Later candidate/run evidence, not relabeling, provides the final ledger dispositions.

Cross-track unverified scope remains: iOS, physical devices, release/standalone builds and startup/upgrade continuity, landscape, soak/performance, contrast/accessibility conformance, native loader-error/retry rendering beyond controlled automated tests, generalized gesture feel and the deferred real integrations/persistence. One representative bounded log scan is not exhaustive stability or zero warnings. NativeScript's existing npm vulnerability/deprecation/pending-install-script notices and RN's native/Metro soft warnings are disclosed historical signals, not a fresh audit by E01. Sources: RN07 handoff:186-203; NS03 handoff:51,138; NS07 handoff:3738-3744; results-matrix.json unverifiedOutsideCases.

E01's separate publication blocker was correctly recorded as BLOCKED in phase A (migration/evidence/E01/privacy-scan.json), unrelated to either framework. The human approved Amendment A1 (2026-10-29): reword the privacy rule without the literal strings, leaving the scan unchanged and granting no exemption. A2 rescanned every submission member by content and passed with zero hits (migration/evidence/E01/a2/privacy-scan.json), resolving that blocker for the revision-1 freeze.

## 6. Framework friction

These are observed problems and implementation choices, not universal claims about the frameworks. Evidence/process issues above are kept separate from product/framework issues.

| Area | React Native / Expo evidence | NativeScript-Vue evidence | Interpretation and limits |
|---|---|---|---|
| Windows build setup | RN01 required short C++ staging paths/object-path caps in ignored generated Gradle configuration; prebuild does not preserve that local workaround. RN01 also corrected template ref typing and stale route/title support. Sources: RN01 handoff:9-11,33-39; RN01-r1/r2 reviews. | NS01's gradlew.bat lookup failed because a child environment flag was inherited; removing that flag fixed the build. CLI scaffold initially nested its path; SDK/Gradle cache additions and later emulator system-server failure were disclosed. Source: NS01 handoff:48-59,82-98. | Both had host/tooling friction; the specific RN path workaround is not evidence NS has no Windows build risks. |
| State integration / typing | Reducer/context and public core are exercised with real-provider/component/router tests. Sources: RN03-r2/RN05-r1 reviews. | Vuex exports hid shipped types under bundler resolution, requiring a human-authorized type-only shim; npm peer metadata/csstype changes required scope amendments. Source: NS03 handoff:31-45,57-78; NS03-r1 review. | This NS-specific integration was resolved without replacing the agreed store; not a state-algorithm duplication advantage for either track. |
| List virtualization / cells | RN07 filtering while scrolled to the bottom could leave a blank SectionList; F-2 resets position on selection changes, not on favorite mutation. Source: RN07 handoff:68-71. | ListView needs flat header/session rows; leaving empty favorites recreates the list, returning to the top. NS06 initially drew accessibility-hidden action buttons over closed rows, intercepting swipes; visibility binding fixed it. Sources: NS03 handoff:49,156; NS06 handoff:29-43,95-103. | NativeScript's cell rendering/hit-testing and RN's scroll state required different handling. These are bounded observations, not general scroll-performance measurements. |
| Gesture implementation / tests | Worklets/Reanimated shipped mocks failed under Jest; an explicitly authorized ReanimatedSwipeable double was required. Device F02 diagonal ambiguity remains FAIL. Sources: RN06 handoff:15-19,30-36; RN07 handoff:194. | Core discrete swipe needs no new gesture plugin; hidden action requires a pixel/XML-derived strip tap, and a system-edge gesture invalidated an earlier close attempt. Sources: NS06 handoff:27-45,95-103. | RN test infrastructure is heavier here; NS interaction is a fixed reveal rather than finger-following drag. Different gesture semantics confound pass/fail and polish comparisons. |
| Mode control / enlarged text | RN search fixed height clipped at scale 2.0, repaired by F-3; scheme-aware headers/status bar repaired by F-4. Source: RN07 handoff:72-79. | Native SegmentedBar clipped labels and was replaced by wrapping mode buttons. undefined property deletion left stale accessibility state; explicit radio checked/unchecked fixed it. Ordinary button and strip sizing also changed. Source: NS07 handoff:2755-2879. | Both needed large-text fixes; NS's native-control/property-binding details produced additional correction rounds. |
| Status bar / activity lifecycle | RN's hook/status component fixed header/icon presentation, but live font-scale recreation still has the D9 navigation/linking issue. Source: RN07 handoff:76-79,195. | Page styling and an appearance-event post did not reliably survive core/window refresh. Per-window pre-draw repair then needed observer lifetime cleanup; configuration recreation stranded the modal target until F10. Source: NS07 handoff:2832-2930. | More low-level Android lifecycle work was observed on NS; RN also has unresolved recreation behavior, so neither is lifecycle-complete. |
| Gboard / keyboard / modal | RN's initial list first tap dismissed the keyboard instead of acting; F-1 uses handled taps. Docking/insets remain blocked. Modal background/resume preserves the draft per D7. Source: RN07 handoff:27-33,64-65. | NS required coordinator keyboard-menu guidance; floating controls/insets remain LIMITED. F10 must discard modal draft on configuration recreation and allow reopen. Source: NS07 work package:81-97; NS07 handoff:3741-3742. | The same AVD/Gboard environment affects both; keyboard-menu reconnaissance and privacy remediation are not automatically framework defects. |
| Native detail entry | Reused Expo development client blocks native cold-link cases; automated coverage remains support only. Source: RN07 handoff:202,218. | __DEV__ intent-extra harness passes known/unknown entry and fallback, but release exclusion was not built/tested. Source: NS04-r1 review; NS07 handoff:54-60,3742. | NS has stronger evidence for this debug entry case; neither result alone proves a production speaker-entry/deep-link flow. |

Evidence maturity also differs: RN07 r1 required missing coordinator pixel inspection before r2 approval; NS07 r1 required replacement of ten duplicate image receipts before r2 approval. Both tracks required privacy work on device evidence. These are reporting/supervision costs, not defects intrinsically caused by React Native or NativeScript. Sources: migration/reviews/RN07-r1.md, RN07-r2.md, NS07-r1.md, NS07-r2.md; migration/handoffs/RN07.md:244-250; NS07.md:4-11. E01 includes only derived metrics and citations, no screenshots/raw historical receipts.

## 7. Recommendation

Next slice: speakers list plus speaker-to-session detail entry, reusing the existing session-ID detail screen and shared normalized speaker/session data. Keep maps, tutorial/startup/storage, real sharing/calendar and persistence out of that slice. This is a recommendation for a separately planned/assigned experiment, not permission to start it. Source candidates: migration/plans/qwen-work-packages.md:140; the explicit deferred independent-entry requirement is migration/reference/contract.md:74-79.

Lead target: React Native / Expo, conditionally. Reasons: the existing component/router tests exercise full rendered section mappings and state/navigation wiring; RN07's four fixes have focused regression coverage; its observed presentation repairs required less custom native lifecycle machinery than NS07's status-bar/observer/modal sequence. The next slice stresses navigation-parent independence more directly than maps or external APIs, making it a bounded way to test reuse rather than introducing unrelated integrations. Sources: migration/reviews/RN03-r2.md, RN04-r2.md, RN05-r1.md; RN07 fixes.json; NS07 handoff:2755-2930. This is interpretation of the observed implementation/evidence, not a measured framework productivity ranking.

Evidence against an unconditional RN lead: RN F02 remains FAIL; native cold valid/unknown entry is BLOCKED; D9 recreation is unresolved; NS's debug cold entry passes and NS's final parent ledger has no FAIL. NS has smaller maintained source under the declared rule, but that size comparison includes different template/test scope. Recorded run totals are incomplete for early RN and include unequal process work; shorter NativeScript calendar time cannot decide the lead.

Conditions to keep or change the lead in the new plan:

1. Before expanding RN navigation, explicitly authorize and demonstrate native cold known/unknown entry in a suitable standalone/preview candidate, then verify speaker→session→back returns to the speaker context without resetting schedule state. If this remains blocked while an equivalent NS entry/back path is reproducible, lead with NativeScript instead.
2. Specify and verify font-scale/activity recreation behavior and manual TalkBack focus return for the new entry path; RN's D9 and both tracks' G03/G04 gaps cannot be inherited as passes. If resolving RN recreation needs unacceptable scope while NS's F10 strategy remains stable, reconsider the lead.
3. Use the same cases and evidence standard on both targets, log coordinator/human time prospectively, and distinguish implementation runs from evidence/privacy/review work. Comparable measurements could change the choice; current token/run sums cannot predict labor.
4. Phase A correctly blocked on the privacy-policy self-match. The human approved Amendment A1 (2026-10-29), rewording the rule without the literal strings and leaving the scan unchanged; A2's zero-hit content rescan (migration/evidence/E01/a2/privacy-scan.json) resolves this prerequisite for the revision-1 freeze, without a policy exemption.

No cost estimate for the full app follows from slice 1. No second slice is assigned by this report, no review was dispatched, and technical approval/human acceptance remain separate.

Next: none; STOP — a second slice requires a new plan and a separate human assignment
