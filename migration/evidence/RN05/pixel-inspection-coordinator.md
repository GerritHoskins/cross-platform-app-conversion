# RN05 revision 1 — coordinator pixel inspection (track filter)

Inspector: Claude Code coordinator (model claude-opus-5-5), viewing each PNG directly as an image on 2026-10-25. This is the vision-capable coordinator inspection that `migration/work-packages/RN05.md` (Android observation) permits. It is supporting evidence only, not formal review or approval, and it was not routed through Hermes or `openai-codex`. Frames were captured by the Hermes phase B executor (GPT-6.1 Sol high) in `migration/evidence/RN05/native/`. Device: emulator-5554, RN01_API36, 1080x2400, light theme. No fresh app load was needed; every navigation tap succeeded on the first attempt; no Android Back key was sent.

Overall: **PASS** for every frame's claimed visible behavior.

Several frames are byte-identical because they show the same state: 02 = 09, 03 = 05 = 08, and 04 = 07 = 10. Each distinct image was inspected once. The order of events between identical frames comes from the timestamped `capture-notes.md`, `commands.jsonl` and per-frame UI XML, not from the pixels.

| Frame | SHA-256 | Result | Observed |
| --- | --- | --- | --- |
| RN05-01-filter-opened | 092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f | PASS | Header `Filter Sessions` with back arrow; heading `Tracks`; buttons Reset, Deselect All, Select All, Done; 10 rows in order Communication, Design, Documentation, Food, Ionic, Navigation, Services, Tooling, Vue, Workshop, all with a checked box. All 10 rows are visible without scrolling. |
| RN05-02-draft-deselected | b06e240b30b93e2db0835be1e26f7d48b173d331a57cb6f1b6fcde1f46f19287 | PASS | Same modal; all 10 boxes unchecked. |
| RN05-03-draft-ionic | 306b8769ac4ca04d204fe68afd8e4e8e842e1bf5f66a5e66e8df7e2cd64ed313 | PASS | Only Ionic checked. |
| RN05-04-ionic-applied | 45c0f9fdd634308d06b58af5667e7cb4292e89491d8eb2b5147970068600128e | PASS | Schedule `Conference`; empty search; All sessions selected; new `Filter` button; 9:15 am University of Ionic and Getting Started with Ionic, then 10:00 am Migrating to Ionic; no Breakfast and no Ionic Tooling. Matches `single-track` [4, 2, 5]. |
| RN05-05-reopened-mirrors | 306b8769ac4ca04d204fe68afd8e4e8e842e1bf5f66a5e66e8df7e2cd64ed313 | PASS | Reopened modal with only Ionic checked (same pixels as frame 03, as expected). |
| RN05-06-draft-design | 26fc52798ee8a496638e2e07a1bbd4c87516d40ca6801813a88d5e502861804c | PASS | Design and Ionic checked in the draft; still in the modal. |
| RN05-07-closed-unchanged | 45c0f9fdd634308d06b58af5667e7cb4292e89491d8eb2b5147970068600128e | PASS | After header close: schedule still exactly 4, 2, 5; the Design draft was not applied. |
| RN05-08-reopened-after-close | 306b8769ac4ca04d204fe68afd8e4e8e842e1bf5f66a5e66e8df7e2cd64ed313 | PASS | Only Ionic checked: the discarded Design draft did not persist. |
| RN05-09-reset-draft | b06e240b30b93e2db0835be1e26f7d48b173d331a57cb6f1b6fcde1f46f19287 | PASS | After Reset: all unchecked and the modal is still open (Reset is not Cancel). |
| RN05-10-closed-after-reset | 45c0f9fdd634308d06b58af5667e7cb4292e89491d8eb2b5147970068600128e | PASS | After header close: schedule still exactly 4, 2, 5; the Reset draft was not applied. |
| RN05-11-none-applied | 2e2657af90cf0f6826a5208716ba3333951a9f7e71298896f10c9ee6314e7025 | PASS | Deselect All + Done: `No sessions match your search or filters.`; no rows or group headings; All sessions still selected; search still empty. |
| RN05-12-all-applied | 61a45cfc8c72d2fdbb5498f1e7ff74f97d48444095b6a1e76555cac04cf91dc2 | PASS | Select All + Done: 8:00 am Breakfast first, then 9:15 am University of Ionic and Getting Started with Ionic, then Ionic Tooling (cut off at the bottom edge): the full schedule restored; All sessions and empty search unchanged. |

## Notes

- Close affordance: the stack header's back arrow (`android.widget.ImageButton`, content-desc `Navigate up`, as recorded in capture notes) is the approved RN05 cancel/close. On this device the `presentation: 'modal'` route renders as a full-screen card with that arrow, with no visible backdrop or swipe-down handle; RN07 E08 should record those gestures as N/A.
- All labels, checkbox glyphs and buttons are readable at default size, with no clipping, overlap or obstructing overlay. The four control buttons fit on one row at 1080 px width; wrapping at large text sizes is RN07 scope.
- The grey gear at the top right is the Expo development-client menu, not product UI.
- Not covered here: hardware Back dismissal (RN07 E07), dark theme and large text (RN07), and favorites-mode filtering (`favorites-some`), which the package covers with automated tests only.
