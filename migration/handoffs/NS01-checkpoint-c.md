# NS01 phase C checkpoint — before revision 1 freeze

Status: final static gates and reconciliation PASS; handoff prepared. This checkpoint is authored before manifest hash --write; freeze completion is recorded only in the run directory's result.json and post-freeze receipts, not claimed retroactively here.
Executor: Hermes GPT-6.1 Sol high (human-chosen), coordinator Claude Code.
Run: tools/qwen-supervisor/.runs/sol-ns01-r1-c-20261026/.
Branch migration/slice-1; HEAD 0a4b39b193e9f92411020f14d8c4268ede3ef932; HEAD tree 5fdd5e152fa812217c1fac6fe1635f915a804e43; index empty at entry and after static gates.

Completed in C

  npm ci exit 0, unchanged lockfile SHA-256 and exact 71 target hashes/path set against coordinator-authorized tools/qwen-supervisor/.runs/sol-ns01-r1-a3-20261026/baseline.json.
  npm run typecheck exit 0 (vue-tsc --noEmit).
  npm test twice, exit 0 each; both terminating, 1 suite / 1 test passed, 0 failed, same counts.
  npm ls --depth=0 exit 0; required resolved versions confirmed.
  Pinned Node v24.19.0 first on child PATH; npm 11.16.0; NoDefaultCurrentDirectoryInExePath removed case-insensitively from child environments only.
  All 261 A2-entry protected file hashes plus IDEA.md hash match. IDEA contents never loaded into context. Changed/untracked path classes accepted; README.md remains the sole excluded tracked edit. Hash-only outside snapshot: 22085 paths unchanged, including immutable earlier NS01 runs/checkpoints and coordinator-owned pixel report.

Evidence: migration/evidence/NS01/c-freeze/entry-gate.json, after-npm-ci.json, after-static-gates.json, npm-ci.receipt.json, typecheck.receipt.json, tests-first.receipt.json, tests-second.receipt.json, test-counts.json, resolved-versions.receipt.json, dispositions.json, apk-reconciliation.json, pixel-reconciliation.json, historical-command-catalogue.json. Full commands, measured exit/timing receipts and stdout/stderr are adjacent.

Historical evidence reused, not rerun

  A4 successful Android build: a-gates4/10-build-android.receipt.json, exit 0.
  APK migration/nativescript/platforms/android/app/build/outputs/apk/debug/app-debug.apk; 117561814 bytes; SHA-256 6f1e624bad3943b1c76774afc39d01748b1a1d845e6cf555bb8746af596d8f24. Rehashed locally in C; B2 installed-copy receipt records the same hash. No rebuild/device query in C.
  B2 install PASS, relaunch XML PASS, bounded PID logcat PASS with warnings retained. First-launch XML and diagnostic XML remain missing.
  Coordinator pixel report covers all 3 distinct PNGs, confirms shell on both cold launches and no personal/clipboard content. Final B-launch PASS is based on coordinator pixels, not first-launch XML or <=20-second timing. Second launch has XML plus pixels.

Dispositions carried into final results/handoff

  Human-authorized adb server restart before A2.
  Claude Code's NoDefaultCurrentDirectoryInExePath=1 caused A2 gradlew.bat resolution failure; A4 removed it process-locally and succeeded.
  A3 stopped at the coordinator's over-strict provenance gate; A4 was authorized to use A3 supervisor's 71-file snapshot.
  A4 automatic required SDK Platform 36 revision 2/license and Gradle 8.14.3 wrapper cache accepted under NS01 step 8.
  First B BLOCKED with system_server down; human authorized adb reboot before B2.
  Coordinator pixels resolve observed-launch acceptance despite missing first-launch XML; historical B2 BLOCKED/pending-pixel records remain immutable.

Final aggregate migration/evidence/NS01/results.json: 14 PASS, 0 FAIL, 0 BLOCKED, 0 NOT RUN. This is per final accepted case, not a rewrite of failed historical attempts. Known warnings: vue 3.5.43/runtime-core 3.5.44 mismatch, npm audit 6 findings (5 moderate/1 high), pending install-script approvals/transitive deprecations, Android startup jank and ashmem deprecation. Dark theme not exercised under D4. Pure TypeScript Vitest is not native rendering proof. No broad platform/performance/a11y acceptance claim.

Prepared handoff: migration/handoffs/NS01.md. Remaining authorized C operations: set only NS01 work-package Status line to READY_FOR_REVIEW (revision 1), perform prefreeze audits, create migration/submissions/NS01-r1.json with exact evidence/handoff/package/71-target files[], run manifest-hashes --write then check, require 0 problem(s), and write final run result. After --write, no writes under migration/. Post-freeze receipts belong only in this run directory.

No device/emulator interaction, product/test/config edit, delegation/review dispatch, staging, commit or push in C. README.md and coordinator pixel report untouched; earlier runs/checkpoints immutable. Coordinator owns routing verification and independent review dispatch (openai-codex/gpt-6.1-sol/high/fallback []). Review remains pending, not approval.

Next: none; STOP — NS02 requires a separate human assignment
