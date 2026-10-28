NS07 checkpoint G2

Status: CHECKPOINTED. STOP; this is not package acceptance.
Executor: Hermes GPT-6.1 Sol high, human-chosen.
Results: migration/evidence/NS07/g-settings2/results-g.json
Captures: migration/evidence/NS07/g-settings2/capture-index.json
Audit: migration/evidence/NS07/g-settings2/checkpoint-audit.json

Gate and preservation

Branch migration/slice-1; HEAD d7a4067e7849f119b937fd3723c389b7b834c71c;
index empty. Branch/HEAD/index/full porcelain evaluated before migration writes.
Only explicitly allowed dirty/untracked paths were present. The unrelated root
package-lock.json modification was allowed by the human and was never read,
diffed, edited, restored or staged. The coordinator commit changes only README.md
and docs/screenshots/; migration/nativescript/ is unchanged.
Candidate APK: 117638026 bytes; SHA-256
fa06fb8a0f840d3865ce16e100277e5b58fed40ec9ca37f20df31709070451d5.
Installed base.apk hash matched; no install or rebuild. g-settings2/ was absent
at entry. All 8001 baseline files, including phase A/B/redaction/G1 history,
NS07.md and checkpoints A/B/G1, retain their hashes; evidence path sets match.
No IDEA.md contents read. No product/test/config edits or Git writes.

Case outcomes

G01 BLOCKED: IME setting 0 -> 1 was accepted, SearchBar focused and IOnic typed,
but repeated compressed XML dumps exposed no IME keys. Full keyboard was not
confirmed, so no Back was sent. G01-query-focused/query,
G01-keyboard-before-back and G01-keyboard-inspect PNG/XML pairs. Keyboard/Back
walkthrough remains follow-up; pixels must establish the actual presentation.
G02 BLOCKED: full-keyboard prerequisite not established; no no-keyboard tap
sequence was misrepresented as keyboard-visible evidence. Same G01 frames.
G03 LIMITED: offline XML audit of search, modes, row context, detail favorite
off/on, native switches, modal close/Done, dialog controls and revealed swipe.
Audit: G03-accessibility-tree-audit-final.json (plus initial audit). Sampled
required controls have labels or descendant context; ten switches expose
checkable/checked; modes expose selected flags; six detail placeholders expose
enabled=false. Favorite button label/state and raw selected flags are retained.
Revealed swipe action is not independently exposed; ordinary button remains.
No TalkBack enable, speech, traversal, duplicate-stop or focus-order claim.
G04 BLOCKED: D5 TalkBack automation limit. Modal/dialog focus containment and
return need a manual TalkBack walkthrough; G03-tree2-filter/favorite-confirm/
detail PNG/XML are surface evidence, not focus proof.
G05 LIMITED: default/1.3/2.0 Android-accepted font values exercised, restored.
Representative schedule top/scrolled, described detail, filter, favorite alert,
Cancel dialog and revealed swipe captured. At 2.0, two content scrolls reached
favorite and bottom detail controls (G05-font2-retry-detail-scrolled-1/2).
Coordinator must judge scaling, clipping, overlap and readability. 2.0 was the
requested largest trial and was accepted; no settings-UI maximum enumeration
or larger-value claim. RN LogBox note is RN-specific, not an NS exemption.
G06 LIMITED: density420 and override504 representative flows exercised; reset
returned physical420 with no override. G06-default-* / G06-density504-* frames;
layout/essential-control visibility still requires coordinator pixels.
G07 LIMITED: light, dark cold-launch, and live no->yes->no with the same PID
and no relaunch exercised. G07-light-*, G07-dark-cold-* and G07-dark-live-*
frames cover schedule/detail/filter/dialog/swipe; selected states, readability
and colors require coordinator qualitative inspection. No contrast compliance
claim. System setting is restored to no.
G08 BLOCKED: bars/edges structural flows captured (LIMITED pending pixels), but
full keyboard/insets not established despite IME1. G08-keyboard-insets and
G08-clear-insets are current evidence. Floating versus docked is UNCONFIRMED,
not silently copied from RN07 D12; coordinator must classify the PNGs. No Gboard
mode changes or docking attempts. Docked-insets/manual keyboard follow-up.
G09 PASS in interaction scope: HOME/resume on schedule preserves IOnic; separate
HOME/resume on favorite-enabled University of Ionic detail preserves identity
and state, then toolbar Back returns once and Favorites contains exactly [4].
Same PID retained. Separate force-stop/relaunch resets query/favorites, followed
by default schedule. Detail branch chosen as checklist permits; no undefined
NS05 modal-background lifecycle policy invented or accepted.

Settings: record -> change -> test -> restore -> reread

Full receipts: settings-transactions.json; final environment-comparison.json.
font_scale: entry1.0 ->1.3 ->1.0; ->2.0 ->1.0; corrected retry ->2.0 ->1.0.
wm density: entry Physical density:420; ->override504; wm density reset ->420,
  no override, exact original raw readback.
night: entry no ->yes for dark cold-launch ->no; ->yes live ->no.
show_ime_with_hard_keyboard: entry0 ->1 for G01/G02 ->0;
  ->1 for G08 ->0. Keyboard-visible tests blocked, not passed.
Unchanged: RN01_API36/emulator-5554, sdk_gphone64_x86_64, API36,
1080x2400 portrait, enabled accessibility services null, accessibility_enabled0,
navigation_mode2; ro.sf.lcd_density property is empty at entry/final.
Every recorded environment value is byte-equal at final readback.
settingsRestored=true; no failed restore, no further settings changes pending.

Logs, evidence and incidents

169 PNG/XML pairs validated (hashes, XML parse, PNG signature/chunk CRCs and
pixel-data decompression). 22 final case/subcase entries; overlapping aggregate
entries are not independent test totals. All pixels/privacy remain coordinator
work; executor makes no pixel approval or redaction claim. Human clipboard
history clearance was confirmed before launch; no dumpsys input_method.
15 bounded A06 process windows: logcat -d -t 400 --pid, stable PID before/after,
no detected fatal-pattern match. W/E retained verbatim in per-window files and
A06-log-review.json, including CPU variant, HWUI, ashmem, input/back warnings.
Not warning-free, exhaustive, release-build or general stability evidence.
All ADB calls target emulator-5554 with <=30s timeout. Dump retries <=5 with
2s waits; post-action polls <=10s. Fresh XML before each input; exact
case-insensitive text matching and resource-id/content-desc automation IDs.
Gestures begin >=100px from edges; hidden taps require fresh open-row XML and
computed strip centre. Raw ADB captures may be CRLF; authored text is LF.

Preserved helper incidents: inspect.py initially shadowed Python stdlib, renamed
before further device input; default modal had no scrollable XML node, stopped
before any unsupported gesture; first font2 detail predicate incorrectly
required the offscreen favorite-toggle, restored immediately and retried with
unique labels after correcting screen identification and content-scroll target.
Original captures/errors and cases.json retained; results-g.json cites the valid
G05 correction without turning the first blocked attempt into a product defect.
Cold-top frames can precede settled font/density layout (some retain the preceding
viewport geometry); later all-top/detail/filter/dialog frames are the sizing
samples. Do not use a startup frame alone as proof of settled scaling.
Helper-only Pyright inference warnings are not product checks. No fixes.

Keys/text/relaunches and final state

Back keyevent4: none. HOME keyevent3: twice, G09 schedule and detail only, each
following fresh XML and captured pre-key frame. No other keys.
input text IOnic: G01, G09; zzz-no-such-session: G08. No space or other strings.
Every text input followed a SearchBar XML-bounds tap. Clear through Clear query.
Every force-stop/monkey and both launcher resumes are recorded in relaunches.json
and command receipts. Final PID17476, foreground schedule, All sessions selected,
all ten tracks, empty search, light/default sizes, no open swipe row.
Final evidence: G09-final-filter-check and G09-final-schedule PNG/XML,
final-device-state.json and environment-comparison.json.
Outer terminal invocations have supervisor-timestamp-derived receipts in
commands.jsonl; child subprocesses have measured command/cwd/exit/timing/logs.

Remaining: coordinator inspect every frame including privacy, adjudicate G05-07
and G08 bars/keyboard presentation; manual full-keyboard G01/G02/G08 and TalkBack
G03/G04 walkthroughs. No submission/freeze, final handoff, delegation/review
request, staging/commit/push. Existing G1 checkpoint stays immutable.
Machine result: tools/qwen-supervisor/.runs/sol-ns07-r2-g-20261027/result.json
STOP.
