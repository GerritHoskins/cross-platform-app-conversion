# RN07 G03 offline accessibility-tree audit

Observer: Hermes GPT-6.1 Sol high (offline tree audit)
Candidate: 2. Overall G03: FAIL. G04: BLOCKED (automation limit, D10).

Tree evidence only. No speech, traversal, device/emulator/Metro/network use, or pixel inspection. PASS below means the stated tree assertion, not full TalkBack acceptance.

Selected 17 indexed XML frames; extracted 422 nodes. Full paths, raw flags, hashes and evidence are in inputs.json, nodes.json and findings.json. Node paths use zero-based XML sibling ordinals (not TalkBack order).

## Per-surface summary

| Surface / frame | Settings | Extracted nodes | Tree status / observations |
| --- | --- | ---: | --- |
| schedule-top-all: F01-all | font1.0 / light/default or restored | 40 | FAIL: A11Y-001, A11Y-002, A11Y-003, A11Y-007, A11Y-008, A11Y-009, A11Y-013, A11Y-014 |
| schedule-favorites: F01-single-favorite | font1.0 / light/default or restored | 20 | FAIL: A11Y-001, A11Y-002, A11Y-003, A11Y-007, A11Y-008, A11Y-009, A11Y-013, A11Y-014 |
| schedule-swipe-revealed: F01-add-reveal | font1.0 / light/default or restored | 39 | FAIL: A11Y-001, A11Y-002, A11Y-007, A11Y-008, A11Y-009, A11Y-013, A11Y-014 |
| alert-favorite-added: F01-add-action | font1.0 / light/default or restored | 3 | LIMITED: A11Y-001, A11Y-011, A11Y-013 |
| alert-already-added: F01-duplicate-action | font1.0 / light/default or restored | 5 | LIMITED: A11Y-001, A11Y-011, A11Y-013 |
| alert-remove-favorite: F01-removal-action | font1.0 / light/default or restored | 5 | LIMITED: A11Y-001, A11Y-011, A11Y-013 |
| detail-ionic4-before-default: G02-row-first | font1.0 / light/default or restored | 23 | LIMITED: A11Y-001, A11Y-006, A11Y-008, A11Y-013 |
| detail-ionic4-before: G07-dark-detail4 | font1.0 / dark | 23 | LIMITED: A11Y-001, A11Y-006, A11Y-008, A11Y-013 |
| detail-ionic4-after: F03b-correct-detail | font1.0 / light/default or restored | 23 | LIMITED: A11Y-001, A11Y-006, A11Y-008, A11Y-013 |
| detail-breakfast1-before: C06-detail-initial | font1.0 / light/default or restored | 22 | LIMITED: A11Y-001, A11Y-005, A11Y-008, A11Y-013 |
| detail-breakfast1-after: C06-star-on | font1.0 / light/default or restored | 22 | LIMITED: A11Y-001, A11Y-005, A11Y-008, A11Y-013 |
| detail-breakfast1-off: C06-star-off | font1.0 / light/default or restored | 22 | LIMITED: A11Y-001, A11Y-005, A11Y-008, A11Y-013 |
| filter-top-dark: G07-dark-filter | font1.0 / dark | 43 | LIMITED: A11Y-001, A11Y-004, A11Y-008, A11Y-010, A11Y-013 |
| filter-bottom-default: E06-bottom-filter | font1.0 / light/default or restored | 43 | LIMITED: A11Y-001, A11Y-004, A11Y-008, A11Y-010, A11Y-013 |
| filter-none: E06-bottom-none | font1.0 / light/default or restored | 43 | LIMITED: A11Y-001, A11Y-004, A11Y-008, A11Y-010, A11Y-013 |
| filter-ionic-only: E06-bottom-ionic | font1.0 / light/default or restored | 43 | LIMITED: A11Y-001, A11Y-004, A11Y-008, A11Y-010, A11Y-013 |
| alert-dark-favorite-added: G07-dark-favorite | font1.0 / dark | 3 | LIMITED: A11Y-001, A11Y-011, A11Y-012, A11Y-013 |

## Subcases

| Subcase | Status | Findings |
| --- | --- | --- |
| G03.labels | PASS | A11Y-001 |
| G03.roles | FAIL | A11Y-002 |
| G03.mode-state | PASS | A11Y-003 |
| G03.filter-checkboxes | PASS | A11Y-004 |
| G03.detail-star-state | PASS | A11Y-005 |
| G03.ionic4-star-sequence | LIMITED | A11Y-006 |
| G03.row-context | LIMITED | A11Y-007 |
| G03.duplicate-focus | LIMITED | A11Y-008 |
| G03.hidden-swipe-actions | FAIL | A11Y-009 |
| G03.filter-controls | PASS | A11Y-010 |
| G03.alert-buttons | PASS | A11Y-011 |
| G03.dark-alert | PASS | A11Y-012 |
| G03.focus-order-and-announcements | LIMITED | A11Y-013 |
| G03.row-entry-role | LIMITED | A11Y-014 |
| G04 | BLOCKED | D10: no automated containment/return attempt |

## Findings

### A11Y-001 — PASS — Required clickable actions have non-empty tree labels

{"clickableCount":151,"unlabeledClickableCount":0,"iconOnlyNamedAction":"Navigate up ImageButton is labeled; star has descriptive text"}
Limit: Non-empty labels do not prove spoken wording or understandable context for generic swipe labels.
Evidence (representative; all instances in findings.json):
- migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[3]
- migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[4]
- migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[5]

### A11Y-002 — FAIL — Swipe Favorite/Remove actions lack an exposed button role

{"failures":9,"classes":["android.view.ViewGroup"],"checkable":"false"}
Limit: Clickable=true provides an action flag but is not an exposed button role. No speech was captured.
Evidence (representative; all instances in findings.json):
- migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[7]/node[0]/node[1]/node[0]/node[2]/node[0]/node[0]
- migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[7]/node[0]/node[3]/node[0]/node[2]/node[0]/node[0]
- migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[7]/node[0]/node[4]/node[0]/node[2]/node[0]/node[0]

### A11Y-003 — PASS — All and Favorites expose opposite selected states

{"allFrame":{"All":true,"Favorites":false},"favoritesFrame":{"All":false,"Favorites":true}}
Evidence (representative; all instances in findings.json):
- migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[4]
- migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[5]
- migration/evidence/RN07/g-settings2a/F01-single-favorite.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[4]

### A11Y-004 — PASS — Track checkbox flags agree with exposed checked/unchecked glyphs

{"checkboxInstances":40,"mismatches":0,"states":[{"frame":"G07-dark-filter","checked":["Communication","Design","Documentation","Food","Ionic","Navigation","Services","Tooling","Vue","Workshop"]},{"frame":"E06-bottom-filter","checked":["Communication","Design","Documentation","Food","Ionic","Navigation","Services","Tooling","Vue","Workshop"]},{"frame":"E06-bottom-none","checked":[]},{"frame":"E06-bottom-ionic","checked":["Ionic"]}]}
Limit: Visible state here means glyph text in XML, not pixel inspection.
Evidence (representative; all instances in findings.json):
- migration/evidence/RN07/g-settings2a/G07-dark-filter.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[6]/node[0]/node[0]
- migration/evidence/RN07/g-settings2a/G07-dark-filter.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[6]/node[0]/node[0]/node[0]
- migration/evidence/RN07/g-settings2a/G07-dark-filter.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[6]/node[0]/node[1]

### A11Y-005 — PASS — Breakfast star exposes label and selected changes on/off

{"before":{"label":"Add to favorites","selected":false,"glyph":"☆"},"after":{"label":"Remove from favorites","selected":true,"glyph":"★"},"off":{"label":"Add to favorites","selected":false,"glyph":"☆"}}
Limit: This proves tree-state changes in the captured C06 sequence, not announcements.
Evidence (representative; all instances in findings.json):
- migration/evidence/RN07/g-settings2a/C06-detail-initial.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[0]/node[0]/node[4]
- migration/evidence/RN07/g-settings2a/C06-star-on.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[0]/node[0]/node[4]
- migration/evidence/RN07/g-settings2a/C06-star-off.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[0]/node[0]/node[4]

### A11Y-006 — LIMITED — Ionic detail states are available, but not an actual before/after star-toggle sequence

{"beforeFrames":["G02-row-first","G07-dark-detail4"],"afterFrame":"F03b-correct-detail","before":{"label":"Add to favorites","selected":false},"after":{"label":"Remove from favorites","selected":true},"cause":"F03b list swipe Favorite action; not a detail star toggle","coverage":"Requested exact Ionic star-action pair unavailable in this input run; do not substitute Breakfast or cross-run data as that pair"}
Limit: Different captures/processes; no causal Ionic star-toggle claim. C06 actual star sequence is Breakfast (1).
Evidence (representative; all instances in findings.json):
- migration/evidence/RN07/g-settings2a/G02-row-first.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[0]/node[0]/node[5]
- migration/evidence/RN07/g-settings2a/G07-dark-detail4.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[0]/node[0]/node[5]
- migration/evidence/RN07/g-settings2a/F03b-correct-detail.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[0]/node[0]/node[5]

### A11Y-007 — LIMITED — Complete row subtrees contain title/time/room/track; clipped bottom rows omit context

{"completeRows":[{"frame":"F01-all","title":"Breakfast","texts":["Breakfast","8:00 am–9:00 am · Dining Hall","Food"]},{"frame":"F01-all","title":"University of Ionic","texts":["University of Ionic","9:15 am–9:30 am · Hall 3","Ionic"]},{"frame":"F01-all","title":"Getting Started with Ionic","texts":["Getting Started with Ionic","9:30 am–9:45 am · Hall 2","Ionic"]},{"frame":"F01-single-favorite","title":"Breakfast","texts":["Breakfast","8:00 am–9:00 am · Dining Hall","Food"]},{"frame":"F01-add-reveal","title":"Breakfast","texts":["Breakfast","8:00 am–9:00 am · Dining Hall","Food"]},{"frame":"F01-add-reveal","title":"University of Ionic","texts":["University of Ionic","9:15 am–9:30 am · Hall 3","Ionic"]},{"frame":"F01-add-reveal","title":"Getting Started with Ionic","texts":["Getting Started with Ionic","9:30 am–9:45 am · Hall 2","Ionic"]}],"partialRows":[{"frame":"F01-all","title":"Ionic Tooling","texts":["Ionic Tooling"]},{"frame":"F01-add-reveal","title":"Ionic Tooling","texts":["Ionic Tooling"]}],"parentDescription":"Row clickable content-desc is title only; metadata is nonfocusable child text"}
Limit: Partial Ionic Tooling at the viewport bottom is not evidence of permanently missing data. Accessibility reachability/grouping needs manual traversal.
Evidence (representative; all instances in findings.json):
- migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[7]/node[0]/node[1]/node[0]/node[1]/node[0]/node[1]
- migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[7]/node[0]/node[1]/node[0]/node[1]/node[0]/node[1]/node[0]
- migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[7]/node[0]/node[1]/node[0]/node[1]/node[0]/node[1]/node[1]

### A11Y-008 — LIMITED — Parent labels repeat as child text, without a second explicit focusable node

{"duplicateLabelPairs":114,"explicitFocusableOrClickableChildDuplicates":0,"interpretation":"Repeated labels in tree are not by themselves duplicate TalkBack focus stops; child text is focusable=false/clickable=false"}
Limit: No TalkBack traversal or focus order; cannot exclude auto-focusable text or announcement duplication. Multiple generic Favorite nodes are separate controls, not same-control child duplicates.
Evidence (representative; all instances in findings.json):
- migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[4]
- migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[4]/node[0]
- migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[5]

### A11Y-009 — FAIL — Closed swipe panels remain clickable and focusable in the dumped tree

{"hiddenActionInstances":8,"labels":["Favorite","Remove"],"states":[{"frame":"F01-all","panel":"swipe-action-1","clickable":"true","focusable":"true"},{"frame":"F01-all","panel":"swipe-action-4","clickable":"true","focusable":"true"},{"frame":"F01-all","panel":"swipe-action-2","clickable":"true","focusable":"true"},{"frame":"F01-all","panel":"swipe-action-3","clickable":"true","focusable":"true"},{"frame":"F01-single-favorite","panel":"swipe-action-1","clickable":"true","focusable":"true"},{"frame":"F01-add-reveal","panel":"swipe-action-4","clickable":"true","focusable":"true"},{"frame":"F01-add-reveal","panel":"swipe-action-2","clickable":"true","focusable":"true"},{"frame":"F01-add-reveal","panel":"swipe-action-3","clickable":"true","focusable":"true"}],"comparison":"F01-all row1 content x76..1004 covers panel x786..1038; F01-add-reveal content x42..752 uncovers row1 panel, whose flags stay true; other rows remain closed"}
Limit: FAIL is tree exposure, not proof TalkBack announces or activates an obscured action. Closed/revealed assignment comes from indexed F01 captures plus sibling geometry.
Evidence (representative; all instances in findings.json):
- migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[7]/node[0]/node[1]/node[0]/node[2]/node[0]
- migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[7]/node[0]/node[1]/node[0]/node[2]/node[0]/node[0]
- migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[7]/node[0]/node[3]/node[0]/node[2]/node[0]

### A11Y-010 — PASS — Filter close/apply/bulk actions are labeled buttons; top and final track fit

{"controls":["Navigate up","Reset","Deselect All","Select All","Done"],"top":"Communication [42,591][1038,746]","bottom":"Workshop [42,2177][1038,2333]","viewport":"[42,591][1038,2358]","note":"Top and bottom are both present in each selected default-font filter XML; no distinct bottom-scroll is required/claimed. Done is at the top, not below tracks."}
Limit: No focus containment/return or functional activation credit. E06-bottom refers to schedule pre-scroll, not filter scrolling.
Evidence (representative; all instances in findings.json):
- migration/evidence/RN07/g-settings2a/G07-dark-filter.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]
- migration/evidence/RN07/g-settings2a/G07-dark-filter.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[2]
- migration/evidence/RN07/g-settings2a/G07-dark-filter.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[3]

### A11Y-011 — PASS — Alert buttons have text labels and clickable=true

{"buttons":[{"frame":"F01-add-action","label":"OK","clickable":"true"},{"frame":"F01-duplicate-action","label":"CANCEL","clickable":"true"},{"frame":"F01-duplicate-action","label":"REMOVE","clickable":"true"},{"frame":"F01-removal-action","label":"CANCEL","clickable":"true"},{"frame":"F01-removal-action","label":"REMOVE","clickable":"true"},{"frame":"G07-dark-favorite","label":"OK","clickable":"true"}],"titles":[{"frame":"F01-add-action","titles":["Favorite Added"]},{"frame":"F01-duplicate-action","titles":["Favorite already added"]},{"frame":"F01-removal-action","titles":["Remove Favorite"]},{"frame":"G07-dark-favorite","titles":["Favorite Added"]}]}
Limit: No dialog focus containment or return tested.
Evidence (representative; all instances in findings.json):
- migration/evidence/RN07/g-settings2a/F01-add-action.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[2]/node[0]/node[0]
- migration/evidence/RN07/g-settings2a/F01-duplicate-action.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[2]/node[0]/node[0]
- migration/evidence/RN07/g-settings2a/F01-duplicate-action.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[2]/node[0]/node[1]

### A11Y-012 — PASS — Dark alert retains its named OK Button

{"label":"OK","clickable":true,"night":"yes","fontScale":"1.0"}
Limit: No pixel, contrast or spoken-announcement conclusion.
Evidence (representative; all instances in findings.json):
- migration/evidence/RN07/g-settings2a/G07-dark-favorite.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[2]/node[0]/node[0]

### A11Y-013 — LIMITED — Speech, traversal and container focus behavior are outside offline tree evidence

{"unlabeledFocusableNonClickableContainers":17,"classes":["android.widget.AbsListView","android.widget.ScrollView"],"interpretation":"List/scroll/button-panel containers are not unlabeled required clickable actions; their TalkBack stops remain unverified"}
Limit: D10: no device, no speech, no traversal. XML preorder is not claimed as accessibility focus order.
Evidence (representative; all instances in findings.json):
- migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[7]
- migration/evidence/RN07/g-settings2a/F01-single-favorite.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[7]
- migration/evidence/RN07/g-settings2a/F01-add-reveal.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[7]

### A11Y-014 — LIMITED — Row entry is clickable with title but uses generic View class

{"class":"android.view.View","clickable":true,"focusable":true,"checkable":false,"interpretation":"Title and click action exist, but an explicit button/link semantic class is absent; spoken role unknown"}
Limit: Not conflated with labeled Button controls or native checkbox roles.
Evidence (representative; all instances in findings.json):
- migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[7]/node[0]/node[1]/node[0]/node[1]/node[0]/node[1]
- migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[7]/node[0]/node[3]/node[0]/node[1]/node[0]/node[1]
- migration/evidence/RN07/g-settings2a/F01-all.xml :: /displays[0]/display[0]/window[1]/hierarchy[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[0]/node[1]/node[1]/node[0]/node[0]/node[0]/node[1]/node[0]/node[7]/node[0]/node[4]/node[0]/node[1]/node[0]/node[1]

## Coverage gaps and follow-up

- No University of Ionic actual star-toggle before/after pair exists in selected input run: Ionic unfavorited/favorited states selected without claiming the causal star action; Breakfast C06 is the real toggle sequence
- Filter top and bottom both fit at font1.0; E06-bottom-filter contains Communication through Workshop without filter scrolling
- Manual TalkBack walkthrough remains necessary for announcements, focus order/duplication, row metadata reachability, hidden-panel behavior, and G04 containment/return. No manual work was attempted or dispatched.
- A11Y-002 and A11Y-009 are tree defects, not inferred speech defects. No fixes or product/test/config changes authorized.
- Earlier runs/checkpoints, README.md and pixel-inspection-coordinator.md remain immutable. IDEA.md contents were not read.
- Commands and receipts: commands.jsonl plus command-*.receipt.json/stdout.log/stderr.log. Outer launchers are self-instrumented after Node initialization (startup excluded); child spawn timings are fully measured. Tool reads/writes are file operations, not shell commands.
