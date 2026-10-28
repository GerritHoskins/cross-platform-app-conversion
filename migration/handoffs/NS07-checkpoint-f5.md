NS07 checkpoint F5 — third software-only fix run

Status: CHECKPOINTED. STOP before F6; not visual acceptance, package handoff,
submission, freeze or review dispatch.
Observer: Hermes GPT-6.1 Sol high (software).
Branch migration/slice-1; HEAD d7a4067e7849f119b937fd3723c389b7b834c71c.

F5-G07-LIVE / G07-1: IMPLEMENTED, not device-confirmed.

Cause / source-ordered writes
Application.systemAppearanceChanged fires before activity refresh:
application/application-common.js:749-761 -> application/application.android.js:423-430.
The activity refresh goes through utils/native-helper-for-android.js:279-298,400
and installed widgets Utils.java:195 -> resolved AndroidX EdgeToEdge.kt:296 ->
WindowInsetsControllerCompat.java:674 then :677 (light: legacy status bit set,
modern appearance 8/8), or :682 then :685 (dark: legacy clear, modern 0/8).
The full-screen modal has an independent DialogFragment.onConfigurationChanged
(ui/core/view/index.android.js:231-245), widgets Utils.java:99-104 first copies
activity Window attributes into the dialog, then :130 invokes the same ordered
legacy/modern status writes ON THE DIALOG Window. Navigation writes mask a
different bit. These refresh methods do not post a later status write themselves.
F3's event-time single View.post does not establish a traversal/config completion
boundary, especially for the independent dialog path. The installed sources do
NOT explain the exact three-direction F4 failure split; no invented delayed core
write or universal ordering of independent callbacks is claimed.
All core-relative paths above are under migration/nativescript/node_modules/
@nativescript/core; Java/Kotlin locations come from installed AAR line tables.
Full order, bounded bytecode evidence and platform-source limitations: f-fix3/analysis.md.

Change / files
Only Schedule.vue, SessionDetail.vue and TrackFilter.vue under
migration/nativescript/src/components/ changed. Each loaded Android API30+ Page
registers one OnPreDraw observer, conditionally reapplies the existing dark style
only when its actual closest Window lacks LIGHT_STATUS_BARS, and removes the
observer on unload (including replaced/merged observers). Page identity/isLoaded
guards cover stale dispatches. No timer, repeated delay, next-frame fallback,
process-wide subscription, fragment monkeypatch or insets-listener replacement.
TrackFilter's Page already resolves its parent modal Frame's dialog correctly
(core ui/core/view/index.android.js:1148-1158). Its observer covers the dialog;
underlying loaded Schedule covers the activity Window after modal dismissal.
All other F1/F3 code/templates/styles are byte-identical outside status lifecycle
blocks and the unused Application imports (software assertion in lifecycle probes).
Cumulative diff: migration/evidence/NS07/f-fix3/fix.diff.
F5-only delta: migration/evidence/NS07/f-fix3/fix-f5-delta.diff.

Verification
Entry gate passed before migration writes, including exact F3 diff and candidate 3
size/hash. Core npm test passed twice; supplemental JSON: 53 passed, 0 failed.
Target npm ci passed; target manifest/lock and inspected core runtime source/AAR
hashes unchanged. verify:core passed before/after repeated core tests with identical
output. Typecheck passed after one nullable-reference correction (failed receipt
retained). Both target JSON reports: 7 files / 115 tests, all passed, none pending.
24 software-only lifecycle/window/unchanged-code probes passed; mocks are not native
scheduling or pixel proof. Android build passed; git diff --check and empty-index
check passed. Preservation compared 58367 entry hashes, including 89 NativeScript
tracked files: only the three fix files changed; protected files/history/redactions,
NS07.md, checklist, configs and lockfiles unchanged. IDEA.md contents not read/hashed.

Candidate 4
C:/Users/Gerrit/job-search/POCs/cross-platform-translation-test-app-main/migration/nativescript/platforms/android/app/build/outputs/apk/debug/app-debug.apk
118191269 bytes
SHA-256: 68928e565ba6c340d230088d28eb4c19bebb3d0dfc4b36089a02a0951df94e44
Differs from candidate 3 recorded at entry (0d4c089755b895d09c80fd406aa6c671947691b6124ad9e399d9ff3025cca50e).
Packaged assets/app/bundle.mjs: 154626 bytes; SHA-256
ccbaf3d2ce6f394da20c06a994bd80f62422f76d2b8b92ca686604fd21dfa484.
Original required markers and F5 OnPreDrawListener/getSystemBarsAppearance present.

F6 must verify
Install/hash candidate 4. At least five complete yes/no cycles on EACH already-open
Schedule/detail/filter, no navigation between switch and capture. Capture first
changed rendered frame, approximately 0.5 s and 3 s; full-resolution clock/icons
must remain dark on white in every settled frame in both directions. Record page,
Activity and focused dialog Window identity, not PID alone. Keep the modal open
through switches, inspect its own status bar, close via Done and separately Close,
then inspect Schedule immediately and after reopening: this proves both dialog
and activity Windows, not merely one. If available, bounded window evidence should
show requested appearance bit 8 on each Window; coordinator pixels remain required.
Spot-check cold light/dark, dark detail toolbar Back, own SearchBar clear, G05 at
default/2.0, and assigned regression subset. XML-bound app taps inside the edge zone
are allowed in F6; gestures still are not. Human clears Gboard clipboard history first.

Retained limits / warnings
No device/emulator/adb command, delegation, review dispatch, staging, commit, push,
history/redaction edit or final package handoff. F6/coordinator visual confirmation
remains outstanding. Only API35 framework source is installed locally, so its
traversal contract is corroboration, not inspection of the API36 device runtime.
Initial outer terminal timings were unavailable; bootstrap/outer provenance records
use null rather than invented values. Full initial raw porcelain is retained from
the real terminal capture; gate independently evaluated full stdout before writing.
Initial binary-extraction and absent-class javap failures were synchronous completed
failures; no transport/non-TTY error, orphan helper or retry of in-flight work.
npm ci retained 8 audit findings (2 low, 5 moderate, 1 high), deprecations and three
pending install-script approvals. Existing build retains upstream DEP0190 warning;
authored child invocations use spawnSync argument arrays, shell:false, pinned Node
first on PATH, with NoDefaultCurrentDirectoryInExePath removed. No policy/dependency
change. Prescribed core clean internally uses node -e; none was directly authored.

Evidence: migration/evidence/NS07/f-fix3/results-f5.json and commands.jsonl.
Supervisor: tools/qwen-supervisor/.runs/sol-ns07-r1-f5-20261028/result.json.
STOP.
