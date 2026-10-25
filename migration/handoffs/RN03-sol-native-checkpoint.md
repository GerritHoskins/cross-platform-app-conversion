RN03 Sol native recovery checkpoint — BLOCKED

Branch migration/slice-1
HEAD f78a759741b57ed1a19c7b6630af67640571ff61
Runtime invocation: openai-codex/gpt-6.1-sol/high; no fallback, profile edit, delegation or formal review dispatch. This checkpoint is not package approval.

New acceptance captures
None. Required targets remain UNCATURED:
  migration/evidence/RN03/r2-native-sol-recovery/RN03-05-ionic-cleared-restored.png and .xml
  migration/evidence/RN03/r2-native-sol-recovery/RN03-06-search-no-match.png and .xml
  migration/evidence/RN03/r2-native-sol-recovery/RN03-07-favorites-empty.png and .xml
  migration/evidence/RN03/r2-native-sol-recovery/RN03-08-all-sessions-restored.png and .xml
Those target PNG/XML files do not exist; no copying/retimestamping or acceptance relabeling was performed.

New recovery records
  migration/evidence/RN03/r2-native-sol-recovery/capture-index.json (captures=[], BLOCKED)
  migration/evidence/RN03/r2-native-sol-recovery/capture-notes.md (actual commands, times/exits, diagnosis and limitations)
  tools/qwen-supervisor/.runs/sol-native-20261024-r2/commands.jsonl
  tools/qwen-supervisor/.runs/sol-native-20261024-r2/preservation-baseline.json
  tools/qwen-supervisor/.runs/sol-native-20261024-r2/preservation-check.json
  tools/qwen-supervisor/.runs/sol-native-20261024-r2/result.json

Preserved existing frames 01-04, exact paths and computed hashes
  RN03-01-initial-schedule
    PNG: migration/evidence/RN03/r2-native-recovery/RN03-01-initial-schedule.png
    XML: migration/evidence/RN03/r2-native-recovery/RN03-01-initial-schedule.xml
    PNG SHA256: 4bb41c25d12ea3c6b4450aee29d355b206d45b9bdd221730e6de5de4506bc58f
    XML SHA256: 58926c3f0e41bced8119daa3a07a2cb6077d18f80f36ae1451f752f2ab1311a4
  RN03-02-search-ionic-top
    PNG: migration/evidence/RN03/r2-native-recovery/RN03-02-search-ionic-top.png
    XML: migration/evidence/RN03/r2-native-recovery/RN03-02-search-ionic-top.xml
    PNG SHA256: 0a7fc50afdcc953ef7f7e5b144edb734d7a25d583cb8bc486f67b1758defa75e
    XML SHA256: 9e7cb9775d8299d4240ceb294513be25b7ce6570ab075885f5d2da6b64db7d8e
  RN03-03-search-ionic-scrolled
    PNG: migration/evidence/RN03/r2-native-recovery/RN03-03-search-ionic-scrolled.png
    XML: migration/evidence/RN03/r2-native-recovery/RN03-03-search-ionic-scrolled.xml
    PNG SHA256: 9b399327cc2e8a6de13eb70f59e2fcdf84fe20218a73211e8ffd436c3ad7fc60
    XML SHA256: 3bed8eb8f1990853037937e2d22a1bd613da179c4ed3d6b26d9ca3fbc9fe1a41
  RN03-04-search-ionic-bottom
    PNG: migration/evidence/RN03/r2-native-recovery/RN03-04-search-ionic-bottom.png
    XML: migration/evidence/RN03/r2-native-recovery/RN03-04-search-ionic-bottom.xml
    PNG SHA256: cf2c1dffd4d4bd1f952942e2aa89a38c86d569e782592c1a7089ab681b28ab84
    XML SHA256: 2e705bc81fbdd9d72a5b15cc4e09db164ca008aa38e6dd315ab4a7bea4f3135e

Blocker and correct diagnosis
The historical stream command line 119 used input keyevent 123 six times. Official Android docs confirm 123=KEYCODE_MOVE_END, 67=KEYCODE_DEL (Backspace). The previous no-clear result is not evidence of an actual input/focus failure. This run could not obtain a fresh hierarchy to locate Search sessions: Android activity and window services reported not found, XML extraction exited 137 or timed out, and fresh diagnostic screencap timed out. Thus zero corrected clear/type attempts occurred; no current package/field/query/mode verification or tutorial visual inspection was possible. No fresh diagnostic pair could be saved.

Preservation and Metro
48 pre-existing files (all RN03 evidence plus app src/tests) were hash-snapshotted and rechecked unchanged by recovery.mjs verify-preservation and finalize.mjs. Other existing tracked/untracked changes were left alone. IDEA.md was not read/edited/hashed. Metro remained HTTP 200 packager-status:running on 8082 at 01:46:15+02:00; existing reverse host-32 tcp:8082 tcp:8082 was untouched. No device/app/test/settings/IME change, service restart, dependency install, commit, RN04 work or review dispatch.

Remaining coordinator work
Resolve the live Android service/capture unavailability under separate authorization (this executor did not restart anything). Resume normal-UI capture recovery with fresh XML-derived bounds; use symbolic KEYCODE_MOVE_END then KEYCODE_DEL, verify actual dev.translationtest.rn Search sessions text after actions, and obey the two-attempt bound. The authorized output directory now exists, so a new executor must not overwrite it without fresh explicit authorization. Required states: 05 empty/All/Breakfast; 06 exact zzz-no-such-session/All/no-match message/no rows; 07 empty/Favorites/No favorite sessions.; 08 empty/All/Breakfast.
Independent pixel inspection for all evidence remains PENDING. After real complete captures and independent inspection, remaining structural validation, full RN03-r2 packet/hashes and independent Sol/high formal review are still required; no approval or PASS is claimed.

Initial curl accidentally targeted native C:/tmp/android-keyevent-reference.html; its bytes differ from the retained reference, so no deletion was attempted. Coordinator cleanup needed; not used as evidence.
