# NS06 Phase B run 4 checkpoint

Status: CHECKPOINTED — run 4 XML/device observations PASS. STOP before Phase C; every PNG awaits coordinator pixel/privacy inspection.
Observer: Hermes GPT-6.1 Sol high (device actions); pixels pending coordinator
Evidence: migration/evidence/NS06/b-device4/results-b.json
Run: tools/qwen-supervisor/.runs/sol-ns06-r1-b4-20261027/

## Gate and preservation

- Branch migration/slice-1; HEAD 96139c00be18030b68e0fa0f14c64a78df853e32; empty index. Branch/HEAD/index/full porcelain captured and gate evaluated before the first migration/ write; b-device4/ and this checkpoint absent at entry.
- Entry gate PASS: all three targets match a-gates2/final-audit.json:allowedTargets. Authorized launch baseline checked 29,677 hashes with zero mismatches; all 3,670 earlier NS06 evidence files and their path set unchanged. Earlier checkpoints and coordinator-owned NS06.md unchanged. Post-device preservation also PASS; final-audit.json records the checkpoint exit audit.
- APK: 118504855 bytes, SHA-256 e58c43978bb5ae3c6b632160ee4d5a731c5ad3826e8d76f7debd02773810b341. adb install -r succeeded; installed base.apk hash matches exactly. No rebuild.
- Package service reported found first; only RN01_API36 / emulator-5554 used. dev.translationtest.rn remains installed at its unchanged path.

## Observations

- B-install/B1 PASS: cold launch shows Conference / 8:00 am, ALL SESSIONS selected, enabled Filter and labelled Favorite buttons.
- B2–B6: covered by run 3, NOT repeated. Exact historical pointers and prior subcases are in results-b.json and migration/handoffs/NS06-checkpoint-b3.md.
- B7 PASS: A=session-1, Breakfast; B=session-4, University of Ionic. Reveal A moves right edge 807 to 555; reveal B restores A to 807 and moves B to 555. Corrected close command: input swipe 150 1206 510 1206 300, inside B's current open bounds [0,1082][555,1331]. B returns to right edge 807; still the foreground schedule. C1 assertions use right edges only; clipped left edge 0 is recorded, never asserted.
- All four reveals succeed at the first prescribed 300 ms attempt; no 200 ms retry needed. Exact gesture commands and coordinates retained.
- B8 PASS: Breakfast opened; FAVORITE SESSIONS gives No favorite sessions. and no open row; returning to All proves closed row bounds before reopening. Reopened Breakfast, Filter, Deselect All, Food on, Done gives exactly session-1 Breakfast and session-12 Lunch, both Food and closed at right edge 807. Reopened modal retains Food-only; Select All checks all ten tracks; Done restores All sessions / baseline rows / 8:00 am.
- B9 PASS within XML scope: column-1 Favorite buttons remain labelled in B9-buttons and every open-row frame; e.g. raw content-desc Favorite Breakfast. Favorite and Favorite University of Ionic. Favorite. No separate swipe-action-* nodes are exposed in compressed XML. Action visibility and labels require coordinator pixels; not inferred from accessibility absence.
- B-logcat PASS within bounded scope: initial/before/after PID 21291; logcat -d -t 400 --pid=21291 contains no detected fatal-exception/signal pattern. All 66 W/E lines preserved verbatim, including CPU-variant, ashmem deprecation, HWUI and WindowOnBackDispatcher messages. Not exhaustive or warning-free.
- B11-final PASS: app remains in the foreground on the schedule, All sessions, all tracks restored, no open row, 8:00 am. Environment before/after identical: sdk_gphone64_x86_64, SDK 36, physical density 420, font_scale 1.0, Night mode no, enabled accessibility services null; RN package path unchanged.

## Evidence and limits

- 18 PNG/XML pairs indexed in capture-index.json; pair hashes, PNG signatures/chunk CRCs/decompression and XML parsing validated by finish4.py prepare. Every frame awaits coordinator pixel/privacy inspection; no executor pixel approval.
- All post-action polls PASS; maximum recorded elapsed 5.819621200003894 seconds. Every ADB call targets emulator-5554 with a timeout at most 30 seconds. ns06b4.xml dumps allow at most five attempts with two-second retry waits.
- Exact case-insensitive equality on visible text/content-desc; automationText observed as resource-id. Nine taps use current XML bounds centres on permitted controls. No hidden-action tap needed in this run. No SearchBar tap, text input, hardware key event, settings change or dumpsys input_method.
- Receipts plus commands.jsonl retain measured child arguments/timings/output/exits. Outer terminal provenance is separately labelled; unavailable tool timing/unfinished outer exit is null rather than invented, with actual return in supervisor stream. Helper Pyright inferred-union diagnostics did not prevent successful Python execution; no product lint/test/build rerun in this observation-only phase.
- Results contain 25 overlapping aggregate/subcase/historical-coverage entries, all PASS; these are not independent test totals.
- No product/test/config edits, fixes, rebuild, handoff/submission/freeze, delegation/review dispatch, staging, commit or push. Earlier NS06 history immutable. Conference JSON and IDEA.md were not decoded/read as text; preservation used hashes only.

Pending: coordinator inspection of every PNG and separately authorized continuation. No Phase C, package acceptance or NS07 claim.
Machine result: tools/qwen-supervisor/.runs/sol-ns06-r1-b4-20261027/result.json
STOP at this checkpoint.
