RN07 G2a — CHECKPOINTED; candidate 2 device reruns, not final acceptance
Executor: Hermes GPT-6.1 Sol high (human-selected). Pixels pending coordinator.
P = migration/evidence/RN07/g-settings2a
R = tools/qwen-supervisor/.runs/sol-rn07-r1-g2a-20261025

Environment and gates
  RN01_API36, emulator-5554, API36, portrait1080x2400, density420, navigation_mode2. Reused installed dev.translationtest.rn development client; no native build/install/data clear/reboot.
  Branch migration/slice-1; HEAD6e4bf9682285391ab00dca3b0a7dc2b01b61832a. git diff --name-only f5a1d83 HEAD exactly .gitignore; index empty. Entry/final class-based scope gates parse raw, untrimmed porcelain paths from index3. Every candidate2.json files/additionalFiles SHA-256 matches:35 paths. P/entry-gate.json, final-gate.json; closing recheck recorded separately in checkpoint-gate.json.
  Metro coordinator-owned http://127.0.0.1:8082/status returned packager-status:running; never stopped/restarted. Each baseline force-stopped/restarted app and connected through launcher UI, checking empty search, All sessions, all ten checked tracks, no favorites. P/G01-baseline.json and subsequent *-baseline.json.
  First-baseline loaded-candidate proof: search grows111px at1.0 to148px at2.0, incompatible with candidate1 fixedheight42 and consistent with F-3. P/device-facts.json; G01-all and G05-empty-candidate-proof PNG/XML. No glyph-readability claim from bounds alone.
  All11,500 pre-existing evidence/checkpoint/coordinator-document paths unchanged: P/history-entry.json, history-final.json. README.md and pixel-inspection-coordinator.md never written. IDEA.md contents never read. No product/test/config edits, fixes, staging/commit/push, submission/handoff, delegation/review dispatch.

Settings — entry -> authorized change -> test -> restoration -> reread
  size: Physical size1080x2400; unchanged.
  density: Physical density420; unchanged.
  navigation:2; unchanged.
  show_ime_with_hard_keyboard:0 ->1 (D6) ->G01/G02/G08 ->0; exact restoration.
  font_scale:1.0 ->2.0 ->G05 empty/Ionic ->1.0; exact restoration.
  night: no ->yes ->G07 schedule/detail4/filter/alert ->no while app open; exact restoration.
  enabled_accessibility_services:null; accessibility_enabled:0; both untouched.
  default IME:com.google.android.inputmethod.latin/com.android.inputmethod.latin.LatinIME; untouched.
  P/settings-entry.json, settings-changes.json (three logical record/change/test/restore records), individual *-change.json (one per actual settings command), settings-pre-regression.json, settings-final.json. Every one of nine values equals entry, including raw returned CRLF. settingsRestored=true. No TalkBack changes.

Keyboard environment and Back log
  D6=1 alone still displayed Gboard handwriting toolbar. uiautomator dump --windows exposed its bounds/controls; More stylus options > Show on-screen keyboard exposed actual QWERTY26 letter keys in a floating panel. This is transient IME UI, not a changed IME/docking preference. Every keyboard attempt has full-key XML, PNG and dumpsys mInputShown=true proof. No docked-keyboard claim.
  Exactly one hardware Back: G01-one-back, search with Ioni and full QWERTY present. Before XML/bounds and IME recorded; wait1.5s, keyevent4, wait2.0s, post capture. QWERTY keys disappeared, query and schedule stayed; toolbar and mInputShown=true remained. No second Back. All other returns used native header Navigate up, never hardware Back. P/back-usage.jsonl, G01-preback-keyboard*, G01-one-back*, G01-after-back-ime.json, G01-back-analysis.json.

Per-case/subcase status (device/XML assertions only; every PNG pending coordinator)
  G01 BLOCKED: full panel dismissed but residual toolbar/IME remained active; complete IME dismissal not established. G01.query-and-schedule PASS: Ioni retained, schedule remained. Above Back evidence. This process also experienced font-configuration root remounts before G01; warnings disclosed below. No unqualified G01 PASS.
  G02.row PASS: first tap University of Ionic opened correct detail; keyboard keys0, mInputShown=false. P/G02-row-full*, G02-row-first*, G02-row-after-ime.json.
  G02.mode PASS: first tap selected Favorite sessions/empty state;26 keys and mInputShown=true remained. P/G02-mode-full*, G02-mode-first*, G02-mode-after-ime.json.
  G02.filter PASS: first tap opened Filter Sessions; keys0, mInputShown=false. P/G02-filter-full*, G02-filter-first*, G02-filter-after-ime.json.
  G02.favorite PASS: first tap Favorite University of Ionic opened Favorite Added. Dialog covered QWERTY (keys0 in XML), but mInputShown=true; do not claim keyboard dismissed. P/G02-favorite-full*, G02-favorite-first*, G02-favorite-after-ime.json.
  G08.search-and-modes PASS geometrically: search y468–579, modes605–717, above floating keyboard controls/keys. G08.list-insets FAIL: QWERTY panel overlaps list rows; list still scrolls [1,4,2,3] ->[2,3,5,6] with keys visible. P/G08-keyboard-full*, G08-list-scroll*, G08-scrolled*, G08-insets-top.json, G08-insets-scrolled.json. No resized above-keyboard list area; floating-IME environment disclosed, no fix.
  E06.apply-after-bottom-scroll PASS: Mobile States bottom reached; final two scroll frames identical. Ionic only/Done yields [4,2,5], topmost heading9:15 am [42,938][1038,992], topmost row4 [42,1024][1038,1375]. P/E06-bottom-scroll6*, scroll7*, done*, edge.json, applied-analysis.json (prefix E06-bottom-).
  E06.apply-after-mid-scroll PASS: same rows/heading/top-row bounds. P/E06-mid-scroll3*, E06-mid-done*, E06-mid-applied-analysis.json.
  E06.favorite-does-not-jump PASS: Community Interaction add/OK while scrolled preserves IDs[9,10,11,12] and all row bounds. P/E06-mid-before-favorite*, favorite-add*, after-favorite*, corresponding analysis.json files (prefix E06-mid-).
  G05.field-growth PASS:111 ->148px, full hint/Ionic present in XML, restored1.0. G05.readability-empty and G05.readability-Ionic BLOCKED pending pixels, not visual PASS. P/G05-empty-candidate-proof*, G05-Ionic*, G05-restored*.
  G07.schedule, detail4, filter, favorite-alert, live-light BLOCKED pending qualitative pixel inspection of header/status bar, title/back arrow and readability. All requested surfaces captured; no measured contrast claim. P/G07-dark-schedule*, dark-detail4*, dark-filter*, dark-favorite*, live-light-schedule* (prefix G07-). G07.live-process PASS: same PID through night yes/no, no force-stop between changes; P/G07-live-process.json.
  F01.add, duplicate-cancel, duplicate-confirm, remove-cancel, remove-confirm PASS: swipe add once; duplicate question; CANCEL preserves one Breakfast; explicit REMOVE empties; re-add, Favorites swipe Remove CANCEL retains and REMOVE empties. P/F01-add-action*, duplicate-action*, single-favorite*, duplicate-remove-confirm*, removed-empty*, removal-cancel*, removal-confirm*, final-empty* (prefix F01-).
  F03.invalid-target-attempt BLOCKED: helper initially picked hidden row1 generic Favorite bounds although row4 was revealed; actual tap opened Breakfast detail, then OK was absent (no OK input sent). P/F03-reveal*, F03-action*. Preserved invalid executor attempt, not counted as product failure. Fresh baseline F03b targeted row4 panel bounds exactly.
  F03.action-no-navigation PASS: proper revealed row4 action opens only Favorite Added, then schedule. F03.closed-row-detail PASS: closed row opens University of Ionic with selected favorite. P/F03b-reveal*, action*, action-ok*, closed-row*, correct-detail* (prefix F03b-).
  F04.scroll-away-return PASS: reveal4, scroll away; return4 closed, add Breakfast; Favorites only1. Original five reverse swipes started y900 outside listtop916 and did nothing; retained no-op attempts, missing Breakfast caused no tap. In-list reverse5401100->5402100/400 then returned correctly. P/F04-open4*, away4*, return5*, returned-top*, other-favorite-valid*, favorites-valid*, favorites-analysis.json (prefix F04-).
  F05.buttons-only PASS: no swipe; add/OK, duplicate/CANCEL, Favorites Remove/CANCEL, Remove/REMOVE ->empty. P/F05-add*, duplicate*, favorites-single*, remove-cancel*, remove-confirm*, final-empty* (prefix F05-).
  C02 PASS: Favorite Lunch button/session12 ->Favorite Added; Favorites exactly[12]. P/C02-favorite12*, C02-favorites*, C02-favorites-analysis.json.
  C06.star-on/off PASS: Breakfast ☆->★ selected and ★->☆ unselected immediately without alert; native header back gives Breakfast-only Favorites then empty. P/C06-star-on*, favorites-on*, star-off*, favorites-empty* (prefix C06-).
  F02 NOT RUN here: D5 historical diagonal-left FAIL/known gesture-ambiguity decision remains unchanged, not promoted to PASS.
  G03/G04 NOT RUN: reserved for G2b TalkBack; services untouched.
  Full required fields and explicit paths: P/results-g2a.json. Totals36 entries:23 PASS,1 FAIL,9 BLOCKED (including invalid-target history and pending pixels),3 NOT RUN. Counts are entry/subcase totals, not checklist-parent acceptance totals.

Evidence integrity, logcat and limitations
  P/capture-index.json, capture-notes.md:247 timestamped PNG/XML pairs, all pixels not yet inspected. P/capture-verification.json validates PNG chunk CRC/inflation and XML tag balance; not visual acceptance. P/input-timing-verification.json validates191 inputs with bounds and actual minimum waits1504ms before/2001ms after. Raw command captures preserve CRLF; authored text/extracted XML LF. P/log-format.json.
  Actual spawned command receipts and stdout/stderr are in P/commands.jsonl. Initial direct Git discovery was archived verbatim with unavailable timing/null disclosed in bootstrap-discovery.receipt.json; timed gates repeated. Early outer Node launcher wrapper timing/stdout were not captured separately; actual git/curl/adb child commands all have receipts. P/helper-attempt-history.json records setup/checker/targeting failures, never fabricated wrapper output.
 25 bounded PID logcat snapshots (-t400), case-window only. No FATAL EXCEPTION/Fatal signal matches in retained snapshots. Errors/warnings DO exist: startup ReactNoCrashSoftException/onWindowFocusChange context-not-ready; Bridgeless/CatalystInstance warning; initialRouteName deprecation; EGL format warning. Font configuration changes in first process additionally emitted duplicate-linking/multiple-navigation-container ReactNativeJS errors and reset query upon restoring scale. No fixes. P/logcat-analysis.json, warnings-verbatim.md. G01-start contains previous PID history; G01-end spans G05 changes; invalid F03 has start snapshot only. No continuous-log or clean-console claim.
  Helpers passed node --check; git diff --check and empty-index checks passed. Software suite/build not rerun: this is device-only G2a, candidate2 software evidence stays in f-fixes1. No new native build claim.

STOP / remaining
  Coordinator owns pixel-inspection-coordinator.md and README.md; not touched. Needs pixel inspection of all247 frames, G01 residual-IME adjudication, G08 floating-panel overlap handling, and G2b TalkBack G03/G04. F02 known D5 limitation and font-configuration log errors carried without fixes. No final acceptance/submission/review dispatch. Stop at this checkpoint; R/result.json is the phase result.
