# RN04 revision 1 — coordinator pixel inspection

Inspector: Claude Code coordinator (model claude-opus-5-5), viewing each PNG directly as an image on 2026-10-25. This is the vision-capable coordinator inspection that `migration/work-packages/RN04.md` (Android observation) permits. It is supporting evidence only, not formal review or package approval. It was not routed through Hermes or the `openai-codex` provider. The coordinator did not operate the device; the frames come from the Hermes phase B executor (GPT-6.1 Sol high) in `migration/evidence/RN04/native/`.

Device as recorded by phase B: emulator-5554, AVD RN01_API36, app dev.translationtest.rn development client, Metro http://127.0.0.1:8082, 1080x2400, light theme. Sessions: X = 4 University of Ionic, Y = 1 Breakfast.

Overall: **PASS** for the claimed visible behavior of every frame used as evidence below, with the dispositions noted. Not covered: dark theme, large text, hardware back, keyboard behavior and scroll-position restoration (RN07), and native detail-toggle removal (automated only).

## Frames

| Frame | SHA-256 | Result | Observed |
| --- | --- | --- | --- |
| RN04-01-schedule-search | e29d591168d524d7c18097d63e7107cd0def33aa493e22d7d3b95451cb1b47c2 | PASS | Search field shows `IOnic`; All sessions selected; 9:15 am group with University of Ionic, Getting Started with Ionic, Ionic Tooling, each with a Favorite button; 10:00 am Migrating to Ionic. The keyboard suggestion strip covers the bottom edge only; no claimed text is obscured. |
| RN04-02-detail-opened | 3a73fa3faf9c88c86b375398acab1570276e9170a867fecb39cacc83fe66e640 | PASS | Header `Session` with back arrow; heading University of Ionic; track Ionic; full description; `9:15 am – 9:30 am`; Hall 3; `☆ Add to favorites`; placeholders Share, Watch, Add to Calendar, Mark as Unwatched, Download Video, Leave Feedback. |
| RN04-03-detail-favorited | 8051a1065487bfc9ed0af1faaafe34b23e4c63262e1830b5b43e43db00136ca9 | PASS | Same detail; toggle now `★ Remove from favorites`; no alert or dimming overlay. |
| RN04-04-back-search-retained | 32b1630e302f217cb027ca110f8fff7cbccbda5b5e8f55f38d3081dd7323b0ec | PASS | Schedule header `Conference`; search still `IOnic`; All sessions selected; same filtered rows; keyboard dismissed. |
| RN04-05-favorite-added-alert | 9d43a638465d00dc9061798e422cbdac00de9721b1c27fd4e75df282019a3390 | PASS | Native dialog `Favorite Added` with a single `OK`; no message; empty search; Breakfast (8:00 am) row beneath the dim. |
| RN04-06-already-favorite-alert | 8478316193be79859284211b9d7150461e16bd80e72429834a388227aa310b25 | NOT EVIDENCE (miscapture) | Plain schedule, no dialog. Preserved as historical; it shows no product defect. Superseded by the retry below. |
| RN04-06-already-favorite-alert-retry | 0a1a29bfe012cc6fdec431488c2cdf1aeb74bd5c58654b9a81f017ffd248aad8 | PASS | Dialog `Favorite already added`, message `Would you like to remove this session from your favorites?`, buttons CANCEL and REMOVE: the deliberately reproduced source quirk. |
| RN04-07-favorites-after-cancel | 21d6389337f5f9ab5c3d55e6094c3120d7103bba2222f039f9fc4ab3dcd7f4c9 | PASS | Favorite sessions selected; 8:00 am Breakfast and 9:15 am University of Ionic, each with `Remove`; chronological order. |
| RN04-08-remove-confirm-alert | 3388ff64d566a400d6ce0563e7f159e097e1f04eff0df9b4590bba290f3e82fc | PASS | Dialog `Remove Favorite`, same message, CANCEL and REMOVE over the favorites list. The pixels do not show which row was pressed; capture notes record Remove Breakfast. |
| RN04-09-favorites-after-remove-cancel | 21d6389337f5f9ab5c3d55e6094c3120d7103bba2222f039f9fc4ab3dcd7f4c9 | PASS | Both favorites still listed. Byte-identical to frame 07 because the state is the same; the order comes from the timestamped notes and XML, not the pixels. |
| RN04-10-favorites-after-remove | 99bf316136ff29ff6962028b4a51d72fd07160b20c491f544f7a855d1b6a3a39 | PASS | Only 9:15 am University of Ionic remains; Breakfast and its 8:00 am heading are gone. |
| RN04-11-already-favorite-remove | 77b3f6281062ebfef3f08ecbe1ed40a2c75196ca3ba93fedde14edb8a7d90fae | PASS | Favorite sessions selected; `No favorite sessions.`; no rows. |
| RN04-12-unknown-id | 32459b9338501d802f6b92efb553917ebf2ca15ed9589d1328833b850a02145d | PASS | Header `Session` with back arrow; `Session not found.`; `☆ Add to favorites` rendered visibly greyed (disabled); placeholders below; no session content. |
| RN04-13-cold-entry | 6d6f98985a862b2bfc2955835071a2cd5b5a130a2b47aa69c7c0736fb872724a | OBSERVED: NOT ROUTED | The development-client launcher (`Development Build`, server list), not the session. Unassisted native cold entry is unverified natively, automated only, as the package allows. |
| RN04-13-cold-entry-after-connect | 3a73fa3faf9c88c86b375398acab1570276e9170a867fecb39cacc83fe66e640 | PASS (assisted) | After connecting to Metro through the launcher UI: University of Ionic detail with `☆ Add to favorites` (favorites reset by the force-stop, as expected for in-memory state). Byte-identical to frame 02: same screen and state. |
| RN04-14-cold-entry-back | 9df8d5a5de7d308f3945bc8652f39cfa82228cb02aacaa172fb4dc9e98490018 | PASS (assisted) | Header back from the assisted cold detail lands on the schedule: `Conference`, empty search, All sessions, Breakfast at 8:00 am first. |

## Notes

- The grey gear button at the top right of every app frame is the Expo development-client menu, not product UI. It overlaps the right end of the navigation header, where no claimed content sits.
- All text in the frames is readable at default size, with no clipping of names, times, alert text or button labels.
- Frame 06 disposition: the coordinator accepts `RN04-06-already-favorite-alert-retry` as the step-6 evidence and keeps the original as a historical miscapture. Nothing is renamed or overwritten.
