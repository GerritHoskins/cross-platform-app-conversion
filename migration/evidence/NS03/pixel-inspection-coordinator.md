# NS03 revision 1 — coordinator pixel inspection

Inspector: Claude Code coordinator (model claude-opus-5-5), viewing each PNG directly as an image on 2026-10-26. Supporting device evidence only: separate from automated checks and from formal review, not approval, not routed through Hermes or `openai-codex`. Frames were captured by the Hermes executor (GPT-6.1 Sol high) in run b-device on emulator-5554 (RN01_API36, 1080x2400, default light theme) from the phase A run 3 debug APK (sha256 `a290b5e9…`, installed copy hash-verified by the executor), one process (PID 6565) throughout.

Coverage: every PNG under `migration/evidence/NS03/` (4 files, 4 distinct). Privacy check: no keyboard, clipboard suggestion, notification text or other personal content is visible in any frame. The status bar shows only the clock, two system icons (shield, boxed "A") and connectivity/battery icons, identical in all four frames.

| Frame | SHA-256 | Result | Observed |
|---|---|---|---|
| b-device/B-launch.png | `d8efccb4045c736ba68ac1b1fac0e3a1d0924b614435139ca1465602c3faffea` | PASS (visual) | Cold launch, 9:34: ActionBar "Conference"; SearchBar with hint "Search sessions", no cursor, no keyboard; SegmentedBar "ALL SESSIONS" (selected, blue) / "FAVORITE SESSIONS"; heading "8:00 am", row "Breakfast" / "8:00 am–9:00 am" / "Dining Hall" / "Food"; further headings 9:15 am and 10:00 am with rows; no loading or error UI. Tab labels are drawn in capitals by Android's tab styling (see note). |
| b-device/B-scroll.png | `5cba4fd1fbab4ba5f2833470a3a26deafa5632981851db458f857b9f689b7dec` | PASS | After 3 swipes: headings "2:00 pm" and the last heading "3:00 pm" with "Building with Ionic and Vue" and "Mobile States"; search and mode controls stay fixed above the list; no keyboard. |
| b-device/B-favorites.png | `21663f2936e20b490e790819cc939bf4e58a2ac494ed8407f2275288d5622ab1` | PASS | "FAVORITE SESSIONS" selected (blue), "ALL SESSIONS" grey; centred "No favorite sessions."; no rows; no keyboard. |
| b-device/B-all.png | `b22a429e9af3c47e47d1f38b72e75e59d936140f0aedf3e40f6876c9fd922bef` | PASS | "ALL SESSIONS" selected again; the list is back from the top (8:00 am, Breakfast, …); no empty message; no keyboard. |

Note on B-launch: the executor's XML assertion failed because the native tab labels report `ALL SESSIONS` / `FAVORITE SESSIONS` (Android `textAllCaps` tab styling) while the package names `All sessions` / `Favorite sessions`; the SegmentedBarItem titles in source are the package's exact strings. The pixels show both controls present and the correct one selected. Disposition of this case is a human decision recorded in the phase C handoff.

Verdict: on the device the schedule loads from the Vuex store, renders native header and session rows, scrolls to the last group, switches to the favorites empty state and back, and shows no keyboard at launch.
