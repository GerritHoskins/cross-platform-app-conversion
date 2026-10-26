RN07 B2 capture notes - CHECKPOINTED
Recorded 2026-10-25T17:49:35.367Z; Hermes GPT-6.1 Sol high (device actions); pixels pending coordinator.
Every PNG is pending direct coordinator inspection; XML/device statuses below are not visual acceptance.

Candidate migration/slice-1 at f5a1d836156ad3225b8d050951ae5cc073e3c5f7. Initial index empty;36 preservation hashes matched. Earlier RN07 evidence read-only; final preservation audit required before checkpoint close.
Default emulator-5554/RN01_API36/API36;1080x2400,density420,navigation2,font1.0,nightno,servicesnull,accessibility0,LatinIME unchanged. No settings/install/data-clear/reboot/native-build/product/test/config edits. Existing Metro8082 and reverse reused, not restarted. environment-entry.json and settings-baseline-and-final.json hold raw values. Reused dev client1.0.0/code1.

Three new processes via prescribed force-stop/start/launcher: D PID18655, E20181, F23023. Each baseline verifies empty search, All, all ten checked, Favorites empty. Launcher connection frames can precede bundle-ready schedule; next action always freshly dumps XML and waits.
186 PNG/XML assertion pairs; 183 inputs. Every input had fresh before XML, bounds,>=1500ms prewait,>=2000ms postwait and post dump; screenshot via adb exec-out screencap -p. PNG CRC/chunk/inflate/dimensions checks passed; no pixel inspection by executor.
Every frame timestamp/paths/hash in capture-index.json; commands and receipts authoritative; before/action metadata retained.

D01 Breakfast1 safe no-description/undefined; described4 exact metadata. D02 queryIonic,Design+Ionic,All,favorite4; vertical scroll to7; header/system returns preserve selection and viewport[2,5,7,18]. Scroll observation separate, no offset requirement. D03/D04 BLOCKED by D3, no intent/workaround in B2; RN04 cold-entry/back/unknown-ID tests from a-gates2/jest1.json cited in D03-D04-automated-support.json. Documented RN04 intent scheme conference-migration-rn://session/3; unknown9999 safe target contract. D05 detailBack once→schedule; separate rootBack→Android launcher; E baseline relaunch succeeds.

E02 single-track[4,2,5]; E03 search-plus-track[4,2,5,7,18] traced through end; E04 zero tracks explicit empty and reopen unchecked; E05 selectAll retains search/mode, query-clear restores exact default-all20 sequence/eight headings. E06 Navigate up is approved close, no Cancel. E07 systemBack closes only modal, discards draft; repeated with visible[4,2,5]. E08 N/A full-screen card: no backdrop/swipe handle XML; RN05 confirms presentation; pixels pending. E09 Reset/DeselectAll both clear draft without closing/applying; close preserves[4,2,5], reopenIonic.
Supplemental FAIL E06.apply-after-bottom-scroll: after E05 at bottom, applying Ionic-only produced XML controls with no rows/headings/empty message, repeated over returns. Favorites→All restored[4,2,5]; repeat dismissal cases then passed. No repair; possible stale-offset/virtualization explanation unproven.

F01 swipe add1→Favorite Added→OK, duplicateCancel retains[1], duplicateRemove empties; readd, FavoritesRemove Cancel retains and confirm empties. F02 vertical5401800→540900/400 scrolls[2,3,5,6,7]; right diagonal3001700→8001100/400 neither scrolls nor reveals; left8001700→3001100/400 does not scroll and reveals5 (right1038→786). F02 FAIL for unwanted reveal during diagonal scroll test. No favorite change/navigation; Favoritesempty. Pixels pending. F03 action4 alerts only; open-row link tap closes, closed-row nexttap detail4. F04 row1 open→scroll to bottom (row1 absent native XML)→action20→reverse5401100→5402000/400 to top; returned1 closed, opensBreakfast unfavorited; exactFavorites[4,20]. Native tree disappearance is not proof of JS instance recycling. F05 complete same add/duplicateCancel/duplicateRemove/readd/FavoritesCancel/confirm using only labeled buttons; finalemptyFavorites thenAll.

Keyboard: D02 IME true before first rowtap, schedule unchanged and later false; E03 and E05 first list taps likewise did not navigate. Known first-tap keyboard-only behavior recorded, never treated as product action. No Back used to hide keyboard. IME/Gboard floating toolbar not changed; pixel obstruction inspection left to coordinator.
Back events (5), each preceding XML confirms screen and dumpsys shows mInputShown=false before input; after IME also captured:
  2026-10-25T17:18:43.571Z D02-system-return; migration/evidence/RN07/b-device2/D02-system-return-before.xml; target The Evolution of Ionicons
  2026-10-25T17:19:35.705Z D05-detail-system-back; migration/evidence/RN07/b-device2/D05-detail-system-back-before.xml; target University of Ionic
  2026-10-25T17:19:43.988Z D05-root-system-back; migration/evidence/RN07/b-device2/D05-root-system-back-before.xml; target Search sessions
  2026-10-25T17:26:13.210Z E07-system-close; migration/evidence/RN07/b-device2/E07-system-close-before.xml; target Filter Sessions
  2026-10-25T17:27:48.572Z E07-repeat-system-close; migration/evidence/RN07/b-device2/E07-repeat-system-close-before.xml; target Filter Sessions

Bounded logcat: six PID windows around D/E/F, each -d -t400. No fatal crash or JS-error scan match; not zero exceptions or continuous logs. Native ReactNoCrashSoftException/window-focus-before-context-ready in D/F, initialRouteName deprecation and other W/E lines retained verbatim in warnings-verbatim.md and logcat-analysis.json. Metro console unavailable; no console-absence claim.

Raw CRLF command captures preserved byte-for-byte, disclosed in line-ending-inventory.json; PNG stdout logs are binary. Authored text/extracted XML LF. No changes to old captures. Initial read-only discovery and failed unexported-variable shell attempt have unknown timing disclosed; timed gates repeated before input. One mistyped diagnostic adb shell shell dumpsys failed127, no device-input effect; receipt retained.

Results (device/XML only):
D01: PASS
D01.no-description: PASS
D02: PASS
D02.header-back: PASS
D02.system-back: PASS
D02.scroll-restoration: PASS
D03: BLOCKED
D04: BLOCKED
D05: PASS
D05.detail: PASS
D05.root: PASS
E01: PASS
E02: PASS
E03: PASS
E04: PASS
E05: PASS
E06: PASS
E06.apply-after-bottom-scroll: FAIL
E07: PASS
E08: N/A
E09: PASS
E09.reset: PASS
E09.deselect: PASS
F01: PASS
F01.add: PASS
F01.duplicate-cancel: PASS
F01.duplicate-remove: PASS
F01.remove-cancel: PASS
F01.remove-confirm: PASS
F02: FAIL
F02.vertical: PASS
F02.diagonal-right: PASS
F02.diagonal-left: FAIL
F03: PASS
F03.action: PASS
F03.closed-row: PASS
F04: PASS
F04.recycle-observation: PASS
F05: PASS
F05.add: PASS
F05.duplicate-cancel: PASS
F05.duplicate-remove: PASS
F05.remove-cancel: PASS
F05.remove-confirm: PASS

Remaining: coordinator inspect all frames and settle visual/gesture/blank-viewport interpretation; D3 scope decision; G01-G09 separate settings phase, authorized settings must be recorded/restored there; no fixes or G work here. No handoff/submission/review/delegation/staging/commit/push. STOP checkpoint B2.
