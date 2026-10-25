# RN01 — executor checkpoint (from default-profile session)

Recorded: 2026-10-20 (Europe/Berlin). Source session: Hermes profile `default` — NOT the designated executor. The fresh `translation-migration` session runs the formal BLOCKED handoff / submission / review flow.
User mandate for this checkpoint: do not relabel this default-profile session, do not repeat implementation, no dependency fixes. Typecheck and native acceptance remain unresolved; RN02 stays gated.

## Repository state at checkpoint
- Branch: `migration/slice-1`
- HEAD: `7461a5ac88e0090c311610a113976e9db81ca51e` (C03 approved commit; satisfies RN01's C03-ancestor prerequisite; C03 records untouched)
- Tracked files: zero modified/staged (`git status --porcelain` minus `^??` is empty)
- Untracked total: 60
  - `IDEA.md` — protected pre-existing, never read/staged; recorded git blob ID `2575019d3f8f51794e06769d6878188d274c6b28` (record-only)
  - `migration/work-packages/RN01.md` — package doc; status line now BLOCKED (see Decision)
  - `migration/evidence/RN01/` — 7 evidence files (inventory at bottom)
  - `migration/react-native/` — 51 product files: 45 canonical-identical + 5 spec diffs (`package.json`, `app.json`, `src/app/_layout.tsx`, `src/app/index.tsx`, `.gitignore`) + 2 spec-new (`src/screens/shell-screen.tsx`, `__tests__/shell-screen.test.tsx`), per `tree-vs-canonical-template.txt`. Note: that listing states 52 visible files while `git status -uall` shows 51 — one delta, likely an ignored local artifact (e.g. `expo-env.d.ts`); fresh session to verify with `git check-ignore`. Generated dirs are ignored: `node_modules`, `android`, `ios`, `dist-android`, `expo-env.d.ts` (confirmed via `git check-ignore`); `.expo`/`coverage` do not exist.

## Gate status (commands + results; all commands in `migration/react-native` unless noted)
- PASS `npm test` run 1 — exit 0; 1 suite / 1 test passed, 0 snapshots → evidence/RN01/jest-pass-1.log
- PASS `npm test` run 2 — exit 0; identical counts → evidence/RN01/jest-pass-2.log
- FAIL `npm run typecheck` (`tsc --noEmit`) — exit 2; exactly ONE error: `src/components/app-tabs.web.tsx(38,6) TS2322` — `Ref<function-component>` (RN 0.88 View typing) not assignable to `Ref<ReactNativeElement>` → evidence/RN01/typecheck-target.log
  - Pre-existing, not a regression: the UNMODIFIED canonical template (zero spec edits) fails with the same `app-tabs.web.tsx(38,6)` error plus two CSS-module errors (which the spec-sanctioned `expo-env.d.ts` local artifact fixes in the target) → evidence/RN01/typecheck-pristine-canonical.log
  - Root cause: internal typing contradiction in `expo-router@58.0.24` `TabTriggerSlotProps` d.ts under RN 0.88 types; `app-tabs.web.tsx` is a byte-identical canonical file (dead code after `explore.tsx` deletion, still in the tsc program)
  - Version drift ruled out: `TabTrigger.d.ts` identical in expo-router 58.0.13 and 58.0.24 → evidence/RN01/expo-router-tabtrigger-slotprops-versions.txt
- NOT RUN: `npm ci`, `npx expo install --check`, `npm run bundle:android` — the step-5 sequential chain stopped at the red typecheck gate
- Native/AVD: not run; reconfirmed today: `emulator -list-avds` empty, `adb devices` none → native gate environment-blocked per package baseline
- Environment: JDK openjdk 21.0.7 (`JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-21.0.7.6-hotspot`); `ANDROID_HOME=C:\Users\Gerrit\AppData\Local\Android\Sdk`

## Resolved dependency versions (evidence/RN01/npm-ls-depth0.txt, `npm ls --depth=0`)
expo 58.0.16 · expo-router 58.0.24 · react 19.3.0 · react-native 0.88.0 · typescript 6.0.3 · jest 30.5.2 · jest-expo 58.0.11 · @types/jest 30.0.0 · @testing-library/react-native 14.1.0 · test-renderer 1.3.1 · expo-dev-client 58.0.14 · @expo/ui 58.0.21 (full list in the evidence file; template pins otherwise)

## Node caveat
- Pinned binary `C:/Users/Gerrit/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe` = v24.19.0 (verified by direct exec). That bin contains node.exe only (no npm) — npm came from the system path (v26.3.0 / npm 11.1.0).
- In this session's git-bash, PATH-prepending that bin still resolved `node` to v26.3.0 (system), so the live typecheck re-verification ran under system node. The TS2322 is a d.ts typing contradiction (version-independent across 58.0.x), but the fresh session should re-run under Node 24.19.0 explicitly and record which node resolved.

## Decision recorded (Codex advisor, read-only, gpt-6.1-sol, high; 2026-10-20)
- OPTION D chosen: record the typecheck gate as BLOCKED with the evidence above and submit the conflict attached to the reviewer; proceed with already-green gates.
  - A (exception edit to canonical `app-tabs.web.tsx`): rejected — unauthorized canonical-support-file modification (RN01.md:39, :104); risks discarding ref forwarding.
  - B (tsconfig exclude of the file): rejected — exceeds the Jest-types-only tsconfig allowance (:42); weakens checks (:143); hides the incompatibility.
  - C (change dependency pins): rejected by :55/:95 and the d.ts-identity evidence.
- Consequence applied in this session: RN01.md status line replaced with the advisor's exact BLOCKED text (command, error, three evidence files, "Approval and RN02 remain gated.").

## Reviewer routing (fresh session MUST verify before dispatch)
- Gate from `migration/instructions/qwen.md`: run `C:/Users/Gerrit/AppData/Local/hermes/bin/hermes.exe -p translation-migration config get delegation.model` — must be exactly `gpt-6.1-sol` (Sol), reasoning high is the profile setting, no fallback model. On any mismatch: stop and report.
- 2026-10-19 the Hermes DESKTOP app rewrote this profile's reviewer model — prefer CLI dispatch (`hermes -p translation-migration --in <repo> chat`).
- Reviewer goal: use the qwen.md reviewer template verbatim, filling `RN01`, revision `1`, next package `RN02`; `context` = "See goal."; no hashes/IDs pasted into the goal (C02 lesson).
- If Hermes fails before startup: record the real error and stop with `Review pending: unable to contact Codex GPT-6.1 Sol high.` plus the handoff location; do not pick a fallback yourself; the C03 precedent used the native `codex exec` transport.

## Fresh executor steps (per user)
1. Read `migration/instructions/qwen.md`, `migration/work-packages/RN01.md`, and this checkpoint. Re-verify evidence against the live tree: re-run `npm run typecheck` (expect exit 2, same single TS2322 at `app-tabs.web.tsx:38`) and one `npm test` (expect 1/1 green) under Node 24.19.0; re-run the tree-vs-canonical comparison (or `git diff` against the pinned `expo-template-default@58.0.25` tarball); re-verify protected baseline at repo root: `git diff --exit-code -- package.json package-lock.json src public android ios migration/core migration/reference` → exit 0, and `git hash-object IDEA.md` → `2575019d3f8f51794e06769d6878188d274c6b28`.
2. Confirm reviewer routing exactly as above (GPT-6.1 Sol / high / no fallback).
3. Write the explicitly BLOCKED handoff `migration/handoffs/RN01.md` (green + red gate status, versions, commands/exit codes, native absence, this checkpoint and the advisor decision as the conflict record); write revisioned submission `migration/submissions/RN01-r1.json` (programmatically derived current HEAD, all new/changed deliverable paths including this checkpoint file and the changed RN01.md, protected-file hashes, prior approved baseline references); finish all handoff edits FIRST, then `node migration/tools/manifest-hashes.mjs <manifest> --write` followed by check-only — zero problems; do not hash the manifest itself or the future review file; dispatch; END TURN; the only post-dispatch write is saving the verdict verbatim to `migration/reviews/RN01-r1.md`.
4. Expected outcome class: a BLOCKED/CHANGES_REQUIRED-style verdict on the typecheck conflict; no APPROVE is possible while the gate is red and native acceptance unverified. RN02 stays gated regardless of the verdict.

## Bounded evidence inventory (`migration/evidence/RN01/`; sizes + git blob IDs [sha1 via `git hash-object`] as of checkpoint — fresh session re-verifies)
| file | bytes | git blob ID |
|---|---|---|
| expo-router-tabtrigger-slotprops-versions.txt | 615 | 1ab0f3a09d5e457122f8bbfecab485a7640721f7 |
| jest-pass-1.log | 140 | 5885b429ce0e2d8011e1994d1b0e478c55296a26 |
| jest-pass-2.log | 140 | a950cc047378a5dd4483b970fec36c2463e0ca50 |
| npm-ls-depth0.txt | 1128 | 80c3b3bf3204eef958312244443aa18e935bdb27 |
| tree-vs-canonical-template.txt | 1655 | 66aeffc9a1f0398241a21462f6fe3bf08eac8395 |
| typecheck-pristine-canonical.log | 1961 | c6857fef23b77762b0b17a9e4ce605cf85f4270d |
| typecheck-target.log | 1688 | de998d99fe8e03f24bab35a2d19b7e6f52e426fe |
