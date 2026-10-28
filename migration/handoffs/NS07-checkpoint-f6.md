NS07 checkpoint F6 — candidate 4 device rerun

Status: CHECKPOINTED with A06 FAIL. STOP; not acceptance, final handoff,
submission, freeze or review dispatch.
Observer: Hermes GPT-6.1 Sol high (device).
Branch migration/slice-1; HEAD d7a4067e7849f119b937fd3723c389b7b834c71c.
Evidence below is relative to migration/evidence/NS07/f-device3/.

Candidate / gate

Entry gate passed before any migration write: branch, HEAD, empty index, full raw
--untracked-files=all porcelain allowlist, exact F5 cumulative source diff, APK
size/hash, emulator-5554 device/boot1 and absent f-device3 (entry-gate.json).
Candidate4: 118191269 bytes; SHA-256
68928e565ba6c340d230088d28eb4c19bebb3d0dfc4b36089a02a0951df94e44.
Installed-before was candidate3:
0d4c089755b895d09c80fd406aa6c671947691b6124ad9e399d9ff3025cca50e.
Exactly one adb install -r; installed-copy hash matched candidate4 after install
and at final readback (install-check.json, final-device-state.json).
No product/test/config edit, fix, rebuild, other install/uninstall/data clear,
delegation/review dispatch, staging/commit/push, handoff/submission/freeze.

Per-case outcome

A05 PASS: one replace-install, installed hash verified.
G07 LIMITED: all required live/cold/navigation captures and mechanical assertions
completed; statusBarInk is a recorded measure, NOT a pixel grade. No live sample
has ink0. Coordinator pixel/privacy inspection decides visual acceptance.
G05 LIMITED: mode checked states, detail selected states and strip displacement
checks PASS at1.0/2.0; visual/layout/text-fit grade awaits coordinator pixels.
Regression PASS: every assigned functional step, including dark toolbar Back,
SearchBar own Clear query and the complete restored20-session list, was exercised.
A06 FAIL: two bounded process windows contain unhandled pageUnloaded errors,
detailed below. No fatal-crash marker was found; this is not a warning-free run.
Settings.restore PASS; Final.foreground PASS; Preservation PASS.
Tooling.outer-provenance LIMITED: exact outer terminal timing/streams unavailable;
actual git/adb child receipts are complete. No unresolved device-execution BLOCKED.

G07 live table — statusBarInk

Count: pixels x0..1079, y20..109 with R+G+B<760. Zero means blank, not a grade.
Current F6 prompt's THREE yes/no cycles with3s/8s captures supersede the different
five-cycle/early-frame recommendation in F5 notes. No navigation between each
page's baseline and its12 live frames. Screenshot requests started3002..3016ms
and8001..8016ms after the setting command returned (actualDelayMs in JSON).
Each frame has its own PNG/XML; frame timestamp is host screenshot-request time.

Frame                                      statusBarInk
F6-G07-schedule-c1-dark-3s                   3976
F6-G07-schedule-c1-dark-8s                   3874
F6-G07-schedule-c1-light-3s                  3874
F6-G07-schedule-c1-light-8s                  3874
F6-G07-schedule-c2-dark-3s                   3874
F6-G07-schedule-c2-dark-8s                   3874
F6-G07-schedule-c2-light-3s                  3874
F6-G07-schedule-c2-light-8s                  3874
F6-G07-schedule-c3-dark-3s                   3874
F6-G07-schedule-c3-dark-8s                   3874
F6-G07-schedule-c3-light-3s                  3874
F6-G07-schedule-c3-light-8s                  3874
F6-G07-detail-c1-dark-3s                     3942
F6-G07-detail-c1-dark-8s                     3942
F6-G07-detail-c1-light-3s                    3942
F6-G07-detail-c1-light-8s                    3942
F6-G07-detail-c2-dark-3s                     3942
F6-G07-detail-c2-dark-8s                     3942
F6-G07-detail-c2-light-3s                    3942
F6-G07-detail-c2-light-8s                    3872
F6-G07-detail-c3-dark-3s                     3884
F6-G07-detail-c3-dark-8s                     3884
F6-G07-detail-c3-light-3s                    3884
F6-G07-detail-c3-light-8s                    3819
F6-G07-filter-c1-dark-3s                     3779
F6-G07-filter-c1-dark-8s                     3779
F6-G07-filter-c1-light-3s                    3779
F6-G07-filter-c1-light-8s                    3954
F6-G07-filter-c2-dark-3s                     3957
F6-G07-filter-c2-dark-8s                     3957
F6-G07-filter-c2-light-3s                    3957
F6-G07-filter-c2-light-8s                    3957
F6-G07-filter-c3-dark-3s                     3957
F6-G07-filter-c3-dark-8s                     3957
F6-G07-filter-c3-light-3s                    3957
F6-G07-filter-c3-light-8s                    3957

Light baselines: F6-G07-light-baseline-<schedule/detail/filter>.
Cold dark: F6-G07-dark-cold-<schedule/detail/filter>, each after a fresh process.
All48 G07 frames have measures in status-bar-measures.json. Each page retained
its PID, ActivityRecord and app Window identities across its live switches;
G07-window-identity-summary.json includes both dialog and underlying activity for
filter. This is stronger corroboration than PID alone, not JS Page instrumentation.

After filter cycles: Done -> Schedule captured; reopen captured; Close -> Schedule
captured. F6-G07-filter-postcycles-{schedule,reopened,closed-schedule}.
Dark detail toolbar Back PASS: University of Ionic opened from session-4; XML-bound
Back returned to Schedule. F6-G07-dark-detail-back-before / -after.
Dark filter Done PASS: F6-G07-dark-cold-filter / F6-G07-dark-filter-Done-after.

G05 spot checks

Scale   frame suffix     All.checked   Favorite.checked
1.0     cold             true          false
1.0     favorite         false         true
1.0     all              true          false
2.0     cold             true          false
2.0     favorite         false         true
2.0     all              true          false

Frame prefix: F6-G05-<scale>-. Both nodes at every checkpoint are enabled=true,
checkable=true, class android.widget.RadioButton; exactly one checked. Text is
All sessions / Favorite sessions. Bounds at both scales:
All [32,422][785,548]; Favorite [32,548][785,674]. Full nodes: mode-state-table.json.
Detail favorite-toggle selected=true after add, false after remove at both scales;
F6-G05-<scale>-detail-added / -detail-removed. Scale2.0 required one safe detail
scroll to reach the button. Representative filter/Done frames also captured.

Scale   row displacement / strip px   dark-ink bounding width px
1.0     252                          127
2.0     327                          234

F6-G05-<scale>-strip PNG/XML and -strip.json; strip-text-measures.json. Ink bounds
use R+G+B<400 within the revealed strip, trimming16px vertically. They corroborate
space around the text, not guaranteed glyph-only segmentation or visual grading.
Closed-row taps restored the right edge within10px. Coordinator must inspect text
fit/layout; hidden swipe-action nodes remain absent from XML as designed.

Regression expected -> observed (PASS throughout)

R01.schedule: cold schedule -> Breakfast and University rows loaded.
R02.search: IOnic -> mounted case-insensitive name matches.
R02.clear: own Clear query -> empty query, original unfiltered top rows; no reset.
R02.clear-full-list: repeated own clear -> all20 fixture names/IDs observed in order
by four safe list swipes, empty query throughout, no intervening cold reset:
[1,4,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].
R03.mode-switch: All -> Favorite empty -> All, exactly active mode checked.
R04.detail-toolbar-back: University -> XML-bound toolbar Back -> Schedule.
R04.detail-system-back: University -> fresh XML -> keyevent4 -> Schedule.
R05.filter-Done: ten checked tracks -> Done -> Schedule unchanged.
R06.favorite-add: Breakfast add/acknowledge -> single Breakfast in Favorite mode.
R07.already-favorite: duplicate dialog/Cancel -> same single favorite retained.
R08.favorite-remove: Favorite-mode Remove/confirm -> explicit favorite-empty state.
R09.swipe-reveal: one row ->252px open strip.
R09.swipe-action: computed strip-centre tap -> one Breakfast favorite, no detail.
Frames F6-R<nn>-*; full-list follow-through F6-R02-full-* and R02-full-list-census.json.
This is the assigned subset, not a rerun of every Phase B case.

A06 FAIL — no fixes authorized or attempted

22 bounded PID snapshots: logcat -d -t 400 --pid=<pid>. Raw logs and separate
warnings/errors-verbatim files retained. Two FAIL windows (plus aggregate A06):

F6-G05-2.0-cold-previous-logcat.txt:101-104, PID24334:
10-28 14:59:19.158 24334 24334 E JS      : CONSOLE ERROR: Error during execution of native event handler: Error: Failed to get Java object by ID. id=1641, class=android/view/ViewTreeObserver. com.tns.NativeScriptException: Attempt to use cleared object reference id=1641
10-28 14:59:19.159 24334 24334 W JS      : CONSOLE WARN: [Vue warn]: Unhandled error during execution of app errorHandler

F6-R01-cold-previous-logcat.txt:101-104, PID25058:
10-28 15:00:39.371 25058 25058 E JS      : CONSOLE ERROR: Error during execution of native event handler: Error: Failed to get Java object by ID. id=1088, class=android/view/ViewTreeObserver. com.tns.NativeScriptException: Attempt to use cleared object reference id=1088
10-28 15:00:39.371 25058 25058 W JS      : CONSOLE WARN: [Vue warn]: Unhandled error during execution of app errorHandler

Both stacks include pageUnloaded at bundle.mjs:586:49. These windows were collected
after font_scale set/restore, before the next cold launch. Earlier same-process
snapshots had no such error. This establishes the observed boundary, not a proved
root cause. PIDs survived the logged windows; subsequent UI flows completed. No
FATAL EXCEPTION/Fatal signal marker; do not confuse the original detectedFatal
field (which also matches unhandled errors) with proof of a fatal process crash.
A06-log-review.json records all windows. CPU variant, ashmem pinning deprecation,
HWUI/image decoding, Back-dispatch and jank warnings remain verbatim in evidence.

Settings / final state

Step1 recorded -> tested -> restored and re-read:
font_scale 1.0 ->2.0 ->1.0; night Night mode: no ->yes/no ->Night mode: no.
All28 settings transactions verified. Every recorded environment field equals
step1 (environment-comparison.json). No restore failed.
Unchanged: model sdk_gphone64_x86_64, SDK36,1080x2400, physical density420/no override,
density property empty; accessibility services null, accessibility_enabled0;
show_ime_with_hard_keyboard0; default IME
com.google.android.inputmethod.latin/com.android.inputmethod.latin.LatinIME.
No density, keyboard preference/menu, IME or other settings change; no TalkBack,
HOME, reboot or dumpsys input_method. Final F6-final-verified-schedule PNG/XML:
foreground Schedule, light/default sizes, All checked, Favorite unchecked, empty
search (native XML text equals hint), Breakfast visible; installed candidate4.

Input accounting / edge-zone taps

Only key: one keyevent4 for R04 detail-back, after fresh XML. No other keys.
Only text: input text IOnic twice, each after SearchBar XML-bounds focus; second
use completes the restored full-list census. No clipboard read or menu tap.
Nine gestures; each started >=100px from every edge. Every tap target/fresh XML
is recorded in taps.json and its individual -tap.json. Sole outside-XML tap:
F6-R09-swipe-action, computed revealed-strip centre (not a keyboard/system target).

Every edge-zone tap, each at its fresh XML node centre:
F6-G07-filter-postcycles-Close-continuation: ImageButton Close,
  bounds [0,128][147,275], centre(74,202).
F6-G07-dark-detail-toolbar-Back: ImageButton Back,
  bounds [0,128][147,275], centre(74,202).
F6-G05-1.0-detail-toolbar-Back: ImageButton Back,
  bounds [0,128][147,275], centre(74,202).
F6-G05-2.0-detail-toolbar-Back: ImageButton Back,
  bounds [0,128][147,275], centre(74,202).
F6-R02-own-Clear-query: ImageView Clear query, resource-id
  dev.translationtest.ns:id/search_close_btn, bounds [954,275][1059,398], centre(1007,337).
F6-R04-toolbar-Back: ImageButton Back,
  bounds [0,128][147,275], centre(74,202).
F6-R02-full-own-Clear-query: ImageView Clear query, resource-id
  dev.translationtest.ns:id/search_close_btn, bounds [954,275][1059,398], centre(1007,337).
These app-control taps are explicitly permitted by the F5/F6 decision.

Tooling / preservation / remaining

One completed helper exited1 after all filter live frames: selector Close filter
had no XML hit, so no tap was sent. XML exposes Close. Exact-command-line process
query returned[] before continuation; Close then succeeded. No device helper
concurrency, orphan, transport/non-TTY failure, reused label or invalid frame.
Original exception retained; final G07.execution.filter records its resolution
(tooling-incidents.json, tooling-idle-confirmation.json).

107 unique PNG/XML pairs decoded and hash-verified;36 live samples,48 total G07
measures recomputed. All earlier28237 preservation files unchanged, including all
four redactions, phase records, NS07.md/checklist and three components. Final
source diff byte-equals f-fix3/fix.diff; branch/HEAD/index unchanged. Root
package-lock.json was status-only: never read/hashed/diffed/edited/restored/staged.
IDEA.md contents never read. Authored text LF; raw subprocess logs may retain CRLF.

All evidence-producing child commands have timed command/args/cwd/exit receipts,
bounded stdout/stderr logs and commands.jsonl entries. Outermost terminal timing
and separate streams were not exposed: explicit null timing fields and bounded
real-output excerpts, not invented measurements (outer-terminal-ledger.json).

Outstanding: A06 unhandled lifecycle failure requires coordinator/human disposition;
coordinator inspects every PNG, including raw screenshot receipts, for G05/G07 and
privacy. No executor visual/privacy PASS, redaction, fix or review dispatch.
Results: migration/evidence/NS07/f-device3/results-f6.json
Captures: migration/evidence/NS07/f-device3/capture-index.json
Supervisor: tools/qwen-supervisor/.runs/sol-ns07-r1-f6-20261028/result.json
STOP.
