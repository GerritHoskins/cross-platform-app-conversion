NS07 checkpoint F9 — candidate 5 full device repeat

Status: CHECKPOINTED with TrackFilter font-transition FAIL. STOP; not acceptance,
package handoff, submission, freeze or review dispatch. No fix authorized/attempted.
Observer: Hermes GPT-6.1 Sol high (device).
Branch migration/slice-1; HEAD d7a4067e7849f119b937fd3723c389b7b834c71c.
Evidence names below are relative to migration/evidence/NS07/f-device5/.
Only F9 evidence is used for these verdicts. F6/F7/F8 remain immutable history.

Gate / installed candidate

Entry gate PASS before any migration write: exact branch/HEAD, empty index, full
raw --untracked-files=all porcelain allowlist, source diff byte-equal to
f-fix4/fix.diff, candidate size/hash, emulator-5554 device/boot_completed1 and
absent f-device5. entry-gate.json and timed command receipts retain the checks.
Candidate5: 118191268 bytes; SHA-256
f6afb8fd0c5cac73515af4c9ffad26c4ab95cdaa9e22a0810ab8874554a94363.
pm path dev.translationtest.ns then adb-shell sha256sum of its actual base.apk
matched that hash before testing and at final readback. NO INSTALL performed.
install-check.json; final-device-state.json.

Font-scale transitions — mechanical results; visual grade provisional

Page       baseline  1.3    2.0      restored1.0  after-nav   PID / changed
Schedule   PASS      PASS   PASS     PASS         PASS        4110 / no
Detail     PASS      PASS   PASS     PASS         PASS        4569 / no
Filter     PASS      FAIL   BLOCKED  BLOCKED      FAIL        4956 / no

All nine setting writes were read back; captures followed a >=3s wait. All five
Schedule frames expose exactly one enabled/checkable RadioButton checked:
All sessions=true, Favorite sessions=false. All 13 mode checks in this run passed.
Schedule: opened filter, Done returned to Schedule after restore.
University of Ionic detail (session-4): toolbar Back returned after restore.
Frames: F9-FS-<schedule|detail|filter>-<baseline|1.3|2.0|restored|after-nav>.
font-scale-transitions.json and per-frame -identity.json retain PID/window IDs.
Window replacement corroborates native recreation, not an exact JS/native
listener census. PID survival alone is not proof of Activity survival.

TrackFilter failure / blocked subcases

F9-FS-filter-baseline shows the foreground modal. Changing font_scale1.0 ->1.3
returned to Schedule without navigation; F9-FS-filter-1.3 PNG/XML has Conference,
mode controls and schedule rows, not Filter Sessions/Done. No PID change or
required A06 error pattern. The 2.0 and restored captures also show Schedule;
those setting writes succeeded but cannot verify transitions on foreground
TrackFilter, so FS.filter.2.0 and FS.filter.restored are BLOCKED, not PASS.

The font helper stopped with "Target page not retained after restore; navigation
not guessed" (FS.filter.execution BLOCKED). After exact-command-line idle
confirmation, a single recovery tap on fresh XML's enabled Filter sessions Button
[817,422][1048,674], centre(933,548), did not open the modal within10s:
"Expected state timeout F9-FS-filter-recovery-open". No Done node existed and no
Done tap was sent. F9-FS-filter-after-nav captures that actual Schedule state;
FS.filter.after-nav FAIL. Recovery failure is observable; its cause is not proved.
Evidence: F9-FS-filter-{baseline,1.3,2.0,restored,after-nav}.png/.xml,
F9-FS-filter-recovery-open-tap.json, F9-FS-filter-exception.json,
filter-execution-resolution.json, f9-0208-helper-supplement-.stderr.log.
No fix, retry of the same frame label or invented retained-modal success.

G07 spot check — LIMITED pending coordinator pixels

One live yes/no cycle on each already-open page, no navigation within that cycle.
All 12 XML page-retention assertions passed. statusBarInk counts pixels x0..1079,
y20..109 with R+G+B<760; measured, NOT a visual grade. Zero would mean blank.

Page       dark3s dark8s light3s light8s
Schedule   3761   3746   3746    3746
Detail     3746   3746   3746    3746
Filter     4004   4004   4004    4004

Frames: F9-G07-<page>-<dark|light>-<3s|8s>; status-bar-measures.json.
Screenshot requests occurred3007..3016ms and8001..8014ms after settings returned.
PID5481 survived all spot cycles. g07-identities.json retains native window lines.
A separate cold baseline began G07 after the failed modal-reopen state; this is
not substituted for the failed font-transition continuation. Modal Done after the
spot cycle returned normally (F9-postspot-schedule). Night no re-read afterwards.

Regression subset — PASS

R01.schedule: fresh process6256 loaded Breakfast and University of Ionic.
R02.search: input IOnic produced case-insensitive name matches (mounted-row scope).
R02.clear: SearchBar's own Clear query emptied search; unfiltered list restored.
R02.clear-full-list: without another query or cold reset, ten safe vertical swipes
observed every exact fixture name/ID in order:
[1,4,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].
R03.mode-switch: All -> Favorite empty -> All; exactly active mode checked.
R04.detail-toolbar-back: University -> XML-bound toolbar Back -> Schedule.
R04.detail-system-back: University -> fresh XML -> one keyevent4 -> Schedule.
R05.filter-Done: ten checked track Switches, Done -> unchanged Schedule.
R06.favorite-add: Breakfast add/OK -> exactly one Breakfast in Favorite mode.
R07.already-favorite: existing-favorite dialog/Cancel -> one favorite preserved.
R08.favorite-remove: Favorite-mode Remove/confirm -> explicit favorite-empty state.
R09.swipe-reveal: one row revealed its default strip (strip-measurements.json).
R09.swipe-action: computed strip-centre action added Breakfast once, no detail.
F9-R10-final-All restored All mode; no final cold launch was needed.
Frames F9-R<nn>-*; R02-full-list-census.json; results-f9.json.

Verdict correction retained in verdict-adjustments.json: the first clear assertion
incorrectly required identical mounted-row sets before/after search focus and
initially emitted FAIL. The ListView viewport was[0,695][1080,2337] at cold start
and[0,695][1080,1517] after own-clear with IME active: visible rows were the same
prefix, not a different result set. Empty query plus the same-list full20-session
census proves the assigned clear expectation. R02.clear and Regression are PASS;
original emitted result and exact evidence are retained, not erased or rerun.

A06 — PASS for assigned bounded log check, not warning-free

23 windows, PIDs4110/4569/4956/5481/6256, each logcat -d -t 400 --pid=<pid>.
Every window has0/0/0/0/0/0 matches, in order:
cleared object reference; Failed to get Java object; Unhandled error;
Error during execution of native event handler; FATAL; AndroidRuntime.
Font page windows and each transition: all six counts0 on all three PIDs.
The filter's first font change did exercise dismissal/recreation; its later
font changes were on Schedule. Do not infer full retained-modal coverage.
Each window records PID, start/end step, counts, same-snapshot filtered lines and
warnings/errors verbatim. See a06-windows.json and each -logcat.txt,
-patterns-verbatim.txt, -warnings-errors-verbatim.txt. Snapshots are bounded and
can overlap; absence of patterns is not an exhaustive stability/lifetime proof.
No startup failure in F9: all five cold launches reached Schedule on attempt1;
no retry,60s wait or exit-info diagnostic was triggered. The TrackFilter UI
failure is separate from the clean required-pattern scan.

All distinct captured E/F-priority lines, verbatim (no F-priority line):
10-28 17:56:43.716  4110  4110 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-28 17:56:58.203  4110  4110 E ImeBackDispatcher: Ime callback not found. Ignoring unregisterReceivedCallback. callbackId: 197553240
10-28 17:57:03.931  4110  4110 E ImeBackDispatcher: Ime callback not found. Ignoring unregisterReceivedCallback. callbackId: 197553240
10-28 17:57:26.772  4569  4569 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-28 17:58:07.757  4956  4956 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-28 17:58:26.300  4956  4956 E ImeBackDispatcher: Ime callback not found. Ignoring unregisterReceivedCallback. callbackId: 197553240
10-28 17:58:32.033  4956  4956 E ImeBackDispatcher: Ime callback not found. Ignoring unregisterReceivedCallback. callbackId: 197553240
10-28 18:01:01.980  5481  5481 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-28 18:03:58.702  6256  6256 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-28 18:05:35.390  6256  6256 E ImeBackDispatcher: Ime callback not found. Ignoring unregisterReceivedCallback. callbackId: 197553240

a06-unique-errors-verbatim.txt also retains those lines. Other W-priority lines
(CPU-variant, HWUI, Back-dispatch, input-connection, jank and finalizer warnings)
remain verbatim in the per-window files. No unhandled JS/lifecycle exception was
observed; the causal relationship, if any, of native soft logs to modal loss is
not established.

Settings / health / final foreground

Recorded -> tested -> restored and re-read:
font_scale1.0 ->1.3 ->2.0 ->1.0 on each font flow (filter absent after first change).
Night mode:no ->yes ->no on each G07 page; final explicit no, re-read.
All16 setting transactions verified; environment-comparison.json shows every
recorded field equal to step1, no restore failure.
model sdk_gphone64_x86_64; SDK36; physical1080x2400; density420/no override;
density property empty; accessibility services null/accessibility_enabled0;
show_ime_with_hard_keyboard0; default IME unchanged:
com.google.android.inputmethod.latin/com.android.inputmethod.latin.LatinIME.
No density, keyboard preference/menu, IME, TalkBack or other setting change.

Health was recorded at start, before each font-page cold launch, before G07 and
regression (also before their cold baselines), and at end: uptime, full loadavg,
MemAvailable in environment-health.json. Record only, not a product grade.
Start: uptime11min, load0.03/0.52/0.63, MemAvailable773084kB.
Before font pages: load1=0.02/1.90/1.24, MemAvailable767156/575060/564576kB.
Before G07: load1=0.16, MemAvailable594488kB.
Before regression: load1=0.06, MemAvailable562292kB.
End: uptime23min, load0.24/0.33/0.50, MemAvailable562572kB.

F9-final-verified-schedule PNG/XML and final-device-state.json: foreground app
Schedule, light/default sizes, All checked, Favorite unchecked, empty search,
Breakfast visible. Settings.restore PASS; Final.foreground PASS. Candidate5 still
installed. No further device action after final readback.

Input accounting

One keyevent4, only for R04 detail-back after fresh XML; no HOME/other keys.
Only text: input text IOnic once, after SearchBar XML-bounds focus.
No dumpsys input_method, clipboard read or keyboard-menu tap.
33 taps, each target and fresh bounds recorded in taps.json and -tap.json.
Every edge-zone app-control tap:
F9-FS-detail-toolbar-Back: ImageButton Back,[0,128][147,275],centre(74,202).
F9-spot-detail-Back: ImageButton Back,[0,128][147,275],centre(74,202).
F9-R02-own-Clear-query: ImageView Clear query, resource-id
  dev.translationtest.ns:id/search_close_btn,[954,275][1059,398],centre(1007,337).
F9-R04-toolbar-Back: ImageButton Back,[0,128][147,275],centre(74,202).
Permitted F5/F6 XML-centre taps, not gesture exceptions.
Eleven gestures (ten list census swipes, one horizontal reveal), all starting
>=100px from every edge, fresh target/bounds in -gesture.json.
Only outside-XML tap: F9-R09-swipe-action, fresh open-row displacement checked,
then computed revealed-strip centre under NS07's rule; -tap.json retains it.

Tooling / preservation / remaining

Both failing font/recovery helpers completed synchronous exit1. Exact full
Win32_Process CommandLine checks found no earlier run-specific f9-*.mjs executor
before further device commands; receipts/logs retained. No overlapping device
helper, transport/non-TTY failure, orphan or reused frame label. Failures were
recorded, not suppressed; continuation did not relabel an absent modal as PASS.

64 unique PNG/XML pairs decoded and hash-verified; all12 statusBarInk measures
recomputed. Coordinator must inspect EVERY frame and raw screenshot receipt,
including keyboard/clipboard privacy. Executor makes no pixel/privacy PASS and
performed no redaction. All five earlier redaction records remain unchanged.
32,576 earlier evidence/checkpoint/protected files hash-checked unchanged;
checkpoint-audit.json: changed[], unexpected[], missing[], problems[].
Branch/HEAD/index unchanged; source diff byte-equals f-fix4/fix.diff.
Root package-lock.json status-only: never read, hashed, diffed, edited, restored
or staged. IDEA.md contents never read. NS07.md/checklist unchanged.
No product/test/config edit, fix, build, install/uninstall/data clear, reboot,
delegation/review dispatch, staging/commit/push or earlier-record write.

Timed git/adb/helper child receipts contain command,args,cwd,exitCode,startedAt,
durationMs, bounded real stdout/stderr and commands.jsonl entries. Initial outer
terminal envelope timing/separate streams were unavailable and explicitly null
in outer-command-provenance.json; not fabricated. File-tool actions remain in
the session stream. Authored text LF; raw subprocess logs may retain CRLF.

Unresolved: TrackFilter dismissal and inability to reopen after font recreation
require coordinator/human disposition; original-modal2.0/restored transitions
could not be exercised. No fix/rebuild in this phase. Coordinator pixel/privacy
grading of all64 frames remains pending. G07 visual status is LIMITED.
Results: migration/evidence/NS07/f-device5/results-f9.json
Logs: migration/evidence/NS07/f-device5/a06-windows.json
Captures: migration/evidence/NS07/f-device5/capture-index.json
Supervisor: tools/qwen-supervisor/.runs/sol-ns07-r1-f9-20261028/result.json
STOP.
