RN07 B2 - CHECKPOINTED
Recorded after 2026-10-25T17:50:42.857Z final preservation gate.
Executor/observer: Hermes GPT-6.1 Sol high (device actions); pixels pending coordinator.

Candidate and preservation
  migration/slice-1; HEAD f5a1d836156ad3225b8d050951ae5cc073e3c5f7 equals latest RN06-r1 review commit. Empty index; tracked diff empty; git diff --check passed. All36 a-gates3 preservation paths matched at entry/final. All2554 earlier RN07 evidence files hashed at entry matched at final, including B1; no history changed. IDEA.md hash-only matched 56b5dc0ebd13907b3214f0325c11380e03d463c29284f3213054de7f0a097d9d; contents never read. Raw porcelain split without trim, paths from index3; class-based audit passed. Evidence: migration/evidence/RN07/b-device2/preservation-entry.json, preservation-final.json, earlier-evidence-final.json.

Environment and teardown
  Reused RN01_API36/emulator-5554/API36 development client dev.translationtest.rn1.0.0/code1. Metro127.0.0.1:8082 and existing adb reverse reused, not restarted. Defaults unchanged:1080x2400,density420,navigation_mode2,font1.0,nightno,servicesnull,accessibility0,IME com.google.android.inputmethod.latin/com.android.inputmethod.latin.LatinIME. Evidence environment-entry.json and settings-baseline-and-final.json under b-device2.
  New force-stop/start/development-launcher baselines per group: D PID18655, E20181, F23023. Each checked empty search, All, all ten tracks and no favorites. Final schedule All/emptysearch/alltracks/emptyfavorites. Emulator and Metro left running. No product/test/config edits, fixes, settings changes, install/data-clear/reboot/native build, delegation/review, final handoff/submission, staging/commit/push.

Evidence and results
  Base P = migration/evidence/RN07/b-device2/. Each frame name below means P/<name>.png plus .xml. Every input also has fresh -before.xml, bounds/action metadata,1500ms prewait and2000ms postwait. PNGs acquired via adb exec-out screencap -p.
  186 PNG/XML pairs;183 inputs. Structural PNG CRC/chunk/inflate/dimensions checks passed. Every frame indexed/timestamped/hashed in P/capture-index.json; all pixels uninspected by executor. Full44 case/subcase entries and RN07 fields: P/results-b2.json. Receipts/stdout/stderr: P/commands.jsonl; detailed notes P/capture-notes.md; machine checks P/verification.json and supplemental-verification.json.

Per-case device/XML statuses (not pixel verdicts)
  D01 PASS: D01-breakfast, D01-described. Exact fixture metadata for1/4; Breakfast has no description/undefined.
  D02 PASS: D02-scroll, D02-header-return, D02-system-return, D02-retained-tracks, D02-retained-favorites. SearchIonic,Design+Ionic,All,favorite4 retained. Scroll separately PASS: viewport[2,5,7,18] before/after both returns; no exact pixel-offset contract imposed.
  D03 BLOCKED; D04 BLOCKED: D3 development-client cold-VIEW limitation, no native attempt/workaround/harness. P/D03-D04-automated-support.json cites RN04 cold-entry/cold-back/unknown-ID9999/abc/3abc passed tests in migration/evidence/RN07/a-gates2/jest1.json. Documented RN04 mechanism conference-migration-rn://session/3 (unknown9999 equivalent). Native proof needs separate human scope decision; automated support is not native PASS.
  D05 PASS: D05-detail-system-back returns once; D05-root-system-back shows Android Home launcher. Expected root exit, no persistence promise; E baseline relaunch succeeds.
  E01 PASS: E01-initial-filter all ten checked/accessibly labeled; E01-reopen-ionic mirrors appliedIonic. Readability pixels pending.
  E02 PASS: E02-applied, frozen single-track[4,2,5], session3 excluded.
  E03 PASS: E03-query, E03-scroll-to-end; frozen search-plus-track[4,2,5,7,18], exact heading sequence verified.
  E04 PASS: E04-applied-empty, E04-reopen-empty; zero tracks, explicit empty message, unchecked on reopen.
  E05 PASS: E05-select-all, E05-applied-search-retained, E05-clear-query, E05-restored-scroll1–8. Search/mode retained; query clear restores frozen default-all20 sequence/eight headings.
  E06 PASS draft dismissal: E06-repeat-change, E06-repeat-close, E06-repeat-reopen. Approved Navigate up closes; no dedicated Cancel; result[4,2,5], reopenIonic-only.
    Supplemental E06.apply-after-bottom-scroll FAIL: E05-restored-scroll8 then E06-known-applied shows schedule controls but no rows/headings/empty message after applyingIonic-only from bottom. Still blank across initial close cycles. E07-viewport-favorites→E07-viewport-all restores[4,2,5]. Possible stale scroll/virtualization hypothesis unproven. No fix; pixel confirmation pending. Repeated E06/E07 above use restored known viewport, not silent recovery.
  E07 PASS: E07-system-close and E07-repeat-system-close; modal only closes, draft discarded; repeat returns[4,2,5], E07-repeat-reopenIonic-only. Both Back events retained below.
  E08 N/A: E08-change-draft-no-dismiss-affordance full-screen modal XML has no backdrop/swipe handle/dismiss target. RN05 handoff29 confirms unsupported gestures. No invented gesture attempt; pixels pending; supported header closes afterwards.
  E09 PASS, Reset/DeselectAll subcases PASS: E09-reset-draft-empty and E09-deselect-draft-empty remain modal; respective -close/-reopen-ionic preserve applied[4,2,5]/Ionic-only. Reset not treated as Cancel.
  F01 PASS, add/duplicateCancel/duplicateRemove/FavoritesCancel/confirm subcases PASS: F01-* frames. One alert per tap, exact membership[1] or empty; settlements close panel; no observed duplicate alert/navigation. Internal handler count not instrumented.
  F02 FAIL; vertical PASS; diagonal-right mutation/navigation-safety PASS only; diagonal-left FAIL: F02-vertical changes viewport to[2,3,5,6,7]. F02-diagonal-right input swipe3001700→8001100/400 does not scroll/reveal. F02-diagonal-left input swipe8001700→3001100/400 does not scroll and reveals row5 (right edge1038→786). Unwanted horizontal reveal during prescribed diagonal-scroll test. Neither changes favorites or navigates; F02-favorites-unchanged-empty. Pixel confirmation pending, no fix.
  F03 PASS: F03-action4-no-navigation/F03-action4-ok, F03-open-row-tap-closes, F03-closed-row-detail4. Action alerts only; open-row link closes; closed-row nexttap opens University of Ionic4.
  F04 PASS: F04-open-row1, F04-scroll-away1–6, F04-open-other20/action20, F04-scroll-back1–7, F04-returned-row1-detail, F04-exact-membership. Row1 absent native XML at bottom, returns closed and opens Breakfast unfavorited. Other-row action20 adds Mobile States; exactfavorites[4,20]. Reverse swipes540,1100→540,2000/400 start inside list. Native tree disappearance is not proof of JS component-instance recycling.
  F05 PASS, button-only subcases PASS: F05-* frames; complete add/duplicateCancel/duplicateRemove/readd/FavoritesRemoveCancel/confirm using session-specific accessible buttons, no swipe. Final removal empties favorites, F-teardown-all restoresAll.

Back usage log (every keyevent4)
  All five had intended-screen XML plus mInputShown=false before input, with IME also captured after. No Back used to dismiss keyboard. Exact receipts/arguments in P/commands.jsonl; state/actions in P/back-usage.json.
  17:18:43.571Z D02-system-return: P/D02-system-return-before.xml; Session/The Evolution of Ionicons7 → schedule.
  17:19:35.705Z D05-detail-system-back: P/D05-detail-system-back-before.xml; Session/University of Ionic4 → schedule.
  17:19:43.988Z D05-root-system-back: P/D05-root-system-back-before.xml; schedule/Search sessions → Android Home launcher.
  17:26:13.210Z E07-system-close: P/E07-system-close-before.xml; Filter Sessions, Design+Ionic draft → schedule.
  17:27:48.572Z E07-repeat-system-close: P/E07-repeat-system-close-before.xml; Filter Sessions, Design+Ionic draft → schedule.

Limits and logcat
  Known keyboard-only first list taps in D02/E03/E05 did not navigate and are not claimed as actions. No IME changes; toolbar/occlusion inspection remains coordinator work.
  Six bounded PID logcat windows (-d -t400), D/E/F entry/end: no fatal-crash or JS-error scan match; not zero exceptions or continuous coverage. D/F native ReactNoCrashSoftException/window-focus-before-context-ready; initialRouteName deprecation and other W/E records retained verbatim in P/warnings-verbatim.md and P/logcat-analysis.json. Unreadable Metro console not claimed clean.
  Raw CRLF command captures preserved and disclosed in P/line-ending-inventory.json; PNG stdout logs binary. Authored text/extracted XML LF. Initial discovery timing unavailable/null; timed gates repeated before input. Unexported shell-variable attempt and diagnostic adb shell shell typo retained in P/helper-attempt-history.json; no product/device-input effect.

Remaining and STOP
  Coordinator must inspect every frame and adjudicate visual/reveal/blank-viewport findings. FAILs are recorded, not fixed. D03/D04 scope decision remains. All G01–G09 work remains in separate phaseG, with only its authorized reversible settings changes and actual restoration records. No acceptance/final freeze/review claim. STOP at B2 checkpoint.
