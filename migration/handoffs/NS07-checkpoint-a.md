NS07 checkpoint A

Status: CHECKPOINTED. A01-A04 PASS; stop before device interaction.
Observer: Hermes GPT-6.1 Sol high (software). Human-chosen GPT-6.1 Sol high overrides older Qwen-parent wording.
Branch: migration/slice-1
HEAD: ff675971b4654ccdfc3f9694eac4a61503d86906
Tree: 99f054d732850f10ed3d03702c30031d6c459947

Candidate (D1)

APK: C:/Users/Gerrit/job-search/POCs/cross-platform-translation-test-app-main/migration/nativescript/platforms/android/app/build/outputs/apk/debug/app-debug.apk
Size: 117638026 bytes
SHA-256: fa06fb8a0f840d3865ce16e100277e5b58fed40ec9ca37f20df31709070451d5
Fresh build receipt: migration/evidence/NS07/a-gates/build-android-fresh.receipt.json
Packaged assets/app/bundle.mjs: 145745 bytes; SHA-256 76662d0e925c21cc70566a0fc3c7281f07b32c5d57d06ebb2d0bf52a9ea7715b.
Markers present: swipe-action-, Filter Sessions, ns04SessionId.
Bundle evidence: migration/evidence/NS07/a-gates/bundle-evidence.json (three bounded snippets, no bundle dump).

Software and preservation

A01 captured branch, exact HEAD/tree, empty index and untrimmed porcelain before any migration/ write; raw entry status was exactly ?? migration/work-packages/NS07.md. core.hooksPath remained .githooks; 96139c0 was an ancestor. NS06 manifest checker reported 0 problem(s). IDEA.md was SHA-256 hash-only, never read as text.
Approval chain at HEAD: NS01-r1 APPROVE; NS02-r1 APPROVE; NS03-r1 APPROVE; NS04-r1 APPROVE; NS05-r1 APPROVE; NS06-r1 APPROVE. Exact review verdict lines are in preservation-entry.json and entry-gate.json, with git-show receipts.

Sequential commands: npm --prefix migration/core test; target npm ci; verify:core; core test repeat plus identical compiled-test glob with JSON reporter; verify:core repeat; typecheck; two JSON-reporter target test runs; build:android (fresh-output retry described below). Node v24.19.0/npm 11.16.0; pinned Node first on every child PATH; NoDefaultCurrentDirectoryInExePath removed case-insensitively; helper spawnSync uses argument arrays and shell:false.

Core JSON reporter: 53 passed, 0 failed. All 11 frozen reference cases and supplemental synthetic multi-track all/favorites rules passed in automated evidence; synthetic cases are not device fixture claims.
Target JSON reporters: first 7 files/115 passed; second 7 files/115 passed; zero failed/pending. Identities repeat and retain NS06's 115 identities. Both verify:core outputs match exactly after rebuilding/retesting core; fixture SHA-256 agrees and normalized count is 20. Typecheck passed. Package/lockfile hashes unchanged after npm ci and at final audit.

Final hash audits: 261 protected paths, 89 NativeScript tracked files and 30047 prior migration records unchanged. NS07.md and the checklist unchanged. git diff --check, git diff --cached --exit-code and git diff --exit-code HEAD all exit 0. Class audit permits only the unchanged pre-existing NS07 package, new a-gates evidence and this checkpoint; all authored text LF.

Retained artifact retry

Initial build command exited 0, but APK freshness assertion exited 1 because the incremental native build retained its earlier APK. No product defect or source fix was inferred. Original apk-inventory receipt, stop.json and initial-helper-stop-result.json remain. stale-apk-disposition.json records the old timestamp/hash and recovery: remove only ignored app-debug.apk, rerun npm run build:android, require the new APK mtime to follow the retry start. Fresh candidate passed; no prior evidence overwritten.

Open items and limits

- A05/A06 and groups B-F remain unrun in phase B; phase G settings/accessibility acceptance remains unrun. No device or pixel evidence from this session.
- Later device phases must install candidate SHA-256 fa06fb8a0f840d3865ce16e100277e5b58fed40ec9ca37f20df31709070451d5; installed-copy verification and cold launch remain open.
- Coordinator pixel/privacy inspection of every device frame remains required; D2 host clipboard safeguard before phase B.
- Per D5, TalkBack is not enabled; G03 offline XML audit is planned LIMITED and G04 is planned BLOCKED, with a manual TalkBack walkthrough follow-up (not phase-A results).
- npm ci reported 6 vulnerabilities (5 moderate, 1 high), source-map-resolve/webpack-chain deprecations, and 3 pending install-script approvals; no dependency/policy change or audit fix.
- Android CLI DEP0190 warning retained verbatim. Build-only debug candidate: no install/launch, release, physical-device or iOS claim.
- Initial APK freshness assertion failed after a successful incremental build reused the old output. Original receipts/stop retained; removing only ignored app-debug.apk and rerunning the prescribed build produced a fresh timestamp and resolved this artifact-only failure.
- No review dispatch, handoff/submission/freeze, staging/commit/push or next-package execution is authorized by this checkpoint.

Results: migration/evidence/NS07/a-gates/results-a.json
Receipts/log index: migration/evidence/NS07/a-gates/commands.jsonl
Final checkpoint audit: migration/evidence/NS07/a-gates/checkpoint-audit.json
Supervisor result: tools/qwen-supervisor/.runs/sol-ns07-r1-a-20261027/result.json

This checkpoint is not the NS07 final handoff, acceptance, submission or freeze. STOP.
