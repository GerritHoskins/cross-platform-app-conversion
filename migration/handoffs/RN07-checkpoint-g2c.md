RN07 G2c — BLOCKED checkpoint; candidate 2, not final acceptance
Executor: Hermes GPT-6.1 Sol high (device actions); pixels pending coordinator
P = migration/evidence/RN07/g-settings2c
R = tools/qwen-supervisor/.runs/sol-rn07-r1-g2c-20261025

Environment and candidate proof
  RN01_API36 / emulator-5554 / API36 / portrait1080x2400 / density420. Reused installed dev.translationtest.rn development client; no native rebuild/install. Fresh force-stop/MainActivity start, then launcher connection to http://127.0.0.1:8082 BEFORE enabling TalkBack. P/baseline-proof.json confirms empty search, All sessions, ten checked tracks and no favorites. Metro coordinator-owned, running, not stopped/restarted.
  Branch migration/slice-1; HEAD 6e4bf9682285391ab00dca3b0a7dc2b01b61832a. Entry/final gates: diff f5a1d83..HEAD exactly .gitignore; index empty; all 35 files/additionalFiles in candidate2.json match SHA-256. P/entry-gate.json, final-gate.json; closing recheck P/checkpoint-gate.json.
  Raw porcelain split without trim, paths from index3; scope classes (a) RN07 evidence including g-settings2c, (b) RN07 checkpoints, (c) RN07 work package, (d) unchanged checklist, (e) four candidate2 dirty product/test paths, (f) coordinator README. P/history-final-comparison.json proves all 16,447 entry preservation paths unchanged, including earlier evidence/checkpoints, candidate files, work package/checklist, README and coordinator pixel report. IDEA.md contents never read; IDEA.md/tools ignored. No product/test/config edits or fixes.

Settings record -> change -> attempted test -> restore -> reread
  key          entry                         enabled                       final                         equal
  size         Physical size:1080x2400        unchanged                     Physical size:1080x2400        yes
  density      Physical density:420           unchanged                     Physical density:420           yes
  navigation   2                             unchanged                     2                             yes
  font         1.0                           unchanged                     1.0                           yes
  night        no                            unchanged                     no                            yes
  services     null                          TalkBackService               null (settings delete)        yes
  accessibility 0                            1                             0                             yes
  IME          Gboard LatinIME               unchanged                     Gboard LatinIME               yes
  hardKeyboard 0                             unchanged                     0                             yes
  P/settings-entry.json is the same nine-key/raw-value format as G2a. P/settings-enable-change.json, settings-enabled.json, settings-restore-change.json and settings-final.json record the full cycle. All nine raw values, including returned CRLF, equal entry; settingsRestored=true. P/settings-closing-reread.json independently repeats defaults after teardown. TalkBack restored BEFORE this checkpoint. No other settings/permissions changed except D8 below.

D8 notification prompt and persistent state
  XML confirmed “Allow Android Accessibility Suite to send you notifications?” P/talkback-entry.png+xml. One prescribed input sequence was issued: single tap at Don’t allow center (540,1469), then two taps at that same point with helper sleep120ms. P/D8-deny-notifications-focus* and D8-deny-notifications-activate* retain before/after PNG+XML, action records and command receipts.
  The intended focus-only single tap was NOT established. Its PNG has machine-detected green bounds matching Allow, not the deny target; pixels still pending coordinator. Deny resource changed to permission_deny_and_dont_ask_again_button before the double, then back to permission_deny_button afterward, while the prompt persisted. Do not claim exactly one permission callback from these inputs. No Allow coordinates were tapped; no further permission sequence was attempted.
  Readback: POST_NOTIFICATIONS granted=false; entry flags USER_SENSITIVE_WHEN_GRANTED, final flags USER_SET|USER_FIXED|USER_SENSITIVE_WHEN_GRANTED. This denied notification state persists and is NOT restored, per D8; it is excluded from the nine-setting comparison. P/notification-permission.json and D8-diagnostic.json. Window diagnostic also exposed multiple permission activities; no attempt to clear their tasks or change other permissions.
  Foregrounding existing MainActivity exposed the app with the SAME PID, P/return-app.json and talkback-app-return.png+xml; no second process baseline or settings workaround.

Cases and input-path blocker
  G03 BLOCKED; G04 BLOCKED (environment/input method, not a product FAIL). TalkBack was bound and touchExplorationEnabled=true in initial and post-probe dumpsys accessibility, but prescribed adb input did not establish valid accessibility-focus traversal.
  G03.search LIMITED: single input tap Search sessions immediately gave EditText focused=true and opened full QWERTY; no machine-detected green focus rectangle. Tree label/role exist, but input focus is not accessibility focus. Right swipe did not establish a next stop. P/G03-search-focus*, G03-next-from-search*.
  G03.modes LIMITED: named Button nodes expose selected state; single tap Favorite sessions immediately selected it and All immediately reselected All. Double-tap attempt at already-selected Favorite coordinates also had no machine-detected rectangle. These do not prove TalkBack focus/activation. P/G03-favorites-focus-attempt*, favorites-double-attempt*, all-focus-attempt* (last two also prefixed G03-).
  G03.filter-controls/checkboxes LIMITED: single tap Filter sessions opened modal. XML exposes Navigate up ImageButton, Reset/Deselect All/Select All/Done Buttons and ten named CheckBoxes, initially checked=true. Right/left swipes over y800 changed Design true->false->true, rather than establishing next/previous focus stops. P/G04-filter-focus-attempt*, filter-next-attempt*, filter-previous-attempt* (all G04- prefixed).
  G04.filter-containment BLOCKED: modal XML has no schedule search/modes/rows, but that is NOT proof of native accessibility containment. No valid focus order, background reachability, return focus or duplicate/trap verdict.
  Detail University of Ionic4, its star/state change, row Favorite, bulk-control activation/Done, revealed swipe action/hidden-panel hiding, Favorite alert OK/Cancel/Remove and detail Navigate up return: NOT RUN after the shared input prerequisite failed. Teardown Navigate up was only AFTER TalkBack restoration, not G04 credit. No product FAIL inferred, no fixes.
  P/results-g2c.json has required RN07 fields: 19 entries, 7 BLOCKED and 12 NOT RUN. Both parent cases BLOCKED; limited XML observations never promoted to PASS. P/result-counts.json. TalkBack speech NOT captured; no claimed announcements.

Focus-order table — attempted order, not successful TalkBack traversal
  Surface   Input/attempt                         Actual observation / landing
  Prompt    single deny; same-point double        Prompt persisted; no established deny focus; separate denial flags persist.
  Schedule  Search single; right swipe next        Search input-focused=true; keyboard; no established next accessibility stop.
  Schedule  Favorite single/double; All single     Mode changes already on single taps; no established accessibility stop.
  Filter    Filter single                         Modal opens, rather than focus-only; landing focus unknown.
  Filter    right/left at y800                     Design toggles false/true; no next/previous focus established.
  Detail/alerts/revealed panel                    NOT RUN; no focus-order/return/containment conclusion.
  Exact coordinates, XML attributes and PNG paths: P/focus-order.json, input-probe-analysis.json, *-action.json and focus-diagnostics.json. Green-color diagnostics are machine-only, not visual acceptance. Frames missing the requested green rectangle are explicitly incomplete assertion evidence.

Teardown, evidence verification and logs
  TalkBack restored at settings-final timestamp 2026-10-25T20:59:58.823Z. Filter then closed with Navigate up to discard draft; P/teardown-filter-discard.png+xml shows empty search/All schedule. No hardware Back or IME setting change. The unexpected full QWERTY while hardKeyboard=0 is disclosed; no keyboard dismissal workaround.
  40 timestamped PNG/XML pairs in P/capture-index.json and capture-notes.md; all pixels not yet inspected. PNG chunk CRC/inflation and XML tag balance passed, not visual inspection. All 16 input actions have pre-input XML/bounds plus minimum1.5s before and2s after; P/input-timing-verification.json. Raw CRLF stdout preserved/disclosed in P/log-format.json; authored text and extracted XML LF.
  Two bounded PID logcat -t400 snapshots only, around the attempted case window. No FATAL EXCEPTION/Fatal signal matches in retained snapshots. Errors/warnings DO exist: context-not-ready ReactNoCrashSoftException/onWindowFocusChange; hiddenapi AccessibilityNodeInfo getSelection/setSelection denial; ashmem deprecation; EGL/HWUI and Bridgeless lifecycle output. P/logcat-analysis.json, warnings-verbatim.md. No clean-console or continuous-log claim.
  Helpers node --check and git diff --check/index checks passed. Initial closing validator failed because it misclassified the supervisor-owned raw-CRLF stream.jsonl as authored LF text; stream left untouched, validator narrowed to executor-authored files, failed receipt retained in P/helper-attempt-history.json. No software test/build rerun in this device-only session; candidate2 software evidence remains f-fixes1.
  Actual adb/git/curl child commands have measured receipts/stdout/stderr and commands.jsonl. Initial discovery timing is unavailable/null and exact output archived; measured gates repeated. Early outer Node orchestration timing/stream archival gaps are disclosed in P/command-capture-limitations.json, never fabricated. Later invoke helpers archive child script execution, not their own outer launcher.

STOP
  Need coordinator pixel inspection of all40 frames and an authorized reliable TalkBack input path/manual interaction before rerunning G03/G04. D8 denial persists separately. No final handoff/submission, staging/commit/push, delegation or review dispatch. Earlier runs immutable; README.md and pixel-inspection-coordinator.md never written. R/result.json status BLOCKED.
