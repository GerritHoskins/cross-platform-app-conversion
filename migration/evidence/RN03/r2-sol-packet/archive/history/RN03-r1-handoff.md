# RN03 handoff — revision 1 (READY FOR REVIEW)

- Status: submitted for RN03-r1 review (2026-10-21). Stop after the matching verdict, regardless of outcome.
- Branch / HEAD: `migration/slice-1` @ `f78a759741b57ed1a19c7b6630af67640571ff61`, tree `4fa34700ccc50f54d103d89904d7c2d4b2d83be0` (source: `git rev-parse HEAD` / `HEAD^{tree}`).
- RN02 baseline: the approved RN02 commit is exactly HEAD (ancestor check trivially holds). RN02 revision 3 verdict: APPROVE — `migration/reviews/RN02-r3.md` (Next instruction: STOP). An explicit human RN03 assignment followed in this session (2026-10-21).
- Protected baseline: `IDEA.md` unchanged — SHA-256 `56b5dc0ebd13907b3214f0325c11380e03d463c29284f3213054de7f0a097d9d` (recomputed 2026-10-21, matches the protected value; file untracked, never read/staged/modified).

## Human assignment (2026-10-21)
- Implement RN03 within its six-file allowlist on top of the RN02 baseline.
- Preserve the shell screen and its tests: `shell-screen.tsx` and `__tests__/shell-screen.test.tsx` must remain and pass. Deviation note: the test file was deleted in error mid-session and was restored from git (`git restore --worktree`); it is now byte-identical to HEAD and passes (4/4).
- Run the RN03 gate battery, capture Android-native evidence, freeze the manifest hashes, submit RN03-r1 to gpt-6.1-sol (openai-codex, high, no fallback), and stop on the verdict.

## Product changes (allowlist: six files)
1. `src/state/conference-state.tsx` (new) — RN-facing Context/useReducer over the compiled `@migration/core` (load-conference, selectSessions, groupSessions, favorites): states loading|ready|error; mode all|favorites with search preserved across mode switches; committed case-insensitive search via core `selectSessions`; retry re-dispatches load and on failure keeps the prior list with a retry notice.
2. `src/screens/schedule-screen.tsx` (new) — schedule view per `migration/reference/contract.md`: search field, All/Favorite segmented buttons, per-day SectionList, time+track rows with session titles, no-match and no-favorites empty states; light/dark palettes via `useColorScheme()`; RN-valid accessibility (role `header` — RN 0.88 native rejects `heading`; `editable` instead of `disabled`; `accessibilityRole="alert"` host signal).
3. `src/app/_layout.tsx` — wraps the navigation tree in `ConferenceProvider`.
4. `src/app/index.tsx` — root route re-exports the schedule screen (package wording: "replace").
5. `__tests__/conference-state.test.ts` (new, 25 tests) — state machine and core integration via relative imports (established Jest convention).
6. `__tests__/schedule-screen.test.tsx` (new, 7 tests) — render, mode switch, search filter, empty states, error + retry.
- No changes to RN02 product files, dependencies, config, core, or the lockfile (allowlist diff clean, exit 0).

## Gates (pinned Node v24.19.0; exit 0 unless noted)
- Core tests (`cd migration/core && npm test`): 53/53, exit 0
- `scripts/verify-core-integration.cjs`: exit 0
- Typecheck (`npx tsc --noEmit`): exit 0
- Jest: 36/36 (conference-state 25, schedule-screen 7, shell-screen 4), exit 0; repeated full run: 36/36 again
- `npm run bundle:android`: success (`node_modules/.bin/expo export --platform android`); artifact `dist-android/_expo/static/js/android/entry-1c2fb05c5c4216cc1ec07e9437066ba3.hbc`, 2,872,597 bytes
- `git diff --check`: exit 0; allowlist diff: exit 0; staged diff: empty
- Supplementary: the same battery also passed under Node v26.3.0 earlier in the session; the pinned v24.19.0 battery is authoritative.

## Native evidence (emulator-5554, AVD RN01_API36, Android 16)
- Six dump-proven observations (initial render, scroll, lowercase "ionic" → 5 rows, "ioniczzz" → empty + no-match message, empty favorites state, all-sessions restore): `migration/evidence/RN03/RN03-native-observations.txt` + the six listed PNGs.
- Pixel inspection of the PNGs: delegated to the reviewer (RN02 precedent: "delegated screenshot inspection").
- Known environment defect (not an app defect): Gboard zombie-IME incident and recovery, documented in the observation record.

## Manifest — `migration/submissions/RN03-r1.json`
- 36 files[] entries: RN03 product/test (6), unchanged RN02 baseline files (7), RN03 evidence (7), packet history handoffs/reviews/submissions/work-packages (16).
- All sha256 values computed by `node migration/tools/manifest-hashes.mjs migration/submissions/RN03-r1.json --write` at freeze; this manifest and the future verdict are excluded from their own inventory; `IDEA.md` is a protected baseline only, outside files[]; no other verdict hashes are present.
- Hash gate: `--write`, then verify without `--write`; required result is zero problems. The literal tool output is recorded in the session reply (self-reference convention per RN02).
- Reviewer routing (re-verified against the hermes CLI immediately before dispatch): model `gpt-6.1-sol`, provider `openai-codex`, reasoning `high`, fallback `[]`.

## Stop discipline
Stop after the RN03-r1 verdict is received and saved verbatim to `migration/reviews/RN03-r1.md`.
No RN04 or any other package, no commits, no push, no publish, no extra fixes beyond explicit verdict instructions.
