# Slice 2 Android acceptance checklist (speakers)

Prepared: 2026-10-29 by the coordinator (Claude Code). Status: FROZEN CHECKLIST — NOT EXECUTED. Applies unchanged to RN10 (Expo) and NS10 (NativeScript).

This is the device checklist for slice 2 (`migration/plans/slice-2-work-packages.md`). It is not an executable work package and grants no permission to change code, install tools, add debug routes or change settings. RN10 and NS10 each get their own executable package (candidate commit, allowed fixes, check commands, review gate) that points here. Every case is NOT RUN until recorded against a specific candidate.

## Authority and scope

- Behavior: `migration/reference/speakers-contract.md` (P02 r1) and `migration/reference/expected-speakers.json`, plus the slice 1 contract for the Schedule tab. Read concrete IDs from the fixture when executing; the values below were copied at preparation.
- Decisions: plan D2 (read-only speaker detail; no contact/share/social), D3 (standalone APK for cold entry), D4 (human go-ahead before each acceptance package) and P02 CD1–CD6.
- In scope: the Schedule/Speakers tab shell, speakers list, speaker detail, speaker-to-session entry, shared favorites across tabs, bundled photos, Android Back, cold entry in a standalone build, accessibility and presentation of the new paths, and a slice 1 regression subset on the tabbed build.
- Out of scope: Map/About tabs, contact/share/social/calendar actions, persistence, iOS, physical devices, store signing or upload.

## Run record, evidence and privacy

Use the slice 1 rules unchanged (`migration/plans/rn07-android-acceptance-checklist.md`, sections "Run record and evidence rules" and "Execution order and fixtures"): one run directory per candidate under `migration/evidence/<ID>/`, the run-record fields, status vocabulary (PASS/FAIL/BLOCKED/NOT RUN, N/A only for an optional branch with its reason), bounded logs, sequences or short recordings for transitions, a human or vision-capable observer for pixels, and restored settings.

Privacy (slice 1 lessons, mandatory):

- The human clears Gboard's clipboard history on the AVD before any keyboard case; the executor asks rather than doing it.
- Never capture `dumpsys input_method`. Inspect every captured frame for clipboard chips, notifications or personal content before it enters the packet.
- Redact a frame together with every raw copy of it: find raw receipts by PNG signature, not by extension (`.stdout.bin` and `.stdout.log` both occur), and record each redaction. Unredacted captures are never committed.
- Keep literal scan patterns only in run prompts and helpers under `tools/`.

Baseline: a new app process with data loaded, Schedule tab selected, empty search, all tracks, All mode, empty favorites, Speakers stack at its root. Background/resume is not a baseline.

## A. Candidate, build and install gates

| ID | Action | Required result/evidence |
| --- | --- | --- |
| A01 | Record branch, full HEAD/tree, porcelain, approved prerequisites (RN08/RN09 or NS08/NS09 reviews) and manifest checks. | Candidate matches the approved packages; no unrelated changes. |
| A02 | Run the target's typecheck and test suite twice, plus the core integration check. | Exit 0, identical counts, actual numbers recorded (RN baseline after RN09; NS baseline after NS09). |
| A03 | Build the development candidate and install it on the AVD; cold-open. | Correct application ID; Schedule tab renders; tab bar shows Schedule and Speakers. |
| A04 | Build the standalone APK (D3): JavaScript bundled in, production mode, no development server; any signing key is a local throwaway in an ignored folder. Install it. | APK path, size and SHA-256 recorded; app starts with no dev server reachable (prove it, for example with the dev server stopped); no key or keystore file in the packet or Git. |
| A05 | Bundled photos in the built app. | The 13 photos are in the APK assets (names and sizes from the APK listing) and each SHA-256 equals `/speakerDetails` (extract and hash; do not copy images into the packet). |
| A06 | Logs during each interaction window. | No fatal crash, red screen or unhandled error; warnings quoted with their effect. |
| A07 | NativeScript only (NS10): the `__DEV__` direct-entry harness is absent from the standalone build. | The harness route/screen cannot be reached in the standalone APK, and its marker is absent from the bundled JavaScript (search the extracted bundle for the harness identifiers named in NS09's handoff). RN10: N/A. |

## R. Slice 1 regression on the tabbed build

Run these slice 1 cases (same IDs and expectations as the slice 1 checklist) inside the Schedule tab: B01, B03, B06, C02, C06, D01, D02, D05, E02, E07, F01. Any FAIL here is a slice 2 regression.

## T. Tab shell and shared state (CD5)

| ID | Setup and action | Expected result |
| --- | --- | --- |
| T01 | Baseline; inspect the tab bar. | Two tabs labeled Schedule and Speakers; the selected tab is visually distinct and exposed as selected. |
| T02 | Set search `Ionic`, Favorites mode with one favorite, and tracks Ionic+Design; switch to Speakers, then back. | Search text, mode, tracks and favorites unchanged; the schedule shows the same rows. |
| T03 | Open session 3 detail in Schedule; switch to Speakers; open a speaker detail; switch to Schedule, then Speakers. | Each tab returns to its own stack position (session 3 detail; speaker detail). |
| T04 | Press Android Back on the Speakers tab root; separately on the Schedule root. | Record the actual behavior. Expected per RN08/NS08 decision: Speakers root Back returns to the Schedule tab; Schedule root Back follows normal Android task behavior. No crash or loop. |
| T05 | Optional: tap the already-selected tab while its stack is deep. | Record behavior (pop to root or no-op); N/A allowed with reason. |

## S. Speakers list (CD1, CD2, CD6)

| ID | Setup and action | Expected result |
| --- | --- | --- |
| S01 | Open Speakers; scroll the whole list. | 13 cards in order: Burt Bear, Charlie Cheetah, Donald Duck, Ellie Elephant, Eva Eagle, Gino Giraffe, Isabella Iguana, Karl Kitten, Lionel Lion, Molly Mouse, Paul Puppy, Rachel Rabbit, Ted Turtle. Each shows name, title and photo. |
| S02 | Inspect session rows for Rachel Rabbit (12), Eva Eagle (4) and Ted Turtle (13). | Session IDs in store order: 12 → 3, 6, 11, 20; 4 → 5, 7, 11; 13 → 2, 19; names as in `/sessionsBySpeaker`. Then an `About <name>` row. All 26 rows are covered by automated tests; record which cards were checked on the device. |
| S03 | Look at every photo. | Each speaker's own photo, not stretched, no broken-image placeholder, light and dark. |
| S04 | With T02's schedule selection active, view the list. | List unchanged: speakers' sessions are not filtered by schedule search, mode, tracks or favorites. |

## P. Speaker detail (CD3)

| ID | Setup and action | Expected result |
| --- | --- | --- |
| P01 | From a card header, open Eva Eagle; separately open via `About Ted Turtle`. | Photo, name, title and biography from `/speakerDetails`; no "Say hello on social media!" text; no contact, share or social controls. |
| P02 | Back with the toolbar, then repeat with Android Back. | Returns once to the speakers list at a sensible position; no duplicate screens. |
| P03 | Open a long biography at the largest tested font scale. | Biography readable by scrolling; nothing clipped. |

## N. Speaker-to-session entry (CD4, CD5)

| ID | Setup and action | Expected result |
| --- | --- | --- |
| N01 | Tap session 11 under Rachel Rabbit. | The existing session detail screen for session 11. Toolbar Back and, separately, Android Back return to the speakers list, not to Schedule. |
| N02 | Set a schedule search and tracks; in Speakers open session 18 (under Ellie Elephant) and toggle Favorite on; switch to Schedule. | Search and tracks unchanged; session 18 is a favorite (Favorites mode shows it if it passes the filters, per slice 1 rules). Switch back: still on session 18 detail. |
| N03 | Open session 7 from Eva Eagle, then from Isabella Iguana. | Same favorite state in both; toggling in one shows in the other and in Schedule. |

## K. Cold entry in the standalone build (D3, CD3, CD4)

Use the deep-link mechanism the target's RN09/NS09 handoff documents (record the exact intent/URL). Force-stop before each case.

| ID | Action | Expected result |
| --- | --- | --- |
| K01 | Cold-enter known speaker 4. | Speaker detail for Eva Eagle after data loads; Back goes to the Speakers root; no app exit, no Schedule jump. |
| K02 | Cold-enter unknown speaker 999, then malformed `abc` and `1.5`. | Explicit not-found state (no endless loading, no partial match to speaker 1); Back goes to the Speakers root. |
| K03 | Cold-enter the speaker-session route for session 3. | Session 3 detail; Back goes to the Speakers root. |
| K04 | Cold-enter the speaker-session route for an unknown session (999). | Slice 1 session not-found behavior; no favorite mutation; Back goes to the Speakers root. |
| K05 | Cold-enter the slice 1 schedule session route (known 3, unknown 999). | Slice 1 D03/D04 behavior unchanged in the standalone build. |

## G. Accessibility, presentation and lifecycle on the new paths

| ID | Setup and action | Expected result |
| --- | --- | --- |
| G01 | TalkBack walkthrough by the human (plan RN10/NS10): tabs, a speaker card, its session and About rows, speaker detail (photo label, name heading), not-found, Back. | Labels and roles understandable, selected tab announced, decorative list photos not announced separately, focus order sensible, no unlabeled required control. The human's observations are recorded verbatim with date. |
| G02 | Font scale default, about 1.3 and the largest available (record values) on list, detail, not-found and tab bar. | Readable, reachable by scrolling, tab labels not clipped beyond legibility. |
| G03 | Light and dark mode, including a switch while on speaker detail. | Text, tab bar, cards, photos and not-found readable in both. |
| G04 | Activity recreation on speaker detail and on a speaker-session detail (for example a theme switch or the developer option that destroys activities; record which). | No crash; the app shows the same screen or a sane restart with working Back; no duplicate favorite change. |
| G05 | Background/resume on speaker detail and on the speakers list. | Same screen, same state; no reload flash into a different tab. |

## Traceability

| Contract item | Device cases / automated evidence |
| --- | --- |
| CD1 order, `/speakersSorted` | S01; target tests (full order) |
| CD2 sessions, `/sessionsBySpeaker` | S02, S04; target tests (all 26 links) |
| CD3 detail and not-found, `/speakerDetails`, `/unknownSpeakerIds` | P01–P03, K01–K02; target tests (all P02 inputs) |
| CD4 entry and Back | N01, K01–K04, T04 |
| CD5 shared state | T02, T03, N02, N03 |
| CD6 photos | A05, S03, G03; target photo tests |
| D2 no actions | P01 |
| D3 standalone | A04, K01–K05, A07 |

## Closing the run

Follow the slice 1 checklist's "Closing the run" steps: a result for every case, restored settings, defects and fixes listed separately, any product change is a new candidate with affected cases rerun, the package freezes its handoff and manifest and gets one review. Technical approval is not human acceptance; the human's TalkBack observation (G01) is required for acceptance and cannot be replaced by an agent.

No software checks, builds, device actions or settings changes were performed to prepare this checklist.
