NS07 checkpoint F2 — candidate 2 device rerun

Status: BLOCKED checkpoint. STOP; not acceptance, final handoff, submission or freeze.
Observer: Hermes GPT-6.1 Sol high (device).
Branch migration/slice-1; HEAD d7a4067e7849f119b937fd3723c389b7b834c71c.

Candidate / gate

All exact entry checks passed before the first migration write. Candidate 2:
117668721 bytes; SHA-256
5f9f7d1abee8fc49989d666ef1aefce460fc4f8a95c611d6be186e82362d2409.
Installed copy initially had candidate 1's hash. One adb install -r was performed;
installed hash matched candidate 2 immediately afterwards and at final readback.
Evidence: f-device/entry-gate.json, install-check.json, preservation-final.json.
No rebuild, other install, uninstall, data clear or product/test/config edit.

Case outcomes

G05 FAIL for selected-mode accessibility state; layout grading remains LIMITED.
At accepted font scales 1.0, 1.3 and 2.0, the settled runs captured true top and
actual scrolled positions in All and Favorite modes, described session detail
and bottom controls, filter, favorite dialog and revealed swipe. All three
revealed strips measured 252 px from the row-content right-edge displacement.
Both mode Buttons retain selected=true after switching, although the dataset
switch works. This violates the required accurate selected-mode state; no fix
was attempted. Cold launch initially exposes Favorite sessions enabled=false
in XML, despite the subsequently successful touch interaction; raw flags remain.
Measurements: f-device/G05-all-scale-xml-measurements.json.
Failure evidence, PNG/XML pairs:
  F2-G05-1.0-settled-all-top / favorites-top
  F2-G05-1.3-settled2-all-top / favorites-top
  F2-G05-2.0-settled-all-top / favorites-top
  F2-R03-favorites-empty / all-return
The five FAIL ledger entries describe this one observed state defect, not five
independent product defects. G05-1/G05-2 clipping acceptance awaits coordinator
pixels; XML geometry is not visual proof.

G07 LIMITED, provisional: light, cold-dark and live light/dark/light captured on
Schedule, SessionDetail and TrackFilter. Dark navigation, filter Close/reopen/
Done, favorite dialogs and swipe also captured. Live switches retained PID32359,
with no relaunch during that segment. G07-1 status-bar visibility must be graded
from pixels by the coordinator; no executor visual or contrast approval.
Frames: F2-G07-light-retry1-*, dark-cold-*, live-dark-* and live-light-*.
Evidence: f-device/G07-live-process.json and results-f2.json.

G01/G02/G08 BLOCKED: show_ime_with_hard_keyboard 1 was accepted and SearchBar
focused, but compressed XML exposed no Gboard nodes. This executor had no image
view tool, and no coordinator visible-control coordinates were supplied after
the request. Local OCR lookup also found no tesseract on PATH; nothing installed.
The authorized More -> Show on-screen keyboard choice was NOT reached. The
surface is UNCONFIRMED by the executor, not assumed to be the prior run's toolbar.
No blind menu tap, full-keyboard claim, keyboard Back or keyboard text was sent.
Coordinator must classify the PNG and supply the visible target for a new attempt.
Evidence, PNG/XML: F2-K-focused-surface,
F2-K-awaiting-visible-menu-coordinates, F2-K-restored-surface;
f-device/F2-K-attempt-summary.json and F2-K-ocr-capability.json.
No Gboard preference/mode change was made; return surface also needs pixels.

Short regression: PASS for schedule load, IOnic name-search and own clear control,
All -> Favorite -> All dataset switching, University of Ionic detail / one system
Back, filter with ten selected tracks / Done, Breakfast add / acknowledgement,
already-favorite dialog / Cancel, Favorite-mode Remove / confirmation / empty,
and one swipe reveal. R03.mode-accessibility FAIL as above. This is the assigned
short subset, not a claim of full phase B re-execution or full result enumeration.
Frames: F2-R01-* through F2-R10-*; exact expected/observed in results-f2.json.

A06 PASS in bounded-log scope: 21 PID windows, up to 400 lines per command,
no detected fatal/unhandled pattern or within-window PID change. Errors/warnings
are retained verbatim, including ashmem deprecation, CPU variant, HWUI, input and
Back-dispatch messages. Not warning-free or exhaustive stability evidence.
Evidence: f-device/A06-log-review.json and every referenced per-window log/W-E file.

Settings / final state

Record -> change -> test -> restore -> reread receipts are in
f-device/settings-transactions.jsonl. Every step-1 value equals final readback:
  font_scale: 1.0 -> 1.3 / 2.0 in labelled attempts -> 1.0
  night: no -> yes (cold and live page switches) -> no
  show_ime_with_hard_keyboard: 0 -> 1 -> 0
Unchanged: model sdk_gphone64_x86_64; API36; 1080x2400; physical density420 with
no override; density property empty; enabled accessibility services null;
accessibility_enabled0; default IME
com.google.android.inputmethod.latin/com.android.inputmethod.latin.LatinIME.
No density/other settings or IME changes, reboot, HOME or TalkBack.
settingsRestored=true; f-device/environment-comparison.json.
Final PID4965; foreground schedule, All selected / Favorite unselected, empty
query, light mode, default font/density. Final PNG/XML: F2-final-verified-schedule.

Keys/text: keyevent4 once, only for the detail-back regression after fresh XML.
No keyboard Back. input text IOnic once in regression, after XML-bounds SearchBar
tap. No other text strings or keys. Clear used the SearchBar's own control.
All relaunches are force-stop then monkey and recorded in relaunches.json.
All ADB commands target emulator-5554 with 30-second subprocess timeout. Swipe
endpoints remain at least 100 px from screen edges; ordinary taps use fresh XML
centres, including native toolbar controls. Authored text LF; raw command logs
retain command output line endings and raw gate porcelain/diff are byte captures.

Evidence / preservation / unresolved

276 indexed PNG/XML pairs passed hash, PNG CRC and decompression checks.
Final ledger: 68 entries (19 PASS, 5 FAIL, 3 BLOCKED, 41 LIMITED); aggregates and
subcases overlap and are not independent test totals. Incremental history stays
in results-f2-incremental-history.json. Four stopped helper attempts were resolved
with new labels, without replacing their frames: overscroll, clipped-first-row
seek, omitted ScrollView accessibility node, and native Close label mapping.
Details/replacement evidence: f-device/tooling-incidents.json.

All 12568 preservation snapshot files retain hashes, including A/B/G/F1 histories,
both redactions, NS07.md and checklist. Three-component source diff byte-equals
f-fix/fix.diff; index remains empty. Root package-lock.json was never read, hashed,
diffed, edited, restored or staged. IDEA.md contents never read.

Outstanding: the selected-state defect needs human disposition outside F2;
coordinator must inspect every frame's pixels and privacy, decide G05/G07 visual
acceptance and classify keyboard surfaces; the authorized keyboard-menu attempt
remains incomplete. No redaction or history modification by this executor.
No delegation/review dispatch, staging/commit/push, final handoff or freeze.

Results: migration/evidence/NS07/f-device/results-f2.json
Captures: migration/evidence/NS07/f-device/capture-index.json
Receipts: migration/evidence/NS07/f-device/commands.jsonl
Supervisor: tools/qwen-supervisor/.runs/sol-ns07-r1-f2-20261028/result.json
STOP.
