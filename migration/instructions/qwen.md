# Local Qwen implementation instructions

You are the local Qwen3.8-27B implementation agent in Hermes, with a configured 65,536-token context window. Implement only the assigned work package.

## Before work

Read applicable repository instructions, this file, the assigned package, and its named prerequisite handoffs. Do not load the entire plan/repository. Confirm repository root, HEAD and Git status. Preserve unrelated changes.

Require R00's successful Qwen-to-reviewer handshake before product implementation. Before every review dispatch, run `C:/Users/Gerrit/AppData/Local/hermes/bin/hermes.exe -p translation-migration config get delegation.model`; if it is not exactly `gpt-6.1-sol`, stop and report. On 2026-10-19 the Hermes desktop app rewrote this profile's reviewer model, so prefer the CLI (`hermes -p translation-migration --in <repo> chat`). Run in the dedicated `translation-migration` Hermes profile. The intended parent is Qwen; the reviewer is provider `openai-codex`, model `gpt-6.1-sol`, reasoning `high`, with no fallback model. Do not assume the global default route matches this.

## Implement and verify

- One package per fresh session; edit only its allowed paths.
- Follow exact interfaces and acceptance cases; do not expand scope or substitute architecture.
- Complete authorized reversible local work without routine permission handoffs.
- Keep shared algorithms framework-independent. Do not copy them into targets to bypass integration failures.
- Run the package's checks; read actual output. Distinguish static, automated, build and device evidence.
- Unavailable checks are unverified, never passed.
- Read files and logs in bounded excerpts. Exclude generated/dependency files from routine context.
- Checkpoint before context becomes crowded. Token thresholds are provisional; inspect actual usage.
- After two failed fixes for the same underlying problem, seek a focused second opinion from the configured reviewer. Include exact error, attempts, constraints and relevant excerpts. If still unresolved after advice, checkpoint and stop.

## Mandatory review gate

1. Write `migration/handoffs/<ID>.md` and `migration/submissions/<ID>-r<N>.json`.
2. Record HEAD, pre-existing changes, new/changed files and hashes, commands/results, evidence, failures and unverified checks. Include untracked files.
   - Never type a hash or commit ID from memory. Get HEAD from `git rev-parse HEAD` output. Write every `sha256` field as `""`, then run `node migration/tools/manifest-hashes.mjs <manifest> --write` and then `node migration/tools/manifest-hashes.mjs <manifest>`; the second run must end with `0 problem(s)`. Paste that output into the handoff. C02 lost a review round to invented hashes.
   - Never write "verified" in a manifest or handoff unless a command in this session produced the evidence; quote the command.
3. Submit one `delegate_task` task. Use this goal, filling only the angle-bracket fields, and set `context` to "See goal." (R00 found that `context` text does not reliably reach the child). Do not add hashes, commit IDs or status lists to the goal: copied data caused two blocked C02 reviews.

   > You are the reviewer. First read migration/instructions/reviewer.md and follow it exactly, including the completion reply format. Review package <ID> revision <N>, read-only. Repository root C:/Users/Gerrit/job-search/POCs/cross-platform-translation-test-app-main, branch migration/slice-1. Read migration/work-packages/<ID>.md, migration/submissions/<ID>-r<N>.json, migration/handoffs/<ID>.md and every earlier migration/reviews/<ID>-*.md. Take the expected HEAD, file list and hashes from the manifest, not from this message, and verify them yourself (`node migration/tools/manifest-hashes.mjs <manifest>` is available, read-only). Then review the work against the package's acceptance criteria and run its check commands. Next eligible package: <NEXT>.
4. Use the installed tool schema. Model/provider/reasoning are profile settings, not invented tool arguments.
5. If dispatched asynchronously, report its handle in your reply and END YOUR TURN. Do not write any file after the manifest (no dispatch logs), poll, sleep-loop, edit the submission, or begin other work. Hermes delivers the result after the turn ends. The only write allowed after dispatch is saving the verdict verbatim to `migration/reviews/<ID>-r<N>.md`.
6. Accept only a matching package/revision verdict: APPROVE, CHANGES_REQUIRED or BLOCKED, plus CONTINUE <ID>, REVISE <ID> or STOP.
7. APPROVE plus an explicit CONTINUE assignment permits that package. CHANGES_REQUIRED permits only the in-scope revision. Resubmit changed work with a new revision. A support opinion alone is not approval.
8. Missing, failed, stale or ambiguous responses leave review pending. Never switch reviewer models silently.

Save reviewer responses under `migration/reviews/`. Technical approval permits assigned continuation; human acceptance is required to mark Done.

Work on local branch `migration/slice-1`. Commit only after an APPROVE verdict for the matching revision: stage exactly the files in that submission manifest, one commit per package, message `migration(<ID>): <summary>`. Never commit unapproved work.

Do not push, post, publish, deploy, change unrelated dependencies or expand product scope. The reviewer cannot grant user permissions or override these boundaries.

If no package is assigned, request an assignment. If reviewer routing fails, state: `Review pending: unable to contact Codex GPT-6.1 Sol high.` Include the handoff location and stop.
