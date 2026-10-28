NS07 checkpoint F4 — candidate 3 device rerun

Status: BLOCKED checkpoint. STOP; not acceptance, final handoff, submission or freeze.
Observer: Hermes GPT-6.1 Sol high (device).
Branch migration/slice-1; HEAD d7a4067e7849f119b937fd3723c389b7b834c71c.
Evidence paths below are relative to migration/evidence/NS07/f-device2/.

Candidate / scope

Entry gate passed before the first migration write (entry-gate.json).
Candidate 3: 117669928 bytes; SHA-256
0d4c089755b895d09c80fd406aa6c671947691b6124ad9e399d9ff3025cca50e.
Installed-before hash was candidate 2:
5f9f7d1abee8fc49989d666ef1aefce460fc4f8a95c611d6be186e82362d2409.
Exactly one adb install -r; installed hash matched candidate 3 afterwards and
at final readback (install-check.json, final-device-state.json).
No product/test/config edit, fix, rebuild, other install/uninstall/data clear,
delegation/review dispatch, staging/commit/push or package handoff/freeze.

Case outcomes

A05 PASS: installed-copy hash verified.
G05 LIMITED overall: mechanical mode, detail-state and strip checks PASS;
representative layout/text-fit acceptance awaits coordinator pixels.
G07 BLOCKED overall: light, cold dark and six live-switch frames captured;
status-bar/content grade awaits pixels; dark detail-back not executed below.
G01 PASS, provisional surface classification: one Back dismissed the expanded
floating key surface and preserved IOnic and schedule.
G02 LIMITED: query PASS; modes/filter reached; a covered list target was not tapped.
G08 LIMITED: floating keyboard covers list without resize; docked inset keyboard
was not produced. Coordinator decides surface/coverage severity and bar pixels.
Regression BLOCKED overall: own-clear step prohibited below; other assigned
functional steps PASS, including the actual revealed-strip action.
A06 PASS within bounded-log scope; not warning-free or exhaustive stability.
Settings restore / history preservation PASS.
No product FAIL was established by the executor's mechanical assertions.

G05 mode checked-state table

Scale       cold All    empty Favorite    return All    populated Favorite    return All
1.0         true/false  false/true        true/false    false/true            true/false
1.3 rerun   true/false  false/true        true/false    false/true            true/false
2.0         true/false  false/true        true/false    false/true            true/false

Pairs are All/Favorite checked, not selected. Both nodes are enabled=true,
checkable=true, class android.widget.RadioButton. All captured schedule trees
satisfy exactly one checked mode. Further switches are in mode-state-table.json;
all-frame-xml-measurements.json preserves every frame's mode/action text/bounds.
At all three scales: All bounds [32,422][785,548], Favorite [32,548][785,674].
Detail favorite-toggle selected=true after add, false after remove at each scale.
Frames F4-G05-<scale>-detail-added / detail-removed; 1.3 uses -rerun-.

Scale       Favorite strip px    Remove strip px    recycled Favorite px
1.0         252                  252                252
1.3 rerun   260                  261                260
2.0         327                  330                327

Measured from the same row-content right edge closed versus open. Closed rows
return to their closed edge; accessibility-hidden strips remain absent from XML.
Pixels must still confirm text fits, no overlap/gap and readable scaled content.
Each scale includes actual top/scrolled All and populated Favorite lists, filter,
favorite dialog, described University detail/bottom and Favorite/Remove strips.

G07 / blocked navigation

Frames F4-G07-light/dark-<schedule/detail/filter>-live capture both directions
with each page already open; three-second wait, no navigation/reopen between the
setting and frame; PID retained for each pair. Same PID alone is not an independent
activity-recreation proof. Light/cold-dark pages, dark modal Done, favorite dialog
and swipe are also captured. Dark detail opens, but toolbar Back's XML bounds are
[0,128][147,275], centre (74,202), inside the prohibited edge zone. No edge tap
or additional hardware Back was sent. G07.dark.navigation-back BLOCKED:
F4-G07-dark-detail-navigation PNG/XML; F4-G07-navigation-back-restriction.json.
Modal closure used Done; no prohibited edge Close tap was attempted.

Keyboard attempt

F4-K-focused guard against ref-toolbar-menu-x40-y1468.png: mean absolute RGB
pixel difference 0 (<12). One approved edge-exception tap at (95,1513).
F4-K-menu guard against ref-menu-show-onscreen-keyboard-x204-y1320.png: difference
0 (<12). One choice tap at (558,1380). Both reference hashes are in entry-gate.json
and unchanged at final preservation audit.
F4-K-after-choice: expanded Gboard touch area x186..1080,y915..1692; visible IME;
decoded key-area difference from focused frame 21.402569395857988. This supports
an expanded full floating key surface, not a docked keyboard; classification is
provisional pending coordinator pixels. XML exposes no Gboard key nodes.
SearchBar bounds remain [21,289][954,384]; ListView [0,695][1080,2337] before and
after. No inset: floating keys overlap list content. IOnic yields name matches.
Fresh XML, PNG and window evidence preceded G01 Back. Query/schedule survived.
F4-K-return shows the original toolbar reference region at difference 0, with
only the narrow toolbar touch region remaining; no second menu choice/mode change.
Evidence: F4-K-full-keyboard-decision.json, F4-K-surface-measurements.json,
F4-K-before-Back / after-Back / return PNG/XML and window files.
No dumpsys input_method, IME preference changes or clipboard reads.

Regression / remaining BLOCKED

PASS: cold schedule; IOnic visible name matches; All -> Favorite -> All checked
state/dataset; University detail and one system Back; ten-track filter Done;
Breakfast add/acknowledgement, already-favorite Cancel, Favorite-mode confirmed
remove/empty; one default-width swipe reveal and its actual favorite action.
R02.clear BLOCKED: Clear query bounds [954,275][1059,398], centre (1007,337),
inside the prohibited right edge zone. No exception was authorized, so no tap
was sent. A recorded cold reset allowed later tests but is not claimed as an
own-control clear. Evidence: F4-R02-results PNG/XML, F4-R02-clear-target.json.
This is the assigned short subset, not full phase B coverage.

Settings / final state

Recorded -> changed/tested -> restored and re-read:
font_scale 1.0 -> 1.3 / 2.0 -> 1.0.
night no -> yes/no cold and live -> no.
show_ime_with_hard_keyboard 0 -> 1 -> 0.
All environment fields equal step 1 (environment-comparison.json): model
sdk_gphone64_x86_64; SDK36; 1080x2400; physical density420, no override; density
property empty; enabled accessibility services null; accessibility_enabled0;
default IME com.google.android.inputmethod.latin/com.android.inputmethod.latin.LatinIME.
No density change, reboot, HOME, TalkBack or other settings change.
Final foreground: Schedule, All checked, empty query, light/default sizes,
Breakfast visible. Native empty SearchBar XML text equals its hint (including
three leading spaces); its Clear query accessibility node remains present.
Final frame: F4-final-verified-schedule-audit2 PNG/XML.

Input accounting / logs / provenance

Keys: keyevent4 twice, once for the confirmed G01 keyboard, once for the fresh-XML
detail-back regression. No other keys. Text: input text IOnic twice, each after
XML-bounds SearchBar focus. No other strings. Outside XML targets: guarded menu
(95,1513), guarded choice (558,1380), and computed hidden-strip centre (681,941).
The menu tap is the only edge-zone exception used; gestures stay >=100px from
edges. Every force-stop/monkey relaunch is in relaunches.json.
28 bounded PID windows use logcat -d -t 400 --pid=<pid>; no detected fatal/unhandled
pattern or within-window PID change. Verbatim W/E files retain ashmem deprecation,
CPU/HWUI and Back-dispatch messages (A06-log-review.json).

230 PNG/XML pairs hash-checked and decoded; every frame still needs coordinator
pixel/privacy inspection. Eleven original partial 1.3 frames are invalid scale
evidence and explicitly superseded by the complete -1.3-rerun- flow; retained,
not overwritten. TTY transport errors left native helpers running: one initial
orphan was identified/stopped; rerun/theme completion was awaited without retry.
Two audit-helper empty-field assumptions were corrected without device input.
See tooling-incidents.json and original results-f4-incremental-history.json.
Completed child commands have real timed receipts/logs and commands.jsonl lines.
Outer terminal exact timings were not exposed (explicit nulls); an interrupted
orphan child may lack its return-time receipt. This provenance limitation is not
hidden or repaired with invented timing/output (outer-command-provenance.json).
Authored text LF; raw subprocess logs retain native line endings.

All 20807 preservation snapshot files unchanged, including earlier phases,
three redactions, NS07.md/checklist and three components; refs unchanged; source
diff byte-equals f-fix2/fix.diff; index empty. Root package-lock.json was never
read, hashed, diffed, edited, restored or staged. IDEA.md contents never read.

Remaining: resolve the two edge-rule conflicts outside this checkpoint; coordinator
inspect every frame for G05/G07, keyboard and privacy; G02 list/docked-insets remain
limited; outer/in-flight receipt provenance remains limited. No redaction by executor.
Results: migration/evidence/NS07/f-device2/results-f4.json
Captures: migration/evidence/NS07/f-device2/capture-index.json
Supervisor: tools/qwen-supervisor/.runs/sol-ns07-r1-f4-20261028/result.json
STOP.
