# NS01 revision 1 — coordinator pixel inspection

Inspector: Claude Code coordinator (model claude-opus-5-5), viewing each PNG directly as an image on 2026-10-26. Supporting device evidence only: separate from automated checks and from formal review, not approval, not routed through Hermes or `openai-codex`. Frames were captured by the Hermes executor (GPT-6.1 Sol high) in run b-device2 on emulator-5554 (RN01_API36, 1080x2400, default light theme) after the human-authorized AVD reboot. Run b-device (first phase-B attempt) captured no frames.

Coverage: every PNG under `migration/evidence/NS01/` (3 files, 3 distinct). Privacy check: no keyboard, clipboard suggestion, notification text or other personal content is visible in any frame.

| Frame | SHA-256 | Result | Observed |
|---|---|---|---|
| b-device2/B-launch.png | `e3e7cbcf99db94150a14eb5e7462fbe29e40a8bf46818d4e60b0d50832766377` | PASS (pixels) | First cold launch, 12:46: native ActionBar titled "Conference", body "Welcome to the conference app." centred, white page, no error dialog or red screen. The executor's UI XML for this frame is missing (uiautomator dump returned null-root errors); the shell rendering is established by these pixels, not by XML. |
| b-device2/B-launch-diagnostic.png | `605db90cecb227d2c4e1c067120f2356603216ff0e287e7a156dc22379779ac0` | PASS (pixels) | Same app still in the foreground at 12:47: identical shell, no error; diagnostic frame only, no XML. |
| b-device2/B-relaunch.png | `60e39477a14379af4f939ae1439f083bec9c8d42cf3041ce760f38864ff98d2c` | PASS | Second cold launch, 12:48: identical shell; the executor's UI XML for this launch confirms the title and body text. |

Verdict: the NS01 shell launches on Android from the A4 debug APK (installed copy hash-verified by the executor) and renders the required title and body on both cold launches. The first launch's B-launch case was marked BLOCKED by the executor only because its XML proof is missing; the pixels show the shell rendered correctly, and the second launch has both XML and pixels.
