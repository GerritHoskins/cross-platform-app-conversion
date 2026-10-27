# NS06 Phase B run 2 checkpoint

Status: CHECKPOINTED — observation BLOCKED by the open-row XML proof criterion; strict assertion FAIL records retained. STOP before fixes or Phase C. This is not a diagnosis of a product swipe defect.
Observer: Hermes GPT-6.1 Sol high (device actions); pixels pending coordinator
Evidence: migration/evidence/NS06/b-device2/results-b.json
Run: tools/qwen-supervisor/.runs/sol-ns06-r1-b2-20261027/

## Gate and preservation

- Branch migration/slice-1; HEAD 96139c00be18030b68e0fa0f14c64a78df853e32; index empty. Branch/HEAD/index/full porcelain were buffered and the gate evaluated before the first migration/ write. b-device2/ was absent.
- All three NS06 targets match a-gates2/final-audit.json:allowedTargets. All 27,716 launch-baseline hashes match at entry and final preservation; zero mismatches. All 1,711 earlier NS06 evidence files and their path set unchanged. Prior checkpoints and coordinator-owned NS06.md unchanged. No unexpected porcelain.
- APK: 118504855 bytes; SHA-256 e58c43978bb5ae3c6b632160ee4d5a731c5ad3826e8d76f7debd02773810b341. adb install -r succeeded; installed base.apk sha256sum is identical. No rebuild.
- Package service reported found before every other ADB operation. Only RN01_API36 / emulator-5554 used. RN package remains installed at its unchanged path.

## Open-row observation blocker

- R=session-1, Breakfast, fully visible. B2 starts at bounds [0,711][807,960]. The first prescribed 300 ms reveal changes these to [0,711][555,960]; the one prescribed 200 ms retry leaves those bounds unchanged. Both exact commands and before/after bounds are in B2-reveal.json; PNG/XML retained.
- Right edge moves left by 252 px, exactly 96 dp at density 420. Raw left edge remains 0. Child text right edges also move 765 to 513; their left edges clip from 42 to 0. See B2-xml-clipping-question.json and B2-clipping-measurement.json. The apparent viewport clipping is an interpretation, not a fabricated negative left coordinate.
- The observer's strict predicate required BOTH left and right edges to move left by about 252 px. Thus it recorded FAIL despite the observed right-edge movement. The prompt explicitly defined open-row proof and required recording left edges; the executor did not silently relax that condition or perform a hidden-action tap using a substitute proof.
- Clarification was requested in live commentary, with a bounded 60-second no-action wait; no authorization was received during this run. Original FAIL records remain intact. Product motion was observed; product failure is NOT established by these predicate failures.
- Five reveal sites (B2, B6, B7-A, B8-mode, B8-filter), each 300 ms plus exactly one 200 ms retry: every initial reveal changes the right edge 807 to 555, while the raw left edge stays 0. Exact commands/coordinates, row identities and all measurements are indexed in observation-summary.json. No additional gesture experiment.
- Consequently: no swipe-action tap, no substitute column-1 favorite tap, no add/already-added/remove dialog assertion. B2 dependent cases, B3/B4, open-row link guard, single-open replacement/right-close, and accepted open-row mode/filter closing remain BLOCKED. Missing frames for unexecuted dependent steps were not fabricated.

## Independent observations

- B-install and B1 PASS: cold Conference / 8:00 am schedule, ALL SESSIONS selected, Filter enabled, labelled column-1 Favorite buttons present.
- B5 PASS: exactly one ListView-bounded input swipe 540 1800 540 900 400. First heading/row moves from 8:00 am / Breakfast (session-1) to 10:00 am / Migrating to Ionic (session-5). All session bounds have closed left/right edges 0/807; still the schedule, no detail navigation.
- B6 normal closed-row navigation and ActionBar Back PASS independently: S=session-5, Migrating to Ionic. After failed strict reveal proof, mode switching reset XML-proven closed bounds before the independent row-centre tap. Matching detail opens; native ImageButton content-desc Back returns to schedule. This is NOT successful open-row link-guard evidence.
- Mode switching stays responsive and shows No favorite sessions.; no add/remove outcome is inferred from that empty state.
- B8 independent filter/restoration PASS: Deselect All, exactly Food on, Done gives only Breakfast/session-1 and Lunch/session-12, each Food, with closed bounds. Reopen, Select All checks all ten switches; Done restores All sessions / all tracks / 8:00 am. Modal intermediate PNG/XML pairs retained. Open-row-close acceptance is separately BLOCKED.
- B9 labelled column-1 buttons PASS: e.g. resource-id favorite-1, text Favorite, raw content-desc Favorite Breakfast. Favorite. No swipe-action-* node appears separately in compressed accessibility XML. Swipe/button coexistence remains BLOCKED rather than PASS.
- B-logcat PASS within bounded scope: initial/before/after PID 17474. logcat -d -t 400 --pid=17474 has no detected fatal-exception/signal pattern. All 40 W/E lines retained verbatim in B-logcat-warnings-errors-verbatim.txt, including CPU-variant, ashmem, HWUI and WindowOnBackDispatcher warnings. Not warning-free or exhaustive.
- Before/after environment identical: sdk_gphone64_x86_64; SDK 36; physical density 420; font_scale 1.0; Night mode no; enabled accessibility services null. RN path unchanged.
- B11-final PASS: app foreground on schedule, All sessions, all tracks restored, 8:00 am, closed row bounds.

## Evidence and limits

- 29 PNG/XML pairs indexed in capture-index.json. All PNG signatures/chunk CRCs/IDAT decompression and XML parsing validated; pair hashes checked. Every PNG awaits coordinator pixel/privacy inspection; no executor pixel approval.
- Every ADB child targets emulator-5554 with a timeout no greater than 30 seconds. XML dumps use ns06b2.xml, at most five attempts, two-second retry waits when time remains. Post-action successful readiness polls take at most 5.762712900002953 seconds. Strict failed polls have a maximum recorded elapsed 10.042252299987013 seconds: the 10-second deadline plus subprocess termination/receipt overhead is disclosed, not hidden. Full raw timings in observation-summary.json and receipts.
- Taps use centres from fresh XML bounds on permitted controls only. Visible text/content-desc matching uses case-insensitive equality, never substring; automationText is exposed as resource-id. No SearchBar tap, text input, hardware key event, settings change or dumpsys input_method.
- Receipts plus commands.jsonl retain child arguments, real timings, stdout/stderr and exits. Outer terminal provenance is separately labelled; unavailable tool-level timing is null, not invented. Helper static-language-server warnings did not prevent actual Python execution; no product lint/test/build was run in this phase.
- Results include overlapping aggregate/sub-case statuses: 13 PASS, 9 FAIL, 19 BLOCKED. FAIL includes the strict observer predicate and its aggregates, not proof of a product defect. See results-b.json for every case and evidence reference.
- No product/test/config edit, fix, rebuild, handoff/submission/freeze, delegation/review dispatch, staging, commit or push. Earlier history is immutable. Conference JSON and IDEA.md were not decoded/read as text; preservation was hash-only.

Pending: coordinator disposition of clipped-XML open-row proof, pixel inspection of every PNG, and separately authorized continuation if needed. No Phase C or package-acceptance claim.

Machine result: tools/qwen-supervisor/.runs/sol-ns06-r1-b2-20261027/result.json
STOP at this checkpoint.
