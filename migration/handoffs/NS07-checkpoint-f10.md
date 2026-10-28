NS07 checkpoint F10 — fifth software-only fix run

Status: CHECKPOINTED. STOP before F11. No device confirmation, acceptance,
package handoff, submission, freeze or review dispatch.
Observer: Hermes GPT-6.1 Sol high (software).
Branch migration/slice-1; HEAD d7a4067e7849f119b937fd3723c389b7b834c71c.

F10-FILTER-RECREATE: IMPLEMENTED, awaiting F11 device confirmation.

Cause of both symptoms
NativeScript Android recreates the activity for fontScale (manifest unchanged).
Its DialogFragment skips normal close/callback on configuration destruction;
the replacement activity removes the restored numeric-tag modal fragment.
The Schedule JS Page/root Frame survive, but Vue's module-global modalStack and
pending promise still retain the detached filter Frame. The later Filter tap
targets that Frame instead of the restored root and fails in native presentation.

Important source/log finding: despite the historical six-pattern A06 PASS,
F9-FS-filter-recovery-window-logcat.txt:169-184 contains a D-priority 'Unhandled
promise rejection' and FragmentTransaction NullPointerException from openFilter.
It was not a Schedule guard ignoring a tap, and the exception spelling escaped
the historical scan. No earlier verdict/evidence is edited. Full file:line source
sequence and bounded evidence: migration/evidence/NS07/f-fix5/analysis.md.

Change
Only migration/nativescript/src/components/TrackFilter.vue changes from F7.
A per-mounted-modal activityStopped subscription checks that the event is for
the modal Frame's current host and isChangingConfigurations() is true. It calls
Frame.closeModal() with no result BEFORE native destruction, using normal core
and Vue cleanup; draft discarded, no filter commit, callback once. On unmount
it unregisters. No Java Activity/observer/manager is cached across events.
The next Filter tap creates a new modal from the committed store selection.
Ordinary background stop and foreign activities do not cancel the modal.
Schedule.vue/SessionDetail.vue and all three F7 status-bar lifecycle blocks are
byte-identical to entry. Other TrackFilter handlers/templates/styles are unchanged
except the Frame loaded binding. No manifest/config/dependency/state/test edit.

Library limit disclosed, not patched: native onDismiss can retain an internal
modalMap entry while changing configurations, even after explicit close. That
map does not select Vue's next target; core/common links and both modal stacks
are cleared, owner unmounted, promise settled. F11 must check the actual Android
restore/remove ordering and no stray restored dialog/errors. No native timing
proof or complete native-map leak fix is claimed by software probes.

Software verification
Entry gate passed before any migration write, including complete raw porcelain,
empty index, exact F7 diff and candidate 5 fingerprint. Entry hashes cover 65,100
migration/protected/history paths, including all 89 tracked NativeScript files
and all six redaction records. Final comparison: only TrackFilter.vue changed;
protected paths, package manifests/lockfiles and inspected installed sources
unchanged after npm ci. Root package-lock.json status-only, never read/hashed/
diffed/edited; IDEA.md contents never read. NS07.md/checklist untouched.

npm --prefix migration/core test: PASS. Supplemental JSON reporter: 53 passed,
0 failed. npm ci, verify:core before/after core tests (byte-identical output),
typecheck and Android build: PASS. Both target JSON reports: 7 files / 115 tests,
115 passed, 0 failed/pending. No product tests added. Supplemental execution of
the actual component and installed Vue/core modal methods with native adapters:
99 lifecycle assertions passed across repeated discard/reopen/Done/Close flows;
not Android/device execution. Cumulative diff fix.diff; F10-only delta
fix-f10-delta.diff, both under migration/evidence/NS07/f-fix5/.
Whitespace check passed with root lockfile explicitly excluded to honor the
no-diff rule. git diff --cached --exit-code passed; nothing staged.

Candidate 6
C:/Users/Gerrit/job-search/POCs/cross-platform-translation-test-app-main/migration/nativescript/platforms/android/app/build/outputs/apk/debug/app-debug.apk
118191268 bytes
SHA-256: ca575f8091724a05783bfbbfb086e71a3f2f9ce454a6f2d60d447a6380766593
Different from candidate 5, recorded before rebuilding:
f6afb8fd0c5cac73515af4c9ffad26c4ab95cdaa9e22a0810ab8874554a94363.
Packaged assets/app/bundle.mjs: 160275 bytes; SHA-256
6fbe0901e26774cdc005d5d3f779861895fea1cf8ac17d3f71141ec7a4d99c5a.
Original markers plus F5 getSystemBarsAppearance, F7 onViewDetachedFromWindow
and F10 isChangingConfigurations present, bounded excerpts in candidate6.json.
No third-party binary/full library source copied into f-fix5.

F11 must verify, without cold-launch recovery
Install and independently hash candidate 6. Repeated font changes with filter
OPEN: 1.0 -> 1.3, open again -> 2.0, open again -> restore 1.0, and direct
1.0 -> 2.0 -> 1.0. Each recreation should close/discard; ONE fresh-XML Filter tap
must reopen, switches must match store, Done and Close must work and allow the
next reopen. Repeat with uncommitted changed drafts (including a changed switch
and all/none), and after committing a known subset: draft loss must not apply
it; reopen matches committed subset; Done applies once, Close discards once.
Keep bounded logs across changes/reopening before process reset; include activity/
window identity, not PID alone. Scan the old A06 patterns PLUS case-insensitive
Unhandled promise rejection, NullPointerException, FragmentTransaction, Could not
show modal, detached/destroyed FragmentManager/state-saved errors; no lifecycle/
cleared-reference/dead-observer/native-event/app-errorHandler/fatal errors.
Check for stray restored modal and extra taps. Ordinary background/resume must
not trigger new cancellation if approved. Exercise Done, toolbar Close and Back
under approved rules. G07 live both directions on all pages and post-dismiss;
short Schedule/detail font, G05 radio/swipe, search/own clear, mode, detail Back,
favorites and swipe regression. Restore/read back settings; coordinator grades
all pixels and keyboard privacy. Detailed matrix in analysis.md.

Tooling notes
Two supplemental harness failures retained, not overwritten: core JSON reporter
used a Windows path instead of file URL (exit 7); first modal probe adapter omitted
the ViewCommon event constant (exit 1). Both were completed numeric spawnSync
exits (children reaped), no transport/non-TTY failure or possible running child;
corrected runs passed. Product code unchanged by either correction. npm ci's
existing 8 audit findings/deprecations/pending script approvals and upstream build
DEP0190 are retained. All authored child spawns use arrays/shell:false, pinned
Node first on PATH and remove NoDefaultCurrentDirectoryInExePath. Prescribed
core clean internally uses node -e; no direct node -e/python -c was authored.
Authored text LF; raw subprocess logs may contain CRLF. Initial outer terminal
metadata unavailable and recorded null, not invented. Child receipts/commands
are timed; file-tool actions remain in session stream.

No adb/emulator/device interaction, delegation, staging/commit/push, or prior-
record edit. All device acceptance remains for F11.
Results: migration/evidence/NS07/f-fix5/results-f10.json.
Supervisor: tools/qwen-supervisor/.runs/sol-ns07-r1-f10-20261028/result.json.
STOP.
