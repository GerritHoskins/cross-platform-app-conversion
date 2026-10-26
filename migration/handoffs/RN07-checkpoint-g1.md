RN07 G1 — BLOCKED checkpoint
Recorded 2026-10-25 after settings readback; executor Hermes GPT-6.1 Sol high.

Release gate and reason for stopping
  Initial read-only discovery returned migration/slice-1, HEAD f5a1d83, RN06 review commit f5a1d83. The later recorded gate returned HEAD 40ea01f467160a60b806c13527f9501d4d900e81, not the explicitly required RN06 commit f5a1d836156ad3225b8d050951ae5cc073e3c5f7. Live history identifies 40ea01f as "ADR updates", committed 2026-10-25T19:01:35+01:00. This executor did not commit or change candidates. No assumption that a descendant satisfies this session's exact-equality requirement.
  Branch and empty-index checks passed; raw porcelain was split without trim and paths taken from index 3; class-based scope audit passed. git diff --check passed. Gate evidence: migration/evidence/RN07/g-settings1/preservation-entry.json, gate-blocker.json, scope-final.json and command receipts.
  Recomputed every preservation path: 35 of 36 match exactly. The only exception is RN07.md, SHA-256 815a9c65a3096dde06f1178849e470f2a638b57e75d7fdc8cb5f7e55736a0754. Removing exactly the D5 bullet restores the recorded original hash 6c0fb762a0fe6658af54cd77451c5ebe3a764bd3afb116eab6994446148345f6. D5-only amendment verified. IDEA.md hash-only matches 56b5dc0ebd13907b3214f0325c11380e03d463c29284f3213054de7f0a097d9d; its contents were not read or printed.

Environment (read-only recheck, not behavioral acceptance)
  RN01_API36, emulator-5554, API 36, image google/sdk_gphone64_x86_64/emu64xa:16/BP22.250325.006/13344233:user/release-keys; emulator 35.5.10.0. Pinned Node v24.19.0. Existing Metro8082 status packager-status:running and reverse tcp:8082 reused, not restarted. Installed dev.translationtest.rn package dump retained in environment-entry.json; no install, native build or fresh launch claim.
  No app force-stop/start, launcher connection, UI action, baseline setup or app-state assertion occurred. Environment/settings reads after the failed gate are teardown evidence only.

Settings entry → change → tested → restored/final
  size: Physical size: 1080x2400 → no change → NOT RUN → Physical size: 1080x2400
  density: Physical density: 420 → no change → NOT RUN → Physical density: 420
  navigation_mode: 2 → no change → NOT RUN → 2
  font_scale: 1.0 → no change; 1.3/2.0/1.5 not attempted → NOT RUN → 1.0
  night: Night mode: no → no change; yes not attempted → NOT RUN → Night mode: no
  enabled_accessibility_services: null → never touched → NOT RUN → null
  accessibility_enabled: 0 → never touched → NOT RUN → 0
  default_input_method: com.google.android.inputmethod.latin/com.android.inputmethod.latin.LatinIME → never touched → NOT RUN → identical
  All entry/final raw values match each other and B2 exactly. No settings writes, restoration commands or mismatches. settingsRestored=true means unchanged and read back, not that settings cases ran. Evidence: g-settings1/settings-entry.json, settings-final.json, settings-changes.json.

Cases and evidence
  G1.release-gate BLOCKED: exact HEAD mismatch above.
  G01 NOT RUN. G02 NOT RUN, including separate keyboard-visible row/mode/Filter/Favorite attempts. Known F-1 was not reproduced or fixed here; no inferred FAIL or PASS.
  G05 NOT RUN: default, approximately 1.3, largest >=1.5 flows.
  G06 NOT RUN: default/larger-density flows.
  G07 NOT RUN: light/dark and live switch.
  G08 NOT RUN: system bars, keyboard insets, schedule edges, filter bottom.
  G09 NOT RUN: schedule, modal holding unapplied draft, detail background/resume. RN05 approves draft discard on close/remount; it does not explicitly decide a still-mounted modal's background/resume outcome. No lifecycle outcome or decision-needed product finding inferred without a run.
  Exact case/subcase records and RN07 fields: migration/evidence/RN07/g-settings1/results-g1.json. No required case marked N/A. Empty capture-index.json is intentional: no assertion frames and no pixels inspected. capture-notes.md discloses this.

Back/Home usage and logs
  Back events: none. Home events: none. No TalkBack/accessibility changes. back-home-usage.json records empty logs.
  No case windows occurred, so no logcat was captured and no crash/error-absence claim is made. Metro status is not a clean-console claim.
  Command receipts and commands.jsonl retain actual subprocess outputs, including the failed gate. Initial shell discovery has a retrospective receipt with unknown timing disclosed and original output copied unmodified. Raw CRLF captures are retained; authored text is LF. See line-ending-inventory.json.

Preservation and remaining work
  No product/test/config edits, fixes, old evidence or checkpoints modified, coordinator pixel report write, staging/commit/push, delegation/review dispatch, final handoff or submission. Only new g-settings1 evidence, this checkpoint and helpers/result in the authorized run directory were written.
  Coordinator must resolve exact-candidate authority before retrying G1. This run directory remains history; use a new run-id for any retry. G01/G02/G05/G06/G07/G08/G09 remain unexecuted. G2 separately owns G03/G04 TalkBack and remains entirely unexecuted. STOP at BLOCKED checkpoint.
