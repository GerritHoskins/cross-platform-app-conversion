# RN03 revision 2: native evidence to review packet

Prepared only. No agent, Android interaction or review is launched by creating these files. No RN04 or commit is authorized.

Use two new supervisor runs because an external pixel reviewer writes new evidence between them. Resuming a CHECKPOINTED run after those external file changes would correctly fail its snapshot validation. Do not modify old run state/checkpoints to bypass that check.

## 1. Capture replacement evidence

When ready to resume RN03, run from the repository root:

```powershell
$qwenNode = 'C:/Users/Gerrit/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe'
& $qwenNode tools/qwen-supervisor/supervisor.mjs run tools/qwen-supervisor/rn03-r2-native.json
```

The new assignment supersedes the earlier native HOLD only for normal UI actions/capture on the existing RN01_API36/app. It allows dismissing the stylus tutorial, confirming app focus, entering search, scrolling and switching modes. It does not authorize starting/stopping emulator/Metro, installing tools, changing device settings, editing app/tests or overwriting prior captures. Use a coordinated device window with no competing executor; missing/unavailable infrastructure means BLOCKED.

The run creates eight fresh PNG/XML pairs, an action transcript, machine-computed capture/source hashes and a pixel request under `migration/evidence/RN03/r2-native-recapture/`. It intentionally ends **BLOCKED for coordinator pixel inspection** and writes `migration/handoffs/RN03-native-capture-checkpoint.md`. This is an evidence handoff, not an app failure or approval. Existing paths cause a stop rather than silent overwrite; inspect partial work before assigning a new attempt.

## 2. Obtain actual Sol/high pixel inspection outside the renewable work runner

Give the generated `pixel-inspection-request.md` to the existing vision-capable coordinator/dispatcher. Require `openai-codex` / `gpt-6.1-sol` / high / no fallback and direct inspection of the actual eight images. Use the existing delegation mechanism; do not wrap it inside these one-shot work sessions, bypass the restricted toolset through a terminal, or claim a fresh parent can inherit an async verdict.

The coordinator must save three new files in that same capture directory:

- `pixel-inspection-verbatim.md`: the actual returned response, preserved verbatim.
- `pixel-inspection-routing.txt`: redacted actual dispatch/runtime evidence identifying provider/model/high/no fallback and handle. No secrets or whole configuration dump. A statement in the prompt is not runtime evidence.
- `pixel-inspection.json`: structured index of that actual result with the fields below. Compute image hashes from files/index; never type them from memory. Do not create PASS metadata before the response exists.

```json
{
  "package": "RN03",
  "revision": 2,
  "kind": "pixel_inspection",
  "provider": "openai-codex",
  "model": "gpt-6.1-sol",
  "reasoningEffort": "high",
  "fallbackProviders": [],
  "dispatchHandle": "ACTUAL_RETURNED_HANDLE",
  "inspectedDirectly": true,
  "verdict": "PASS",
  "verbatimReportPath": "migration/evidence/RN03/r2-native-recapture/pixel-inspection-verbatim.md",
  "routingEvidencePath": "migration/evidence/RN03/r2-native-recapture/pixel-inspection-routing.txt",
  "images": [
    {
      "path": "migration/evidence/RN03/r2-native-recapture/RN03-01-initial-schedule.png",
      "sha256": "COMPUTE_FROM_FILE",
      "verdict": "PASS"
    }
  ]
}
```

Include all eight exact image paths/hashes with each actual outcome. PASS in this example is conditional, not a supplied verdict. Failures, partial coverage, tutorial overlays or uncertain pixels must remain failures/uncertainty. Distinguish insufficient capture from confirmed app defect; request a bounded corrective capture assignment as needed. The packet configuration intentionally refuses partial/failed results. No product fix is authorized by a capture failure.

The machine gate validates metadata consistency and binds images/source hashes. It cannot authenticate provider identity from a locally authored JSON statement alone. The formal Sol/high reviewer must inspect the retained runtime/verbatim evidence as part of package review. Pixel PASS is a scoped supporting opinion, not RN03 approval.

## 3. Prepare the packet in a new run

Only after actual inspection evidence exists:

```powershell
& $qwenNode tools/qwen-supervisor/supervisor.mjs run tools/qwen-supervisor/rn03-r2-packet.json
```

This checks report/capture/source bindings, archives the prior ten successful machine-gate receipts and logs into self-contained package evidence, and refreshes integration/typecheck plus a terminating Jest JSON report for real suite counts. The expected current split is 24/8/4 = 36; a mismatch blocks instead of manufacturing a count.

The final phase corrects observations and the RN03 handoff/status, inventories all current RN03 deliverables, and freezes `migration/submissions/RN03-r2.json` with zero hash problems. It preserves product source/tests, earlier reviews/submissions, captures and old runtime logs. Superseded capture defects are explicitly labeled. No packet writes occur after freeze; machine receipts/checkpoints stay outside the submitted inventory.

The packet run stops **READY_FOR_REVIEW**, never APPROVE. A partial earlier packet directory or existing r2 manifest causes a stop for coordinator recovery rather than overwriting frozen work.

## 4. Formal review

Use the existing `migration/instructions/qwen.md` dispatcher for RN03 revision 2. Recheck Sol/high routing immediately before dispatch, use its exact goal/context protocol, permit required read-only reviewer Git/hash/package checks, and set next instruction to STOP (RN04 requires a separate assignment). Await the actual matching verdict and save it verbatim. No duplicate dispatch, silent fallback, automatic next package, commit, push or publication.

Both configurations may be `dry-run` validated now; that checks configuration shape/paths, not future image/report availability. Only an explicitly launched native run performs Android actions.
