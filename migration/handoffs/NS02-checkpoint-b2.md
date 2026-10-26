NS02 Phase B2 checkpoint

Status: CHECKPOINTED — B-install, B-launch, B-relaunch and B-logcat PASS for device/XML observation; coordinator pixels pending. STOP before Phase C.
Run: sol-ns02-r1-b2-20261026.
Observer: Hermes GPT-6.1 Sol high (device actions); pixels pending coordinator

Gates / install
  Branch migration/slice-1; full HEAD f2f51ea460d405f4d454f0f8a1a0080a913694d7; index empty. f2f51ea^{tree} and 52ae6de^{tree} both equal 5135a889c931f7df485d164ff6df2b77655944b4.
  Exact Phase A APK: 117584840 bytes; SHA-256 b86e65ac73aa0cda512952234a2aaea01dbcd8621dbcf2655e183222348563db. Installed with -r after package service reported found; installed base.apk has the same hash.
  Eight Phase A target files match: four changed tracked files against a-gates/preservation-final.json; four new integration files against the coordinator-authorized supervisor baseline because the final map omits them. Entry/final receipts identify each source. Final hash-only preservation checked 22396 baseline files with no differences, excluding live supervisor .runs runtime files. Earlier NS02 b-device history remains untouched.

Observations / first-launch helper correction
  B-launch PID 5495; B-relaunch PID 5616. Both saved PNG/XML pairs contain the required diagnostic strings in XML, including the em dash; no detected error-dialog nodes. PNG structure/CRC/decompression checked, not pixels.
  Each first UI dump returned null root; successful file dumps were retrieved with exec-out cat /sdcard/ns02.xml after 2-second retry waits. No /dev/tty transport, PTY workaround or stale dump accepted.
  First launch initially received BLOCKED from the helper: it erroneously expected each diagnostic line in its own text node, but the Label contains both lines, and it included monkey duration in the polling budget. Original records are unmodified. B-launch-disposition.json is the authoritative corrected case result: required content already existed at 17505 ms including monkey; all XML polling after monkey was approximately 13676 ms (rounding uncertainty 2 ms), within the 20000-ms limit. Final poll-3 XML immediately precedes the PNG and is byte-identical to successful poll-2 XML. No third launch or additional device action was used to reassess it. Coordinator should inspect this correction as well as pixels.
  Second-launch required content captured at 7379 ms including monkey. Final activity readback identifies dev.translationtest.ns/com.tns.NativeScriptActivity as resumed; final PID remains 5616. App left in foreground.
  Both logcat -d -t 400 --pid captures exited 0 with no detected fatal exception/signal/uncaught-exception pattern. Seven W/E lines per capture retained verbatim: CPU-variant/HWUI warnings and ashmem deprecation error. Startup frame skips remain in full logs. Not a claim of error-free or exhaustive logs.

Preservation / limits
  Only emulator-5554 / RN01_API36 used. Every adb call has a 30000-ms timeout. Before/after read-only environment unchanged: sdk_gphone64_x86_64, API 36, physical density 420, font scale 1.0, Night mode no, accessibility services null. RN app remains at the identical installed path.
  No product/test/config or coordinator package edits; no settings changes, taps, Back/Home keys, text input or dumpsys input_method. No delegation/review dispatch, formal handoff/submission/freeze, staging, commit or push.
  Two distinct PNGs require coordinator inspection including privacy: B-launch.png and B-relaunch.png. Device/XML PASS does not imply pixel acceptance or final NS02 approval.

Evidence: migration/evidence/NS02/b-device2/results-b2.json, commands.jsonl, per-command receipts/raw streams, B-launch-disposition.json, capture-index.json, packet-audit.json, environment-comparison.json, baseline-preservation.json and foreground-verification.json.
Next: coordinator pixel and checkpoint inspection. No Phase C or NS03 action.
