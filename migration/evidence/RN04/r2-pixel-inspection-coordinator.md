# RN04 revision 2 — coordinator pixel inspection (detail removal)

Inspector: Claude Code coordinator (model claude-opus-5-5), viewing each PNG directly as an image on 2026-10-25. This is supporting evidence under `migration/work-packages/RN04.md` (Android observation), addressing finding 1 of `migration/reviews/RN04-r1.md`. It is not formal review or approval, and it was not routed through Hermes or `openai-codex`. Frames were captured by the Hermes executor (GPT-6.1 Sol high) in `migration/evidence/RN04/r2-native-retry2/`. Session X = 4 University of Ionic. Device: emulator-5554, RN01_API36, 1080x2400, light theme.

Overall: **PASS** for detail removal: the toggle returns immediately to `☆ Add to favorites`, no dialog appears, and the removal is reflected in Favorite sessions.

| Frame | SHA-256 | Result | Observed |
| --- | --- | --- | --- |
| RN04-R2-01-detail-favorited | 8051a1065487bfc9ed0af1faaafe34b23e4c63262e1830b5b43e43db00136ca9 | PASS | University of Ionic detail; toggle `★ Remove from favorites`; no dialog or dim overlay. |
| RN04-R2-02-favorites-with-x | 99bf316136ff29ff6962028b4a51d72fd07160b20c491f544f7a855d1b6a3a39 | PASS | Favorite sessions selected; empty search; only 9:15 am University of Ionic with `Remove`. |
| RN04-R2-03-detail-from-favorites | 8051a1065487bfc9ed0af1faaafe34b23e4c63262e1830b5b43e43db00136ca9 | PASS | Same pixels as R2-01: the same screen and state (`★ Remove from favorites`). The pixels cannot show that it was opened from the favorites row; that comes from the capture notes, commands and UI XML. |
| RN04-R2-04-detail-removed | 3a73fa3faf9c88c86b375398acab1570276e9170a867fecb39cacc83fe66e640 | PASS | Immediately after the toggle press: `☆ Add to favorites`; no dialog, alert or overlay anywhere on screen; the rest of the detail is unchanged. |
| RN04-R2-05-favorites-after-detail-removal | 41824c1549cfdc44a073192b4091174a61f4e41a86c028cb8d4a60286d314b69 | PASS | Favorite sessions still selected; empty search; `No favorite sessions.`; no University of Ionic row. |

## Notes

- Several frames are byte-identical to revision 1 frames because they show the same state: R2-01 and R2-03 equal r1 `RN04-03-detail-favorited`, R2-02 equals r1 `RN04-10-favorites-after-remove`, and R2-04 equals r1 `RN04-02-detail-opened`. These are expected identities, not reused files; acquisition is recorded with timestamps in `r2-native-retry2/commands.jsonl`.
- The toggle's selected state comes from the UI XML (`selected=true` for R2-01/R2-03, false or absent for R2-04), not from the pixels. Visually, the filled `★` and outline `☆` glyphs and the labels agree with it.
- Two earlier revision 2 native attempts stopped before capturing any frame. Their records are kept: `r2-native/` (an executor Back key exited to the launcher, and the relaunch reset in-memory favorites) and `r2-native-retry/` (a row tap followed by a dump about 90 ms later still showed the schedule). In retry2, with settle waits before and after each tap, the same row link navigated on its first attempt (`navigationAttempts: 1`). That supports a timing explanation, but does not prove it.
- The grey gear at the top right is the Expo development-client menu, not product UI.
