# RN07 Android acceptance checklist

Prepared: 2026-10-21. Status: DRAFT CHECKLIST — NOT EXECUTED.

This is preparation for the planned Android schedule slice. It is not an executable RN07 work package, an implementation assignment or acceptance evidence. All cases below remain NOT RUN until recorded against a specific future candidate. RN02's diagnostic screen does not satisfy schedule/detail/filter/swipe cases.

## Authority, prerequisites and boundaries

Behavior comes from `migration/reference/contract.md` (P01 revision 4) and its machine-readable `migration/reference/expected-cases.json`, plus the approved RN03–RN06 package interfaces when available. The checklist's concrete IDs below were read from the frozen fixture during preparation; reread the fixture when executing. Native presentation need not reproduce Ionic pixels. Known source defects, including non-favorites leaking into Favorites on search, are not target requirements.

Before execution, require approved RN01–RN06 deliverables and an explicit RN07 assignment. Prepare a separate executable RN07 package with candidate commit, exact allowed fixes, owned files, check commands and review gate. This checklist grants no permission to change code, install tools, update dependencies, add debug routes or modify prior submissions. If a case exposes missing behavior, record it and seek an in-scope fix under that package; do not implement from this document.

Scope: Android emulator AVD; shared bundled data; schedule/search/tracks, in-memory favorites, detail and back navigation, filter draft/apply/dismiss, swipe/button parity, accessibility and presentation. Out of scope: NativeScript, iOS, maps, tutorial/storage/startup migration, speaker-list entry, authentication, real sharing/calendar/downloads, persistence, production deployment and installed-version upgrade continuity. Do not use deferred integrations as acceptance blockers or implement them to complete this list.

## Run record and evidence rules

Create evidence only when execution is assigned, under `migration/evidence/RN07/<run-id>/`. Use a new run directory for each candidate; do not overwrite prior evidence. Record:

| Field | Required value at execution |
| --- | --- |
| Candidate | Branch, full live HEAD/tree, dirty/untracked inventory, approved prerequisites and manifest hashes |
| Runtime | Actual Node/npm, Expo/RN, JDK/SDK versions, build mode and native artifact SHA-256 |
| Android | AVD name, serial, API/system image, screen size/density, navigation mode, emulator version |
| App | Application ID/version/build; fresh install versus reused development client; JS candidate/Metro endpoint and bundle connection |
| Settings | Initial/final theme, font/display scale, TalkBack and keyboard settings; restore original values after testing |
| Operator | Human or agent; identify who actually inspected pixels, who performed gestures and who reviewed evidence |
| Results | Case ID, PASS/FAIL/BLOCKED/NOT RUN, precise actual behavior, evidence paths and defects/limits |

Use `NOT RUN` for unattempted cases, `BLOCKED` for an attempted case prevented by a named prerequisite/environment issue, and `FAIL` for observed behavior contrary to the expectation. PASS requires the stated check, not a nearby test result. Required blocked/not-run cases prevent full acceptance. N/A is allowed only for an explicitly optional branch, with its reason; do not use it for missing required features.

Save bounded command logs with exact commands/cwd/exit codes; screenshot/video and observation notes for native interactions; and relevant time-bounded app/Metro logs. Prefer sequences or short recordings for cancellation, gestures, back and state retention: a single screenshot rarely proves the transition. Observe actual pixels with a human/vision-capable coordinator; UI XML may corroborate labels/state but does not prove visual layout. Distinguish automated, emulator and physical-device evidence. One AVD run makes no physical-device, release-build, iOS or general stability claim.

Never capture secrets or unrelated desktop content. IDEA.md remains hash-only protected, excluded from deliverables. Keep all RN02 and earlier records unchanged. Do not stop another agent's emulator/Metro, reset app data or change shared device settings while they are using it; coordinate ownership first. Use a dedicated acceptance instance/run window if necessary. Record and restore settings; stop only session-owned processes.

## Execution order and fixtures

Run software/build gates first, then reset to the stated baseline for each behavioral group. A baseline means a genuinely new app process with fixture loaded, empty search, all session tracks selected, All mode and empty favorites. Favorites are intentionally in memory; force-stop/relaunch resets them. Never claim this baseline from background/resume alone. Use ordinary UI to set up favorites/filters; record setup separately from the assertion. No production-visible test controls or direct state mutation.

Read the actual approved RN04 route/deep-link mechanism before navigation tests. Record the exact URL/intent and supported unknown-ID behavior in the run record; do not assume the Ionic route or invent a new native route. If an approved capability has no way to exercise it on Android, mark it blocked and request a scope decision instead of adding a harness during acceptance.

For virtualized lists, scroll through every relevant section or use native interaction evidence. Only currently mounted rows appear in UI dumps; absent dump text does not establish a filtered result. Automated tests should additionally compare the full exact group/ID sequence.

### A. Candidate, software and build gates

| ID | Action | Required result/evidence |
| --- | --- | --- |
| A01 | Record Git candidate, prerequisite approvals, status and starting protected hashes. | Correct branch/candidate, no overlapping work; submitted files and protected source/core/reference paths match expected baseline. No acceptance against a moving tree. |
| A02 | Run the existing fixture/core integration verification with pinned Node. | Current compiled public core is consumed; source and bundled fixture SHA-256 match the frozen source hash; normalized fixture count is 20. Retain actual output. |
| A03 | Run core and target checks prescribed by the executable RN07 package, sequentially. | Relevant core/state/UI suites and target typecheck pass; two terminating target test runs, with actual counts. Include all 11 reference cases and supplemental synthetic multi-track coverage in automated evidence; do not present synthetic data as a real device fixture case. |
| A04 | Export Android JS and build the Android development candidate through the established scripts. | Successful export and native build logs, exact candidate artifact/path/hash. Reuse documented Windows native workaround only under assigned scope; log environment-specific deviations. Build success alone is not launch success. |
| A05 | Install that APK on the selected AVD and cold-open current JS. | Successful install, correct application ID, fresh bundle/launch evidence and rendered schedule. Record any reused client/native artifact explicitly; no claim of a new native build if only JS changed. |
| A06 | Check app and Metro logs during representative interaction windows. | No fatal crash, red error screen, unhandled JS error or dev-server failure. Disclose soft exceptions and warnings verbatim with observed effect; do not say “zero exceptions” from an absence-of-fatal scan. A host OOM invalidates that server observation until a fresh successful window is captured. |

Building/installing and generated output are future assigned RN07 actions, not actions performed during checklist preparation. Use Node v24.19.0 from the established local runtime for target gates; confirm it live rather than use the default system Node. A final executable package must list precise commands and immutable baselines before assignment.

### B. Schedule, search and empty states

| ID | Setup and action | Expected result |
| --- | --- | --- |
| B01 | Cold baseline; scroll from first through last section. | 20 sessions total; 8 group headings in order: 8:00 am, 9:15 am, 10:00 am, 11:00 am, 12:00 pm, 1:00 pm, 2:00 pm, 3:00 pm. Flattened IDs: `[1,4,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]`. Names, original time strings, locations and tracks are readable. |
| B02 | Inspect equal-start-time rows, including sessions 6/7 and 10/11. | Source-relative order is stable within their sections; no duplicate/missing rows on scrolling/recycling. |
| B03 | All tracks/All mode; enter `IOnic`. | Case-insensitive name search: IDs `[4,2,3,5,7,8,9,11,13,14,15,16,17,18,19]` in the fixture's exact groups. No description/location-only matches. |
| B04 | Enter `zzz-no-such-session`; then clear. | General no-results message, no stale rows or stale group headings; clearing restores the prior track/mode-filtered results. No spinner presented as empty. |
| B05 | Enter a single space; compare with the shared selector's expected IDs derived at execution. | Space is preserved rather than trimmed away; selection follows name-substring semantics. Capture the derived expected IDs as supplemental evidence, not a new frozen fixture case. |
| B06 | With search active, switch All/Favorites and return. | Search text and track choices persist; Favorites never shows nonfavorite rows. Returning to All shows its correctly filtered results without reinitializing state. |
| B07 | Review controlled loader tests for pending, sync throw, rejected promise and retry success. | Loading, error/retry and empty are distinct; retry clears error; stale completion cannot overwrite newer state. These bundled-loader cases may be automated evidence only. Do not break native assets or add a debug menu to simulate them. |

### C. Favorites and synchronization

| ID | Setup and action | Expected result |
| --- | --- | --- |
| C01 | Baseline; switch to Favorites. | Explicit favorite-empty state; no All rows leak into it. |
| C02 | In All, favorite session 12 using its accessible list action; acknowledge informational alert. | Favorite is added immediately, once; informational acknowledgement does not determine whether the addition happens. Favorites displays it. |
| C03 | Favorite 20, then 1; All tracks/no search, Favorites mode. | Display order `[1,20]`, not addition order `[20,1]`; correct corresponding group headings. |
| C04 | For an already-favorited row in All, invoke Favorite again. Test Cancel, then explicit removal in separate attempts. | Source contract's remove-confirmation branch appears; Cancel preserves it, confirmation removes it. No duplicate ID. Confirm exact approved RN04 labels rather than invent new wording. |
| C05 | In Favorites, invoke Remove; Cancel, then repeat and confirm. | Cancel retains the row/favorite; confirmation removes it, updating rows/groups/empty state. Sliding item closes appropriately. |
| C06 | Open detail for a known session; toggle star on, then off. | Immediate state/icon changes without a list confirmation alert. Back to schedule reflects the same state; no duplicate addition or stale favorites. |
| C07 | Favorite 12 and 3; choose only Food tracks; switch Favorites. | `favorites-some` yields `[12]`. Track exclusion still applies to favorited session 3. |
| C08 | Leave favorites populated; background/resume without process death; then separately force-stop/relaunch. | Live process retains favorites. New process starts with empty favorites as specified; persistence across process death is not required. Record whether the process actually survived the background test. |
| C09 | Inspect automated `add-duplicate` and `remove-absent` reference cases. | Favorite IDs remain `[1,12]` and displayed IDs `[1,12]`. An absent-ID removal is an automated state case; do not create an impossible user gesture just to claim native coverage. |

### D. Detail entry and Android back

| ID | Setup and action | Expected result |
| --- | --- | --- |
| D01 | Select a schedule row. | Correct ID/name/times/location/tracks/available description. Breakfast (ID 1, no description) renders safely with no `undefined` text. |
| D02 | Set search/tracks/mode, scroll to a row; open detail; use toolbar back. Repeat with Android system Back. | Schedule retains search, filters, mode and favorite state. Record scroll restoration separately; do not invent an exact pixel-offset requirement if the approved RN04 contract does not specify it. No duplicate schedule/provider reset. |
| D03 | Force-stop the app, then cold-enter a valid detail using RN04's documented mechanism. | Fixture loads and requested session renders without first opening schedule. It depends on session ID, not a schedule-screen parent. Back reaches a usable schedule/fallback per approved RN04 contract. |
| D04 | Cold-enter an unknown ID via the same supported mechanism. | No crash or mutation; safe unknown-session UI/back behavior matches approved RN04 acceptance. Do not demand the original Ionic blank-content quirk as a target design. Invalid favorite action is absent/disabled/harmless as specified. |
| D05 | From detail press system Back once; from schedule root press Back separately. | Detail returns once to schedule. Root follows normal approved Android task behavior; no crash, modal ghost or unintended loop. Root exit is not a state-persistence promise. |

### E. Track-filter draft, apply and dismissal

| ID | Setup and action | Expected result |
| --- | --- | --- |
| E01 | Baseline; open filter. | All available tracks initially selected. Reopening later mirrors the applied selection. Track labels are readable and checkbox states accessible. |
| E02 | Clear all; select only Ionic; apply. | `single-track` IDs `[4,2,5]`; session 3 (Ionic Tooling, Tooling track) is excluded. Filter acts on track identity rather than name search. |
| E03 | Apply Ionic and Design; search `Ionic`. | Intersection result `[4,2,5,7,18]`, grouped exactly as `search-plus-track`. |
| E04 | Clear all and apply. | No rows; explicit empty state. Zero selected tracks means none, not all. Reopen: all remain unchecked. |
| E05 | Select all and apply after E04. | All available session tracks restored; current search/mode still apply. Clear search/All mode restores B01. |
| E06 | With a known applied filter, open modal and change draft; cancel via explicit cancel/close, then reopen. | Applied filter/result set unchanged; canceled draft discarded. If a dedicated Cancel control is not in approved RN05, use its approved close affordance and record that choice. |
| E07 | Change draft; dismiss with Android Back. | Modal closes; draft discarded; prior applied tracks and result set remain. Back does not also pop schedule/detail. |
| E08 | Change draft; dismiss by backdrop or native swipe-down if that presentation supports them. | Each supported dismissal discards the draft. Mark a genuinely unsupported optional gesture N/A with reason; E06/E07 remain required. Never add modal gestures during acceptance. |
| E09 | Change draft; clear/reset it without applying. | Clear/reset affects draft only; underlying applied selection is unchanged until Apply. Closing discards that draft. “Reset” must not be misreported as Cancel. |

### F. Swipe, scroll and accessible action parity

| ID | Setup and action | Expected result |
| --- | --- | --- |
| F01 | Swipe a row horizontally in All; invoke its favorite action. Repeat in Favorites for removal. | Same add/duplicate/removal and confirmation/cancel semantics as accessible buttons. No duplicate handler invocation. |
| F02 | Perform vertical and diagonal drags across rows and group boundaries. | List scroll works without accidental favorite changes or detail navigation; horizontal action reveal is intentional. Record exact interaction/observed result, not a general “gestures work.” |
| F03 | Reveal action, then tap its action; separately tap the ordinary row. | Action does not also navigate. Ordinary row opens correct detail; no stale action on a recycled different row. |
| F04 | Open an action on one row, scroll/recycle it, then interact with another. | Session identity/actions remain correct; no stale favorite indication or wrong-session mutation. |
| F05 | Use accessible buttons without swiping for add/remove and confirmation cancel. | Complete equivalent workflow is possible; gesture-only functionality is not acceptable. |

### G. Keyboard, accessibility and presentation

These are usability gates for the slice, not a claim of full accessibility conformance. Record the actual tested font/display scales and TalkBack configuration; do not mark PASS merely because labels exist in code.

| ID | Setup and action | Expected result |
| --- | --- | --- |
| G01 | Focus search, type/edit query with on-screen keyboard, then press Android Back. | First Back dismisses keyboard without losing query or unexpectedly leaving schedule. Controls/results remain usable; no input focus loop. |
| G02 | With keyboard visible, interact with mode, list and filter using their intended affordances. | Focus/keyboard behavior does not block controls, conceal required actions or cause double taps/accidental row navigation. Document any approved intentional dismissal behavior. |
| G03 | Enable TalkBack and explore search, modes, rows/detail entry, star, filter checkboxes, Apply/close, list actions and alert buttons. | Understandable labels/roles, active mode/checked/favorite state announced, usable focus order, no unlabeled icon-only required action. Read enough row context to distinguish sessions; avoid duplicate focus traps. |
| G04 | With TalkBack, open/dismiss filter and favorite confirmation; return from detail. | Modal/dialog focus remains within the active surface and returns to a sensible invoking control/context on dismissal; background controls are not unintentionally actionable. |
| G05 | At default font scale, then system font scale approximately 1.3 and largest available at or above 1.5 (record actual values), repeat representative schedule/detail/filter/alert flows. | Important content/actions are readable and reachable by scrolling; no overlaps, clipped required labels or inaccessible Apply/Cancel. Scaling is honored. Record a limitation if the selected image cannot expose the intended setting. |
| G06 | Test default and a larger available display-size setting; restore afterwards. | Search, rows, modal and detail remain usable; no off-screen essential controls. Record actual setting, not an unsupported percentage claim. |
| G07 | Repeat representative flows in light and dark mode, including a mode change while app stays open. | Readable text, selected states, inputs, rows, section headers, favorite controls, modal and dialogs; no invisible content or theme-only error. Visual inspection is qualitative; do not claim measured contrast compliance without measurement. |
| G08 | Inspect system bars, keyboard/insets and scroll edges on the portrait AVD. | Header/search/content/action controls are not covered by status/navigation bars or keyboard. Test the actual RN01 orientation setting; landscape is outside this portrait-configured slice unless separately assigned. |
| G09 | Background/resume during schedule and, separately, a modal or detail flow. | No crash, leaked duplicate screen, spurious filter apply or duplicate favorite mutation. Preserve/discard modal draft according to approved RN05 lifecycle behavior; if that behavior is undefined, record a decision needed rather than inventing it. |

## Fixture traceability

| Frozen case | Device path / supporting automated evidence |
| --- | --- |
| default-all | B01–B02, exact groups/IDs in target tests |
| no-tracks | E04 |
| single-track | E02 |
| search-case-insensitive | B03 |
| search-no-match | B04 |
| search-plus-track | E03 |
| favorites-empty | C01 |
| favorites-some | C07 |
| favorites-order | C03 |
| add-duplicate | C04 plus C09 automated state evidence; UI branch must also be checked |
| remove-absent | C09 automated state evidence; no device-only simulation required |

Supplemental every-track behavior is synthetic and belongs to automated shared/target evidence. No real fixture session has multiple tracks; do not claim the AVD run proves that edge case.

## Closing the run

1. Complete a result record for every case and optional branch. Restore device settings and stop only owned runtime processes; leave no disruptive background work. Record teardown failures.
2. List defects and fixes separately, with candidate/file/evidence links. Any product change produces a new candidate: rerun affected cases and relevant regression gates before claiming final acceptance; never combine old screenshots with new source hashes as one verified run.
3. Preserve successful build, install, current-bundle and behavioral observations separately. A build/launch with later Metro OOM is a failed server window, not automatically a failed native build or an app crash. Report observed limitations precisely.
4. The future executable RN07 package must freeze the handoff, revisioned manifest and evidence hashes using the repository hash tool, then submit to verified GPT-6.1 Sol/high/no fallback under qwen.md. Permit required read-only reviewer Git/hash/check commands. The checklist itself is not a reviewer verdict.
5. All required software/native cases must pass or receive an explicit human scope decision; missing evidence cannot become PASS. Technical reviewer approval and human acceptance remain separate. Do not mark Done, commit, push, publish or begin NS01 solely from completing this checklist.

## Result entry template (copy when executing)

```text
Run/candidate:
Case/subcase:
Status: NOT RUN | PASS | FAIL | BLOCKED | N/A (optional branch only)
Preconditions and actual steps:
Expected:
Observed:
Evidence paths / command exits:
Pixel/interaction observer:
Defect or blocking decision:
Settings restored / teardown:
```

No software checks, build, device actions or settings changes were performed to prepare this checklist.
