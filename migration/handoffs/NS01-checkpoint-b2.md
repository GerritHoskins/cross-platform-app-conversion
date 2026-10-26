NS01 phase B2 checkpoint

Status: BLOCKED on first-launch evidence completeness; stopped before Phase C.
Run: sol-ns01-r1-b2-20261026. Observer: Hermes GPT-6.1 Sol high (device actions); pixels pending coordinator
Branch migration/slice-1; HEAD 0a4b39b193e9f92411020f14d8c4268ede3ef932; index empty. Entry/final gates: 71 target files match A3 baseline; 261 protected hashes plus IDEA.md match A2 entry; outside nonignored snapshot unchanged; exact A4 APK remains 117561814 bytes / SHA-256 6f1e624bad3943b1c76774afc39d01748b1a1d845e6cf555bb8746af596d8f24.

Cases
  B-install PASS: package service found immediately before install; streamed install Success; pm path and installed base.apk SHA-256 match A4.
  B-launch BLOCKED: PID 4161; initial dumps reported null root, then no XML through unforced shell. Polling 20942 ms exceeded 20000 ms. First PNG has no XML pair; no shell/no-dialog assertion accepted for that launch.
  B-relaunch PASS (XML only; pixels pending): cold launch PID 4385; forced adb shell -tt returned title Conference and body Welcome to the conference app.; no detected error/crash dialog; 6460 ms polling. PNG/XML pair saved.
  B-logcat PASS for capture/no fatal pattern: both -d -t 400 --pid logs saved without suppression. Runtime/emulator warnings, ashmem deprecation error, and startup frame skips retained verbatim in warnings-errors-verbatim.txt. Not an assertion of error-free or exhaustive logs.

Preservation / limits
  RN app remains at identical installed path; no commands changed or opened it. Before/after model sdk_gphone64_x86_64, API 36, physical density 420, font scale 1.0, Night mode no, accessibility null. getprop density/font_scale were empty; wm density and read-only settings font_scale provide values. No settings changes, taps, Back/Home keys, text input or input_method dumps. Every adb call used emulator-5554 and timeout 30000 ms; no timeouts. NS app left running in foreground as last XML capture, final PID unchanged.
  Three PNGs require coordinator inspection: B-launch, B-launch-diagnostic, B-relaunch. First two lack XML; single -t diagnostic did not force a PTY. No XML invented or copied from later frames.
  Receipt-runner-only corrections: CR-CR-LF AVD-name parsing initially falsely reported Wrong AVD; raw receipt and confirmation preserved. Later XML transport used -tt after adb explicitly advised multiple -t flags. Product/test/config files untouched. Initial failed observations remain recorded.
  A4 automatic SDK Platform 36 revision 2 install/license and Gradle 8.14.3 wrapper download are accepted by coordinator under NS01 step 8 and must be recorded in the later handoff. B2 made no SDK/build changes.
  No earlier-run edits, fixes to product/test/config, delegation/review dispatch, handoff/submission/freeze, staging, commit or push. README.md and NS01.md untouched.

Evidence: migration/evidence/NS01/b-device2/results-b2.json, capture-index.json, capture-notes.md, commands.jsonl, logcat-summary.json, final-integrity.json, outside-comparison.json, environment-comparison.json, rn-preservation.json.
Next: coordinator inspects every PNG and determines disposition of missing first-launch XML/bounded timing evidence. No further launch or Phase C performed.
