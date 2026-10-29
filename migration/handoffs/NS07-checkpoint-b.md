NS07 checkpoint B

Status: CHECKPOINTED. STOP before phase G or any other continuation.
Observer: Hermes GPT-6.1 Sol high (device actions); pixels pending coordinator
Results: migration/evidence/NS07/b-device/results-b.json
Capture index: migration/evidence/NS07/b-device/capture-index.json
Audit: migration/evidence/NS07/b-device/checkpoint-audit.json

Gate and preservation

Branch migration/slice-1; HEAD ff675971b4654ccdfc3f9694eac4a61503d86906; empty index. Branch/HEAD/index/full porcelain evaluated before any migration write. Entry allowed only NS07.md, checkpoint A and files under a-gates; b-device did not exist. Candidate is 117638026 bytes, SHA-256 fa06fb8a0f840d3865ce16e100277e5b58fed40ec9ca37f20df31709070451d5. adb install -r succeeded; installed base.apk SHA-256 matches exactly (A05-installed-copy.json). No rebuild.

Checkpoint audit: 30647 baseline file hashes unchanged, including all 219 phase-A files and their path set, NS07.md and checkpoint A. No unexpected porcelain, tracked diff or index change. No IDEA.md contents read; only preservation hashing. No conference JSON decoded wholesale.

Device and group outcomes

Only RN01_API36 / emulator-5554; package service reported found before any other ADB call. dev.translationtest.rn remains installed at its unchanged path.

A05 PASS: exact candidate installed and cold schedule rendered. Initial post-launch pidof failed because ADB could not connect to its daemon; read-only retry recovered, without server restart or app relaunch. Original failure: 0031-A05-cold-launch-pid.receipt.json and stderr.log.
A06 PASS within bounded scope: 21 process windows, pidof before/after stable in every window; logcat -d -t 400 --pid=<pid>. No detected fatal-exception/signal/unhandled-error pattern. Every W/E line is retained verbatim in each *-warnings-errors-verbatim.txt and aggregated in A06-log-review.json. Not warning-free, exhaustive, release-build or general stability evidence. NativeScript bundles JS; no Metro.
B01-B07 PASS in executor scope: overlapping native scroll covers all 20 IDs and eight headings, stable 6/7 and 10/11 ordering; IOnic gives all 15 expected IDs/groups; no-match/clear works; literal space gives 18 IDs through the compiled shared selector using only UI-observed fixture fields. Search/tracks survive All/Favorites roundtrip without nonfavorite leakage. B07 is existing NS03 controlled-loader test evidence only (pending, throw, reject, retry, stale completion), matched to both immutable phase-A reports.
C01-C09 PASS: empty Favorites; list add/duplicate Cancel/explicit removal; Favorites Cancel/removal/empty; chronological [1,20] after adding 20 then 1; detail on/off immediate synchronization; Food-only favorites-some [12]. C08 same PID 28295 survived HOME/resume retaining favorites/filters; force-stop produced PID 29193 with empty favorites. C09 cites existing NS03/NS04 add-duplicate/remove-absent reference and idempotency tests, not impossible device gestures. C02 pre-acknowledgement mutation timing is supported by NS04 tests; native evidence observes the alert and subsequent single favorite, not a hidden native getter.
D01-D05 PASS: Breakfast safely omits description; described ID3 fields present; toolbar/system Back preserve query, applied tracks and favorites, with separate Favorites-mode retention. D02 visible-ID scroll window is retained; no exact pixel-offset claim. D6 cold intents use raw extras 3, 9999 and abc; known detail loads, unknown/malformed ID safely shows Session not found. with disabled favorite toggle and usable schedule fallback. Harness is debug-only; release not tested. D05 detail Back returns once; root Back intentionally leaves the foreground as normal task behavior, not a failure.
E01-E07/E09 PASS: all ten switch states exposed; Ionic [4,2,5]; Ionic+Design plus IOnic [4,2,5,7,18]; no-tracks empty/reopens unchecked; Select All preserves search, clearing restores full baseline; ActionBar Close and system Back discard draft; Reset and Deselect All without Apply change draft only. E03 uses authorized IOnic rather than frozen Ionic, differing only by case under the specified case-insensitive selector. E08 N/A: NS05 D3 full-screen modal has no backdrop or swipe handle; no unsupported gesture attempted.
F01-F05 PASS: exact 300ms reveal moves content right 807 to 555 (252px); hidden action taps use the fresh-XML-confirmed open strip center, not an invented XML button. Add, duplicate/Cancel and Favorites removal Cancel/confirm follow button semantics; action does not also navigate; ordinary row opens correct detail; recycling opened 1 before interacting with 20 mutates only 20; complete column-1 workflow works without swiping.

F02 exact gestures (x1 y1 x2 y2 duration-ms):
  vertical: 600 2050 600 1250 450
  diagonal up: 650 2000 450 1100 600
  diagonal down: 450 1150 650 2000 600
All stayed on schedule, scrolled through rows/groups, left no open action and no favorites. See F02-*-gesture.json and PNG/XML pairs.

Failures, automation incidents and limits

No outstanding product FAIL or environment BLOCKED in the final case results. There are 36 main PASS entries and one N/A; 87 total overlapping aggregate/subcase/window entries are not independent test totals.

Original provisional B01/B02 FAIL records came from an excessive initial scroll stride, not proof of missing fixture rows. Full overlapping reruns supersede them (B01-overlap-sequence.json, B01-coverage-correction.json). Original B05 FAIL started its sweep at a retained bottom viewport; B05-overlap-sequence.json supersedes it from a fresh process. Originals remain in cases.json and their captures; results-b.json explicitly retains the superseded observations. These are automation coverage corrections, not product fixes.

The first retry launch poll accepted any schedule viewport and captured a transitional previous viewport (B01-coverage-retry-cold). Subsequent fresh XML/PID and B01-overlap-top establish the new process/top baseline; launch polling was tightened to require 8:00 am and empty query from B03 onward. C03 seek initially rejected a fully visible row exactly at the ListView bottom boundary; it stopped before tapping. Corrected helper accepts equality and resumes the unexecuted add20 step. Original exception and repeated read/scroll frames remain. No incorrect favorite mutation or source edit resulted.

All 253 recorded post-action polls PASS, maximum 8.21828309999546 seconds. All ADB subprocesses target emulator-5554 with timeouts at most 30 seconds. Dump retries allow at most five attempts with two-second waits. Every tap has fresh XML bounds; visible-text matching uses exact case-insensitive equality; automationText uses resource-id/content-desc. Every gesture start is at least 100px from screen edges.

265 PNG/XML pairs validated for hashes, XML parsing, PNG signatures/chunk CRCs/decompression. Every frame still requires coordinator pixel and privacy inspection; executor made no pixel approval or redaction claim. D2 harmless host clipboard safeguard was confirmed by coordinator before launch. Search focus frames did not expose an IME package in compressed XML at hard-keyboard IME setting 0; keyboard visibility is XML plus coordinator pixels only. No dumpsys input_method.

Warnings include CPU variant, HWUI decoding/format/dataspace, ashmem deprecation, inactive InputConnection, Back/IME dispatch, finalizer/GC and disposed input receiver messages. The D02 ImeBackDispatcher error is preserved verbatim; subsequent schedule/filter/favorites readbacks remained responsive. All exact lines, timestamps and PIDs are in A06-log-review.json and raw per-window files. No zero-exception claim.

Keys and text inputs

HOME keyevent 3: once for C08, after fresh schedule XML.
Back keyevent 4: once D02 (fresh detail XML, no IME nodes), twice D05 (detail then root, fresh XML each), once E07 (fresh modal XML). No other hardware keys.
input text IOnic: B03, B06, D02, E03.
input text zzz-no-such-session: B04.
input text "%s" (literal single space): B05 initial and its coverage retry.
Each text input followed an XML-bounds SearchBar tap; only its Clear query X cleared text. No settings changes.

Recorded cold launches (label: PID; each force-stop then monkey unless noted):
  A05-cold-launch: 22522
  B01-coverage-retry-cold: 22818
  B03-cold-baseline: 23189
  B05-retry-cold: 24756
  C01-cold: 25203
  C03-cold: 25707
  C06-cold: 27802
  C07-cold: 28295
  C08-new-process: 29193
  D01-cold: 29326
  D03-direct3: 30763; am start, ns04SessionId 3
  D04-9999-direct: 30916; am start, ns04SessionId 9999
  D04-abc-direct: 31086; am start, ns04SessionId abc
  D05-cold: 31265
  E01-cold: 31530
  F01-cold: 3101
  F02-cold: 4345
  F03-cold: 4712
  F04-cold: 5164
  F05-cold: 6185
  F05-final-cold: 6852
C08 also uses the launcher intent to resume PID 28295 without force-stop; separately receipted, not counted as a cold launch. Full arguments in relaunches.json/commands.jsonl.

Teardown and boundary

Before/after identical: model sdk_gphone64_x86_64, API36, 1080x2400, physical density420, font_scale1.0, night no, enabled accessibility services null, show_ime_with_hard_keyboard0, navigation_mode2, RN package path unchanged. App left foreground on schedule, All sessions selected, all ten tracks, empty search, 8:00 am/Breakfast, no open swipe row; final PID6852. Evidence: F05-final-schedule.png/.xml, F05-final-filter-check.png/.xml, final-device-state.json, environment-before.json and environment-after.json.

Child command receipts and commands.jsonl retain measured args/cwd/exits/timings/stdout/stderr. Outer terminal launcher/read/write tool provenance is retained by supervisor stream; unavailable outer timings are not fabricated. initial-terminal-commands.json records the two pre-helper read-only terminal invocations. Helper-only Pyright inference/import diagnostics did not prevent execution and are not product/test verification.

No product/test/config edits, settings changes, fixes, rebuild, delegation/review dispatch, final handoff/submission/freeze, staging/commit/push. Phase-A history unchanged. Phase G remains separate and unrun. This checkpoint is not package acceptance. STOP.

Machine result: tools/qwen-supervisor/.runs/sol-ns07-r1-b-20261027/result.json
