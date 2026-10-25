RN07 B1 capture notes - CHECKPOINTED
Recorded 2026-10-25T17:09:59.505Z; Hermes GPT-6.1 Sol high; coordinator Claude Code.
Device/XML statuses are not pixel verdicts. Every PNG is pending coordinator inspection; no physical-device/release/iOS/general-stability claim.

Phase A disposition: complete across a-gates2/a-gates3. A01/A02/A03/A04 JS/A06 software PASS; A04 native NOT RUN by D1. a-gates3 BLOCKED was an overbroad LF checker on supervisor stream/stderr logs, not repository evidence. Historical raw 10-byte Node version CRLF file requires -text at commit time. No Phase A checks rerun.

Environment: RN01_API36, emulator-5554, API36, emulator35.5.10.0; 1080x2400, density420, navigation_mode2, font1.0, night no, enabled_accessibility_services null, accessibility_enabled0; IME com.google.android.inputmethod.latin/com.android.inputmethod.latin.LatinIME. Baseline/final settings equal; G must restore these actual values.
A05: dev.translationtest.rn version1.0.0/code1 reused client. firstInstallTime 2026-10-21 07:01:33; lastUpdateTime 2026-10-21 17:29:42. APK SHA256 3a6c19f6f25e2148ae6afc1572fa847f501d7a6a5102dbadb05e6ca53528f092. Exact pm path/hash receipts retained. No install/native build. Metro127.0.0.1:8082 /status running; adb reverse8082 applied. Coordinator Metro console cannot be read and was not stopped/restarted.

Input: fresh XML before every input, target bounds, 1500ms wait, act, 2000ms wait, XML plus PNG after. PNG obtained via adb exec-out screencap -p, binary saved without shell. XML source via exec-out uiautomator dump /dev/tty. Structural PNG chunk/inflate validation passed for 126 pairs. All 117 recorded inputs had bounds and waits. No hardware Back (4), key123, settings change, IME change, install, data clear or reboot. HOME3 only C08. Backspace67 for clear; single space input token %s, XML preserves text=" ".

B01 exact positive-area viewport merge: [1,4,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]. Eight headings in frozen order. Entire mounted tree is not used as displayed evidence. Complete metadata available for all20; readability pending pixels. B02 pairs6/7 and10/11 stable in repeated forward traversals. Six prescribed reverse swipes540,900->540,1800/400 did not move: start900 was above list viewport918. No reverse recycling claim, no product failure inferred from out-of-list gesture. Forward swipes540,1800->540,900/400 captured every viewport.
B03 exact IOnic sequence [4,2,3,5,7,8,9,11,13,14,15,16,17,18,19]. Initial query retained bottom position; no-match/clear used as ordinary UI setup to reset list position before complete traversal.
B04 generic no-match message, no rows/headings; Backspace clear restores initial viewport. B05 space preserved, core-derived supplemental IDs [4,2,3,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20] matched full traversal. B06 space, all ten tracks persist All/Favorites/All; Favorites empty.
B03-dismiss-keyboard is a frame label for an attempted noninteractive heading tap at540,355, not proof of dismissal. Later B-search-window IME dump reports mInputShown=true. No row/list tap was treated as an action when it merely dismissed keyboard; subsequent scrolling and mode transitions have explicit post-XML outcomes. Gboard/floating handwriting obstruction is for pixel coordinator to inspect; IME unchanged.
B07 automated only: existing RN03 pending/sync throw/rejected promise/retry/stale tests passed in Phase A target Jest JSON. C09 automated only: add-duplicate/remove-absent expected and asserted [1,12], not simulated on device.

C baseline genuinely new PID15367 (B was13165). C01 empty; C02 accessible Favorite Lunch -> Favorite Added -> OK -> Favorites[12]. Immediate pre-OK membership is corroborated by existing controlled tests/source, not directly exposed behind native alert XML. C03 setup removes12; add20 then1 yields[1,20]. C04 All duplicate alert exact title Favorite already added, Android XML buttons CANCEL/REMOVE; Cancel preserves[1,20], separate Remove leaves[20]. C05 Favorites Remove Favorite: Cancel retains20, repeat Remove yields empty. Accessible closed-row path only; F swipe closure later.
C06 detail1 star selected on/off without list confirmation; header Navigate up each return, list[1] thenempty. C07 favorites3/12 verified; modal Deselect All + Food + Done; Favorites[12]. C08 HOME preserves15367 and visible12; am start resumes withoutforce-stop. Separately force-stop/start/launcher gives18170 andempty Favorites; finalAll/alltracks/emptysearch.

A06 bounded logs: 8 read-only PID windows; no recorded fatal-crash match or unhandled JS error match; successful current-bundle Running main records and /status running. 1117 W/E records across overlapping snapshots include duplicates; not a count of distinct incidents. Full W/E records/soft exception stacks verbatim in warnings-verbatim.json and warnings-verbatim.md. Not zero exceptions; no continuous or Metro-console claim.
Exact representative warnings:
  unknown:ReactHost: Unhandled SoftException
  unknown:ReactHost: com.facebook.react.bridge.ReactNoCrashSoftException: raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
  ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
No interruption observed in successful XML/device workflows. Soft startup warnings, native setter/architecture/HWUI/ashmem/hiddenapi/back-dispatcher messages remain disclosed verbatim; pixel red-screen check pending.

Capture times and every frame path: capture-index.json. Every relaunch: relaunches.json. Four helper-only guard/startup attempts retained in helper-attempt-history.json; no product fixes. Initial shell discovery receipt has unknown timing honestly marked null; argument-array gate receipts repeated and timed before device input.
Raw CRLF text streams are retained byte-for-byte and enumerated in line-ending-inventory.json. Binary PNG stdout .log streams naturally contain CRLF in PNG signature and are separately classified. Authored text/extracted XML LF. Earlier evidence untouched.

Status entries:
A05: PASS (device/XML); results-b1.json
A06.device-B: PASS (device/XML); results-b1.json
A06.device-C: PASS (device/XML); results-b1.json
A06.metro-console: BLOCKED (server status / limitation); results-b1.json
B01: PASS (device/XML); results-b1.json
B01.pixel-readability: NOT RUN (pixel inspection pending); results-b1.json
B02: PASS (device/XML); results-b1.json
B03: PASS (device/XML); results-b1.json
B04: PASS (device/XML); results-b1.json
B05: PASS (device/XML); results-b1.json
B06: PASS (device/XML); results-b1.json
B07: PASS (automated only); results-b1.json
C01: PASS (device/XML); results-b1.json
C02: PASS (device/XML); results-b1.json
C03: PASS (device/XML); results-b1.json
C04: PASS (device/XML); results-b1.json
C04.cancel: PASS (device/XML); results-b1.json
C04.remove: PASS (device/XML); results-b1.json
C05: PASS (device/XML); results-b1.json
C05.cancel: PASS (device/XML); results-b1.json
C05.confirm: PASS (device/XML); results-b1.json
C06: PASS (device/XML); results-b1.json
C06.on: PASS (device/XML); results-b1.json
C06.off: PASS (device/XML); results-b1.json
C07: PASS (device/XML); results-b1.json
C08: PASS (device/XML); results-b1.json
C08.live-process: PASS (device/XML); results-b1.json
C08.new-process: PASS (device/XML); results-b1.json
C09: PASS (automated only); results-b1.json

Remaining: coordinator inspect every frame; B2 executes D/E/F, D03/D04 per D3; G separate authorized settings phase; later fixes only under new explicit scope/candidate. No handoff/submission/review/delegation/staging/commit/push. STOP at B1 checkpoint.
