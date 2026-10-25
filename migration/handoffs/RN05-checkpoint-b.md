RN05 revision 1 - phase B checkpoint

Status: CHECKPOINTED. Android native observation only; stop before coordinator pixel inspection and phase C.
Environment observed: emulator-5554 / RN01_API36 / dev.translationtest.rn; foreground topResumedActivity=ActivityRecord{268224346 u0 dev.translationtest.rn/.MainActivity t29}; Metro packager-status:running at http://127.0.0.1:8082/status; reverse host-16 tcp:8082 tcp:8082. Coordinator-owned services reused, not changed.
Branch migration/slice-1; HEAD 3970e40a9debb3897e1bcd84cff431ac96e95cfc. Phase A entry/final preservation inventory checks have zero mismatches; tracked diff and pre-existing Git status entries preserved.
Fresh load: not performed. Initial schedule XML contains Filter sessions; no fresh load required. Start XML confirmed All sessions selected and empty search.

Per-frame XML confirmations (not pixel acceptance)
01 RN05-01-filter-opened: XML contains Tracks; XML contains Communication; XML contains Design; XML contains Documentation; XML contains Food; XML contains Ionic; XML contains Navigation; XML contains Services; XML contains Tooling; XML contains Vue; XML contains Workshop; Ten checkbox rows in required sorted order; checked=["Communication","Design","Documentation","Food","Ionic","Navigation","Services","Tooling","Vue","Workshop"]; All ten row bounds within device viewport; no modal scrolling needed.
02 RN05-02-draft-deselected: XML contains Tracks; Ten checkbox rows in required sorted order; checked=[]; All ten row bounds within device viewport; no modal scrolling needed.
03 RN05-03-draft-ionic: XML contains Tracks; Ten checkbox rows in required sorted order; checked=["Ionic"]; All ten row bounds within device viewport; no modal scrolling needed.
04 RN05-04-ionic-applied: XML contains University of Ionic; XML contains Getting Started with Ionic; XML contains Migrating to Ionic; All sessions selected; search empty; Visible session IDs=[4,2,5]; Ionic Tooling (session 3) absent; exactly session rows 4, 2, 5 in XML order.
05 RN05-05-reopened-mirrors: XML contains Tracks; Ten checkbox rows in required sorted order; checked=["Ionic"]; All ten row bounds within device viewport; no modal scrolling needed.
06 RN05-06-draft-design: XML contains Tracks; Ten checkbox rows in required sorted order; checked=["Design","Ionic"]; All ten row bounds within device viewport; no modal scrolling needed.
07 RN05-07-closed-unchanged: XML contains University of Ionic; XML contains Getting Started with Ionic; XML contains Migrating to Ionic; All sessions selected; search empty; Visible session IDs=[4,2,5]; Ionic Tooling (session 3) absent; exactly session rows 4, 2, 5 in XML order.
08 RN05-08-reopened-after-close: XML contains Tracks; Ten checkbox rows in required sorted order; checked=["Ionic"]; All ten row bounds within device viewport; no modal scrolling needed.
09 RN05-09-reset-draft: XML contains Tracks; Ten checkbox rows in required sorted order; checked=[]; All ten row bounds within device viewport; no modal scrolling needed.
10 RN05-10-closed-after-reset: XML contains University of Ionic; XML contains Getting Started with Ionic; XML contains Migrating to Ionic; All sessions selected; search empty; Visible session IDs=[4,2,5]; Ionic Tooling (session 3) absent; exactly session rows 4, 2, 5 in XML order.
11 RN05-11-none-applied: XML contains No sessions match your search or filters.; All sessions selected; search empty; Visible session IDs=[]
12 RN05-12-all-applied: XML contains 8:00 am; XML contains Breakfast; All sessions selected; search empty; Visible session IDs=[1,4,2,3]; Select All post-tap XML frame12-select-after.xml confirms all ten checked before Done. First visible group 8:00 am contains Breakfast. Off-viewport restored rows not claimed as visible.

Actual close affordance: android.widget.ImageButton, content-desc="Navigate up", enabled/clickable=true, bounds [0,128][147,275], centre (73,201). Used for frames 07 and 10 after fresh target dumps; no Android Back.
All ten sorted checkbox rows mounted/within viewport in modal frames; no scrolling required. No capture/navigation retries; all navigation attempts=1. Each tap observed mandatory waits, bounds/centre and post-action dumps; no text input.
Evidence: migration/evidence/RN05/native/capture-index.json, capture-notes.md, commands.jsonl, twelve PNG/XML frame pairs, supporting pre/post-action XML. Helper verification.json records frame hashes, viewport bounds, tap timings, command counts and preservation/scope checks.
Final app state: schedule, All sessions selected, empty search, all ten tracks applied. Frame 12 lists viewport IDs only; no off-viewport pixel claim.

Blocked: none. Unverified: all screenshot pixels (coordinator must inspect directly); RN07 hardware Back/optional gestures/large text/dark mode and iOS are out of scope. Phase C final handoff, status/submission/hash gate and review were not performed.
No app/test/config, existing evidence/handoff, RN05 work-package or submission edits; no delegate/review, stage, commit or push. One blocked preliminary inline-node read-only inspection had no execution/device effect; .mjs helpers replaced it.
Finalization tooling note: the first checkpoint writer completed native/scope/preservation audits and wrote the index, notes and this checkpoint, then its overly broad LF scan included the coordinator-owned stream.jsonl and rejected that file's CR bytes before result.json was created. No device step or capture failed. A separate finalize.mjs verifies only executor-authored deliverables, leaves all coordinator runtime files untouched, and writes result.json. See native/finalization-notes.md and the run's final-verification.json.

Pixels are not yet inspected. STOP at checkpoint.
