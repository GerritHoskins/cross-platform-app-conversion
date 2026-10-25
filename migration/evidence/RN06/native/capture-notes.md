RN06 revision 1 phase B — BLOCKED checkpoint
Started 2026-10-25T14:56:08.885Z; checkpoint 2026-10-25T15:08:27.389Z.
Branch migration/slice-1; HEAD 7a1fe5a1fb06b271c54a4b2d51edcdff9c860af8.
Device {"serial":"emulator-5554","avd":"RN01_API36","appId":"dev.translationtest.rn","metroStatus":"packager-status:running","reverse":"host-16 tcp:8082 tcp:8082","foreground":"topResumedActivity=ActivityRecord{268224346 u0 dev.translationtest.rn/.MainActivity t29}"}.
Final foreground topResumedActivity=ActivityRecord{92860834 u0 dev.translationtest.rn/.MainActivity t30}; Metro packager-status:running; reverse host-16 tcp:8082 tcp:8082.
BLOCKED at step 9: tapping non-input Conference heading [42,317][1038,402] at (540,359) did not dismiss the keyboard. keyboard-after-heading.txt:906 records mInputShown=true, line 889 mImeWindowVis=3; Search sessions remains focused. No alternative dismissal, Back, settings or relaunch attempted. Frame 17 retained with incomplete-state marker. Frames 18 and 19 not attempted; no -retry pair because no permitted recovery was available.

Fresh load
Exactly one am force-stop dev.translationtest.rn and am start -n dev.translationtest.rn/.MainActivity. Normal launcher Recent server http://127.0.0.1:8082 text node [179,1378][459,1417] tapped (319,1397); no URI intent/deep link. Initial 2-second startup check lacked topResumedActivity while new MainActivity was INITIALIZING with splash; no input sent. Read-only diagnostic subsequently confirmed DevLauncherActivity in the same app; no app exit or second launch. Launcher connection and controls then loaded schedule.
Fresh JS load via normal development launcher, PID 9433. Initial 300-line PID logcat scan had no native-module error suspects; final scan suspects=0. XML showed schedule and native alerts/detail, not a red error UI. This is bounded observation, not exhaustive native compatibility certification; no rebuild.

Initial state
All ten filter checkboxes checked in start-tracks-after.xml; header Navigate up returned. Favorite sessions selected and No favorite sessions. confirmed in start-favorites-after.xml, then All selected; Search sessions placeholder empty. Baseline mounted rows [1,4,2,3]; row 3 is clipped before its visible Favorite button, so only complete viewport rows 1/4/2 have visible-button XML bounds. No claim about pixels or an offscreen button.

Per-frame XML observations
2026-10-25T14:59:05.937Z RN06-01-baseline: schedule/detail labels Breakfast, Favorite Breakfast, Favorite University of Ionic, Favorite Getting Started with Ionic, All sessions; mounted IDs=[1,4,2,3]; positive-area IDs=[1,4,2,3]; Breakfast [76,1058][1004,1221]; University of Ionic [76,1557][1004,1720]; Getting Started with Ionic [76,1928][1004,2091]; Ionic Tooling [76,2299][1004,2358]. Pixels uninspected.
2026-10-25T14:59:16.855Z RN06-02-revealed-favorite: schedule/detail labels Breakfast, Favorite, Filter sessions; mounted IDs=[1,4,2,3]; positive-area IDs=[1,4,2,3]; Breakfast [42,1058][752,1221]; University of Ionic [76,1557][1004,1720]; Getting Started with Ionic [76,1928][1004,2091]; Ionic Tooling [76,2299][1004,2358]. Pixels uninspected.
2026-10-25T14:59:33.779Z RN06-03-favorite-added-alert: schedule/detail labels Favorite Added, OK; mounted IDs=[]; positive-area IDs=[]; . Pixels uninspected.
2026-10-25T14:59:44.394Z RN06-04-closed-after-ok: schedule/detail labels Breakfast, Filter sessions; mounted IDs=[1,4,2,3]; positive-area IDs=[1,4,2,3]; Breakfast [76,1058][1004,1221]; University of Ionic [76,1557][1004,1720]; Getting Started with Ionic [76,1928][1004,2091]; Ionic Tooling [76,2299][1004,2358]. Pixels uninspected.
2026-10-25T15:00:03.128Z RN06-05-already-favorite-alert: schedule/detail labels Favorite already added, CANCEL; mounted IDs=[]; positive-area IDs=[]; . Pixels uninspected.
2026-10-25T15:00:17.781Z RN06-06-closed-after-cancel: schedule/detail labels Breakfast, Filter sessions; mounted IDs=[1,4,2,3]; positive-area IDs=[1,4,2,3]; Breakfast [76,1058][1004,1221]; University of Ionic [76,1557][1004,1720]; Getting Started with Ionic [76,1928][1004,2091]; Ionic Tooling [76,2299][1004,2358]. Pixels uninspected.
2026-10-25T15:00:36.670Z RN06-07-favorites-revealed-remove: schedule/detail labels Breakfast, Remove, Favorite sessions; mounted IDs=[1]; positive-area IDs=[1]; Breakfast [42,1058][752,1221]. Pixels uninspected.
2026-10-25T15:00:46.927Z RN06-08-remove-confirm: schedule/detail labels Remove Favorite, REMOVE; mounted IDs=[]; positive-area IDs=[]; . Pixels uninspected.
2026-10-25T15:00:57.290Z RN06-09-after-remove: schedule/detail labels No favorite sessions.; mounted IDs=[]; positive-area IDs=[]; . Pixels uninspected.
2026-10-25T15:01:07.672Z RN06-10-before-vertical: schedule/detail labels Breakfast, 8:00 am, All sessions; mounted IDs=[1,4,2,3]; positive-area IDs=[1,4,2,3]; Breakfast [76,1058][1004,1221]; University of Ionic [76,1557][1004,1720]; Getting Started with Ionic [76,1928][1004,2091]; Ionic Tooling [76,2299][1004,2358]. Pixels uninspected.
2026-10-25T15:01:47.760Z RN06-11-after-vertical: schedule/detail labels All sessions, Filter sessions; mounted IDs=[1,4,2,3,5,6]; positive-area IDs=[4,2,3,5,6]; Breakfast [76,917][1004,395]; University of Ionic [76,917][1004,894]; Getting Started with Ionic [76,1102][1004,1265]; Ionic Tooling [76,1473][1004,1636]. Pixels uninspected.
2026-10-25T15:02:37.730Z RN06-12-row-open: schedule/detail labels Getting Started with Ionic, Favorite, Filter sessions; mounted IDs=[1,4,2,3,5,6]; positive-area IDs=[4,2,3,5,6]; Breakfast [76,917][1004,395]; University of Ionic [76,917][1004,894]; Getting Started with Ionic [42,1102][752,1265]; Ionic Tooling [76,1473][1004,1636]. Pixels uninspected.
2026-10-25T15:02:48.141Z RN06-13-link-tap-closes: schedule/detail labels Getting Started with Ionic, Filter sessions; mounted IDs=[1,4,2,3,5,6]; positive-area IDs=[4,2,3,5,6]; Breakfast [76,917][1004,395]; University of Ionic [76,917][1004,894]; Getting Started with Ionic [76,1102][1004,1265]; Ionic Tooling [76,1473][1004,1636]. Pixels uninspected.
2026-10-25T15:02:58.484Z RN06-14-detail-opens: schedule/detail labels Getting Started with Ionic, Navigate up; mounted IDs=[]; positive-area IDs=[]; . Pixels uninspected.
2026-10-25T15:03:17.187Z RN06-15-a-open: schedule/detail labels Getting Started with Ionic, Favorite, Filter sessions; mounted IDs=[1,4,2,3,5,6]; positive-area IDs=[4,2,3,5,6]; Breakfast [76,917][1004,395]; University of Ionic [76,917][1004,894]; Getting Started with Ionic [42,1102][752,1265]; Ionic Tooling [76,1473][1004,1636]. Pixels uninspected.
2026-10-25T15:03:27.925Z RN06-16-b-open-a-closed: schedule/detail labels Getting Started with Ionic, Ionic Tooling, Favorite, Filter sessions; mounted IDs=[1,4,2,3,5,6]; positive-area IDs=[4,2,3,5,6]; Breakfast [76,917][1004,395]; University of Ionic [76,917][1004,894]; Getting Started with Ionic [76,1102][1004,1265]; Ionic Tooling [42,1473][752,1636]. Pixels uninspected.
2026-10-25T15:06:18.612Z RN06-17-filter-search-applied: schedule/detail labels University of Ionic, Getting Started with Ionic, Migrating to Ionic, Ionic, Filter sessions; mounted IDs=[4,2,5]; positive-area IDs=[2,5]; University of Ionic [76,917][1004,395]; Getting Started with Ionic [76,917][1004,766]; INCOMPLETE STATE: Conference heading tap did not establish mInputShown=false; keyboard remains shown. Pixels uninspected.

Exact gesture commands
2026-10-25T14:59:09.760Z adb -s emulator-5554 shell input swipe 998 1199 638 1199 300
2026-10-25T14:59:48.275Z adb -s emulator-5554 shell input swipe 998 1199 638 1199 300
2026-10-25T15:00:29.713Z adb -s emulator-5554 shell input swipe 998 1199 638 1199 300
2026-10-25T15:01:37.901Z adb -s emulator-5554 shell input swipe 540 1800 540 900 400
2026-10-25T15:02:30.601Z adb -s emulator-5554 shell input swipe 998 1243 638 1243 300
2026-10-25T15:03:10.187Z adb -s emulator-5554 shell input swipe 998 1243 638 1243 300
2026-10-25T15:03:20.968Z adb -s emulator-5554 shell input swipe 998 1614 638 1614 300

Method / audit
17 named frame PNG/XML pairs plus fresh-diagnostic pair; binary-safe exec-out screencap with PNG signature, dimensions and IDAT decompression validated structurally. No image analyzed. No frame renamed/overwritten. 425 adb commands, 31 inputs, zero nonzero adb exits. Every input has fresh pre/post XML; measured waits >=1500 ms / >=2000 ms. Every command and result in commands.jsonl; no shell in helpers.
Preservation: 1776 pre-existing non-tools files compared byte-hash, zero differences; tracked and cached diffs unchanged. verification.json and preservation-final.json in tools/qwen-supervisor/.runs/sol-rn06-r1-native-20261025/.
One helper vertical bounds guard rejected before device input because prescribed endpoint y900 is 17 px above list top917; corrected helper to allow exact authorized gesture, fresh pre-XML acquired under new name; exactly one vertical swipe sent. This was not a missed frame or device failure.
Exactly one text input, adb shell input text Ionic, after focused Search sessions XML confirmation. Exactly one non-input Conference heading tap, followed by dumpsys input_method. No further device input after blocker.
All header closes used Navigate up (73,201); no Android Back/keyevent. No app/test/config/work-package/existing handoff/evidence/submission edits; no installs/IME settings/data clear/reboot/emulator or Metro changes/native rebuild/deep link/delegation/review/stage/commit/push.

Line endings
migration/evidence/RN06/native/fresh-diagnostic-logcat.txt contains 106 CR bytes; preserved raw, LF companion migration/evidence/RN06/native/fresh-diagnostic-logcat-lf.txt
Raw diagnostic acquisition accidentally retained device CR characters; preserved rather than rewritten. All authored reports/helpers/index and main capture XML/command log use LF. Normalized new companions provided; raw exceptions remain an explicit evidence-format deviation.

Unverified / coordinator inspection
All screenshots require coordinator direct pixel inspection; no pixel PASS. actionPanelVisible=null throughout; XML panel presence is not visual reveal.
RNGH swipe-action nodes and generic Favorite/Remove descendants appear in UI XML even in closed baseline; hiding from assistive technology is not demonstrated. TalkBack not exercised.
Vertical scroll produced clipped/inverted off-viewport bounds in mounted nodes; capture-index distinguishes mounted IDs from positive-area viewport bounds. Do not equate all mounted IDs with visible rows.
Frame 17 has mounted IDs [4,2,5], but prior scroll position and shown keyboard prevent the requested full visible result. Retention after a favorite action and reopened Ionic-only filter (18/19) remain unverified.
Frames 01-16 acquired with expected XML labels and link geometry; visual panels, closure, colors, thresholds/feel and overlap remain for coordinator inspection.
App left on schedule, All selected, search Ionic, only Ionic applied, keyboard still shown; University of Ionic favorite addition was not performed.
STOP at blocked phase B checkpoint. Phase C handoff/manifest and review not written.
