NS07 checkpoint F11 — candidate 6 device check

Status: CHECKPOINTED. STOP at checkpoint; not package acceptance, handoff, submission, freeze or review dispatch.
Observer: Hermes GPT-6.1 Sol high (device).
Branch migration/slice-1; HEAD d7a4067e7849f119b937fd3723c389b7b834c71c; index empty.
Evidence names below are relative to migration/evidence/NS07/f-device6/.
All visual judgments are provisional; coordinator inspects every PNG and raw screenshot receipt, including privacy.

Gate / sole install

Entry gate PASS before any migration write: exact branch/HEAD, empty index, raw --untracked-files=all allowlist, byte-identical f-fix5/fix.diff, candidate size/hash, emulator-5554 device/boot_completed1, absent f-device6. entry-gate.json; raw porcelain and timed receipts retained.
Candidate6: 118191268 bytes; SHA-256 ca575f8091724a05783bfbbfb086e71a3f2f9ce454a6f2d60d447a6380766593.
Installed candidate5 before the sole adb install -r:
f6afb8fd0c5cac73515af4c9ffad26c4ab95cdaa9e22a0810ab8874554a94363.
pm path then adb-shell sha256sum independently matched candidate6 after install and again at end. install-check.json; final-device-state.json.
No other install, uninstall or data clear.

Filter after font change — a-d PASS (mechanical; no cold recovery)

Part  Sequence / observed                                        PID     patterns
a     open;1.3 -> Schedule;restore;ONE reopen;Done, unchanged       9013    11 x 0
b     Food true->false draft;2.0 -> Schedule/Breakfast visible;
      restore;ONE reopen, all10 checked;toolbar Close returns      9013    11 x 0
c     repeat a, same process, ONE reopen;Done unchanged            9013    11 x 0
d     Food off/Done hides Breakfast;reopen confirms Food off;
      Select All/Done returns all-track top (Breakfast/University) 9013    11 x 0

Same PID9013 throughout a-c and d. No cold launch between filter recreation and reopens. Each reopen used exactly one Filter tap at fresh XML bounds and reached the modal within the10s poll. Native window IDs retained per frame, corroborating recreation; PID survival does not prove Activity survival.
Every switch on reopens a/b/c equals the original ten-track store selection. Food was the changed draft (true -> false). At2.0, Breakfast remained visible before restore, proving this Food draft was not committed. Normal apply hid Breakfast; committed Food-off switch was confirmed before Select All. The later same-list regression census observed all20 sessions.
Frames F11-FF-<a|b|c|d>-*; changed-draft.json; filter-after-font-table.json; results-f11.json.

Tooling BLOCKED, resolved without cold reset (no product FAIL)

FF.b.execution initially BLOCKED: F11-FF-b-Close target count0. The helper queried automationText "Close filter", but native toolbar XML exposes ImageButton content-desc "Close". No Close tap was sent by that failed lookup.
Evidence: filter-font-exception.json; f11-0161-helper-ff-.stderr.log; F11-FF-b-reopen.xml.
Exact full Win32_Process CommandLine inventory confirmed no earlier run helper remained (tooling-idle-confirmations.json; processes[]). Continuation tapped native Close at fresh bounds [0,128][147,275], centre(74,202), then completed b/c/d in PID9013 without repeating a frame or Filter tap. FF.b.execution-resolution PASS; original BLOCKED retained, not overwritten.
No transport/non-TTY failure or overlapping device helper. No other FAIL/BLOCKED.

Font-scale transitions — PASS

Page       baseline 1.3  2.0  restored1.0 after-nav PID / changed
Schedule   PASS     PASS PASS PASS        PASS      10434 / no
Detail     PASS     PASS PASS PASS        PASS      10865 / no

Every setting was read before/write/read back; font captures followed >=3s. All five Schedule frames expose exactly one checked enabled/checkable RadioButton. All 13 mode checks across the run were valid.
Schedule restored -> filter Done -> Schedule. University of Ionic detail restored -> toolbar Back -> Schedule.
Frames F11-FS-<schedule|detail>-<baseline|1.3|2.0|restored|after-nav>; font-scale-transitions.json and per-frame -identity.json.

A06 — PASS for eleven-pattern all-priority bounded scan

36 windows; PIDs 9013/10434/10865/11279/11974. logcat -d -t400 --pid=<pid> *:V captures V/D/I/W/E/F. Every pattern count is0 in every window. Patterns, in order:
cleared object reference; Failed to get Java object; Unhandled error; Unhandled promise rejection; Error during execution of native event handler; NullPointerException; FragmentTransaction; Could not show modal; not attached; FATAL; AndroidRuntime.
All matching lines verbatim: NONE.
All distinct E/F-priority lines verbatim (repetitions retained per window; no F line):
10-28 20:27:38.594  9013  9013 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-28 20:27:58.724  9013  9013 E ImeBackDispatcher: Ime callback not found. Ignoring unregisterReceivedCallback. callbackId: 197553240
10-28 20:28:29.412  9013  9013 E ImeBackDispatcher: Ime callback not found. Ignoring unregisterReceivedCallback. callbackId: 197553240
10-28 20:29:44.097  9013  9013 E ImeBackDispatcher: Ime callback not found. Ignoring unregisterReceivedCallback. callbackId: 197553240
10-28 20:30:36.704 10434 10434 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-28 20:30:51.120 10434 10434 E ImeBackDispatcher: Ime callback not found. Ignoring unregisterReceivedCallback. callbackId: 197553240
10-28 20:30:56.901 10434 10434 E ImeBackDispatcher: Ime callback not found. Ignoring unregisterReceivedCallback. callbackId: 197553240
10-28 20:31:15.071 10865 10865 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-28 20:32:01.461 11279 11279 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-28 20:33:36.269 11974 11974 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-28 20:34:44.974 11974 11974 E ImeBackDispatcher: Ime callback not found. Ignoring unregisterReceivedCallback. callbackId: 197553240

a06-windows.json records PID, start/end steps, all priorities, per-pattern counts and verbatim matches/errors; each -logcat.txt is the same bounded snapshot searched. W lines also retained in -warnings-errors-verbatim.txt. Not warning-free, exhaustive process-lifetime proof or a native stack/leak census.
Window index (each count vector is eleven zeros):
F11-FF-a-open-window PID9013 | F11-FF-a one Filter tap -> F11-FF-a-open | 0/0/0/0/0/0/0/0/0/0/0
F11-FF-a-1.3-window PID9013 | F11-FF-a-1.3 font write -> F11-FF-a-1.3 | 0/0/0/0/0/0/0/0/0/0/0
F11-FF-a-restored-window PID9013 | F11-FF-a-restored font write -> F11-FF-a-restored | 0/0/0/0/0/0/0/0/0/0/0
F11-FF-a-reopen-window PID9013 | F11-FF-a font1.3/restore/one reopen -> F11-FF-a-reopen | 0/0/0/0/0/0/0/0/0/0/0
F11-FF-a-done-window PID9013 | F11-FF-a-open -> F11-FF-a-done | 0/0/0/0/0/0/0/0/0/0/0
F11-FF-b-draft-window PID9013 | F11-FF-b-open -> F11-FF-b-draft | 0/0/0/0/0/0/0/0/0/0/0
F11-FF-b-2.0-window PID9013 | F11-FF-b-2.0 font write -> F11-FF-b-2.0 | 0/0/0/0/0/0/0/0/0/0/0
F11-FF-b-restored-window PID9013 | F11-FF-b-restored font write -> F11-FF-b-restored | 0/0/0/0/0/0/0/0/0/0/0
F11-FF-b-reopen-window PID9013 | F11-FF-b draft/font2.0/restore/reopen -> F11-FF-b-reopen | 0/0/0/0/0/0/0/0/0/0/0
F11-FF-exception-window PID9013 | FF.b -> exception | 0/0/0/0/0/0/0/0/0/0/0
F11-FF-b-closed-window PID9013 | F11-FF-b-open -> F11-FF-b-closed | 0/0/0/0/0/0/0/0/0/0/0
F11-FF-c-open-window PID9013 | F11-FF-c one Filter tap -> F11-FF-c-open | 0/0/0/0/0/0/0/0/0/0/0
F11-FF-c-1.3-window PID9013 | F11-FF-c-1.3 font write -> F11-FF-c-1.3 | 0/0/0/0/0/0/0/0/0/0/0
F11-FF-c-restored-window PID9013 | F11-FF-c-restored font write -> F11-FF-c-restored | 0/0/0/0/0/0/0/0/0/0/0
F11-FF-c-reopen-window PID9013 | F11-FF-c font1.3/restore/one reopen -> F11-FF-c-reopen | 0/0/0/0/0/0/0/0/0/0/0
F11-FF-c-done-window PID9013 | F11-FF-c-open -> F11-FF-c-done | 0/0/0/0/0/0/0/0/0/0/0
F11-FF-d-applied-window PID9013 | F11-FF-d-open -> F11-FF-d-applied | 0/0/0/0/0/0/0/0/0/0/0
F11-FF-d-all-restored-window PID9013 | F11-FF-d normal apply/Select All/Done -> F11-FF-d-all-restored | 0/0/0/0/0/0/0/0/0/0/0
F11-FS-schedule-prepare-previous PID9013 | previous process window -> F11-FS-schedule-prepare before force-stop | 0/0/0/0/0/0/0/0/0/0/0
F11-FS-schedule-1.3-window-old PID10434 | F11-FS-schedule-baseline -> F11-FS-schedule-1.3 | 0/0/0/0/0/0/0/0/0/0/0
F11-FS-schedule-2.0-window-old PID10434 | F11-FS-schedule-1.3 -> F11-FS-schedule-2.0 | 0/0/0/0/0/0/0/0/0/0/0
F11-FS-schedule-restored-window-old PID10434 | F11-FS-schedule-2.0 -> F11-FS-schedule-restored | 0/0/0/0/0/0/0/0/0/0/0
F11-FS-schedule-page-window PID10434 | F11-FS-schedule-baseline -> F11-FS-schedule-after-nav | 0/0/0/0/0/0/0/0/0/0/0
F11-FS-detail-prepare-previous PID10434 | previous process window -> F11-FS-detail-prepare before force-stop | 0/0/0/0/0/0/0/0/0/0/0
F11-FS-detail-1.3-window-old PID10865 | F11-FS-detail-baseline -> F11-FS-detail-1.3 | 0/0/0/0/0/0/0/0/0/0/0
F11-FS-detail-2.0-window-old PID10865 | F11-FS-detail-1.3 -> F11-FS-detail-2.0 | 0/0/0/0/0/0/0/0/0/0/0
F11-FS-detail-restored-window-old PID10865 | F11-FS-detail-2.0 -> F11-FS-detail-restored | 0/0/0/0/0/0/0/0/0/0/0
F11-FS-detail-page-window PID10865 | F11-FS-detail-baseline -> F11-FS-detail-after-nav | 0/0/0/0/0/0/0/0/0/0/0
F11-spot-prepare-previous PID10865 | previous process window -> F11-spot-prepare before force-stop | 0/0/0/0/0/0/0/0/0/0/0
F11-spot-schedule-window PID11279 | F11-spot-schedule-before -> F11-G07-schedule-light-8s | 0/0/0/0/0/0/0/0/0/0/0
F11-spot-detail-window PID11279 | F11-spot-detail-before -> F11-G07-detail-light-8s | 0/0/0/0/0/0/0/0/0/0/0
F11-spot-filter-window PID11279 | F11-spot-filter-before -> F11-G07-filter-light-8s | 0/0/0/0/0/0/0/0/0/0/0
F11-spot-final-window PID11279 | step3 -> modal Done / restored no | 0/0/0/0/0/0/0/0/0/0/0
F11-R01-prepare-previous PID11279 | previous process window -> F11-R01-prepare before force-stop | 0/0/0/0/0/0/0/0/0/0/0
F11-R-regression-window PID11974 | F11-R01-cold-schedule -> F11-R10-final-All | 0/0/0/0/0/0/0/0/0/0/0
F11-final-log-window PID11974 | F11-R01 cold launch -> F11-final-verified-schedule | 0/0/0/0/0/0/0/0/0/0/0

G07 live spot check — LIMITED until coordinator pixels

One live yes/no cycle per already-open Schedule/detail/filter, no navigation within each cycle. All12 XML page-retention assertions passed.
statusBarInk: x0..1079,y20..109; decoded PNG pixels whose R+G+B<760. Recorded, not a grade.0 would mean blank.
Page       dark3s dark8s light3s light8s
schedule   4020   4020   4020   4020   
detail     4020   4020   3950   3950   
filter     3962   3962   3897   3897   

Frames F11-G07-<page>-<dark|light>-<3s|8s>; status-bar-measures.json. Screenshot request delays 3003..8011ms; actual per-frame timings retained. Night no explicitly restored/re-read; post-modal Schedule captured.

Regression subset — PASS

R01.schedule: PASS
R02.search: PASS
R02.clear: PASS
R02.clear-full-list: PASS
R03.mode-switch: PASS
R04.detail-toolbar-back: PASS
R04.detail-system-back: PASS
R05.filter-Done: PASS
R06.favorite-add: PASS
R07.already-favorite: PASS
R08.favorite-remove: PASS
R09.swipe-reveal: PASS
R09.swipe-action: PASS
R01 cold schedule loaded Breakfast/University. R02 IOnic yielded mounted name matches; own Clear query emptied search; five safe list swipes on that same list observed all20 exact names/IDs in fixture order without cold reset or another query. IME can reduce viewport; clear is checked by empty query/top prefix plus full census, not identical mounted counts.
Census: [1,4,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].
R03 All -> Favorite empty -> All, exactly active mode checked. R04 University detail returned through toolbar Back, then separately one system Back after fresh XML. R05 Done returned with ten checked tracks unchanged. R06 add/OK produced one Breakfast favorite; R07 already-favorite dialog Cancel preserved it; R08 Favorite-mode Remove/confirm produced explicit empty. R09 swipe opened 252px strip; computed-centre action added Breakfast once without detail navigation.
Frames F11-R<nn>-*; R02-full-list-census.json; results-f11.json.

Settings / health / final foreground

Changed only font_scale and night mode. Recorded -> tested -> restored and re-read:
font_scale1.0 ->1.3 ->1.0 (a); ->2.0 ->1.0 (b); ->1.3 ->1.0 (c); Schedule and detail each1.0 ->1.3 ->2.0 ->1.0.
Night no ->yes ->no on Schedule/detail/filter, final explicit no. All 19 setting transactions verified.
Every step1 field equals final readback (environment-comparison.json):
model: "sdk_gphone64_x86_64" -> "sdk_gphone64_x86_64"; equal=true
sdk: "36" -> "36"; equal=true
size: "Physical size: 1080x2400" -> "Physical size: 1080x2400"; equal=true
density: "Physical density: 420" -> "Physical density: 420"; equal=true
densityProperty: "" -> ""; equal=true
fontScale: "1.0" -> "1.0"; equal=true
night: "Night mode: no" -> "Night mode: no"; equal=true
accessibilityServices: "null" -> "null"; equal=true
accessibilityEnabled: "0" -> "0"; equal=true
hardKeyboardIme: "0" -> "0"; equal=true
defaultIme: "com.google.android.inputmethod.latin/com.android.inputmethod.latin.LatinIME" -> "com.google.android.inputmethod.latin/com.android.inputmethod.latin.LatinIME"; equal=true

No density, show_ime_with_hard_keyboard, IME, keyboard-menu, accessibility/TalkBack or other setting change; no reboot.
Health at start, before assigned steps/substeps and at end: uptime, loadavg, MemAvailable, record only. environment-health.json (41 observations).
Start: 20:26:16 up  2:41,  0 users,  load average: 0.00, 0.00, 0.00; 0.00 0.00 0.00 1/2531 8801; MemAvailable:     565516 kB.
End: 20:37:40 up  2:52,  0 users,  load average: 1.12, 0.74, 0.43; 1.12 0.74 0.43 1/2581 14014; MemAvailable:     582492 kB.
5 cold launches all reached Schedule on attempt1; no30s failure/exit-info/60s retry triggered.
Final.all-tracks PASS (ten checked switches); Final.foreground PASS: foreground Schedule, light/default size, All checked, Favorite unchecked, empty search. F11-final-all-tracks and F11-final-verified-schedule PNG/XML; final-device-state.json. No further device changes after final readback.

Input accounting

One keyevent4, detail-back regression only after fresh XML. No HOME or other key.
Only text: input text IOnic once into SearchBar after XML-bounds focus. No dumpsys input_method or clipboard read.
All 49 taps record target node, bounds, point and fresh XML in taps.json/-tap.json. Edge-zone app-control taps (permitted F5/F6):
F11-FF-b-Close-native: android.widget.ImageButton text="" desc="Close" id="" bounds=[0,128][147,275] centre(74,202).
F11-FS-detail-toolbar-Back: android.widget.ImageButton text="" desc="Back" id="" bounds=[0,128][147,275] centre(74,202).
F11-spot-detail-Back: android.widget.ImageButton text="" desc="Back" id="" bounds=[0,128][147,275] centre(74,202).
F11-R02-own-Clear-query: android.widget.ImageView text="" desc="Clear query" id="dev.translationtest.ns:id/search_close_btn" bounds=[954,275][1059,398] centre(1007,337).
F11-R04-toolbar-Back: android.widget.ImageButton text="" desc="Back" id="" bounds=[0,128][147,275] centre(74,202).
6 gestures (five vertical census swipes, one horizontal reveal), all start >=100px from every edge; -gesture.json.
Sole outside-XML tap: F11-R09-swipe-action, computed revealed-strip centre after fresh open-row displacement check; -tap.json records calculation.

Evidence / preservation / remaining

78 unique PNG/XML pairs decoded, hashes verified and raw screenshot receipt bytes compared; all12 statusBarInk values recomputed. No reused frame label. Coordinator must inspect EVERY frame and raw screenshot receipt for pixels and keyboard/clipboard privacy; executor makes no privacy PASS and performed no redaction.
All 35013 earlier evidence/checkpoint/protected files hash-checked unchanged, including all six redaction records. checkpoint-audit.json: changed[],unexpected[],missing[],problems[]; source diff byte-equals f-fix5/fix.diff.
NS07.md/checklist unchanged. Root package-lock.json status-only: never read, hashed, diffed, edited, restored or staged. IDEA.md contents never read.
No product/test/config edit, fix, build, package handoff/submission/freeze, delegation/review dispatch, staging/commit/push.
Timed child command receipts contain command,args,cwd,exitCode,startedAt,durationMs and bounded stdout/stderr with commands.jsonl. Initial outer terminal timing/separate streams unavailable, explicitly null in outer-command-provenance.json; not invented. File-tool writes remain in session stream. Authored text LF; raw subprocess logs may retain CRLF.
Unresolved: coordinator pixel/privacy inspection of all78 frames, including keyboard frames. Visual G07 LIMITED until inspection. No unresolved product failure in the assigned mechanical checks; the resolved tooling BLOCKED remains explicitly recorded.
Results: migration/evidence/NS07/f-device6/results-f11.json
Logs: migration/evidence/NS07/f-device6/a06-windows.json
Captures: migration/evidence/NS07/f-device6/capture-index.json
Supervisor: tools/qwen-supervisor/.runs/sol-ns07-r1-f11-20261028/result.json
STOP.
