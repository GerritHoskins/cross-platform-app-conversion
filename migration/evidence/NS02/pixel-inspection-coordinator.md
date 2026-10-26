# NS02 revision 1 — coordinator pixel inspection

Inspector: Claude Code coordinator (model claude-opus-5-5), viewing each PNG directly as an image on 2026-10-26. Supporting device evidence only: separate from automated checks and from formal review, not approval, not routed through Hermes or `openai-codex`. Frames were captured by the Hermes executor (GPT-6.1 Sol high) in run b-device2 on emulator-5554 (RN01_API36, 1080x2400, default light theme) from the phase A debug APK (installed copy hash-verified by the executor). Run b-device (first phase-B attempt) stopped at its HEAD gate after the human's merge commit `f2f51ea` (same tree as `52ae6de`) and captured no frames.

Coverage: every PNG under `migration/evidence/NS02/` (2 files, 2 distinct). Privacy check: no keyboard, clipboard suggestion, notification text or other personal content is visible in either frame.

| Frame | SHA-256 | Result | Observed |
|---|---|---|---|
| b-device2/B-launch.png | `17d8eaefc60d5d07fb8538db212c1ad1b8300f568897baa992fb956f13f1fbcf` | PASS | First cold launch, 3:47: native ActionBar "Conference"; centred two-line body "Sessions: 20" / "First session: 1 — Breakfast" with an em dash; white page; no error dialog or red screen. |
| b-device2/B-relaunch.png | `ca6b801a74342803b015fbb3851931e546aa61c3cab9771a755d2bab2f5760f5` | PASS | Second cold launch, 3:48: identical diagnostic screen. |

Verdict: the NativeScript app, built against the linked compiled `@migration/core` and the bundled fixture, renders the required diagnostic on both cold launches. The executor's B-launch disposition (a combined two-line Label and monkey launch time counted as polling) matches what the pixels show.
