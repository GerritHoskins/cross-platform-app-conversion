# NS06 Phase B run 3 checkpoint

Status: CHECKPOINTED — observation FAIL at B7 close; B8/B9 BLOCKED by the mandatory foreground-loss stop. STOP before fixes or Phase C.
Observer: Hermes GPT-6.1 Sol high (device actions); pixels pending coordinator
Evidence: migration/evidence/NS06/b-device3/results-b.json
Run: tools/qwen-supervisor/.runs/sol-ns06-r1-b3-20261027/

## Gate and preservation

- Branch migration/slice-1; HEAD 96139c00be18030b68e0fa0f14c64a78df853e32; index empty. Branch/HEAD/index/full porcelain captured and gate evaluated before the first migration/ write. b-device3/ and this checkpoint were absent.
- All three targets match a-gates2/final-audit.json:allowedTargets. Entry and post-device audits match all 28,844 launch-baseline hashes; all 2,838 earlier NS06 evidence files and their path set unchanged. Earlier checkpoints and coordinator-owned NS06.md unchanged. Final audit: final-audit.json.
- APK 118504855 bytes, SHA-256 e58c43978bb5ae3c6b632160ee4d5a731c5ad3826e8d76f7debd02773810b341. adb install -r succeeded; installed base.apk has the identical hash. No rebuild.
- Package service reported found first; only RN01_API36 / emulator-5554 used. RN package remains installed at its unchanged path.

## Device observations

- B-install/B1 PASS: cold Conference / 8:00 am schedule, ALL SESSIONS selected, Filter enabled, labelled column-1 Favorite buttons present. An additional mode precheck proved favorites empty before choosing R.
- C1 used exactly: OPEN by right-edge displacement at least 240 px; CLOSED within 10 px of the closed right edge. Left edges recorded only, never asserted. All six reveals succeeded on the first prescribed 300 ms gesture: content right 807 to 555, shift 252 px; left remains clipped at 0. No faster retries needed.
- B2 PASS: R=session-1, Breakfast. Reveal, A1 strip-centre tap (681,836), Favorite Added / OK, closed right edge 807, then R listed in FAVORITE SESSIONS.
- B3 PASS: same R revealed; A1 tap opens Favorite already added with its message and CANCEL/REMOVE. Cancel closes R; favorites mode still lists R.
- B4 PASS: same R in favorites mode revealed; A1 tap opens Remove Favorite. REMOVE yields No favorite sessions.; returned to All.
- B5 PASS: exactly one input swipe 540 1800 540 900 400 inside ListView. First heading/row moves from 8:00 am / Breakfast (session-1) to 10:00 am / Migrating to Ionic (session-5). All visible content right edges 807, left edges 0; still schedule, no detail.
- B6 PASS: S=session-5, Migrating to Ionic. Open-content centre tap (278,818), outside the revealed action, closes S without navigation. Second closed-content centre tap opens the matching Session detail; native ActionBar Back returns to the schedule.
- B7 single-open replacement PASS: A=session-5, Migrating to Ionic; B=session-6, What's New in Vue. Opening B restores A's right edge to 807 while B's becomes 555.
- B7 close FAIL: the exact prescribed input swipe 40 1068 400 1068 300 was executed inside B's current content bounds [0,943][555,1192]. The expected closed schedule did not appear; subsequent XML and activity readback show com.google.android.apps.nexuslauncher/.NexusLauncherActivity foreground. B7-closed.png/xml, B7-stop.json, gesture receipt and all failed poll reads retained. This is an observed outcome, not a product root-cause diagnosis.
- UI sequence stopped at foreground loss. B8 and B9 were NOT executed; no synthetic numbered frames, relaunch or alternative close gesture. Earlier-frame button/accessibility inventory is supplemental only, not a substitute B9 PASS. Final schedule-foreground requirement is unmet (B11-final FAIL) because the stop rule forbids continuing the sequence.
- B-logcat PASS within bounded scope: initial/before/after PID 19786; no detected fatal-exception/signal pattern in logcat -d -t 400 --pid=19786. All 16 W/E lines retained verbatim, including ashmem deprecation, HWUI, CPU-variant and WindowOnBackDispatcher warnings. Not warning-free or exhaustive.
- Before/after environment identical: sdk_gphone64_x86_64; SDK 36; physical density 420; font_scale 1.0; Night mode no; enabled accessibility services null; RN path unchanged.

## Evidence and limits

- 26 PNG/XML pairs indexed in capture-index.json; PNG signatures, chunk CRCs, decompression, XML parsing and pair hashes validated. Every PNG awaits coordinator pixel/privacy inspection, including the inaccessible Favorite/Remove action labels. No executor pixel-approval claim.
- Every ADB call targets emulator-5554 with at most a 30-second timeout. XML dumps use ns06b3.xml, capped at five attempts with two-second retry waits; polling is bounded by a 10-second deadline. The failed B7 poll took 10.022961100010434 seconds including subprocess termination/receipt overhead; raw timing retained.
- Exact case-insensitive text/content-desc equality; automationText exposed as resource-id. A1 action taps record current XML, open/closed right edges and midpoint computations. All other taps use current XML bounds centres. No SearchBar tap, text input, hardware key event, settings change or dumpsys input_method.
- Helper-only exceptions retained: dispatcher lookup before B2 actions; case-record parameter collision after the successful B2 reveal (resumed at the unexecuted action, no repeat gesture); missing-row detail access after B7 foreground loss (failure captured by read-only stop helper). No product fix or concealed retry. Static helper language-server warnings did not prevent actual Python execution.
- Results contain overlapping aggregate/subcase statuses: 26 PASS, 3 FAIL, 10 BLOCKED; not independent test totals. Child receipts and commands.jsonl retain arguments, real timings, stdout/stderr and exits; outer terminal provenance is separately identified without invented timing.
- No product/test/config edits, fixes, rebuild, handoff/submission/freeze, delegation/review dispatch, staging, commit or push. Conference JSON and IDEA.md were not decoded/read as text; preservation was hash-only. All earlier NS06 history immutable.

Pending: coordinator pixel inspection and disposition of the B7 foreground-loss observation; separately authorized continuation if needed. Hardware Back, keyboard, large text, dark mode, iOS and broader acceptance remain outside this phase.
Machine result: tools/qwen-supervisor/.runs/sol-ns06-r1-b3-20261027/result.json
STOP at this checkpoint; no Phase C or package-acceptance claim.
