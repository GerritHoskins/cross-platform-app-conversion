RN04 revision 1 — phase B checkpoint

Status: BLOCKED on exact-name frame-06 evidence; observation session complete and stopped. Not submitted. No pixel PASS.

Environment observed
  Branch migration/slice-1; HEAD c283c7eaa0d80ad72dd4d39fe8c10d986ea74257.
  emulator-5554 / RN01_API36 / dev.translationtest.rn.
  Initial foreground: topResumedActivity=ActivityRecord{233534046 u0 com.google.android.apps.nexuslauncher/.NexusLauncherActivity t5}.
  Final foreground: topResumedActivity=ActivityRecord{208955065 u0 dev.translationtest.rn/.MainActivity t28}.
  Metro GET http://127.0.0.1:8082/status: packager-status:running initially and packager-status:running finally.
  adb reverse --list: host-16 tcp:8082 tcp:8082, unchanged finally.
  App loaded from its normal launcher. Coordinator-owned emulator and Metro were not managed/restarted.

Sessions
  X: 4 — University of Ionic (Hall 3; 9:15 am – 9:30 am).
  Y: 1 — Breakfast (Dining Hall; 8:00 am–9:00 am).
  Both chosen from actual list; bundled IDs cross-checked.

Per-frame step and XML confirmation
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

Evidence
  migration/evidence/RN04/native/capture-index.json — 16 actual pairs: required 01–14 plus separately named 06-retry and 13-after-connect. Original 06 is NOT confirmation evidence.
  migration/evidence/RN04/native/commands.jsonl — every adb invocation with timestamp/exit code.
  migration/evidence/RN04/native/capture-notes.md — bounded timestamped UI transcript and limitations.
  migration/evidence/RN04/native/validation.json — parsed XML assertions, structural PNG checks, preservation/status-only/Git receipts.
  migration/evidence/RN04/native/support/ — intermediate helper state, receipts and XML, relocated intact from run scratch; capture pairs/index paths unchanged.

Blocked/unverified and deep links
- Required RN04-06-already-favorite-alert contains the schedule, not the alert. A separately named -retry pair contains the confirmation. Originals preserved; exact-name criterion remains unresolved for coordinator disposition.
- Direct cold VIEW intent opened the development-client launcher, not detail. Unassisted cold entry is unverified natively; automated only. Normal UI connection to http://127.0.0.1:8082 subsequently resumed the requested session/4 detail; supplemental capture records that assisted outcome.
- All screenshot pixels, readability, clipping and overlay clearance await coordinator inspection; no pixel PASS claimed.
- Unassisted cold entry and its back path: unverified natively; automated only. Assisted entry then header-back was observed in XML.
- Detail removal toggle was not exercised by the prescribed phase B sequence (add only); no native removal claim.
- Scrolled-position restoration, dark theme, keyboard/large-text acceptance and hardware navigation were not tested in this phase.

Remaining work
  Coordinator directly inspects screenshot pixels, including overlays/readability and supplemental evidence; decides disposition of immutable frame-06 mismatch. Then separately authorized phase C writes migration/handoffs/RN04.md and the hashed revision manifest, reconciles phase A and native limits, and follows the later review gate. This executor writes neither final handoff nor submission manifest, and dispatches no review. Product/software checks were not rerun in evidence-only phase B. No app/test/config edits, installs, settings/IME changes, environment repairs, staging, commits or pushes. Only the requested work-package status line changed. App left on schedule after frame 14; no further emulator/Metro interaction. STOP.
