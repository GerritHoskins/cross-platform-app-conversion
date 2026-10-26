RN07 revision 2 — result counts and case ledger
Candidate 2 unchanged. All software gates reused from c-freeze/, not rerun.
Coordinator visual gate complete: both reports; see per-case frames/verdicts in results-r2.json.
Counts distinguish checklist parents from aliases/subcases; no case status changed.

{
  "checklist": {
    "overall": {
      "total": 50,
      "PASS": 42,
      "FAIL": 1,
      "BLOCKED": 4,
      "NOT RUN": 1,
      "N/A": 1,
      "LIMITED": 1
    },
    "groups": {
      "A": {
        "total": 6,
        "PASS": 5,
        "FAIL": 0,
        "BLOCKED": 0,
        "NOT RUN": 1,
        "N/A": 0,
        "LIMITED": 0
      },
      "B": {
        "total": 7,
        "PASS": 7,
        "FAIL": 0,
        "BLOCKED": 0,
        "NOT RUN": 0,
        "N/A": 0,
        "LIMITED": 0
      },
      "C": {
        "total": 9,
        "PASS": 9,
        "FAIL": 0,
        "BLOCKED": 0,
        "NOT RUN": 0,
        "N/A": 0,
        "LIMITED": 0
      },
      "D": {
        "total": 5,
        "PASS": 3,
        "FAIL": 0,
        "BLOCKED": 2,
        "NOT RUN": 0,
        "N/A": 0,
        "LIMITED": 0
      },
      "E": {
        "total": 9,
        "PASS": 8,
        "FAIL": 0,
        "BLOCKED": 0,
        "NOT RUN": 0,
        "N/A": 1,
        "LIMITED": 0
      },
      "F": {
        "total": 5,
        "PASS": 4,
        "FAIL": 1,
        "BLOCKED": 0,
        "NOT RUN": 0,
        "N/A": 0,
        "LIMITED": 0
      },
      "G": {
        "total": 9,
        "PASS": 6,
        "FAIL": 0,
        "BLOCKED": 2,
        "NOT RUN": 0,
        "N/A": 0,
        "LIMITED": 1
      }
    }
  },
  "allEntries": {
    "overall": {
      "total": 237,
      "PASS": 185,
      "FAIL": 2,
      "BLOCKED": 15,
      "NOT RUN": 27,
      "N/A": 2,
      "LIMITED": 6
    },
    "groups": {
      "A": {
        "total": 19,
        "PASS": 17,
        "FAIL": 0,
        "BLOCKED": 0,
        "NOT RUN": 2,
        "N/A": 0,
        "LIMITED": 0
      },
      "B": {
        "total": 8,
        "PASS": 8,
        "FAIL": 0,
        "BLOCKED": 0,
        "NOT RUN": 0,
        "N/A": 0,
        "LIMITED": 0
      },
      "C": {
        "total": 19,
        "PASS": 19,
        "FAIL": 0,
        "BLOCKED": 0,
        "NOT RUN": 0,
        "N/A": 0,
        "LIMITED": 0
      },
      "D": {
        "total": 11,
        "PASS": 9,
        "FAIL": 0,
        "BLOCKED": 2,
        "NOT RUN": 0,
        "N/A": 0,
        "LIMITED": 0
      },
      "E": {
        "total": 14,
        "PASS": 13,
        "FAIL": 0,
        "BLOCKED": 0,
        "NOT RUN": 0,
        "N/A": 1,
        "LIMITED": 0
      },
      "F": {
        "total": 27,
        "PASS": 24,
        "FAIL": 2,
        "BLOCKED": 1,
        "NOT RUN": 0,
        "N/A": 0,
        "LIMITED": 0
      },
      "G": {
        "total": 139,
        "PASS": 95,
        "FAIL": 0,
        "BLOCKED": 12,
        "NOT RUN": 25,
        "N/A": 1,
        "LIMITED": 6
      }
    }
  }
}

Case | Status | Candidate | Run | Pixel frames
A01 | PASS | 2 | c-freeze (reused read-only in c-freeze2) | 0
A02 | PASS | 2 | c-freeze (reused read-only in c-freeze2) | 0
A03 | PASS | 2 | c-freeze (reused read-only in c-freeze2) | 0
A04 | NOT RUN | 2 | c-freeze export; D1 native reuse | 0
A04-native-build | NOT RUN | 2 | c-freeze export; D1 native reuse | 0
A04.js-export | PASS | 2 | c-freeze | 0
A05 | PASS | 1 | b-device1 | 5
A06 | PASS | 2 | g-settings3 | 103
A06-device | PASS | 2 | g-settings3 | 103
A06-software | PASS | 2 | c-freeze (reused read-only in c-freeze2) | 0
A06.device-B | PASS | 1 | b-device1 | 0
A06.device-C | PASS | 1 | b-device1 | 0
A06.device-metro | PASS | 2 | g-settings3 | 103
A06.device-metro.filter-detail | PASS | 2 | g-settings3 | 0
A06.device-metro.load | PASS | 2 | g-settings3 | 0
A06.device-metro.scroll | PASS | 2 | g-settings3 | 0
A06.device-metro.search-modes | PASS | 2 | g-settings3 | 0
A06.device-metro.swipe-alerts | PASS | 2 | g-settings3 | 0
A06.metro-console | PASS | 2 | g-settings3 | 103
B01 | PASS | 1 | b-device1 | 12
B01.pixel-readability | PASS | 1 | b-device1 | 10
B02 | PASS | 1 | b-device1 | 24
B03 | PASS | 1 | b-device1 | 10
B04 | PASS | 1 | b-device1 | 4
B05 | PASS | 1 | b-device1 | 11
B06 | PASS | 1 | b-device1 | 4
B07 | PASS | 1 | b-device1 | 0
C01 | PASS | 1 | b-device1 | 6
C02 | PASS | 2 | g-settings2a | 13
C03 | PASS | 1 | b-device1 | 17
C04 | PASS | 1 | b-device1 | 8
C04.cancel | PASS | 1 | b-device1 | 3
C04.remove | PASS | 1 | b-device1 | 4
C05 | PASS | 1 | b-device1 | 4
C05.cancel | PASS | 1 | b-device1 | 2
C05.confirm | PASS | 1 | b-device1 | 2
C06 | PASS | 2 | g-settings2a | 16
C06.off | PASS | 2 | g-settings2a | 3
C06.on | PASS | 2 | g-settings2a | 4
C06.star-off | PASS | 2 | g-settings2a | 3
C06.star-on | PASS | 2 | g-settings2a | 4
C07 | PASS | 1 | b-device1 | 15
C08 | PASS | 1 | b-device1 | 9
C08.live-process | PASS | 1 | b-device1 | 3
C08.new-process | PASS | 1 | b-device1 | 7
C09 | PASS | 1 | b-device1 | 0
D01 | PASS | 1 | b-device2 | 4
D01.no-description | PASS | 1 | b-device2 | 1
D02 | PASS | 1 | b-device2 | 22
D02.header-back | PASS | 1 | b-device2 | 3
D02.scroll-restoration | PASS | 1 | b-device2 | 3
D02.system-back | PASS | 1 | b-device2 | 4
D03 | BLOCKED | 1 | b-device2 | 0
D04 | BLOCKED | 1 | b-device2 | 0
D05 | PASS | 1 | b-device2 | 5
D05.detail | PASS | 1 | b-device2 | 2
D05.root | PASS | 1 | b-device2 | 2
E01 | PASS | 1 | b-device2 | 2
E02 | PASS | 1 | b-device2 | 3
E03 | PASS | 1 | b-device2 | 6
E04 | PASS | 1 | b-device2 | 4
E05 | PASS | 1 | b-device2 | 13
E06 | PASS | 1 | b-device2 | 13
E06.apply-after-bottom-scroll | PASS | 2 | g-settings2a | 3
E06.apply-after-mid-scroll | PASS | 2 | g-settings2a | 2
E06.favorite-does-not-jump | PASS | 2 | g-settings2a | 3
E07 | PASS | 1 | b-device2 | 9
E08 | N/A | 1 | b-device2 | 2
E09 | PASS | 1 | b-device2 | 9
E09.deselect | PASS | 1 | b-device2 | 3
E09.reset | PASS | 1 | b-device2 | 3
F01 | PASS | 2 | g-settings2a | 31
F01.add | PASS | 2 | g-settings2a | 3
F01.duplicate-cancel | PASS | 2 | g-settings2a | 3
F01.duplicate-confirm | PASS | 2 | g-settings2a | 3
F01.duplicate-remove | PASS | 2 | g-settings2a | 3
F01.remove-cancel | PASS | 2 | g-settings2a | 3
F01.remove-confirm | PASS | 2 | g-settings2a | 3
F02 | FAIL | 1 | b-device2 | 5
F02.diagonal-left | FAIL | 1 | b-device2 | 3
F02.diagonal-right | PASS | 1 | b-device2 | 3
F02.vertical | PASS | 1 | b-device2 | 3
F03 | PASS | 2 | g-settings2a | 22
F03.action | PASS | 2 | g-settings2a | 3
F03.action-no-navigation | PASS | 2 | g-settings2a | 3
F03.closed-row | PASS | 2 | g-settings2a | 2
F03.closed-row-detail | PASS | 2 | g-settings2a | 2
F03.invalid-target-attempt | BLOCKED | 2 | g-settings2a | 2
F04 | PASS | 2 | g-settings2a | 27
F04.recycle-observation | PASS | 2 | g-settings2a | 6
F04.scroll-away-return | PASS | 2 | g-settings2a | 6
F05 | PASS | 2 | g-settings2a | 17
F05.add | PASS | 1 | b-device2 | 3
F05.buttons-only | PASS | 2 | g-settings2a | 6
F05.duplicate-cancel | PASS | 1 | b-device2 | 3
F05.duplicate-remove | PASS | 1 | b-device2 | 3
F05.remove-cancel | PASS | 1 | b-device2 | 2
F05.remove-confirm | PASS | 1 | b-device2 | 2
G01 | PASS | 2 | g-settings2a | 17
G01.query-and-schedule | PASS | 2 | g-settings2a | 2
G02 | PASS | 2 | g-settings2a | 32
G02.favorite | PASS | 2 | g-settings2a | 2
G02.filter | PASS | 2 | g-settings2a | 2
G02.mode | PASS | 2 | g-settings2a | 2
G02.row | PASS | 2 | g-settings2a | 2
G03 | LIMITED | 2 | a11y-audit | 17
G03.alert-buttons | PASS | 2 | a11y-audit | 4
G03.dark-alert | PASS | 2 | a11y-audit | 1
G03.detail-star | NOT RUN | 2 | g-settings2c | 0
G03.detail-star-state | PASS | 2 | a11y-audit | 3
G03.detail-star-state-change | NOT RUN | 2 | g-settings2b | 5
G03.duplicate-focus | LIMITED | 2 | a11y-audit | 13
G03.duplicates-and-traps | NOT RUN | 2 | g-settings2c | 0
G03.favorite-alert-buttons | NOT RUN | 2 | g-settings2b | 5
G03.filter-bulk-and-done | NOT RUN | 2 | g-settings2c | 0
G03.filter-checkbox-checked-state | NOT RUN | 2 | g-settings2b | 5
G03.filter-checkboxes | PASS | 2 | a11y-audit | 4
G03.filter-controls | PASS | 2 | a11y-audit | 4
G03.filter-Done-Reset-DeselectAll-SelectAll-NavigateUp | NOT RUN | 2 | g-settings2b | 5
G03.filter-entry | NOT RUN | 2 | g-settings2b | 5
G03.focus-order-and-announcements | LIMITED | 2 | a11y-audit | 17
G03.focus-order-duplicates-hidden-panels | NOT RUN | 2 | g-settings2b | 5
G03.hidden-swipe-actions | PASS | 2 | a11y-audit | 3
G03.ionic4-star-sequence | LIMITED | 2 | a11y-audit | 3
G03.labels | PASS | 2 | a11y-audit | 17
G03.mode-state | PASS | 2 | a11y-audit | 2
G03.modes | BLOCKED | 2 | g-settings2c | 3
G03.modes-selected-state | NOT RUN | 2 | g-settings2b | 5
G03.revealed-swipe-action | NOT RUN | 2 | g-settings2c | 0
G03.roles | PASS | 2 | a11y-audit | 3
G03.row-context | LIMITED | 2 | a11y-audit | 3
G03.row-context-and-detail-entry | NOT RUN | 2 | g-settings2c | 0
G03.row-context-and-detail4-entry | NOT RUN | 2 | g-settings2b | 5
G03.row-entry-role | LIMITED | 2 | a11y-audit | 3
G03.row-favorite | NOT RUN | 2 | g-settings2c | 0
G03.search | BLOCKED | 2 | g-settings2c | 2
G04 | BLOCKED | 2 | g-settings2c | 6
G04.alert-cancel-remove | NOT RUN | 2 | g-settings2c | 0
G04.alert-containment-and-ok | NOT RUN | 2 | g-settings2c | 0
G04.detail-back-return | NOT RUN | 2 | g-settings2c | 0
G04.detail-NavigateUp | NOT RUN | 2 | g-settings2b | 5
G04.favorite-alert-Cancel-Remove | NOT RUN | 2 | g-settings2b | 5
G04.favorite-alert-OK | NOT RUN | 2 | g-settings2b | 5
G04.filter-close-return | NOT RUN | 2 | g-settings2c | 0
G04.filter-containment | BLOCKED | 2 | g-settings2c | 3
G04.filter-Done | NOT RUN | 2 | g-settings2b | 5
G04.filter-done-return | NOT RUN | 2 | g-settings2c | 0
G04.filter-NavigateUp | NOT RUN | 2 | g-settings2b | 5
G04.modal-dialog-background-reachability-and-focus-return | NOT RUN | 2 | g-settings2b | 5
G05 | PASS | 2 | g-settings2a | 65
G05.1.3 | PASS | 1 | g-settings1b | 24
G05.default | PASS | 1 | g-settings1b | 22
G05.default.alert | PASS | 1 | g-settings1b | 2
G05.default.detail | PASS | 1 | g-settings1b | 2
G05.default.filter | PASS | 1 | g-settings1b | 6
G05.default.interaction | PASS | 1 | g-settings1b | 22
G05.default.presentation | PASS | 1 | g-settings1b | 22
G05.default.schedule | PASS | 1 | g-settings1b | 4
G05.field-growth | PASS | 2 | g-settings2a | 4
G05.font1-3.alert | PASS | 1 | g-settings1b | 2
G05.font1-3.detail | PASS | 1 | g-settings1b | 2
G05.font1-3.filter | PASS | 1 | g-settings1b | 6
G05.font1-3.interaction | PASS | 1 | g-settings1b | 24
G05.font1-3.presentation | PASS | 1 | g-settings1b | 24
G05.font1-3.schedule | PASS | 1 | g-settings1b | 4
G05.font2-0.alert | PASS | 1 | g-settings1b | 2
G05.font2-0.detail | PASS | 1 | g-settings1b | 3
G05.font2-0.detail-bottom | PASS | 1 | g-settings1b | 3
G05.font2-0.filter | PASS | 1 | g-settings1b | 6
G05.font2-0.interaction | PASS | 1 | g-settings1b | 25
G05.font2-0.presentation | PASS | 2 | g-settings2a | 61
G05.font2-0.schedule | PASS | 2 | g-settings2a | 61
G05.largest | PASS | 2 | g-settings2a | 61
G05.readability-empty | PASS | 2 | g-settings2a | 61
G05.readability-Ionic | PASS | 2 | g-settings2a | 61
G06 | PASS | 1 | g-settings1b | 31
G06.default | PASS | 1 | g-settings1b | 8
G06.default.alert | PASS | 1 | g-settings1b | 2
G06.default.detail | PASS | 1 | g-settings1b | 2
G06.default.filter | PASS | 1 | g-settings1b | 6
G06.default.interaction | PASS | 1 | g-settings1b | 8
G06.default.presentation | PASS | 1 | g-settings1b | 4
G06.default.schedule | PASS | 1 | g-settings1b | 4
G06.density480.alert | PASS | 1 | g-settings1b | 2
G06.density480.detail | PASS | 1 | g-settings1b | 2
G06.density480.filter | PASS | 1 | g-settings1b | 6
G06.density480.interaction | PASS | 1 | g-settings1b | 24
G06.density480.presentation | PASS | 1 | g-settings1b | 24
G06.density480.schedule | PASS | 1 | g-settings1b | 4
G06.larger | PASS | 1 | g-settings1b | 24
G07 | PASS | 2 | g-settings2a | 15
G07.dark-live-switch | PASS | 2 | g-settings2a | 1
G07.dark.alert | PASS | 2 | g-settings2a | 1
G07.dark.detail | PASS | 2 | g-settings2a | 1
G07.dark.filter | PASS | 2 | g-settings2a | 1
G07.dark.interaction | PASS | 2 | g-settings2a | 1
G07.dark.presentation | PASS | 2 | g-settings2a | 1
G07.dark.schedule | PASS | 2 | g-settings2a | 1
G07.detail4 | PASS | 2 | g-settings2a | 1
G07.favorite-alert | PASS | 2 | g-settings2a | 1
G07.filter | PASS | 2 | g-settings2a | 1
G07.light | PASS | 2 | g-settings2a | 1
G07.light.alert | PASS | 1 | g-settings1b | 2
G07.light.detail | PASS | 1 | g-settings1b | 2
G07.light.filter | PASS | 1 | g-settings1b | 6
G07.light.interaction | PASS | 1 | g-settings1b | 8
G07.light.presentation | PASS | 1 | g-settings1b | 4
G07.light.schedule | PASS | 1 | g-settings1b | 4
G07.live-light | PASS | 2 | g-settings2a | 1
G07.live-process | PASS | 2 | g-settings2a | 1
G07.live-switch | PASS | 2 | g-settings2a | 1
G07.schedule | PASS | 2 | g-settings2a | 1
G08 | BLOCKED | 2 | g-settings3 | 28
G08.bars | PASS | 1 | g-settings1b | 17
G08.filter-bottom | PASS | 1 | g-settings1b | 17
G08.full-list-edges | PASS | 1 | g-settings1b | 8
G08.interaction | PASS | 1 | g-settings1b | 17
G08.keyboard | BLOCKED | 2 | g-settings3 | 28
G08.keyboard-insets-docked | BLOCKED | 2 | g-settings3 | 28
G08.keyboard-insets-docked.dock | BLOCKED | 2 | g-settings3 | 2
G08.keyboard-insets-docked.filter | N/A | 2 | g-settings3 | 1
G08.keyboard-insets-docked.list-bottom-insets | BLOCKED | 2 | g-settings3 | 2
G08.keyboard-insets-docked.restoration | PASS | 2 | g-settings3 | 2
G08.keyboard-insets-docked.search-and-modes | BLOCKED | 2 | g-settings3 | 2
G08.list-insets | BLOCKED | 2 | g-settings3 | 28
G08.presentation | BLOCKED | 2 | g-settings3 | 28
G08.schedule-edges | PASS | 1 | g-settings1b | 8
G08.search-and-modes | PASS | 2 | g-settings2a | 1
G09 | PASS | 1 | g-settings1b | 32
G09.detail | PASS | 1 | g-settings1b | 3
G09.final-favorite | PASS | 1 | g-settings1b | 1
G09.modal-draft | PASS | 1 | g-settings1b | 1
G09.modal-lifecycle | PASS | 1 | g-settings1b | 1
G09.modal-no-spurious-apply | PASS | 1 | g-settings1b | 2
G09.modal-safety | PASS | 1 | g-settings1b | 3
G09.schedule | PASS | 1 | g-settings1b | 2
G09.schedule-favorite | PASS | 1 | g-settings1b | 1
