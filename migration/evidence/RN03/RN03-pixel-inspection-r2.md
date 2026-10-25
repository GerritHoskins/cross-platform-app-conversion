# RN03-r2 pixel inspection (vision reviewer verdict) — 2026-10-21

Source: subagent batch `deleg_818eaf81`, model `gpt-6.1-sol` (high),
dispatched 2026-10-21 22:39 UTC+2, completed after 47.4 s, status completed,
api_calls=1. Inspected the 8 attached PNGs directly (no files created or
modified by the reviewer). Live transcript:
C:/Users/Gerrit/AppData/Local/hermes/profiles/translation-migration/cache/delegation/live/deleg_818eaf81/task-0.log

## Summary (reviewer's own words)

Failing images: 1, 3, 5, 6. Images 1 and 3 do not expose every specifically
expected string within the screenshot viewport; this does not by itself
establish an application layout defect. Images 5 and 6 are obstructed by a
stylus tutorial, and image 6 visibly shows the query in the wrong input
rather than the expected no-match app state. Images 2, 4, 7, and 8 pass.

## Verbatim per-image report

- Image 1 (RN03-01-initial-schedule): FAIL (strict). Screen is a fully
  rendered schedule (not blank/crash/launcher); search placeholder
  "Search sessions"; tabs "All sessions" (selected: pale-green fill, green
  border and text) / "Favorite sessions" (unselected, white); rows visible:
  8:00 am — Breakfast 8:00 am–9:00 am · Dining Hall · Food; 9:15 am —
  University of Ionic 9:15 am–9:30 am · Hall 3 · Ionic; Getting Started with
  Ionic 9:30 am–9:45 am · Hall 2 · Ionic; Ionic Tooling 9:45 am–10:00 am ·
  Executive Ballroom · Tooling; 10:00 am — "Migrating to Ionic" title visible
  at bottom. Defect (strict): the meta line "10:00 am–10:15 am · Hall 1"
  beneath "Migrating to Ionic" is cut off at the viewport edge and cannot be
  read — viewport-edge cropping, not evidence of malformed text or a broken
  row. No overlapping text or garbled glyphs.
- Image 2 (RN03-02-search-ionic-top): PASS. Search field shows "IOnic" with
  caret (placeholder not shown); All sessions selected; rows: 9:15 am —
  University of Ionic 9:15 am–9:30 am · Hall 3 · Ionic; Getting Started with
  Ionic 9:30 am–9:45 am · Hall 2 · Ionic; Ionic Tooling 9:45 am–10:00 am ·
  Executive Ballroom · Tooling; 10:00 am — Migrating to Ionic 10:00 am–
  10:15 am · Hall 1 · Ionic; The Evolution of Ionicons 10:15 am–10:30 am ·
  Hall 2 · Design. No defects.
- Image 3 (RN03-03-search-ionic-scrolled): FAIL (strict). Search field
  "IOnic"; All sessions selected; visible: cropped "Services" fragment at top
  list boundary; 11:00 am — Ionic Workshop 11:00 am–11:45 am · Hall 1 ·
  Workshop; Navigation in Ionic 11:30 am–12:00 pm · Grand Ballroom A ·
  Navigation; 1:00 pm — Ionic in the Enterprise 1:00 pm–1:15 pm · Hall 1 ·
  Communication; Ionic Worldwide 1:15 pm–1:30 pm · Hall 1 · Communication;
  The Ionic Package 1:30 pm–2:00 pm · Grand Ballroom B. Strict misses:
  "The Evolution of Ionicons" / "10:15 am–10:30 am · Hall 2" not visible;
  "Ionic Pro" / "10:45 am–11:00 am · Grand Ballroom A" not visible (only the
  cropped "Services" fragment; its title/time unverifiable); "Services" tag
  for The Ionic Package below the bottom viewport boundary. Reviewer:
  boundary cropping alone does not establish a broken scrolling layout; fully
  visible rows have readable, non-overlapping text.
- Image 4 (RN03-04-search-ionic-bottom): PASS. Search field "IOnic"; All
  sessions selected; rows: The Ionic Package 1:30 pm–2:00 pm · Grand
  Ballroom B · Services (preceding card partially visible at upper list
  boundary); 2:00 pm — Push Notifications in Ionic 2:00 pm–2:30 pm · Hall 2 ·
  Services; Ionic Documentation 2:30 pm–2:45 pm · Grand Ballroom B ·
  Documentation; UX in Ionic 2:45 pm–3:00 pm · Hall 3 · Design; 3:00 pm —
  Building with Ionic and Vue 3:00 pm–3:30 am · Hall 1 · Vue. No defects.
- Image 5 (RN03-05-ionic-cleared-restored): FAIL. App rendered behind a
  dimming overlay; search field shows placeholder "Search sessions" (query
  cleared); All sessions still selected; visible behind overlay: Navigation
  in Ionic 11:30 am–12:00 pm · Grand Ballroom A · Navigation; "12:00 pm"
  heading partially visible. Defect: the "Try out your stylus" tutorial
  sheet covers most of the lower screen and dims the underlying app — NOT an
  unobstructed restored-schedule screenshot. Not visible (cannot be
  verified): Ionic Workshop (+time), Community Interaction
  11:30 am–11:50 am · Hall 3, Lunch 12:00 pm–1:00 pm · Dining Hall · Food,
  1:00 pm heading, Ionic in the Enterprise, Ionic Worldwide, The Ionic
  Package + times. Overlay prevents verification of the expected restored
  list.
- Image 6 (RN03-06-search-no-match): FAIL. App search field does NOT visibly
  contain "ioniczzz" — it still shows the placeholder "Search sessions"; the
  string "ioniczzz" appears inside the STYLUS-TUTORIAL input, not the app
  search field. Expected "No sessions match your search or filters." is NOT
  visible. A session row ("Navigation in Ionic 11:30 am–12:00 pm · Grand
  Ballroom A") remains visible, contradicting the expected zero-rows state.
  Additional: stylus tutorial sheet obscures the lower screen; a floating
  vertical input toolbar overlaps the left side.
- Image 7 (RN03-07-favorites-empty): PASS. Fully rendered; placeholder
  "Search sessions"; Favorite sessions selected (pale-green fill, green
  border/text); All sessions unselected; empty-state message "No favorite
  sessions." visible; no session rows. No defects.
- Image 8 (RN03-08-all-sessions-restored): PASS. Fully rendered; placeholder
  "Search sessions"; All sessions selected; rows: 8:00 am — Breakfast
  8:00 am–9:00 am · Dining Hall · Food; 9:15 am — University of Ionic
  9:15 am–9:30 am · Hall 3 · Ionic; Getting Started with Ionic 9:30 am–
  9:45 am · Hall 2 · Ionic; Ionic Tooling 9:45 am–10:00 am · Executive
  Ballroom · Tooling; 10:00 am — "Migrating to Ionic" title visible, its time
  line below the readable viewport. No defects.

## Assistant assessment (honest classification)

- CONFIRMED app defects: NONE. The strict FAILs on 1 and 3 are
  viewport/scroll-position cropping of expected strings, which the reviewer
  itself notes is not evidence of a layout defect; 2/4/7/8 PASS with correct
  tab states, times, and room/trail text.
- CONFIRMED EVIDENCE DEFECTS (capture failures, not app failures):
    - RN03-05: restored-state screenshot obstructed by the emulator's
      "Try out your stylus" tutorial overlay — restore is only partially
      visible (clear + first row confirmed) and not fully evidenced.
    - RN03-06: the no-match evidence is INVALID — "ioniczzz" was typed into
      the stylus tutorial's own input; the app's search field still held its
      placeholder, a live row was still visible, and the expected empty-state
      message never appeared in the app. The app no-match state is NOT
      visually evidenced by this screenshot.
- NEW environment pitfall (must be handled on any re-capture): the Android
  16 emulator surfaces a "Try out your stylus" soft-keyboard tutorial that
  can grab text input and dim the app. Before typing natively: dismiss the
  tutorial (Cancel/Next) or avoid soft-keyboard first-touch, then verify the
  focused input field contains the intended text BEFORE screenshotting.
- Consequence for gates: MAJOR-2 verdict is now IN (this file), but the
  native evidence set needs RN03-05 and RN03-06 re-captured (and ideally RN03-
  01/03 re-shot at stable scroll positions) before the r2 observations file
  can honestly claim those two states. Re-capture is BLOCKED meanwhile by
  the standing "do not alter emulator" directive.
