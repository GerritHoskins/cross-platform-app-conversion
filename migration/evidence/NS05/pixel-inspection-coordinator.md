# NS05 revision 1 — coordinator pixel inspection

Inspector: Claude Code coordinator (model claude-opus-5-5), viewing each PNG directly as an image on 2026-10-27. Supporting device evidence only: separate from automated checks and from formal review, not approval, not routed through Hermes or `openai-codex`. Frames were captured by the Hermes executor (GPT-6.1 Sol high) in run b-device on emulator-5554 (RN01_API36, 1080x2400, default light theme) from the phase A debug APK (sha256 `3a16979e…`, installed copy hash-verified by the executor), one process (PID 10517) throughout.

Coverage: every PNG under `migration/evidence/NS05/` (28 files, 27 distinct; `B9-final-schedule.png` is byte-identical to `B7-return-top-3.png`). Privacy check: no keyboard, clipboard suggestion, notification text or other personal content is visible in any frame. The status bar shows only the clock, two system icons (shield, boxed "A") and connectivity/battery icons.

Hardware key check (coordinator, from `commands.jsonl`): exactly one `input keyevent 4`, at B6, preceded by `B6-immediately-before-back.xml` showing the filter modal (`B6-back-key.json`); no text input, no other key events.

| Frame | SHA-256 | Result | Observed |
|---|---|---|---|
| b-device/B-install.png | `20513502b09a06dea9e6f56bed761f33559d497da9bb9277a8b980f339a66214` | PASS | App foreground after install/launch: schedule with Filter button; no launcher or personal content. |
| b-device/B1-schedule.png | `5ce3283be7c174c0b96c17b419208c664400eb959ee08d9285e67fb71610bf24` | PASS | ActionBar Conference; search hint, no keyboard; ALL SESSIONS selected; enabled bordered "Filter" button beside the SegmentedBar (FAVORITE SESSIONS label wraps to two lines in the narrower segment); 8:00 am / Breakfast first. |
| b-device/B2-open.png | `bab5f5e1a6d7419da917ddef6ab920e6a574223b6c331ac990a2d4ba127cfc12` | PASS | Full-screen modal: close (X) icon + "Filter Sessions"; heading "Tracks"; 10 rows Communication, Design, Documentation, Food, Ionic, Navigation, Services, Tooling, Vue, Workshop, every switch on; Deselect All / Select All / Reset / Done. |
| b-device/B3-ionic-off.png | `d61a292b0368304ceab443781e98aa19c8dc80f0854158d8b64a1355cd9b7ecf` | PASS | Only Ionic off; the other nine on. |
| b-device/B3-deselect.png | `4de394e3aaf7dae3daa15c947e3d1cb66d93bea9bacdba16dd140c499ac6cbbc` | PASS | All ten off. |
| b-device/B3-select.png | `1344bce3471de4630d3a4318cdfeef78eb388efdaae937dcc7e7f8e82dd5b5ed` | PASS | All ten on. |
| b-device/B3-reset.png | `1f0fb43abe7b1e4dff32b86bc50ca2e23fe3daa467b91a313f2abf2d44a2b29b` | PASS | All ten off (Reset clears the draft; modal stays open). |
| b-device/B4-only-ionic.png | `b9c72f32693e4d06b3169dca71c03fbc4d0be036ba99cbefbca10871b5d1c30a` | PASS | Only Ionic on. |
| b-device/B4-applied.png | `20d4b415baf5cef07ad95d6839cdf276ee7c15430853750fbcfbc6047fbd365f` | PASS | After Done: schedule shows 9:15 am University of Ionic, Getting Started with Ionic; 10:00 am Migrating to Ionic; nothing else (single-track; no Ionic Tooling); ALL SESSIONS still selected. |
| b-device/B5-reopen.png | `c83a518405ad139b950fa61df5bbc9cfa405253a9d997cabdbf41956580d1f4d` | PASS | Reopened: only Ionic on (mirrors the applied filter). |
| b-device/B5-draft.png | `67e2988631b79e819f2a67b7aec3de4b9fd6b769f85c59e791f1d3483a1bfa47` | PASS | Draft: Design and Ionic on. |
| b-device/B5-closed.png | `3492f06b11f845da4730ff5d4f52e26bcb3b9f6a33cd132d4022e4f1fff0b1f6` | PASS | After the ActionBar close: schedule unchanged (single-track rows). |
| b-device/B5-reopen-again.png | `676192907dd561656d75b0df0b0cf467a6d2546769120694d75ce019db710469` | PASS | Reopened: only Ionic on (closed draft discarded). |
| b-device/B6-draft.png | `a4f40411f47cc75f757235704f1b44fc45eb287714d6e9e36eb637c2dfd64919` | PASS | Draft again: Design and Ionic on. |
| b-device/B6-back.png | `a3cd6845b5a16891f9e0452125a358ac87a61edeabf55e8104c88277fe740689` | PASS | After the single Android Back: modal gone, schedule unchanged (single-track rows). |
| b-device/B6-reopen.png | `13db4f33d81f18ea2fdf06ee369597bf07c619eed98abacbc7249b8828fba0d8` | PASS | Reopened: only Ionic on (Back discarded the draft). |
| b-device/B7-deselect.png | `83cced44a460f1d6ede1932a7017560795311bed6b734c36458b636fccd65bf7` | PASS | All off before Done. |
| b-device/B7-empty.png | `53ed88438ca43610e76ad5668861c9a4f46c621e6e03da4c211f411fe064152d` | PASS | "No sessions match your search or filters." centred; no rows; Filter button still enabled. |
| b-device/B7-reopen.png | `47b327a94d9d8ae70efc6e6035aa18355a08411a52ce2a8528604524848e942e` | PASS | Reopened: all off (mirrors the empty applied filter). |
| b-device/B7-select.png | `19ecc49758f2a0166b2123345d423406b10fb3516da125c300428e06a240a8a4` | PASS | All on before Done. |
| b-device/B7-restored.png | `914dae44cc34eb656ffe6bd4c06776e7d9ea09528c747bcf1611bd333420037d` | PASS | Schedule restored from 8:00 am / Breakfast, 9:15 am group incl. Ionic Tooling. |
| b-device/B7-restored-scrolled-1.png | `c74aa7bb385caee9ebcede583fb3310e2e77b80d9926504e67fc55e2e0fbfb42` | PASS | Scrolled: 10:00–11:00 am groups (What's New in Vue, Evolution of Ionicons, Ionic Pro, Ionic Workshop, Community Interaction, Navigation in Ionic). |
| b-device/B7-restored-scrolled-2.png | `ab61108678ae824231da07d0fff1ede15c95e80e35a437184368d88147976c27` | PASS | Scrolled: 12:00 pm Lunch, 1:00 pm Ionic in the Enterprise / Ionic Worldwide / The Ionic Package, 2:00 pm heading. |
| b-device/B7-restored-scrolled-3.png | `495e89e24f88e2d88c1f5ea032fe81e1028cc7dffd0974af4e46687bb37e0279` | PASS | Scrolled to the end: 2:00 pm Push Notifications, Ionic Documentation, UX in Ionic; 3:00 pm Building with Ionic and Vue, Mobile States. |
| b-device/B7-return-top-1.png | `13e437dee44a99b1966f1dde33cd787bf930aa31a86e129a5fd9106999a0ad74` | PASS | Scrolling back up: Community Interaction … The Ionic Package. |
| b-device/B7-return-top-2.png | `cbf1f3b6728047abc8eac29f8d54ff99a797ccd2bc3a912b69b0b38356181f9a` | PASS | Scrolling back up: Migrating to Ionic … Navigation in Ionic. |
| b-device/B7-return-top-3.png (= B9-final-schedule.png) | `e88baf97f4bfcd3cb542ad4a8225bc3c8d38e70fbaddb5551b98ef97bbe2d05f` | PASS | Back at the top: 8:00 am / Breakfast; final foreground state. |

Notes (observations, not failures under the NS05 contract):

- Switch on/off states are distinguished mainly by thumb position and a light-blue versus grey track; the thumb is black in both states. Contrast and state affordance are NS07 accessibility concerns; the UI XML reports `checked` for every switch.
- Adding the Filter button narrows the SegmentedBar, so "FAVORITE SESSIONS" wraps to two lines (Android uppercase tab styling, as in NS03).
- Reset and Deselect All produce the same draft (all off), matching the Android source where Reset clears the draft.

Verdict: on the device the Filter control opens a full-screen native modal with the ten sorted tracks all on; the draft controls change only the draft; Done with only Ionic applies the `single-track` result; reopening mirrors the applied filter; both the ActionBar close button and the single Android Back discard a changed draft and leave the schedule unchanged; an empty filter shows the general empty message and Select All + Done restores the full schedule. No keyboard or personal content in any frame.