# RN06 revision 1 — coordinator pixel inspection (swipe actions)

Inspector: Claude Code coordinator (model claude-opus-5-5), viewing each PNG directly as an image on 2026-10-25. This is the vision-capable coordinator inspection that `migration/work-packages/RN06.md` (Android observation) requires. It is supporting device evidence only: it is separate from the automated Jest evidence and from formal review, is not approval, and was not routed through Hermes or `openai-codex`. Frames were captured by the Hermes executor (GPT-6.1 Sol high) in three device runs: phase B (`migration/evidence/RN06/native/`), B2 (`native-b2/`) and B3 (`native-b3/`). Device: emulator-5554, RN01_API36, 1080x2400, light theme. Phase B performed one fresh app load; no red screen or missing-native-module error appeared, so the installed development build runs gesture-handler, Reanimated and Worklets without a rebuild. No Android Back key was sent in any run.

Overall: **PASS** for the swipe behaviors RN06 claims on the device, with the dispositions below. Frame `RN06-17-filter-search-applied` is not evidence (an incomplete state); its step is evidenced by `RN06-B2-17` and B3.

Byte-identical frames show the same state: 01 = 04 = 06 = 10; 11 = 13; 12 = 15. The order of events between identical frames comes from the timestamped notes, commands and UI XML, not from the pixels.

## Phase B (`native/`)

| Frame | SHA-256 | Result | Observed |
| --- | --- | --- | --- |
| RN06-01-baseline | 8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675 | PASS | Schedule; empty search; All sessions; Filter; Breakfast, University of Ionic, Getting Started with Ionic, each with its visible `Favorite` button (accessible path retained); no row open. |
| RN06-02-revealed-favorite | b82bce2a01b0bd77326b49b6d16c0d9cace9a52899761861d285845811c3541b | PASS | Breakfast row slid left; a light-green panel labeled `Favorite` is revealed on the right; other rows closed; still the schedule. |
| RN06-03-favorite-added-alert | 9dd8d108528c4769c401b2a862a8b10a242098a7a1c16e5fe5e8d48d2c54e923 | PASS | `Favorite Added` with `OK`; the Breakfast row is still visibly shifted (open) behind the dim, as A1 requires (close on OK, not before). |
| RN06-04-closed-after-ok | 8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675 | PASS | After OK: row closed (identical to baseline). |
| RN06-05-already-favorite-alert | abb5cef091026c3d3fc522df1081c35a49d66bfe0182ca08af2f9be98c02be16 | PASS | Second swipe-action on Breakfast: `Favorite already added`, message, CANCEL and REMOVE (reproduced quirk via the shared handler); row open behind. |
| RN06-06-closed-after-cancel | 8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675 | PASS | After Cancel: row closed. |
| RN06-07-favorites-revealed-remove | 08c5ecb1a86c6cac154a00cb9166f28e5015f0aaca6e12f5caad4e18e2751c2c | PASS | Favorite sessions; Breakfast slid left revealing `Remove`. |
| RN06-08-remove-confirm | 517d6d18ab38c0d28909635459c99974a11ee748de3fc3d861d9ab458457d557 | PASS | `Remove Favorite` confirmation with CANCEL and REMOVE; row open behind. |
| RN06-09-after-remove | 8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85 | PASS | `No favorite sessions.`; no rows. |
| RN06-10-before-vertical | 8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675 | PASS | All sessions at the top, rows closed. |
| RN06-11-after-vertical | 463b6b68e7dc18bdf8dd1f31b6fb2aff3f742c4c7098d58bd895d09db36a026d | PASS | List scrolled under the fixed search/mode/filter controls (Getting Started, Ionic Tooling, 10:00 am Migrating to Ionic visible); no row open; no navigation. |
| RN06-12-row-open | 6a0efe53d76006bf9f3ffd77421e16fc6a06456ee65a999f658671259cd35cd6 | PASS | Row A (Getting Started with Ionic, 2) revealed with `Favorite`. |
| RN06-13-link-tap-closes | 463b6b68e7dc18bdf8dd1f31b6fb2aff3f742c4c7098d58bd895d09db36a026d | PASS | After tapping A's link area: A closed, still the schedule (identical to frame 11): link guard. |
| RN06-14-detail-opens | 52bb9bc1ee8150d83d6f9bb78bf2931d9dc162cde940a2c3719c5752e3a81720 | PASS | Tapping the closed row opens `Session` detail for Getting Started with Ionic (9:30–9:45 am, Hall 2). |
| RN06-15-a-open | 6a0efe53d76006bf9f3ffd77421e16fc6a06456ee65a999f658671259cd35cd6 | PASS | A revealed again (identical to 12). |
| RN06-16-b-open-a-closed | 111152088e48e13ad493ad0548ded077fa65818f740f01158e04476607eb8031 | PASS | Row B (Ionic Tooling, 3) revealed; A closed: single open row. |
| RN06-17-filter-search-applied | 6a372e752b4729c349a545f32892034cbf34b36794e53dcf596e6f0cf0030fd5 | NOT EVIDENCE | Search `Ionic` and Ionic filter applied, but the list was still scrolled (session 4 off-screen) and the Gboard floating input toolbar covers the left edge. Kept as history; superseded by B2/B3. |

## Phase B2 (`native-b2/`)

| Frame | SHA-256 | Result | Observed |
| --- | --- | --- | --- |
| RN06-B2-17-filter-search-applied | 83d8f2e840f870d67e44d2f86cd74fe48ee56b69447f7f2081ed57b5fbb33fc5 | PASS (partly obstructed) | Search `Ionic`; 9:15 am University of Ionic and Getting Started with Ionic, 10:00 am Migrating to Ionic: rows 4, 2, 5 (`search-plus-track`-style intersection with only Ionic applied). The floating input toolbar covers the left ~140 px of the rows; names remain identifiable and the UI XML confirms them. |

B2 then revealed row 4 and tapped its action while the keyboard toolbar was showing; no alert appeared. Its `blocked-diagnostic.png` (e20b4067…) shows the toolbar gone and row 4 still revealed: the tap was consumed dismissing the keyboard. The schedule `SectionList` sets no `keyboardShouldPersistTaps`, so React Native's default (`"never"`) applies to every control in the list (pre-existing since RN03). **Disposition:** not a swipe defect; recorded as an RN07 keyboard observation.

## Phase B3 (`native-b3/`)

| Frame | SHA-256 | Result | Observed |
| --- | --- | --- | --- |
| RN06-B3-18a-favorite-added-alert | 3b84931b8731320e134fac282c08387e0175dc3ed12915c94e89fd566b260471 | PASS | With the keyboard hidden, one tap on row 4's revealed action: `Favorite Added`; row 4 still shifted behind the dim; search `Ionic` visible. |
| RN06-B3-18-filter-search-retained | 8b7e0781c3882afe259e653b698324d6380a2da2d29b7eef6819a9b79692797e | PASS | After OK: row 4 closed; rows exactly 4, 2, 5; search `Ionic`; All sessions selected; no keyboard. |
| RN06-B3-19-filter-still-ionic | 306b8769ac4ca04d204fe68afd8e4e8e842e1bf5f66a5e66e8df7e2cd64ed313 | PASS | Filter modal with only Ionic checked (byte-identical to RN05's `RN05-03-draft-ionic`, the same state). B3's UI XML also records Favorite sessions listing University of Ionic, then a return to All sessions. |

## Notes and limits

- Visual reveal, row closure and panel labels are confirmed in pixels. The swipe panel is a light-green 96 dp card with readable `Favorite`/`Remove` text; there is no overlap with the row button or clipping of labels.
- Accessibility hiding of the action panel (`importantForAccessibility="no-hide-descendants"`) cannot be judged from pixels or uiautomator dumps (the panel's nodes appear in dumps even when rows are closed). TalkBack was not exercised. This is **unverified**, for RN07.
- Gesture feel and thresholds (friction 2, 40 dp, no overshoot) look consistent in the reveal frames but are not measurable from stills. Diagonal drags, recycling under fast scroll, large text and dark mode are RN07.
- The grey gear at the top right is the Expo development-client menu, not product UI.
