RN07 G03 offline accessibility-tree audit — CHECKPOINTED
Executor/observer: Hermes GPT-6.1 Sol high (offline tree audit)
P = migration/evidence/RN07/a11y-audit
R = tools/qwen-supervisor/.runs/sol-rn07-r1-a11y-20261026

Method and limits
  D10 offline parsing of candidate-2 uiautomator XML only. No speech capture, no TalkBack traversal, no device/emulator/Metro/network interaction, no pixel inspection. XML preorder is not accessibility focus order. PASS means only the stated tree assertion. G03 overall FAIL because tree FAILs were found; otherwise D10 overall would be LIMITED. G04 BLOCKED (automation limit, D10), not attempted.
  No product/test/config changes, fixes, final handoff/submission, staging/commit/push, delegation or review dispatch. README.md and pixel-inspection-coordinator.md never written; IDEA.md contents never read.

Gates and preservation
  Branch migration/slice-1; HEAD 6e4bf9682285391ab00dca3b0a7dc2b01b61832a; diff f5a1d83..HEAD exactly .gitignore; empty index. Entry/final candidate2 files/additionalFiles: 35 SHA-256 matches. Raw untrimmed porcelain paths parsed from index3 with classes (a)–(f) from G2a; this session only adds a11y-audit evidence and this checkpoint.
  17279 pre-existing RN07 evidence/checkpoint/package/checklist/coordinator-document paths preserved exactly. P/entry-gate.json, final-gate.json, history-entry.json, history-final.json and history-comparison.json. git diff --check passes.

Inputs
  17 indexed candidate-2 XML files from g-settings2a only; 422 retained app nodes. Exact paths, SHA-256, timestamps, settings and selection reasons: P/inputs.json. Every selected frame is font1.0; G07-dark-* frames night=yes, all others default/restored light. No G05 font2.0 or launcher/LogBox/Gboard-toolbar subject selected.
  F01-all — schedule-top-all — no
  F01-single-favorite — schedule-favorites — no
  F01-add-reveal — schedule-swipe-revealed — no
  F01-add-action — alert-favorite-added — no
  F01-duplicate-action — alert-already-added — no
  F01-removal-action — alert-remove-favorite — no
  G02-row-first — detail-ionic4-before-default — no
  G07-dark-detail4 — detail-ionic4-before — yes
  F03b-correct-detail — detail-ionic4-after — no
  C06-detail-initial — detail-breakfast1-before — no
  C06-star-on — detail-breakfast1-after — no
  C06-star-off — detail-breakfast1-off — no
  G07-dark-filter — filter-top-dark — yes
  E06-bottom-filter — filter-bottom-default — no
  E06-bottom-none — filter-none — no
  E06-bottom-ionic — filter-ionic-only — no
  G07-dark-favorite — alert-dark-favorite-added — yes

Per-subcase statuses and evidence (full file + zero-based XML node path)
  G03.labels PASS — A11Y-001: Required clickable actions have non-empty tree labels
    migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[3]
  G03.roles FAIL — A11Y-002: Swipe Favorite/Remove actions lack an exposed button role
    migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[7]/node[0]/node[1]/node[0]/node[2]/node[0]/node[0]
  G03.mode-state PASS — A11Y-003: All and Favorites expose opposite selected states
    migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[4]
  G03.filter-checkboxes PASS — A11Y-004: Track checkbox flags agree with exposed checked/unchecked glyphs
    migration/evidence/RN07/g-settings2a/G07-dark-filter.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[6]/node[0]/node[0]
  G03.detail-star-state PASS — A11Y-005: Breakfast star exposes label and selected changes on/off
    migration/evidence/RN07/g-settings2a/C06-detail-initial.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[0]/node[0]/node[4]
  G03.ionic4-star-sequence LIMITED — A11Y-006: Ionic detail states are available, but not an actual before/after star-toggle sequence
    migration/evidence/RN07/g-settings2a/G02-row-first.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[0]/node[0]/node[5]
  G03.row-context LIMITED — A11Y-007: Complete row subtrees contain title/time/room/track; clipped bottom rows omit context
    migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[7]/node[0]/node[1]/node[0]/node[1]/node[0]/node[1]
  G03.duplicate-focus LIMITED — A11Y-008: Parent labels repeat as child text, without a second explicit focusable node
    migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[4]
  G03.hidden-swipe-actions FAIL — A11Y-009: Closed swipe panels remain clickable and focusable in the dumped tree
    migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[7]/node[0]/node[1]/node[0]/node[2]/node[0]/node[0]
  G03.filter-controls PASS — A11Y-010: Filter close/apply/bulk actions are labeled buttons; top and final track fit
    migration/evidence/RN07/g-settings2a/G07-dark-filter.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]
  G03.alert-buttons PASS — A11Y-011: Alert buttons have text labels and clickable=true
    migration/evidence/RN07/g-settings2a/F01-add-action.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[2]/node[0]/node[0]
  G03.dark-alert PASS — A11Y-012: Dark alert retains its named OK Button
    migration/evidence/RN07/g-settings2a/G07-dark-favorite.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[2]/node[0]/node[0]
  G03.focus-order-and-announcements LIMITED — A11Y-013: Speech, traversal and container focus behavior are outside offline tree evidence
    migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[7]
  G03.row-entry-role LIMITED — A11Y-014: Row entry is clickable with title but uses generic View class
    migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[7]/node[0]/node[1]/node[0]/node[1]/node[0]/node[1]
  G04 BLOCKED — D10 automation limit; no focus containment/return attempt. migration/work-packages/RN07.md:49; migration/handoffs/RN07-checkpoint-g2c.md:30-37.

Findings and coverage limits
  A11Y-002 FAIL: nine swipe-action instances expose android.view.ViewGroup/checkable=false rather than Button/checkable role. The revealed Breakfast action has the same generic role.
  A11Y-009 FAIL: eight closed-panel action instances remain clickable=true/focusable=true (four All, one Favorites, three closed siblings in the revealed-row capture). This is tree exposure, NOT a claim of TalkBack announcements or successful hidden-action activation.
  All 151 clickable app-node instances have non-empty labels. Modes expose opposite selected state. Forty named CheckBox instances match their child ☑/☐ glyph state. Breakfast actual C06 star sequence exposes Add/selected=false -> Remove/selected=true -> Add/selected=false. Filter close/Done/bulk actions and alert OK/CANCEL/REMOVE are labeled clickable buttons.
  Exact University of Ionic before/after STAR-action pair is unavailable in g-settings2a: G02-row-first/G07-dark-detail4 are unfavorited, F03b-correct-detail is favorited after LIST action. Those states are included but not falsely presented as a captured Ionic star activation. C06 star toggle is Breakfast (1), not Ionic (4). G03.ionic4-star-sequence LIMITED.
  Filter top Communication and bottom Workshop both fit in selected XML at font1.0. E06-bottom-filter means schedule pre-scroll, not a filter-bottom scroll; no such scroll is claimed. Done is at the top.
  Complete row subtrees have title/time/room/track. Clipped bottom Ionic Tooling has title only; not proof of permanent missing data. Parent row labels contain title only; child text reachability/spoken grouping remains unverified. Generic row-entry View role, 114 parent/child repeated-label pairs (zero explicitly focusable/clickable child duplicates), and 17 unlabeled focusable non-clickable list/scroll containers require manual traversal. No duplicate-stop or speech conclusion.

Artifacts and verification
  P/inputs.json; nodes.json; findings.json (14 findings, all instance evidence); results-a11y.json (RN07 fields, run=a11y-audit, candidate=2); audit.md (per-surface table).
  Parser nesting/entity/path and malformed-input tests passed. Artifact validator checked 422 nodes against all 1,346 raw parsed nodes in the 17 inputs, all extracted attributes/panel membership, 1,761 evidence references, result fields/statuses, source hashes, receipt consistency and authored LF. P/artifact-verification.json.
  Commands: P/commands.jsonl; command-*.receipt.json plus stdout/stderr logs. Every terminal launcher and child command is recorded. Outer launcher intervals are self-instrumented after Node initialization (startup excluded); child spawn intervals measured. File tools are file operations, not shell commands. No software build/product test rerun was needed or attempted in this read-only XML audit.

STOP / unresolved
  Manual TalkBack walkthrough remains follow-up for announcements, focus order/duplicate stops, metadata reachability, hidden panels, and G04 containment/return. No manual work or review dispatched.
  Tree FAILs are recorded without fixes. Ionic exact star-action sequence gap stays LIMITED. This is only the requested checkpoint, not package acceptance or submission. R/result.json status CHECKPOINTED; case G03 FAIL, G04 BLOCKED.
