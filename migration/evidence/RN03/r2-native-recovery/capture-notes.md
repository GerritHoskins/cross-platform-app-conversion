# RN03 r2-native-recovery — finish-search-captures notes

Session: 20261022_081322_7ca60d (local Qwen3.8-27B, Hermes profile translation-migration)
Phase: finish-search-captures (package RN03, revision 2)
Branch: migration/slice-1 — HEAD f78a759741b57ed1a19c7b6630af67640571ff61 (verified via `git rev-parse HEAD` this session)
Device: emulator-5554 / AVD RN01_API36 / app dev.translationtest.rn (coordinator pre-verified Metro, focus, ADB forwarding and protected hashes immediately before launch; not re-investigated here)

## What this session did

Only the two missing frames were captured; each required exactly one bounded scroll
(ADB `input swipe` 540,1700→540,900 / 540,800, 400 ms) to reveal later matches, with the
IOnic query maintained throughout. New files (all created once, no overwrites; target
existence guard ran before each save):

- migration/evidence/RN03/r2-native-recovery/RN03-03-search-ionic-scrolled.png / .xml
  — swipe at 2026-10-22 08:17:25, XML+screenshot saved 08:17:29 local
- migration/evidence/RN03/r2-native-recovery/RN03-04-search-ionic-bottom.png / .xml
  — swipe at 2026-10-22 08:17:37, XML+screenshot saved 08:17:42 local
- migration/evidence/RN03/r2-native-recovery/capture-draft.json (this phase's draft)
- migration/evidence/RN03/r2-native-recovery/capture-notes.md (this file)

Per-frame XML verification (bounded attribute/text extraction, no full dumps):

- Pre-session live dump (08:16:52 local): app EditText (content-desc "Search sessions",
  focused) already held text "IOnic" — query delivery was not re-attempted; live state
  matched the expected prior session evidence.
- RN03-03-search-ionic-scrolled.xml: EditText text="IOnic" (focused); list advanced past
  the top items — later matches visible: "Ionic Tooling" 9:45 am–10:00 am Executive
  Ballroom, "Migrating to Ionic" 10:00 am Hall 1, "The Evolution of Ionicons".
- RN03-04-search-ionic-bottom.xml: EditText text="IOnic" (focused); deeper later matches
  visible: "Ionic Workshop" 11:00 am Hall 1, "Navigation in Ionic" 11:30 am Grand
  Ballroom A, "Ionic in the Enterprise" 1:00 pm.
- All three checked XML files (01, 02, plus the two new ones above) contain no node text
  matching tutorial/stylus/handwrit. Per the tutorial-protocol correction this is NOT an
  absence claim: every capture is `tutorialStatus: unknown` because pixels were NOT
  inspected. A prior coordinator diagnostic on this app showed the "Try out your stylus"
  overlay visible in a screenshot while the UI XML exposed only the app field — XML
  silence does not establish overlay/tutorial absence.

## Time and provenance separation

- Previous run / session 20261022_080513_ed7256 (FAILED retry run, hash-preserved, not
  resumed or relabeled): IOnic verified in app EditText at 08:08:35 MEST, cleared at
  08:09:43 (coordinator record). frame01 captured 08:10:00 (empty query, All mode),
  frame02 captured 08:10:25 (IOnic, All mode). These file mtime values are Oct 22 08:10
  and their contents are hash-protected by the continuation configuration. This session
  only re-read their two XML files for the bounded query check documented above; it did
  not write, recapture, or relabel them. They are historical evidence of that linked
  attempt, not fresh recaptures.
- This session's new actions are only the 08:16:52 live state dump, and the
  08:17:25–08:17:42 captures listed above. Freshness, where the supervisor requires it,
  is anchored to the original recovery run start per the continuation configuration.

## Protected / untouched files

- migration/evidence/RN03/r2-native-recapture/RN03-01-initial-schedule.png (151977
  bytes, mtime Oct 21 23:39) and RN03-01-initial-schedule.xml (20510 bytes, mtime
  Oct 21 23:39) — the protected original baseline pair; never written to in this
  session (sizes/mtime observed via directory listing before work; no hash claims from
  this session — the supervisor records and checks SHA-256 values).
- migration/evidence/RN03/r2-native-recovery/RN03-01-initial-schedule.{png,xml} and
  RN03-02-search-ionic-top.{png,xml} — the four hash-protected files of session
  20261022_080513_ed7256; preserved byte-for-byte.
- The older top-level migration/evidence/RN03/RN03-0x-*.png originals (Oct 21 22:32–
  22:37) remain historical originals; untouched.
- IDEA.md, supervisor/runtime/config files, app/test/config/device settings: untouched.

## Explicit non-claims

- No pixel inspection was performed in this phase; no Sol/high verdict exists for these
  frames. Pixel inspection remains the coordinator/Sol-high gate and is PENDING.
- No check results are claimed beyond the listed tool outputs (adb devices, WM size
  1080x2400, uiautomator dump + pull of each new pair, bounded XML attribute extraction,
  directory listings, git rev-parse HEAD).
- No services were started/stopped/restarted, no device settings changed, no installs,
  no commits, no RN04 work, no formal review dispatch.

## Blocked continuation — 2026-10-22 08:21 local (session 20261022_081926_e8f09e)

Phase capture-restored-and-no-match started; frames 05/06 NOT captured.

- 08:21:22 preflight: emulator-5554 connected; frames 01-04 verified present above with
  their original mtimes (08:10/08:17); no RN03-05/RN03-06 files existed; no writes to any
  capture file yet.
- 08:21:22-08:21:24 state dump + bounded extraction (scratch file rn03-pre.xml, outside the
  repo): exactly one EditText in the live hierarchy — pkg dev.translationtest.rn,
  content-desc "Search sessions", text "IOnic", focused, bounds [76,468][1004,579].
  No node text matches tutorial/stylus/handwrit/keyboard. List still showed IOnic search
  matches (Ionic Workshop, Navigation in Ionic, Ionic in the Enterprise, Ionic Worldwide).
- 08:21:36-08:21:38 (single field-modification attempt; normal tap + keyevents only):
  tap at (540,523) = EditText center, then 6 x KEYCODE_DEL (123) to clear "IOnic".
- 08:21:41 verification dump + bounded extraction (scratch rn03-clear.xml): app EditText
  still text "IOnic" (pkg dev.translationtest.rn, content-desc "Search sessions", focused).
  The clear did not reach the app field; list unchanged (Breakfast absent).
- Per the phase rule (one input attempt, then stopped immediately): no further input
  attempts, no IME/focus archaeology, no settings or service changes.
- Frames RN03-05-ionic-cleared-restored and RN03-06-search-no-match were NOT saved: the
  required states (empty query / All / Breakfast restored; query exactly
  zzz-no-such-session with "No sessions match your search or filters.") could not be
  honestly reached, and saving the stale IOnic state under those names would be false
  labeling. Frames 01-04 remain byte-for-byte untouched; capture-draft.json is unchanged
  (captures 01-04 only). Pixel inspection for 01-04 remains PENDING for
  coordinator/Sol-high.
