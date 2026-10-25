# RN03 native recovery — 2026-10-22

Preparation and coordinator diagnosis only. No recovery supervisor launched, app/test edits, device-setting changes, service restart, RN04 work or commit.

## Observed diagnosis

- ADB reports emulator-5554 connected, boot complete, RN01_API36. The emulator was launched headless (`-no-window -gpu swiftshader`), so there is no desktop emulator window to find. It was left running.
- The actual lines BELOW `FocusedApplications:` and `FocusedWindows:` identify `dev.translationtest.rn/.MainActivity` on display 0; the window manager agrees. The earlier “empty focus” conclusion is not supported by this live read. Do not inspect only matching header lines or infer focus state from UI field focus alone.
- No listener on local port 8082; HTTP `/status` returned connection refused. No matching Expo/Metro Node process was found. ADB reverse remains 8082 to 8082. Metro was not started/restarted by this diagnosis. These are observations at diagnosis time; recheck live before a new run.
- A diagnostic screenshot directly showed **Try out your stylus**, its own text field, and injected text in that field while UI XML exposed only the app field. XML absence did not establish overlay absence. The coordinator used the visually located normal Cancel control; the large tutorial closed, but the handwriting palette remained.
- App mode buttons still worked: Favorites produced the empty-favorites message, then All returned Breakfast. A one-character app-input test did not put the character into the app field. A later test after Cancel also did not verify delivery to the app. Input remains unresolved; no device-setting/IME-mode change was attempted. Do not attribute it to a lost app window or claim the input is fixed.
- Diagnostic PNG/XML were written only to temporary diagnostic paths, not over acceptance captures. These are coordinator observations, not a Sol/high pixel verdict or completed RN03 native acceptance.

## Original partial evidence is protected

The original directory `migration/evidence/RN03/r2-native-recapture/` still contains its original baseline PNG/XML. The recovery JSON records their computed SHA-256 values and checks them before/through recovery. It permits no edits to that directory. Old captures remain historical evidence; they are not passed off as fresh captures in the recovery run.

All new captures go into `migration/evidence/RN03/r2-native-recovery/`. A new handoff uses `migration/handoffs/RN03-native-recovery-checkpoint.md`. Existing files in those new destinations cause a stop rather than overwrite.

## Tutorial validator correction

`capture-validator.mjs` replaces the old inline rule that required `tutorialDismissed: true` for every image. Use truthful metadata per frame:

```json
{
  "tutorialStatus": "absent",
  "tutorialEvidence": "Describe the actual observation and method; do not infer pixels from XML silence.",
  "tutorialDismissed": false,
  "query": "IOnic",
  "focusVerified": true
}
```

- `absent`: no invented dismissal; do not set tutorialDismissed true.
- `dismissed`: actual normal-UI dismissal, tutorialDismissed true, with method recorded.
- `unknown`: honest when visual absence is unverified; structural validation emits a warning and still requires pixel inspection. Do not relabel unknown as absent to make a gate pass.
- `visible`: blocked as obstructed capture.

Structural success is always `pixelInspection: PENDING`. The validator independently checks the intended query in the actual app EditText, rejects tutorial-only typing, checks fresh PNG/XML pairs and empty-state corroboration, and computes hashes. Full pixel correctness remains the real coordinator/Sol-high gate.

## Before launching recovery

Metro must already be ready. If you choose to start the existing project server, use a separate PowerShell window:

```powershell
cd 'C:/Users/Gerrit/job-search/POCs/cross-platform-translation-test-app-main/migration/react-native'
$env:Path = 'C:/Users/Gerrit/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin;' + $env:Path
$env:NODE_OPTIONS = '--max-old-space-size=8192'
& 'C:/Users/Gerrit/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe' 'C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js' run start
```

This is the existing script, not a dependency install or native rebuild. The recovery JSON itself has no permission to start/stop services or change settings. Do not run against a device another executor is actively using. Returning a cached schedule alone does not prove Metro is live.

## Recovery sequence

From repository root:

```powershell
& 'C:/Users/Gerrit/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe' tools/qwen-supervisor/supervisor.mjs run tools/qwen-supervisor/rn03-r2-native-recovery.json
```

1. Bounded preflight checks live Metro, the actual focused-window entry, forwarding, branch/baseline and original capture hashes. Missing Metro fails immediately before a capture phase.
2. A fresh session attempts the app query once. If the app field does not contain it, save diagnostic evidence and a proper blocked result immediately. Do not repeat an eight-minute input investigation, toggle IME/handwriting settings, add a keyboard app, or exhaust the turn without writing result.json.
3. If verified, collect baseline/search captures. Another fresh session collects restored/no-match/favorites/All captures, then runs the shared structural validator. This splits the previous large capture phase.
4. Stop for actual pixel inspection. Follow `rn03-r2-native-flow.md`'s coordinator schema with **r2-native-recovery** substituted for r2-native-recapture in all image/report/routing paths. Retain the actual returned response and runtime routing evidence; no fabricated PASS. The supporting opinion does not approve the package.
5. After the real matching PASS report, use a NEW run of `rn03-r2-recovery-packet.json`. It targets the recovery images and a separate `r2-recovery-packet` evidence directory; it also rechecks the protected original PNG/XML. Do not resume an old hash snapshot after externally written inspection evidence.
6. That run corrects observations and prepares RN03-r2 for the existing Sol/high formal reviewer. It stops at READY_FOR_REVIEW. No RN04 or commit.

No input/overlay workaround that changes device settings is authorized. If ordinary UI cannot resolve input, stop with the actual blocker rather than weaken the capture criteria.

## Confirmed completion-status failure and retry

The first recovery attempt stopped in preflight, before new captures. Hermes's agent log for session `20261022_075747_7e51d0` explicitly records `reason=max_iterations_reached(5/5)`: the fifth call wrote result.json, then the iteration limit forced a summary. The CLI correctly treats a partial/incomplete turn as exit 1. A well-formed phase file alone does not override that failure.

`rn03-r2-native-recovery-retry.json` preserves the original configuration and failed run, gives preflight 12 iterations/300 seconds with instructions to reserve time for a normal final response, and retains all scope, hash, route and exit-status gates. Hermes itself and the supervisor's success condition are unchanged. Use that retry configuration for the next explicitly authorized attempt; do not resume or relabel the FAILED run. Metro must remain running. This config change addresses iteration exhaustion, not the still-unverified keyboard input.

## Second run: partial captures preserved, smaller continuation

The retry passed preflight with exit 0 and three machine checks. Session `20261022_080513_ed7256` then hit `max_iterations_reached(14/14)` before writing its phase result. It saved frames 01/02; the run remains FAILED, not resumed or relabeled. `rn03-r2-native-recovery-continuation.json` hashes and preserves those four files, splits the six remaining frames across three bounded sessions, and reserves completion calls. It validates freshness from the linked original recovery start, not the continuation start, because the first two captures predate this new run. Their hashes and provenance are explicit; no timestamps are changed and pixel inspection remains pending. Original capture hashes and strict Hermes completion checks remain enforced.
