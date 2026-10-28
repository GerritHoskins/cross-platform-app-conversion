NS07 checkpoint F7 — fourth software-only fix run

Status: CHECKPOINTED. STOP before F8. Not device confirmation, acceptance,
package handoff, submission, freeze or review dispatch.
Observer: Hermes GPT-6.1 Sol high (software).
Branch migration/slice-1; HEAD d7a4067e7849f119b937fd3723c389b7b834c71c.

F7-A06-UNLOAD / A06: IMPLEMENTED, awaiting F8 device confirmation.

Cause
F5 caches a ViewTreeObserver whose Java receiver can be cleared before unload;
calling isAlive() itself then throws, so its fallback never executes. The F6
stacks show Page unload during Activity.onStop, BEFORE NativeScript onDestroy
teardown, correcting the proposed destruction-before-unload explanation.
Android also merges/kills a pre-attach floating observer on attach. The exact
collection instant/observer replacement for F6's IDs is not proved.
Installed NativeScript lifecycle sources, installed runtime Java bytecode and
API35 framework sources are cited file:line in f-fix4/analysis.md; API35 is
contract corroboration, not inspection of the API36 device implementation.
The actual optimized-with-inspector runtime's Java classes match the inspected
regular runtime byte-for-byte. No third-party binary was copied into f-fix4.

Change / files
Only migration/nativescript/src/components/{Schedule,SessionDetail,TrackFilter}.vue.
Each uses the same lifecycle structure: no saved ViewTreeObserver/native View,
Window or controller; fresh observer lookup for each immediate add/remove;
remove in the native detach callback before AttachInfo is cleared, and also
on Page unload; unregister the attach callback on unload. A plain JS boolean
prevents duplicate registration after floating-observer merge and enables
reattach while still loaded. No catch/suppression, timer or config/manifest edit.
F5's per-Page pre-draw callback is byte-identical: API30+, Page-loaded registration,
getClosestWindow(), conditional dark-style repair only if LIGHT_STATUS_BARS is
clear. All non-lifecycle code/templates/styles are byte-identical to F5.
Cumulative diff: migration/evidence/NS07/f-fix4/fix.diff.
F7-only delta: migration/evidence/NS07/f-fix4/fix-f7-delta.diff.

Software checks
Entry gate passed before migration writes, including full raw porcelain,
empty index, exact F5 diff and candidate 4 size/hash.
Core npm test passed twice; supplemental JSON reporter: 53 passed, 0 failed.
Target npm ci passed; package.json and target lockfile hashes unchanged.
verify:core passed before/after repeated core tests with byte-identical output.
Typecheck passed. Both NativeScript JSON reports: 7 files / 115 tests, all passed,
none pending. 45 lifecycle/unchanged-code model assertions passed; not native proof.
Android build passed. Final diff whitespace check excludes the unrelated root
package-lock.json explicitly, to honor the prohibition on diffing it. Index empty.
61,823 entry hashes compared, including all 89 NativeScript tracked files: only
the three fix files changed; protected migration history, all five redactions,
NS07.md, checklist, manifests/configs and lockfiles unchanged. An additional 212
root protected paths match the prior preservation baseline; entry porcelain was
clean for those paths. Root lockfile and IDEA.md contents were never read/hashed.

Candidate 5
C:/Users/Gerrit/job-search/POCs/cross-platform-translation-test-app-main/migration/nativescript/platforms/android/app/build/outputs/apk/debug/app-debug.apk
118191268 bytes
SHA-256: f6afb8fd0c5cac73515af4c9ffad26c4ab95cdaa9e22a0810ab8874554a94363
Differs from candidate 4 recorded at entry:
68928e565ba6c340d230088d28eb4c19bebb3d0dfc4b36089a02a0951df94e44.
Packaged assets/app/bundle.mjs: 158856 bytes; SHA-256
7220f3d4bb91444e305b199a5fe5deb67765c5c19e0855a92405411b877a0594.
Required original markers, F5 getSystemBarsAppearance and F7
onViewDetachedFromWindow are present with bounded excerpts in candidate5.json.

F8 must verify
Install/hash candidate 5. On EACH foreground Schedule, SessionDetail and already-open
TrackFilter, change font_scale 1.0 -> 2.0 -> 1.0 under approved settings rules;
retain bounded logs spanning every change before any cold relaunch, old/new Activity
and focused-window identity. Exercise navigation/unload/reload, detail toolbar Back,
modal Done/Close and reopening after recreation. A06 must have no cleared-reference,
Failed to get Java object by ID, native-handler error, Vue app errorHandler warning,
unload/detach exception, dead-ViewTreeObserver exception or fatal-crash marker.
Check G07 live both directions on each already-open page, including the modal's own
Window and Schedule immediately after dismissal; coordinator grades full-resolution
clock/icons. Run the approved regression subset and G05/accessibility/swipe spot
checks. Restore/re-read settings. No F8 result is claimed in this checkpoint.

Retained tooling notes
Two supplemental harness failures are retained: an overly broad mock assertion
required unregistering through an intentionally nulled native getter (corrected to
no throw/no live pre-draw listener; production unchanged), and a core JSON run used
root cwd instead of migration/core (fixture paths require core cwd; corrected run
passed). Both were completed synchronous exits, not transport/non-TTY failures or
orphaned children. Required core npm tests were green both times.
npm ci retained 8 audit findings, deprecations and pending script approvals; existing
build emitted upstream DEP0190. No policy/dependency changes. All authored children
use spawnSync argument arrays, shell:false, pinned Node first on PATH and remove
NoDefaultCurrentDirectoryInExePath. Prescribed core clean internally uses node -e;
none was directly authored. Initial outer-terminal timing was unavailable and is
recorded as null, not invented. Authored text LF; raw subprocess logs can have CRLF.
No adb/device/emulator action, delegation, staging, commit, push or prior-record edit.

Evidence: migration/evidence/NS07/f-fix4/results-f7.json and commands.jsonl.
Supervisor: tools/qwen-supervisor/.runs/sol-ns07-r1-f7-20261028/result.json.
STOP.
