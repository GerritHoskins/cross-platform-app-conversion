NS03 Phase B checkpoint

Status: CHECKPOINTED — observation sequence complete; B-launch FAIL on literal mode-label casing; coordinator pixels pending. STOP before Phase C.
Run: sol-ns03-r1-b-20261026.
Observer: Hermes GPT-6.1 Sol high (device actions); pixels pending coordinator

Gate / install
  Branch migration/slice-1; HEAD 533ed4ab41a751b4761af31e43a757f4126e2ea0; index empty.
  Entry evidence directory absent. APK 118504855 bytes, SHA-256 a290b5e9259a573a505dffa7797c5e037f510e2532be184fd3e91eadfcc69ff8.
  Target hashes match a-gates3/preservation-final.json, including implementation and manifest records; no supervisor fallback needed for target files. Supervisor launch baseline used for immutable NS03 history. Entry/final preservation checks: 692 files, zero mismatches.
  Package service reported found before other ADB calls. RN01_API36 / emulator-5554 only. Install -r succeeded; installed base.apk SHA-256 exactly matches Phase A run 3. RN app remains installed at the identical path.

Results
  B-install PASS.
  B-launch FAIL: literal All sessions / Favorite sessions absent from text/content-desc; native labels are ALL SESSIONS / FAVORITE SESSIONS. No acceptance waiver or product fix.
    First valid schedule XML at 14.836 seconds after monkey returned has Conference, Search sessions, 8:00 am and Breakfast. Native search_src_text is android.widget.AutoCompleteTextView, focused="false"; parent layout focused="true". session-1 is exposed as resource-id, not content-desc. No detected loading/error/dialog nodes.
    Original helper falsely omitted the search field (expected EditText class name) and session IDs (omitted resource-id). Original records retained; B-launch-disposition.json documents corrected supporting observations while retaining FAIL for literal casing.
    Third polling dump finished at 20.981 seconds, a 0.981-second overshoot. First successful XML is byte-identical to the assertion frame XML. No relaunch or extra input used to reassess.
  B-scroll PASS: exact last heading 3:00 pm reached after 3 upward swipes, each 400 ms and wholly inside the current ListView bounds.
  B-favorites PASS: SegmentedBar FAVORITE SESSIONS tapped at current XML label-bounds centre; No favorite sessions. present, zero rows.
  B-all PASS: SegmentedBar ALL SESSIONS tapped at current XML label-bounds centre; six session rows visible again, no favorite empty message.
  B-logcat PASS: PID 6565 before/after unchanged. Last 400 PID-filtered log lines retained; no detected fatal pattern. W/E lines saved verbatim, including thread suspension, CPU variant, HWUI and ashmem deprecation messages. This is bounded evidence, not warning-free or exhaustive runtime proof.
  Final activity readback: dev.translationtest.ns/com.tns.NativeScriptActivity resumed. App left foreground in All sessions mode.

Environment / evidence
  Before/after unchanged: sdk_gphone64_x86_64; SDK 36; physical density 420; font_scale 1.0; Night mode no; enabled accessibility services null. No settings writes.
  Four PNG + XML assertion pairs: B-launch, B-scroll, B-favorites, B-all, under migration/evidence/NS03/b-device/.
  Every ADB call uses -s emulator-5554 and a 30-second subprocess timeout. Fresh compressed UI dumps use /sdcard/ns03.xml and exec-out cat; failed initial dumps retried with 2-second waits. Commands, raw streams and receipts retained in commands.jsonl and per-command files.
  Packet audit rechecked 79 command receipts including 60 ADB calls, all evidence paths and the saved frame XML assertions. Counts describe the audit before the finalize-evidence receipt was appended.
  PNG signature, CRC and decompression validated. Executor has no image-viewing tool and makes no visual/no-keyboard claim. Coordinator must inspect every PNG, including keyboard/privacy; XML focused=false is supporting evidence only.

Limits / stop
  Search, no-match and clear remain device-unverified under D5. No text input, SearchBar taps, key events, Back/Home, settings changes or dumpsys input_method.
  No product/test/config or NS03.md edits; earlier evidence/checkpoints preserved. No fixes, delegation, review dispatch, formal handoff/submission/freeze, staging, commit or push.
  Pending: coordinator disposition of literal uppercase labels and disclosed polling overshoot; all four pixel inspections; later separately authorized Phase C. Not review-ready, approved or human-accepted.

Evidence: migration/evidence/NS03/b-device/results-b.json; B-launch-disposition.json; capture-index.json; packet-audit.json; gate.json; preservation-final.json; environment-comparison.json; commands.jsonl.
Machine result: tools/qwen-supervisor/.runs/sol-ns03-r1-b-20261026/result.json
