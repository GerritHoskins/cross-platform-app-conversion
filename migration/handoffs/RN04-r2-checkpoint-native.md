RN04 revision 2 — native-only checkpoint

Status: BLOCKED before frame 01. No native-removal evidence or pixel acceptance.

Environment observed
  migration/slice-1; HEAD c283c7eaa0d80ad72dd4d39fe8c10d986ea74257.
  emulator-5554 / RN01_API36 / dev.translationtest.rn.
  Metro initial/final: packager-status:running / packager-status:running.
  Reverse initial/final: host-16 tcp:8082 tcp:8082 / host-16 tcp:8082 tcp:8082.
  Initial screen: favorited Ionic Pro detail. Final screen: empty-search schedule, All sessions selected; keyboard mInputShown=false.

Setup and blocker
  Header Navigate up returned to Favorite sessions with search Ionic and favorited Ionic Pro.
  Search focus, End 123, five Backspaces 67, then keyevent 4 intended to dismiss keyboard after dumpsys mInputShown=true.
  The following UI XML showed launcher instead of schedule. No focused-app XML check was made between text editing and keyevent 4: executor setup/navigation mistake, not an established product defect.
  With app off a usable screen, visible launcher icon was tapped under the recovery exception. Empty-search All schedule appeared; Favorite sessions then showed No favorite sessions. Ionic Pro had disappeared without the mandated Remove + confirm flow.
  Stopped rather than claiming compliant cleanup or recreating initial state. Finally selected All sessions and XML-confirmed schedule.

Per-frame XML confirmations
  RN04-R2-01-detail-favorited: NOT ACQUIRED.
  RN04-R2-02-favorites-with-x: NOT ACQUIRED.
  RN04-R2-03-detail-from-favorites: NOT ACQUIRED.
  RN04-R2-04-detail-removed: NOT ACQUIRED.
  RN04-R2-05-favorites-after-detail-removal: NOT ACQUIRED.
  No PNGs or retry pairs. Detail-removal behavior remains unverified; no product change indicated or made.

Evidence
  migration/evidence/RN04/r2-native/capture-index.json — status BLOCKED, captures=[], actual setup commands and incident observation.
  migration/evidence/RN04/r2-native/capture-notes.md — timestamped transcript and limitations; pixels are not yet inspected.
  migration/evidence/RN04/r2-native/commands.jsonl — every adb command with timestamp/exit code.
  tools/qwen-supervisor/.runs/sol-rn04-r2-native-20261025/ — helper, intermediate incident XML and result.json.

Unverified / next boundary
  Required native five-frame sequence and coordinator pixel inspection are not complete. Coordinator must disposition the setup incident and authorize recovery; the nonempty r2-native directory must not be overwritten or silently reused.
  Export-inventory finding, final handoff and r2 manifest are deferred. Existing evidence, app/test/config, work package and submissions untouched. No staging/commit/push or review dispatch. STOP.
