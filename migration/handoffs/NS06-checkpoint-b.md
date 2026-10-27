# NS06 Phase B checkpoint

Status: CHECKPOINTED — observation results FAIL. STOP before any fixes or Phase C.
Observer: Hermes GPT-6.1 Sol high (device actions); pixels pending coordinator
Evidence: migration/evidence/NS06/b-device/results-b.json
Run: tools/qwen-supervisor/.runs/sol-ns06-r1-b-20261027/

## Gate and preservation

- Branch migration/slice-1; HEAD 96139c00be18030b68e0fa0f14c64a78df853e32; empty index. Branch, HEAD, index and raw porcelain captured and gate evaluated before any migration/ write; b-device absent at entry.
- All three NS06 targets match a-gates/checkpoint-audit.json:allowedTargets. No fallback required. Preservation audit: 507 paths, zero mismatches, including earlier NS06 evidence/checkpoint and coordinator-owned NS06.md; no unexpected porcelain.
- Phase A APK unchanged: 118504855 bytes, SHA-256 5bb29364c308853eac7701ee843f3719ce81722f71b8fc30dedb87b859814a30. adb install -r succeeded; installed base.apk has the identical SHA-256.
- Package service found before other ADB calls. Only RN01_API36 / emulator-5554 used. dev.translationtest.rn remains installed at its identical path.

## Device observations

- B-install and B1 PASS: cold Conference / 8:00 am schedule, ALL SESSIONS selected, Filter enabled, labelled column-1 Favorite buttons present.
- B2 FAIL: fully visible R=session-1, Breakfast. Exact reveal commands: input swipe 767 835 407 835 300, then the one permitted retry at duration 200. Both leave content bounds [0,711][807,960] and child text positions unchanged. Left edge 0 before/after, right edge 807 before/after; no swipe-action-1 in compressed XML. B2-open PNG/XML and both gesture receipts retained.
- B2 dialog/settlement/favorite listing, B3 and B4 BLOCKED by the failed reveal/add prerequisite. No guessed action-panel tap, substitute column-1 favorite tap, or fabricated dialog frame. An independent mode check showed No favorite sessions.; this is NOT successful removal evidence.
- B5 PASS: exactly one input swipe 540 1800 540 900 400 within ListView. First heading/row moved from 8:00 am / session-1 Breakfast to 10:00 am / session-5 Migrating to Ionic. All session content left edges remain 0 and right edges 807; schedule remains foreground, no detail navigation.
- B6 FAIL: fully visible S=session-5, Migrating to Ionic, bounds [0,707][807,956]. Reveal 767 831 407 831 at 300 then 200 ms did not move the row. Open-row tap-to-close/link guard BLOCKED. Independent normal closed-row centre tap opened the matching detail; native ActionBar Back returned to the schedule (both sub-cases PASS). No close tap was pretended or executed on the closed row.
- B7 FAIL: A=session-5; same two prescribed reveals failed. Single-open replacement and right-swipe close BLOCKED; no row B or close gesture executed without an open-row prerequisite.
- B8 FAIL overall: reveal on session-5 and, after switching modes, session-1 each failed at 300 then 200 ms. Mode/track open-row closing therefore BLOCKED. Independent mode switch, Food-only filter, and restoration PASS: Deselect All, Food on, Done showed only Breakfast/session-1 and Lunch/session-12, each with Food; reopen retained Food-only draft; Select All checked all ten tracks; Done restored All sessions / 8:00 am and baseline rows. Intermediate modal frames retained.
- B9 FAIL overall because swipes did not work. Retained labelled column-1 Favorite buttons PASS (e.g. raw content-desc Favorite Breakfast. Favorite). No swipe-action-* nodes exposed in compressed accessibility XML; absence is not proof of a working visual reveal.
- B-logcat PASS within its bounded scope: initial/before/after PID 14651. logcat -d -t 400 --pid=14651 has no detected fatal exception/signal pattern. All 40 W/E lines retained verbatim, including CPU-variant, ashmem deprecation, HWUI and WindowOnBackDispatcher messages. Not warning-free or exhaustive.
- Final frame B11-final: app foreground on the schedule, All sessions, all tracks restored, 8:00 am. No further device actions pending.

## Evidence and limits

- 22 PNG/XML assertion pairs indexed in capture-index.json; PNG CRCs/decompression and XML parsing validated. Every PNG awaits coordinator pixel/privacy inspection; executor makes no pixel approval claim.
- Five attempted reveals, each exactly the prescribed 300 ms gesture plus one 200 ms retry; all ten horizontal gestures failed to produce observable movement. Exact target ids/names, bounds, commands and coordinates are recorded. No cause diagnosed and no extra gesture experiment.
- Every ADB call has emulator-5554 and a 30-second timeout. XML dump retries capped at five with two-second waits. Successful state changes were polled before capture. Procedural limitation: failed readiness polls waited for an in-flight XML dump to finish beyond the 10-second deadline (maximum recorded elapsed 11.467271500005154 seconds); full timings retained in observation-summary.json and individual poll records. No concealed timeout or manufactured success.
- Exact case-insensitive equality used for visible text/content-desc; automationText observed as resource-id. All taps use centres of current XML bounds, including SegmentedBar labels and the detail ActionBar Back button. No SearchBar taps, text input, hardware key events, settings changes or dumpsys input_method.
- Before/after environment identical: sdk_gphone64_x86_64, SDK 36, Physical density 420, font_scale 1.0, Night mode no, enabled accessibility services null. RN package path unchanged.
- Child receipts plus commands.jsonl retained. Initial/outer terminal-tool provenance is identified separately; unavailable tool-level timing is null, not invented.
- Results contain 48 aggregate/sub-cases: 20 PASS, 11 FAIL, 17 BLOCKED. Aggregate cases overlap their sub-cases; these are not independent test totals.
- No product/test/config edits, fixes, rebuild, handoff/submission/freeze, review dispatch/delegation, staging, commit or push. Earlier history and NS06.md unchanged. Conference JSON and IDEA.md not read as text; preservation hashes only.
- Pending coordinator pixel inspection and disposition of failed swipe observation. Hardware Back, keyboard, large text, dark mode, iOS and broader acceptance remain outside this phase.

Machine result: tools/qwen-supervisor/.runs/sol-ns06-r1-b-20261027/result.json
STOP at Phase B checkpoint; no Phase C claim.
