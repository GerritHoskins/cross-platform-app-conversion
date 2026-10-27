# NS05 Phase B checkpoint

Status: CHECKPOINTED — Android XML/device observations PASS; STOP before Phase C. Every PNG awaits coordinator pixel/privacy inspection.
Observer: Hermes GPT-6.1 Sol high (device actions); pixels pending coordinator
Evidence: migration/evidence/NS05/b-device/.
Run: tools/qwen-supervisor/.runs/sol-ns05-r1-b-20261027/.

Gate and preservation
- Branch migration/slice-1; HEAD 230a054818bc90477d6d0a67fa86d3891d810d12; empty index. Branch/HEAD/index/porcelain captured and gate evaluated before any migration/ write. b-device absent at entry.
- Six NS05 targets match a-gates/preservation-final.json (nativescript + newTargetFiles); no target-hash fallback needed. Final preservation checked 485 files, zero mismatches, including earlier NS05 evidence/checkpoint and coordinator-owned NS05.md.
- Phase A APK unchanged: 118504855 bytes; SHA-256 3a16979e17ee45ea3702babd0864f93b1d4e94acdb5bb0d12f36cd9873842311. adb install -r succeeded; installed base.apk matches that SHA-256.
- Package service found first; RN01_API36 / emulator-5554 only. dev.translationtest.rn remains installed at the identical path.

Observed results
- B-install, B1–B7 and B-logcat PASS; sub-cases and raw values in results-b.json and *-observed.json.
- B1: cold schedule shows Conference / 8:00 am; enabled Filter is beside the mode control, ALL SESSIONS selected.
- B2: Filter Sessions, native ActionBar Close, Tracks, all ten switches in required order and checked, all four buttons. All fit without modal scrolling. Switch automationText is exposed as resource-id; native close is content-desc Close (not Close filter).
- B3: only Ionic off; Deselect All none; Select All all; Reset none, all within the draft modal.
- B4: only Ionic on, Done yields exactly 9:15 am [4,2], 10:00 am [5], matching single-track; session 3 absent. Names: University of Ionic, Getting Started with Ionic, Migrating to Ionic. Every expected row fully visible; mode remains ALL SESSIONS and search stays empty.
- B5: reopen only Ionic; add Design in draft; ActionBar Close preserves single-track; reopen again only Ionic.
- B6: add Design; immediately fresh B6-immediately-before-back.xml proves Filter Sessions and Tracks; exactly one Android Back keyevent 4; single-track preserved; reopen only Ionic.
- B7: Deselect All / Done yields No sessions match your search or filters. and no rows; reopen all unchecked. Select All / Done restores 8:00 am / Breakfast and default-all first rows. Three ListView-bounded upward swipes expose all 20 expected session IDs in order and all eight group headings; three bounded downward swipes return to the top.
- B-logcat: initial/before/after PID 10517. Bounded logcat -d -t 400 --pid=10517 has no detected fatal exception/signal pattern. 72 W/E lines retained byte-for-byte in B-logcat-warnings-errors-verbatim.txt; full raw tail in B-logcat.txt. Includes CPU-variant, HWUI, ashmem deprecation, WindowOnBackDispatcher and Back-dismissal input-disposal warnings. Not warning-free or exhaustive.
- Final foreground readback: schedule, ALL SESSIONS, 8:00 am / Breakfast; dev.translationtest.ns/com.tns.NativeScriptActivity.

Evidence and limits
- 28 PNG/XML assertion pairs indexed in capture-index.json; PNG signatures, CRCs and decompression validated. No executor pixel-inspection claim.
- Every ADB call uses emulator-5554 and a 30-second timeout. Dumps retry at most five times with two-second waits; all recorded polls passed within 10 seconds (maximum about 6.8 seconds). Taps use fresh XML bounds centres; no SearchBar tap, text input, settings changes, Home or other key events; no dumpsys input_method.
- Before/after environment identical: sdk_gphone64_x86_64, SDK 36, physical density 420, font_scale 1.0, Night mode no, enabled accessibility services null.
- One observer-helper ambiguity: Select All also substring-matched Deselect All. It stopped before tapping; candidate disambiguation was corrected only in the helper and resumed at the unexecuted Select All step. Original failure receipt and earlier frames retained; no incorrect tap or product fix.
- Child command receipts and commands.jsonl retained; terminal-tool invocation provenance is separately recorded, with unavailable timing explicitly null rather than fabricated.
- No product/test/config edits, fixes, rebuild, handoff/submission/freeze, review dispatch/delegation, staging, commit or push. NS05.md and earlier history untouched. No conference JSON parsed or IDEA.md contents read; preservation uses hashes only.
- Pending: coordinator inspection of every PNG and separately authorized Phase C. Search-plus-track device typing, iOS, large text and dark mode remain outside this phase.

Results: migration/evidence/NS05/b-device/results-b.json.
Machine result: tools/qwen-supervisor/.runs/sol-ns05-r1-b-20261027/result.json.
STOP at Phase B checkpoint.
