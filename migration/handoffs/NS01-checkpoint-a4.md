# NS01 phase A4 checkpoint

Status: CHECKPOINTED — failed Android build gate now passes; Phase A complete using the earlier A2 static gates. STOP before Phase B/C.
Run: sol-ns01-r1-a4-20261026. Executor: Hermes GPT-6.1 Sol high (human-chosen).
Branch: migration/slice-1; HEAD: 0a4b39b193e9f92411020f14d8c4268ede3ef932. Index empty at entry and final audit.

Build
  npm run build:android, cwd migration/nativescript, via pinned Node v24.19.0 and npm-cli.js; script is exactly npx --yes nativescript@9.1.2 build android.
  spawnSync used a copied child environment with inherited NODEFAULTCURRENTDIRECTORYINEXEPATH=1 deleted, not set to 0; pinned Node directory first on child PATH. No persistent environment change or CLI/project/dependency source edit.
  Exit 0; 2026-10-26T12:22:34.335Z to 2026-10-26T12:24:31.059Z; measured duration 116723 ms. One build attempt, no fixes/retries.
  Receipt: migration/evidence/NS01/a-gates4/10-build-android.receipt.json; stdout/stderr bounded to 180 tail lines and 65536 characters each (neither truncated).
  APK: migration/nativescript/platforms/android/app/build/outputs/apk/debug/app-debug.apk
  Size: 117561814 bytes
  SHA-256: 6f1e624bad3943b1c76774afc39d01748b1a1d845e6cf555bb8746af596d8f24
  APK size/hash independently checked again in final audit.

Preservation and provenance
  Entry and final: all 261 protected file hashes plus IDEA.md match A2 entry/final records; all 71 tracked-to-be target files match the coordinator-authorized A3 launch baseline, with identical file set and no target changes.
  A2 lacks final target hashes; explicit A4 coordinator authorization makes tools/qwen-supervisor/.runs/sol-ns01-r1-a3-20261026/baseline.json the comparison record. A2/A3 history remains unchanged.
  Outside repository snapshot unchanged; no nonignored repository writes outside A4 evidence/checkpoint. Commands and measured receipts: migration/evidence/NS01/a-gates4/commands.jsonl. Entry/final integrity receipts: 09-entry-integrity and 96-final-integrity.
  A2 npm ci, typecheck and two 1/1 test runs were not rerun; this session only resumed the failed build gate. No adb/device/launch, staging, commit, push, freeze, delegation or review.

Observed automatic build side effects and remaining limits
  Build downloaded Gradle 8.14.3 into the existing user Gradle wrapper cache and automatically installed Android SDK Platform 36 revision 2 outside the target. Build output reports the platform license accepted. App_Resources/Android/app.gradle:7 requires compileSdkVersion 36; :13 sets targetSdkVersion 36. Installed SDK source.properties confirms API 36/revision 2. No manual SDK command or license acceptance was run.
  NS01 step 8 covers a required missing SDK platform, but A4's write allowlist is narrower: the automatic external writes are explicitly disclosed for coordinator scope assessment, not hidden by the passing repository hash audit. See build-side-effects.json. External cache/SDK trees were not comprehensively snapshotted; no cleanup attempted.
  Existing NativeScript-Vue warning persists: vue@3.5.43 versus @vue/runtime-core@3.5.44. Node shell-args deprecation and Java deprecated-API notes also emitted; no dependency changes made. Earlier A2 npm audit warnings remain unresolved.
  Initial read-only tool probes preceded receipt orchestration; a Node inline discovery request was blocked before execution. Receipt bootstrap limits are documented in entry-gate.json; no timing invented.
  Phase B device launch/rendering and coordinator pixel inspection remain NOT RUN and require separate authorization. Phase C/freeze/review and NS02 remain unauthorized.

Evidence: migration/evidence/NS01/a-gates4/entry-gate.json, build-environment.json, build-result.json, build-side-effects.json, apk.json, preservation-entry.json, preservation-exit.json, target-entry.json, target-exit.json, outside-entry.json, outside-exit.json, final-audit.json, completion-verification.json, commands.jsonl.
Result: tools/qwen-supervisor/.runs/sol-ns01-r1-a4-20261026/result.json (phase field A3 retained exactly as requested for the A4 run).
