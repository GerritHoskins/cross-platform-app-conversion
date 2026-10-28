NS07 checkpoint F8 — candidate 5 device check

Status: BLOCKED. STOP at this checkpoint; no acceptance, fix, rebuild, package
handoff, submission, freeze, delegation/review dispatch, staging, commit or push.
Observer: Hermes GPT-6.1 Sol high (device).
Branch migration/slice-1; HEAD d7a4067e7849f119b937fd3723c389b7b834c71c.
Evidence names below are relative to migration/evidence/NS07/f-device4/.

Candidate / gate

Gate PASS before any migration write: full raw --untracked-files=all porcelain,
branch/HEAD, empty index, exact f-fix4/fix.diff, APK size/hash, emulator-5554 device,
boot_completed1, absent f-device4. entry-gate.json and complete command receipts.
Candidate5: 118191268 bytes; SHA-256
f6afb8fd0c5cac73515af4c9ffad26c4ab95cdaa9e22a0810ab8874554a94363.
Installed-before matched candidate4:
68928e565ba6c340d230088d28eb4c19bebb3d0dfc4b36089a02a0951df94e44.
Exactly one adb install -r. Installed hash matched candidate5 immediately after
install and in final readback (install-check.json, final-device-state.json).
No other install/uninstall/data clear. No product/test/config or protected edit.

Font transitions — mechanical checks PASS where completed; pixels provisional

Page       baseline   1.3       2.0       restored1.0   after-nav
Schedule   PASS       PASS      PASS      PASS          PASS
Detail     PASS       PASS      PASS      PASS          PASS
Filter     BLOCKED    BLOCKED   BLOCKED   BLOCKED       BLOCKED

Schedule PID28549 throughout; Detail PID28946 throughout. No PID change on any
completed transition. Native window identities were recorded before/after in
F8-FS-<page>-<stage>-identity.json (detail1.3: -recovered-identity.json);
font-scale-transitions.json retains the identities. Window replacement supports
activity recreation; PID survival does not establish activity survival or an
exact native/JS listener lifecycle. No instrumentation or listener census claim.

Each completed page has five unique PNG/XML pairs:
F8-FS-<schedule|detail>-<baseline|1.3|2.0|restored|after-nav>.
Settings were re-read after each change; captures followed the prescribed3s wait.
All five Schedule captures expose exactly one enabled/checkable RadioButton
checked: All sessions=true, Favorite sessions=false (mode-state-table.json).
After restoring: Schedule opened filter and closed with Done; Detail toolbar Back
returned to Schedule. Both navigation assertions passed. University of Ionic was
the detail entry (session-4); XML-bound taps only.

All completed transition log windows have zero matches for every required pattern:
cleared object reference; Failed to get Java object; Unhandled error;
Error during execution of native event handler; FATAL; AndroidRuntime.
Schedule transition/page windows PID28549: 0/0/0/0/0/0 each.
Detail transition/page windows PID28946: 0/0/0/0/0/0 each.
A06.font-observed PASS is limited to these two pages, not TrackFilter or stability.

A06 FAIL / startup blocker

15 bounded PID windows were collected: logcat -d -t 400 --pid=<pid>, plus separate
same-snapshot pattern-filtered and warnings/errors-verbatim files. Every one has
zero counts for all six patterns (a06-windows.json). This is NOT a clean overall
run: three subsequent cold launches failed to complete startup. Android package
exit-info, not a fabricated fatal-pattern match, establishes the startup ANRs:

PID29395, timestamp2026-10-28 17:08:47.571:
process=dev.translationtest.ns reason=6 (ANR) subreason=0 (UNKNOWN) status=0
importance=100 pss=0.00 rss=96MB description=bg anr: Process ProcessRecord{2f6c72b 29395:dev.translationtest.ns/u0a216} failed to complete startup state=empty trace=/data/system/procexitstore/anr_2026-10-28-17-08-42-227.gz

PID29567, timestamp2026-10-28 17:10:28.562:
process=dev.translationtest.ns reason=6 (ANR) subreason=0 (UNKNOWN) status=0
importance=100 pss=0.00 rss=96MB description=bg anr: Process ProcessRecord{fc455bf 29567:dev.translationtest.ns/u0a216} failed to complete startup state=empty trace=/data/system/procexitstore/anr_2026-10-28-17-10-16-983.gz

PID29788, timestamp2026-10-28 17:13:58.305:
process=dev.translationtest.ns reason=6 (ANR) subreason=0 (UNKNOWN) status=0
importance=100 pss=0.00 rss=95MB description=bg anr: Process ProcessRecord{668d7ac 29788:dev.translationtest.ns/u0a216} failed to complete startup state=empty trace=/data/system/procexitstore/anr_2026-10-28-17-13-50-020.gz

Evidence: startup-anrs.json, final-package-exit-info.txt,
tooling-exited-pid-29395-logcat.txt, tooling-exited-pid-29567-logcat.txt,
final-startup-anr-pid-29788-logcat.txt, plus their warnings/errors-verbatim files.
Warnings include CPU-variant and very slow class-verification/GC messages; retain
those files verbatim. No requested cleared-reference/unhandled-error marker was
observed. Root cause of the startup ANRs is NOT established; no attribution to
F7, host load or the emulator is proved. No fix, restart/reboot, data clear or
extra install attempted. Startup stopped this run before TrackFilter opened.

G07 spot check — BLOCKED, no live-switch captures or pixel measures

Page       dark3s  dark8s  light3s  light8s  statusBarInk
Schedule   BLOCKED BLOCKED BLOCKED  BLOCKED  not measured
Detail     BLOCKED BLOCKED BLOCKED  BLOCKED  not measured
Filter     BLOCKED BLOCKED BLOCKED  BLOCKED  not measured

Startup ANRs prevented the default/light app prerequisite. No night-mode write
was sent. status-bar-measures.json is intentionally an empty array, NOT zero ink
and NOT a visual PASS. No G07 frame exists. The specified ink algorithm is present
in the new helper but was not used to invent measures for missing frames.

Regression subset — BLOCKED before execution

R01 schedule; R02 IOnic search and own Clear query; R03 All -> Favorite -> All;
R04 University detail toolbar Back and system Back; R05 filter Done; R06 favorite
add; R07 already-favorite dialog; R08 Favorite-mode remove; R09 swipe reveal and
action: all BLOCKED by cold-start ANRs. Each subcase has its expected result,
observed blocker and evidence in results-f8.json. The earlier font-flow toolbar
Back and filter Done are not substituted for these unexecuted regression cases.

Settings and final state

environment-before.json -> environment-after.json; environment-comparison.json:
all recorded values equal. No restore failure. Only font_scale changed:
Schedule1.0 ->1.3 ->2.0 ->1.0; Detail1.0 ->1.3 ->2.0 ->1.0, every write re-read.
Night mode: no -> no, never changed. No G07 yes/no writes were executed.
model sdk_gphone64_x86_64 ->same; SDK36 ->36; physical1080x2400 ->same;
wm density Physical density:420 ->same, no override; density property empty ->empty;
font_scale1.0 ->1.0; accessibility services null ->null; accessibility_enabled0 ->0;
show_ime_with_hard_keyboard0 ->0; default IME unchanged:
com.google.android.inputmethod.latin/com.android.inputmethod.latin.LatinIME.
No density, keyboard preference/menu, IME or other settings change; no TalkBack,
HOME, reboot or dumpsys input_method.

Final.foreground BLOCKED: final PID query returned no dev.translationtest.ns PID;
F8-final-actual-state PNG/XML shows com.google.android.apps.nexuslauncher, not
Schedule. Device settings are restored, but the requested final foreground cannot
be claimed. final-device-state.json and tooling-final-startup-attempt.json.

Input accounting

Four XML-bound taps total: Schedule Filter sessions, its Done, University row,
Detail toolbar Back. One edge-zone tap:
F8-FS-detail-toolbar-Back: android.widget.ImageButton, content-desc Back,
bounds[0,128][147,275], centre(74,202), fresh XML recorded in its -tap.json.
Permitted under F5/F6. No outside-XML taps, gestures, keyevents or text input.
In particular no IOnic input was sent: its regression prerequisite was blocked.
The coordinator's harmless-host-clipboard preparation was accepted, not read.

Tooling incidents / preservation

Detail1.3 PNG/XML completed, then adb window identity failed with:
* daemon not running; starting now at tcp:5037
could not read ok from ADB Server
* failed to start daemon
adb.exe: cannot connect to daemon
Exact-command-line Win32_Process probes confirmed no earlier executor f8-*.mjs
helper before any subsequent device command. The first broad probe also listed
the coordinator's viewer.mjs/monitor.mjs; neither was touched. Narrowed probes
excluded those non-executor processes and returned[]. No helper concurrency.
ADB recovered through the next read-only call; Detail/font1.3/PID28946 remained.
Same flow continued at2.0/restored, without repeated frame labels or another1.3
write. Original exception and font-detail-execution-resolution.json are retained;
FS.detail.execution records the resolved initial BLOCKED status explicitly.

The two filter cold starts returned UiTestAutomationBridge null-root errors on
all five retries. A repeated helper's catch also hit a duplicate result guard;
its outer stderr receipt is retained. Exit-info subsequently established ANRs,
so the missing UI was not marked a product PASS or dismissed as XML-only failure.
One final permitted cold launch also failed; no more device changes were made.

11 unique PNG/XML pairs decoded and hash-verified (10 font frames,1 final-state
frame). Visual/layout and privacy grading are provisional for the coordinator,
including every raw screenshot receipt; no executor pixel/privacy PASS/redaction.
31,768 earlier evidence/checkpoint/protected files hash-checked unchanged.
Final branch/HEAD/index stable; native source diff still byte-equals f-fix4/fix.diff;
checkpoint-audit.json has changed[] and unexpected[]. All five redaction records
and all earlier phases preserved. Root package-lock.json status-only, never read,
hashed, diffed, edited, restored or staged. IDEA.md contents never read.

Evidence-producing git/adb children and launched helpers have command/args/cwd/
exit/timing receipts and bounded stdout/stderr logs with commands.jsonl entries.
Initial terminal/discovery/bootstrap envelope timings are unavailable; explicit
nulls/limitations are recorded rather than invented. Authored text LF; raw
subprocess captures may retain CRLF. No product/test/lint/build commands run.

Results: migration/evidence/NS07/f-device4/results-f8.json
Captures: migration/evidence/NS07/f-device4/capture-index.json
Logs: migration/evidence/NS07/f-device4/a06-windows.json
Supervisor: tools/qwen-supervisor/.runs/sol-ns07-r1-f8-20261028/result.json
Unresolved: startup ANR cause/disposition; remaining TrackFilter/G07/regression
checks; final app foreground; coordinator inspection of every frame and privacy.
STOP.
