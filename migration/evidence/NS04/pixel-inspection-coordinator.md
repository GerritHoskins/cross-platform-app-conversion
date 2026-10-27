# NS04 revision 1 — coordinator pixel inspection

Inspector: Claude Code coordinator (model claude-opus-5-5), viewing each PNG directly as an image on 2026-10-27. Supporting device evidence only: separate from automated checks and from formal review, not approval, not routed through Hermes or `openai-codex`. Frames were captured by the Hermes executor (GPT-6.1 Sol high) in run b-device on emulator-5554 (RN01_API36, 1080x2400, default light theme) from the phase A run 2 debug APK (sha256 `98045dd4…`, installed copy hash-verified by the executor).

Coverage: every PNG under `migration/evidence/NS04/` (23 files, 20 distinct; three byte-identical pairs noted below). Privacy check: no keyboard, clipboard suggestion, notification text or other personal content is visible in any frame. The status bar shows only the clock, two system icons (shield, boxed "A") and connectivity/battery icons. `B-install.png` is the stock emulator launcher (date, default app icons, Google search bar with no query); no personal content.

| Frame | SHA-256 | Result | Observed |
|---|---|---|---|
| b-device/B-install.png | `92ce90bca45ad98dd561b4e92b4bb834ebdb7669295553e1895bce658ca37b9b` | PASS (context) | Launcher home screen before launch; nothing app-specific. |
| b-device/B1-start.png | `987f60c8570a5c740624b89178353811fd63619c7ae1c7c1bd04a7629d55d30a` | PASS | ActionBar "Conference"; search hint, no keyboard; ALL SESSIONS selected; 8:00 am / Breakfast first; every session row shows a separate bordered "Favorite" button at the right, beside (not inside) the row text. |
| b-device/B1-scrolled.png | `c995d97a7b20b919ddb1722bf3bc4a12b25d8ef029144df96cb4021a328f0cdf` | PASS | After one swipe: top shows the tail of Migrating to Ionic, then What's New in Vue (first fully visible row), Evolution of Ionicons, Ionic Pro, 11:00 am heading, Ionic Workshop, Community Interaction, Navigation in Ionic. |
| b-device/B2-detail.png | `f0dbb96fa3cf5b45bc4adb7b74d636c02006c14ec47a8442770a6ad90d44c870` | PASS | ActionBar back arrow + "Session"; heading "What's New in Vue"; track "Vue"; description; "10:15 am–10:30 am"; "Hall 3"; bordered "Add to favorites"; Share, Watch, Add to Calendar, Mark as Unwatched, Download Video, Leave Feedback; no loading or error text. |
| b-device/B3-toggled.png | `654671f7334d8dfc3eb22b55975b811bef0f53b353cc0eddf7661f0c1ecf3949` | PASS | Same page; toggle now "Remove from favorites"; no dialog. |
| b-device/B3-back.png | `5901315ea99fb6138f948c65ff605ea1fab3ff3b3b7e2efcf540d87cd9ce81a3` | PASS | Schedule again with exactly the B1-scrolled viewport (same rows, same offset), ALL SESSIONS selected, no loading UI: scroll position and mode retained across detail navigation. |
| b-device/B4-favorites.png | `29a91e8e4868d1217fd681745c8e74bcce3612d763a73f432d44088e68b77c7f` | PASS | FAVORITE SESSIONS selected; one group "10:00 am" with What's New in Vue and a "Remove" button (the favorite set on the detail page). |
| b-device/B4-dialog.png | `6948a7314a081a196f7d35718c741788bfd0f5043181d92e1924a23ad72a829a` | PASS | Modal dialog "Remove Favorite", "Would you like to remove this session from your favorites?", CANCEL / REMOVE (Android caps); page dimmed behind. |
| b-device/B4-cancel.png | `5799faf9ad1c045b220ed354b9a67f171dc3218cdf4dabcb8b76dcfec0b0e2b6` | PASS | Dialog gone; What's New in Vue still listed. |
| b-device/B4-dialog-again.png | `fd849db7bc56b03e661c46e56dedd355d85cbe13fdb575720b417d5d84fffe1e` | PASS | Same dialog reopened (visually identical to B4-dialog). |
| b-device/B4-removed.png | `74892c2b92cbd57e2d64fea24b95715779fcbbaef7443283fed21280de565a9e` | PASS | "No favorite sessions." centred; no rows. |
| b-device/B5-added.png | `bb505fc91820552c22ccd1c8b3327f0b82190c34f9bb26b9c2e40d99cc6206be` | PASS | ALL SESSIONS, list from the top; dialog "Favorite Added" with a single OK and no message. |
| b-device/B5-already.png (= B5-already-remove.png) | `b470a04aca3b6fe288808550a0df2cd6c3d5091b402b4c9155331c90be427b5d` | PASS | Dialog "Favorite already added" with the removal message and CANCEL / REMOVE: the reproduced source quirk. The identical second file is the same dialog before tapping Remove. |
| b-device/B5-still-favorite.png | `3827974ba0423a323d4a7fef69869303f43ef9bf1a07447314b71aed94081e5f` | PASS | After Cancel: FAVORITE SESSIONS lists 8:00 am / Breakfast with "Remove" — the favorite was kept. |
| b-device/B5-removed.png | `d10e757023c7756dfe1fc10b34726d1bdf361628a2ed62924a293c6a6c3f9bab` | PASS | After the quirk dialog's Remove: "No favorite sessions." |
| b-device/B5-final-all.png | `735570adca3f0933ab7e020336f69550565e840b20b05319fc205f7d3b5e6d82` | PASS | ALL SESSIONS from the top, Favorite buttons on every row. |
| b-device/B6-entry-3.png | `314734b8013b6079c0aeefd8d8e5b49a83935b548a89bbae7f2108d62995723f` | PASS | Direct entry: "Session" page with back arrow for "Ionic Tooling" (fixture session id 3), Tooling, description, "9:45 am–10:00 am", "Executive Ballroom", "Add to favorites". |
| b-device/B6-back.png (= B6-final-all.png) | `39c7b87029161d6d1f576480316b96c0a84e041f913bcce8d085fc56bde4b44f` | PASS | Back from the direct entry lands on the schedule (8:00 am / Breakfast, ALL SESSIONS). |
| b-device/B6-9999.png (= B6-abc.png) | `403fdf98f729f87b8f34500cfd1fb884ec3ef7d5d86a835f1c48547c09eef1a3` | PASS | "Session not found."; no session content; toggle "Add to favorites" drawn without the button border (XML: enabled="false"); placeholders listed. `9999` and `abc` render byte-identically. |
| b-device/B6-foreground.png | `15faca159484e49489e5ebd8a0f8d9e35ed2e561c5e18f04f990ec3f8abd987c` | PASS | Final foreground: schedule in ALL SESSIONS. |

Notes (observations, not failures under the NS04 contract):

- Disabled controls are distinguished only by the missing button border: the disabled placeholders (Share, Watch, …) and the disabled unknown-ID toggle keep full-contrast black text, so "disabled" is not obvious visually; XML reports `enabled="false"` for all of them. Visual disabled styling is an NS07 acceptance/accessibility concern.
- The "Favorite Added" alert shows an empty message area above OK (Android `AlertDialog` with a title only), matching the source's title-only alert.
- Dialog button labels render uppercase (Android Material dialog styling), as the SegmentedBar labels did in NS03; no destructive styling on Android (D4, disclosed).
- Switching between modes returns the list to the top (NS03 design note: the ListView is recreated by `v-if`); scroll retention is required only across detail navigation, which B3-back shows.
- The executor first chose a partially visible row as the B1 reference and corrected it to the first fully visible row (What's New in Vue, id 6) before tapping; recorded in `B1-scroll-reference-correction.json`.

Verdict: on the device, rows open the detail page through the root Frame, the detail toggle acts immediately without a dialog, the list's three dialog branches (add-then-alert, already-favorite quirk, favorites-mode remove) behave per RN04 with Cancel keeping and Remove removing, ActionBar back returns to the same schedule viewport and mode, the development-only direct entry opens session 3 above the schedule, and unknown IDs show "Session not found." with a disabled toggle. No keyboard or personal content in any frame.
