NS07 checkpoint F3 — second software-only fix run

Status: CHECKPOINTED. STOP before F4; not acceptance, package handoff or freeze.
Observer: Hermes GPT-6.1 Sol high (software).
Branch migration/slice-1; HEAD d7a4067e7849f119b937fd3723c389b7b834c71c.

Fixes — IMPLEMENTED, not device-confirmed

F3-A11Y / G05 accessibility:
NativeScript-Vue passes undefined to set-value, which deletes rather than calls
an inherited property setter; previous selected/disabled accessibility state
therefore survives. Mode Buttons now use radioButton accessibility roles and
always-defined checked/unchecked states; native isEnabled=ready is retained.
Labels, layout, colours and setMode commits are unchanged. The same undefined
reset on the detail favorite Button is replaced with unchecked (its Button role
continues to expose selected). No other favorite behavior changes.

F3-G07-LIVE / G07-1:
Core emits systemAppearanceChanged before refreshing edge-to-edge; full-screen
modal configuration also refreshes its own window. uiMode is handled, so no
Page reload reapplies F1's style. Each Page registers once on loaded, unregisters
on unloaded, and posts a guarded updateStatusBarStyle('dark') to its native view
so it runs after those refreshes. F1's cold/navigation Page attributes remain.

F3-G05-3:
The fixed 96 dp strip cannot contain scaled Favorite text. Its Button now measures
single-line text at auto width, minimum 96 dp, with padding. Its positive actual
width is recorded per row on loaded/layoutChanged; the open content's translateX
uses that measured width. Automation IDs, accessibilityHidden, A1 visible-only-
while-open rule, labels, action/gesture handlers and entire column-1 Button stay
unchanged. No state logic was moved; no product tests/config/dependencies changed.

Product files: Schedule.vue, SessionDetail.vue, TrackFilter.vue only, under
migration/nativescript/src/components/.
Sources/causes/F4 procedure: migration/evidence/NS07/f-fix2/analysis.md.
Cumulative diff: migration/evidence/NS07/f-fix2/fix.diff.
F3-only delta: migration/evidence/NS07/f-fix2/fix-f3-delta.diff.

Software checks

Core npm test passed twice; supplemental JSON reporter: 53 passed, 0 failed.
Target npm ci passed; target package.json/lockfile hashes unchanged. Installed
runtime sources used for analysis have identical hashes after ci. verify:core
passed before/after the repeated core test with byte-identical results.
Typecheck passed. Two target JSON reports each show 7 files / 115 passed tests,
0 failed/pending. Android build passed. Eight software-only source/binding/
lifecycle probes passed; their views/events are mocked, not Android proof.
89 NativeScript tracked-file hashes compared with entry: only the three fix
files changed. All 50862 protected hashes unchanged, including prior phases,
three redactions, NS07.md, checklist and the unrelated root lockfile. IDEA.md
contents were never read or hashed. git diff --check passed; index is empty.

Candidate 3

APK: C:/Users/Gerrit/job-search/POCs/cross-platform-translation-test-app-main/migration/nativescript/platforms/android/app/build/outputs/apk/debug/app-debug.apk
Size: 117669928 bytes
SHA-256: 0d4c089755b895d09c80fd406aa6c671947691b6124ad9e399d9ff3025cca50e
Differs from recorded candidate 2 (5f9f7d1a...).
Packaged assets/app/bundle.mjs: present, 152533 bytes, SHA-256
c38947e4818e27f1098be797a346cf3a42bd5e5c501d0ecca1dfb5291dc0aa55;
required original and per-F3 markers present (bundle-evidence.json).

Retained incidents/warnings

The initial read-only terminal discovery preceded the receipt helper, and the
tool did not expose its execution timing. bootstrap-provenance.json records this
provenance limitation without inventing timestamps; all gate commands were
independently recaptured and evaluated before the first migration write.

The first supplemental core JSON-reporter invocation failed (exit 7) because
Node's Windows ESM loader requires a file URL, not C:/... for --test-reporter.
The check wrapper exited 1. Both receipts/logs remain; file-URL retry passed,
then typecheck/tests completed. No product change or fabricated counts.
npm ci reports 8 vulnerabilities (2 low, 5 moderate, 1 high), deprecations and
3 pending script approvals; no dependency/audit-policy change. Build retains
upstream DEP0190 shell warning; authored helpers use spawnSync argument arrays,
shell:false, pinned Node first on child PATH and removed
NoDefaultCurrentDirectoryInExePath. The prescribed existing core clean script
internally uses node -e; no direct eval command/helper was authored.

F4 must verify

Install/hash candidate 3 after the human's harmless-clipboard confirmation.
At 1.0/1.3/2.0, cold ready and repeated All -> Favorite -> All switches must expose
both mode nodes enabled=true, checkable=true, with checked=true on exactly the
active mode and false on the other. Use checked, not selected, for mode state.
Verify detail favorite selected resets too; actual TalkBack remains follow-up.
Switch night on AND off with Schedule, detail and the filter modal already open,
without navigation/reopen; settle the queue, inspect clock/icons in full-resolution
pixels, and confirm no recreation. Rerun cold/navigation/modal/dialog regressions.
Reveal fully visible Favorite/Remove strips at all font scales, including recycled
rows: pixels must show no clipping, word break, overlap or gap. XML displacement
of session-<id>'s right edge from closed to settled-open gives strip width in px;
divide by recorded density for dp (96 at 1.0; growth allowed at large scale).
Confirm closed actions collapse and remain accessibility-hidden. Repeat the
assigned regression subset and F4 keyboard-menu attempt per NS07.md; keyboard
G01/G02/G08 and coordinator pixel acceptance remain outside F3.

Results: migration/evidence/NS07/f-fix2/results-f3.json.
Receipts/logs: migration/evidence/NS07/f-fix2/commands.jsonl.
Supervisor: tools/qwen-supervisor/.runs/sol-ns07-r1-f3-20261028/result.json.
No device/emulator interaction, delegation/review dispatch, history/redaction
change, staging, commit, push, final handoff, submission or freeze. STOP.
