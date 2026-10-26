RN07 Phase A3 checkpoint — CHECKPOINTED

Executor: Hermes GPT-6.1 Sol high (software; human-chosen); coordinator Claude Code. Candidate: migration/slice-1; HEAD f5a1d836156ad3225b8d050951ae5cc073e3c5f7; pinned Node v24.19.0.
IDEA.md SHA-256 only: 56b5dc0ebd13907b3214f0325c11380e03d463c29284f3213054de7f0a097d9d. Contents never decoded, inspected or printed.

A03 correction: checklist migration/plans/rn07-android-acceptance-checklist.md:49 requires all 11 reference cases and supplemental synthetic multi-track coverage in automated evidence, not specifically in target Jest JSON. The a-gates2 A03 FAIL is superseded by this read-only re-evaluation; its failed receipt (exit 1) and all earlier records remain immutable. No tests rerun.
Exact traceability: migration/evidence/RN07/a-gates3/a03-reevaluation.json (JSON pointers and exact files/lines/full test names). Both existing target JSON files name and pass all 11 frozen cases. migration/evidence/RN07/a-gates2/a03-core.stdout.log:13 passes synthetic test "all-tracks rule: a two-track session is filtered out unless every one of its tracks is selected"; :14 passes "all-tracks rule holds in favorites mode too". These are synthetic shared-core tests, not fixture/device cases.

Statuses:
  A01 PASS carried from a-gates2: committed APPROVE/hash gates; exact RN06 HEAD, empty index, scope and every preservation hash rechecked here.
  A02 PASS carried from a-gates2: public core integration; a-gates2 post-core integration output byte-identical.
  A03 PASS by corrected evaluation: existing core 53/53; typecheck exit 0; both terminating target runs 6 suites/95 tests, all passing.
  A04 JS part PASS: export exit 0; immediately inventoried 29 same-run artifacts (migration/evidence/RN07/a-gates3/android-artifacts.json), paired with a04-export and phase-export receipts. Native build NOT RUN by D1; reused client/APK evidence belongs to phase B. No launch claim.
  A05 NOT RUN, phase B.
  A06 software collection PASS (bounded logs only). A06 overall/device part NOT RUN, phase B.

Warnings: migration/evidence/RN07/a-gates3/warnings.md and warning-scan.json cite every acquired stream. 0 matching diagnostic lines and 0 matching JSON console records under the recorded scan; this is not a zero-warnings/zero-exceptions claim. The initialRouteName deprecation was not printed in this export. No device/server health claim.
Preservation: same 34 product/test paths plus 2 specification paths as a-gates2, every SHA-256 matched at entry and close; previous evidence/checkpoints/run files and pre-existing tools/IDEA/checklist bytes unchanged. No added preservation product paths.

Every check (exit code; receipt). a-gates2 historical exit 1 is explicitly superseded, not erased:
  a01-branch: 0; migration/evidence/RN07/a-gates2/a01-branch.receipt.json
  a01-head: 0; migration/evidence/RN07/a-gates2/a01-head.receipt.json
  a01-tree: 0; migration/evidence/RN07/a-gates2/a01-tree.receipt.json
  a01-rn06-commit: 0; migration/evidence/RN07/a-gates2/a01-rn06-commit.receipt.json
  a01-rn06-full: 0; migration/evidence/RN07/a-gates2/a01-rn06-full.receipt.json
  a01-rn06-ancestor: 0; migration/evidence/RN07/a-gates2/a01-rn06-ancestor.receipt.json
  a01-status: 0; migration/evidence/RN07/a-gates2/a01-status.receipt.json
  a01-index-empty: 0; migration/evidence/RN07/a-gates2/a01-index-empty.receipt.json
  a01-rn06-review: 0; migration/evidence/RN07/a-gates2/a01-rn06-review.receipt.json
  a01-rn06-manifest-head: 0; migration/evidence/RN07/a-gates2/a01-rn06-manifest-head.receipt.json
  a01-rn06-head-blob-batch: 0; migration/evidence/RN07/a-gates2/a01-rn06-head-blob-batch.receipt.json
  a01-head-baseline: 0; migration/evidence/RN07/a-gates2/a01-head-baseline.receipt.json
  a01-working-tree-baseline: 0; migration/evidence/RN07/a-gates2/a01-working-tree-baseline.receipt.json
  a01-node-version: 0; migration/evidence/RN07/a-gates2/a01-node-version.receipt.json
  a01-npm-version: 0; migration/evidence/RN07/a-gates2/a01-npm-version.receipt.json
  a01-preservation-files: 0; migration/evidence/RN07/a-gates2/a01-preservation-files.receipt.json
  phase-a01: 0; migration/evidence/RN07/a-gates2/phase-a01.receipt.json
  a02-integration: 0; migration/evidence/RN07/a-gates2/a02-integration.receipt.json
  phase-a02: 0; migration/evidence/RN07/a-gates2/phase-a02.receipt.json
  a03-core: 0; migration/evidence/RN07/a-gates2/a03-core.receipt.json
  a03-post-core-status: 0; migration/evidence/RN07/a-gates2/a03-post-core-status.receipt.json
  a03-integration-after-core: 0; migration/evidence/RN07/a-gates2/a03-integration-after-core.receipt.json
  phase-core: 0; migration/evidence/RN07/a-gates2/phase-core.receipt.json
  a03-typecheck: 0; migration/evidence/RN07/a-gates2/a03-typecheck.receipt.json
  a03-jest1: 0; migration/evidence/RN07/a-gates2/a03-jest1.receipt.json
  a03-jest1-inspect: 0; migration/evidence/RN07/a-gates2/a03-jest1-inspect.receipt.json
  a03-jest2: 0; migration/evidence/RN07/a-gates2/a03-jest2.receipt.json
  a03-jest2-inspect: 0; migration/evidence/RN07/a-gates2/a03-jest2-inspect.receipt.json
  phase-target: 0; migration/evidence/RN07/a-gates2/phase-target.receipt.json
  a03-synthetic-json-gate: 1; migration/evidence/RN07/a-gates2/a03-synthetic-json-gate.receipt.json [historical stricter target-JSON gate; superseded by A3 re-evaluation]
  checkpoint-prepare: 0; migration/evidence/RN07/a-gates2/checkpoint-prepare.receipt.json
  final-diff-check: 0; migration/evidence/RN07/a-gates2/final-diff-check.receipt.json
  final-protected-diff: 0; migration/evidence/RN07/a-gates2/final-protected-diff.receipt.json
  final-cached-diff: 0; migration/evidence/RN07/a-gates2/final-cached-diff.receipt.json
  final-branch: 0; migration/evidence/RN07/a-gates2/final-branch.receipt.json
  final-head: 0; migration/evidence/RN07/a-gates2/final-head.receipt.json
  final-tree: 0; migration/evidence/RN07/a-gates2/final-tree.receipt.json
  final-status: 0; migration/evidence/RN07/a-gates2/final-status.receipt.json
  final-preservation-files: 0; migration/evidence/RN07/a-gates2/final-preservation-files.receipt.json
  phase-finish: 0; migration/evidence/RN07/a-gates2/phase-finish.receipt.json
  checkpoint-validation: 0; migration/evidence/RN07/a-gates2/checkpoint-validation.receipt.json
  entry-node-version: 0; migration/evidence/RN07/a-gates3/entry-node-version.receipt.json
  entry-branch: 0; migration/evidence/RN07/a-gates3/entry-branch.receipt.json
  entry-head: 0; migration/evidence/RN07/a-gates3/entry-head.receipt.json
  entry-rn06-commit: 0; migration/evidence/RN07/a-gates3/entry-rn06-commit.receipt.json
  entry-head-short: 0; migration/evidence/RN07/a-gates3/entry-head-short.receipt.json
  entry-index-empty: 0; migration/evidence/RN07/a-gates3/entry-index-empty.receipt.json
  entry-status: 0; migration/evidence/RN07/a-gates3/entry-status.receipt.json
  phase-entry: 0; migration/evidence/RN07/a-gates3/phase-entry.receipt.json
  a03-reevaluation: 0; migration/evidence/RN07/a-gates3/a03-reevaluation.receipt.json
  a04-export: 0; migration/evidence/RN07/a-gates3/a04-export.receipt.json
  phase-export: 0; migration/evidence/RN07/a-gates3/phase-export.receipt.json
  a06-software: 0; migration/evidence/RN07/a-gates3/a06-software.receipt.json
  final-diff-check: 0; migration/evidence/RN07/a-gates3/final-diff-check.receipt.json
  final-protected-diff: 0; migration/evidence/RN07/a-gates3/final-protected-diff.receipt.json
  final-cached-diff: 0; migration/evidence/RN07/a-gates3/final-cached-diff.receipt.json
  final-branch: 0; migration/evidence/RN07/a-gates3/final-branch.receipt.json
  final-head: 0; migration/evidence/RN07/a-gates3/final-head.receipt.json
  final-status: 0; migration/evidence/RN07/a-gates3/final-status.receipt.json
  phase-close: 0; migration/evidence/RN07/a-gates3/phase-close.receipt.json
  checkpoint-status: 0; migration/evidence/RN07/a-gates3/checkpoint-status.receipt.json
  phase-checkpoint: 0; migration/evidence/RN07/a-gates3/phase-checkpoint.receipt.json

Remaining / decisions:
  A04 PASS is limited to Android JS export. Native build NOT RUN by human decision D1; phase B must record the reused installed client and APK path/hash, with no new-build claim.
  A05 and A06 device/Metro interaction windows NOT RUN (phase B). A06 overall is not accepted from software output alone.
  Phases B/G, coordinator pixel inspection, any separately authorized failing-case fix/rerun and phase C remain. D03/D04 carry decision D3 (development-client limitation); later scope decision remains required.
  Checkpoint only: no full RN07 acceptance, handoff/submission, delegation or review dispatch. No staging, commit or push.

STOP at this checkpoint. No fixes, product/test/config edits, device input, shared Metro changes, handoff/submission manifest, delegation/review dispatch, staging, commit or push. Earlier a-gates/a-gates2 and checkpoint-a/checkpoint-a2 untouched.
