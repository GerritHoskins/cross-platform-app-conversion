# Local Qwen phase supervisor

Dependency-free Node runner for fresh, bounded Hermes work sessions. It does not modify Hermes, its profile/configuration, package instructions, existing migration work or root dependencies. No real agent is launched by installation or tests.

## What it automates

1. Validate an explicitly assigned package/phase configuration, branch and scoped paths.
2. Acquire a repository-local single-supervisor lock and snapshot tracked plus nonignored untracked files (including pre-existing changes), HEAD and index. IDEA.md is hashed only, never put in prompts.
3. Check the dedicated profile's parent model/provider and no-fallback settings, plus delegation `openai-codex` / `gpt-6.1-sol` / `high` / `[]` before each phase. Configuration is read, never changed.
4. Launch Hermes CLI without resume/continue, with a phase prompt, restricted `terminal,file` toolsets, iteration budget, time budget and JSONL output. Verify actual stream parent model and unique session identity. No shell interpolation, yolo or approval bypass.
5. Validate the agent's small phase result; execute the human-configured check commands itself and save exit-code receipts/logs. Hash changed files and referenced evidence; build an immutable checkpoint linked to its predecessor by SHA-256.
6. Only after success, launch the next declared phase in a genuinely new session. No transcript replay; only bounded result/receipt summaries and changed paths carry over. The prompt is capped at 32 KiB. The agent cannot choose a new phase/package.
7. Stop on blocked work, routing failure, malformed/missing checkpoint, failed check, repeated session, Git/index changes, out-of-scope/concurrent nonignored changes, or no progress. Stop at READY_FOR_REVIEW after validating submission identity/inventory/hashes and running the existing full manifest hash gate.

This uses bounded **phases**, not automatic context-token thresholds. Hermes stream token totals are cumulative usage, not live prompt occupancy. Its run-budget wrap-up notice is an opportunity to checkpoint, not a guarantee the model will do so. A model that hits its limit without a valid result stops the runner; it is never silently renewed from an inferred summary. Size phases conservatively (start at 10–15 minutes and 15 tool iterations, adjust from actual output).

## Start safely

From the repository root in PowerShell:

```powershell
$qwenNode = 'C:/Users/Gerrit/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe'
& $qwenNode --test tools/qwen-supervisor/test/supervisor.test.mjs
```

Copy `config.example.json` to a new assignment-specific file and replace the placeholders. The template deliberately refuses to run. Its example package is not an assignment to change the app. Put private local configs under this tool's `.runs/` directory if desired (create it first); it is ignored. Do not modify another agent's submitted package to adopt this supervisor mid-review.

Configuration fields:

| Field | Meaning |
| --- | --- |
| version/package/assignment | Version 1; exact package ID; actual human-authorized scope. No cross-package continuation. |
| profile/branch | `translation-migration`; expected branch. Wrong branch stops. |
| readFiles | Up to 12 bounded initial reads; the prompt also requires applicable AGENTS.md. No whole-history loading. |
| allowedPaths | Exact repo-relative files, or a trailing-slash directory prefix. Include authorized package status/handoff/evidence/submission paths. Do not use a broad parent directory for convenience. No IDEA.md, .git, dependencies, supervisor or symlink paths. |
| phases | 1–8 phases with unique ID, concrete task, maxTurns (1–30), budgetSeconds (30–1200) and checks array. Last phase must stop for review or blocker. |
| checks | Named executable + argument array + repository-relative cwd (`.` for root) + timeoutSeconds. Run serially; no shell. Use full pinned Node/npm CLI paths, never `npx` or shell variable assignments to imply a runtime. Commands are human-controlled and can mutate files: declare only authorized checks. |
| hermes | Optional `{file,args}` executable adapter. Default is the installed Windows hermes.exe. Primarily for testing/alternate install paths; never a mechanism to change the required model route. |

For an app package, read its executable work package and approvals first; translate its actual allowlist/checks to configuration. Existing uncommitted work is a baseline to preserve, not authorization to overwrite it. Do not assign overlapping work while another executor is active. The runner checks all changed nonignored paths, not merely the files named in the phase result.

Validate without launching Hermes or writing a run:

```powershell
& $qwenNode tools/qwen-supervisor/supervisor.mjs dry-run tools/qwen-supervisor/.runs/my-assignment.json
```

Run the authorized phase sequence:

```powershell
& $qwenNode tools/qwen-supervisor/supervisor.mjs run tools/qwen-supervisor/.runs/my-assignment.json
```

For a controlled stop after the first successful checkpoint:

```powershell
& $qwenNode tools/qwen-supervisor/supervisor.mjs run tools/qwen-supervisor/.runs/my-assignment.json --pause-after 1
```

Resume only a CHECKPOINTED run using the unchanged configuration and returned absolute run directory:

```powershell
& $qwenNode tools/qwen-supervisor/supervisor.mjs run tools/qwen-supervisor/.runs/my-assignment.json --resume 'C:/absolute/path/to/the/run-directory'
```

Resume validates the checkpoint chain, current files, branch/HEAD/index and evidence before launching another fresh session. FAILED, BLOCKED, READY_FOR_REVIEW and REVIEW_PENDING runs cannot resume automatically. Do not hand-edit runtime state to evade this. A coordinator must investigate and explicitly assign a new run if warranted. `validate <config.json> <checkpoint.json>` checks one checkpoint against current files/config/Git; it does not independently attest historical chain state.

## Checkpoint contract

Hermes gets the exact `result.json` destination in its prompt, under `.runs/<run>/<phase>/`. This is the only supervisor-runtime file it is instructed to write:

```json
{
  "version": 1,
  "package": "EXAMPLE",
  "phase": "bounded-edit",
  "status": "continue",
  "summary": "Concise actual changes and outstanding facts, not invented test results.",
  "unresolved": [],
  "evidence": ["migration/example-supervised/observations.txt"],
  "nextPhase": "verify-and-prepare"
}
```

Maximum 16 KiB; summary 3,000 characters; up to 10 bounded unresolved findings and 30 existing evidence paths. `continue` must name the next configured phase. `blocked` and `ready_for_review` require nextPhase null; ready requires no unresolved findings plus `submission: "migration/submissions/<PACKAGE>-r<N>.json"`. Ready is not approval. Checks are run by the supervisor; narrative assertions from the agent remain untrusted.

Machine checkpoints contain actual whole-snapshot file hashes, changed paths, HEAD/branch/index hash, unique session ID, evidence hashes, check commands and exit codes, configuration hash and previous-checkpoint hash. They are separate from package handoffs/submission manifests. Do not send the large machine inventory back to Qwen: the supervisor carries only a small selected handoff. It does not automatically migrate old Markdown checkpoints or reconstruct missing history.

## Sol/high review gates

**The supervisor never dispatches formal review, grants approval or starts a subsequent package.** Work sessions omit delegation tools and are explicitly told not to dispatch even through the terminal. After two failed fixes, return a blocker for coordinator/Sol-high support rather than continue guessing.

At READY_FOR_REVIEW, use the existing `migration/instructions/qwen.md` protocol in a dedicated Hermes dispatcher with delegation enabled. Recheck all routing settings immediately before dispatch. Preserve the actual dispatcher for asynchronous verdict delivery, end its turn as instructed, and save the matching verdict verbatim. Do not put an async review inside these one-shot renewable work phases: delivery across process termination is not proven.

Unexpected `delegate_task` in the stream results in REVIEW_PENDING and no automatic continuation. Recover the real dispatcher/verdict through the existing workflow; never dispatch a duplicate. This is a last-resort detector, not a guarantee of catching delegation hidden inside arbitrary shell commands.

No fallback model, reviewer command restriction, automatic next package, automatic commit or release of a human decision. Packet text must finish before manifest freeze; the runtime's logs/checkpoints live outside the submitted packet and do not authorize edits to frozen deliverables.

## Operational limits and recovery

- This is an orchestration/validation boundary, **not an OS sandbox**. Hermes retains its normal filesystem/tool permissions. Out-of-scope changes are detected after the phase, not prevented or rolled back. Never use it to run untrusted prompts or scripts; no automatic stash/reset/cleanup.
- Inventory covers tracked and nonignored untracked files. Ignored generated outputs are not globally monitored. Specific submitted evidence is hashed; do not infer complete filesystem coverage or validation of all natural-language claims.
- The lock coordinates this supervisor only, not other Hermes sessions or humans. If `active.lock` exists, inspect its PID and ownership; do not delete it blindly. A hard crash may leave a stale lock. No automated process scavenging, taskkill, emulator/Metro shutdown or Hermes config modification.
- The supervisor sends a signal only to its directly spawned child on interruption/timeout. Grandchild tools may survive. It stops renewal and records failure; inspect actual child ownership before a coordinator restarts. Logs may contain command output, so do not put secrets in tasks/checks.
- Tool budget/time are not context-token measurements. A first phase with excessive fixed tool/rule overhead still needs a narrower tool surface/reads; renewing alone cannot solve that.
- Tested with disposable Git repositories and a fake Hermes executable. Real Qwen/provider behavior and end-to-end asynchronous reviewer delivery are not claimed by those tests. A separately authorized bounded pilot is needed before relying on it for unattended migration work.

No dependencies to install, no changes to root npm scripts, no Hermes patch/plugin or global settings required.

## Live progress and read-only watching

New runs print timestamped progress automatically (Europe/Berlin): phase number/name, routing checks, fresh session/model, bounded Qwen text previews, tool start/end, check start/PASS/FAIL with exit code and duration, validated checkpoints, handoffs and the final stop reason. A waiting heartbeat appears about every 15 seconds while output is quiet. It indicates the runner is waiting, not that useful model progress has been proven. Full output stays in the existing per-phase logs; tool arguments/results and entire check logs are not mirrored into the progress feed.

Example:

```text
[23:10:26] Phase 2/2: summarize-and-hold; checking baseline and routing
[23:10:32] Qwen session ...; model qwen3.8:27b
[23:10:35] Qwen tool started: read_file
[23:10:36] Qwen tool finished: read_file (700 ms)
[23:10:50] Still active: Qwen tool finished: read_file (700 ms); waiting for output
[23:11:05] Check typecheck: RUNNING (180s timeout)
[23:11:10] Check typecheck: PASS; exit 0; 5.0s
```

An already-running process keeps the code it loaded at startup; do not restart it just to get progress. Attach a **read-only watcher in another PowerShell window** instead:

```powershell
$qwenNode = 'C:/Users/Gerrit/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe'
& $qwenNode tools/qwen-supervisor/supervisor.mjs watch 'C:/absolute/path/to/the/run-directory'
```

The watcher replays existing phase activity/receipts and follows appended JSONL and state changes. It supports older runs with the original log format. It reads files only: no lock acquisition, agent launch, profile changes, package edits, session signals or writes into the watched run. Ctrl+C stops **only the watcher**. It exits automatically on BLOCKED/FAILED/READY_FOR_REVIEW/REVIEW_PENDING; a CHECKPOINTED pause may remain open because that state can also be transient between automatic phases. Watcher output is informational and does not approve a package or release a gate.

If the active runner's baseline includes the supervisor source, do not edit its watched source/config while it runs: that is an out-of-scope change at the next boundary. Stage updates under ignored `.runs/` and install after that run naturally finishes. Do not edit a run's old logs/checkpoints or its configuration to add progress retrospectively.
