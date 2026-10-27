# NS04 Phase B checkpoint

Status: CHECKPOINTED — Android observation complete; STOP before Phase C. XML/device cases PASS; every PNG still requires coordinator pixel inspection.
Observer: Hermes GPT-6.1 Sol high (device actions); pixels pending coordinator
Run: tools/qwen-supervisor/.runs/sol-ns04-r1-b-20261027/.
Evidence: migration/evidence/NS04/b-device/.

Gate and preservation
- Branch migration/slice-1; HEAD 66655162f7f0d7ad7edded2ec6d86ec2dbe18258; empty index at entry and exit. Evidence directory absent at entry.
- APK 118504855 bytes; SHA-256 98045dd415f05012476aaa0d07c6f8707fc673ff22f369542513c289a14250ff. adb install -r succeeded; installed base.apk has that exact hash.
- NS04 target hashes match a-gates2/preservation-final.json plus final-audit.json changedTargetFiles, including all seven implementation/test paths. No target-hash fallback was needed. Launch baseline used only for immutable NS04 evidence, checkpoints and package. Final preservation: 516 files checked, zero mismatches.
- Package service reported found before other ADB calls. RN01_API36 / emulator-5554 only; dev.translationtest.rn remains installed at its identical path.

Observed results
- B-install PASS.
- B1 PASS: cold schedule shows Conference, 8:00 am and row Favorite buttons. Exactly one upward ListView-bounded swipe. First visible heading 11:00 am; first fully visible session is 6, What's New in Vue, 10:15 am–10:30 am, Hall 3.
- B2 PASS: row-content navigation opens Session with the matching name/time/location, Add to favorites, disabled Share and all five disabled placeholders; no loading/error text in the assertion XML.
- B3 PASS: immediate detail toggle becomes Remove from favorites, selected=true, without a dialog. ActionBar Back returns to ALL SESSIONS with the same heading, row and all visible row bounds/content; no Loading sessions text.
- B4 PASS: session 6 in FAVORITE SESSIONS with Remove; Remove Favorite confirmation has the required message and CANCEL/REMOVE. Cancel retains the row; confirming Remove yields No favorite sessions.
- B5 PASS: first visible row after returning to All is session 1, Breakfast. Favorite Added/OK, Favorite already added/message/CANCEL/REMOVE, cancel retention in favorites mode and confirmation removal to empty all observed. Returned to All before direct-entry tests.
- B6 PASS: cold intent extra 3 opens Ionic Tooling (name independently matched to session-3 in schedule XML); ActionBar Back returns to 8:00 am. Both 9999 and abc show Session not found. with favorite-toggle enabled=false. Final ActionBar Back leaves the schedule foreground in ALL SESSIONS.
- B-logcat PASS: bounded last-400-line PID logcat for B1 PID 7265 and direct-entry PIDs 8230, 8366, 8458. PIDs stable before/after each sequence/log capture. No detected fatal exception/signal pattern; W/E lines preserved verbatim, including CPU variant, HWUI, ashmem deprecation and dialog WindowOnBackDispatcher warnings. Not an exhaustive or warning-free runtime claim.

Evidence and limitations
- 23 PNG/XML assertion pairs, including install and final foreground readback, indexed in capture-index.json. PNG signature, CRC and decompression validated; no pixel inspection claimed by this executor.
- Raw labels are ALL SESSIONS / FAVORITE SESSIONS, matched by case-insensitive substring. automationText appears as resource-id. Search is AutoCompleteTextView and was never tapped; no text input, key events, settings changes or dumpsys input_method.
- Every child command has a receipt and commands.jsonl entry. All ADB calls target emulator-5554 with at most a 30-second timeout. Post-tap polling stayed within 10 seconds; cold-launch readiness took less than 10 seconds as well. Dump retries are bounded at five with two-second waits. Outer terminal driver invocations are separately documented from observed terminal-tool exit codes.
- Initial helper mistook the clipped session-5 bounds at the ListView top for a fully visible row. Before any row tap, the same saved B1-scrolled XML was corrected to the strictly interior session-6 row. Original frame/reference retained; B1-scroll-reference-correction.json explains this evidence-only correction. No extra swipe, relaunch or product change.
- Before/after environment unchanged: sdk_gphone64_x86_64; SDK 36; physical density 420; font_scale 1.0; Night mode no; enabled accessibility services null. Final resumed activity is dev.translationtest.ns/com.tns.NativeScriptActivity, PID 8458.
- Pending: coordinator inspection of every PNG, including privacy/keyboard checks; separately authorized Phase C. No handoff/submission/freeze, review dispatch, delegation, staging, commit, push, rebuild, product/test/config/package edits or fixes. Earlier NS04 history is unchanged. Conference JSON and IDEA.md were not read as text; preservation checks used hashes only.

Results: migration/evidence/NS04/b-device/results-b.json.
Machine result: tools/qwen-supervisor/.runs/sol-ns04-r1-b-20261027/result.json.
