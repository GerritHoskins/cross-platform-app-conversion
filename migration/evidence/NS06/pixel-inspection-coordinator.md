# NS06 revision 1 — coordinator pixel inspection

Inspector: Claude Code coordinator (model claude-opus-5-5), viewing each PNG directly as an image on 2026-10-27. Supporting device evidence only: separate from automated checks and from formal review, not approval, not routed through Hermes or `openai-codex`. Frames were captured by the Hermes executor (GPT-6.1 Sol high) on emulator-5554 (RN01_API36, 1080x2400, default light theme) in four phase B runs: run 1 (`b-device/`, phase A run 1 APK `5bb29364…`), and runs 2–4 (`b-device2/`–`b-device4/`, phase A run 2 APK `e58c4397…` with Amendment A1).

Coverage: every PNG under `migration/evidence/NS06/` (95 files, 82 distinct; byte-identical duplicates are listed with their first file). Privacy check: no keyboard, clipboard suggestion, notification text or other personal content is visible in any frame. Launcher frames show only the stock emulator home screen (date, default app icons, an empty Google search bar).

Key findings:

- Run 1 pixels show the defect that the UI XML could not: the `accessibilityHidden` swipe-action `Button` is drawn above the row content on every row, so every row has a second elevated "Favorite" button that intercepted the reveal gestures. This is the basis of Amendment A1.
- From run 2 on (A1 build) each row shows one column-1 button when closed; an open row's content slides left about 96 dp and the revealed "Favorite" (all mode) or "Remove" (favorites mode) action fills the strip.
- Run 3 shows all three swipe-path dialogs with dialog-answer close, vertical scrolling without opening rows, the open-row tap guard, detail and back, and single-open. Its B7 close frame shows the launcher: the coordinator's close gesture started at x = 40 px inside the system back-gesture edge zone (correction C2), not an app response.
- Run 4 shows the corrected close, the mode-switch and filter-change closes, the Food filter and restore, and the final labelled buttons.

| Frame | SHA-256 | Result | Observed |
|---|---|---|---|
| b-device/B11-final.png | `79723b1f06efc1443d0c0eeaa84cf8f372408e17e0542584cb0cc75c010fdb2c` | Recorded (run 1 defect evidence) | Run 1. Final schedule; overlay buttons still present. |
| b-device/B2-open.png | `964027289c9eeb23746921e3f3759dbb0e06e97d7aa462a6684c77aff436f86d` | Recorded (run 1 defect evidence) | Run 1. After the reveal gesture: no row moved; overlay buttons present on every row (reveal FAIL, cause visible in pixels only). |
| b-device/B4-independent-empty-favorites.png | `05d8bf0a320b6b0245f378c389610281b5ddbc52b0b15f689b352e62ed058647` | PASS | Run 1. FAVORITE SESSIONS: "No favorite sessions." (independent check, not removal evidence). |
| b-device/B5-after.png | `cc46c8f95cf3ebefd06d45fd968a120dade2c5360c4b4ac49b0514dc744b736b` | PASS | Run 1. List scrolled to 10:00 am; no row opened; still the schedule. |
| b-device/B5-before.png | `ecdf350ded23c9c48d105b4127532d101a2af2312f5830f82309b3c54af63b00` | Recorded (run 1 defect evidence) | Run 1. Baseline before vertical scroll; overlay buttons present. |
| b-device/B6-back.png | `c0c66fd4d7e1977f176404111410a6e462ee4212c5cbc666f72153540369f95e` | PASS | Run 1. ActionBar back returned to the scrolled schedule. |
| b-device/B6-detail.png | `666dcc5d1292f795870b851e37d7ec153ebbffb1f9254aaf107009c0d7150fa6` | PASS | Run 1. Normal tap opened the Migrating to Ionic detail page (back arrow, Add to favorites, disabled placeholders). |
| b-device/B6-open.png | `eb283fb914a431f20ae3da591de4d0426e7ce6e99a9b42bc532d382be7c7cb49` | Recorded (run 1 defect evidence) | Run 1. Reveal attempt on Migrating to Ionic: no movement (FAIL). |
| b-device/B7-a-open.png | `75cb47a8cb7a045dc4009661b77c46f371133390b9025c94b2788e8f2891d8d7` | Recorded (run 1 defect evidence) | Run 1. Reveal attempt: no movement (FAIL). |
| b-device/B8-deselect-all.png | `882d20fa3b985b29125d6e221455b6150114553ade3fa189ad2ebb081a73d79f` | PASS | Run 1. Deselect All: all off. |
| b-device/B8-filtered.png | `4b3dcd38dc284a188716c285e7d0072bebc0d079e9c6dbca0c1ab242a121c8b1` | PASS | Run 1. Done: only Breakfast and Lunch (Food). |
| b-device/B8-filter-modal.png | `78c9b3df45a1363e5ca13c5830695bc4295b40bd6e154333b070c257301121dc` | PASS | Run 1. Filter modal: 10 sorted tracks all on. |
| b-device/B8-food-switch.png | `6aa34656321581220fe12b9024d5f4108bdf5b8853400f7851556720be29da0a` | PASS | Run 1. Only Food on. |
| b-device/B8-mode-closed.png | `c88fd82a6ceaa15c1547210624adce6a222531787dcbfdfa6a61e47e5dc1ff94` | PASS | Run 1. FAVORITE SESSIONS empty state. |
| b-device/B8-open.png | `200a61aab3a8701d45c56085fe57e4db25a62ad83955f2b7be8c61e2b983917e` | Recorded (run 1 defect evidence) | Run 1. Reveal attempt: no movement (FAIL). |
| b-device/B8-open-again.png | `3757c15f970e9e0262e21d7b6b98eeffceec2a2c3509c172d9dead0b5371c40c` | Recorded (run 1 defect evidence) | Run 1. Reveal attempt from the top: no movement (FAIL). |
| b-device/B8-restored.png (= b-device/B9-buttons.png) | `c677ca3f1df56b0d0f9d6f7189a4eb46be6f1f7203d8b723ce8371f24b1bc43b` | PASS | Run 1. Full schedule restored (= B9-buttons.png). |
| b-device/B8-restore-modal.png | `1d9558a7ffa09f76acffe57c043a0efbe23e242b839a95bd97cff24a4ab2c0d0` | PASS | Run 1. Reopened: only Food on. |
| b-device/B8-select-all.png | `55d68dc3fba1307128300d7652948025915e2fd56ddb3a85dd4595f9eb82e25f` | PASS | Run 1. Select All: all on. |
| b-device/B-install.png (= b-device/B1-baseline.png) | `5a8dc20c2a9c9a00352091db7774258dcc3cb364329858da79a8e1c1d2a4a837` | Recorded (run 1 defect evidence) | Run 1 (pre-A1). Schedule after install; every row shows a second elevated "Favorite" button inside column 0 (the overlay defect A1 fixes). |
| b-device2/B11-final.png | `e24ad536cf477b2c7879907266dda60d0e710ed35a42cae33104b05e59286a57` | PASS | Run 2. Final schedule, closed. |
| b-device2/B1-baseline.png | `08719b6b213f8985e7055043a23a8a3e08a004f070b3e1e63ba24120a56ae2da` | PASS | Run 2. Schedule with one Favorite button per row: the overlay defect is gone. |
| b-device2/B2-diagnostic-current.png | `821f8df6c8683bd8f5e0424ba3409f8356c04f94130367f46fa283aeb176d33b` | PASS | Run 2. Breakfast row content slid left about 96 dp and a "Favorite" action fills the revealed strip: A1 reveal works. |
| b-device2/B2-independent-all-reset.png (= b-device2/B5-before.png) | `828aa3a9fdfca0b261af5d0642f2c2993d3640be682c4af6056fccb4166f5089` | PASS | Run 2. Closed schedule (= B5-before.png). |
| b-device2/B2-independent-empty-favorites.png | `21bbffd494a588f146464d0a5f2ccf254b83ffede1de15074312d601da122b7c` | PASS | Run 2. "No favorite sessions." (independent check). |
| b-device2/B2-open.png | `081e314a1333e8e4a801da719b886884a32c0a2ee11c2b6fdea042661252cf25` | PASS | Run 2. Row open with the revealed Favorite action (measurement rule blocked the step; pixels show success). |
| b-device2/B5-after.png | `6e9fc96e9f76207df66fe15e2195eaf02a2ddd080ab5e5735324c1daf56c7c79` | PASS | Run 2. Vertical scroll to 10:00 am; no row open. |
| b-device2/B6-back.png | `67eac13e24ef43797c4194dc92e3303f419e199e38b584d229000702fea6e09c` | PASS | Run 2. Back on the schedule, closed. |
| b-device2/B6-detail.png | `a53ddc005c06d79ef87ccc584065b8d95a85e8d36720e7e31cc1340abddd7bd7` | PASS | Run 2. Detail page for Migrating to Ionic. |
| b-device2/B6-independent-reset-all.png | `1b5e243e1f6741a91350a763b08c6e86cd9cf7a94be72bcef39465001fc2f173` | PASS | Run 2. Closed schedule. |
| b-device2/B6-independent-reset-favorites.png | `f43b1a97f7ed2b1f9cac6046ae108eb8fa1d3b18be349b577900f5e00e228922` | PASS | Run 2. "No favorite sessions." |
| b-device2/B6-open.png | `7265f139097733685c2732e41166fd7a95fe782c740169717bda037631ebb501` | PASS | Run 2. Migrating to Ionic open with the revealed action. |
| b-device2/B7-a-open.png (= b-device2/B8-open.png) | `6cac3f5f7b82e124d3c3cf335ab7736cd0622790a55b2cf39d9fce9cfa2e38e4` | PASS | Run 2. Breakfast open (= B8-open.png). |
| b-device2/B7-independent-reset-all.png (= b-device2/B8-return-all.png) | `8969c8e71ea46735303905e43691ca8edbd39b192bf8a2ebd3785c76b57ccbc3` | PASS | Run 2. Closed schedule (= B8-return-all.png). |
| b-device2/B7-independent-reset-favorites.png (= b-device2/B8-mode-closed.png) | `265ea0e36cf531ff957fc4ce6a90a32c156973a348b28d13450eeee150af08d7` | PASS | Run 2. "No favorite sessions." (= B8-mode-closed.png): mode switch shows no open row. |
| b-device2/B8-all-selected.png | `ae913afdac0e7307ed9dd84f3d0483731135eed2798f5c181266be021ab9f36f` | PASS | Run 2. All on. |
| b-device2/B8-deselected.png | `b2fe5457c10a2e38fe2f743026a989c76ca6159e2bd36d1940e9872a2c01585d` | PASS | Run 2. All off. |
| b-device2/B8-filtered.png | `daf10de3207b8a0622dd5d766c140e729e138dd4380d65f673135a11c9696f85` | PASS | Run 2. Only Breakfast and Lunch, no open row. |
| b-device2/B8-filter-modal.png | `4687433597f439e468d3ffe5dde1f06b2519343051461c4a1acbbecc456d4717` | PASS | Run 2. Filter modal, all on. |
| b-device2/B8-food-draft.png | `5006b49158a51f106f0ca445fe7b58b1b50b865fd875131aeb63a334a3bc7fb3` | PASS | Run 2. Only Food on. |
| b-device2/B8-open-again.png | `aea30c39dff93c98f15abea0768ca43c27ac1d87fcf207824fe05a391a5d2528` | PASS | Run 2. Breakfast open again. |
| b-device2/B8-restored.png (= b-device2/B9-buttons.png) | `d52e13c520486e55f4298feb932078f667d7d873237823c43b0767a9be23d113` | PASS | Run 2. Full schedule, closed (= B9-buttons.png). |
| b-device2/B8-restore-modal.png | `b9214dd3514989101c2f1f29ddc6cd694e865d11ff5c0d53418b46db22ee13ff` | PASS | Run 2. Only Food on when reopened. |
| b-device2/B-install.png | `2f294d76a2d69f4eedf56fe1f2ce6fecff03d54ee2d2b04bf70c0017ef31f246` | PASS | Run 2 (A1 build). Stock launcher before launch; no personal content. |
| b-device3/B1-baseline.png | `c3ed453ab469d440c4fdd58b1fc2c20269bbf7f2ae0e11fd58d6d86f4f226ebe` | PASS | Run 3. Closed schedule, one Favorite button per row. |
| b-device3/B2-closed.png (= b-device3/B2-return-all.png) | `c1ca6421c484dedb835469bc14c509a4bc4c2b579a0651398af0050ab3c17ae7` | PASS | Run 3. After OK: row closed (= B2-return-all.png). |
| b-device3/B2-dialog.png | `f75348260eb00084d3741ddd658d7131864dd07085c86b8c1c1fed4920e95e61` | PASS | Run 3. "Favorite Added" dialog with OK (swipe path), row still open behind the scrim. |
| b-device3/B2-favorites.png | `f2f421721c2de11ee435d78b2ef0005d1a9204882275086c579a87d7f26664fc` | PASS | Run 3. FAVORITE SESSIONS lists Breakfast with Remove. |
| b-device3/B2-nonfavorite-precondition.png | `b6ad5ac54133687776c942a3710448badd0aec82f4e076b4a3603b743df328bf` | PASS | Run 3. "No favorite sessions." (Breakfast not a favorite). |
| b-device3/B2-open.png | `dbc31668c97caace6ca88dfc0b2164378fcccbb4988065981a1804e8484e7d57` | PASS | Run 3. Breakfast open, revealed "Favorite" action left of the column-1 button. |
| b-device3/B2-precondition-all.png | `e0af79551f0ac73f436eef0ca1d4a6a8dc2bafe77d55e360306c594225084f94` | PASS | Run 3. Closed schedule before B2. |
| b-device3/B3-closed.png | `5d4218a345c5bd4c572fb548c9a5370f26a8a6261bba0bce4882fd450da9dc5d` | PASS | Run 3. After Cancel: row closed. |
| b-device3/B3-dialog.png | `8b39202b2f95705ff0cf678320cada63d83c09b644bb0ad9857f2a781ffa31a4` | PASS | Run 3. "Favorite already added" with the removal message and CANCEL / REMOVE (reproduced quirk via swipe). |
| b-device3/B3-open.png | `4bee8d3eca7843224d9f971f8f26f4704838cbdc070cf66a2fc8f08da65ac981` | PASS | Run 3. Breakfast open again with Favorite action. |
| b-device3/B3-still-favorite.png | `b4588dbf87baa18387cecab290d9ec55987a77e6f22bc8695e97d2d3a7a897d1` | PASS | Run 3. Breakfast still listed under FAVORITE SESSIONS. |
| b-device3/B4-dialog.png | `1422ea85ef3f7a45e22ecde39a0370fd3a490d802cd994bff39165c803c3f586` | PASS | Run 3. "Remove Favorite" dialog with CANCEL / REMOVE. |
| b-device3/B4-open.png | `171cf2369c6d7cffeb3fb69bb748211c2f4f4c94e90c24aeec33737e1def1bcf` | PASS | Run 3. In favorites mode the revealed action reads "Remove". |
| b-device3/B4-removed.png | `d8c290d6a6109d57753de69137f916c3aac3bb070396418ecfc460f4bfc56f67` | PASS | Run 3. After Remove: "No favorite sessions." |
| b-device3/B4-return-all.png (= b-device3/B5-before.png) | `edf2b3bb6d40450b399d4751c500c470c39d1a26fd5becd28f0d6509feb552c6` | PASS | Run 3. Back in ALL SESSIONS, closed (= B5-before.png). |
| b-device3/B5-after.png (= b-device3/B6-back.png, b-device3/B6-closed-no-nav.png) | `9631c38e96ebdce787cc90661de1e09d2a88c08ffadcc5ae4babdbf3817897c4` | PASS | Run 3. Vertical scroll to 10:00 am, no row open, still the schedule (= B6-back.png, B6-closed-no-nav.png). |
| b-device3/B6-detail.png | `1301180eaf3879f0cd5e382d9159e6d463a3cd34bb06e0f2601d6658718f6c22` | PASS | Run 3. After tapping the closed row: detail page for Migrating to Ionic. |
| b-device3/B6-open.png (= b-device3/B7-a-open.png) | `cf1f7312630f2fcbea467bf19d8f75bf179755fc89a74388f3f8544715056a22` | PASS | Run 3. Migrating to Ionic open (= B7-a-open.png). |
| b-device3/B7-b-open.png | `c53e7f5c8f9ebb5d1e8430ac02954df6c225f86bf937c5d188b51a4a34452960` | PASS | Run 3. What's New in Vue open and Migrating to Ionic closed: single-open. |
| b-device3/B7-closed.png | `73381000b772bdebed574dbd3c56c82d82e4beb2ca63c34c731a1a1220d7be2b` | Recorded (C2 gesture issue) | Run 3. Launcher in foreground after the edge-start close gesture (system Back from the left edge; correction C2). No personal content. |
| b-device3/B-install.png | `2a3340298757b4f0419b60a3910d9e344c16f0ad7b3c1a4b9d159a44ddd99bdb` | PASS | Run 3. Stock launcher before launch; no personal content. |
| b-device4/B11-final.png (= b-device4/B9-buttons.png) | `1f8396e983c652102c06078a47c46f4947e4c1364e2bbcb0ce0fea356d57e02f` | PASS | Run 4. Final foreground: schedule, ALL SESSIONS, all tracks, column-1 Favorite buttons labelled (= B9-buttons.png). |
| b-device4/B1-baseline.png | `b0f8e731d28c3b32006fad66301549d774ca7fc7effad9abd913f933ca002ff1` | PASS | Run 4. Closed schedule. |
| b-device4/B7-a-open.png | `08f557e9afdc20c8bc0dad16a7a92a519569d38135ba1c4c561162b6b0d1e752` | PASS | Run 4. Breakfast open. |
| b-device4/B7-b-open.png | `7b2d469f120cad116656bd661336bb3a0f4ad5585120b47c290ddb18589ed53e` | PASS | Run 4. University of Ionic open and Breakfast closed: single-open. |
| b-device4/B7-closed.png | `6b9fc2c5c36838c8c3501e50c48ba8d2d143569b142bf78f91272679629f6468` | PASS | Run 4. Corrected close swipe: all rows closed, still the schedule. |
| b-device4/B8-all-selected.png | `45055a2f943dc4617d9bd59f558b6c773426c5ae600713d23855d9b9970b66cf` | PASS | Run 4. All on. |
| b-device4/B8-deselected.png | `aa6f9e6f2309df2ec5fe4cfe2d5147d76a5cfbbd2e40c8d3ba73591f9075b709` | PASS | Run 4. All off. |
| b-device4/B8-filtered.png | `44db091450779c53248d4089844332baf3e18402b67ee9ebcb7cd0f2f3dcc178` | PASS | Run 4. Only Breakfast and Lunch, no open row (filter change closed it). |
| b-device4/B8-filter-modal.png | `9a36e6b34529c2292f921711b3f6612e0a12f0f4311f6c4200dcb0e25be965fe` | PASS | Run 4. Filter modal, all on. |
| b-device4/B8-food-draft.png | `6bb28fdd8b500a13b7b87a595f3922fb238bddc00893680ee9cc5b215b009bcf` | PASS | Run 4. Only Food on. |
| b-device4/B8-mode-closed.png | `8c9b6db5a238638a34e3302245ed4b6a8f421e8e1c834f011187fad42e3a75e2` | PASS | Run 4. Switched to FAVORITE SESSIONS: empty state, no open row. |
| b-device4/B8-open.png | `f00e0c34d2bb3f2073a373e2e77f76530b880ed12db6a8dd7f4e24662dca5ef4` | PASS | Run 4. Breakfast open. |
| b-device4/B8-open-again.png | `3c67d4dbc231b368494fced2fbbf3c6360f4f86b7e7da6bd17b8b9739fe768ec` | PASS | Run 4. Breakfast open again. |
| b-device4/B8-restored.png | `6e9493ff4ddca953e3eb8e6d8be2401f1c004d56b251cb5cd3c42fc9f32619ab` | PASS | Run 4. Full schedule, all closed. |
| b-device4/B8-restore-modal.png | `e6aa4906253cee08e0bd3e875104e5f34a56cad54e4bbe653760d20356513659` | PASS | Run 4. Only Food on when reopened. |
| b-device4/B8-return-all.png | `33a08c4d81f23c83d55b0018595a9ac98c419f63e458a11a934f336c1d0a28ae` | PASS | Run 4. Back in ALL SESSIONS: the earlier open row is closed (list-changed close). |
| b-device4/B-install.png | `23b116fca0a858a807bcdc59b58305081cd56fad924a339ccaafe7c22801ef2a` | PASS | Run 4. Stock launcher before launch; no personal content. |

Notes (observations, not failures under the NS06 contract):

- The revealed action and the column-1 button carry the same label, so an open row briefly shows two "Favorite" (or "Remove") buttons side by side; the revealed one is hidden from assistive technology so each action is announced once. Visual polish of the reveal (colour, divider, animation) is unverified against Ionic and is an NS07 concern.
- The reveal is a fixed jump, not a finger-following drag (D1); gesture feel versus Ionic remains unverified.
- Dialog buttons render uppercase (Android Material styling), as in NS04/NS05.

Verdict: with Amendment A1, leftward swipes open rows and reveal the mode-correct action; the swipe action reuses the existing favorite handler and dialogs and closes the row when a dialog is answered; vertical scrolling, the open-row tap guard, single-open, right-swipe close and list-changed close on mode and filter changes behave as specified; the column-1 buttons remain present and labelled. No keyboard or personal content in any frame.