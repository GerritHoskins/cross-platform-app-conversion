RN07 B1 - CHECKPOINTED
2026-10-25T17:09:59.505Z; Hermes GPT-6.1 Sol high (device actions); pixels pending coordinator.
Candidate migration/slice-1, HEAD f5a1d836156ad3225b8d050951ae5cc073e3c5f7. Empty index; all36 a-gates3 preservation paths and IDEA hash matched entry/final; tracked diff empty. Phase A accepted complete per coordinator (a-gates2/a-gates3); no software gates rerun. Native A04 NOT RUN by D1.

Default baseline (unchanged at close; G restore values): RN01_API36/emulator-5554/API36,1080x2400,density420,navigation_mode2,font1.0,nightno,servicesnull,accessibility0; default IME LatinIME unchanged. Exact setting reads: migration/evidence/RN07/b-device1/settings-baseline-and-final.json. Emulator35.5.10.0; pinned Nodev24.19.0.
A05 PASS reused dev.translationtest.rn1.0.0/code1; installed2026-10-21, first07:01:33/updated17:29:42; APK SHA2563a6c19f6f25e2148ae6afc1572fa847f501d7a6a5102dbadb05e6ca53528f092. No RN07 install/native build. Cold launcher127.0.0.1:8082 loaded current schedule. Metro /status running, reverse8082; console unreadable, no restart.

Device/XML status summary (not visual acceptance):
  A06.device-B PASS; A06.device-C PASS; A06.metro-console BLOCKED (console window unavailable).
  B01 PASS content/sequence; B01.pixel-readability NOT RUN pending coordinator. B02-B06 PASS. B07 PASS automated-only.
  C01-C09 PASS; C04 Cancel/Remove, C05 Cancel/confirm, C06 on/off and C08 live/new-process subcases PASS. C09 automated-only.
Exact per-case/subcase expectations, observations and frame paths: migration/evidence/RN07/b-device1/results-b1.json. Capture126 PNG/XML pairs indexed in migration/evidence/RN07/b-device1/capture-index.json; every frame pending coordinator. Assertions and metadata checks: verification.json, viewport-sequence-verification.json, B01-metadata-verification.json, B02-equal-start-verification.json. Full workflow notes: capture-notes.md; command receipts/stdout/stderr and commands.jsonl.

Observed: frozen20-session/eight-heading trace exact; IOnic15 IDs exact; space18 core-derived IDs exact, preserved through modes/tracks. C02[12]; C03[1,20]; duplicate Cancel retains/Remove updates; Favorites Cancel retains/Remove empties; detail list sync; Foodfavorites[12]. C08 PID15367 survived HOME/resume retaining visible12; cold PID18170 starts empty. Final schedule All/alltracks/emptysearch/emptyfavorites.
No device behavior FAIL recorded. Six prescribed reverse swipes did not move because y900 starts above list918; no reverse/recycling claim from them. Stable pairs corroborated by repeated forward traversals. Heading keyboard-dismiss attempt did not establish dismissal (later mInputShowntrue); no lost list tap claimed as product action. Helper startup/noXML and label guards resolved without product edits, all attempts retained.

A06: eight bounded PID windows; no fatal or unhandled-JS-error scan matches; this is not zeroexceptions. Native "Unhandled SoftException" / ReactNoCrashSoftException at window-focus-before-context-ready, and "`unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead." captured. Full native W/E lines/stacks verbatim: migration/evidence/RN07/b-device1/warnings-verbatim.json and warnings-verbatim.md; analysis logcat-analysis.json. Workflows completed after startup warnings. Red-screen pixels and unseen Metro output not accepted by executor.

Raw CRLF captures disclosed in line-ending-inventory.json; raw logs not normalized. PNG stdout .log is binary, not authored text. Historical raw10-byte a-gates2 Nodeversion log still needs-text atcommit. Authoredtext/XML LF. Initial read-only shell discovery timing unavailable, honestly marked null; timed gate receipts acquired before input.

Remaining: coordinator inspect every frame; B2 D/E/F (D03/D04 BLOCKED by D3 limitation), G settings/restore work, later authorized fixes/reruns and final phaseC. No settings changes, fixes, product/test/config edits, handoff/submission, delegation/review, staging/commit/push. Metro and emulator left running. STOP.
