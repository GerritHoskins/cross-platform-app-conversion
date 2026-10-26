# RN07 revision 1 — coordinator pixel inspection (Android acceptance)

Inspector: Claude Code coordinator (model claude-opus-5-5), viewing PNGs directly as images on 2026-10-25. Supporting device evidence only: separate from the automated Jest evidence and from formal review, not approval, and not routed through Hermes or `openai-codex`. Frames were captured by the Hermes executor (GPT-6.1 Sol high). Device: emulator-5554, RN01_API36, 1080x2400, light theme, default settings.

Grading: PASS = the pixels show the state the executor's notes and UI XML claim; LIMITED = transient or partly obstructed frame whose assertion rests on XML or a neighbouring frame; NOT INSPECTED = not individually viewed (disclosed, not claimed). Byte-identical frames are marked; their event order comes from the timestamped notes, commands and XML, not the pixels.

Cross-cutting observations (not product defects):
- Gboard's floating handwriting toolbar covers the left ~140 px of keyboard-open frames in B03–B06 (e.g. B05-forward-2/4/5). Titles under it are corroborated by the UI XML.
- With the keyboard open, the first list tap only dismisses the keyboard (`keyboardShouldPersistTaps` default). Recorded as an RN07 observation; G02 tests it.
- Fresh loads pass through a blank development-client surface (Tools button) and the launcher; these are development-client behavior, not app screens.
## B1 (run b-device1)

Frames: 126 PNGs, 72 distinct by SHA-256. Results: PASS 119, LIMITED 3, NOT INSPECTED 4.

| Frame | SHA-256 | Result | Observed |
|---|---|---|---|
| B-baseline-empty-favorites | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | PASS | Baseline: empty search, All sessions selected, all ten tracks, no favorites. |
| B-baseline-launcher-retry | `5aef06a4957eadabd4f66f5da07cb1e8e518f17415f96ae25ae41bbea88d882b` | PASS | Development-client launcher (Development Build) listing 127.0.0.1:8082 among servers; baseline connect step. |
| B-baseline-tracks-close2 | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | PASS | Baseline: empty search, All sessions selected, all ten tracks, no favorites. |
| B-baseline-tracks | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | PASS | Baseline: empty search, All sessions selected, all ten tracks, no favorites. |
| B01-baseline | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | PASS | Byte-identical to B-baseline-tracks-close2. Schedule viewport; headings and rows in time order, no duplicates against neighbouring viewports. |
| B01-cold-loaded | `e7966a9247288825574b8435a3f9debfa52308c98e42987ea196ec3fd16e1236` | LIMITED | Transient development-client loading surface (blank, Tools button); not an assertion of schedule content. |
| B01-forward-1 | `cd5a3a99bfe1d8ef1c38a5889683d4cb1633fa5ea5b3135e40355d3ea27dc5ba` | PASS | Schedule viewport; headings and rows in time order, no duplicates against neighbouring viewports. |
| B01-forward-2 | `adc854eb0338f5ce2727b1ad545b24e2bc638aa8993b643b7f49052931136200` | PASS | Schedule viewport; headings and rows in time order, no duplicates against neighbouring viewports. |
| B01-forward-3 | `a3c64c0e466c6d14a16820d912576ff73dcaaedd323211b461ed34ab67af7e8d` | PASS | Schedule viewport; headings and rows in time order, no duplicates against neighbouring viewports. |
| B01-forward-4 | `af3c77c144400e0945387ad3b4715d26a664d375ccc2ce1b090fa0023f9ebc8e` | PASS | Schedule viewport; headings and rows in time order, no duplicates against neighbouring viewports. |
| B01-forward-5 | `c55b1f5d1d5bf986a99f19fc02907495bac09af7f3b954aa98380d89a8fbb23b` | PASS | Schedule viewport; headings and rows in time order, no duplicates against neighbouring viewports. |
| B01-forward-6 | `61244febdb53b78f197962ab441b24708e880807bf2817a3b223e86f13c72ea0` | PASS | Schedule viewport; headings and rows in time order, no duplicates against neighbouring viewports. |
| B01-forward-7 | `61244febdb53b78f197962ab441b24708e880807bf2817a3b223e86f13c72ea0` | PASS | Byte-identical to B01-forward-6. Schedule viewport; headings and rows in time order, no duplicates against neighbouring viewports. |
| B01-forward-8 | `61244febdb53b78f197962ab441b24708e880807bf2817a3b223e86f13c72ea0` | PASS | Byte-identical to B01-forward-6. Schedule viewport; headings and rows in time order, no duplicates against neighbouring viewports. |
| B01-forward-9 | `61244febdb53b78f197962ab441b24708e880807bf2817a3b223e86f13c72ea0` | PASS | Byte-identical to B01-forward-6. Schedule viewport; headings and rows in time order, no duplicates against neighbouring viewports. |
| B01-viewport-0 | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | PASS | Byte-identical to B-baseline-tracks-close2. Schedule viewport; headings and rows in time order, no duplicates against neighbouring viewports. |
| B02-reverse-1 | `61244febdb53b78f197962ab441b24708e880807bf2817a3b223e86f13c72ea0` | PASS | Byte-identical to B01-forward-6. Reverse scroll viewport; equal-start rows 6/7 and 10/11 stable, no duplicates or gaps. |
| B02-reverse-2 | `61244febdb53b78f197962ab441b24708e880807bf2817a3b223e86f13c72ea0` | PASS | Byte-identical to B01-forward-6. Reverse scroll viewport; equal-start rows 6/7 and 10/11 stable, no duplicates or gaps. |
| B02-reverse-3 | `61244febdb53b78f197962ab441b24708e880807bf2817a3b223e86f13c72ea0` | PASS | Byte-identical to B01-forward-6. Reverse scroll viewport; equal-start rows 6/7 and 10/11 stable, no duplicates or gaps. |
| B02-reverse-4 | `61244febdb53b78f197962ab441b24708e880807bf2817a3b223e86f13c72ea0` | PASS | Byte-identical to B01-forward-6. Reverse scroll viewport; equal-start rows 6/7 and 10/11 stable, no duplicates or gaps. |
| B02-reverse-5 | `61244febdb53b78f197962ab441b24708e880807bf2817a3b223e86f13c72ea0` | PASS | Byte-identical to B01-forward-6. Reverse scroll viewport; equal-start rows 6/7 and 10/11 stable, no duplicates or gaps. |
| B02-reverse-6 | `61244febdb53b78f197962ab441b24708e880807bf2817a3b223e86f13c72ea0` | PASS | Byte-identical to B01-forward-6. Reverse scroll viewport; equal-start rows 6/7 and 10/11 stable, no duplicates or gaps. |
| B03-dismiss-keyboard | `d6d7f54e781cf0e1354f1468df4bfbd74ac63e91eb0483401e5c4ccbe781862c` | PASS | IOnic search; visible rows all match case-insensitively. IME floating toolbar obstructs the left edge on keyboard-open frames (XML corroborates titles); not a product defect. |
| B03-focus | `49c274bdb9428ddcf999d8960cfe0958f05871e0a528f3cd2b75564146ed8e08` | PASS | IOnic search; visible rows all match case-insensitively. IME floating toolbar obstructs the left edge on keyboard-open frames (XML corroborates titles); not a product defect. |
| B03-forward-1 | `e059a70545cae73dbb872d611360660b86d394bf64a735e7fac3d8b99072a384` | PASS | IOnic search; visible rows all match case-insensitively. IME floating toolbar obstructs the left edge on keyboard-open frames (XML corroborates titles); not a product defect. |
| B03-forward-2 | `9d398bad3dd6898b0628dfe0f16c14b1baf95f2a4d16141fe19bbf269bc17002` | PASS | IOnic search; visible rows all match case-insensitively. IME floating toolbar obstructs the left edge on keyboard-open frames (XML corroborates titles); not a product defect. |
| B03-forward-3 | `05277d568e5544fae79cecc243973a4ec35c5e8282615487253b78eea17c7836` | PASS | IOnic search; visible rows all match case-insensitively. IME floating toolbar obstructs the left edge on keyboard-open frames (XML corroborates titles); not a product defect. |
| B03-forward-4 | `9e7207e459de2003f48e5b6ae0af0a8dd8caca99cb5a062be7c946fe19ed947d` | PASS | IOnic search; visible rows all match case-insensitively. IME floating toolbar obstructs the left edge on keyboard-open frames (XML corroborates titles); not a product defect. |
| B03-forward-5 | `08013a4cbe7070a7ddac86f545f48f40eb0de005018cb6f88c98121e6095f70e` | PASS | IOnic search; visible rows all match case-insensitively. IME floating toolbar obstructs the left edge on keyboard-open frames (XML corroborates titles); not a product defect. |
| B03-forward-6 | `3b13ae094688c3bda03a7d54e5c2e68b32044da40e3c925844182a277b8c1523` | PASS | IOnic search; visible rows all match case-insensitively. IME floating toolbar obstructs the left edge on keyboard-open frames (XML corroborates titles); not a product defect. |
| B03-query | `82cb33382ee51eebb573c49ab949113ba51ac0b2667de64e071e6f455fc9b998` | PASS | IOnic search; visible rows all match case-insensitively. IME floating toolbar obstructs the left edge on keyboard-open frames (XML corroborates titles); not a product defect. |
| B03-reenter | `7b07698090c5d80895e906ed6171effdfde2043370a6b1d0b68b873bc47d3901` | PASS | IOnic search; visible rows all match case-insensitively. IME floating toolbar obstructs the left edge on keyboard-open frames (XML corroborates titles); not a product defect. |
| B04-clear-previous | `a66310f714472000481f403eefcae3a60db69b4cda28143d1b630019dbd946fc` | PASS | No-match / clear sequence; generic no-match message with no stale rows or headings; clear restores the initial viewport. |
| B04-cleared | `32da5cd13f2b8596ceaf8e58dca3eb542ec8da4f50727cff5714b078023e9fe2` | PASS | No-match / clear sequence; generic no-match message with no stale rows or headings; clear restores the initial viewport. |
| B04-focus | `d6d7f54e781cf0e1354f1468df4bfbd74ac63e91eb0483401e5c4ccbe781862c` | PASS | Byte-identical to B03-dismiss-keyboard. No-match / clear sequence; generic no-match message with no stale rows or headings; clear restores the initial viewport. |
| B04-no-match | `aeb19cf19c48dae8ff3aed848dd0b5c9a0fde4246c0c3ed470daa50559809143` | PASS | No-match / clear sequence; generic no-match message with no stale rows or headings; clear restores the initial viewport. |
| B05-clear-ionic | `e11f587ee77cc00b7104c63d7e4c1db1c5a6d82db54558dfcda4549424f6daf5` | PASS | Single-space search; field visually empty (space), rows consistent with core-derived IDs; Breakfast/Lunch absent as expected. IME toolbar obstructs left edge on some frames. |
| B05-focus | `82cb33382ee51eebb573c49ab949113ba51ac0b2667de64e071e6f455fc9b998` | PASS | Byte-identical to B03-query. Single-space search; field visually empty (space), rows consistent with core-derived IDs; Breakfast/Lunch absent as expected. IME toolbar obstructs left edge on some frames. |
| B05-forward-1 | `890615699b37784e2c33b0b727279b1d07a8eb2c52b919b10c7e2c25d4a0b004` | PASS | Single-space search; field visually empty (space), rows consistent with core-derived IDs; Breakfast/Lunch absent as expected. IME toolbar obstructs left edge on some frames. |
| B05-forward-2 | `b4f31d6cfd0dc7f09403c3950773da6e44511dca4a11893bee1d4434ed7308cf` | PASS | Single-space search; field visually empty (space), rows consistent with core-derived IDs; Breakfast/Lunch absent as expected. IME toolbar obstructs left edge on some frames. |
| B05-forward-3 | `0713104dc281174bb79052adcf50ed655768872347e7b21fbb7d5c81549e5196` | PASS | Single-space search; field visually empty (space), rows consistent with core-derived IDs; Breakfast/Lunch absent as expected. IME toolbar obstructs left edge on some frames. |
| B05-forward-4 | `c5740e268ee074d9963c50635b875461fa480249a76d95279ccd4e9c26a0d29b` | PASS | Single-space search; field visually empty (space), rows consistent with core-derived IDs; Breakfast/Lunch absent as expected. IME toolbar obstructs left edge on some frames. |
| B05-forward-5 | `5177c09bd913be69402bab844eb993b6ad030cac10ed21d7a3b4b24d3e66949b` | PASS | Single-space search; field visually empty (space), rows consistent with core-derived IDs; Breakfast/Lunch absent as expected. IME toolbar obstructs left edge on some frames. |
| B05-forward-6 | `abb3f48e93575637f94a1fe34ca341a020c4cb6cfe01752146b5f73940f238dc` | PASS | Single-space search; field visually empty (space), rows consistent with core-derived IDs; Breakfast/Lunch absent as expected. IME toolbar obstructs left edge on some frames. |
| B05-reset-position-clear | `32da5cd13f2b8596ceaf8e58dca3eb542ec8da4f50727cff5714b078023e9fe2` | PASS | Byte-identical to B04-cleared. Single-space search; field visually empty (space), rows consistent with core-derived IDs; Breakfast/Lunch absent as expected. IME toolbar obstructs left edge on some frames. |
| B05-reset-position-no-match | `c3790adeee234cf4175548e6255089971fbf674ed4ca1da2c49c8676866d1b71` | PASS | Procedural position reset: field shows zzz-no-such-session (XML), no-match message, 0 session nodes. |
| B05-single-space | `25e43bf1e3b3c168ea967b9778a624bd4baa6bcff9a2bae73102f0ac5d72c63c` | PASS | Single-space search; field visually empty (space), rows consistent with core-derived IDs; Breakfast/Lunch absent as expected. IME toolbar obstructs left edge on some frames. |
| B06-all-return | `9a141cc3c9cfde6aa82c462f82afe73bbc2d0e92e5f57ec7c1eb3232d70a721e` | PASS | Search active while switching All/Favorites/All; search text and tracks persist; Favorites empty. |
| B06-favorites | `5cc49819d0b560443fabe7d653e5819c7db54fe5c741997bc6703002f24be048` | PASS | Search active while switching All/Favorites/All; search text and tracks persist; Favorites empty. |
| B06-retained-tracks | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | PASS | Byte-identical to B-baseline-tracks. Search active while switching All/Favorites/All; search text and tracks persist; Favorites empty. |
| B06-tracks-close | `9ce43288656012bda339cedd76b3e485b73c2aaf0fcdad7fe2eb5424f7fa3b6d` | PASS | Search active while switching All/Favorites/All; search text and tracks persist; Favorites empty. |
| C-baseline-connect | `4687318f858fb7b6c49f9aec666defab30a2b72840543725e45c14bdad81574a` | LIMITED | Transient development-client loading surface; C-baseline-ready carries the assertion. |
| C-baseline-launcher-retry | `fb6fdab50b0c7db126f2ded7a42ba1ef2a650fc9c45b6e8b18afd5b0c7fb16d6` | PASS | Development-client launcher (Development Build) listing 127.0.0.1:8082 among servers; baseline connect step. |
| C-baseline-ready | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | PASS | Byte-identical to B-baseline-tracks-close2. Baseline: empty search, All sessions selected, all ten tracks, no favorites. |
| C-baseline-tracks-close | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | PASS | Byte-identical to B-baseline-tracks-close2. Baseline: empty search, All sessions selected, all ten tracks, no favorites. |
| C-baseline-tracks | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | PASS | Byte-identical to B-baseline-tracks. Baseline: empty search, All sessions selected, all ten tracks, no favorites. |
| C01-empty | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | PASS | Byte-identical to B-baseline-empty-favorites. Favorites empty state. |
| C02-acknowledged | `953293caf96440821e46db26656741e49bce2e5e5c155e03fb911fefd21df2cb` | PASS | Session 12 (Lunch) via accessible Favorite button; Favorite Added alert; Favorites shows only Lunch. Row button remains "Favorite" in All mode (RN04 design). |
| C02-added-alert | `0071015fae138ddde388636bb8284266899dbcd82a58a164f0bdd70c3a2abe12` | PASS | Session 12 (Lunch) via accessible Favorite button; Favorite Added alert; Favorites shows only Lunch. Row button remains "Favorite" in All mode (RN04 design). |
| C02-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | PASS | Byte-identical to B-baseline-tracks-close2. Session 12 (Lunch) via accessible Favorite button; Favorite Added alert; Favorites shows only Lunch. Row button remains "Favorite" in All mode (RN04 design). |
| C02-favorites12 | `2e2c221cbe515277391b826d3df81d44a45383847998ed779b3d2c31771138c2` | PASS | Session 12 (Lunch) via accessible Favorite button; Favorite Added alert; Favorites shows only Lunch. Row button remains "Favorite" in All mode (RN04 design). |
| C02-find12-1 | `15f5f95f79732f71df5da4520b82a1aaca40235138089f219d264cc3a8a781ff` | PASS | Session 12 (Lunch) via accessible Favorite button; Favorite Added alert; Favorites shows only Lunch. Row button remains "Favorite" in All mode (RN04 design). |
| C02-find12-2 | `81cb2766caea1bb6057a70e7812a4f593d4d73e99d19e17833c1c08831e2031a` | PASS | Session 12 (Lunch) via accessible Favorite button; Favorite Added alert; Favorites shows only Lunch. Row button remains "Favorite" in All mode (RN04 design). |
| C02-find12-3 | `953293caf96440821e46db26656741e49bce2e5e5c155e03fb911fefd21df2cb` | PASS | Byte-identical to C02-acknowledged. Session 12 (Lunch) via accessible Favorite button; Favorite Added alert; Favorites shows only Lunch. Row button remains "Favorite" in All mode (RN04 design). |
| C03-add1-OK | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | PASS | Byte-identical to B-baseline-tracks-close2. Add 20 then 1 via Favorite Added alerts; Favorites order [1,20]. |
| C03-add1-alert | `8015edd692c58e5396fb44bf252375e46d6f748c5fe4480b25728a67330a5478` | PASS | Add 20 then 1 via Favorite Added alerts; Favorites order [1,20]. |
| C03-add20-OK | `61244febdb53b78f197962ab441b24708e880807bf2817a3b223e86f13c72ea0` | PASS | Byte-identical to B01-forward-6. Add 20 then 1 via Favorite Added alerts; Favorites order [1,20]. |
| C03-add20-alert | `5ac8c31888c9d7ffd6234701932046ecba1ecbc0729f97911a6f46d0e61a00a8` | PASS | Add 20 then 1 via Favorite Added alerts; Favorites order [1,20]. |
| C03-all-find1 | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | PASS | Byte-identical to B-baseline-tracks-close2. Add 20 then 1 via Favorite Added alerts; Favorites order [1,20]. |
| C03-all-find20 | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | PASS | Byte-identical to B-baseline-tracks-close2. Add 20 then 1 via Favorite Added alerts; Favorites order [1,20]. |
| C03-find20-1 | `b1ee7840ac56601941aaadb8a20557cdb0e2d40a9b3d4a7042d54819ed8e66ae` | NOT INSPECTED | Intermediate scroll-to-find frame between C03-all-find20 and C03-find20-5/6; not individually viewed. |
| C03-find20-2 | `ec9f8762de08c876d2be225a79940d969ebc03c27a2eab9cf3f0f98c98b39206` | NOT INSPECTED | Intermediate scroll-to-find frame between C03-all-find20 and C03-find20-5/6; not individually viewed. |
| C03-find20-3 | `eb31a6f0be78ffc4153333b46d6da6090b83315ea683f80427bb8c37f6b0eed1` | NOT INSPECTED | Intermediate scroll-to-find frame between C03-all-find20 and C03-find20-5/6; not individually viewed. |
| C03-find20-4 | `668b1c46a88bc55d727e7c3dfd10a1f25bae1793f1cffdf8610825a23edfdc7d` | NOT INSPECTED | Intermediate scroll-to-find frame between C03-all-find20 and C03-find20-5/6; not individually viewed. |
| C03-find20-5 | `52fc70c8cc3e9844721d0d73ad2c69f50c7fc9d3474ac2bb3cd9c60c00dbf134` | PASS | Add 20 then 1 via Favorite Added alerts; Favorites order [1,20]. |
| C03-find20-6 | `61244febdb53b78f197962ab441b24708e880807bf2817a3b223e86f13c72ea0` | PASS | Byte-identical to B01-forward-6. Add 20 then 1 via Favorite Added alerts; Favorites order [1,20]. |
| C03-interim20 | `9a22098663fbef043e671eba537ef259fb7de2902b0222fa325d4dff6632bb70` | PASS | Interim: Favorites shows only 20 (Mobile States) with Remove button. |
| C03-order1-20 | `dcf416228822a7118bc21fed3ce8f63db6e82ab95562060216e8b742f49f97cb` | PASS | Add 20 then 1 via Favorite Added alerts; Favorites order [1,20]. |
| C03-setup-alert-labels | `443e7c5f72977922e396c0c3779040b6adfc5c59d332f837ebe95a7b727761d7` | PASS | Setup: Remove Favorite alert (Cancel/Remove labels) in Favorites mode removing 12 before C03. |
| C03-setup-remove12-alert | `443e7c5f72977922e396c0c3779040b6adfc5c59d332f837ebe95a7b727761d7` | PASS | Byte-identical to C03-setup-alert-labels. Setup: Remove Favorite alert (Cancel/Remove labels) in Favorites mode removing 12 before C03. |
| C03-setup-remove12-confirm2 | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | PASS | Byte-identical to B-baseline-empty-favorites. Setup: Remove Favorite alert (Cancel/Remove labels) in Favorites mode removing 12 before C03. |
| C04-all-second-attempt | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | PASS | Byte-identical to B-baseline-tracks-close2. Duplicate-add branch "Favorite already added" with Cancel retaining [1,20] and Remove leaving only 20 in separate attempts. |
| C04-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | PASS | Byte-identical to B-baseline-tracks-close2. Duplicate-add branch "Favorite already added" with Cancel retaining [1,20] and Remove leaving only 20 in separate attempts. |
| C04-cancel-retains1-20 | `dcf416228822a7118bc21fed3ce8f63db6e82ab95562060216e8b742f49f97cb` | PASS | Byte-identical to C03-order1-20. Duplicate-add branch "Favorite already added" with Cancel retaining [1,20] and Remove leaving only 20 in separate attempts. |
| C04-cancel | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | PASS | Byte-identical to B-baseline-tracks-close2. Duplicate-add branch "Favorite already added" with Cancel retaining [1,20] and Remove leaving only 20 in separate attempts. |
| C04-duplicate-cancel-alert | `4ff0fc8fae78eac020a7c7c38828828317a482b2bdd2b073be9d352501edd574` | PASS | Duplicate-add branch "Favorite already added" with Cancel retaining [1,20] and Remove leaving only 20 in separate attempts. |
| C04-duplicate-remove-alert | `f26d28fb559ccb9c8a66bde0e050f4cd6d56b4334ae12f19286488873252411b` | PASS | Duplicate-add branch "Favorite already added" with Cancel retaining [1,20] and Remove leaving only 20 in separate attempts. |
| C04-only20 | `9a22098663fbef043e671eba537ef259fb7de2902b0222fa325d4dff6632bb70` | PASS | Byte-identical to C03-interim20. Duplicate-add branch "Favorite already added" with Cancel retaining [1,20] and Remove leaving only 20 in separate attempts. |
| C04-remove | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | PASS | Byte-identical to B-baseline-tracks-close2. Duplicate-add branch "Favorite already added" with Cancel retaining [1,20] and Remove leaving only 20 in separate attempts. |
| C05-cancel-retains20 | `9a22098663fbef043e671eba537ef259fb7de2902b0222fa325d4dff6632bb70` | PASS | Byte-identical to C03-interim20. Favorites Remove: Cancel retains 20; confirm empties favorites. Alert text "Would you like to remove this session from your favorites?". |
| C05-remove-cancel-alert | `03632d406ead6e06e44d7650ec0474322855219698bc84e8ac2e5b0c305bee4f` | PASS | Favorites Remove: Cancel retains 20; confirm empties favorites. Alert text "Would you like to remove this session from your favorites?". |
| C05-remove-confirm-alert | `93d4a58337fef62b29298ef4dc6911e066f855e88bcc45b847d601018adc2d0a` | PASS | Favorites Remove: Cancel retains 20; confirm empties favorites. Alert text "Would you like to remove this session from your favorites?". |
| C05-removed-empty | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | PASS | Byte-identical to B-baseline-empty-favorites. Favorites Remove: Cancel retains 20; confirm empties favorites. Alert text "Would you like to remove this session from your favorites?". |
| C06-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | PASS | Byte-identical to B-baseline-tracks-close2. Breakfast detail: no description and no "undefined"; star toggle on/off reflected in the list after header back. |
| C06-detail-before | `33c8b3d78896051ebd8d961f7fd6961d8140069c241cb8239a25d55151d3ea73` | PASS | Breakfast detail: no description and no "undefined"; star toggle on/off reflected in the list after header back. |
| C06-detail-on | `558a72a50b8feee35ff65b1d5751dcdf3935836b8f16e0f3d0affd3acd5b9a13` | PASS | Breakfast detail: no description and no "undefined"; star toggle on/off reflected in the list after header back. |
| C06-header-back-off | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | PASS | Byte-identical to B-baseline-empty-favorites. Breakfast detail: no description and no "undefined"; star toggle on/off reflected in the list after header back. |
| C06-header-back-on | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | PASS | Byte-identical to B-baseline-tracks-close2. Breakfast detail: no description and no "undefined"; star toggle on/off reflected in the list after header back. |
| C06-list-on | `f91e67ad7c2a92cff9405dcbcd0f6e86cdbe7bd33474c78d860672e9898ef4b8` | PASS | Breakfast detail: no description and no "undefined"; star toggle on/off reflected in the list after header back. |
| C06-star-off | `33c8b3d78896051ebd8d961f7fd6961d8140069c241cb8239a25d55151d3ea73` | PASS | Byte-identical to C06-detail-before. Breakfast detail: no description and no "undefined"; star toggle on/off reflected in the list after header back. |
| C06-star-on | `558a72a50b8feee35ff65b1d5751dcdf3935836b8f16e0f3d0affd3acd5b9a13` | PASS | Byte-identical to C06-detail-on. Breakfast detail: no description and no "undefined"; star toggle on/off reflected in the list after header back. |
| C07-add12-OK | `1aa059f9c9f84f5487eea33de36e1b8faf995fec4065fba10864a8cb5475610f` | PASS | favorites-some setup [3,12] via Favorite Added alerts; with only Food applied Favorites shows only 12. |
| C07-add12-alert | `fa0fc174b1edd5189b56538801c92247f762fbdac3c569e22f4f5ba61067055a` | PASS | favorites-some setup [3,12] via Favorite Added alerts; with only Food applied Favorites shows only 12. |
| C07-add3-OK | `15f5f95f79732f71df5da4520b82a1aaca40235138089f219d264cc3a8a781ff` | PASS | Byte-identical to C02-find12-1. favorites-some setup [3,12] via Favorite Added alerts; with only Food applied Favorites shows only 12. |
| C07-add3-alert | `f315d716264bb0495abf244ee20f684b9560ceedd6b4e9bf839608cf247ad10a` | PASS | favorites-some setup [3,12] via Favorite Added alerts; with only Food applied Favorites shows only 12. |
| C07-all-before-filter | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | PASS | Byte-identical to B-baseline-tracks-close2. favorites-some setup [3,12] via Favorite Added alerts; with only Food applied Favorites shows only 12. |
| C07-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | PASS | Byte-identical to B-baseline-tracks-close2. favorites-some setup [3,12] via Favorite Added alerts; with only Food applied Favorites shows only 12. |
| C07-filter-applied | `b06ce6941f7e2269a72324bc4977050b04ce3f53654e222904d6158c33e22a12` | PASS | Only Food applied: All mode shows Breakfast and Lunch only. |
| C07-filter-before | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | PASS | Byte-identical to B-baseline-tracks. favorites-some setup [3,12] via Favorite Added alerts; with only Food applied Favorites shows only 12. |
| C07-filter-food | `5db4c4dec57d87d500e3af47994d4cfe12b39fe590ce4b0426ef15094ccff084` | PASS | favorites-some setup [3,12] via Favorite Added alerts; with only Food applied Favorites shows only 12. |
| C07-filter-none | `b06e240b30b93e2db0835be1e26f7d48b173d331a57cb6f1b6fcde1f46f19287` | PASS | Filter modal after Deselect All: ten tracks unchecked; Reset/Deselect All/Select All/Done. |
| C07-find12-1 | `421890ebe3ff97150a140bf83bddc1c2131e99d56ed01229a44a36760c92334a` | PASS | favorites-some setup [3,12] via Favorite Added alerts; with only Food applied Favorites shows only 12. |
| C07-find12-2 | `1aa059f9c9f84f5487eea33de36e1b8faf995fec4065fba10864a8cb5475610f` | PASS | Byte-identical to C07-add12-OK. favorites-some setup [3,12] via Favorite Added alerts; with only Food applied Favorites shows only 12. |
| C07-find3 | `15f5f95f79732f71df5da4520b82a1aaca40235138089f219d264cc3a8a781ff` | PASS | Byte-identical to C02-find12-1. favorites-some setup [3,12] via Favorite Added alerts; with only Food applied Favorites shows only 12. |
| C07-only12 | `2e2c221cbe515277391b826d3df81d44a45383847998ed779b3d2c31771138c2` | PASS | Byte-identical to C02-favorites12. favorites-some setup [3,12] via Favorite Added alerts; with only Food applied Favorites shows only 12. |
| C07-unfiltered-favorites | `50cc0f89c69ea39772f4aa796167bac1734fd0a3539320f304277feb51855da5` | PASS | favorites-some setup [3,12] via Favorite Added alerts; with only Food applied Favorites shows only 12. |
| C08-cold-connect | `0a644925a88cfb10f40af732d833fac4f83c4029e0e3add11d2e6488290c123f` | LIMITED | Transient development-client loading surface after relaunch; C08-cold-ready carries the assertion. |
| C08-cold-empty-favorites | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | PASS | Byte-identical to B-baseline-empty-favorites. Resume without force-stop keeps state; force-stop/relaunch gives empty favorites. |
| C08-cold-ready | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | PASS | Byte-identical to B-baseline-tracks-close2. Resume without force-stop keeps state; force-stop/relaunch gives empty favorites. |
| C08-cold-tracks-close | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | PASS | Byte-identical to B-baseline-tracks-close2. Resume without force-stop keeps state; force-stop/relaunch gives empty favorites. |
| C08-cold-tracks | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | PASS | Byte-identical to B-baseline-tracks. Resume without force-stop keeps state; force-stop/relaunch gives empty favorites. |
| C08-final-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | PASS | Byte-identical to B-baseline-tracks-close2. Resume without force-stop keeps state; force-stop/relaunch gives empty favorites. |
| C08-home | `22e7049b300cabf023e9360eb82261b5958391a1c9c3e92089599da702b93a9d` | PASS | Device home after HOME keyevent. |
| C08-new-process-launcher | `52a6aa0121af65d4409ac3584cfe7a4ef9fbd33c7708acb183ebced16c55cbf2` | PASS | Development-client launcher on the new process after force-stop/relaunch. |
| C08-resumed | `2e2c221cbe515277391b826d3df81d44a45383847998ed779b3d2c31771138c2` | PASS | Byte-identical to C02-favorites12. Resume without force-stop keeps state; force-stop/relaunch gives empty favorites. |
| environment-initial | `abf9793a4d2a80797e490c8720ffa16df25882eea56d069b8b3f4200e990304f` | PASS | Device home/initial environment frame; no product assertion. |

## B2 (run b-device2)

Frames: 186 PNGs, 74 distinct by SHA-256. Results: NOT INSPECTED 142, PASS 39, FAIL 5. Every case outcome frame and both FAIL frames were viewed; unviewed frames are setup/scroll/baseline steps.

Note: E06-known-applied is byte-identical to E06-header-close, E07-system-close and E07-verify-close, so the blank viewport persisted through those closes until the Favorites→All toggle (E07-viewport-all) re-rendered rows. E06/E07 dismissal behavior itself passes on the restored viewport.

| Frame | SHA-256 | Result | Observed |
|---|---|---|---|
| D-baseline-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D-baseline-close | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D-baseline-favorites | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D-baseline-launcher | `1bd1993fd9a201234612dfd53f183ada732e9ab7b5200daf1cae90bf8e25b836` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D-baseline-tracks | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D-connect | `9d9a7b57c06db979923ad39dbeb5af8c219efc71742c602a355fb222ee392dc1` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D01-breakfast-return | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D01-breakfast | `33c8b3d78896051ebd8d961f7fd6961d8140069c241cb8239a25d55151d3ea73` | PASS | Breakfast (ID 1) detail: Food, 8:00–9:00 am, Dining Hall; no description block and no "undefined". |
| D01-described-return | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D01-described | `3a73fa3faf9c88c86b375398acab1570276e9170a867fecb39cacc83fe66e640` | PASS | University of Ionic detail with full description, time, room, Add to favorites and action list. |
| D02-header-detail7 | `095160bbfdafdbee7cff1587e8da25b734bb28fc3b1e69df1af980af0e0d8297` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D02-header-return | `e8dcd2548438c3f2431a424db981d281cc515e639ffc6ac601f5e0dca230d41f` | PASS | After header back: search "Ionic", All, retained scroll position (10:00 am Migrating to Ionic, Evolution of Ionicons, 2:00 pm UX in Ionic). |
| D02-list-tap-keyboard-observation | `a2efa32592c96ec67c73d0782102110cc6fb5d4561151c0161e20bf8e6be534e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D02-retained-all | `f2f02101555abe7b6c1bd6cf76d29b02233e0d4410d5ce9d0bbe03617f033cb6` | PASS | All with search "Ionic": 9:15 University of Ionic, Getting Started, 10:00 Migrating to Ionic. |
| D02-retained-favorites | `aaef81fad57b1e8ee70c4f68e0fdd7b5ad821a081f25dda15cef6ae2bc9ca92c` | PASS | Favorites with search "Ionic": only University of Ionic (4) with Remove. |
| D02-retained-tracks-close | `e8dcd2548438c3f2431a424db981d281cc515e639ffc6ac601f5e0dca230d41f` | PASS | Byte-identical to D02-header-return. After header back: search "Ionic", All, retained scroll position (10:00 am Migrating to Ionic, Evolution of Ionicons, 2:00 pm UX in Ionic). |
| D02-retained-tracks | `26fc52798ee8a496638e2e07a1bbd4c87516d40ca6801813a88d5e502861804c` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D02-scroll | `e8dcd2548438c3f2431a424db981d281cc515e639ffc6ac601f5e0dca230d41f` | PASS | Byte-identical to D02-header-return. After header back: search "Ionic", All, retained scroll position (10:00 am Migrating to Ionic, Evolution of Ionicons, 2:00 pm UX in Ionic). |
| D02-setup-apply | `1e83eade967db74362a5cd946f6c0b6fc8f9d1a4f59c3c4c6be70339c584b3c8` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D02-setup-clear-tracks | `b06e240b30b93e2db0835be1e26f7d48b173d331a57cb6f1b6fcde1f46f19287` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D02-setup-design | `26fc52798ee8a496638e2e07a1bbd4c87516d40ca6801813a88d5e502861804c` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D02-setup-favorite4 | `e7cecaf26d727ee1db4bc23528ff67e88a36d2871c30b53e0d0b4d90d2d649d2` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D02-setup-filter | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D02-setup-focus | `b775554d4d212e47b629f3649fd1db0e02622b595c8b0857b1a910c96c959615` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D02-setup-ionic | `306b8769ac4ca04d204fe68afd8e4e8e842e1bf5f66a5e66e8df7e2cd64ed313` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D02-setup-mode-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D02-setup-mode-fav | `2b0bb3786cc6953bb2cc92245cdbb48ec53cfa7d4b82cb088c079eda8b2bfacf` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D02-setup-ok | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D02-setup-query | `7e75ec9b0bd9cd9a839e8a1e712c715dc30a4ebabe9624a213211b5f7af3a8cf` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D02-system-detail7 | `095160bbfdafdbee7cff1587e8da25b734bb28fc3b1e69df1af980af0e0d8297` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D02-system-return | `e8dcd2548438c3f2431a424db981d281cc515e639ffc6ac601f5e0dca230d41f` | PASS | Byte-identical to D02-header-return. After header back: search "Ionic", All, retained scroll position (10:00 am Migrating to Ionic, Evolution of Ionicons, 2:00 pm UX in Ionic). |
| D05-detail-system-back | `f2f02101555abe7b6c1bd6cf76d29b02233e0d4410d5ce9d0bbe03617f033cb6` | PASS | Byte-identical to D02-retained-all. All with search "Ionic": 9:15 University of Ionic, Getting Started, 10:00 Migrating to Ionic. |
| D05-detail4 | `8051a1065487bfc9ed0af1faaafe34b23e4c63262e1830b5b43e43db00136ca9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| D05-root-system-back | `808380ded8f7bdfd176a9a04894faf46194c34810257c532b898314df79e6d80` | PASS | System Back at schedule root: Android home screen (app backgrounded), recorded as actual behavior. |
| E-baseline-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E-baseline-favorites | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E-baseline-launcher | `3390a53692112cb4f86ac20965f1c9d96455158e728595de8cf8e53200385abd` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E-connect | `a777d3ee100127afb9a1a32c2ad00514c03838dd408e6b58486943784cd41406` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E-teardown-close | `5917aecf452afddbccbb5c60edc37306140f10800bfa00602b5d128955eba6a0` | PASS | Byte-identical to E06-repeat-close. After Navigate up close: applied Ionic-only result [4,2,5] unchanged; draft discarded. |
| E01-initial-filter | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E01-reopen-ionic | `306b8769ac4ca04d204fe68afd8e4e8e842e1bf5f66a5e66e8df7e2cd64ed313` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E02-applied | `e10c5f6a9d70ffb5cb917005400f309f7f8a4bb44a520218c395e6ab096616b8` | PASS | Ionic-only applied: University of Ionic, Getting Started, Migrating to Ionic; empty search. |
| E02-clear | `b06e240b30b93e2db0835be1e26f7d48b173d331a57cb6f1b6fcde1f46f19287` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E02-ionic-only | `306b8769ac4ca04d204fe68afd8e4e8e842e1bf5f66a5e66e8df7e2cd64ed313` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E03-apply-design-ionic | `1e83eade967db74362a5cd946f6c0b6fc8f9d1a4f59c3c4c6be70339c584b3c8` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E03-design-draft | `26fc52798ee8a496638e2e07a1bbd4c87516d40ca6801813a88d5e502861804c` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E03-first-list-tap-keyboard-only | `a2efa32592c96ec67c73d0782102110cc6fb5d4561151c0161e20bf8e6be534e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E03-query | `7e75ec9b0bd9cd9a839e8a1e712c715dc30a4ebabe9624a213211b5f7af3a8cf` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E03-scroll-to-end | `a14fecd891b72378b6d65b0963e4a52e0181bc8b4b6ee787ccb95eae359d045f` | PASS | Search "Ionic" with Ionic+Design applied, end of list: Migrating to Ionic, Evolution of Ionicons, 2:00 pm UX in Ionic. |
| E03-search-focus | `b775554d4d212e47b629f3649fd1db0e02622b595c8b0857b1a910c96c959615` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E04-applied-empty | `abf9793a4d2a80797e490c8720ffa16df25882eea56d069b8b3f4200e990304f` | PASS | Search "Ionic" with no tracks: "No sessions match your search or filters."; no stale rows. |
| E04-clear | `b06e240b30b93e2db0835be1e26f7d48b173d331a57cb6f1b6fcde1f46f19287` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E04-open | `26fc52798ee8a496638e2e07a1bbd4c87516d40ca6801813a88d5e502861804c` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E04-reopen-empty | `b06e240b30b93e2db0835be1e26f7d48b173d331a57cb6f1b6fcde1f46f19287` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E05-applied-search-retained | `8adfe8aacf5cdebd8079ac51e6b40487727aafb8dfdb741b94d9358355ff608a` | PASS | Search "Ionic" retained after Select All: rows include Ionic Tooling (Tooling). |
| E05-clear-query | `ca92a81b30f2738602c48bcf1637af20fc878fd238991321ab67a2f103154a95` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E05-focus-query | `c9317ad75c827fdf9546f04b2053f936add3f62679906e9895bf542373fd8614` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E05-list-tap-keyboard-only | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E05-restored-scroll1 | `c7d107487397255bfd61df7bcdd1a5d629b362721817811a48c63f4467801e31` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E05-restored-scroll2 | `e520bacf9b68109348d3a317ce4b2f373372a0ab8ac0e0f2b9ef2181d318d1f3` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E05-restored-scroll3 | `70b99db571df86c6594a75969f62bdda4e1727a1232959b1ef2b549d34b0b4a2` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E05-restored-scroll4 | `51781eeb70993650774e8f3b8eec008fa1ab822885bbbf0227d5ef2fc84b1e0f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E05-restored-scroll5 | `91dd7d0073a3dbf87dc9b12ffbec76be16a3e7cd735d7d11353856df8df07e75` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E05-restored-scroll6 | `7cb3e94a412621224b5133f75133a9620f7ffdec109e78540b6999b30ac07922` | PASS | Unfiltered list scrolled to bottom (UX in Ionic, 3:00 pm Building with Ionic and Vue, Mobile States); precondition of the E06 supplemental FAIL. |
| E05-restored-scroll7 | `7cb3e94a412621224b5133f75133a9620f7ffdec109e78540b6999b30ac07922` | PASS | Byte-identical to E05-restored-scroll6. Unfiltered list scrolled to bottom (UX in Ionic, 3:00 pm Building with Ionic and Vue, Mobile States); precondition of the E06 supplemental FAIL. |
| E05-restored-scroll8 | `7cb3e94a412621224b5133f75133a9620f7ffdec109e78540b6999b30ac07922` | PASS | Byte-identical to E05-restored-scroll6. Unfiltered list scrolled to bottom (UX in Ionic, 3:00 pm Building with Ionic and Vue, Mobile States); precondition of the E06 supplemental FAIL. |
| E05-select-all | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-change-design | `26fc52798ee8a496638e2e07a1bbd4c87516d40ca6801813a88d5e502861804c` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-header-close | `bf87438babf5ee2f68da3b279f1984c7d62bdfd272c1620b16cd76b7b14ad71b` | FAIL | Byte-identical to E06-known-applied. CONFIRMED E06.apply-after-bottom-scroll: schedule controls render but no rows, headings or empty message after applying Ionic-only from the bottom of the full list. |
| E06-known-applied | `bf87438babf5ee2f68da3b279f1984c7d62bdfd272c1620b16cd76b7b14ad71b` | FAIL | CONFIRMED E06.apply-after-bottom-scroll: schedule controls render but no rows, headings or empty message after applying Ionic-only from the bottom of the full list. |
| E06-open | `306b8769ac4ca04d204fe68afd8e4e8e842e1bf5f66a5e66e8df7e2cd64ed313` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-reopen-discarded | `306b8769ac4ca04d204fe68afd8e4e8e842e1bf5f66a5e66e8df7e2cd64ed313` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-repeat-change | `26fc52798ee8a496638e2e07a1bbd4c87516d40ca6801813a88d5e502861804c` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-repeat-close | `5917aecf452afddbccbb5c60edc37306140f10800bfa00602b5d128955eba6a0` | PASS | After Navigate up close: applied Ionic-only result [4,2,5] unchanged; draft discarded. |
| E06-repeat-open | `306b8769ac4ca04d204fe68afd8e4e8e842e1bf5f66a5e66e8df7e2cd64ed313` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-repeat-reopen | `306b8769ac4ca04d204fe68afd8e4e8e842e1bf5f66a5e66e8df7e2cd64ed313` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-setup-clear | `b06e240b30b93e2db0835be1e26f7d48b173d331a57cb6f1b6fcde1f46f19287` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-setup-ionic | `306b8769ac4ca04d204fe68afd8e4e8e842e1bf5f66a5e66e8df7e2cd64ed313` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-setup-open | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E07-change-design | `26fc52798ee8a496638e2e07a1bbd4c87516d40ca6801813a88d5e502861804c` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E07-reopen-discarded | `306b8769ac4ca04d204fe68afd8e4e8e842e1bf5f66a5e66e8df7e2cd64ed313` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E07-repeat-change | `26fc52798ee8a496638e2e07a1bbd4c87516d40ca6801813a88d5e502861804c` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E07-repeat-reopen | `306b8769ac4ca04d204fe68afd8e4e8e842e1bf5f66a5e66e8df7e2cd64ed313` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E07-repeat-system-close | `5917aecf452afddbccbb5c60edc37306140f10800bfa00602b5d128955eba6a0` | PASS | Byte-identical to E06-repeat-close. After Navigate up close: applied Ionic-only result [4,2,5] unchanged; draft discarded. |
| E07-system-close | `bf87438babf5ee2f68da3b279f1984c7d62bdfd272c1620b16cd76b7b14ad71b` | FAIL | Byte-identical to E06-known-applied. CONFIRMED E06.apply-after-bottom-scroll: schedule controls render but no rows, headings or empty message after applying Ionic-only from the bottom of the full list. |
| E07-verify-close | `bf87438babf5ee2f68da3b279f1984c7d62bdfd272c1620b16cd76b7b14ad71b` | FAIL | Byte-identical to E06-known-applied. CONFIRMED E06.apply-after-bottom-scroll: schedule controls render but no rows, headings or empty message after applying Ionic-only from the bottom of the full list. |
| E07-viewport-all | `5917aecf452afddbccbb5c60edc37306140f10800bfa00602b5d128955eba6a0` | PASS | Byte-identical to E06-repeat-close. After Navigate up close: applied Ionic-only result [4,2,5] unchanged; draft discarded. |
| E07-viewport-favorites | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E08-change-draft-no-dismiss-affordance | `26fc52798ee8a496638e2e07a1bbd4c87516d40ca6801813a88d5e502861804c` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E08-close-supported-header | `5917aecf452afddbccbb5c60edc37306140f10800bfa00602b5d128955eba6a0` | PASS | Byte-identical to E06-repeat-close. After Navigate up close: applied Ionic-only result [4,2,5] unchanged; draft discarded. |
| E09-deselect-change | `26fc52798ee8a496638e2e07a1bbd4c87516d40ca6801813a88d5e502861804c` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E09-deselect-close | `5917aecf452afddbccbb5c60edc37306140f10800bfa00602b5d128955eba6a0` | PASS | Byte-identical to E06-repeat-close. After Navigate up close: applied Ionic-only result [4,2,5] unchanged; draft discarded. |
| E09-deselect-draft-empty | `b06e240b30b93e2db0835be1e26f7d48b173d331a57cb6f1b6fcde1f46f19287` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E09-deselect-reopen-ionic | `306b8769ac4ca04d204fe68afd8e4e8e842e1bf5f66a5e66e8df7e2cd64ed313` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E09-reset-change | `26fc52798ee8a496638e2e07a1bbd4c87516d40ca6801813a88d5e502861804c` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E09-reset-close | `5917aecf452afddbccbb5c60edc37306140f10800bfa00602b5d128955eba6a0` | PASS | Byte-identical to E06-repeat-close. After Navigate up close: applied Ionic-only result [4,2,5] unchanged; draft discarded. |
| E09-reset-draft-empty | `b06e240b30b93e2db0835be1e26f7d48b173d331a57cb6f1b6fcde1f46f19287` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E09-reset-open | `306b8769ac4ca04d204fe68afd8e4e8e842e1bf5f66a5e66e8df7e2cd64ed313` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E09-reset-reopen-ionic | `306b8769ac4ca04d204fe68afd8e4e8e842e1bf5f66a5e66e8df7e2cd64ed313` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F-baseline-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F-baseline-close | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F-baseline-favorites | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F-baseline-launcher | `3e73831f9a3bca8ae4c315ffa0a634fa085d4ac7231d096ee0671da787d630c4` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F-baseline-tracks | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F-connect | `2ae9d9e2aa42daafb69a49c36fb16eb11895a73b1ab52411e643b4a104a564fb` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F-teardown-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-add-action1 | `c07a0d5d0892cd6a21118b99459d5a226840a1d186dbfaef07ac30d29c4afd7d` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-add-ok | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-add-reveal1 | `b82bce2a01b0bd77326b49b6d16c0d9cace9a52899761861d285845811c3541b` | PASS | Breakfast row swiped left; Favorite action panel revealed on the right; other rows closed. |
| F01-added-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-added-favorites | `f91e67ad7c2a92cff9405dcbcd0f6e86cdbe7bd33474c78d860672e9898ef4b8` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-duplicate-action1 | `da9f2da53ac5c28f5f99573f925baf2c7d5ac4a8a5bbfecb5f8af42eb0ae61ba` | PASS | "Favorite already added" alert with Cancel/Remove from the swipe action. |
| F01-duplicate-cancel-membership | `f91e67ad7c2a92cff9405dcbcd0f6e86cdbe7bd33474c78d860672e9898ef4b8` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-duplicate-cancel | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-duplicate-remove-action | `a7f7d839e017ee4bdf8340ac9fc1d67ac020f1bca7b0fa898d6c586b9208b0f2` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-duplicate-remove-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-duplicate-remove-confirm | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-duplicate-remove-empty | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-duplicate-remove-reveal | `b82bce2a01b0bd77326b49b6d16c0d9cace9a52899761861d285845811c3541b` | PASS | Byte-identical to F01-add-reveal1. Breakfast row swiped left; Favorite action panel revealed on the right; other rows closed. |
| F01-duplicate-reveal1 | `b82bce2a01b0bd77326b49b6d16c0d9cace9a52899761861d285845811c3541b` | PASS | Byte-identical to F01-add-reveal1. Breakfast row swiped left; Favorite action panel revealed on the right; other rows closed. |
| F01-readd-action | `57113f37a0ce5711c39afd90de91e4a51ffe3fdf3e2fbbb169591cc7f71e6dd5` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-readd-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-readd-ok | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-readd-reveal | `b82bce2a01b0bd77326b49b6d16c0d9cace9a52899761861d285845811c3541b` | PASS | Byte-identical to F01-add-reveal1. Breakfast row swiped left; Favorite action panel revealed on the right; other rows closed. |
| F01-removal-action | `1b81bd947e790c68ad14bf72e51a67c0ffc4d040c4718287347c7ef49c4dc8c7` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-removal-cancel | `f91e67ad7c2a92cff9405dcbcd0f6e86cdbe7bd33474c78d860672e9898ef4b8` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-removal-confirm-action | `35949e331b2cbb827d370dda2dd6c40f18cca71fc3f42bc049bb948abc69c7b3` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-removal-confirm-reveal | `08c5ecb1a86c6cac154a00cb9166f28e5015f0aaca6e12f5caad4e18e2751c2c` | PASS | Favorites mode: Breakfast row revealed with Remove action. |
| F01-removal-confirm | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-removal-mode | `f91e67ad7c2a92cff9405dcbcd0f6e86cdbe7bd33474c78d860672e9898ef4b8` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-removal-reveal | `08c5ecb1a86c6cac154a00cb9166f28e5015f0aaca6e12f5caad4e18e2751c2c` | PASS | Byte-identical to F01-removal-confirm-reveal. Favorites mode: Breakfast row revealed with Remove action. |
| F02-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F02-diagonal-left | `c29b9149ab8fd4a2966e34207a0d11ffe5c7d46101afa2f425cf73149c665148` | FAIL | CONFIRMED: after input swipe 800,1700→300,1100 the 10:00 am Migrating to Ionic row is revealed (Favorite panel) and the list did not scroll. No favorite change, no navigation. Adjudicated D5: known gesture-ambiguity limitation. |
| F02-diagonal-right | `41a3cbfbd4b188ed96c7113b1442d54f4886ac9aef163c28faa7652275b3c80f` | PASS | Byte-identical to F02-vertical: diagonal-right neither scrolled nor revealed; vertical drag result shown. |
| F02-favorites-unchanged-empty | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F02-vertical | `41a3cbfbd4b188ed96c7113b1442d54f4886ac9aef163c28faa7652275b3c80f` | PASS | Byte-identical to F02-diagonal-right. Byte-identical to F02-vertical: diagonal-right neither scrolled nor revealed; vertical drag result shown. |
| F03-action4-no-navigation | `afc02db6deb22ac002cea6b93101ec7830cf852aac5a0b96932cffeae38300d8` | PASS | Favorite Added alert from University of Ionic swipe action; still on the schedule (no navigation). |
| F03-action4-ok | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03-all-reset-position | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03-closed-row-detail4 | `8051a1065487bfc9ed0af1faaafe34b23e4c63262e1830b5b43e43db00136ca9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03-detail-return | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03-open-row-tap-closes | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03-open-row-tap-reveal4 | `caeb719ad4a5a7e8a26518a3c86660439acf85972c48cd3f85760eaa4afcfa4b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03-reveal4 | `caeb719ad4a5a7e8a26518a3c86660439acf85972c48cd3f85760eaa4afcfa4b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-action20-ok | `61244febdb53b78f197962ab441b24708e880807bf2817a3b223e86f13c72ea0` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-action20 | `76139f1d0f6fee5353660937827f9e2609bf6f69a53a2cbacdb1cd2d240f9c43` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-exact-membership | `a3424fb64a722ccaecaaa6cd8cb0b00fc328b85606361233c790b7514743d874` | PASS | Favorites exactly [4,20]: University of Ionic and Mobile States with Remove. |
| F04-open-other20 | `e88aa13fe78d62484d8c73f8bd9bd17900d2fa2342fde2735f5b2e9deb4d5f2e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-open-row1 | `b82bce2a01b0bd77326b49b6d16c0d9cace9a52899761861d285845811c3541b` | PASS | Byte-identical to F01-add-reveal1. Breakfast row swiped left; Favorite action panel revealed on the right; other rows closed. |
| F04-returned-detail-close | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-returned-row1-detail | `33c8b3d78896051ebd8d961f7fd6961d8140069c241cb8239a25d55151d3ea73` | PASS | Byte-identical to D01-breakfast. Breakfast (ID 1) detail: Food, 8:00–9:00 am, Dining Hall; no description block and no "undefined". |
| F04-scroll-away1 | `0dd85c1c5bcb548959a9a7b4bc3f9bdda3c82dcb2423889dc621b050ef9e2cf2` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-scroll-away2 | `e1065eef6124e8cce54e12cecb5fb6b3c34e0f0ad92dc07311177d024a71505b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-scroll-away3 | `1d48baa74bfd13fbe4ce0822ec2619752034d3d858f08e2e64c483de831254a6` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-scroll-away4 | `2aa4c583666cbf1c4793e46c8b32ef934691ac114ae21b6610d5f46e659056b6` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-scroll-away5 | `bf0bd448a745c8f6c82a94ce486340f9e03aad3417a07e58d2cc56515311f750` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-scroll-away6 | `61244febdb53b78f197962ab441b24708e880807bf2817a3b223e86f13c72ea0` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-scroll-back1 | `2496945c84bb12a1f6947570410dee7a034a266ef4909e8fb7a2a9f193cb7bd2` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-scroll-back2 | `e85c7955c6f960c1f6018705c948504f51de2b35de95588c9f17293ee8cd25a4` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-scroll-back3 | `6e65a2ea7d6671338f33ee42dbc8c3ce1420a95aebf8c8d32169b65978157b07` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-scroll-back4 | `e2def969c294405b62781cf7bf907868bdc65b2083793392b5e03b94df7b7507` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-scroll-back5 | `5c226bf9ca02dc3924505e06aad079bf46d56f36828438ad758117fb663de2ec` | PASS | Scrolling back toward the top: rows render closed (Getting Started, Ionic Tooling, Migrating to Ionic). |
| F04-scroll-back6 | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-scroll-back7 | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-button-add-ok | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-button-add1 | `4bd22a0fd4e4e6b61cfbad1b00f3995c63e5d3d067940f5f205dc1aa01a48a92` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-button-duplicate-again | `38696923c08a9f62f475ebbffac1b551de5d00832795b8869a3871b6e37909f6` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-button-duplicate-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-button-duplicate-cancel | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-button-duplicate-empty | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-button-duplicate-preserved | `f91e67ad7c2a92cff9405dcbcd0f6e86cdbe7bd33474c78d860672e9898ef4b8` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-button-duplicate-remove | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-button-duplicate | `b4507c9477f4a2b1aa2a164ad6a42d5379ebe0b1fa3cabcd763e6cf5d28c4070` | PASS | "Favorite already added" alert from the accessible Favorite button (no swipe). |
| F05-button-readd-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-button-readd-ok | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-button-readd | `ca582838512532dd98b688eeff2cc41e7f011ef85b39529204b8622ae22c7022` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-button-remove-again | `8fb86992aff6e73fca28f375f0a12e78314191a69c2d2d95860258c110996211` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-button-remove-cancel | `f91e67ad7c2a92cff9405dcbcd0f6e86cdbe7bd33474c78d860672e9898ef4b8` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-button-remove-confirm | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-button-remove-mode | `f91e67ad7c2a92cff9405dcbcd0f6e86cdbe7bd33474c78d860672e9898ef4b8` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-button-remove | `8fb86992aff6e73fca28f375f0a12e78314191a69c2d2d95860258c110996211` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-clean-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-cleanup-confirm20 | `2b0bb3786cc6953bb2cc92245cdbb48ec53cfa7d4b82cb088c079eda8b2bfacf` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-cleanup-confirm4 | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-cleanup-remove20 | `d2854d9a3e64ae61f55884f457289fa09f3ae14c51bf39b7e3bda6e06efecf1c` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-cleanup-remove4 | `67dff235ac4a4fd43093b24bacd5285f27efdde332934fbfc7efc31fc9680aa6` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |

## G1b (run g-settings1b)

Frames: 279 PNGs, 127 distinct by SHA-256. Results: NOT INSPECTED 253, LIMITED 1, BLOCKED 1, PASS 12, FAIL 12. Viewed: the G01 failure pair, and the most demanding presentation frames for G05 (font 1.3 and 2.0), G06 (density 480) and G07 (dark). Settings entry/final records match and were re-read on the device by the coordinator (font 1.0, density 420, night no, no accessibility services).

Coordinator presentation verdicts (supersede the executor's pending BLOCKED presentation entries):
- G05: FAIL at font 2.0 (search field clips its text; fixed height). PASS at 1.3. Detail, filter modal and alerts PASS at both scales.
- G06: PASS at density 480.
- G08: PASS for system bars and list scroll edges (keyboard insets not assessable: no on-screen keyboard, see D6).
- G07: FAIL (native header and status bar stay light in dark mode). Content, selected states, inputs, rows, modal and dialogs are readable.
- G01: BLOCKED (environment, D6). G02 row/favorite FAIL is the known F-1 case.

| Frame | SHA-256 | Result | Observed |
|---|---|---|---|
| G01-baseline-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-baseline-close | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-baseline-favorites | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-baseline-filter | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-connect | `3d8c93f5bde1d8b90156c8251c11adf101caa508715f67dedd67cec7bbd676ad` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-edit | `76c2cfd7d3c3cadff65c1e2beb9f7b44e0d0e1b6115216133e99294a9a8ae5ca` | LIMITED | Field "Ioni"; the only IME surface is Gboard's floating toolbar (left pill), not an on-screen keyboard. Host keyboard attached; see D6. |
| G01-focus | `b82a9bc7967d5f8243ca1c246557909efad0fa177f2417104794bee7431df9b6` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-keyboard-back | `f4b5477900b3c72ad8f5914435cd78ca07400d290b3884c0e25ea76080b311d6` | BLOCKED | Android home after one Back. Environment: the floating toolbar IME does not consume Back, so Back reached the app root. Recorded BLOCKED (environment) per D6; rerun in G2 with the full keyboard. |
| G01-launcher-retry | `1efdf6295d29deb36b6ce50ff56852759805eee879773683aea6fe02c592517a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-schedule-ready | `a4a1d38fe1f5c67a71bc783acc8664eac3b67377fdda260cd08f11b6645163aa` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-type | `46a578a5b350af6a4cc9cf03b059ff95b893bba44eff6b12682b72acc6c25420` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-baseline-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-baseline-close | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-baseline-favorites | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-baseline-filter | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-connect | `d713aea6df1fe332300abe7c73bea227688a04d66b216a6ac4d89d55fbbc2556` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-favorite-first | `8adfe8aacf5cdebd8079ac51e6b40487727aafb8dfdb741b94d9358355ff608a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-filter-close | `8adfe8aacf5cdebd8079ac51e6b40487727aafb8dfdb741b94d9358355ff608a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-filter-first | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-focus-favorite | `307f93ddf38d139d45a6786f408b7946b7d9c23942cb727ee44ff93d9805cdcf` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-focus-filter | `c9317ad75c827fdf9546f04b2053f936add3f62679906e9895bf542373fd8614` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-focus-mode | `10d227942a61bf69e11cf3ceb8e539ecf4433b07ece0435fd45c84ea3d4a5446` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-focus-row | `c873b0bd3c41f7bb371c36913207abb06df78e3f93aaa22915550d1c203ef91d` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-mode-first | `911998f0687e7a62a98e2edd07623467fed3631c93f1149d0507ede156247458` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-mode-return-all | `2a8b68789182f00c7f7042eb06b3dc879761460210eb5db19e029174aeca9c93` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-ready | `a4a1d38fe1f5c67a71bc783acc8664eac3b67377fdda260cd08f11b6645163aa` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-row-first | `1b6f2aa335ada1a29c19e59f30bc668d3fbf58b01362ee5ae58597cfaae2b468` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-type-row | `d6f8cb0d7e8c5ceefa871c0a460abedd0635e82408de2d8d2e511f0e09334384` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-alert-ok | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-all-again | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-all-tracks | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-baseline-close | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-connect | `040fa1640925e8d7bcf40505e737e8dc40a6fcd2c25530284353bbcd9e0bc2a0` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-detail-return | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-detail-scroll | `409b69a20d283746eb152aae45cf770f06ff4eb57eba21fe6d1216a6f1f4b63e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-detail4 | `3a73fa3faf9c88c86b375398acab1570276e9170a867fecb39cacc83fe66e640` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-empty-favorites | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-favorite-alert | `c103e6365cb3e2421aed0dfe11fb3e04b78dae514bd77768b7180211bb47517a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-favorites-empty | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-filter-bottom | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-filter-deselect | `b06e240b30b93e2db0835be1e26f7d48b173d331a57cb6f1b6fcde1f46f19287` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-filter-done | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-filter-reset | `b06e240b30b93e2db0835be1e26f7d48b173d331a57cb6f1b6fcde1f46f19287` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-filter-restore-all | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-filter-select | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-filter-top | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-launcher | `fed8150d349371b2f237941d94b060c3939ff18b1fb315fec65c9d553e4a14ad` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-ready | `a4a1d38fe1f5c67a71bc783acc8664eac3b67377fdda260cd08f11b6645163aa` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-return-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-schedule-return-top | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-schedule-scroll | `b2c6867481f8dfb15aef5fe6f0a97a0fbf02d77a6174ce8e2253f20e27699087` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-schedule-top | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-search-Ionic | `46a578a5b350af6a4cc9cf03b059ff95b893bba44eff6b12682b72acc6c25420` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-search-dismiss-first-row | `1b6f2aa335ada1a29c19e59f30bc668d3fbf58b01362ee5ae58597cfaae2b468` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-search-focus | `a69971b035e565d0fcee2eb0a1a576891e7ec46be2ce566f049f78584f6327fe` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.default-selected-favorites | `2b0bb3786cc6953bb2cc92245cdbb48ec53cfa7d4b82cb088c079eda8b2bfacf` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-alert-ok | `bef5c195c4afae407393070e0833a03ee312d8301b9998be4972de84e9b738e9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-all-again | `bef5c195c4afae407393070e0833a03ee312d8301b9998be4972de84e9b738e9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-all-tracks | `cd7c2f5c4978efc8ad8001abdc51c820d5ec3f6fc1d8eee30daa2e8c37ae77bd` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-all | `bef5c195c4afae407393070e0833a03ee312d8301b9998be4972de84e9b738e9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-baseline-close | `bef5c195c4afae407393070e0833a03ee312d8301b9998be4972de84e9b738e9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-connect | `fdac50bae5b1ae18d91de8a004204d4caf71bc6149680f6a41ace28efd9e2096` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-detail-return | `bef5c195c4afae407393070e0833a03ee312d8301b9998be4972de84e9b738e9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-detail-scroll | `fab91a09b57aaca415b9878a20e1cf5a9cdab1717bbe9ea61b9544d6b9b56436` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-detail4 | `d0839ddb25efa0b2f04788d9497c0ded49019a0aff6a7bb58eb88569fa7599fd` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-empty-favorites | `39eb9d5b5cbe498b0309a705d563367749830bbb3bb27910e6a42502f7e9d43a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-favorite-alert | `773a878cd2508114eb1362430c9f7cc2ffca2cd015edb9b75ab8292bd63e099d` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-favorites-empty | `39eb9d5b5cbe498b0309a705d563367749830bbb3bb27910e6a42502f7e9d43a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-filter-bottom | `c59c0692991c2d57e7fe5db3ae9502d3e820621d41c8c260572546d6a8cb77f3` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-filter-deselect | `4fe1270152c4c333feb17dd07fe1a5cf0bdb20fdd755265f8a2ca1689bc23ccd` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-filter-done | `bef5c195c4afae407393070e0833a03ee312d8301b9998be4972de84e9b738e9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-filter-reset | `4fe1270152c4c333feb17dd07fe1a5cf0bdb20fdd755265f8a2ca1689bc23ccd` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-filter-restore-all | `cd7c2f5c4978efc8ad8001abdc51c820d5ec3f6fc1d8eee30daa2e8c37ae77bd` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-filter-return1 | `cd7c2f5c4978efc8ad8001abdc51c820d5ec3f6fc1d8eee30daa2e8c37ae77bd` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-filter-scroll1 | `c59c0692991c2d57e7fe5db3ae9502d3e820621d41c8c260572546d6a8cb77f3` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-filter-select | `cd7c2f5c4978efc8ad8001abdc51c820d5ec3f6fc1d8eee30daa2e8c37ae77bd` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-filter-top | `cd7c2f5c4978efc8ad8001abdc51c820d5ec3f6fc1d8eee30daa2e8c37ae77bd` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-launcher | `3b71f676987d4d2cd8e816ec4db85b8482793ffc006015f036b2ecf709f50a15` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-ready | `f83cb185e7a5da0d65a163674cff13520c38a44d7ce7d1ef773e16c5b4d9d839` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-return-all | `bef5c195c4afae407393070e0833a03ee312d8301b9998be4972de84e9b738e9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-schedule-return-top | `bef5c195c4afae407393070e0833a03ee312d8301b9998be4972de84e9b738e9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-schedule-scroll | `b2e8e6a783c66eae06c813c7cd14c2fa813a933504f6f8758251732a1179646b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-schedule-top | `bef5c195c4afae407393070e0833a03ee312d8301b9998be4972de84e9b738e9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-search-Ionic | `94e17b282f56c69659a1aa64bd89ac47b7c331f3555658d53ecaa7b7d74d7ad3` | PASS | Font 1.3: search text "Ionic" fully visible; mode, Filter and rows readable. |
| G05.font1-3-search-dismiss-first-row | `7a8c0bab4dc5635d353689729cb0d6874bb272d0929432564f81f03630394082` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-search-focus | `cae657f17359e924a9620ae4950b5305e77079b4afa9127d84a0ab287edaa58e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font1-3-selected-favorites | `c835430a062d91064cc2b556c8ea7b4c17f7ba11eb096a4cff0adb196d7461d5` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-alert-ok | `28d3b1b85ac043dc6a0c840406605f1fb863a1ca4c1b78e1df8c18ba98f45805` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-all-again | `6a0425d78d76952e544fa0a28ed419710bbab83fe187d8086749fd45a68a1fa4` | FAIL | Byte-identical to G05.font2-0-all. Font 2.0: search field placeholder "Search sessions" clipped (top half cut off); field keeps a fixed height. Mode buttons wrap to two lines, Filter, headings and rows readable. Native header title does not scale (observation). |
| G05.font2-0-all-tracks | `a9cbfe35ae78200e6d36ef797d7eda8b796a2ae1dc6648c531889b04c699cab9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-all | `6a0425d78d76952e544fa0a28ed419710bbab83fe187d8086749fd45a68a1fa4` | FAIL | Font 2.0: search field placeholder "Search sessions" clipped (top half cut off); field keeps a fixed height. Mode buttons wrap to two lines, Filter, headings and rows readable. Native header title does not scale (observation). |
| G05.font2-0-baseline-close | `6a0425d78d76952e544fa0a28ed419710bbab83fe187d8086749fd45a68a1fa4` | FAIL | Byte-identical to G05.font2-0-all. Font 2.0: search field placeholder "Search sessions" clipped (top half cut off); field keeps a fixed height. Mode buttons wrap to two lines, Filter, headings and rows readable. Native header title does not scale (observation). |
| G05.font2-0-connect | `4dacb5ba707e276666df378fbe63d6d22fd2210a5d1a26248cc934e0d36922eb` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-detail-bottom-all-tracks | `a9cbfe35ae78200e6d36ef797d7eda8b796a2ae1dc6648c531889b04c699cab9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-detail-bottom-all | `6a0425d78d76952e544fa0a28ed419710bbab83fe187d8086749fd45a68a1fa4` | FAIL | Byte-identical to G05.font2-0-all. Font 2.0: search field placeholder "Search sessions" clipped (top half cut off); field keeps a fixed height. Mode buttons wrap to two lines, Filter, headings and rows readable. Native header title does not scale (observation). |
| G05.font2-0-detail-bottom-baseline-close | `6a0425d78d76952e544fa0a28ed419710bbab83fe187d8086749fd45a68a1fa4` | FAIL | Byte-identical to G05.font2-0-all. Font 2.0: search field placeholder "Search sessions" clipped (top half cut off); field keeps a fixed height. Mode buttons wrap to two lines, Filter, headings and rows readable. Native header title does not scale (observation). |
| G05.font2-0-detail-bottom-connect | `a455ae0cd1a46a936a64040a05db83859dfe2101dd60e4feadc7f1615c09715d` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-detail-bottom-empty-favorites | `233378724eb78e1d24afb4411489b6b9799ef12809b85296a0a2c388b8bbce30` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-detail-bottom-launcher | `c8bb1ec2d293b5e64898a8393252e68757bf9000683a4b9e0fe6dfcb1e7eaefc` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-detail-bottom-open4 | `7cdfa1c80c6a2dd4e69afc14c3633dfae425338646ac0a7945246ea10169f663` | PASS | Byte-identical to G05.font2-0-detail4. Font 2.0 detail: title, track and full description wrap and stay readable. |
| G05.font2-0-detail-bottom-ready | `c8e3e1a1e572b744dc10c3baf2ffb2b72dbe701dcd2a76e51a0730b06033cb48` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-detail-bottom-return | `6a0425d78d76952e544fa0a28ed419710bbab83fe187d8086749fd45a68a1fa4` | FAIL | Byte-identical to G05.font2-0-all. Font 2.0: search field placeholder "Search sessions" clipped (top half cut off); field keeps a fixed height. Mode buttons wrap to two lines, Filter, headings and rows readable. Native header title does not scale (observation). |
| G05.font2-0-detail-bottom-scroll1 | `ef5d56207f9926c3cc576a79e3fa2cf427cf0c1c34081e20940ee80d2b7c26b3` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-detail-bottom-scroll2 | `f4eb37d07218a219acccc90d38cf7d7b7da370421a43c036e6cd8f638145dae3` | PASS | Font 2.0 detail bottom: time, room, Add to favorites and all action buttons reachable by scrolling, no overlap. |
| G05.font2-0-detail-return | `56b1f49067ce30162813341a709476776757c42599724d7798e846108363523b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-detail-scroll | `90e860380a008790919872bda5a9306aa828416fed5ff378d8f622dd9a30a36b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-detail4 | `7cdfa1c80c6a2dd4e69afc14c3633dfae425338646ac0a7945246ea10169f663` | PASS | Font 2.0 detail: title, track and full description wrap and stay readable. |
| G05.font2-0-empty-favorites | `233378724eb78e1d24afb4411489b6b9799ef12809b85296a0a2c388b8bbce30` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-favorite-alert | `cf4aa9b9dfc0a5e6ca9276e022209e5c29d789e1e0621de0219b057e2bf1e507` | PASS | Font 2.0: Favorite Added alert with OK readable and reachable. |
| G05.font2-0-favorites-empty | `233378724eb78e1d24afb4411489b6b9799ef12809b85296a0a2c388b8bbce30` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-filter-bottom | `9d7851c8bdb5864a0c1e7d145a889bb3f6b249a8ed139ea1b583e6bfe412b17d` | PASS | Font 2.0 filter modal: Reset/Deselect All/Select All/Done wrap to two rows, all reachable; tracks to Workshop visible at bottom. |
| G05.font2-0-filter-deselect | `76c8c7b1a8d690be353361bef7eedd10c8809d644a4c1a26490e2dd79c0833b0` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-filter-done | `56b1f49067ce30162813341a709476776757c42599724d7798e846108363523b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-filter-reset | `76c8c7b1a8d690be353361bef7eedd10c8809d644a4c1a26490e2dd79c0833b0` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-filter-restore-all | `a9cbfe35ae78200e6d36ef797d7eda8b796a2ae1dc6648c531889b04c699cab9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-filter-return1 | `a9cbfe35ae78200e6d36ef797d7eda8b796a2ae1dc6648c531889b04c699cab9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-filter-scroll1 | `9d7851c8bdb5864a0c1e7d145a889bb3f6b249a8ed139ea1b583e6bfe412b17d` | PASS | Byte-identical to G05.font2-0-filter-bottom. Font 2.0 filter modal: Reset/Deselect All/Select All/Done wrap to two rows, all reachable; tracks to Workshop visible at bottom. |
| G05.font2-0-filter-select | `a9cbfe35ae78200e6d36ef797d7eda8b796a2ae1dc6648c531889b04c699cab9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-filter-top | `a9cbfe35ae78200e6d36ef797d7eda8b796a2ae1dc6648c531889b04c699cab9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-launcher | `be11f003741ad93e6729627465f576e64cd260ac558b20bd95a00d0e62428603` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-ready | `c8e3e1a1e572b744dc10c3baf2ffb2b72dbe701dcd2a76e51a0730b06033cb48` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-return-all | `6a0425d78d76952e544fa0a28ed419710bbab83fe187d8086749fd45a68a1fa4` | FAIL | Byte-identical to G05.font2-0-all. Font 2.0: search field placeholder "Search sessions" clipped (top half cut off); field keeps a fixed height. Mode buttons wrap to two lines, Filter, headings and rows readable. Native header title does not scale (observation). |
| G05.font2-0-schedule-return-top | `56b1f49067ce30162813341a709476776757c42599724d7798e846108363523b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-schedule-scroll | `56b1f49067ce30162813341a709476776757c42599724d7798e846108363523b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-schedule-top | `6a0425d78d76952e544fa0a28ed419710bbab83fe187d8086749fd45a68a1fa4` | FAIL | Byte-identical to G05.font2-0-all. Font 2.0: search field placeholder "Search sessions" clipped (top half cut off); field keeps a fixed height. Mode buttons wrap to two lines, Filter, headings and rows readable. Native header title does not scale (observation). |
| G05.font2-0-search-Ionic | `9906060dc2f908f62a0ef623684aa9da4e73cd87908b094cad2d44a93e2a0a8f` | FAIL | Font 2.0: typed "Ionic" clipped in the search field (top half cut off). Rest of the schedule readable; IME toolbar covers left edge. |
| G05.font2-0-search-dismiss-first-row | `1b7d28be0318a6ed2dacf2f092ca2578329b1d2453eeab43dcd0a0586f5bd234` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-search-focus | `cbadd7a6ae51cdabbd05a7821d2041043d1b49bc222cfce38cb9804577830618` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-seek-favorite4-1 | `28d3b1b85ac043dc6a0c840406605f1fb863a1ca4c1b78e1df8c18ba98f45805` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05.font2-0-selected-favorites | `f48efe8a1ba06df28dede257d38b331867f1888c75bfefff34597568db878dca` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-alert-ok | `3a70a42b900cf3289a7863eb8c3683d81d958bae8b13da1f8b1f7fe4c29e9845` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-all-again | `3a70a42b900cf3289a7863eb8c3683d81d958bae8b13da1f8b1f7fe4c29e9845` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-all-tracks | `ec251ca4fb03b44e3d417f6e454c0541d3fd55509a8c029728b0dcdf8f4c2b14` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-all | `3a70a42b900cf3289a7863eb8c3683d81d958bae8b13da1f8b1f7fe4c29e9845` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-baseline-close | `3a70a42b900cf3289a7863eb8c3683d81d958bae8b13da1f8b1f7fe4c29e9845` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-connect | `44be410ba1c78a3e4b7b26405ca637ab3641c6fa24658e1ed15d40f4ddf930a3` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-detail-return | `3a70a42b900cf3289a7863eb8c3683d81d958bae8b13da1f8b1f7fe4c29e9845` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-detail-scroll | `9322820f4cb7f481699d3e1e2ff0f143e53ee0c323bd6d6b35e50850496b95b7` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-detail4 | `b1d9a957ee4ffc6f25111884324b48d62e2f37623679884608528e0004a63c24` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-empty-favorites | `a970a714552c270c07649ce62de402d1ae47b26daa80401804342d1d4a94d019` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-favorite-alert | `596ad7317d72730b81cce77e6140135e076cb31b37207588916045ab4a66994f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-favorites-empty | `a970a714552c270c07649ce62de402d1ae47b26daa80401804342d1d4a94d019` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-filter-bottom | `27497ae1aa9716575393bcf48c909e455cc8d3b967cd4f6dcdfc955aa1c0e601` | PASS | Density 480: filter actions wrap (Done on second row), all tracks reachable, no clipping. |
| G06.density480-filter-deselect | `948c5a58288348830cc84a417618ae28e90c0259634131849472ede1ba235616` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-filter-done | `3a70a42b900cf3289a7863eb8c3683d81d958bae8b13da1f8b1f7fe4c29e9845` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-filter-reset | `948c5a58288348830cc84a417618ae28e90c0259634131849472ede1ba235616` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-filter-restore-all | `ec251ca4fb03b44e3d417f6e454c0541d3fd55509a8c029728b0dcdf8f4c2b14` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-filter-return1 | `ec251ca4fb03b44e3d417f6e454c0541d3fd55509a8c029728b0dcdf8f4c2b14` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-filter-scroll1 | `27497ae1aa9716575393bcf48c909e455cc8d3b967cd4f6dcdfc955aa1c0e601` | PASS | Byte-identical to G06.density480-filter-bottom. Density 480: filter actions wrap (Done on second row), all tracks reachable, no clipping. |
| G06.density480-filter-select | `ec251ca4fb03b44e3d417f6e454c0541d3fd55509a8c029728b0dcdf8f4c2b14` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-filter-top | `ec251ca4fb03b44e3d417f6e454c0541d3fd55509a8c029728b0dcdf8f4c2b14` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-launcher | `21f422da6548b9505642222888aed508643a12c620d7346e1fef1ae531e6ead0` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-ready | `58ed0a31b2d0d4a657269d9977edc57f9e5dd645ff205d92998b945f7030970b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-return-all | `3a70a42b900cf3289a7863eb8c3683d81d958bae8b13da1f8b1f7fe4c29e9845` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-schedule-return-top | `3a70a42b900cf3289a7863eb8c3683d81d958bae8b13da1f8b1f7fe4c29e9845` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-schedule-scroll | `83a79481284b7381da136573e6fa5b35b7c530c99ef118be0023b756ec6eb287` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-schedule-top | `3a70a42b900cf3289a7863eb8c3683d81d958bae8b13da1f8b1f7fe4c29e9845` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-search-Ionic | `44e384b667c70f73e386f2293e0f24c5980e9696c3a72f8bda59c3b3761de91e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-search-dismiss-first-row | `d17e8aed88f86ed0c258b22800e3df1f93ccde3305ff9885196c2bb6fe46164f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-search-focus | `c9d4ede12b982e4435c55f249f1eb5e71889c50e8d442ab587d56ae68262b4ed` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G06.density480-selected-favorites | `5e4240717db7a34ae0aaa638e53a90b65d86ad70ce395ae58c19a617cbed797d` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07-light-restored-open | `1016a41b88e7bfe03570873ece53375da47ce67a5f2e69f605bf352289df898f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-alert-ok | `b00f55bd6c71b8e7e4e789feb9e0dbb95c49e1004b5f59fa8607b2eff30bcf3d` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-all-again | `b00f55bd6c71b8e7e4e789feb9e0dbb95c49e1004b5f59fa8607b2eff30bcf3d` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-dark-after-switch | `b00f55bd6c71b8e7e4e789feb9e0dbb95c49e1004b5f59fa8607b2eff30bcf3d` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-detail-return | `b00f55bd6c71b8e7e4e789feb9e0dbb95c49e1004b5f59fa8607b2eff30bcf3d` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-detail-scroll | `258a262df5e089ced8d5cc575766d9c6df49d49942fa641a1faeceb4c8248157` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-detail4 | `11f0e39718b2ca4885d0945197af8903146de6b603f302905485a0c744962c0a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-favorite-alert | `193093b499029933cd5e1c406d8540dc816f32e68b611378ac758611b034df59` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-favorites-empty | `e84b9aa64ac4e427200428c07dc238736ea158b39745e4f940ae088895429857` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-filter-bottom | `6f85355b216183cbdafb0243e60a1f59e543a80f61c3ccc624a5592959844892` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-filter-deselect | `38afac5bde77c4cb781e010636ce17fa45a4d722c9525e24da46a0cb5ad62cbf` | FAIL | Dark mode filter modal: dark content, readable unchecked tracks and actions; native header stays white (same theme inconsistency). |
| G07.dark-filter-done | `b00f55bd6c71b8e7e4e789feb9e0dbb95c49e1004b5f59fa8607b2eff30bcf3d` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-filter-reset | `38afac5bde77c4cb781e010636ce17fa45a4d722c9525e24da46a0cb5ad62cbf` | FAIL | Byte-identical to G07.dark-filter-deselect. Dark mode filter modal: dark content, readable unchecked tracks and actions; native header stays white (same theme inconsistency). |
| G07.dark-filter-restore-all | `6f85355b216183cbdafb0243e60a1f59e543a80f61c3ccc624a5592959844892` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-filter-select | `6f85355b216183cbdafb0243e60a1f59e543a80f61c3ccc624a5592959844892` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-filter-top | `6f85355b216183cbdafb0243e60a1f59e543a80f61c3ccc624a5592959844892` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-light-before-switch | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-open-light-all-tracks | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-open-light-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-open-light-baseline-close | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-open-light-connect | `d44bac4ccc74c71f030ca02611bb748e990a952dae59e4537ff7990e92d737b2` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-open-light-empty-favorites | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-open-light-launcher | `4ab722d7f1107e4d264507ef607c8569529bc4faa90aa91360ddd8ddd914986e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-open-light-ready | `a4a1d38fe1f5c67a71bc783acc8664eac3b67377fdda260cd08f11b6645163aa` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-return-all | `b00f55bd6c71b8e7e4e789feb9e0dbb95c49e1004b5f59fa8607b2eff30bcf3d` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-schedule-return-top | `b00f55bd6c71b8e7e4e789feb9e0dbb95c49e1004b5f59fa8607b2eff30bcf3d` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-schedule-scroll | `13eb7e0a91d6302c052d3bc6c06e854df6a87d4a6c6c9e264ef89e441eb8412e` | FAIL | Dark mode: content area dark and readable (rows, headers, Favorite buttons, selected All sessions), but the native header and status bar stay white with dark text: the header does not follow the theme. |
| G07.dark-schedule-top | `b00f55bd6c71b8e7e4e789feb9e0dbb95c49e1004b5f59fa8607b2eff30bcf3d` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-search-Ionic | `416528ff254043d89b48ecc45f8060447a1d120a20064610043ecb950f902c6e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-search-dismiss-first-row | `2bfe00545cbcd4c6676a587d49ead9d71120afd5ac453d0f8177751a2720c698` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-search-focus | `a1ba2a0f49c7346073259df5dd8d22efc4c3c4e9da3a0a53394ba694d02da249` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07.dark-selected-favorites | `a7ab7d688e3bed801dabc90f7fc5218d1e63eba8d9ab4cec4c6518d7e6a7217b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-all-tracks | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-baseline-close | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-connect | `ef710ed289a1decea88b839c585fab702e103fe4dbfa88eebb4deca068cc4cae` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-empty-favorites | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-filter-bottom-scroll | `e3f29eeaeaaf6e2f3c7c0d810053f1ed77f26a5fdd4a2b3bb916b3ad92a1ff3e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-filter-bottom | `e3f29eeaeaaf6e2f3c7c0d810053f1ed77f26a5fdd4a2b3bb916b3ad92a1ff3e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-filter-close | `1cdc9f1801944f3faaa8179932dfd7114f595ac854a0ec7175c3b148ca67038e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-filter-top | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-keyboard-Ionic | `46a578a5b350af6a4cc9cf03b059ff95b893bba44eff6b12682b72acc6c25420` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-keyboard-first-row-dismiss | `1b6f2aa335ada1a29c19e59f30bc668d3fbf58b01362ee5ae58597cfaae2b468` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-launcher | `4f9e66ed0ba59e021db0f3fabcf92e0feb3dd15308971ce1324f983f564057aa` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-list-bottom | `1cdc9f1801944f3faaa8179932dfd7114f595ac854a0ec7175c3b148ca67038e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-list-edge1 | `98b322344c2b254113f14090200a48be58ea32bdff2341cbca79f9b5b74e5682` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-list-edge10 | `1cdc9f1801944f3faaa8179932dfd7114f595ac854a0ec7175c3b148ca67038e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-list-edge11 | `1cdc9f1801944f3faaa8179932dfd7114f595ac854a0ec7175c3b148ca67038e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-list-edge12 | `1cdc9f1801944f3faaa8179932dfd7114f595ac854a0ec7175c3b148ca67038e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-list-edge2 | `b2122259b5c88d16b13b101c7ba51173c226bd29d1744462d5aaf686b2e4ae67` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-list-edge3 | `c65d147040b14112083e4c65c5a8660638671c82713044d91a6a94b7903b45f2` | PASS | Search "Ionic" mid-list: header, search controls and rows clear of the status bar; no overlap. |
| G08-list-edge4 | `1cdc9f1801944f3faaa8179932dfd7114f595ac854a0ec7175c3b148ca67038e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-list-edge5 | `1cdc9f1801944f3faaa8179932dfd7114f595ac854a0ec7175c3b148ca67038e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-list-edge6 | `1cdc9f1801944f3faaa8179932dfd7114f595ac854a0ec7175c3b148ca67038e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-list-edge7 | `1cdc9f1801944f3faaa8179932dfd7114f595ac854a0ec7175c3b148ca67038e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-list-edge8 | `1cdc9f1801944f3faaa8179932dfd7114f595ac854a0ec7175c3b148ca67038e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-list-edge9 | `1cdc9f1801944f3faaa8179932dfd7114f595ac854a0ec7175c3b148ca67038e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-portrait-top | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-query-clear | `1b6f2aa335ada1a29c19e59f30bc668d3fbf58b01362ee5ae58597cfaae2b468` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-ready | `a4a1d38fe1f5c67a71bc783acc8664eac3b67377fdda260cd08f11b6645163aa` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-search-focus | `31ee7774355aadfe76a1d7e5ec0bc0c51c3116f327ebced48c33b50b57f8787d` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-viewport-all | `8adfe8aacf5cdebd8079ac51e6b40487727aafb8dfdb741b94d9358355ff608a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-viewport-favorites | `edb8fdd46fd4578c376cfd3a436eb3b70153aee2edc0c06e9d4d581fad019f25` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08.full-list-all-tracks | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08.full-list-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08.full-list-baseline-close | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08.full-list-connect | `5aed44767b39d037a63792b954841e2f206b5b79b547011d322e168ff808c86b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08.full-list-empty-favorites | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08.full-list-launcher | `0e5224ef05c54af792523e3ffc8f7effee068c7681c8400c19bbcebf823a57c3` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08.full-list-ready | `a4a1d38fe1f5c67a71bc783acc8664eac3b67377fdda260cd08f11b6645163aa` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08.full-list-scroll1 | `84fb480b638131b1bc65c39f555ea933a637ec4c1cd8db8332591cb312839619` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08.full-list-scroll2 | `8ecaa2ff22da84595d363d57c59a8e52f22a5efffdb73e7b7ea63e04def872c5` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08.full-list-scroll3 | `2ed4f9406edbef4af3a6ededbd64a4fc39186f3cb68b6a0efad6f6053f9b0299` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08.full-list-scroll4 | `0160e5aa8f4c128a6dbd3b8e2b252709151489a8da0a380140525f6f14d39105` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08.full-list-scroll5 | `cea9160ca18f0b2bae8a12d11353473c40bd2c4cece3fd663039b719e3f1e10d` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08.full-list-scroll6 | `61244febdb53b78f197962ab441b24708e880807bf2817a3b223e86f13c72ea0` | PASS | End of full list: last row Mobile States and its Favorite button fully visible above the navigation bar. |
| G08.full-list-scroll7 | `61244febdb53b78f197962ab441b24708e880807bf2817a3b223e86f13c72ea0` | PASS | Byte-identical to G08.full-list-scroll6. End of full list: last row Mobile States and its Favorite button fully visible above the navigation bar. |
| G09-add4-ok | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09-add4 | `f9535f2c042f1107cbc229c922179d7244279eef662db8987b86eb043efb48ff` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09-all-after-schedule | `8adfe8aacf5cdebd8079ac51e6b40487727aafb8dfdb741b94d9358355ff608a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09-all-tracks | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09-baseline-close | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09-connect | `5fd8d334be8732fc2f7ed418c6723585ef23620e80f4b830f10bea35d9130cff` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09-dismiss-keyboard-first-row | `1b6f2aa335ada1a29c19e59f30bc668d3fbf58b01362ee5ae58597cfaae2b468` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09-empty-favorites | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09-favorites-after-schedule | `aaef81fad57b1e8ee70c4f68e0fdd7b5ad821a081f25dda15cef6ae2bc9ca92c` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09-final-all | `8adfe8aacf5cdebd8079ac51e6b40487727aafb8dfdb741b94d9358355ff608a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09-final-favorites | `aaef81fad57b1e8ee70c4f68e0fdd7b5ad821a081f25dda15cef6ae2bc9ca92c` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09-focus-search | `b82a9bc7967d5f8243ca1c246557909efad0fa177f2417104794bee7431df9b6` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09-launcher | `302312e8516d6a58a9c0735fa158ecb84fdd68d852b47df985d47e5e46bca52d` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09-query-Ionic | `25df14e90ff27f1e6109875c3708638d77cec4bb88720866b45ddeaba47ec0b0` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09-ready | `a4a1d38fe1f5c67a71bc783acc8664eac3b67377fdda260cd08f11b6645163aa` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09.detail-after | `8051a1065487bfc9ed0af1faaafe34b23e4c63262e1830b5b43e43db00136ca9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09.detail-before | `8051a1065487bfc9ed0af1faaafe34b23e4c63262e1830b5b43e43db00136ca9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09.detail-home | `272f194043004df5ef00fa0e9e269107f6e0f45b4f800a3dc6f4c2169bdacefc` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09.detail-open4 | `8051a1065487bfc9ed0af1faaafe34b23e4c63262e1830b5b43e43db00136ca9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09.detail-single-header-return | `8adfe8aacf5cdebd8079ac51e6b40487727aafb8dfdb741b94d9358355ff608a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09.modal-after | `f0b07e1bdf654383da09175aeafbd9cbdb18428de33655da756d55ca01f25245` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09.modal-before | `f0b07e1bdf654383da09175aeafbd9cbdb18428de33655da756d55ca01f25245` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09.modal-close-after-resume | `8adfe8aacf5cdebd8079ac51e6b40487727aafb8dfdb741b94d9358355ff608a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09.modal-draft-uncheck-design | `f0b07e1bdf654383da09175aeafbd9cbdb18428de33655da756d55ca01f25245` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09.modal-final-close | `8adfe8aacf5cdebd8079ac51e6b40487727aafb8dfdb741b94d9358355ff608a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09.modal-home | `89a0be6fcd0b7d8c98b174a60e918767655b4fdb2ae0fb093cb435d2ad176033` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09.modal-open | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09.modal-reopen-applied | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09.schedule-after | `1b6f2aa335ada1a29c19e59f30bc668d3fbf58b01362ee5ae58597cfaae2b468` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09.schedule-before | `1b6f2aa335ada1a29c19e59f30bc668d3fbf58b01362ee5ae58597cfaae2b468` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G09.schedule-home | `1168e863d1f70a77c835f3a398653450d0fb0d5f2c5101f26ed35258fdcce205` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G1b-teardown-all-tracks | `092b60b0db439daf4f752d8a70c391748c594dc3279141a50bc68e885fcecd6f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G1b-teardown-all | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G1b-teardown-baseline-close | `8c3f8d377581aad3933027e9fe5a498fce0d6a9da4ceba14e129bb9569669675` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G1b-teardown-connect | `78ffd845db4c24d9bb8270a62da408b0498f7bf46d0ef75234e0df45912b9372` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G1b-teardown-empty-favorites | `8ca56c135585041680bbce2c078688592f3198e2274d6cb7cb3201404ddacc85` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G1b-teardown-launcher | `8da700282a2cb214027bf8697a474fc50499d0fb6c467af85c453376302603f4` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G1b-teardown-ready | `a4a1d38fe1f5c67a71bc783acc8664eac3b67377fdda260cd08f11b6645163aa` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G1b-teardown | `8c15d03e72ce1a11429e2070de41239f7d59eaaf4aa95254d89b337fdb7c4b50` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |

## G2a (run g-settings2a, candidate 2)

Frames: 247 PNGs, 214 distinct by SHA-256. Results: NOT INSPECTED 237, PASS 9, BLOCKED 1. Viewed: G01 before/after Back, G08 keyboard overlay, E06 apply-from-bottom, G05 font 2.0 field, G07 dark and live light switch. Settings restored (re-read on the device by the coordinator: font 1.0, density 420, night no, show_ime_with_hard_keyboard 0, no accessibility services).

Coordinator verdicts for candidate 2:
- F-1/G02: PASS per executor XML (first taps act with the keyboard up); F-2/E06: PASS (heading and rows at top after apply from bottom and mid-list); F-3/G05 font 2.0: PASS; F-4/G07 dark and live light switch: PASS.
- G01: PASS with the full on-screen keyboard (Back dismisses it, query kept, schedule kept). The residual Gboard stylus toolbar is an environment artifact of the attached host keyboard.
- G08 list insets: BLOCKED (environment): with the host keyboard attached Gboard shows a floating QWERTY, which Android does not inset; search and mode controls stay visible.
- Observation: after font_scale changes in a running process, the development build shows LogBox errors "configured linking in multiple places" and "multiple navigation containers" (Activity recreation on a configuration change). No visible malfunction; any fix needs native/app config (outside the fix policy). Carried to the handoff as a known issue.

| Frame | SHA-256 | Result | Observed |
|---|---|---|---|
| C02-all | `0a3731b934e944a97bd8e4546296505970f275a1f6c6fffc2d0013a7f2455f63` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C02-close | `8fb3387d69644ae1b6f50eff9c9cc1addf016a239f35ce3a699fd155c96b6cd1` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C02-connect | `9fb1d7461e741f61f0a64980b2683c6cdb33efeca843639e093b58de9ff876fb` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C02-empty-favorites | `8ef77f668984e2c32d43652b6cd2a07108ce5d13f930669e8f12560bfc6e6f0e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C02-favorite12 | `6b1441edda279d3b96aa410324f2ca2756857877d376272dee432a216197b8e5` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C02-favorites | `d1a8c1847958c7af14a969537ee48760a5f7368ea99fa348e8ef6c2833c34bb3` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C02-launcher | `46c85878bfbd4a6d8274e4398fde21b399f863076532358b44dba65284aa2bf0` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C02-ok | `e087a6707d1faa0791c4253fcebbbf372acbec34a6cc4defad0cf77e2a9bdcb0` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C02-ready | `730a4e536c6900d5b81f39c612ef35dbfe2eb1d27952a253844939fec220631f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C02-scroll1 | `6dbee5917dccc9772f51d52ff81ede2cbd0b5b88f367d70e53b21ed08ee3866e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C02-scroll2 | `6caf9305ff23656d6acd31ff16deadff3c7cebc7b8944a760cdac2f564ba5999` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C02-scroll3 | `e065e4783ef14e720ce1e596ac9a674f1824b6b9c6a38163274c891b8b439cd4` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C02-tracks | `b1185638ce7b8dffd1600128dcfec812acf528f7354db15376179bcdc6e2017a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C06-all | `5a4bb98089d17217b30fa938e2794d73b44ec293efed545561226ea0fd3d1703` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C06-breakfast-detail | `0c9e7a4319692f57cf52bd18d0cd693d31c3edf6a4745360c542e6c809a0f12a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C06-close | `5a4bb98089d17217b30fa938e2794d73b44ec293efed545561226ea0fd3d1703` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C06-connect | `bfcf5fb289ae2399d3cd357bda5ce7083bd079c13a5b904c9fdfd08c200d53f5` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C06-detail-initial | `0c9e7a4319692f57cf52bd18d0cd693d31c3edf6a4745360c542e6c809a0f12a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C06-empty-favorites | `530049e5be41c81ad17aabeff5a93248d89161656b0a41a7b10387e8eac46083` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C06-favorites-empty | `a71b78a72cbafb3fad8df79760fb563968b3676a4cf3b314d4ca7031cec06a40` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C06-favorites-on | `ff1eb1f3e0146d83974deab91c6c5d16d4bf37179061444772649aaf5d2fad9a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C06-header-back-off | `a71b78a72cbafb3fad8df79760fb563968b3676a4cf3b314d4ca7031cec06a40` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C06-header-back-on | `177d29610d30c03714d01f4477f7a3316d2b619a01b772a87fef9ba57d4c2903` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C06-launcher | `f204d8668d537201d4e11b90cd37aca96bf8d6d9e42ef7d08b58022f8ca115c0` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C06-ready | `ab08da8a3e393224a99f7c302bde346bd7988b7e92a05172ec098ba498663524` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C06-reopen-breakfast | `42bfe4e85a9a31155363a5bfb51a870e3f9cde8ff7446b671e18b4ff835765c0` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C06-star-off | `1fbda1dc91536b753e2f9a63f3de24b344b5db2075fb70818f42420ab63d6658` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C06-star-on | `42bfe4e85a9a31155363a5bfb51a870e3f9cde8ff7446b671e18b4ff835765c0` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| C06-tracks | `3c87a633626dc10d9eb7d1e80ae12955188071b21c8ad8c66f4c7f87d976532f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-bottom-all | `1b1fe0791228c75c26b8300d5de7731579df54127805b6a8910a8d13e77a0ada` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-bottom-close | `1b1fe0791228c75c26b8300d5de7731579df54127805b6a8910a8d13e77a0ada` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-bottom-connect | `caf3a3d0bb406d919db9f06f102d59611bd06dd4a4765b309e54f460fa56ad22` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-bottom-done | `5328f00acb3dc39a90fa5d499ee81398d874b91f869360f39f3aff480f199e79` | PASS | F-2: after applying Ionic only from the bottom of the full list, the list starts at the top: "9:15 am" heading, University of Ionic, Getting Started, 10:00 am Migrating to Ionic ([4,2,5]). |
| E06-bottom-empty-favorites | `f2c16ce248bb084796ec0cd5463473d292eabd92c49546e791f6306fde0b1cfd` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-bottom-filter | `b8449c569bcea019a3f95f5103baae18ac5f5a04d24f717a26eea80d04a49b62` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-bottom-ionic | `296454f619286220d5f274a7bc301ce4a8ae75787b32812227126719a089950b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-bottom-launcher | `b4bfca85ec04c2dd1524efe1312813894ef99cbd318bfa4ccb1edd785933af73` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-bottom-none | `af88d4b9515419f4cd15d4576ae20a9872dc4f96baee705c41e12e6ae977ebdc` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-bottom-ready | `8fd112ab5e5548f70032f5937849f3b962f43c0943318d6a423677d4600ebc01` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-bottom-scroll1 | `e417fdb3f87823519491972f2f231c362d2aca630926e075fd4a2fb64680cc6b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-bottom-scroll2 | `04b457ed69a1156fa3195e93409521242530c55ede3762a87504f51ecdff76f5` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-bottom-scroll3 | `1491da41a94e0547adb52138b2778ae12494f0ebcd042f5ff53031c2089a9c8c` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-bottom-scroll4 | `a3958e50cdab08b982d13b5589c84dec49a586b63f70055490ca7cbbc9f58cec` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-bottom-scroll5 | `d71a7d81ce48128252d048ae2b0b81af33784205fb68dd2f20dbd5571032f95e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-bottom-scroll6 | `cace320b36cf63a90cc64b558899e44184587c5475fefb8e2002d534cb2d6ac1` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-bottom-scroll7 | `cace320b36cf63a90cc64b558899e44184587c5475fefb8e2002d534cb2d6ac1` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-bottom-tracks | `ef651a18e4fec86630bf01d92e159aa0589205e68fce6dfabb2a7278e1643227` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-mid-after-favorite | `16f40c6b70dea84eee66a8f3f581100b5911666ccb2c47d3028628d3ee855b5f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-mid-all | `1eee98526e2c8b31096637357f4338d89047b96295005f2eafb7b2cbb1b82b75` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-mid-before-favorite | `7f3032bad891ad077a3e5365be55ab5fc92ce7825f7f588d4b7004786704ad71` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-mid-close | `51cfec9976a555f7db67eb75125cae5a678caffc05deabb2dabf130a8bc9ad56` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-mid-connect | `136b203f7f03f1cabfb3fc086f04a6e8351d80e23f3780860816580e532f23d9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-mid-done | `9128959516f08ee9301a0f61dfb0979da1a69082e81e769b185ca0ea30bb2c07` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-mid-empty-favorites | `8b0397490cf6874048f3b2d97d196c08518d9fa0136daa42f566c9c5aa7a4223` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-mid-favorite-add | `7abe1f3a51fc046e649a45822232dfe9aa2b6dc7403d01d88d2f96953c34f423` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-mid-favorite-ok | `16f40c6b70dea84eee66a8f3f581100b5911666ccb2c47d3028628d3ee855b5f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-mid-filter | `a0f443697f938de37644d8b63fe12880c41cd65336e21c39b6cdad589f955b94` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-mid-ionic | `338df06f2d266eabbd88eb64449be71316b764c90be965443972388dc58aa52c` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-mid-launcher | `258fd93c055ccf29fa4a1c69d7e44d949e9b0f11fb5e0957d6b95454bde8995c` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-mid-none | `f0fea6dbabc41129ff8ce710d572dcf0bd6c8e5d9b01d34965e0ade5ac0166a5` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-mid-ready | `e0750cb2a3d134e928f4607a249a1da64b01b1a09dd1263bdba328acdc7418e1` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-mid-scroll1 | `c301709de8268512c5be81c6685aea9875e8ae723fed5e6b43d775148d4d831a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-mid-scroll2 | `190b97a0bb479711e2076280875a12f9f5cd7f5e8283a9b548006aee98d7788a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-mid-scroll3 | `7f3032bad891ad077a3e5365be55ab5fc92ce7825f7f588d4b7004786704ad71` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| E06-mid-tracks | `bd1191d1be6a77e3638336c90455d8fb0028c480437e0d23133f1a23d2693bc4` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-add-action | `a57a9c5aa0ee19eb888773d5650dfdede1245894d7e88185c6e9993ea42f04c2` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-add-ok | `a4b25618ccc489b12b127efee6549e54b3055323a93428894e5d4937ba127bb0` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-add-reveal | `b94dba98658094e7e0372648b0b31c41791c8786b3c9125016383b43a9eea5d1` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-all-again | `857489b4d507aa92d88ae9b3d2cdcd52653214b13f1ec67ec01ca819b863e482` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-all | `c6131f91a1dd4ce87958cb6e923b9b31ea5db7005c1f63236b473bb6ef32b3cb` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-close | `749ab86fe4121c6ef417b4525ede95516b1c458cd63f18bf91477cf45eb3f593` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-connect | `13d2fb833ef8e921b2a6df303a8715bfd50d573731c31836eddadf453305f026` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-duplicate-action | `86c815aad31e684fcc3fd0e0af3736998d1cd168476106366d0445c9007e61f1` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-duplicate-cancel | `857489b4d507aa92d88ae9b3d2cdcd52653214b13f1ec67ec01ca819b863e482` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-duplicate-remove-action | `3bbf99a647f5822f4351eb396314971a6a7642811ae7cbbd3bf0e1bd47767c88` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-duplicate-remove-confirm | `91351f6ea5a06adb2366d5671f213a13f9e6a52d092a054f27f813984431212d` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-duplicate-remove-reveal | `fb193d23e41fbf26cc774c9fa32cc48cf580913df683cb9dff2afab3c132bc57` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-duplicate-reveal | `0bce4dba1fe0912dfe0b381b48804936462a1e4f41eec90cb9403464982e2782` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-empty-favorites | `a841e352a1986d9ec4e8c8c4e0567aea384c6901b582719b31074fd69d2cae6b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-final-empty | `6b7addef3387d3f0161e0f294c7c447402454f17b1ad7254e9508516b70b5a62` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-launcher | `eefb2f827ab44c422246e033df2cd3b89c4f709eb95536a5a0b426947f2336b6` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-readd-action | `501293ca0319b5f35006a1c20271875c05a771fc7170b6bc0d6ec01f5692b39e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-readd-all | `6bd1b13fbde68413eb8cd17a583b641d4772b34b5f6bf9f8343ac9e5c9dac207` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-readd-ok | `1f715efdc4a8e3f79fbfe215f4669247283d5c5052b476aea18940fd876e6f1a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-readd-reveal | `0957b8a56497027245983ecc83296b2490229f876e0af2eadfcaf23fa38ce14e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-ready | `a5087ed5b240a8e8a15dddd521be5263a3a67cd2aaad0b96e9d8245907d47055` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-removal-action | `1b4ef56d2ae49e5febeefee47c106c33c46af05536526208b9e657829fb149ae` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-removal-again-action | `3ccea43b11ffbad9771a7307750790aacc935f6d2db766023ea984c512a0e463` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-removal-again-reveal | `5b246d367a8cf1fc64380919dffa061bc04788a671963a395e51203d6a454aa2` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-removal-cancel | `422a2b26282e67537f304b7a04bfbaa7e7e78b13a8e827e4e3794e60c6a87076` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-removal-confirm | `6b7addef3387d3f0161e0f294c7c447402454f17b1ad7254e9508516b70b5a62` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-removal-favorites | `4611e6758f9de0c8e3856447060693b8b00b3028b7492ae3eab4b01a2bcb7fb4` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-removal-reveal | `0604a3b5933ff45c18bcf061e19951379cc9cc192d3d7fd8967f4c582e6d94d7` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-removed-empty | `15822a6d706aba19fc72511049e2a4d55833c4e3cf5a919e99bec54006d61c31` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-single-favorite | `dbf5ab862d6b7f4d994d6f21463764269b93fd5693991f4baa7d1366474c43bf` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F01-tracks | `ac1d1b00e4cac1030f4f88b2fa5ff259c4e5aabc7d099dfde325c482d4e9c061` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03-action | `6bb5f840d725801c8fd8b3a89d38e0a57218363507116fc07942ab973dc17ad5` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03-all | `1def0da85ccddc3ddd496bd33292e0dccf442037af4193dddc7118637ead674a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03-close | `1def0da85ccddc3ddd496bd33292e0dccf442037af4193dddc7118637ead674a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03-connect | `64e6830acc186ce8726857ef4d005ad8ecb53ce8bc67114efa0a93d8cb74dd7e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03-empty-favorites | `fbe5cc782b8618fdf74952996a0e41eee85a0c0949ffe81b469bf48500f1e626` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03-launcher | `b243317ea13341468d952c5545606018f74456e1794280fae1736d85c6be2ee0` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03-ready | `3e4ee3430f39c52cf828acca1080f4e400df0e93c623b58a8e421d3d27ca7c6e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03-reveal | `36eb33edd6ae7824d2ff301d67f3a96ac1ab7c5506018ea243225d5f9af7dafc` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03-tracks | `947c02526c26e7ad70d959f699d4bf83a40ac7d0a747b909ba72cfc2577aacb9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03b-action-ok | `4bb218aafa57b60b0c412342353307376354871ca98af2723fdee2bd7fc71fc2` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03b-action | `2c0c6f21b149d5790b32dd38c31d3444a2961825533fce588d1dca84573a0153` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03b-all | `5587892355ab4639b6d9cd7d12504e662af7a4ae8f614fbfd92610f0c2d953b6` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03b-close | `ead4319dbcd408a287c0e9497c3b449dfb0c39ad891f3ee4ab87c61b5b2f367e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03b-closed-row | `cde4d0d95fc495d964ff7fcfab044774f0dc4682b082a898d89f7e300649cd17` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03b-connect | `57ec74c1f5a8529885e947b4f34033d45c609c6eb5cdecd5fd2bbc6dadf6d9bc` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03b-correct-detail | `cde4d0d95fc495d964ff7fcfab044774f0dc4682b082a898d89f7e300649cd17` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03b-detail-back | `0ae3b38ef3c7ec5c9871da6f81f34f5da7917565638d11a581c1ac90c8f57893` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03b-empty-favorites | `1ece869b91e217ec13bb95d96476e8f6925d20c184fce7078b9681949c55552c` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03b-launcher | `3d62e0e0124b23ccec07a4d87b4b9ef18c259b3de103863aaea57271646d6c78` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03b-ready | `278275500d75ea520ec4fd49a1a880cdf7e14e1156de47548a6b29bc3749e38f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03b-reveal | `74188715980ff9e2a462882fdaf4e69ae2e4e72da57c567a57566a5ea37ee031` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F03b-tracks | `6539c10f34390a81cd3aae879852a22d445a2fda7e1d228f909de7143b57ec37` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-all | `6f974470ffbdf127ce4e4353ae2c67e43e65be6f81a4930bf1e629def3a474c3` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-away1 | `c8c395a374f5e5f3b28f649c1410c02ed0ab53fc7054490ab4224575b4aad374` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-away2 | `95d2ab1256ff2d1b6883810716b09881c1ec53c60d4a1b384ef165fdc656e448` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-away3 | `cb19317bd69542b24ed81246c8c237be865518deab907ccba2017837ae497476` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-away4 | `34b54b1864920433fae4189da139861594462c5fab0a1bcd94ee7244cfeaf45b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-back-top | `328155a664c20450ae54a62125013ade5d2a479354648505553385b02c2e5093` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-close | `ec8dfad5df0bcf472492bbe83bc99ccd6a16574c817b6ed44347800ff14df7c2` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-connect | `5c4da469450d684d837a01ad73fda49f2e1ec5599ac1ff23a88290a30b90fe2a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-empty-favorites | `e3373730da41d2bc04d3dcf82450def311741b44bfe8d96999293b7fb97f58f7` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-favorites-valid | `81c02ab744e7eda47fac6bee91e25e022330a0c91d46b4eaebfdbd12475c2842` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-launcher | `18b7d753ae13df249711df8495760cf7f5ce84b9eedc7f1b2e5e4c443d90ac4b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-open4 | `07ac56fb7d1b57070c1d6ba6acbac8bc220d8e04c7fa7fa3a1957ed2ba8c140e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-other-favorite-valid | `ebf674bd850c36e45db06d2038c8cdb27e0d5f3a586e4f2ef3038d3f40d6c120` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-other-ok-valid | `33be2796d9ef03ccafe09c051c5e5f72e960bd4b41b1e0b4a2d2af5212d0c4bd` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-ready | `d0505893a712bd0c2be3053e320a361cbff7b166b010d641c28c069b52d49ed8` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-return-in-list1 | `dd71706cad6191533ccd9c41f56a4dd5cc0fa39206677670b90f96d0fc4689b2` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-return-in-list2 | `a671263fb0b05fd80e0e395f7ba3d982572f1fcd47f9998948b4124f9dcd5290` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-return-in-list3 | `8d95f4c1349d10d3db84ef727e3d52d258d836d596f170b5ffcd291c4cee2c09` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-return-in-list4 | `33be2796d9ef03ccafe09c051c5e5f72e960bd4b41b1e0b4a2d2af5212d0c4bd` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-return-in-list5 | `33be2796d9ef03ccafe09c051c5e5f72e960bd4b41b1e0b4a2d2af5212d0c4bd` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-return1 | `34b54b1864920433fae4189da139861594462c5fab0a1bcd94ee7244cfeaf45b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-return2 | `34b54b1864920433fae4189da139861594462c5fab0a1bcd94ee7244cfeaf45b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-return3 | `34b54b1864920433fae4189da139861594462c5fab0a1bcd94ee7244cfeaf45b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-return4 | `34b54b1864920433fae4189da139861594462c5fab0a1bcd94ee7244cfeaf45b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-return5 | `328155a664c20450ae54a62125013ade5d2a479354648505553385b02c2e5093` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-returned-top | `33be2796d9ef03ccafe09c051c5e5f72e960bd4b41b1e0b4a2d2af5212d0c4bd` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F04-tracks | `945988ce27a5b336fa571c3d512e2bd15de1379d6718e28e1deee80098bb71d1` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-add-ok | `5fb54889ebc1eed303ad4e7fab5a5c3933a82790ada3e1fd132a0782ef91f5b9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-add | `62cff538cd4f109f078b481c50dfa91d97492958cf083e04d7999817ce565684` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-all | `a5f8bf46ac541d1bde4afc9d57b2bc7a73ac6c5c3e5c6885bb136c90dc1d98fe` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-close | `a5f8bf46ac541d1bde4afc9d57b2bc7a73ac6c5c3e5c6885bb136c90dc1d98fe` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-connect | `b333de69c011644c2d9a3b7fa2329ddf9f1eac2073e34a612b0f5ceb3064c05a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-duplicate-cancel | `fce8d8bb359de2653d378980e308713f551657febd44244161df362ecf4c0cd2` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-duplicate | `6cb24be7c5351792fd087a33cdf6fe9574f8c9680cdcaffef5666b0c0b357455` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-empty-favorites | `3e2507aa6de87636b4317ed9eeb1850dbc94efb94dc7587d03d2cd8c8ee1a1da` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-favorites-single | `80f3a4c95ec10e5705fb40cf2b046b8a7c0662597c16a4a8464b3f67d26771e3` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-final-empty | `bb697d69c8db9d38de5a3836326035354a21f62adf8348bf520790b60b9ffb79` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-launcher | `0f58541ccbccc9d6d2ba7d01dfb7f260d75869abfce5c28a50f7aa041cecb8f2` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-ready | `b064f69a77a7a3058b1cbe359585fd8d355bc289ad3734ed1d1872707fe81cbf` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-remove-again | `874e2e3ead3e3af26aa144739a9d18e26265f4cf4b38c4593f6d5e8c4f72a227` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-remove-cancel | `0a891cbade07fd7d90737613cf1c39be38bfc84ba8c3b61e10a551b701fc46a5` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-remove-confirm | `bb697d69c8db9d38de5a3836326035354a21f62adf8348bf520790b60b9ffb79` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-remove | `c504ee0b6bbd5003419af8777dffe4e0bec038ca724573f30352325f470a183e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| F05-tracks | `000946cd29f0a133d55bb8e3e2537a08ad0d50685ec5c7714d009535a9642f7d` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-Ionic | `2c9b19e4ceeee4b173a3e45a86a5bb8cb1644080d9b14c5ec464e4df81e135f4` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-all | `9d4179be941cd1f34410629457017b9eaff79dfe6d1cbb13c4f4a24230cd9b26` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-connect | `fa744ea1c80e4e7d3accb7acbce9bbd992319f8d0788363d9420459e1d7d5966` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-edit | `f087d0cd565e9ce77adfc15049a78d8a8b9d6b287292ebf882f1df6f176b7e09` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-empty-favorites | `63615fb5d5b4ce8d54a95bc6ca3e537877533fe93e2217072bec994e2b1cbd7f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-filter-close | `0e7d498a6a23d98c8dba4d3e6677dbb9071c968187a9ff1f5b519955f0c0886c` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-filter | `611651c252e98e66e626170046af808e6e68400b51ea0fca9b9392ba6bc35ad2` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-focus-default | `3c0c59af98122cf41e316588fbd70a684c31e6b10d4af8b4597f90b8198fc321` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-full-keyboard-confirmed | `8aaeb2eef1f32971cea00123256ec74471dacc3b367d5796f425721da3a0de7e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-full-keyboard | `3f3167a65243c845f5d7a8d74107b99813955eb6e599e4938a886e4d985cdd13` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-launcher-retry | `93003f7441e836871f342cac154ecbc24b1ceb533b0c481eb904fbee1f21c405` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-one-back | `5ffb76348779064bfe4822914328d409ab25920ce27995eb1fcf7b84daf3c0d5` | PASS | After one Back: full keyboard dismissed, query "Ioni" kept, still on the schedule. Residual Gboard stylus toolbar remains (environment; host keyboard attached). |
| G01-preback-keyboard | `5081694663742b48a744822db8ef512585178d6d988282796c6a834c44e4f6f4` | PASS | Full on-screen QWERTY (D6) docked over the list, query "Ioni", schedule visible. Gboard stylus toolbar also present (environment). Dev LogBox toast "configured linking in multiple places" visible (see note). |
| G01-ready | `188517b0dd043a669956625b6f5427acaa83bad786e9c892525fb7a1a8e6989a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-show-onscreen | `e0cf520da7856b8b95efe1bdc5f595153c8662c42f343f5e66ca6cc14a8e0bed` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-stylus-options | `2dbffb7f6e46a350048841d60784a6346de9bcc9b36274aef669d98a820c2d30` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G01-toolbar-windows | `3b5f0982b28b5688a97cf4af500ae0e280bf0e0362d7061eb54f55da6b2a781b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-all | `a30ba3beb495ef94476f00a2ed9b98575b7f414352aeb932ea71b1884b74da38` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-close | `a30ba3beb495ef94476f00a2ed9b98575b7f414352aeb932ea71b1884b74da38` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-connect | `fefd4717c2e3da1e40c4ccae55484740d186b43e37a81cbb9cff164eb3bd64a0` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-empty-favorites | `82f341daa935c6037aeea05def131ba5a82e5935f8fc5e832e07aa78d2118e44` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-favorite-first | `d8e46a173ddbc4bc848c28f8ffe8c8aa1d5ae3966a224992dd13a31b740599c9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-favorite-focus-state | `975c92c5cc039dbc5c9904ac71d92b96441ff4a730ed58ade65af7d603c3a95f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-favorite-focus | `975c92c5cc039dbc5c9904ac71d92b96441ff4a730ed58ade65af7d603c3a95f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-favorite-full | `21d06071273c4d73eb30e88f50ef8f93137a3a4e8eb94022e490e3b08699e606` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-favorite-options | `74dc92d5445e0aa7cb9e7f87bcd9bfb73b9034baf59b2073c9981d80ff9228f2` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-favorite-show | `01ad9fd54225cb2796796db7545367257bc6ad9bf27f080c424c842655cd7190` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-filter-close | `c686618351ad3353be1bb16b23a4d9d39ff904ee1c982595b60c6c06d39ad6d6` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-filter-first | `3e67f66605e72e63dac50ad7aa51800f6c3909f0e550e32b1f7a953be79ccdc8` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-filter-focus-state | `fbf2ff8f1217de72bd03b59fa7d5747fd422a55e90930f882b0c17f70d400d55` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-filter-focus | `fbf2ff8f1217de72bd03b59fa7d5747fd422a55e90930f882b0c17f70d400d55` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-filter-full | `86e671278cbb8f20324cd82e3185f9d9c447927b969ad592044f92775aa5cbaa` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-launcher | `6b3e0c8fe5e12b0465dc66ee25061f4b0b205705e3866b8927dccc422d38824b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-mode-all | `86e671278cbb8f20324cd82e3185f9d9c447927b969ad592044f92775aa5cbaa` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-mode-first | `394d6d5d2390ff4171df92ed78100317dfaeb33ec0e237835aee532ca4cf434c` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-mode-focus-state | `f3cb7a02fcbc9c206d3215a793d29c6b7a56f48f9e72687d3e3cde1a12f9ec46` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-mode-focus | `f3cb7a02fcbc9c206d3215a793d29c6b7a56f48f9e72687d3e3cde1a12f9ec46` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-mode-full | `df043c75a9878d4d8749eed24a338580c0f32cb1e93008302ef13c4815798e1b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-mode-options | `5c03c3329269efa43ac44ce265d7e6153ad27c617c13b95e7f43f2de28afe8c8` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-mode-show | `378456403c6e3a9b654c8d11a52ad251416d05d692fcab1cd2accb4abff5abb3` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-ready | `95511401eca7162e40bd1c82e17b26c502ccf448376eb7862877d76be4d824b1` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-row-first | `05f220fb5110eb22534f43d846b0a10bcc7f9f7f745b50ad40738a7a23b45aac` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-row-focus-state | `e481b507744fcbe9442efd5ed949d7ff49297b0e9d0d3ae21473a74a74e58e9b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-row-focus | `e481b507744fcbe9442efd5ed949d7ff49297b0e9d0d3ae21473a74a74e58e9b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-row-full | `c7a96e3fc8990438c119898f4ed8ec3ad617beaa496145cdc5c2db4cc0b22507` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-row-header-return | `a3a821e407578899fe2adc57a5753a563175a87bc244155e018dd84ee71b2872` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-row-options | `d4891ce2abe386c7c95cc8936411ed9e30772256db78c6224c8e70fb732afde7` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-row-show | `27622ed8d43989e5b56d1474cba3fbfac9ed6cfca32454aee1ab63c35f1ea22b` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G02-tracks | `e2ab6e8c37468cd2bc13df0d7b6699aabc56021df0f90e34e049f5633b34fe84` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05-Ionic | `451d7808aae689b78f7a6404b32ce181b864023b759103d76bd5f0566f2d4755` | PASS | F-3 at font 2.0: search field grew and shows "Ionic" fully. Dev LogBox toast "multiple navigation containers" visible (see note). |
| G05-empty-candidate-proof | `26568f91e14061d96dda7ed9107bf1bd63b634cd18e9e86b433ff9934a732071` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05-focus | `b2a047cd59865ec3015b0160bc6262c1f910936e870bb802f5af94b869b43db9` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05-full-keyboard | `1be2c042f994cb099a8ef069211c3a2e7fd4ac95d237590cf0f236f9b812de17` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G05-restored | `4e20f6f94e473eab45023717fd247b2b830688f11db391258b548c9417c5b61e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07-all | `1a518c423b98b4e627f04f28bb76e75ed21791e2e1b06530b9bf33dcb3c60198` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07-close | `3a0812d2463057a157db8713f01442b438adbd48c26e95918a45abd835966096` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07-connect | `0a464da46763e92a25e6158ad3a48b337835f35fc915aaf30cf6a6a6273db913` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07-dark-alert-ok | `3ba42f1a0d1e3b2b70e52f3a49379a6e9b87505d0a56dfb00a970afc8d473ae4` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07-dark-detail-back | `3ba42f1a0d1e3b2b70e52f3a49379a6e9b87505d0a56dfb00a970afc8d473ae4` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07-dark-detail4 | `c289f3c0b421a8ceaabfc06992fb8945718f96aece4e8ae5f733166782553f6e` | PASS | Dark detail: dark header with back arrow and title readable; description, time, room, star and actions readable. |
| G07-dark-favorite | `28d0db04e2ea0937e916522d87e24480b706b28a078e7190a4f4788bee2c108a` | PASS | Dark Favorite Added dialog readable with OK; background dimmed. |
| G07-dark-filter-close | `3ba42f1a0d1e3b2b70e52f3a49379a6e9b87505d0a56dfb00a970afc8d473ae4` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07-dark-filter | `e598ec1867dc054b7d43b9df2aed1a256734a49fc9eafba7874f15093891c411` | PASS | Dark filter modal: dark header, actions and checked tracks readable. |
| G07-dark-schedule | `7d850bcacbc802aeb0c1f9f95f3b9d68f0bca5fd7df59a6d5b9608b39968169f` | PASS | F-4 dark: header bar dark with light title, status bar dark with light icons, content dark and readable; selected All sessions distinct. |
| G07-empty-favorites | `bb55ab62e3eff088d413a485a959735a8224e88fab0ffb731ff5940d6a6d6bf1` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07-launcher | `8e7d6472f5008c57bbc1bc5f279a58e87202bd36be9656d8b3e3decbe87cd88f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07-live-light-schedule | `88368e5ecb1cbac56f681f17ac7d8ac80e90b9122729346387eb8ed8c952924a` | PASS | Switched to light while the app stayed open: header, status bar and content back to light. |
| G07-ready | `e8a05845c09bf9c6a8c2029c22cd1ebfa64f42955bac567e2816ce3f64156af6` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G07-tracks | `1607b5a0acbf9ce1afd116c067dac9c306a03e9945611a71c1955f42c77479df` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-all | `944b34babf545e884c3bb4c6415d67d27156d2bc01e3e6b0b97968b776959ef6` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-close | `944b34babf545e884c3bb4c6415d67d27156d2bc01e3e6b0b97968b776959ef6` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-connect | `40d29f617c8a9799f3ff891f1a6aedc088dfb2ff350bf241909536175b7126df` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-empty-favorites | `0b8964c6ffa04a9dc56ae4ab8899e865185ad8ecd51e971da09938a18016efff` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-keyboard-focus-state | `e22b223718639d12516accefb12988a1bbb4799578f7bfb2ddbd57d1a4a99f8e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-keyboard-focus | `e22b223718639d12516accefb12988a1bbb4799578f7bfb2ddbd57d1a4a99f8e` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-keyboard-full | `cd4956ebbb7b9bbdd7fc8c6f0e67a1df8eb11ac2250b5c4fbff67be67d7fc412` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-keyboard-options | `9f905a86429b8f0fdd3b3c67fd89f73f2d6761ae1b3e2366298f01f05d8c43da` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-keyboard-show | `be24bc995c405f7ce837291e65d3dbc9dc9e043b8f96de08948465f940430b12` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-launcher | `4826a921a0574adcf7bd515527d761dce484121fe99f5e5a80683e7dff32462a` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-list-scroll | `a27b399f5a26ab6a5b8e7bb5706b3292cad31996385531573b8433089afc250f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-ready | `a1aa67964402b100a5fad870eabfd8d2bfc1d9be3acf71bb81e567d922b67313` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| G08-scrolled | `5f8815346e58626184604e96b0474cd716e71eb199aa759e8002517102093447` | BLOCKED | Floating Gboard QWERTY overlays list rows; search field and mode buttons stay visible and usable. Android does not resize apps for floating IMEs, so list insets are not assessable here (environment). |
| G08-tracks | `0725d4472ea8d236161e7c878278d2314a58e02459301f3ae1fe72ff55b5134f` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| teardown-all | `fb8e8a37abbb0439f45205f03ff0448452555d4c89b5a01ac3c7e03f2b42c2b2` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |
| teardown-schedule | `fb8e8a37abbb0439f45205f03ff0448452555d4c89b5a01ac3c7e03f2b42c2b2` | NOT INSPECTED | Setup, baseline or intermediate frame; not viewed. Assertion rests on the executor UI XML. |

## G2c (run g-settings2c, candidate 2)

TalkBack rerun under D8. Viewed: D8-deny-notifications-activate, G03-favorites-focus-attempt, G04-filter-next-attempt; the other 37 frames are NOT INSPECTED (baseline, setup and teardown steps). Settings restored (re-read on the device by the coordinator: enabled_accessibility_services null, accessibility_enabled 0, font 1.0, night no).

| Frame | Result | Observed |
|---|---|---|
| D8-deny-notifications-activate | LIMITED | The Accessibility Suite notification prompt is still on screen after the "Don't allow" sequence; the executor's permission dump shows the denial persisted (USER_SET/USER_FIXED). |
| G03-favorites-focus-attempt | BLOCKED | No accessibility-focus outline; the injected tap activated "Favorite sessions" (selected, "No favorite sessions.") and opened the keyboard instead of moving TalkBack focus. |
| G04-filter-next-attempt | BLOCKED | No accessibility-focus outline; the injected swipe unchecked Design instead of moving to the next element. |

Verdict: adb-injected input does not drive TalkBack explore-by-touch on this setup. G03/G04 handled per D10 (offline accessibility-tree audit for G03, G04 BLOCKED).
## G2b (run g-settings2b, candidate 2)

Viewed: talkback-ready (LIMITED: the first TalkBack enable shows "Allow Android Accessibility Suite to send you notifications?" with Allow/Don't allow; the executor correctly made no permission choice). The other 18 frames are NOT INSPECTED (baseline and restore steps). G03/G04 BLOCKED (environment prompt); superseded by G2c under D8 and D10.
## G3 (run g-settings3, candidate 2, decision D11)

Viewed: A06-filter-done, A06-final-all, G08-position-button-before, G08-position-button, G08-restore-floating-position-before, G08-final-floating; the other frames are NOT INSPECTED. Settings restored (re-read on the device by the coordinator: show_ime_with_hard_keyboard 0, font 1.0, night no, no accessibility services).

| Frame | Result | Observed |
|---|---|---|
| A06-filter-done | PASS | Schedule after the filter flow: All sessions, rows and headings render normally; no red screen or LogBox. |
| A06-final-all | PASS | End of the A06 flow: All sessions, empty search, rows render; no red screen or LogBox. |
| G08-position-button-before / G08-position-button | BLOCKED | Gboard still floating (QWERTY over the list) after the executor's own-UI attempts; no docked keyboard. |
| G08-restore-floating-position-before | LIMITED | At 06:50:31Z the filter modal is open with every track unchecked, although commands.jsonl records no executor input between 06:50:00Z and 06:50:31Z (the helper's inspect-controls step only reads XML). The human confirmed interacting with the emulator at that time (D12); not an app behavior. The A06 windows (06:36–06:46Z) are unaffected. |
| G08-final-floating | PASS | Restored floating Gboard toolbar; app on Favorites with "No favorite sessions." (executor teardown state). |

Coordinator verdicts: A06 device part PASS with the Metro console readable (metro-console/metro.log); the console shows only Node's NO_COLOR/FORCE_COLOR notice and the known initialRouteName deprecation, recorded verbatim by the executor. G08 keyboard insets stay BLOCKED (environment): Gboard could not be docked through its own UI on this AVD.