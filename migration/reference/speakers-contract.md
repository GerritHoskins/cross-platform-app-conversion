# P02 speakers reference behavior contract

Package: P02, revision 1. Static and derived only; nothing is runtime-observed. [static] `migration/work-packages/P02.md:9-11,44-58`.

Tags: `[static]` means source inspection or an explicitly identified plan/contract decision (not runtime behavior); `[derived]` means `derive-speakers.mjs` output, with JSON paths relative to `migration/reference/expected-speakers.json`; `[unverified]` means a target/runtime obligation not exercised here. P01 remains read-only; this document supplies its deferred speakers entry, not a rewrite of its schedule contract. [static] `migration/reference/contract.md:8-9,74-79`; `migration/work-packages/P02.md:38,49`.

## Data and normalization

- Data input is `public/data/data.json`; the exact input hash is `/sourceDataSha256` in the generated JSON. There are 13 speakers and 20 normalized sessions. [derived] `/sourceDataSha256`, `/speakerCount`, `/invariants/sessionCount`.
- Speaker data IDs become numbers with `parseInt(speaker.id)`; `name`, `title`, `about` default to `''` using `|| ''`. The source copies `profilePic` as-is, defaults contact/social fields to `''`, and defaults the record's own `sessions` to `[]`. [static] `src/store/modules/speakers.ts:60-73`.
- Contract decision CD3 (fields/defaults): the read-only model is `{id, name, title, about, profilePic}`. Retain the source name/title/about defaults; also give `profilePic` a defensive `''` default (a deliberate difference from the source's raw copy). Empty text stays empty rather than becoming a perpetual loading placeholder; an empty photo URI means no image, not a network fallback. The fixture itself has no missing photo. Reason: stable read-only target fields and no misleading loading state. [static] `migration/plans/slice-2-work-packages.md:11,34`; source distinction at `src/store/modules/speakers.ts:62-68`. [derived] `/supplemental/missingFields`, `/invariants/everyProfileImageExists`.
- Session normalization traverses `schedule[0].groups` and each group's `sessions` in data order, parsing session IDs, copying names/times/location/tracks/group time, and defaulting description to `''`. Speaker IDs are resolved by exact speaker-name lookup. [static] `src/store/modules/sessions.ts:102-120`.
- Inherited P01 policy: omit unresolved speaker names rather than emitting the source's `undefined`. This is a deliberate contract decision, not identical behavior for hypothetical bad data. The fixture has no unresolved names. [static] `migration/reference/contract.md:19-20`; `src/store/modules/sessions.ts:103-115`. [derived] `/invariants/unresolvedSpeakerNames`.
- No speaker in the fixture owns a `sessions` field. Per-speaker rows therefore must be derived from the session store, not that optional speaker-record field. [derived] `/invariants/speakersWithOwnSessionsField`. [static] `src/views/SpeakerList.vue:113-117`.

## Speaker order

- Source list and store getter copy the speakers and sort by `a.name.localeCompare(b.name)`. [static] `src/views/SpeakerList.vue:109-111`; `src/store/modules/speakers.ts:45-48`.
- Contract decision CD1: compare full names lexicographically by raw UTF-16 code units (`<` / `>`), case-sensitive, without locale, case folding or Unicode normalization. Equal names use numeric ID ascending; identical name/ID pairs keep original input order. IDs are unique in the fixture. Reason: reproducibility across engines/locales with a total, stated tie rule; this is deliberately not default-locale collation for arbitrary future names. [static] `migration/plans/slice-2-work-packages.md:32`; contract rule transcribed in `migration/reference/derive-speakers.mjs` under the D1 comment. [derived] `/invariants/uniqueSpeakerIds`, `/supplemental/equalNames`.
- Display order is Burt Bear (1), Charlie Cheetah (2), Donald Duck (3), Ellie Elephant (5), Eva Eagle (4), Gino Giraffe (6), Isabella Iguana (7), Karl Kitten (8), Lionel Lion (9), Molly Mouse (10), Paul Puppy (11), Rachel Rabbit (12), Ted Turtle (13). The script computes the source `localeCompare` order separately and asserts equality; locale collation never controls emitted order. [derived] `/speakersSorted`, `/invariants/sourceLocaleOrder`, `/invariants/deterministicOrderMatchesSource`.
- The equal-name supplemental probe starts with reversed numeric IDs, so keeping only input stability would fail: `Same/200, Same/100, After/300` must become `[300,100,200]`. This is synthetic, not fixture. [derived] `/supplemental/label`, `/supplemental/equalNames`.

## Sessions per speaker

- Source cards show name, title and photo, each matching session name, then an `About <name>` row. Matching uses `sessions.filter(session => session.speakerIds.includes(speakerId))`, independent of schedule search, selected tracks, favorites and schedule display-time sorting. [static] `src/views/SpeakerList.vue:27-71,113-117`.
- Contract decision CD2: use source store/data order, not time order; one row per matching session, including sessions shared by multiple speakers. A speaker without sessions gets `[]`. Reason: preserve card ordering and do not hide a speaker's sessions because of schedule-tab selections. The no-session case is synthetic, not present in this fixture. [static] `migration/plans/slice-2-work-packages.md:33`; `src/store/modules/sessions.ts:107-121`; `src/views/SpeakerList.vue:113-117`. [derived] `/supplemental/speakerWithoutSessions`.
- Concrete session-ID rows below are in speaker display order; corresponding exact session names are in the generated JSON. Each speaker has 1–4 links; their sum is 26, equal to all resolved `speakerIds` entries across the 20 sessions. The equality is a hard script assertion, not a forced total. [derived] `/sessionsBySpeaker`, `/invariants/sessionLinks`, `/invariants/resolvedSpeakerEntries`.

| Speaker ID | Session IDs in store order |
| --- | --- |
| 1 | 15, 16 |
| 2 | 8, 16 |
| 3 | 17 |
| 5 | 4, 18 |
| 4 | 5, 7, 11 |
| 6 | 10, 14 |
| 7 | 7, 18 |
| 8 | 9 |
| 9 | 5, 9, 10 |
| 10 | 15 |
| 11 | 13 |
| 12 | 3, 6, 11, 20 |
| 13 | 2, 19 |

Table provenance: [derived] `/sessionsBySpeaker/0` through `/sessionsBySpeaker/12`.

## Speaker detail

- Source detail displays photo, name and biography, with `Say hello on social media!` appended; it does not render title in the inspected detail template, although the list does. Contact/share buttons and social chips also appear in the source. [static] `src/views/SpeakerDetail.vue:9-59`; `src/views/SpeakerList.vue:42-45`.
- Contract decision CD3 (read-only presentation): show photo, name, title and biography, using the normalized fields, without the appended social invitation or action controls. Including title on detail is an explicit slice-2 scope choice, not a claim that source detail rendered it. Reason: human D2's read-only photo/name/title/biography boundary. [static] `migration/plans/slice-2-work-packages.md:11,34`; source contrast at `src/views/SpeakerDetail.vue:20-29`.
- Source resolves by permissive `parseInt` on mount and on truthy route changes. An absent/unknown ID leaves `currentSpeaker` null on initial entry and the template keeps `Loading...` / `Loading biography...` with the social suffix. This is a source quirk, not the migrated not-found state. A falsy route change also does not clear a previously resolved speaker. [static] `src/views/SpeakerDetail.vue:25-29,203-229`.
- Contract decision CD3 (lookup): route IDs must be full canonical positive decimal strings matching `^[1-9][0-9]*$` and represent safe integers. Missing, empty, whitespace, signed, zero, negative, fractional, leading-zero, trailing-junk or unsafe-integer IDs are malformed. A well-formed absent ID is unknown. Both outcomes produce explicit `not-found` with no speaker record, stale name, biography or photo; retain working Back. Do not partially parse malformed route IDs. Reason: distinguish completed lookup failure from loading and avoid accidental lookup of speaker 1 via `1.5` or `1abc`. Numeric normalized model IDs remain numbers; these rules govern route input strings. [static] `migration/plans/slice-2-work-packages.md:34`; intentional contrast with `src/views/SpeakerDetail.vue:211-215,223-227`.
- Required inputs `999`, `0`, `-1`, `abc`, `1.5`, `''` all yield `not-found`; `999` is unknown, the others malformed. Added `1abc`, `01`, ` 1`, and `9007199254740992` also yield malformed/not-found. These generated outcomes exercise the contract policy, not source runtime behavior. Every canonical fixture ID resolves in a hard script assertion. [derived] `/unknownSpeakerIds`, `/speakerDetails`.
- Exact biographies, titles, URI paths and image metadata for every speaker are frozen in display order. Missing-field defaults are checked through the same normalization function with synthetic speaker 1000. [derived] `/speakerDetails`, `/supplemental/missingFields`.
- Rendering, loading transitions, not-found copy/layout and accessibility on targets remain unverified; no app was run. The semantic state is fixed above, not exact wording/layout. [unverified]

## Navigation

- Source bottom tabs are Schedule, Speakers, Map and About. Contract shell is only Schedule and Speakers, each with its own stack; excluding the other tabs is deliberate scope, not observed source layout. [static] `src/views/Tabs.vue:3-27`; `migration/plans/slice-2-work-packages.md:18`.
- Card header/photo/name and `About <name>` push `/tabs/speakers/speaker/:speakerId`; a session row pushes `/tabs/speakers/session/:sessionId`. The speaker route loads speaker data through `ensureSpeakerData`; both schedule-session and speaker-session routes reuse `SessionDetail.vue` and `ensureSessionData`. [static] `src/views/SpeakerList.vue:29-34,63-70,119-125`; `src/router.ts:14-25,69-90`.
- Contract decision CD4: reuse the existing session-ID detail screen, passing a session ID, never a copied speaker-specific screen or an implicit schedule parent. With history, Back (including Android hardware Back) returns to the previous Speakers-stack entry. Without history, Back from either speaker detail or speaker-session detail goes to `/tabs/speakers`, not Schedule and not app exit. Cold known entry loads the needed data then resolves its ID; cold unknown/malformed speaker entry settles into CD3 not-found and still has Speakers-root Back. Reason: preserve the context that opened the detail and make cold entry deterministic. [static] `migration/plans/slice-2-work-packages.md:35`; session-ID source resolution at `src/views/SessionDetail.vue:198-206`.
- Source speaker detail already has `/tabs/speakers` as `defaultHref`; source session detail instead uses fixed `/tabs/schedule`, even on the speakers route. The contract deliberately replaces only that speaker-entry fallback; schedule-entry Back stays governed by P01. [static] `src/views/SpeakerDetail.vue:7`; `src/views/SessionDetail.vue:6,180`; `migration/reference/contract.md:65-79`.
- Cold unknown session entry still reuses the slice-1 session-ID lookup and its no-resolved-session/no-favorite-mutation semantics; CD3's speaker not-found rule is not a new session normalization policy. The speakers-context fallback still applies even when the session cannot resolve. [static] `migration/reference/contract.md:70-71`; `src/views/SessionDetail.vue:183-205`; `migration/plans/slice-2-work-packages.md:35`.
- Actual Ionic history handling, independent target stacks, cold launch/link delivery and software/hardware Back are not exercised. The target requirements above are not evidence of runtime success. [unverified]

## Shared state across tabs

- Source speaker-session detail uses the same session store and detail star code: membership in `favoriteSessions` controls the star; toggling dispatches add/remove immediately, and unresolved sessions return early. The speakers list itself reads the unfiltered session array. [static] `src/views/SessionDetail.vue:183-196`; `src/views/SpeakerList.vue:113-117`.
- Contract decision CD5: switching tabs preserves both stacks and schedule search, mode, track filters and favorites. A favorite toggled on a session opened from Speakers must be visible on Schedule (including the existing Favorites membership/filter rules); switching back must return to the previous Speakers-stack entry. Do not reset selection state or reload into a new store on a tab change. Reason: both entry paths address the same sessions and favorites; tabs are navigation, not separate data universes. This is a prescribed target behavior, not proven Ionic state retention. [static] `migration/plans/slice-2-work-packages.md:36`; existing schedule selection rules at `migration/reference/contract.md:25-33,45-50`.
- Target acceptance sequence: set a nonempty schedule search, mode and track subset; open Speakers, enter one of its sessions and toggle favorite; return to Schedule and check the unchanged search/mode/filters plus updated favorite; switch back and check the retained detail/Back chain. No result is claimed for this prospective sequence. [unverified]

## Images

- Contract decision CD6: bundle all 13 source speaker photos byte-identically in each target and verify both file size and SHA-256 against `/speakerDetails`. Preserve the mapping from speaker ID and source URI to bundled asset; no network substitution, recompression or generated image payload. Reason: offline deterministic photos and equal source assets on both targets. [static] `migration/plans/slice-2-work-packages.md:37`; source photo use at `src/views/SpeakerList.vue:36-40`; `src/views/SpeakerDetail.vue:20-24`.
- Each fixture photo exists. `profilePic` is the source URI, `profilePicFile` is its repository-relative `public/` path, `profilePicSha256` hashes its bytes, and `profilePicBytes` is its size. Image reads are for hashing/sizing only; no image content is emitted. [derived] `/speakerDetails/0` through `/speakerDetails/12`, `/invariants/everyProfileImageExists`.
- Missing-photo behavior is only the defensive CD3 empty-URI rule; the fixture does not exercise it. Actual bundling, decoding, cropping and target accessibility remain unverified. [derived] `/supplemental/missingFields`. [unverified]

## Out of scope

- Human D2: contact/share/social buttons, action sheets, external URLs, `mailto:`, `tel:` and clipboard are not rendered or implemented. Their source handlers are recorded only to exclude them. [static] `migration/plans/slice-2-work-packages.md:11`; `src/views/SpeakerDetail.vue:231-298`.
- Map/About tabs, tutorial/startup/storage/login, calendar actions, favorite persistence, iOS/physical-device acceptance and source fixes are not this slice's contract implementation. Favorites remain in memory; no persistence is added. [static] `migration/plans/slice-2-work-packages.md:65-67`; `migration/reference/contract.md:97-103`.
- This package runs no Ionic app, builds, installs or device/emulator commands. Target code, native behavior and all runtime acceptance remain unverified. [static] `migration/work-packages/P02.md:9-11,60-66`. [unverified]

## Known source quirks

- Speakers fetch `/data/data.json` separately from the sessions store. List mount loads speakers first if empty, then sessions if empty; route guards and detail mount also guard their own loads. This is not a single shared-fetch guarantee. [static] `src/store/modules/speakers.ts:51-58`; `src/store/modules/sessions.ts:95-107`; `src/views/SpeakerList.vue:127-135`; `src/router.ts:14-25`; `src/views/SessionDetail.vue:198-202`.
- Source speaker-session Back fallback is fixed to Schedule; CD4 changes it to Speakers. [static] `src/router.ts:86-90`; `src/views/SessionDetail.vue:180`; `migration/plans/slice-2-work-packages.md:35`.
- Unknown speaker IDs show endless loading placeholders; permissive `parseInt` can resolve partial input to a real speaker. Empty truthy-guard failures may leave a prior record on route change. CD3 intentionally replaces these semantics with not-found/cleared record. [static] `src/views/SpeakerDetail.vue:25-29,203-229`.
- Source title is list-only in the inspected template, and biography is coupled to a social invitation even when empty; CD3 adds read-only title and removes the invitation. [static] `src/views/SpeakerList.vue:43-44`; `src/views/SpeakerDetail.vue:25-29`; `migration/plans/slice-2-work-packages.md:11,34`.
- Session detail resolves only on mount in the inspected script (no route-param watcher there); whether a framework reuses its instance for another ID is not tested here. Targets must always resolve the current session ID, without inheriting stale details. [static] `src/views/SessionDetail.vue:198-208`; reuse requirement at `migration/plans/slice-2-work-packages.md:35`. [unverified]
- P01's documented competing schedule watchers/search-ref divergence remain source defects, not desired CD5 state behavior and not fixed here. [static] `migration/reference/contract.md:86-95`.

## Expected-case index

- Source input identity and speaker count: `/sourceDataSha256`, `/speakerCount`. [derived]
- Sorted IDs, names and titles: `/speakersSorted`. [derived]
- Session IDs and exact names per speaker, in display/store order: `/sessionsBySpeaker`. [derived]
- Detail strings, source/bundle mapping, image byte sizes and SHA-256: `/speakerDetails`. [derived]
- Unknown/malformed speaker route inputs and expected outcomes: `/unknownSpeakerIds`. [derived]
- Explicitly synthetic equal-name tie, no-session speaker and missing-field defaults: `/supplemental`. [derived]
- Hard fixture invariants and source-order parity: `/invariants`. [derived]
- Navigation CD4 and state-retention CD5 are normative sections above, not generated fixture results or runtime observations. [static] `migration/plans/slice-2-work-packages.md:35-36`. [unverified]
