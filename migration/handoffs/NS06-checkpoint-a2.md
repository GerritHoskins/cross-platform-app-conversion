# NS06 checkpoint A2

Status: CHECKPOINTED — Amendment A1 and all Phase A run 2 static gates PASS. STOP before device observation.
Observer: Hermes GPT-6.1 Sol high (software). Human-chosen model overrides qwen.md parent wording.
Branch/HEAD: migration/slice-1 / 96139c00be18030b68e0fa0f14c64a78df853e32.

## A1-only change

Schedule.vue:163 adds exactly one attribute to the existing swipe-action Button:

    :visibility="swipeState.openId === item.session.id ? 'visible' : 'collapse'"

No other Schedule.vue bytes changed from run 1. Text, swipe-action-ID automationText, accessibilityHidden, right alignment, width 96, minHeight 48 and tap handler are unchanged, as are all other D1–D6 wiring. Reducer and every test are unchanged. Exact diff: migration/evidence/NS06/a-gates2/amendment-a1.diff; byte assertion: amendment-a1.json.

## Static/automated/build evidence

Entry branch, exact HEAD, empty index and complete untrimmed porcelain were captured, buffered and evaluated before any migration/ write. All three target hashes match both run 1 final-audit.json and checkpoint-audit.json. a-gates2/ was absent. IDEA.md was hashed only, never read as text. Node v24.19.0 / npm 11.16.0; pinned Node first on every child PATH, NoDefaultCurrentDirectoryInExePath deleted case-insensitively; spawnSync argument arrays, shell:false. Applicable instruction discovery found none.

Commands all exit 0 (sequential):
- npm --prefix migration/core test before A1: 53 passed, 0 failed.
- npm --prefix migration/core test after A1: 53 passed, 0 failed.
- Target npm ci: root/target manifest and lockfile hashes unchanged.
- npm run verify:core: public compiled-core/fixture checks passed.
- npm run typecheck: passed.
- npm test twice with default + JSON reporters: each 7 files / 115 passed, 0 failed/pending. Parsed reporter identities/counts match run 1, retaining its 94 NS05 + 21 NS06 tests.
- npm run build:android: passed; build only, no install/run.

APK: C:/Users/Gerrit/job-search/POCs/cross-platform-translation-test-app-main/migration/nativescript/platforms/android/app/build/outputs/apk/debug/app-debug.apk
Size: 118504855 bytes.
SHA-256: e58c43978bb5ae3c6b632160ee4d5a731c5ad3826e8d76f7debd02773810b341

Packaged assets/app/bundle.mjs: 145745 bytes; SHA-256 76662d0e925c21cc70566a0fc3c7281f07b32c5d57d06ebb2d0bf52a9ea7715b. Bounded exact-APK snippet at byte offset 60973 contains swipe-action-ID immediately followed by visibility: $setup.swipeState.openId === item.session.id ? 'visible' : 'collapse'. See bundle-evidence.json; no full bundle dump. These are packaged-code assertions, not proof of native rendering.

Final audit compares entry hashes: 261 protected paths unchanged; 87 NativeScript tracked files with only Schedule.vue changed; 1553 run 1 records byte-identical and record set unchanged. NS06.md unchanged. Reducer/test and dependency hashes unchanged. git diff --cached --exit-code and git diff --check pass. Raw-porcelain class audit allows only unchanged run 1 paths/coordinator package/targets, A1 Schedule.vue, new a-gates2 evidence and this checkpoint. Authored text is LF. See final-audit.json and checkpoint-audit.json.

Receipts and bounded stdout/stderr logs for each child command/assertion are indexed by commands.jsonl. The no-index exact A1 diff intentionally exits 1 (differences found), recorded as expected rather than a failed gate. Earlier read-only CLI probe is disclosed in entry-gate.json; no fabricated terminal-tool timing.

## Open items and boundary

- Phase B run 2 has not run. Native reveal/hit testing and all swipe-path dialog/close observations remain unverified.
- Open ListView risk: whether changing openId re-renders recycled cells must be demonstrated on device, not assumed from static tests.
- Coordinator pixel inspection is required; the accessibility-hidden action is absent from UI XML.
- Phase B A1 tap rule: compute the revealed-strip midpoint from current open-content right edge and its closed right edge; record x/y computation for each tap.
- npm ci reports 6 vulnerabilities (5 moderate, 1 high), deprecations and 3 pending install-script approvals; unchanged dependencies/policy.
- Android CLI emits DEP0190; this is a debug APK only. No release/iOS build or hardware Back/keyboard/large-text/dark-mode acceptance (NS07).

New evidence: migration/evidence/NS06/a-gates2/results-a.json. Machine result: tools/qwen-supervisor/.runs/sol-ns06-r1-a2-20261027/result.json.
No emulator/device interaction, installation or launch; no delegation/review dispatch, Phase C handoff/submission/freeze, staging, commit or push. Run 1 records remain immutable history. Coordinator owns subsequent phases; STOP here.
