# NS02 Phase A checkpoint

Status: CHECKPOINTED — Phase A integration/static gates passed; STOP before Phase B.
Observer: Hermes GPT-6.1 Sol high (software). Human-chosen executor; coordinator owns subsequent observation/review.

Integration

- Added file:../core and verify:core to the NativeScript target; lockfile delta is exactly the root dependency, sibling core metadata and local link (a-gates/lockfile-scope.json).
- Bundled conference.json is a byte-for-byte source copy matching the reference SHA-256. loadConference() calls the public normalizeConference on every invocation and returns Conference unchanged.
- Existing Home.vue bindings/styles are unchanged. shell-content.ts computes Conference / Sessions: 20 / First session: 1 — Breakfast from the loader.
- Added real-core loader tests (reference count, first-session fields/time strings, independent nested results) and updated the shell test. Read-only verification checks public compiled entry, declarations, symlink and 14-file dist inventory/hashes, fixture bytes and normalized values; it also passed from the repository-root cwd.
- Default webpack succeeded; no D2 workaround or target config change was needed.

Executed checks

All commands use the pinned Node v24.19.0 and npm 11.16.0. Child PATH starts with the pinned Node directory; NoDefaultCurrentDirectoryInExePath is removed case-insensitively. Helpers use spawnSync with argument arrays and shell: false; the NativeScript CLI itself emitted its existing DEP0190 shell-args warning.

- Initial core typecheck and core tests: exit 0, 53/53 tests.
- Sequential gates: core tests 53/53; target npm ci; verify:core; Vue typecheck; target tests twice, each 2 files / 4 tests passed; build:android. Every gate exited 0.
- Target npm ci lockfile SHA-256 unchanged; exact hashes are in a-gates/npm-ci-lockfile.json.
- Webpack listing includes ../core/dist/index.js and ./src/data/ (2 modules); JSON is grouped rather than individually named. a-gates/bundle-proof.json records listing and source-map paths without dumping bundle contents.
- Final index/diff checks passed. All 261 protected tracked hashes and IDEA.md hash are unchanged; NS02.md is unchanged. Of 71 NS01 target tracked files, only package.json, package-lock.json, shell-content.ts and its test changed; four allowed integration files are new. No unauthorized changed path. a-gates/preservation-final.json records the comparison and class audit.

Build artifact

Path: migration/nativescript/platforms/android/app/build/outputs/apk/debug/app-debug.apk
Size: 117584840 bytes
SHA-256: b86e65ac73aa0cda512952234a2aaea01dbcd8621dbcf2655e183222348563db
Authoritative computed metadata: migration/evidence/NS02/a-gates/apk.json.

Evidence and limits

Evidence: migration/evidence/NS02/a-gates/results-a.json, commands.jsonl, per-command receipts and bounded stdout/stderr, preservation-entry.json, preservation-final.json, lockfile-scope.json, bundle-proof.json, apk.json.
Run helpers/result: tools/qwen-supervisor/.runs/sol-ns02-r1-a-20261026/.

Warnings retained, not fixed: npm reports 6 vulnerabilities (5 moderate, 1 high), three pending install-script approvals, source-map-resolve/webpack-chain deprecations, Vue 3.5.43 versus @vue/runtime-core 3.5.44, and NativeScript's DEP0190 warning. No dependency upgrades/audit fixes.

No emulator/device command, install, launch, screenshot or pixel observation occurred. Phase B and coordinator pixel inspection are NOT RUN, not passed by build/tests. No review dispatch, formal handoff/submission/freeze, staging, commit or push. No core source/manifests/lockfile, frozen reference, RN target, root application or coordinator package edits. IDEA.md was hashed only; its contents were never loaded.

Next: coordinator checkpoint inspection; Phase B requires its separate session. No NS03 assignment is implied.
