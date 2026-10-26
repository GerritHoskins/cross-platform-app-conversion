# RN07 revision 2 — supplemental coordinator pixel inspection

Inspector: Claude Code coordinator (model claude-opus-5-5), viewing each PNG directly as an image on 2026-10-26. Supporting evidence only: separate from automated Jest evidence and from formal review, not approval, not routed through Hermes or `openai-codex`. This report answers the RN07-r1 review finding (coordinator inspection incomplete).

Coverage: every distinct PNG (by SHA-256) in the B/G runs b-device1, b-device2, g-settings1b, g-settings2a, g-settings2b, g-settings2c and g-settings3 that `pixel-inspection-coordinator.md` marked NOT INSPECTED or did not list was viewed here: 471 distinct frames. Byte-identical copies inherit the verdict and are named in the row. Together with `pixel-inspection-coordinator.md`, every distinct B/G frame has a coordinator verdict. g-settings1 contains no PNGs (gate-blocked run).

Results: PASS 393, LIMITED 42, FAIL 17, BLOCKED 19.

Grading: PASS = pixels show the state the executor notes and UI XML claim; FAIL = a product defect is visible (all FAIL rows here are candidate-1 frames of G02/G05/G07, fixed by F-1/F-3/F-4 and re-verified on candidate 2); BLOCKED = environment or automation limit per D6/D10/D12; LIMITED = transient loading surface, system dialog or human-caused state.

Findings beyond the case results:
- Privacy (D13): several g-settings1b frames show Gboard clipboard suggestions containing host clipboard content. They are listed in the redaction record and are redacted before freezing; their pre-redaction SHA-256 values below identify the originals that were inspected.
- G2c `G03-search-focus` shows a DOCKED Gboard keyboard (TalkBack on), while G3 could not dock it. Insets were not measured in that frame; G08 stays BLOCKED (D12).
- g-settings2a `F03-action` and `F04-back-top` are executor targeting errors already disclosed by the executor; their replacement frames (F03b, F04-return-in-list) pass.

| Frame | SHA-256 (as inspected) | Result | Observed |
|---|---|---|---|
| b-device1/C03-find20-1 | `b1ee7840ac56601941aaadb8a20557cdb0e2d40a9b3d4a7042d54819ed8e66ae` | PASS | Scroll-to-find: All sessions; Ionic Tooling, 10:00 am Migrating to Ionic, What's New in Vue; ordered, no duplicates. |
| b-device1/C03-find20-2 | `ec9f8762de08c876d2be225a79940d969ebc03c27a2eab9cf3f0f98c98b39206` | PASS | Scroll-to-find: Evolution of Ionicons, Ionic Pro, 11:00 am Ionic Workshop; ordered. |
| b-device1/C03-find20-3 | `eb31a6f0be78ffc4153333b46d6da6090b83315ea683f80427bb8c37f6b0eed1` | PASS | Scroll-to-find: Community Interaction, Navigation in Ionic, 12:00 pm Lunch, 1:00 pm heading; ordered. |
| b-device1/C03-find20-4 | `668b1c46a88bc55d727e7c3dfd10a1f25bae1793f1cffdf8610825a23edfdc7d` | PASS | Scroll-to-find: 1:00 pm Ionic in the Enterprise, Ionic Worldwide, The Ionic Package, 2:00 pm; ordered. |
| b-device2/D-baseline-launcher | `1bd1993fd9a201234612dfd53f183ada732e9ab7b5200daf1cae90bf8e25b836` | PASS | Development-client launcher (Development Build) listing 127.0.0.1:8082; baseline connect step. |
| b-device2/D-connect | `9d9a7b57c06db979923ad39dbeb5af8c219efc71742c602a355fb222ee392dc1` | LIMITED | Transient development-client loading surface (blank, Tools); next frame carries the baseline. |
| b-device2/D02-header-detail7 | `095160bbfdafdbee7cff1587e8da25b734bb28fc3b1e69df1af980af0e0d8297` | PASS | Detail The Evolution of Ionicons (7): Design, description, 10:15–10:30 am, Hall 2, Add to favorites; header back arrow. Byte-identical: b-device2/D02-system-detail7. |
| b-device2/D02-list-tap-keyboard-observation | `a2efa32592c96ec67c73d0782102110cc6fb5d4561151c0161e20bf8e6be534e` | PASS | Search "Ionic" kept after the first list tap only dismissed the keyboard (known issue, later fixed by F-1); rows University, Getting Started, Migrating to Ionic. Byte-identical: b-device2/E03-first-list-tap-keyboard-only. |
| b-device2/D02-retained-tracks | `26fc52798ee8a496638e2e07a1bbd4c87516d40ca6801813a88d5e502861804c` | PASS | Filter modal: Design and Ionic checked, others unchecked; actions Reset/Deselect All/Select All/Done. Byte-identical: b-device2/D02-setup-design, b-device2/E03-design-draft, b-device2/E04-open, b-device2/E06-change-design, b-device2/E06-repeat-change, b-device2/E07-change-design, b-device2/E07-repeat-change, b-device2/E08-change-draft-no-dismiss-affordance, b-device2/E09-deselect-change, b-device2/E09-reset-change. |
| b-device2/D02-setup-apply | `1e83eade967db74362a5cd946f6c0b6fc8f9d1a4f59c3c4c6be70339c584b3c8` | PASS | After applying Ionic+Design: All mode, empty search; 9:15 University of Ionic, Getting Started, 10:00 Migrating to Ionic, Evolution of Ionicons. Byte-identical: b-device2/E03-apply-design-ionic. |
| b-device2/D02-setup-favorite4 | `e7cecaf26d727ee1db4bc23528ff67e88a36d2871c30b53e0d0b4d90d2d649d2` | PASS | Favorite Added alert with OK after adding University of Ionic (4). |
| b-device2/D02-setup-focus | `b775554d4d212e47b629f3649fd1db0e02622b595c8b0857b1a910c96c959615` | PASS | Search field focused (cursor), Gboard floating toolbar on left edge (environment); list unchanged. Byte-identical: b-device2/E03-search-focus. |
| b-device2/D02-setup-ionic | `306b8769ac4ca04d204fe68afd8e4e8e842e1bf5f66a5e66e8df7e2cd64ed313` | PASS | Filter modal draft: only Ionic checked; actions visible. Byte-identical: b-device2/E01-reopen-ionic, b-device2/E02-ionic-only, b-device2/E06-open, b-device2/E06-reopen-discarded, b-device2/E06-repeat-open, b-device2/E06-repeat-reopen, b-device2/E06-setup-ionic, b-device2/E07-reopen-discarded, b-device2/E07-repeat-reopen, b-device2/E09-deselect-reopen-ionic, b-device2/E09-reset-open, b-device2/E09-reset-reopen-ionic. |
| b-device2/D02-setup-mode-fav | `2b0bb3786cc6953bb2cc92245cdbb48ec53cfa7d4b82cb088c079eda8b2bfacf` | PASS | Favorites mode: only University of Ionic (4) with Remove. Byte-identical: b-device2/F05-cleanup-confirm20, g-settings1b/G05.default-selected-favorites. |
| b-device2/D02-setup-query | `7e75ec9b0bd9cd9a839e8a1e712c715dc30a4ebabe9624a213211b5f7af3a8cf` | PASS | Search "Ionic" typed (cursor), rows match; IME toolbar on left edge (environment). Byte-identical: b-device2/E03-query. |
| b-device2/D05-detail4 | `8051a1065487bfc9ed0af1faaafe34b23e4c63262e1830b5b43e43db00136ca9` | PASS | Detail University of Ionic (4) with "Remove from favorites" (favorited state); header back arrow. Byte-identical: b-device2/F03-closed-row-detail4, g-settings1b/G09.detail-after, g-settings1b/G09.detail-before, g-settings1b/G09.detail-open4. |
| b-device2/E-baseline-launcher | `3390a53692112cb4f86ac20965f1c9d96455158e728595de8cf8e53200385abd` | PASS | Development-client launcher; baseline connect step. |
| b-device2/E-connect | `a777d3ee100127afb9a1a32c2ad00514c03838dd408e6b58486943784cd41406` | LIMITED | Transient development-client loading surface; next frame carries the baseline. |
| b-device2/E05-clear-query | `ca92a81b30f2738602c48bcf1637af20fc878fd238991321ab67a2f103154a95` | PASS | Search cleared to placeholder after Backspace; full list from Breakfast; IME toolbar on left edge. |
| b-device2/E05-focus-query | `c9317ad75c827fdf9546f04b2053f936add3f62679906e9895bf542373fd8614` | PASS | Search "Ionic" focused before clearing (cursor handle visible); Ionic Tooling present (all tracks). Byte-identical: g-settings1b/G02-focus-filter. |
| b-device2/E05-restored-scroll1 | `c7d107487397255bfd61df7bcdd1a5d629b362721817811a48c63f4467801e31` | PASS | Full-list scroll: Ionic Tooling, 10:00 am Migrating to Ionic, What's New in Vue; ordered. |
| b-device2/E05-restored-scroll2 | `e520bacf9b68109348d3a317ce4b2f373372a0ab8ac0e0f2b9ef2181d318d1f3` | PASS | Full-list scroll: Evolution of Ionicons, Ionic Pro, 11:00 am Ionic Workshop; ordered. |
| b-device2/E05-restored-scroll3 | `70b99db571df86c6594a75969f62bdda4e1727a1232959b1ef2b549d34b0b4a2` | PASS | Full-list scroll: Community Interaction, Navigation in Ionic, 12:00 pm Lunch; ordered. |
| b-device2/E05-restored-scroll4 | `51781eeb70993650774e8f3b8eec008fa1ab822885bbbf0227d5ef2fc84b1e0f` | PASS | Full-list scroll: 1:00 pm Ionic in the Enterprise, Ionic Worldwide, The Ionic Package; ordered. |
| b-device2/E05-restored-scroll5 | `91dd7d0073a3dbf87dc9b12ffbec76be16a3e7cd735d7d11353856df8df07e75` | PASS | Full-list scroll: 2:00 pm Push Notifications, Ionic Documentation, UX in Ionic, 3:00 pm heading; ordered. |
| b-device2/F-baseline-launcher | `3e73831f9a3bca8ae4c315ffa0a634fa085d4ac7231d096ee0671da787d630c4` | PASS | Development-client launcher; baseline connect step. |
| b-device2/F-connect | `2ae9d9e2aa42daafb69a49c36fb16eb11895a73b1ab52411e643b4a104a564fb` | LIMITED | Transient development-client loading surface; next frame carries the baseline. |
| b-device2/F01-add-action1 | `c07a0d5d0892cd6a21118b99459d5a226840a1d186dbfaef07ac30d29c4afd7d` | PASS | Favorite Added alert after tapping the revealed swipe action on Breakfast (row still shifted left); no navigation. |
| b-device2/F01-duplicate-remove-action | `a7f7d839e017ee4bdf8340ac9fc1d67ac020f1bca7b0fa898d6c586b9208b0f2` | PASS | "Favorite already added" alert (Cancel/Remove) from the swipe action on Breakfast; no navigation. |
| b-device2/F01-readd-action | `57113f37a0ce5711c39afd90de91e4a51ffe3fdf3e2fbbb169591cc7f71e6dd5` | PASS | Favorite Added alert after re-adding Breakfast via swipe action. |
| b-device2/F01-removal-action | `1b81bd947e790c68ad14bf72e51a67c0ffc4d040c4718287347c7ef49c4dc8c7` | PASS | Favorites mode: "Remove Favorite" alert (Cancel/Remove) from the swipe action. |
| b-device2/F01-removal-confirm-action | `35949e331b2cbb827d370dda2dd6c40f18cca71fc3f42bc049bb948abc69c7b3` | PASS | Favorites mode: "Remove Favorite" alert before confirming removal. |
| b-device2/F03-open-row-tap-reveal4 | `caeb719ad4a5a7e8a26518a3c86660439acf85972c48cd3f85760eaa4afcfa4b` | PASS | University of Ionic row revealed with Favorite action; other rows closed; still on schedule. Byte-identical: b-device2/F03-reveal4. |
| b-device2/F04-action20 | `76139f1d0f6fee5353660937827f9e2609bf6f69a53a2cbacdb1cd2d240f9c43` | PASS | Favorite Added alert from Mobile States (20) swipe action while row revealed; no navigation. |
| b-device2/F04-open-other20 | `e88aa13fe78d62484d8c73f8bd9bd17900d2fa2342fde2735f5b2e9deb4d5f2e` | PASS | Mobile States row revealed at list bottom; other rows closed. |
| b-device2/F04-scroll-away1 | `0dd85c1c5bcb548959a9a7b4bc3f9bdda3c82dcb2423889dc621b050ef9e2cf2` | PASS | Scroll toward top: Ionic Tooling, 10:00 am Migrating to Ionic, What's New in Vue; rows closed. |
| b-device2/F04-scroll-away2 | `e1065eef6124e8cce54e12cecb5fb6b3c34e0f0ad92dc07311177d024a71505b` | PASS | Scroll: Evolution of Ionicons, Ionic Pro, 11:00 am Ionic Workshop; rows closed. |
| b-device2/F04-scroll-away3 | `1d48baa74bfd13fbe4ce0822ec2619752034d3d858f08e2e64c483de831254a6` | PASS | Scroll: Community Interaction, Navigation in Ionic, 12:00 pm Lunch; rows closed. |
| b-device2/F04-scroll-away4 | `2aa4c583666cbf1c4793e46c8b32ef934691ac114ae21b6610d5f46e659056b6` | PASS | Scroll: 1:00 pm Ionic in the Enterprise, Ionic Worldwide, The Ionic Package; rows closed. |
| b-device2/F04-scroll-away5 | `bf0bd448a745c8f6c82a94ce486340f9e03aad3417a07e58d2cc56515311f750` | PASS | Scroll: 2:00 pm Push Notifications, Ionic Documentation, UX in Ionic; rows closed. |
| b-device2/F04-scroll-back1 | `2496945c84bb12a1f6947570410dee7a034a266ef4909e8fb7a2a9f193cb7bd2` | PASS | Scroll back: The Ionic Package, 2:00 pm Push Notifications, Ionic Documentation; rows closed. |
| b-device2/F04-scroll-back2 | `e85c7955c6f960c1f6018705c948504f51de2b35de95588c9f17293ee8cd25a4` | PASS | Scroll back: 12:00 pm Lunch, 1:00 pm Ionic in the Enterprise, Ionic Worldwide; rows closed. |
| b-device2/F04-scroll-back3 | `6e65a2ea7d6671338f33ee42dbc8c3ce1420a95aebf8c8d32169b65978157b07` | PASS | Scroll back: 11:00 am Ionic Workshop, Community Interaction, Navigation in Ionic; rows closed. |
| b-device2/F04-scroll-back4 | `e2def969c294405b62781cf7bf907868bdc65b2083793392b5e03b94df7b7507` | PASS | Scroll back: What's New in Vue, Evolution of Ionicons, Ionic Pro; rows closed. |
| b-device2/F05-button-add1 | `4bd22a0fd4e4e6b61cfbad1b00f3995c63e5d3d067940f5f205dc1aa01a48a92` | PASS | Favorite Added alert from the accessible Favorite button on Breakfast (no swipe). |
| b-device2/F05-button-duplicate-again | `38696923c08a9f62f475ebbffac1b551de5d00832795b8869a3871b6e37909f6` | PASS | "Favorite already added" alert from the accessible button, second attempt (Cancel/Remove). |
| b-device2/F05-button-readd | `ca582838512532dd98b688eeff2cc41e7f011ef85b39529204b8622ae22c7022` | PASS | Favorite Added alert after re-adding via the accessible button. |
| b-device2/F05-button-remove-again | `8fb86992aff6e73fca28f375f0a12e78314191a69c2d2d95860258c110996211` | PASS | Favorites mode: "Remove Favorite" alert from the accessible Remove button. Byte-identical: b-device2/F05-button-remove. |
| b-device2/F05-cleanup-remove20 | `d2854d9a3e64ae61f55884f457289fa09f3ae14c51bf39b7e3bda6e06efecf1c` | PASS | Cleanup: "Remove Favorite" alert over Favorites showing Mobile States (20) with Remove. |
| b-device2/F05-cleanup-remove4 | `67dff235ac4a4fd43093b24bacd5285f27efdde332934fbfc7efc31fc9680aa6` | PASS | Cleanup: "Remove Favorite" alert for the last favorite (University of Ionic, 4). |
| g-settings1b/G01-launcher-retry | `1efdf6295d29deb36b6ce50ff56852759805eee879773683aea6fe02c592517a` | PASS | Development-client launcher; baseline connect step. |
| g-settings1b/G01-connect | `3d8c93f5bde1d8b90156c8251c11adf101caa508715f67dedd67cec7bbd676ad` | LIMITED | Transient development-client loading surface; next frame carries the baseline. |
| g-settings1b/G01-schedule-ready | `a4a1d38fe1f5c67a71bc783acc8664eac3b67377fdda260cd08f11b6645163aa` | PASS | Baseline schedule: empty search, All sessions, Breakfast/University/Getting Started; dev Tools chip fading (development client). Byte-identical: g-settings1b/G02-ready, g-settings1b/G05.default-ready, g-settings1b/G07.dark-open-light-ready, g-settings1b/G08-ready, g-settings1b/G08.full-list-ready, g-settings1b/G09-ready, g-settings1b/G1b-teardown-ready. |
| g-settings1b/G01-focus | `b82a9bc7967d5f8243ca1c246557909efad0fa177f2417104794bee7431df9b6` | PASS | Search focused (cursor); only the Gboard floating toolbar appears (no on-screen keyboard; environment, D6). Byte-identical: g-settings1b/G09-focus-search. |
| g-settings1b/G01-type | `46a578a5b350af6a4cc9cf03b059ff95b893bba44eff6b12682b72acc6c25420` | PASS | Search "Ionic" typed; Ionic results; floating toolbar only (environment, D6). Byte-identical: g-settings1b/G05.default-search-Ionic, g-settings1b/G08-keyboard-Ionic. |
| g-settings1b/G02-connect | `d713aea6df1fe332300abe7c73bea227688a04d66b216a6ac4d89d55fbbc2556` | LIMITED | Transient development-client loading surface; next frame carries the baseline. |
| g-settings1b/G02-type-row | `d6f8cb0d7e8c5ceefa871c0a460abedd0635e82408de2d8d2e511f0e09334384` | PASS | Search "Ionic" with Gboard clipboard suggestion chip (emulator clipboard text, environment); results correct. |
| g-settings1b/G02-focus-row | `c873b0bd3c41f7bb371c36913207abb06df78e3f93aaa22915550d1c203ef91d` | PASS | Search "Ionic" focused with cursor handle before the G02 row attempt; floating toolbar only. |
| g-settings1b/G02-row-first | `1b6f2aa335ada1a29c19e59f30bc668d3fbf58b01362ee5ae58597cfaae2b468` | FAIL | Candidate 1: first row tap with the IME up only dismissed it; still on the schedule (no detail). Confirms G02.row FAIL, fixed by F-1 (PASS in g-settings2a). Byte-identical: g-settings1b/G05.default-search-dismiss-first-row, g-settings1b/G08-keyboard-first-row-dismiss, g-settings1b/G08-query-clear, g-settings1b/G09-dismiss-keyboard-first-row, g-settings1b/G09.schedule-after, g-settings1b/G09.schedule-before. |
| g-settings1b/G02-focus-mode | `10d227942a61bf69e11cf3ceb8e539ecf4433b07ece0435fd45c84ea3d4a5446` | PASS | Search "Ionic" focused before the mode attempt. Gboard clipboard chip shows host clipboard content (environment; privacy note). |
| g-settings1b/G02-mode-first | `911998f0687e7a62a98e2edd07623467fed3631c93f1149d0507ede156247458` | PASS | First tap on Favorite sessions with the IME up switched mode (Favorites selected, no-favorites message); IME toolbar remains. |
| g-settings1b/G02-mode-return-all | `2a8b68789182f00c7f7042eb06b3dc879761460210eb5db19e029174aeca9c93` | PASS | Returned to All sessions; search "Ionic" kept. |
| g-settings1b/G02-focus-favorite | `307f93ddf38d139d45a6786f408b7946b7d9c23942cb727ee44ff93d9805cdcf` | PASS | Search focused before the favorite attempt. Gboard clipboard suggestions show host clipboard content (environment; privacy note). |
| g-settings1b/G05.default-launcher | `fed8150d349371b2f237941d94b060c3939ff18b1fb315fec65c9d553e4a14ad` | PASS | Development-client launcher; baseline connect step. |
| g-settings1b/G05.default-connect | `040fa1640925e8d7bcf40505e737e8dc40a6fcd2c25530284353bbcd9e0bc2a0` | LIMITED | Transient development-client loading surface; next frame carries the baseline. |
| g-settings1b/G05.default-schedule-scroll | `b2c6867481f8dfb15aef5fe6f0a97a0fbf02d77a6174ce8e2253f20e27699087` | PASS | Default font: scrolled list (Ionic Tooling, 10:00 am Migrating to Ionic, What's New in Vue); readable. |
| g-settings1b/G05.default-detail-scroll | `409b69a20d283746eb152aae45cf770f06ff4eb57eba21fe6d1216a6f1f4b63e` | PASS | Default font: University of Ionic detail scrolled; Add to favorites and actions readable. |
| g-settings1b/G05.default-favorite-alert | `c103e6365cb3e2421aed0dfe11fb3e04b78dae514bd77768b7180211bb47517a` | PASS | Default font: Favorite Added alert with OK. |
| g-settings1b/G05.default-search-focus | `a69971b035e565d0fcee2eb0a1a576891e7ec46be2ce566f049f78584f6327fe` | PASS | Default font: search focused. Gboard clipboard chip shows host clipboard text (environment; privacy note). |
| g-settings1b/G05.font1-3-launcher | `3b71f676987d4d2cd8e816ec4db85b8482793ffc006015f036b2ecf709f50a15` | PASS | Development-client launcher at font 1.3 (text larger). |
| g-settings1b/G05.font1-3-connect | `fdac50bae5b1ae18d91de8a004204d4caf71bc6149680f6a41ace28efd9e2096` | LIMITED | Transient development-client loading surface at font 1.3. |
| g-settings1b/G05.font1-3-ready | `f83cb185e7a5da0d65a163674cff13520c38a44d7ce7d1ef773e16c5b4d9d839` | PASS | Font 1.3 schedule: larger text, controls readable, no clipping. |
| g-settings1b/G05.font1-3-empty-favorites | `39eb9d5b5cbe498b0309a705d563367749830bbb3bb27910e6a42502f7e9d43a` | PASS | Font 1.3: Favorites mode, "No favorite sessions." Byte-identical: g-settings1b/G05.font1-3-favorites-empty. |
| g-settings1b/G05.font1-3-all-tracks | `cd7c2f5c4978efc8ad8001abdc51c820d5ec3f6fc1d8eee30daa2e8c37ae77bd` | PASS | Font 1.3 filter modal: actions wrap (Done on second row), all checked tracks readable. Byte-identical: g-settings1b/G05.font1-3-filter-restore-all, g-settings1b/G05.font1-3-filter-return1, g-settings1b/G05.font1-3-filter-select, g-settings1b/G05.font1-3-filter-top. |
| g-settings1b/G05.font1-3-schedule-scroll | `b2e8e6a783c66eae06c813c7cd14c2fa813a933504f6f8758251732a1179646b` | PASS | Font 1.3: scrolled list readable; long room "Executive Ballroom" fits. |
| g-settings1b/G05.font1-3-detail4 | `d0839ddb25efa0b2f04788d9497c0ded49019a0aff6a7bb58eb88569fa7599fd` | PASS | Font 1.3: University of Ionic detail, description wraps, Add to favorites visible. |
| g-settings1b/G05.font1-3-detail-scroll | `fab91a09b57aaca415b9878a20e1cf5a9cdab1717bbe9ea61b9544d6b9b56436` | PASS | Font 1.3: detail bottom; all action buttons reachable, none clipped. |
| g-settings1b/G05.font1-3-filter-deselect | `4fe1270152c4c333feb17dd07fe1a5cf0bdb20fdd755265f8a2ca1689bc23ccd` | PASS | Font 1.3: Deselect All leaves all tracks unchecked; actions wrap, readable. Byte-identical: g-settings1b/G05.font1-3-filter-reset. |
| g-settings1b/G05.font1-3-filter-bottom | `c59c0692991c2d57e7fe5db3ae9502d3e820621d41c8c260572546d6a8cb77f3` | PASS | Font 1.3: filter bottom to Workshop; checked tracks readable. Byte-identical: g-settings1b/G05.font1-3-filter-scroll1. |
| g-settings1b/G05.font1-3-favorite-alert | `773a878cd2508114eb1362430c9f7cc2ffca2cd015edb9b75ab8292bd63e099d` | PASS | Font 1.3: Favorite Added alert with OK readable. |
| g-settings1b/G05.font1-3-alert-ok | `bef5c195c4afae407393070e0833a03ee312d8301b9998be4972de84e9b738e9` | PASS | Font 1.3: schedule after OK; readable. Byte-identical: g-settings1b/G05.font1-3-all-again, g-settings1b/G05.font1-3-all, g-settings1b/G05.font1-3-baseline-close, g-settings1b/G05.font1-3-detail-return, g-settings1b/G05.font1-3-filter-done, g-settings1b/G05.font1-3-return-all, g-settings1b/G05.font1-3-schedule-return-top, g-settings1b/G05.font1-3-schedule-top. |
| g-settings1b/G05.font1-3-selected-favorites | `c835430a062d91064cc2b556c8ea7b4c17f7ba11eb096a4cff0adb196d7461d5` | PASS | Font 1.3: Favorites shows University of Ionic with Remove. |
| g-settings1b/G05.font1-3-search-focus | `cae657f17359e924a9620ae4950b5305e77079b4afa9127d84a0ab287edaa58e` | PASS | Font 1.3: search focused. Gboard clipboard suggestions show host clipboard text (environment; privacy note). |
| g-settings1b/G05.font1-3-search-dismiss-first-row | `7a8c0bab4dc5635d353689729cb0d6874bb272d0929432564f81f03630394082` | PASS | Font 1.3: search "Ionic" kept, keyboard dismissed by first tap (known F-1 behavior on candidate 1); results readable. |
| g-settings1b/G05.font2-0-launcher | `be11f003741ad93e6729627465f576e64cd260ac558b20bd95a00d0e62428603` | PASS | Development-client launcher at font 2.0 (text scaled; server names truncated by the launcher). |
| g-settings1b/G05.font2-0-connect | `4dacb5ba707e276666df378fbe63d6d22fd2210a5d1a26248cc934e0d36922eb` | LIMITED | Transient development-client loading surface at font 2.0. |
| g-settings1b/G05.font2-0-all-tracks | `a9cbfe35ae78200e6d36ef797d7eda8b796a2ae1dc6648c531889b04c699cab9` | PASS | Font 2.0 filter modal: actions wrap to two rows, checked tracks readable, nothing clipped. Byte-identical: g-settings1b/G05.font2-0-detail-bottom-all-tracks, g-settings1b/G05.font2-0-filter-restore-all, g-settings1b/G05.font2-0-filter-return1, g-settings1b/G05.font2-0-filter-select, g-settings1b/G05.font2-0-filter-top. |
| g-settings1b/G05.font2-0-detail-scroll | `90e860380a008790919872bda5a9306aa828416fed5ff378d8f622dd9a30a36b` | PASS | Font 2.0 detail: description wraps, time, room and Add to favorites readable. |
| g-settings1b/G05.font2-0-detail-return | `56b1f49067ce30162813341a709476776757c42599724d7798e846108363523b` | FAIL | Font 2.0 schedule: search field placeholder clipped (fixed height; the G05 FAIL fixed by F-3); mode buttons wrap; rows readable. Byte-identical: g-settings1b/G05.font2-0-filter-done, g-settings1b/G05.font2-0-schedule-return-top, g-settings1b/G05.font2-0-schedule-scroll. |
| g-settings1b/G05.font2-0-filter-deselect | `76c8c7b1a8d690be353361bef7eedd10c8809d644a4c1a26490e2dd79c0833b0` | PASS | Font 2.0 filter: Deselect All leaves tracks unchecked; readable. Byte-identical: g-settings1b/G05.font2-0-filter-reset. |
| g-settings1b/G05.font2-0-alert-ok | `28d3b1b85ac043dc6a0c840406605f1fb863a1ca4c1b78e1df8c18ba98f45805` | FAIL | Font 2.0 schedule after alert OK: search placeholder clipped (G05 FAIL, fixed by F-3); rest readable. Byte-identical: g-settings1b/G05.font2-0-seek-favorite4-1. |
| g-settings1b/G05.font2-0-selected-favorites | `f48efe8a1ba06df28dede257d38b331867f1888c75bfefff34597568db878dca` | FAIL | Font 2.0 Favorites: University of Ionic with Remove readable; search placeholder clipped (G05 FAIL, fixed by F-3). |
| g-settings1b/G05.font2-0-search-focus | `cbadd7a6ae51cdabbd05a7821d2041043d1b49bc222cfce38cb9804577830618` | FAIL | Font 2.0 search focused: placeholder clipped (G05 FAIL, fixed by F-3); IME toolbar covers left edge. |
| g-settings1b/G05.font2-0-search-dismiss-first-row | `1b7d28be0318a6ed2dacf2f092ca2578329b1d2453eeab43dcd0a0586f5bd234` | FAIL | Font 2.0: typed "Ionic" clipped in the search field (G05 FAIL, fixed by F-3); results readable. |
| g-settings1b/G06.density480-launcher | `21f422da6548b9505642222888aed508643a12c620d7346e1fef1ae531e6ead0` | PASS | Development-client launcher at density 480. |
| g-settings1b/G06.density480-connect | `44be410ba1c78a3e4b7b26405ca637ab3641c6fa24658e1ed15d40f4ddf930a3` | LIMITED | Transient development-client loading surface at density 480. |
| g-settings1b/G06.density480-ready | `58ed0a31b2d0d4a657269d9977edc57f9e5dd645ff205d92998b945f7030970b` | PASS | Density 480 schedule: larger layout, controls readable, search field not clipped. |
| g-settings1b/G06.density480-empty-favorites | `a970a714552c270c07649ce62de402d1ae47b26daa80401804342d1d4a94d019` | PASS | Density 480: Favorites mode, "No favorite sessions." Byte-identical: g-settings1b/G06.density480-favorites-empty. |
| g-settings1b/G06.density480-all-tracks | `ec251ca4fb03b44e3d417f6e454c0541d3fd55509a8c029728b0dcdf8f4c2b14` | PASS | Density 480 filter: Done wraps to second row; checked tracks readable. Byte-identical: g-settings1b/G06.density480-filter-restore-all, g-settings1b/G06.density480-filter-return1, g-settings1b/G06.density480-filter-select, g-settings1b/G06.density480-filter-top. |
| g-settings1b/G06.density480-schedule-scroll | `83a79481284b7381da136573e6fa5b35b7c530c99ef118be0023b756ec6eb287` | PASS | Density 480: scrolled list readable, no clipping. |
| g-settings1b/G06.density480-detail4 | `b1d9a957ee4ffc6f25111884324b48d62e2f37623679884608528e0004a63c24` | PASS | Density 480: University of Ionic detail readable, Add to favorites visible. |
| g-settings1b/G06.density480-detail-scroll | `9322820f4cb7f481699d3e1e2ff0f143e53ee0c323bd6d6b35e50850496b95b7` | PASS | Density 480: detail bottom, all action buttons reachable. |
| g-settings1b/G06.density480-filter-deselect | `948c5a58288348830cc84a417618ae28e90c0259634131849472ede1ba235616` | PASS | Density 480: Deselect All leaves tracks unchecked; readable. Byte-identical: g-settings1b/G06.density480-filter-reset. |
| g-settings1b/G06.density480-favorite-alert | `596ad7317d72730b81cce77e6140135e076cb31b37207588916045ab4a66994f` | PASS | Density 480: Favorite Added alert with OK. |
| g-settings1b/G06.density480-alert-ok | `3a70a42b900cf3289a7863eb8c3683d81d958bae8b13da1f8b1f7fe4c29e9845` | PASS | Density 480: schedule after OK; readable. Byte-identical: g-settings1b/G06.density480-all-again, g-settings1b/G06.density480-all, g-settings1b/G06.density480-baseline-close, g-settings1b/G06.density480-detail-return, g-settings1b/G06.density480-filter-done, g-settings1b/G06.density480-return-all, g-settings1b/G06.density480-schedule-return-top, g-settings1b/G06.density480-schedule-top. |
| g-settings1b/G06.density480-selected-favorites | `5e4240717db7a34ae0aaa638e53a90b65d86ad70ce395ae58c19a617cbed797d` | PASS | Density 480: Favorites shows University of Ionic with Remove. |
| g-settings1b/G06.density480-search-focus | `c9d4ede12b982e4435c55f249f1eb5e71889c50e8d442ab587d56ae68262b4ed` | PASS | Density 480: search focused. Gboard clipboard suggestions show host clipboard text (environment; privacy note). |
| g-settings1b/G06.density480-search-Ionic | `44e384b667c70f73e386f2293e0f24c5980e9696c3a72f8bda59c3b3761de91e` | PASS | Density 480: search "Ionic" fully visible; results correct; IME toolbar on left edge. |
| g-settings1b/G06.density480-search-dismiss-first-row | `d17e8aed88f86ed0c258b22800e3df1f93ccde3305ff9885196c2bb6fe46164f` | PASS | Density 480: search kept after first-tap keyboard dismissal (candidate 1 known issue); readable. |
| g-settings1b/G07.dark-open-light-launcher | `4ab722d7f1107e4d264507ef607c8569529bc4faa90aa91360ddd8ddd914986e` | PASS | Development-client launcher (light) before the live dark switch. |
| g-settings1b/G07.dark-open-light-connect | `d44bac4ccc74c71f030ca02611bb748e990a952dae59e4537ff7990e92d737b2` | LIMITED | Transient development-client loading surface. |
| g-settings1b/G07.dark-detail4 | `11f0e39718b2ca4885d0945197af8903146de6b603f302905485a0c744962c0a` | FAIL | Dark detail (candidate 1): content dark and readable, but the native header and status bar stay white (G07 FAIL, fixed by F-4). |
| g-settings1b/G07.dark-detail-scroll | `258a262df5e089ced8d5cc575766d9c6df49d49942fa641a1faeceb4c8248157` | FAIL | Dark detail scrolled: content readable; header stays white (G07 FAIL, fixed by F-4). |
| g-settings1b/G07.dark-filter-bottom | `6f85355b216183cbdafb0243e60a1f59e543a80f61c3ccc624a5592959844892` | FAIL | Dark filter bottom: tracks and actions readable on dark; header stays white (G07 FAIL, fixed by F-4). Byte-identical: g-settings1b/G07.dark-filter-restore-all, g-settings1b/G07.dark-filter-select, g-settings1b/G07.dark-filter-top. |
| g-settings1b/G07.dark-favorites-empty | `e84b9aa64ac4e427200428c07dc238736ea158b39745e4f940ae088895429857` | FAIL | Dark Favorites empty: content dark and readable, Favorite sessions selected; header stays white (G07 FAIL, fixed by F-4). |
| g-settings1b/G07.dark-favorite-alert | `193093b499029933cd5e1c406d8540dc816f32e68b611378ac758611b034df59` | PASS | Dark Favorite Added dialog (dark surface, OK readable); background dimmed. Header issue as in G07 FAIL. |
| g-settings1b/G07.dark-alert-ok | `b00f55bd6c71b8e7e4e789feb9e0dbb95c49e1004b5f59fa8607b2eff30bcf3d` | FAIL | Dark schedule after OK: rows, headings, Favorite buttons readable; header stays white (G07 FAIL, fixed by F-4). Byte-identical: g-settings1b/G07.dark-all-again, g-settings1b/G07.dark-dark-after-switch, g-settings1b/G07.dark-detail-return, g-settings1b/G07.dark-filter-done, g-settings1b/G07.dark-return-all, g-settings1b/G07.dark-schedule-return-top, g-settings1b/G07.dark-schedule-top. |
| g-settings1b/G07.dark-selected-favorites | `a7ab7d688e3bed801dabc90f7fc5218d1e63eba8d9ab4cec4c6518d7e6a7217b` | FAIL | Dark Favorites: University of Ionic with Remove readable; header stays white (G07 FAIL, fixed by F-4). |
| g-settings1b/G07.dark-search-focus | `a1ba2a0f49c7346073259df5dd8d22efc4c3c4e9da3a0a53394ba694d02da249` | FAIL | Dark search focus: dark input readable; header white (G07 FAIL). Gboard clipboard chip shows host clipboard (environment; privacy note). |
| g-settings1b/G07.dark-search-Ionic | `416528ff254043d89b48ecc45f8060447a1d120a20064610043ecb950f902c6e` | FAIL | Dark search "Ionic": readable dark input and rows; header white (G07 FAIL, fixed by F-4); IME toolbar on left. |
| g-settings1b/G07.dark-search-dismiss-first-row | `2bfe00545cbcd4c6676a587d49ead9d71120afd5ac453d0f8177751a2720c698` | FAIL | Dark: search kept after first-tap keyboard dismissal; readable; header white (G07 FAIL, fixed by F-4). |
| g-settings1b/G07-light-restored-open | `1016a41b88e7bfe03570873ece53375da47ce67a5f2e69f605bf352289df898f` | PASS | Light restored while the app stays open: schedule fully light, search "Ionic" kept. |
| g-settings1b/G08-launcher | `4f9e66ed0ba59e021db0f3fabcf92e0feb3dd15308971ce1324f983f564057aa` | PASS | Development-client launcher; baseline step. |
| g-settings1b/G08-connect | `ef710ed289a1decea88b839c585fab702e103fe4dbfa88eebb4deca068cc4cae` | LIMITED | Transient development-client loading surface. |
| g-settings1b/G08-search-focus | `31ee7774355aadfe76a1d7e5ec0bc0c51c3116f327ebced48c33b50b57f8787d` | PASS | Search focused below the header, clear of the status bar. Gboard clipboard chip shows host clipboard (environment; privacy note). |
| g-settings1b/G08-viewport-favorites | `edb8fdd46fd4578c376cfd3a436eb3b70153aee2edc0c06e9d4d581fad019f25` | PASS | Favorites mode with search "Ionic": no-favorites message; controls clear of system bars. |
| g-settings1b/G08-list-edge1 | `98b322344c2b254113f14090200a48be58ea32bdff2341cbca79f9b5b74e5682` | PASS | Search "Ionic" mid-list (10:00 am..11:00 am); controls fixed above, rows clear of the status bar. |
| g-settings1b/G08-list-edge2 | `b2122259b5c88d16b13b101c7ba51173c226bd29d1744462d5aaf686b2e4ae67` | PASS | Search "Ionic" further down (11:00 am..1:00 pm); no overlap with system bars. |
| g-settings1b/G08-filter-bottom-scroll | `e3f29eeaeaaf6e2f3c7c0d810053f1ed77f26a5fdd4a2b3bb916b3ad92a1ff3e` | PASS | Filter modal scrolled to Workshop: last track fully above the navigation bar; actions fixed at top. Byte-identical: g-settings1b/G08-filter-bottom. |
| g-settings1b/G08-filter-close | `1cdc9f1801944f3faaa8179932dfd7114f595ac854a0ec7175c3b148ca67038e` | PASS | After closing the filter: list end (UX in Ionic, 3:00 pm Building with Ionic and Vue) above the navigation bar. Byte-identical: g-settings1b/G08-list-bottom, g-settings1b/G08-list-edge10, g-settings1b/G08-list-edge11, g-settings1b/G08-list-edge12, g-settings1b/G08-list-edge4, g-settings1b/G08-list-edge5, g-settings1b/G08-list-edge6, g-settings1b/G08-list-edge7, g-settings1b/G08-list-edge8, g-settings1b/G08-list-edge9. |
| g-settings1b/G08.full-list-launcher | `0e5224ef05c54af792523e3ffc8f7effee068c7681c8400c19bbcebf823a57c3` | PASS | Development-client launcher; baseline step. |
| g-settings1b/G08.full-list-connect | `5aed44767b39d037a63792b954841e2f206b5b79b547011d322e168ff808c86b` | LIMITED | Transient development-client loading surface. |
| g-settings1b/G08.full-list-scroll1 | `84fb480b638131b1bc65c39f555ea933a637ec4c1cd8db8332591cb312839619` | PASS | Full-list scroll: Ionic Tooling, 10:00 am Migrating to Ionic, What's New in Vue; clear of system bars. |
| g-settings1b/G08.full-list-scroll2 | `8ecaa2ff22da84595d363d57c59a8e52f22a5efffdb73e7b7ea63e04def872c5` | PASS | Full-list scroll: Evolution of Ionicons, Ionic Pro, 11:00 am Ionic Workshop. |
| g-settings1b/G08.full-list-scroll3 | `2ed4f9406edbef4af3a6ededbd64a4fc39186f3cb68b6a0efad6f6053f9b0299` | PASS | Full-list scroll: Community Interaction, Navigation in Ionic, 12:00 pm Lunch. |
| g-settings1b/G08.full-list-scroll4 | `0160e5aa8f4c128a6dbd3b8e2b252709151489a8da0a380140525f6f14d39105` | PASS | Full-list scroll: 1:00 pm Ionic in the Enterprise, Ionic Worldwide, The Ionic Package. |
| g-settings1b/G08.full-list-scroll5 | `cea9160ca18f0b2bae8a12d11353473c40bd2c4cece3fd663039b719e3f1e10d` | PASS | Full-list scroll: 2:00 pm Push Notifications, Ionic Documentation, UX in Ionic; 3:00 pm heading above the navigation bar. |
| g-settings1b/G09-launcher | `302312e8516d6a58a9c0735fa158ecb84fdd68d852b47df985d47e5e46bca52d` | PASS | Development-client launcher; G09 baseline step. |
| g-settings1b/G09-connect | `5fd8d334be8732fc2f7ed418c6723585ef23620e80f4b830f10bea35d9130cff` | LIMITED | Transient development-client loading surface. |
| g-settings1b/G09-add4 | `f9535f2c042f1107cbc229c922179d7244279eef662db8987b86eb043efb48ff` | PASS | G09 setup: Favorite Added alert for University of Ionic. |
| g-settings1b/G09-query-Ionic | `25df14e90ff27f1e6109875c3708638d77cec4bb88720866b45ddeaba47ec0b0` | PASS | Search "Ionic" typed. Gboard clipboard panel lists host clipboard history including personal message text (environment; PRIVACY: this frame exposes the human's clipboard content). |
| g-settings1b/G09.schedule-home | `1168e863d1f70a77c835f3a398653450d0fb0d5f2c5101f26ed35258fdcce205` | PASS | Android home after HOME from the schedule (app backgrounded). |
| g-settings1b/G09.modal-home | `89a0be6fcd0b7d8c98b174a60e918767655b4fdb2ae0fb093cb435d2ad176033` | PASS | Android home after HOME with the filter modal open. |
| g-settings1b/G09.modal-after | `f0b07e1bdf654383da09175aeafbd9cbdb18428de33655da756d55ca01f25245` | PASS | Resumed: filter modal still open with the unapplied draft (Design unchecked), no apply (D7). Byte-identical: g-settings1b/G09.modal-before, g-settings1b/G09.modal-draft-uncheck-design. |
| g-settings1b/G09.detail-home | `272f194043004df5ef00fa0e9e269107f6e0f45b4f800a3dc6f4c2169bdacefc` | PASS | Android home after HOME from the detail screen. |
| g-settings1b/G05.font2-0-detail-bottom-launcher | `c8bb1ec2d293b5e64898a8393252e68757bf9000683a4b9e0fe6dfcb1e7eaefc` | PASS | Development-client launcher at font 2.0. |
| g-settings1b/G05.font2-0-detail-bottom-connect | `a455ae0cd1a46a936a64040a05db83859dfe2101dd60e4feadc7f1615c09715d` | LIMITED | Transient development-client loading surface at font 2.0. |
| g-settings1b/G05.font2-0-detail-bottom-ready | `c8e3e1a1e572b744dc10c3baf2ffb2b72dbe701dcd2a76e51a0730b06033cb48` | FAIL | Font 2.0 schedule: search placeholder clipped (G05 FAIL, fixed by F-3); mode buttons wrap; rows readable. Byte-identical: g-settings1b/G05.font2-0-ready. |
| g-settings1b/G05.font2-0-detail-bottom-empty-favorites | `233378724eb78e1d24afb4411489b6b9799ef12809b85296a0a2c388b8bbce30` | FAIL | Font 2.0 Favorites empty: message readable; search placeholder clipped (G05 FAIL, fixed by F-3). Byte-identical: g-settings1b/G05.font2-0-empty-favorites, g-settings1b/G05.font2-0-favorites-empty. |
| g-settings1b/G05.font2-0-detail-bottom-scroll1 | `ef5d56207f9926c3cc576a79e3fa2cf427cf0c1c34081e20940ee80d2b7c26b3` | PASS | Font 2.0 detail scrolled: description, time, room and Add to favorites readable. |
| g-settings1b/G1b-teardown | `8c15d03e72ce1a11429e2070de41239f7d59eaaf4aa95254d89b337fdb7c4b50` | PASS | Teardown: development-client launcher after settings restore (font 1.0). |
| g-settings1b/G1b-teardown-launcher | `8da700282a2cb214027bf8697a474fc50499d0fb6c467af85c453376302603f4` | PASS | Teardown launcher at default font. |
| g-settings1b/G1b-teardown-connect | `78ffd845db4c24d9bb8270a62da408b0498f7bf46d0ef75234e0df45912b9372` | LIMITED | Transient development-client loading surface. |
| g-settings2a/G01-launcher-retry | `93003f7441e836871f342cac154ecbc24b1ceb533b0c481eb904fbee1f21c405` | PASS | Candidate 2 baseline: development-client launcher. |
| g-settings2a/G01-connect | `fa744ea1c80e4e7d3accb7acbce9bbd992319f8d0788363d9420459e1d7d5966` | LIMITED | Transient development-client loading surface. |
| g-settings2a/G01-ready | `188517b0dd043a669956625b6f5427acaa83bad786e9c892525fb7a1a8e6989a` | PASS | Candidate 2 baseline schedule: empty search, All sessions, Breakfast/University/Getting Started. |
| g-settings2a/G01-empty-favorites | `63615fb5d5b4ce8d54a95bc6ca3e537877533fe93e2217072bec994e2b1cbd7f` | PASS | Baseline: Favorites empty. |
| g-settings2a/G01-all | `9d4179be941cd1f34410629457017b9eaff79dfe6d1cbb13c4f4a24230cd9b26` | PASS | Baseline: All sessions restored. |
| g-settings2a/G01-filter | `611651c252e98e66e626170046af808e6e68400b51ea0fca9b9392ba6bc35ad2` | PASS | Baseline: filter modal with all ten tracks checked. |
| g-settings2a/G01-filter-close | `0e7d498a6a23d98c8dba4d3e6677dbb9071c968187a9ff1f5b519955f0c0886c` | PASS | Baseline: filter closed, schedule unchanged. |
| g-settings2a/G05-empty-candidate-proof | `26568f91e14061d96dda7ed9107bf1bd63b634cd18e9e86b433ff9934a732071` | PASS | F-3 at font 2.0: search placeholder fully visible in a taller field (no clipping). Dev LogBox toast "multiple navigation contain..." (D9). |
| g-settings2a/G05-focus | `b2a047cd59865ec3015b0160bc6262c1f910936e870bb802f5af94b869b43db9` | PASS | Font 2.0: search focused, placeholder fully visible (F-3); IME toolbar on left; LogBox toast (D9). |
| g-settings2a/G05-full-keyboard | `1be2c042f994cb099a8ef069211c3a2e7fd4ac95d237590cf0f236f9b812de17` | PASS | Font 2.0: search unclipped; LogBox toast (D9). |
| g-settings2a/G05-restored | `4e20f6f94e473eab45023717fd247b2b830688f11db391258b548c9417c5b61e` | PASS | Font 1.0 restored: normal layout; LogBox toast "configured linking in multiple places" (D9). |
| g-settings2a/G01-focus-default | `3c0c59af98122cf41e316588fbd70a684c31e6b10d4af8b4597f90b8198fc321` | PASS | Search focused at default font; Gboard stylus toolbar only before D6 change; LogBox toast (D9). |
| g-settings2a/G01-toolbar-windows | `3b5f0982b28b5688a97cf4af500ae0e280bf0e0362d7061eb54f55da6b2a781b` | PASS | Same state as focus-default (toolbar window inspection step). |
| g-settings2a/G01-stylus-options | `2dbffb7f6e46a350048841d60784a6346de9bcc9b36274aef669d98a820c2d30` | PASS | Gboard toolbar menu with "Show on-screen keyboard" (D6 path). |
| g-settings2a/G01-show-onscreen | `e0cf520da7856b8b95efe1bdc5f595153c8662c42f343f5e66ca6cc14a8e0bed` | PASS | Full floating Gboard QWERTY shown over the list; search focused. |
| g-settings2a/G01-full-keyboard | `3f3167a65243c845f5d7a8d74107b99813955eb6e599e4938a886e4d985cdd13` | PASS | Full keyboard confirmed visible; search and modes not covered. |
| g-settings2a/G01-full-keyboard-confirmed | `8aaeb2eef1f32971cea00123256ec74471dacc3b367d5796f425721da3a0de7e` | PASS | Full floating keyboard confirmed; search focused, controls visible. |
| g-settings2a/G01-Ionic | `2c9b19e4ceeee4b173a3e45a86a5bb8cb1644080d9b14c5ec464e4df81e135f4` | PASS | "Ionic" typed with full keyboard; suggestions bar; rows match. |
| g-settings2a/G01-edit | `f087d0cd565e9ce77adfc15049a78d8a8b9d6b287292ebf882f1df6f176b7e09` | PASS | Edited to "Ioni" with keyevent 67; full keyboard still up (pre-Back state). |
| g-settings2a/G02-launcher | `6b3e0c8fe5e12b0465dc66ee25061f4b0b205705e3866b8927dccc422d38824b` | PASS | Development-client launcher; baseline connect step. |
| g-settings2a/G02-connect | `fefd4717c2e3da1e40c4ccae55484740d186b43e37a81cbb9cff164eb3bd64a0` | LIMITED | Transient development-client loading surface. |
| g-settings2a/G02-ready | `95511401eca7162e40bd1c82e17b26c502ccf448376eb7862877d76be4d824b1` | PASS | Baseline schedule: empty search, All sessions. |
| g-settings2a/G02-empty-favorites | `82f341daa935c6037aeea05def131ba5a82e5935f8fc5e832e07aa78d2118e44` | PASS | Baseline: no favorites. |
| g-settings2a/G02-all | `a30ba3beb495ef94476f00a2ed9b98575b7f414352aeb932ea71b1884b74da38` | PASS | Baseline: All sessions restored. Byte-identical: g-settings2a/G02-close. |
| g-settings2a/G02-tracks | `e2ab6e8c37468cd2bc13df0d7b6699aabc56021df0f90e34e049f5633b34fe84` | PASS | Baseline: filter modal with all tracks checked. |
| g-settings2a/G02-row-focus-state | `e481b507744fcbe9442efd5ed949d7ff49297b0e9d0d3ae21473a74a74e58e9b` | PASS | G02 row attempt setup: search focused, stylus toolbar only. Byte-identical: g-settings2a/G02-row-focus. |
| g-settings2a/G02-row-options | `d4891ce2abe386c7c95cc8936411ed9e30772256db78c6224c8e70fb732afde7` | PASS | Gboard toolbar menu (Show on-screen keyboard) before the row attempt. |
| g-settings2a/G02-row-show | `27622ed8d43989e5b56d1474cba3fbfac9ed6cfca32454aee1ab63c35f1ea22b` | PASS | Full keyboard shown before the row attempt. |
| g-settings2a/G02-row-full | `c7a96e3fc8990438c119898f4ed8ec3ad617beaa496145cdc5c2db4cc0b22507` | PASS | Full keyboard up before the row tap. |
| g-settings2a/G02-row-first | `05f220fb5110eb22534f43d846b0a10bcc7f9f7f745b50ad40738a7a23b45aac` | PASS | F-1: first row tap with keyboard up opened University of Ionic detail directly. |
| g-settings2a/G02-row-header-return | `a3a821e407578899fe2adc57a5753a563175a87bc244155e018dd84ee71b2872` | PASS | Header back: schedule with keyboard dismissed. |
| g-settings2a/G02-mode-focus-state | `f3cb7a02fcbc9c206d3215a793d29c6b7a56f48f9e72687d3e3cde1a12f9ec46` | PASS | Search focused, toolbar only, before the mode attempt. Byte-identical: g-settings2a/G02-mode-focus. |
| g-settings2a/G02-mode-options | `5c03c3329269efa43ac44ce265d7e6153ad27c617c13b95e7f43f2de28afe8c8` | PASS | Gboard toolbar menu (Show on-screen keyboard) before the mode attempt. |
| g-settings2a/G02-mode-show | `378456403c6e3a9b654c8d11a52ad251416d05d692fcab1cd2accb4abff5abb3` | PASS | Full keyboard shown before the mode attempt. |
| g-settings2a/G02-mode-full | `df043c75a9878d4d8749eed24a338580c0f32cb1e93008302ef13c4815798e1b` | PASS | Full keyboard confirmed before the mode tap. |
| g-settings2a/G02-mode-first | `394d6d5d2390ff4171df92ed78100317dfaeb33ec0e237835aee532ca4cf434c` | PASS | F-1: first tap on Favorite sessions with keyboard up switched mode (Favorites selected); keyboard stays up over the empty list. |
| g-settings2a/G02-filter-focus-state | `fbf2ff8f1217de72bd03b59fa7d5747fd422a55e90930f882b0c17f70d400d55` | PASS | Full keyboard up before the Filter attempt. Byte-identical: g-settings2a/G02-filter-focus. |
| g-settings2a/G02-filter-full | `86e671278cbb8f20324cd82e3185f9d9c447927b969ad592044f92775aa5cbaa` | PASS | Full keyboard up before the Filter tap. Byte-identical: g-settings2a/G02-mode-all. |
| g-settings2a/G02-filter-first | `3e67f66605e72e63dac50ad7aa51800f6c3909f0e550e32b1f7a953be79ccdc8` | PASS | F-1: first tap on Filter with keyboard up opened the filter modal (all tracks checked). |
| g-settings2a/G02-filter-close | `c686618351ad3353be1bb16b23a4d9d39ff904ee1c982595b60c6c06d39ad6d6` | PASS | Filter closed; schedule unchanged, keyboard dismissed. |
| g-settings2a/G02-favorite-focus-state | `975c92c5cc039dbc5c9904ac71d92b96441ff4a730ed58ade65af7d603c3a95f` | PASS | Search focused, toolbar only, before the favorite attempt. Byte-identical: g-settings2a/G02-favorite-focus. |
| g-settings2a/G02-favorite-options | `74dc92d5445e0aa7cb9e7f87bcd9bfb73b9034baf59b2073c9981d80ff9228f2` | PASS | Gboard toolbar menu before the favorite attempt. |
| g-settings2a/G02-favorite-show | `01ad9fd54225cb2796796db7545367257bc6ad9bf27f080c424c842655cd7190` | PASS | Full keyboard shown before the favorite attempt. |
| g-settings2a/G02-favorite-full | `21d06071273c4d73eb30e88f50ef8f93137a3a4e8eb94022e490e3b08699e606` | PASS | Full keyboard up before the Favorite tap. |
| g-settings2a/G02-favorite-first | `d8e46a173ddbc4bc848c28f8ffe8c8aa1d5ae3966a224992dd13a31b740599c9` | PASS | F-1: first tap on a row Favorite with keyboard up produced the Favorite Added alert. |
| g-settings2a/G08-launcher | `4826a921a0574adcf7bd515527d761dce484121fe99f5e5a80683e7dff32462a` | PASS | Development-client launcher; baseline connect step. |
| g-settings2a/G08-connect | `40d29f617c8a9799f3ff891f1a6aedc088dfb2ff350bf241909536175b7126df` | LIMITED | Transient development-client loading surface. |
| g-settings2a/G08-ready | `a1aa67964402b100a5fad870eabfd8d2bfc1d9be3acf71bb81e567d922b67313` | PASS | Baseline schedule: empty search, All sessions. |
| g-settings2a/G08-empty-favorites | `0b8964c6ffa04a9dc56ae4ab8899e865185ad8ecd51e971da09938a18016efff` | PASS | Baseline: no favorites. |
| g-settings2a/G08-all | `944b34babf545e884c3bb4c6415d67d27156d2bc01e3e6b0b97968b776959ef6` | PASS | Baseline: All sessions restored. Byte-identical: g-settings2a/G08-close. |
| g-settings2a/G08-tracks | `0725d4472ea8d236161e7c878278d2314a58e02459301f3ae1fe72ff55b5134f` | PASS | Baseline: all ten tracks checked. |
| g-settings2a/G08-keyboard-focus-state | `e22b223718639d12516accefb12988a1bbb4799578f7bfb2ddbd57d1a4a99f8e` | PASS | Search focused, toolbar only, before showing the keyboard. Byte-identical: g-settings2a/G08-keyboard-focus. |
| g-settings2a/G08-keyboard-options | `9f905a86429b8f0fdd3b3c67fd89f73f2d6761ae1b3e2366298f01f05d8c43da` | PASS | Gboard toolbar menu (Show on-screen keyboard). |
| g-settings2a/G08-keyboard-show | `be24bc995c405f7ce837291e65d3dbc9dc9e043b8f96de08948465f940430b12` | PASS | Full floating keyboard shown; search, modes and Filter visible above it. |
| g-settings2a/G08-keyboard-full | `cd4956ebbb7b9bbdd7fc8c6f0e67a1df8eb11ac2250b5c4fbff67be67d7fc412` | PASS | Full floating keyboard up: search and mode buttons and Filter fully visible above it. |
| g-settings2a/G08-list-scroll | `a27b399f5a26ab6a5b8e7bb5706b3292cad31996385531573b8433089afc250f` | BLOCKED | List scrolled under the floating keyboard (10:00 am Migrating to Ionic visible below it); floating IME is not inset by Android (environment, D12). |
| g-settings2a/E06-bottom-launcher | `b4bfca85ec04c2dd1524efe1312813894ef99cbd318bfa4ccb1edd785933af73` | PASS | Development-client launcher; baseline connect step. |
| g-settings2a/E06-bottom-connect | `caf3a3d0bb406d919db9f06f102d59611bd06dd4a4765b309e54f460fa56ad22` | LIMITED | Transient development-client loading surface. |
| g-settings2a/E06-bottom-ready | `8fd112ab5e5548f70032f5937849f3b962f43c0943318d6a423677d4600ebc01` | PASS | Baseline schedule: empty search, All sessions. |
| g-settings2a/E06-bottom-empty-favorites | `f2c16ce248bb084796ec0cd5463473d292eabd92c49546e791f6306fde0b1cfd` | PASS | Baseline: no favorites. |
| g-settings2a/E06-bottom-all | `1b1fe0791228c75c26b8300d5de7731579df54127805b6a8910a8d13e77a0ada` | PASS | Baseline: All sessions restored. Byte-identical: g-settings2a/E06-bottom-close. |
| g-settings2a/E06-bottom-tracks | `ef651a18e4fec86630bf01d92e159aa0589205e68fce6dfabb2a7278e1643227` | PASS | Baseline: all ten tracks checked. |
| g-settings2a/E06-bottom-scroll1 | `e417fdb3f87823519491972f2f231c362d2aca630926e075fd4a2fb64680cc6b` | PASS | Scroll: Ionic Tooling, 10:00 am Migrating to Ionic, What's New in Vue; ordered. |
| g-settings2a/E06-bottom-scroll2 | `04b457ed69a1156fa3195e93409521242530c55ede3762a87504f51ecdff76f5` | PASS | Scroll: Evolution of Ionicons, Ionic Pro, 11:00 am Ionic Workshop; ordered. |
| g-settings2a/E06-bottom-scroll3 | `1491da41a94e0547adb52138b2778ae12494f0ebcd042f5ff53031c2089a9c8c` | PASS | Scroll: Community Interaction, Navigation in Ionic, 12:00 pm Lunch; ordered. |
| g-settings2a/E06-bottom-scroll4 | `a3958e50cdab08b982d13b5589c84dec49a586b63f70055490ca7cbbc9f58cec` | PASS | Scroll: 1:00 pm Ionic in the Enterprise, Ionic Worldwide, The Ionic Package; ordered. |
| g-settings2a/E06-bottom-scroll5 | `d71a7d81ce48128252d048ae2b0b81af33784205fb68dd2f20dbd5571032f95e` | PASS | Scroll: 2:00 pm Push Notifications, Ionic Documentation, UX in Ionic; ordered. |
| g-settings2a/E06-bottom-scroll6 | `cace320b36cf63a90cc64b558899e44184587c5475fefb8e2002d534cb2d6ac1` | PASS | Full list scrolled to the bottom (UX in Ionic, 3:00 pm Building with Ionic and Vue, Mobile States) before applying the filter. Byte-identical: g-settings2a/E06-bottom-scroll7. |
| g-settings2a/E06-bottom-filter | `b8449c569bcea019a3f95f5103baae18ac5f5a04d24f717a26eea80d04a49b62` | PASS | Filter opened from the bottom of the list: all tracks checked. |
| g-settings2a/E06-bottom-none | `af88d4b9515419f4cd15d4576ae20a9872dc4f96baee705c41e12e6ae977ebdc` | PASS | Deselect All: all tracks unchecked (draft). |
| g-settings2a/E06-bottom-ionic | `296454f619286220d5f274a7bc301ce4a8ae75787b32812227126719a089950b` | PASS | Filter draft: only Ionic checked. |
| g-settings2a/E06-mid-launcher | `258fd93c055ccf29fa4a1c69d7e44d949e9b0f11fb5e0957d6b95454bde8995c` | PASS | Development-client launcher; baseline connect step. |
| g-settings2a/E06-mid-connect | `136b203f7f03f1cabfb3fc086f04a6e8351d80e23f3780860816580e532f23d9` | LIMITED | Transient development-client loading surface. |
| g-settings2a/E06-mid-ready | `e0750cb2a3d134e928f4607a249a1da64b01b1a09dd1263bdba328acdc7418e1` | PASS | Baseline schedule: empty search, All sessions. |
| g-settings2a/E06-mid-empty-favorites | `8b0397490cf6874048f3b2d97d196c08518d9fa0136daa42f566c9c5aa7a4223` | PASS | Baseline: no favorites. |
| g-settings2a/E06-mid-all | `1eee98526e2c8b31096637357f4338d89047b96295005f2eafb7b2cbb1b82b75` | PASS | Baseline: All sessions restored. |
| g-settings2a/E06-mid-tracks | `bd1191d1be6a77e3638336c90455d8fb0028c480437e0d23133f1a23d2693bc4` | PASS | Baseline: all ten tracks checked. |
| g-settings2a/E06-mid-close | `51cfec9976a555f7db67eb75125cae5a678caffc05deabb2dabf130a8bc9ad56` | PASS | Filter closed; schedule unchanged at top. |
| g-settings2a/E06-mid-scroll1 | `c301709de8268512c5be81c6685aea9875e8ae723fed5e6b43d775148d4d831a` | PASS | Scroll: Ionic Tooling, 10:00 am Migrating to Ionic, What's New in Vue. |
| g-settings2a/E06-mid-scroll2 | `190b97a0bb479711e2076280875a12f9f5cd7f5e8283a9b548006aee98d7788a` | PASS | Mid-list (Evolution of Ionicons, Ionic Pro, 11:00 am Ionic Workshop) before the mid-scroll apply. |
| g-settings2a/E06-mid-before-favorite | `7f3032bad891ad077a3e5365be55ab5fc92ce7825f7f588d4b7004786704ad71` | PASS | Mid-list before the favorite add (Community Interaction, Navigation in Ionic, 12:00 pm Lunch). Byte-identical: g-settings2a/E06-mid-scroll3. |
| g-settings2a/E06-mid-favorite-add | `7abe1f3a51fc046e649a45822232dfe9aa2b6dc7403d01d88d2f96953c34f423` | PASS | Favorite Added alert while scrolled mid-list. |
| g-settings2a/E06-mid-after-favorite | `16f40c6b70dea84eee66a8f3f581100b5911666ccb2c47d3028628d3ee855b5f` | PASS | After OK the list stays mid-list (Community Interaction, Navigation in Ionic, 12:00 pm Lunch); no jump to top. Byte-identical: g-settings2a/E06-mid-favorite-ok. |
| g-settings2a/E06-mid-filter | `a0f443697f938de37644d8b63fe12880c41cd65336e21c39b6cdad589f955b94` | PASS | Filter opened from mid-list: all tracks checked. |
| g-settings2a/E06-mid-none | `f0fea6dbabc41129ff8ce710d572dcf0bd6c8e5d9b01d34965e0ade5ac0166a5` | PASS | Deselect All: all tracks unchecked (draft). |
| g-settings2a/E06-mid-ionic | `338df06f2d266eabbd88eb64449be71316b764c90be965443972388dc58aa52c` | PASS | Draft: only Ionic checked. |
| g-settings2a/E06-mid-done | `9128959516f08ee9301a0f61dfb0979da1a69082e81e769b185ca0ea30bb2c07` | PASS | F-2: after Ionic-only applied from mid-list, list at top: 9:15 am heading, University of Ionic, Getting Started, 10:00 am Migrating to Ionic. |
| g-settings2a/G07-launcher | `8e7d6472f5008c57bbc1bc5f279a58e87202bd36be9656d8b3e3decbe87cd88f` | PASS | Development-client launcher; baseline connect step. |
| g-settings2a/G07-connect | `0a464da46763e92a25e6158ad3a48b337835f35fc915aaf30cf6a6a6273db913` | LIMITED | Transient development-client loading surface. |
| g-settings2a/G07-ready | `e8a05845c09bf9c6a8c2029c22cd1ebfa64f42955bac567e2816ce3f64156af6` | PASS | Baseline schedule (light): empty search, All sessions. |
| g-settings2a/G07-empty-favorites | `bb55ab62e3eff088d413a485a959735a8224e88fab0ffb731ff5940d6a6d6bf1` | PASS | Baseline: no favorites. |
| g-settings2a/G07-all | `1a518c423b98b4e627f04f28bb76e75ed21791e2e1b06530b9bf33dcb3c60198` | PASS | Baseline: All sessions restored. |
| g-settings2a/G07-tracks | `1607b5a0acbf9ce1afd116c067dac9c306a03e9945611a71c1955f42c77479df` | PASS | Baseline: all ten tracks checked. |
| g-settings2a/G07-close | `3a0812d2463057a157db8713f01442b438adbd48c26e95918a45abd835966096` | PASS | Filter closed; schedule unchanged. |
| g-settings2a/G07-dark-alert-ok | `3ba42f1a0d1e3b2b70e52f3a49379a6e9b87505d0a56dfb00a970afc8d473ae4` | PASS | F-4 dark: header and status bar dark with light title; content dark and readable after alert OK. Byte-identical: g-settings2a/G07-dark-detail-back, g-settings2a/G07-dark-filter-close. |
| g-settings2a/F01-launcher | `eefb2f827ab44c422246e033df2cd3b89c4f709eb95536a5a0b426947f2336b6` | PASS | Development-client launcher; baseline connect step. |
| g-settings2a/F01-connect | `13d2fb833ef8e921b2a6df303a8715bfd50d573731c31836eddadf453305f026` | LIMITED | Transient development-client loading surface. |
| g-settings2a/F01-ready | `a5087ed5b240a8e8a15dddd521be5263a3a67cd2aaad0b96e9d8245907d47055` | PASS | Baseline schedule: empty search, All sessions. |
| g-settings2a/F01-empty-favorites | `a841e352a1986d9ec4e8c8c4e0567aea384c6901b582719b31074fd69d2cae6b` | PASS | Baseline: no favorites. |
| g-settings2a/F01-all | `c6131f91a1dd4ce87958cb6e923b9b31ea5db7005c1f63236b473bb6ef32b3cb` | PASS | Baseline: All sessions restored. |
| g-settings2a/F01-tracks | `ac1d1b00e4cac1030f4f88b2fa5ff259c4e5aabc7d099dfde325c482d4e9c061` | PASS | Baseline: all ten tracks checked. |
| g-settings2a/F01-close | `749ab86fe4121c6ef417b4525ede95516b1c458cd63f18bf91477cf45eb3f593` | PASS | Filter closed; schedule unchanged. |
| g-settings2a/F01-add-reveal | `b94dba98658094e7e0372648b0b31c41791c8786b3c9125016383b43a9eea5d1` | PASS | Candidate 2: Breakfast row swiped left, Favorite action revealed; other rows closed. |
| g-settings2a/F01-add-action | `a57a9c5aa0ee19eb888773d5650dfdede1245894d7e88185c6e9993ea42f04c2` | PASS | Candidate 2: Favorite Added alert from the Breakfast swipe action; no navigation. |
| g-settings2a/F01-add-ok | `a4b25618ccc489b12b127efee6549e54b3055323a93428894e5d4937ba127bb0` | PASS | After OK: schedule closed rows, Breakfast added (button stays Favorite in All mode by RN04 design). |
| g-settings2a/F01-duplicate-reveal | `0bce4dba1fe0912dfe0b381b48804936462a1e4f41eec90cb9403464982e2782` | PASS | Breakfast revealed again for the duplicate attempt. |
| g-settings2a/F01-duplicate-action | `86c815aad31e684fcc3fd0e0af3736998d1cd168476106366d0445c9007e61f1` | PASS | "Favorite already added" alert with Cancel/Remove from the swipe action. |
| g-settings2a/F01-single-favorite | `dbf5ab862d6b7f4d994d6f21463764269b93fd5693991f4baa7d1366474c43bf` | PASS | Favorites: only Breakfast with Remove (Cancel kept it). |
| g-settings2a/F01-all-again | `857489b4d507aa92d88ae9b3d2cdcd52653214b13f1ec67ec01ca819b863e482` | PASS | All sessions restored; rows closed. Byte-identical: g-settings2a/F01-duplicate-cancel. |
| g-settings2a/F01-duplicate-remove-reveal | `fb193d23e41fbf26cc774c9fa32cc48cf580913df683cb9dff2afab3c132bc57` | PASS | Breakfast revealed for the duplicate-remove attempt. |
| g-settings2a/F01-duplicate-remove-action | `3bbf99a647f5822f4351eb396314971a6a7642811ae7cbbd3bf0e1bd47767c88` | PASS | "Favorite already added" alert before choosing Remove. |
| g-settings2a/F01-duplicate-remove-confirm | `91351f6ea5a06adb2366d5671f213a13f9e6a52d092a054f27f813984431212d` | PASS | After Remove: schedule with rows closed. |
| g-settings2a/F01-removed-empty | `15822a6d706aba19fc72511049e2a4d55833c4e3cf5a919e99bec54006d61c31` | PASS | Favorites empty after duplicate-remove. |
| g-settings2a/F01-readd-all | `6bd1b13fbde68413eb8cd17a583b641d4772b34b5f6bf9f8343ac9e5c9dac207` | PASS | All sessions restored before re-add. |
| g-settings2a/F01-readd-reveal | `0957b8a56497027245983ecc83296b2490229f876e0af2eadfcaf23fa38ce14e` | PASS | Breakfast revealed with Favorite action. |
| g-settings2a/F01-readd-action | `501293ca0319b5f35006a1c20271875c05a771fc7170b6bc0d6ec01f5692b39e` | PASS | Favorite Added alert from swipe action. |
| g-settings2a/F01-readd-ok | `1f715efdc4a8e3f79fbfe215f4669247283d5c5052b476aea18940fd876e6f1a` | PASS | After OK: rows closed, no navigation. |
| g-settings2a/F01-removal-favorites | `4611e6758f9de0c8e3856447060693b8b00b3028b7492ae3eab4b01a2bcb7fb4` | PASS | Favorites: only Breakfast with Remove. |
| g-settings2a/F01-removal-reveal | `0604a3b5933ff45c18bcf061e19951379cc9cc192d3d7fd8967f4c582e6d94d7` | PASS | Favorites mode: Breakfast revealed with Remove action. |
| g-settings2a/F01-removal-action | `1b4ef56d2ae49e5febeefee47c106c33c46af05536526208b9e657829fb149ae` | PASS | "Remove Favorite" alert with Cancel/Remove from the swipe action. |
| g-settings2a/F01-removal-cancel | `422a2b26282e67537f304b7a04bfbaa7e7e78b13a8e827e4e3794e60c6a87076` | PASS | Cancel kept Breakfast in Favorites (Remove button). |
| g-settings2a/F01-removal-again-reveal | `5b246d367a8cf1fc64380919dffa061bc04788a671963a395e51203d6a454aa2` | PASS | Breakfast revealed with Remove action again. |
| g-settings2a/F01-removal-again-action | `3ccea43b11ffbad9771a7307750790aacc935f6d2db766023ea984c512a0e463` | PASS | "Remove Favorite" alert before confirming. |
| g-settings2a/F01-final-empty | `6b7addef3387d3f0161e0f294c7c447402454f17b1ad7254e9508516b70b5a62` | PASS | After confirm: "No favorite sessions." Byte-identical: g-settings2a/F01-removal-confirm. |
| g-settings2a/F03-launcher | `b243317ea13341468d952c5545606018f74456e1794280fae1736d85c6be2ee0` | PASS | Development-client launcher; baseline connect step. |
| g-settings2a/F03-connect | `64e6830acc186ce8726857ef4d005ad8ecb53ce8bc67114efa0a93d8cb74dd7e` | LIMITED | Transient development-client loading surface. |
| g-settings2a/F03-ready | `3e4ee3430f39c52cf828acca1080f4e400df0e93c623b58a8e421d3d27ca7c6e` | PASS | Baseline schedule: empty search, All sessions. |
| g-settings2a/F03-empty-favorites | `fbe5cc782b8618fdf74952996a0e41eee85a0c0949ffe81b469bf48500f1e626` | PASS | Baseline: no favorites. |
| g-settings2a/F03-all | `1def0da85ccddc3ddd496bd33292e0dccf442037af4193dddc7118637ead674a` | PASS | Baseline: All sessions restored. Byte-identical: g-settings2a/F03-close. |
| g-settings2a/F03-tracks | `947c02526c26e7ad70d959f699d4bf83a40ac7d0a747b909ba72cfc2577aacb9` | PASS | Baseline: all ten tracks checked. |
| g-settings2a/F03-reveal | `36eb33edd6ae7824d2ff301d67f3a96ac1ab7c5506018ea243225d5f9af7dafc` | PASS | University of Ionic (4) revealed with Favorite action; Breakfast closed. |
| g-settings2a/F03-action | `6bb5f840d725801c8fd8b3a89d38e0a57218363507116fc07942ab973dc17ad5` | BLOCKED | Executor targeting error (recorded by executor): tap aimed at the hidden Breakfast panel bounds from the plain dump, landed on the Breakfast row link and opened Breakfast detail. Not an app defect; superseded by F03b. |
| g-settings2a/F03b-launcher | `3d62e0e0124b23ccec07a4d87b4b9ef18c259b3de103863aaea57271646d6c78` | PASS | Development-client launcher; F03b baseline. |
| g-settings2a/F03b-connect | `57ec74c1f5a8529885e947b4f34033d45c609c6eb5cdecd5fd2bbc6dadf6d9bc` | LIMITED | Transient development-client loading surface. |
| g-settings2a/F03b-ready | `278275500d75ea520ec4fd49a1a880cdf7e14e1156de47548a6b29bc3749e38f` | PASS | Baseline schedule: empty search, All sessions. |
| g-settings2a/F03b-empty-favorites | `1ece869b91e217ec13bb95d96476e8f6925d20c184fce7078b9681949c55552c` | PASS | Baseline: no favorites. |
| g-settings2a/F03b-all | `5587892355ab4639b6d9cd7d12504e662af7a4ae8f614fbfd92610f0c2d953b6` | PASS | Baseline: All sessions restored. |
| g-settings2a/F03b-tracks | `6539c10f34390a81cd3aae879852a22d445a2fda7e1d228f909de7143b57ec37` | PASS | Baseline: all ten tracks checked. |
| g-settings2a/F03b-close | `ead4319dbcd408a287c0e9497c3b449dfb0c39ad891f3ee4ab87c61b5b2f367e` | PASS | Filter closed; schedule unchanged. |
| g-settings2a/F03b-reveal | `74188715980ff9e2a462882fdaf4e69ae2e4e72da57c567a57566a5ea37ee031` | PASS | University of Ionic (4) revealed with Favorite action. |
| g-settings2a/F03b-action | `2c0c6f21b149d5790b32dd38c31d3444a2961825533fce588d1dca84573a0153` | PASS | F03: tapping the revealed action shows Favorite Added; still on schedule (no navigation). |
| g-settings2a/F03b-action-ok | `4bb218aafa57b60b0c412342353307376354871ca98af2723fdee2bd7fc71fc2` | PASS | After OK: rows closed, still on schedule. |
| g-settings2a/F03b-closed-row | `cde4d0d95fc495d964ff7fcfab044774f0dc4682b082a898d89f7e300649cd17` | PASS | F03: tapping the closed row opened University of Ionic (4) detail ("Remove from favorites", correct session). Byte-identical: g-settings2a/F03b-correct-detail. |
| g-settings2a/F03b-detail-back | `0ae3b38ef3c7ec5c9871da6f81f34f5da7917565638d11a581c1ac90c8f57893` | PASS | Header back to schedule; rows closed. |
| g-settings2a/F04-launcher | `18b7d753ae13df249711df8495760cf7f5ce84b9eedc7f1b2e5e4c443d90ac4b` | PASS | Development-client launcher; baseline connect step. |
| g-settings2a/F04-connect | `5c4da469450d684d837a01ad73fda49f2e1ec5599ac1ff23a88290a30b90fe2a` | LIMITED | Transient development-client loading surface. |
| g-settings2a/F04-ready | `d0505893a712bd0c2be3053e320a361cbff7b166b010d641c28c069b52d49ed8` | PASS | Baseline schedule: empty search, All sessions. |
| g-settings2a/F04-empty-favorites | `e3373730da41d2bc04d3dcf82450def311741b44bfe8d96999293b7fb97f58f7` | PASS | Baseline: no favorites. |
| g-settings2a/F04-all | `6f974470ffbdf127ce4e4353ae2c67e43e65be6f81a4930bf1e629def3a474c3` | PASS | Baseline: All sessions restored. |
| g-settings2a/F04-tracks | `945988ce27a5b336fa571c3d512e2bd15de1379d6718e28e1deee80098bb71d1` | PASS | Baseline: all ten tracks checked. |
| g-settings2a/F04-close | `ec8dfad5df0bcf472492bbe83bc99ccd6a16574c817b6ed44347800ff14df7c2` | PASS | Filter closed; schedule unchanged. |
| g-settings2a/F04-open4 | `07ac56fb7d1b57070c1d6ba6acbac8bc220d8e04c7fa7fa3a1957ed2ba8c140e` | PASS | University of Ionic (4) row opened (Favorite action revealed) before scrolling away. |
| g-settings2a/F04-away1 | `c8c395a374f5e5f3b28f649c1410c02ed0ab53fc7054490ab4224575b4aad374` | PASS | Row 4 scrolled out: Getting Started, Ionic Tooling, 10:00 am Migrating to Ionic; rows closed. |
| g-settings2a/F04-away2 | `95d2ab1256ff2d1b6883810716b09881c1ec53c60d4a1b384ef165fdc656e448` | PASS | Scroll: What's New in Vue, Evolution of Ionicons, Ionic Pro, 11:00 am. |
| g-settings2a/F04-away3 | `cb19317bd69542b24ed81246c8c237be865518deab907ccba2017837ae497476` | PASS | Scroll: 11:00 am Ionic Workshop, Community Interaction, Navigation in Ionic. |
| g-settings2a/F04-away4 | `34b54b1864920433fae4189da139861594462c5fab0a1bcd94ee7244cfeaf45b` | PASS | Scroll: 12:00 pm Lunch, 1:00 pm Ionic in the Enterprise, Ionic Worldwide. Byte-identical: g-settings2a/F04-return1, g-settings2a/F04-return2, g-settings2a/F04-return3, g-settings2a/F04-return4. |
| g-settings2a/F04-back-top | `328155a664c20450ae54a62125013ade5d2a479354648505553385b02c2e5093` | LIMITED | Executor reverse swipe started above the list and was a no-op (recorded by executor); viewport unchanged (12:00 pm Lunch). Byte-identical: g-settings2a/F04-return5. |
| g-settings2a/F04-return-in-list1 | `dd71706cad6191533ccd9c41f56a4dd5cc0fa39206677670b90f96d0fc4689b2` | PASS | In-list reverse scroll: 11:00 am Ionic Workshop, Community Interaction, Navigation in Ionic. |
| g-settings2a/F04-return-in-list2 | `a671263fb0b05fd80e0e395f7ba3d982572f1fcd47f9998948b4124f9dcd5290` | PASS | Scroll back: 10:00 am Migrating to Ionic, What's New in Vue, Evolution of Ionicons. |
| g-settings2a/F04-return-in-list3 | `8d95f4c1349d10d3db84ef727e3d52d258d836d596f170b5ffcd291c4cee2c09` | PASS | Back at 9:15 am: University of Ionic (4) row returned CLOSED (action panel hidden). |
| g-settings2a/F04-other-favorite-valid | `ebf674bd850c36e45db06d2038c8cdb27e0d5f3a586e4f2ef3038d3f40d6c120` | PASS | Favorite Added alert from another row (Breakfast) after row 4 returned closed. |
| g-settings2a/F04-other-ok-valid | `33be2796d9ef03ccafe09c051c5e5f72e960bd4b41b1e0b4a2d2af5212d0c4bd` | PASS | After OK: list at top, rows closed. Byte-identical: g-settings2a/F04-return-in-list4, g-settings2a/F04-return-in-list5, g-settings2a/F04-returned-top. |
| g-settings2a/F04-favorites-valid | `81c02ab744e7eda47fac6bee91e25e022330a0c91d46b4eaebfdbd12475c2842` | PASS | Favorites exactly [1] Breakfast; row 4 was not favorited by the scroll-away/return. |
| g-settings2a/C02-launcher | `46c85878bfbd4a6d8274e4398fde21b399f863076532358b44dba65284aa2bf0` | PASS | Development-client launcher; baseline connect step. |
| g-settings2a/C02-connect | `9fb1d7461e741f61f0a64980b2683c6cdb33efeca843639e093b58de9ff876fb` | LIMITED | Transient development-client loading surface. |
| g-settings2a/C02-ready | `730a4e536c6900d5b81f39c612ef35dbfe2eb1d27952a253844939fec220631f` | PASS | Baseline schedule: empty search, All sessions. |
| g-settings2a/C02-empty-favorites | `8ef77f668984e2c32d43652b6cd2a07108ce5d13f930669e8f12560bfc6e6f0e` | PASS | Baseline: no favorites. |
| g-settings2a/C02-all | `0a3731b934e944a97bd8e4546296505970f275a1f6c6fffc2d0013a7f2455f63` | PASS | Baseline: All sessions restored. |
| g-settings2a/C02-tracks | `b1185638ce7b8dffd1600128dcfec812acf528f7354db15376179bcdc6e2017a` | PASS | Baseline: all ten tracks checked. |
| g-settings2a/C02-close | `8fb3387d69644ae1b6f50eff9c9cc1addf016a239f35ce3a699fd155c96b6cd1` | PASS | Filter closed; schedule unchanged. |
| g-settings2a/C02-scroll1 | `6dbee5917dccc9772f51d52ff81ede2cbd0b5b88f367d70e53b21ed08ee3866e` | PASS | Scroll: Ionic Tooling, 10:00 am Migrating to Ionic, What's New in Vue. |
| g-settings2a/C02-scroll2 | `6caf9305ff23656d6acd31ff16deadff3c7cebc7b8944a760cdac2f564ba5999` | PASS | Scroll: Evolution of Ionicons, Ionic Pro, 11:00 am Ionic Workshop. |
| g-settings2a/C02-scroll3 | `e065e4783ef14e720ce1e596ac9a674f1824b6b9c6a38163274c891b8b439cd4` | PASS | Scroll: Community Interaction, Navigation in Ionic, 12:00 pm Lunch with Favorite button. |
| g-settings2a/C02-favorite12 | `6b1441edda279d3b96aa410324f2ca2756857877d376272dee432a216197b8e5` | PASS | C02: Favorite Added alert after tapping Lunch's (12) accessible Favorite button; list position kept. |
| g-settings2a/C02-ok | `e087a6707d1faa0791c4253fcebbbf372acbec34a6cc4defad0cf77e2a9bdcb0` | PASS | After OK: list stays at the same position (no jump to top; F-2 does not fire on favorites). |
| g-settings2a/C02-favorites | `d1a8c1847958c7af14a969537ee48760a5f7368ea99fa348e8ef6c2833c34bb3` | PASS | C02: Favorites shows only 12 Lunch with Remove. |
| g-settings2a/F05-launcher | `0f58541ccbccc9d6d2ba7d01dfb7f260d75869abfce5c28a50f7aa041cecb8f2` | PASS | Development-client launcher; baseline connect step. |
| g-settings2a/F05-connect | `b333de69c011644c2d9a3b7fa2329ddf9f1eac2073e34a612b0f5ceb3064c05a` | LIMITED | Transient development-client loading surface. |
| g-settings2a/F05-ready | `b064f69a77a7a3058b1cbe359585fd8d355bc289ad3734ed1d1872707fe81cbf` | PASS | Baseline schedule: empty search, All sessions. |
| g-settings2a/F05-empty-favorites | `3e2507aa6de87636b4317ed9eeb1850dbc94efb94dc7587d03d2cd8c8ee1a1da` | PASS | Baseline: no favorites. |
| g-settings2a/F05-all | `a5f8bf46ac541d1bde4afc9d57b2bc7a73ac6c5c3e5c6885bb136c90dc1d98fe` | PASS | Baseline: All sessions restored. Byte-identical: g-settings2a/F05-close. |
| g-settings2a/F05-tracks | `000946cd29f0a133d55bb8e3e2537a08ad0d50685ec5c7714d009535a9642f7d` | PASS | Baseline: all ten tracks checked. |
| g-settings2a/F05-add | `62cff538cd4f109f078b481c50dfa91d97492958cf083e04d7999817ce565684` | PASS | F05: Favorite Added alert from Breakfast's accessible Favorite button (no swipe). |
| g-settings2a/F05-add-ok | `5fb54889ebc1eed303ad4e7fab5a5c3933a82790ada3e1fd132a0782ef91f5b9` | PASS | After OK: schedule unchanged, no navigation. |
| g-settings2a/F05-duplicate | `6cb24be7c5351792fd087a33cdf6fe9574f8c9680cdcaffef5666b0c0b357455` | PASS | "Favorite already added" alert (Cancel/Remove) from the accessible Favorite button. |
| g-settings2a/F05-duplicate-cancel | `fce8d8bb359de2653d378980e308713f551657febd44244161df362ecf4c0cd2` | PASS | After Cancel: schedule unchanged. |
| g-settings2a/F05-favorites-single | `80f3a4c95ec10e5705fb40cf2b046b8a7c0662597c16a4a8464b3f67d26771e3` | PASS | Favorites: only Breakfast with Remove (Cancel kept it). |
| g-settings2a/F05-remove | `c504ee0b6bbd5003419af8777dffe4e0bec038ca724573f30352325f470a183e` | PASS | "Remove Favorite" alert from the accessible Remove button. |
| g-settings2a/F05-remove-cancel | `0a891cbade07fd7d90737613cf1c39be38bfc84ba8c3b61e10a551b701fc46a5` | PASS | After Cancel: Breakfast still in Favorites. |
| g-settings2a/F05-remove-again | `874e2e3ead3e3af26aa144739a9d18e26265f4cf4b38c4593f6d5e8c4f72a227` | PASS | "Remove Favorite" alert again before confirming. |
| g-settings2a/F05-final-empty | `bb697d69c8db9d38de5a3836326035354a21f62adf8348bf520790b60b9ffb79` | PASS | After Remove: "No favorite sessions." Byte-identical: g-settings2a/F05-remove-confirm. |
| g-settings2a/C06-launcher | `f204d8668d537201d4e11b90cd37aca96bf8d6d9e42ef7d08b58022f8ca115c0` | PASS | Development-client launcher; baseline connect step. |
| g-settings2a/C06-connect | `bfcf5fb289ae2399d3cd357bda5ce7083bd079c13a5b904c9fdfd08c200d53f5` | LIMITED | Transient development-client loading surface. |
| g-settings2a/C06-ready | `ab08da8a3e393224a99f7c302bde346bd7988b7e92a05172ec098ba498663524` | PASS | Baseline schedule: empty search, All sessions. |
| g-settings2a/C06-empty-favorites | `530049e5be41c81ad17aabeff5a93248d89161656b0a41a7b10387e8eac46083` | PASS | Baseline: no favorites. |
| g-settings2a/C06-all | `5a4bb98089d17217b30fa938e2794d73b44ec293efed545561226ea0fd3d1703` | PASS | Baseline: All sessions restored. Byte-identical: g-settings2a/C06-close. |
| g-settings2a/C06-tracks | `3c87a633626dc10d9eb7d1e80ae12955188071b21c8ad8c66f4c7f87d976532f` | PASS | Baseline: all ten tracks checked. |
| g-settings2a/C06-breakfast-detail | `0c9e7a4319692f57cf52bd18d0cd693d31c3edf6a4745360c542e6c809a0f12a` | PASS | C06: Breakfast detail, no description and no "undefined"; star "Add to favorites". Byte-identical: g-settings2a/C06-detail-initial. |
| g-settings2a/C06-header-back-on | `177d29610d30c03714d01f4477f7a3316d2b619a01b772a87fef9ba57d4c2903` | PASS | After star on and header back: schedule (row button stays Favorite in All mode by RN04 design). |
| g-settings2a/C06-favorites-on | `ff1eb1f3e0146d83974deab91c6c5d16d4bf37179061444772649aaf5d2fad9a` | PASS | C06: Favorites shows Breakfast with Remove (star on reflected). |
| g-settings2a/C06-reopen-breakfast | `42bfe4e85a9a31155363a5bfb51a870e3f9cde8ff7446b671e18b4ff835765c0` | PASS | C06: Breakfast detail reopened shows "Remove from favorites" (filled star). Byte-identical: g-settings2a/C06-star-on. |
| g-settings2a/C06-star-off | `1fbda1dc91536b753e2f9a63f3de24b344b5db2075fb70818f42420ab63d6658` | PASS | C06: star toggled off, "Add to favorites". |
| g-settings2a/C06-favorites-empty | `a71b78a72cbafb3fad8df79760fb563968b3676a4cf3b314d4ca7031cec06a40` | PASS | C06: after header back, Favorites empty. Byte-identical: g-settings2a/C06-header-back-off. |
| g-settings2a/teardown-all | `fb8e8a37abbb0439f45205f03ff0448452555d4c89b5a01ac3c7e03f2b42c2b2` | PASS | Teardown: All sessions, empty search. Byte-identical: g-settings2a/teardown-schedule. |
| g-settings2b/baseline-launcher | `79f8dda314607c49ea98402713b31b115fd3852a7c5feb91845a60f710cb997e` | PASS | Development-client launcher; G2b baseline. |
| g-settings2b/baseline-launcher-ready | `94dac319b8189b2f568f371c9a1fcac3c69b2224ada4f63b8f0cd0c340347604` | PASS | Launcher ready. |
| g-settings2b/baseline-connect-before | `832d8dffa9070ab83e65d814ec07697c46b2fb15ef28c4adb06e1e29bcbb3a81` | PASS | Launcher before connect tap. |
| g-settings2b/baseline-connect | `f4c3bd67babea467d3d7e9b20e570fc9365f3f681a847539836e2ae6663c2501` | LIMITED | Transient development-client loading surface. |
| g-settings2b/baseline-loaded | `186bc1403b8a040bc01da4efdc106368bdf3f04ea9a04cf4ce5f917732fa6ba6` | PASS | Baseline schedule loaded: empty search, All sessions. |
| g-settings2b/baseline-empty-favorites-before | `e379a901e2395f202024e512f535adb0ad6f9de14e1d9f2962461e3e2c9a07c1` | PASS | Baseline before Favorites tap: All sessions. |
| g-settings2b/baseline-all-before | `76fb78632a08efc23201318d80a519d231e5d766d4dac0ad40940e407f9ab941` | PASS | Baseline: Favorites empty before returning to All. Byte-identical: g-settings2b/baseline-empty-favorites. |
| g-settings2b/baseline-all | `a93f24cd8e5f4d7ba6928b0dde53a33b78298131b74aeec8fb38e9ac1a486a6e` | PASS | Baseline: All sessions restored. Byte-identical: g-settings2b/baseline-close, g-settings2b/baseline-tracks-before. |
| g-settings2b/baseline-close-before | `b38cf6a01601cff19fc54c44ee40551287d05ece6028fe0ab7d7913b5214ee31` | PASS | Baseline: filter modal, all ten tracks checked, before close. Byte-identical: g-settings2b/baseline-tracks. |
| g-settings2b/talkback-entry | `65db1714b92e8ba00369f7bd95c4aecfaa1f966123e96e576ac231b53a53491c` | LIMITED | TalkBack enabled: Accessibility Suite notification prompt (Allow/Don't allow) over the schedule; no choice made (G2b BLOCKED). |
| g-settings2b/talkback-app-return | `56403c5773c8341964e71fce18109abcf9252f31f41e028a6a63a5cd95236fec` | LIMITED | Same prompt still shown after returning to the app. |
| g-settings2b/G03-search-before | `22e704ef2a6469850772def0139b755a45358f61bb0d576ff92d1b1211ad6f18` | LIMITED | TalkBack accessibility focus (green outline) sits on the prompt's "Allow" button by default; the executor did not activate it (G2b stopped). G03 not run. |
| g-settings2b/talkback-restored | `64ce1e26e122e79ec90f88ab2c2673ef5c91635cb38f8aecde970d04d25c339a` | LIMITED | After TalkBack disable: prompt still visible (system dialog), TalkBack focus gone. |
| g-settings2b/teardown-surface | `4d446cab93a1f6a18f297ab950334497554b57c48768d7d732c395de1a6766a1` | PASS | Teardown: schedule restored with no dialog. |
| g-settings2c/baseline-launcher | `848d0ad4c57e22528094276c44fa26d5f78ba90c56864efe7a9c5a0f7eed374a` | PASS | Development-client launcher; G2c baseline. |
| g-settings2c/baseline-launcher-ready | `9c90c0cc599dbf612d466c2fc89493f5f0700abc03ea978493b7e028220e64db` | PASS | Development-client launcher ready. |
| g-settings2c/baseline-connect-before | `af547a5cc5deb559b84a91b0e6200e29acb6e98c670d6c7a6da2b935f508ddb1` | PASS | Launcher before connect tap. |
| g-settings2c/baseline-connect | `bec828f5fd50b78e716a607ca1a8a7fe98255da456778dea72121052ff1d1485` | LIMITED | Transient development-client loading surface. |
| g-settings2c/baseline-empty-favorites-before | `102ba0dfba6496ec27cf62d08f11b084492092c025866884d44bc5dac2533aed` | PASS | Baseline: All sessions before Favorites tap. Byte-identical: g-settings2c/baseline-ready. |
| g-settings2c/baseline-all-before | `05849ed6c38f6daff69eb315de5331396ebe6d2ff18e738291c67b2ea819cf27` | PASS | Baseline: Favorites empty. Byte-identical: g-settings2c/baseline-empty-favorites. |
| g-settings2c/baseline-all | `de6ffe3461c63b6799d62233f84ab944ba18c94e772e3f7db0963cd5a7a7f20a` | PASS | Baseline: All sessions restored. |
| g-settings2c/baseline-close-before | `c239ac91e13443e7268be2a53a4b041cc3955aec678192134ff7af62ba2261c2` | PASS | Baseline: filter modal, all ten tracks checked. Byte-identical: g-settings2c/baseline-tracks. |
| g-settings2c/baseline-close | `b3e7e6a78505fb95f3ee14f7338105dd314b2bd3d3711d7c31e38fd421f31977` | PASS | Baseline schedule after filter close: All sessions, empty search. Byte-identical: g-settings2c/baseline-confirmed, g-settings2c/baseline-tracks-before. |
| g-settings2c/talkback-entry | `c3cd03341ab2f095860f021e5a289df9247d208d66b3bb3ba63c1f1ae54dd2b5` | LIMITED | TalkBack enabled: Accessibility Suite notification prompt shown again. |
| g-settings2c/D8-deny-notifications-focus-before | `c6641c70a6d99a7fa29462648f852acbce846fad3985ed6d8f318ee92978b7ca` | LIMITED | Prompt shown with TalkBack on, before the D8 focus tap; no focus outline yet. |
| g-settings2c/D8-deny-notifications-focus | `52ea9f2a640cb31f0888218fab05a265b550cda594d10235c3e86172b1ceacc0` | LIMITED | After the focus tap aimed at "Don't allow", the TalkBack focus outline is on "Allow" (injected input did not move focus, D10). Executor's permission dump shows denial persisted; no grant observed. |
| g-settings2c/D8-deny-notifications-activate-before | `575b23e320f18baa4ce4987b026c5a6bea2f7f225b24096f4d56e90990fb309e` | LIMITED | Prompt shown before the D8 activate double-tap; no focus outline. |
| g-settings2c/D8-current | `dcf88febb2885aa7ef2fe8e31d5cfb97e110ba9af845f691d2fc0017d568326c` | LIMITED | Prompt still shown, no focus outline (TalkBack state change); same situation as D8-activate. |
| g-settings2c/G03-search-focus-before | `228f0854b811d43c71b4a1e0af565597d68168ee04154a9a58b0b5bade4da170` | BLOCKED | TalkBack on, no accessibility-focus outline; schedule baseline before the search focus attempt (D10). Byte-identical: g-settings2c/talkback-app-return. |
| g-settings2c/G03-search-focus | `e006294880d08709520abae72aa25aaff75f2763b178c19d70fcd44476dedb27` | BLOCKED | Injected tap focused the search input and opened a DOCKED Gboard keyboard (no TalkBack focus outline, D10). Observation: with this docked keyboard the controls stay visible above it; insets not verified (D12). |
| g-settings2c/G03-next-from-search-before | `f06fcae3c2ccfd2d25516dea4fd811cd40c7177ada4613179d91a8d3280586af` | BLOCKED | Keyboard dismissed; no focus outline before the swipe-next attempt (D10). |
| g-settings2c/G03-next-from-search | `cb6c137c779466d96c2280c2f80e1ca4a30fadbf5e7dc8c4e673f5794916fee3` | BLOCKED | Swipe-next produced no accessibility focus; schedule unchanged (D10). |
| g-settings2c/G03-favorites-focus-attempt-before | `8a8a528c5d4806e2c63e6ff7ba552d2f2ac466544798d0e052aff7bbcdee1b16` | BLOCKED | Docked keyboard up, no focus outline, before the Favorites focus attempt (D10). |
| g-settings2c/G03-favorites-double-attempt | `988404f561684a98ddd0f8eeb111b81496a8593c5ccd4d5ff45d610b75414476` | BLOCKED | Favorites selected by injected input ("No favorite sessions."), keyboard up; activation instead of focus (D10). |
| g-settings2c/G03-all-focus-attempt-before | `757336211150299af00086ac90d2c355ed8f6fea5b5677b1e559add271fa07f0` | BLOCKED | Favorites mode, search focused with cursor, keyboard up; no focus outline (D10). Byte-identical: g-settings2c/G03-favorites-double-attempt-before. |
| g-settings2c/G03-all-focus-attempt | `89043a566956c9c260886c04d5fce686ae05797dea65bfbbddd4428b99b8688a` | BLOCKED | All sessions re-selected by injected tap (activation, not focus); keyboard up (D10). Byte-identical: g-settings2c/G04-filter-focus-attempt-before. |
| g-settings2c/G04-filter-focus-attempt | `25f338afabb679769a4950b5febee00f213e0d76b189a80db886d5f148e8ed27` | BLOCKED | Filter modal opened by injected tap (activation, not focus); all tracks checked; no focus outline (D10). Byte-identical: g-settings2c/G04-filter-next-attempt-before. |
| g-settings2c/G04-filter-previous-attempt-before | `3747f1ddc703e544c8df137cb33a20bb0179bdd5b4f27fb5d3958f3193b0eab5` | BLOCKED | Design unchecked by the earlier swipe-next (activation, D10); no focus outline. |
| g-settings2c/G04-filter-previous-attempt | `c7de8c4bdae40dcd9d3c4ebad47468923343cf1c3e072cc76ee256d54bf623dd` | BLOCKED | Swipe-previous re-checked Design (activation, D10); no focus outline. |
| g-settings2c/talkback-restored | `a7f4073b580c46cb209908fb8136a463ab5c9c87dda89d27f65968c22e09ef2d` | PASS | TalkBack off: filter modal still open, all tracks checked; draft unchanged. Byte-identical: g-settings2c/teardown-filter-discard-before. |
| g-settings2c/teardown-filter-discard | `24b336628499ecf86eed8ab7cd32ff93a6bffcbadca3e944d1dfa96f24656704` | PASS | Teardown: modal closed via header back, schedule baseline restored. |
| g-settings3/A06-launcher | `e89d06e94eaeac1be45511d7ba045f709c62bae60744d474a2e34d2a3db61cc4` | PASS | Development-client launcher right after the Metro restart (server list loading, connect form). |
| g-settings3/A06-launcher-ready | `c6c72acca69f1bb28ace8b682e697dab74938b774cf0ed490f3a15fee725d655` | PASS | Launcher ready with the 8082 server listed. |
| g-settings3/A06-connect-before | `7177ab885508f8e75df15e75fcc82aaf262dc90b8705662a36e5953e06b385eb` | PASS | Launcher before connect tap. |
| g-settings3/A06-connect | `8893d83d3b1f4e73a52e8682f59723043526b4ee8faedbe140169ff9d8363ce0` | LIMITED | Transient development-client loading surface (fresh bundle from restarted Metro). |
| g-settings3/A06-schedule-ready | `3cae74029b3abf56fc7c46b4c01e1390f6074131a901956d9dd0fa0c710a638f` | PASS | Fresh load: schedule renders, no red screen or LogBox. |
| g-settings3/A06-baseline-favorites-before | `0e942e413428099bd0d29fd9944b484378c84ce7ccdd389f6da154f7ee8e1b81` | PASS | Baseline: All sessions before Favorites tap. Byte-identical: g-settings3/A06-baseline-schedule. |
| g-settings3/A06-baseline-empty | `d200c3ec8ffd98215c9c832f283edf26d1304192c27dceda5251032772adb7e2` | PASS | Baseline: Favorites empty. Byte-identical: g-settings3/A06-baseline-favorites. |
| g-settings3/A06-baseline-all-before | `defdbf565cee96bc68dda64c4e133a4602008b43c11de531b491664ac95bed3e` | PASS | Baseline: Favorites empty before returning to All. Byte-identical: g-settings3/A06-baseline-empty-confirmed. |
| g-settings3/A06-baseline-all | `16fa7f730ffd5432bde0e86388e1cde11dd51978cdfc7f1009bbb6698cb5bbb9` | PASS | Baseline: All sessions restored. Byte-identical: g-settings3/A06-baseline-filter-before. |
| g-settings3/A06-baseline-close-before | `2d1d6522b2ac546d4f3ad64a4a6b5f810e141fb090e490310e321bb3313172a8` | PASS | Baseline: filter modal with all ten tracks checked. Byte-identical: g-settings3/A06-baseline-filter, g-settings3/A06-baseline-tracks. |
| g-settings3/A06-baseline-header-close-before | `781da7bd1349aca1e557cbc38c0e8a5c4af53afa000bbeeda1a6b3413c456555` | PASS | Baseline: filter modal before header close. |
| g-settings3/A06-baseline-header-close | `2fc5e9db710602e9fd1ebdc3560fc6d42ea410e38ea795e34720eba64e22ad33` | PASS | Header close returns to schedule unchanged. Byte-identical: g-settings3/A06-scroll-bottom-1-before. |
| g-settings3/A06-scroll-bottom-1 | `c64f4a492338c3cdc7e65a60463f26b33e05d6d46b844609fddbb2a2f7bd0082` | PASS | Scroll: Ionic Tooling, 10:00 am Migrating to Ionic, What's New in Vue; no errors on screen. Byte-identical: g-settings3/A06-scroll-bottom-2-before. |
| g-settings3/A06-scroll-bottom-2 | `e9020143673b5ccc5413b79a6d6bb0fbb6f938ff1563e25322adbb9092917cdf` | PASS | Scroll: Evolution of Ionicons, Ionic Pro, 11:00 am Ionic Workshop. Byte-identical: g-settings3/A06-scroll-bottom-3-before. |
| g-settings3/A06-scroll-bottom-3 | `f58aa4e56f38cec8f77f2b469251413beb749da0b6785a6a40f27192fff27490` | PASS | Scroll: Community Interaction, Navigation in Ionic, 12:00 pm Lunch. Byte-identical: g-settings3/A06-scroll-bottom-4-before. |
| g-settings3/A06-scroll-bottom-4 | `b882ca7a1dfd29984c79b52fec548b9669fc03bdc0a2b3e3f85a8b9f256dd438` | PASS | Scroll: 1:00 pm Ionic in the Enterprise, Ionic Worldwide, The Ionic Package. Byte-identical: g-settings3/A06-scroll-bottom-5-before. |
| g-settings3/A06-scroll-bottom-5 | `ea81cd3a91f922873957ad66667b8babaaa4f32ae2b6dd7d0525fc4c9aff4248` | PASS | Scroll: 2:00 pm Push Notifications, Ionic Documentation, UX in Ionic. Byte-identical: g-settings3/A06-scroll-bottom-6-before. |
| g-settings3/A06-scroll-bottom-6 | `e785c0d1686cb3da7bdcb687f20daf653868147d766745e3e257b8d907f90bb5` | PASS | List end: UX in Ionic, 3:00 pm Building with Ionic and Vue, Mobile States, above the navigation bar. Byte-identical: g-settings3/A06-scroll-bottom-7-before, g-settings3/A06-scroll-bottom-7. |
| g-settings3/A06-scroll-bottom-8-before | `ce2a009af3cdebc68cd9569df8f4dbf38d7cd79e3512773b47013cfbf486cb4c` | PASS | List end unchanged (no further scroll). Byte-identical: g-settings3/A06-scroll-bottom-8, g-settings3/A06-scroll-top-1-before. |
| g-settings3/A06-scroll-top-1 | `c2106ff138ae1d33c18a6e1472eed17f14b7116b678a2689ea4a2a75f976a001` | PASS | Scroll back: Ionic Worldwide, The Ionic Package, 2:00 pm. Byte-identical: g-settings3/A06-scroll-top-2-before. |
| g-settings3/A06-scroll-top-2 | `83fb6c5ba4ae8f5c7330446bdae7506b35305f4444442226e0de718d1d1bad77` | PASS | Scroll back: Navigation in Ionic, 12:00 pm Lunch, 1:00 pm. Byte-identical: g-settings3/A06-scroll-top-3-before. |
| g-settings3/A06-scroll-top-3 | `9be3740609c8a7156afabfaa804ae76d603b802f7107497d2e0ce77c49ea0edf` | PASS | Scroll back: Ionic Pro, 11:00 am Ionic Workshop, Community Interaction. Byte-identical: g-settings3/A06-scroll-top-4-before. |
| g-settings3/A06-scroll-top-4 | `9d19f7f4fe10f80a2b1ac092455546ba3adb2eb7835844a5c7564160709163dc` | PASS | Scroll back: Ionic Tooling, 10:00 am Migrating to Ionic, What's New in Vue. Byte-identical: g-settings3/A06-scroll-top-5-before. |
| g-settings3/A06-scroll-top-5 | `1d2306c3a857f4d6a44a57c6789a62124fc06308780d166b62d7b184d672d9e8` | PASS | Back at the top: 8:00 am Breakfast; no errors on screen. Byte-identical: g-settings3/A06-scroll-top-6-before, g-settings3/A06-scroll-top-6. |
| g-settings3/A06-scroll-top-7-before | `d9e85f3e15ddd3862ea887cbe84a73f6be96900321dfd2759873a838fc4c8b47` | PASS | At the top: 8:00 am Breakfast. Byte-identical: g-settings3/A06-scroll-top-7, g-settings3/A06-scroll-top-8-before, g-settings3/A06-scroll-top-8. |
| g-settings3/A06-search-focus-before | `b6c07fc21cc0b0e7d73bc37a0f5b834544cce460a694eaccd0460a5ea1cb89a7` | PASS | Schedule before search focus. |
| g-settings3/A06-search-focus | `501ba260c4454459aa1fc78bd19f84d2f0f27492065b83c8f15131aaae0f5317` | PASS | Search focus: Gboard floating toolbar covers the left edge (environment); placeholder visible. |
| g-settings3/A06-search-Ionic-before | `91ebc3b9901181b7c293d7b7d60dc41b5850f431e96b421c70e42f5db76b9436` | PASS | Search focused (cursor) before typing; toolbar on left. |
| g-settings3/A06-search-Ionic | `49e63db809104d7d5d3e8a82ca9cbbb3c168624e35743cedcf0ae30db3518d89` | PASS | "Ionic" typed: results University of Ionic, Getting Started, Ionic Tooling, 10:00 am Migrating to Ionic; toolbar on left. |
| g-settings3/A06-search-clear-1-before | `15a24bd7416eb0559728ddea10c733bb38e1e96c359e71a0e8a0092aad4fea6a` | PASS | "Ionic" with cursor before the first Backspace. |
| g-settings3/A06-search-clear-1 | `cf3c5b84db999d22da6cb5c625d9e8aa0cd4d71b47d2f04f4a76fa960694dd3a` | PASS | After one Backspace: "Ioni"; results unchanged. |
| g-settings3/A06-search-clear-2-before | `8b091ca8474cfbd9e269ce79badaaafb44afd4e447adfb9206a7ce380b96417b` | PASS | "Ioni" before the next Backspace. |
| g-settings3/A06-search-clear-2 | `89f9647eead8fdc477463f18eff0bdde08983e285bbe15ea717f4e274416dc84` | PASS | After Backspace: "Ion"; results unchanged; toolbar on left. |
| g-settings3/A06-search-clear-3-before | `345e99d787b8c56befce025aa7018c7f20a324a37252de6b69922f0fe74ac05e` | PASS | "Ion" with cursor before the next Backspace. |
| g-settings3/A06-search-clear-3 | `6ba58e97679b7b3faaf7f799d3adeb6c6ccc557b651a4cbe11d2675333045f2a` | PASS | After Backspace: "Io"; results unchanged. Byte-identical: g-settings3/A06-search-clear-4-before. |
| g-settings3/A06-search-clear-4 | `b9c3534c54c9bd9b97eece028342717ad5cc3e04753da842e46408caa8a33b90` | PASS | After Backspace: "I" with cursor. |
| g-settings3/A06-search-clear-5-before | `84c41cd828fcc2c5ee6eaee69f7634d4087f5adb3c1d4b765c82a34e0798a89e` | PASS | "I" before the last Backspace. |
| g-settings3/A06-search-clear-5 | `a8549c31b684f04a24b7478cff3adc17fdf91f4145d30c0eb83619d82e2f309f` | PASS | Search cleared: placeholder back, full list from Breakfast. |
| g-settings3/A06-mode-all-before | `54788e92f71891a9d97795b2859120d14a36a93f5812a8ff34af5de19f3b94f4` | PASS | All sessions with empty search before the mode switch. Byte-identical: g-settings3/A06-mode-all, g-settings3/A06-mode-favorites-before. |
| g-settings3/A06-mode-favorites | `56efb63e1a77a60a9fd0420151c8e6498f35444fe99e4c4cb9c85cc16d2da3b7` | PASS | Favorite sessions selected: "No favorite sessions." (partly under the toolbar). |
| g-settings3/A06-mode-all-return-before | `d1b2fbb05927b57c17ec1960ec522ea0c1e4000ef8189b17e7a3237c8173bc10` | PASS | Favorites mode with "No favorite sessions." before returning to All. |
| g-settings3/A06-filter-open-before | `6955d80af0eaccb04888289aa4ae825079d381a65297baca106ec273c86a9002` | PASS | All sessions, empty search, before opening Filter. Byte-identical: g-settings3/A06-mode-all-return. |
| g-settings3/A06-filter-controls | `bd95af983393237037910b6bb9fc6240e8f00705aee0aa809a24947b78cbdcfe` | PASS | Filter modal: all ten tracks checked; Reset/Deselect All/Select All/Done. Byte-identical: g-settings3/A06-filter-open. |
| g-settings3/A06-track-off-before | `5da7c23e24f8fe4a26a1f442bde1d538933b8b8fe3bcff90530a9623df10536d` | PASS | Filter modal before toggling a track. |
| g-settings3/A06-filter-done-before | `e1b0b58aa1f031bf9993493b6a7c36d60b8eff42afe159b70f0cd5637ed7fc4a` | PASS | Draft with Design unchecked before Done. Byte-identical: g-settings3/A06-track-off. |
| g-settings3/A06-detail4-before | `e9037b1d8b3d24ca529b229f6486cfcde4a5077d2e1fbe9dd94350b981161a97` | PASS | Schedule before opening University of Ionic. |
| g-settings3/A06-star-off-before | `e0b8acb2040732120cf3a56abaf4df7a8b22338af99ef621a9a16f951bf0fb7f` | PASS | University of Ionic detail with "Remove from favorites" (star on) before toggling off. Byte-identical: g-settings3/A06-star-on. |
| g-settings3/A06-detail-back-before | `cf1ec54f9ab5ea532105e17cc8d6eb9067b02f031a1ee5fa7f5056d076ca7dc6` | PASS | Detail with "Add to favorites" (star off) before header back. Byte-identical: g-settings3/A06-detail4-controls, g-settings3/A06-detail4, g-settings3/A06-star-off, g-settings3/A06-star-on-before. |
| g-settings3/A06-detail-back | `f8b6adae44034181c9ea6633661581d7c42f733c3bd0e8cf61c437a4d101e7ef` | PASS | Header back: schedule at top, rows closed. Byte-identical: g-settings3/A06-reveal-add-before. |
| g-settings3/A06-reveal-add | `803cdaf97110df7d2ee1ee07f35376980abdc79ab960e9d672b8c9e5fe0fafe1` | PASS | Breakfast row revealed with Favorite action. Byte-identical: g-settings3/A06-revealed-add. |
| g-settings3/A06-swipe-add-before | `2961bf26c36dd7680219864f627956af4b9a57167d3b01b95a11a6c5a1a7bbb2` | PASS | Revealed Favorite action before tapping it. |
| g-settings3/A06-alert-ok-before | `bac62047ad4673665d2d536c5a6bcdb06a1cf3217dfd4c3e792d1164b6b8480f` | PASS | Favorite Added alert with OK (from swipe action). Byte-identical: g-settings3/A06-swipe-add. |
| g-settings3/A06-alert-ok | `4f204b56f45a185ae69562e3493a1764deb756559ef62f7ede5596073ba4f151` | PASS | After OK: rows closed, still on schedule. Byte-identical: g-settings3/A06-favorites-one-before. |
| g-settings3/A06-favorites-one | `b17a8ddd01be5a23719974a3be6da705eae25ba882ad6fc0b873a1908aa43ec4` | PASS | Favorites: only Breakfast with Remove. Byte-identical: g-settings3/A06-reveal-remove-before. |
| g-settings3/A06-reveal-remove | `25d47e0b959e37b4ac03a44d5db6a8cf59becfc0bea3a4d78a247816dfc91d60` | PASS | Favorites mode: Breakfast revealed with Remove action. Byte-identical: g-settings3/A06-swipe-remove-before. |
| g-settings3/A06-swipe-remove | `3a5c12036d9c17673a19ca5bfc6bf939df095fa6813e5173c786a6d3302394ea` | PASS | "Remove Favorite" alert with CANCEL/REMOVE from the swipe action. |
| g-settings3/A06-remove-confirm-before | `78c3cfdde3fbe7a45ea6c00af0b5a5b6c835ff27f43aa2adf41ebb1991af296b` | PASS | "Remove Favorite" alert before confirming Remove. |
| g-settings3/A06-final-all-before | `b8880752c566f00a61edd230a09a7d910e0b802edb8f9c82350884b0a663c211` | PASS | After Remove: Favorites shows "No favorite sessions." Byte-identical: g-settings3/A06-remove-confirm. |
| g-settings3/G08-keyboard-entry | `ad62d9fb0d8d390abdde1e0d5b0e6661d097ce36db3b3d56dc96b995049a6cbd` | PASS | Search focused; only the Gboard floating toolbar (environment). Byte-identical: g-settings3/G08-search-focus, g-settings3/G08-stylus-options-before. |
| g-settings3/G08-show-keyboard-before | `048b4f723036733534d99c15e0ce2ca26cdd415ba9e588f20027361bc5523557` | PASS | Gboard toolbar menu with "Show on-screen keyboard"; no clipboard content shown. Byte-identical: g-settings3/G08-stylus-options. |
| g-settings3/G08-show-keyboard | `d07028ab3aa375ed988d7640e8ba848c0d327b1ea4311c05b26e4a057a0a3572` | BLOCKED | Floating QWERTY shown over the list; search, modes and Filter visible above it; not docked (D12). |
| g-settings3/G08-features-menu-before | `6ff688e7420a7aefb74dd50814238ec15dbd268aadb19bd6110774bdd286c139` | BLOCKED | Floating keyboard before the features menu (D12). |
| g-settings3/G08-features-menu | `f6a7775701804a6eb1380e871ccedb5166ad969e9e01e3dded9464827fb01bc7` | BLOCKED | Gboard features panel (Text editing, Share, Translate, Resize, Scan Text, Emoji, Undo); no Floating/Dock item (D12). Byte-identical: g-settings3/G08-size-position-before. |
| g-settings3/G08-position-controls | `f7250e971cd6cde8b53cb97932a57bf0a8627591fa308170a8691861cdb9de91` | BLOCKED | Floating keyboard still undocked after the menu (D12). Byte-identical: g-settings3/G08-size-position. |
| g-settings3/G08-dock-handle-drag-before | `62e6691488fbda99c71712c12fc2a110a5bafafff3a3dbe740d3b527cad3c1e3` | BLOCKED | Floating keyboard before the dock-handle drag (D12). |
| g-settings3/G08-dock-handle-drag | `ce9efe891c5abd6da7f2cd718bed2ba744a393cc6c57ee18ac4ac8865afd4aa7` | BLOCKED | After the drag the keyboard moved down but stayed floating; not docked (D12). |
| g-settings3/G08-filter-done-before | `1ca493c55cec7c54f03ec475ffc906b5fb129b11b30ab3d32f5259d5a85db03f` | LIMITED | Filter modal with all tracks unchecked: human interaction with the emulator (D12), not an app state. Byte-identical: g-settings3/G08-filter-reset-before, g-settings3/G08-filter-reset. |
| g-settings3/G08-filter-done | `639bb64d528e65b83e56667359866e9f2696d6beab2c6927d450a27d248fc841` | PASS | After Done with no tracks: Favorites mode, "No favorite sessions." (state from the human interaction, D12). Byte-identical: g-settings3/G08-restore-focus-before. |
| g-settings3/G08-restore-focus | `aac8a804d7747b76a4dc9b94224e740cc963568f3a6447a757bd16efdc3cf3aa` | PASS | Restore: search focused, floating toolbar. |
| g-settings3/G08-restore-options-before | `02211df440c4ac0b121619f36581eaea6916323a556eeb4eb978ad8a28209c04` | PASS | Restore: before opening the toolbar menu. |
| g-settings3/G08-restore-options | `55c44a162d5a9892d34037757bb466fd5e674a26a6659622eeabdd6e6dfcb1cd` | PASS | Restore: toolbar menu; no clipboard content shown. |
| g-settings3/G08-restore-show-before | `10154c7ab9a061db615bcc54d40da2361772d35bbde984accc299b2ce80492ef` | PASS | Restore: toolbar menu before showing the keyboard; no clipboard content shown. |
| g-settings3/G08-restore-show | `24221234db56df94acb768bd12eb178003798bf48525ac552a29e7baa1b581b7` | PASS | Restore: floating keyboard shown again in its original position. |
