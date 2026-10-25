RN04 revision 1 phase B native acquisition

Disposition: BLOCKED on the exact-name frame-06 criterion; observation session ended at checkpoint, not submission. Native behavior beyond XML and all pixels remain unaccepted.
HEAD c283c7eaa0d80ad72dd4d39fe8c10d986ea74257; branch migration/slice-1.
Device emulator-5554; AVD RN01_API36; appId dev.translationtest.rn.
Initial foreground: topResumedActivity=ActivityRecord{233534046 u0 com.google.android.apps.nexuslauncher/.NexusLauncherActivity t5}. Final foreground: topResumedActivity=ActivityRecord{208955065 u0 dev.translationtest.rn/.MainActivity t28}.
Metro initial/final: packager-status:running / packager-status:running. Reverse initial/final: host-16 tcp:8082 tcp:8082 / host-16 tcp:8082 tcp:8082.
Sessions chosen from actual list: X=4 University of Ionic; Y=1 Breakfast. IDs cross-checked in bundled conference.json, not inferred from display order.

Capture method: each PNG is a fresh binary-buffer adb exec-out screencap -p; each XML is a contemporaneous uiautomator dump then adb pull. Original bytes/names preserved. PNG signature/dimensions and XML assertions checked structurally, not visually. All text evidence uses LF. Commands.jsonl records every adb invocation, timestamp and exitCode.

Obstructions/input: no handwriting-onboarding text appeared in acquired XML; this does not establish visual absence. Search accepted IOnic in the actual app EditText. dumpsys input_method reported mInputShown=true before each of the three keyboard dismissals; keycode 4 was used only to dismiss those shown keyboards, never for navigation. Input toolbars or overlays may be invisible to XML and have NOT been ruled out. Development-client Tools accessibility node is present in non-alert app frames. Coordinator must inspect whether it obscures anything. No IME/settings changes.

Frame transcript and XML-only observations
2026-10-25T10:16:18.393Z RN04-01-schedule-search (step 1; deepLinkRouted=null)
  All sessions selected; app EditText exactly IOnic. University of Ionic row, time and Hall 3 in XML.
  Intended strings found: "IOnic", "All sessions", "University of Ionic". Missing: (none).
2026-10-25T10:16:51.367Z RN04-02-detail-opened (step 2; deepLinkRouted=null)
  Tapped University of Ionic row link, not Favorite. Name, 9:15 am – 9:30 am, Hall 3 and Add to favorites in XML.
  Intended strings found: "University of Ionic", "9:15 am – 9:30 am", "Hall 3", "Add to favorites". Missing: (none).
2026-10-25T10:16:54.141Z RN04-03-detail-favorited (step 3; deepLinkRouted=null)
  Detail toggle now Remove from favorites with selected=true; no alert_title node in this dump (not a pixel or transient-alert claim).
  Intended strings found: "University of Ionic", "Remove from favorites". Missing: (none).
2026-10-25T10:17:06.701Z RN04-04-back-search-retained (step 4; deepLinkRouted=null)
  Header Navigate up tapped; schedule EditText exactly IOnic and All sessions selected. Row bounds match frame 01 at the top; no nonzero scroll-restoration test.
  Intended strings found: "IOnic", "All sessions", "University of Ionic". Missing: (none).
2026-10-25T10:17:28.398Z RN04-05-favorite-added-alert (step 5; deepLinkRouted=null)
  Search cleared with End 123 followed by five Backspaces 67, confirmed in app XML. Favorite Breakfast tapped; Favorite Added and OK in XML; OK subsequently tapped.
  Intended strings found: "Favorite Added", "OK". Missing: (none).
2026-10-25T10:17:42.677Z RN04-06-already-favorite-alert (step 6; deepLinkRouted=null)
  MISMATCH: schedule captured. Immediate Favorite X tap after OK did not open the alert. XML contains no requested confirmation. Preserved without overwrite.
  Intended strings found: (none). Missing: "Favorite already added", "Would you like to remove this session from your favorites?", "CANCEL", "REMOVE".
2026-10-25T10:18:35.662Z RN04-06-already-favorite-alert-retry (step 6; deepLinkRouted=null)
  SUPPLEMENTAL: later tap on Favorite University of Ionic opened Favorite already added, message, CANCEL and REMOVE. CANCEL subsequently tapped.
  Intended strings found: "Favorite already added", "Would you like to remove this session from your favorites?", "CANCEL", "REMOVE". Missing: (none).
2026-10-25T10:18:52.725Z RN04-07-favorites-after-cancel (step 7; deepLinkRouted=null)
  Favorite sessions selected; Breakfast and University of Ionic both listed with separate Remove buttons.
  Intended strings found: "Favorite sessions", "Breakfast", "University of Ionic", "Remove Breakfast", "Remove University of Ionic". Missing: (none).
2026-10-25T10:19:04.691Z RN04-08-remove-confirm-alert (step 8; deepLinkRouted=null)
  Remove Breakfast tapped; Remove Favorite, message, CANCEL and REMOVE in XML. CANCEL subsequently tapped.
  Intended strings found: "Remove Favorite", "Would you like to remove this session from your favorites?", "CANCEL", "REMOVE". Missing: (none).
2026-10-25T10:19:07.635Z RN04-09-favorites-after-remove-cancel (step 9; deepLinkRouted=null)
  Favorite sessions remains selected; Breakfast and University of Ionic remain listed.
  Intended strings found: "Favorite sessions", "Breakfast", "University of Ionic". Missing: (none).
2026-10-25T10:19:24.005Z RN04-10-favorites-after-remove (step 10; deepLinkRouted=null)
  Remove Breakfast tapped again; confirmation XML checked; REMOVE tapped. University of Ionic remains; Breakfast absent from XML.
  Intended strings found: "Favorite sessions", "University of Ionic", "Remove University of Ionic". Missing: (none).
2026-10-25T10:19:54.401Z RN04-11-already-favorite-remove (step 11; deepLinkRouted=null)
  Switched All, tapped Favorite University of Ionic; Favorite already added XML checked; REMOVE tapped; switched Favorite sessions. No favorite sessions. in XML; X absent.
  Intended strings found: "Favorite sessions", "No favorite sessions.". Missing: (none).
2026-10-25T10:20:08.486Z RN04-12-unknown-id (step 12; deepLinkRouted=true)
  Warm exact VIEW intent for conference-migration-rn://session/9999 routed. Session not found. in XML; Add to favorites disabled.
  Intended strings found: "Session not found.", "Add to favorites". Missing: (none).
2026-10-25T10:20:36.458Z RN04-13-cold-entry (step 13; deepLinkRouted=false)
  Exact app force-stop then VIEW session/4; after 10-second wait, Development Build launcher in XML, no session detail/header back. deepLinkRouted=false for this frame; unverified natively; automated only for unassisted cold behavior.
  Intended strings found: (none). Missing: "University of Ionic", "9:15 am – 9:30 am", "Hall 3", "Navigate up".
2026-10-25T10:21:27.441Z RN04-13-cold-entry-after-connect (step 13; deepLinkRouted=true)
  SUPPLEMENTAL: expanded New development server, typed and XML-confirmed http://127.0.0.1:8082, dismissed shown keyboard, tapped Connect. Requested University of Ionic detail appeared with correct time/Hall 3 and header Navigate up. Assisted routing only.
  Intended strings found: "University of Ionic", "9:15 am – 9:30 am", "Hall 3", "Navigate up", "Add to favorites". Missing: (none).
2026-10-25T10:21:32.932Z RN04-14-cold-entry-back (step 14; deepLinkRouted=true)
  Header Navigate up on the assisted cold detail tapped. Conference schedule, empty Search sessions field, All sessions selected, Breakfast and University of Ionic in XML. App left here.
  Intended strings found: "Conference", "Search sessions", "All sessions", "Breakfast", "University of Ionic". Missing: (none).

Bounded timestamped UI/intent transcript (all input/am commands, excluding repeated capture plumbing; full adb log is commands.jsonl)
2026-10-25T10:14:49.518Z adb -s emulator-5554 shell input tap 909 1970 => 0
2026-10-25T10:15:30.439Z adb -s emulator-5554 shell input tap 440 520 => 0
2026-10-25T10:15:50.203Z adb -s emulator-5554 shell input text IOnic => 0
2026-10-25T10:16:18.255Z adb -s emulator-5554 shell input keyevent 4 => 0
2026-10-25T10:16:32.456Z adb -s emulator-5554 shell input tap 460 962 => 0
2026-10-25T10:16:54.042Z adb -s emulator-5554 shell input tap 540 1463 => 0
2026-10-25T10:17:04.049Z adb -s emulator-5554 shell input tap 70 200 => 0
2026-10-25T10:17:16.129Z adb -s emulator-5554 shell input tap 420 520 => 0
2026-10-25T10:17:16.193Z adb -s emulator-5554 shell input keyevent 123 => 0
2026-10-25T10:17:16.457Z adb -s emulator-5554 shell input keyevent 67 67 67 67 67 => 0
2026-10-25T10:17:19.931Z adb -s emulator-5554 shell input keyevent 4 => 0
2026-10-25T10:17:26.101Z adb -s emulator-5554 shell input tap 194 1152 => 0
2026-10-25T10:17:40.296Z adb -s emulator-5554 shell input tap 894 1365 => 0
2026-10-25T10:17:40.338Z adb -s emulator-5554 shell input tap 195 1650 => 0
2026-10-25T10:18:25.577Z adb -s emulator-5554 shell input tap 195 1650 => 0
2026-10-25T10:18:38.003Z adb -s emulator-5554 shell input tap 669 1365 => 0
2026-10-25T10:18:50.563Z adb -s emulator-5554 shell input tap 778 662 => 0
2026-10-25T10:19:02.506Z adb -s emulator-5554 shell input tap 198 1152 => 0
2026-10-25T10:19:07.006Z adb -s emulator-5554 shell input tap 669 1365 => 0
2026-10-25T10:19:21.192Z adb -s emulator-5554 shell input tap 198 1152 => 0
2026-10-25T10:19:23.397Z adb -s emulator-5554 shell input tap 874 1365 => 0
2026-10-25T10:19:31.050Z adb -s emulator-5554 shell input tap 305 662 => 0
2026-10-25T10:19:41.868Z adb -s emulator-5554 shell input tap 195 1650 => 0
2026-10-25T10:19:44.078Z adb -s emulator-5554 shell input tap 874 1365 => 0
2026-10-25T10:19:53.788Z adb -s emulator-5554 shell input tap 778 662 => 0
2026-10-25T10:19:56.721Z adb -s emulator-5554 shell am start -a android.intent.action.VIEW -d conference-migration-rn://session/9999 dev.translationtest.rn => 0
2026-10-25T10:20:10.756Z adb -s emulator-5554 shell am force-stop dev.translationtest.rn => 0
2026-10-25T10:20:10.830Z adb -s emulator-5554 shell am start -a android.intent.action.VIEW -d conference-migration-rn://session/4 dev.translationtest.rn => 0
2026-10-25T10:20:39.364Z adb -s emulator-5554 shell input tap 365 827 => 0
2026-10-25T10:20:50.078Z adb -s emulator-5554 shell input tap 500 954 => 0
2026-10-25T10:20:50.188Z adb -s emulator-5554 shell input text http://127.0.0.1:8082 => 0
2026-10-25T10:21:02.352Z adb -s emulator-5554 shell input keyevent 4 => 0
2026-10-25T10:21:02.561Z adb -s emulator-5554 shell input tap 540 1102 => 0
2026-10-25T10:21:29.815Z adb -s emulator-5554 shell input tap 70 200 => 0

Limits/issues
- Required RN04-06-already-favorite-alert contains the schedule, not the alert. A separately named -retry pair contains the confirmation. Originals preserved; exact-name criterion remains unresolved for coordinator disposition.
- Direct cold VIEW intent opened the development-client launcher, not detail. Unassisted cold entry is unverified natively; automated only. Normal UI connection to http://127.0.0.1:8082 subsequently resumed the requested session/4 detail; supplemental capture records that assisted outcome.
- All screenshot pixels, readability, clipping and overlay clearance await coordinator inspection; no pixel PASS claimed.
- Unassisted cold entry and its back path: unverified natively; automated only. Assisted entry then header-back was observed in XML.
- Detail removal toggle was not exercised by the prescribed phase B sequence (add only); no native removal claim.
- Scrolled-position restoration, dark theme, keyboard/large-text acceptance and hardware navigation were not tested in this phase.

Pixels are not yet inspected. No screenshot has a pixel PASS. The coordinator must inspect the PNGs directly, including both supplemental pairs. No product/test/config edit, install/uninstall, pm clear, device restart/settings/IME action, Metro start/stop/restart, build, delegation, review dispatch, final handoff/manifest, staging, commit or push was performed. Only the prescribed package status line was updated. The app was left on the schedule after frame 14; no further device or Metro operations will be made by this executor. Phase C and exact-name mismatch disposition remain with the coordinator.
