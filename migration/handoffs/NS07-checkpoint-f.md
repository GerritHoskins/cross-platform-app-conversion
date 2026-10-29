NS07 checkpoint F — F1 software-only fix run

Status: CHECKPOINTED. STOP before F2; not package acceptance, final handoff or freeze.
Observer: Hermes GPT-6.1 Sol high (software).
Branch: migration/slice-1
HEAD: d7a4067e7849f119b937fd3723c389b7b834c71c

Fixes (IMPLEMENTED; visual confirmation pending)

G05-1: native TabHost indicators share too little width and clip enlarged labels.
Schedule.vue:107 replaces only the mode control with two full-column wrapping
native Buttons (minimum height, padded), keeping All sessions / Favorite sessions,
explicit accessibility labels and selected state, and the same setMode commit.

G05-2: ordinary row action text exceeds its unpadded outline at scale 2.0.
Schedule.vue:194 adds textWrap and padding=8,16 to the auto-column Button.
Automation IDs/accessibilityLabel and handlers are unchanged. Static comparison
confirms the entire swipe-action Button/row-content subtree, A1 visibility,
96 dp strip, translation, row gestures and tap/favorite logic are unchanged.

G07-1: system-dark status icons were light over the intentionally light pages.
Schedule.vue:91, SessionDetail.vue:27, TrackFilter.vue:22 explicitly set Page
statusBarStyle=dark and androidStatusBarBackground=#ffffff. Installed core 9.1.3
API >=30 setter confirms dark gives dark icons and Page load reapplies it.
The installed legacy API 23-29 mapping differs; no legacy-platform claim.
Home remains unchanged (Frame only).

Only product changes: Schedule.vue, SessionDetail.vue, TrackFilter.vue.
No state logic moved and no tests/dependencies/configuration changed.
Per-fix source references/rationale: migration/evidence/NS07/f-fix/analysis.md
Exact hunks: migration/evidence/NS07/f-fix/fix.diff

Software checks

Core npm test passed, repeated after first verify:core; JSON reporter confirms
53 passed / 0 failed. Target npm ci passed; package.json and lockfile hashes
unchanged. Both verify:core results are byte-identical across core rebuild/test.
Typecheck passed. Target JSON test runs each passed 7 files / 115 tests, zero
failed/pending, identical test identities. Android build passed.
Static contract audit passed. git diff --check and empty-index check passed.
All 89 NativeScript tracked files were compared with entry hashes;
only the three fix files changed. 42863 baseline files were audited;
all protected hashes unchanged. Original status paths retained; only authorized
fixes/new F1 evidence/checkpoint added. Root lockfile retained untouched; NS07.md,
checklist, A/B/G histories and both redactions are unchanged. IDEA.md contents
never read (excluded from SHA snapshots; unchanged tracked status).

Candidate 2

APK: C:/Users/Gerrit/job-search/POCs/cross-platform-translation-test-app-main/migration/nativescript/platforms/android/app/build/outputs/apk/debug/app-debug.apk
Size: 117668721 bytes
SHA-256: 5f9f7d1abee8fc49989d666ef1aefce460fc4f8a95c611d6be186e82362d2409
Fresh APK timestamp follows build start. Packaged assets/app/bundle.mjs is present,
hashed, and contains swipe-action-, Filter Sessions, ns04SessionId and one exact
compiled marker from each fix. See candidate-2.json and bundle-evidence.json.

Warnings / retained helper incident

- npm ci reports 8 vulnerabilities (2 low, 5 moderate, 1 high), deprecations and 3 pending script approvals; no dependency/policy/audit-fix change.
- NativeScript build emits upstream DEP0190 shell-option warning; authored helpers use spawnSync argument arrays and shell:false.
- Initial bundle-evidence check exit 1 assumed minified colon spacing; preserved original receipt/logs. Corrected helper marker to actual compiled spacing and retry passed without product/build changes.
- Prescribed core npm test script internally runs its existing node -e clean script; no direct node -e/python -c command or new eval helper was authored.

Open F2 work

- F2 must install and verify candidate 2, rerun G05 at default/1.3/2.0, and inspect both labels and Favorite/Remove button bounds, including selected accessibility state.
- F2 must rerun G07 on Schedule, SessionDetail and TrackFilter: light, dark cold launch, live light/dark switch and navigation/modal transitions; coordinator pixel confirmation remains required.
- F2 keyboard G01/G02/G08 attempt and short phase-B regression subset remain as assigned; no device or visual acceptance in F1.
- Manual TalkBack follow-up from G03/G04 remains; software accessibility wiring is not speech/focus verification.

Results: migration/evidence/NS07/f-fix/results-f.json
Receipts/logs: migration/evidence/NS07/f-fix/commands.jsonl
Supervisor: tools/qwen-supervisor/.runs/sol-ns07-r1-f-20261027/result.json

No emulator/device interaction, delegation/review dispatch, submission/freeze,
staging, commit or push. This is only the requested checkpoint. STOP.
