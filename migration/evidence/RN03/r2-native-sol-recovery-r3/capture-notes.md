RN03 revision 2 — Sol recovery r3 — CAPTURED, not approved

Repository: C:/Users/Gerrit/job-search/POCs/cross-platform-translation-test-app-main
Branch: migration/slice-1
HEAD: f78a759741b57ed1a19c7b6630af67640571ff61
Execution: this openai-codex/gpt-6.1-sol/high invocation only. No delegation, fallback, profile edits or review dispatch.
Times below are UTC on 2026-10-24; command records carry ISO timestamps and elapsed milliseconds.

Infrastructure
06:47:34–06:47:37: service check activity/window both exited 0 but explicitly reported not found; Metro status exited 0, packager-status:running.
06:49:07.143: live CIM identity rechecked emulator PID25732, its qemu PID44784, exact RN01_API36 -no-window -gpu swiftshader arguments, and Metro PID45232. AVD name rechecked successfully.
06:49:07.539: the one authorized adb -s emulator-5554 emu kill exited 0 in 31 ms, returning killing emulator/OK. No forced kill.
06:49:12.421: CIM read showed both old emulator processes gone and Metro PID45232 still present.
06:49:12.857: hidden detached emulator launched, PID7200, same -avd RN01_API36 -no-window -gpu swiftshader arguments. Its stdout/stderr logs are in runtime.
06:49:21: activity/window services were found and pm path dev.translationtest.rn succeeded. Initial XML had null-root and transient missing-pull failures; none were accepted as success.
06:49:51.624: hierarchy successfully pulled and parsed, inside the 180-second boot bound. Every individual boot command timeout was at most 9000 ms. sys.boot_completed was not sufficient by itself.
06:49:51.651: reverse list was empty. Only tcp:8082 tcp:8082 was restored (exit 0); readback host-8 confirmed it. Metro still packager-status:running.
06:56:03–06:56:04 final checks: services found; reverse present; RN01_API36; emulator PID7200/qemu PID36016, same arguments; Metro original PID45232 still running and status request successful. No Metro start/stop/restart.

Normal UI observations and input
Opened the authorized development URI using am start (exit 0). Initial app extraction was transiently unavailable. Fresh XML then showed Android's Bluetooth keeps stopping dialog. Ordinary KEYCODE_BACK (06:51:29, exit 0) dismissed it; no Bluetooth settings or process-management command was used.
After that XML showed the real app Search sessions EditText at [76,403][1004,514]. The first derived-bounds focus tap returned 0 but its subsequent hierarchy was launcher, and pidof dev.translationtest.rn exited 1. Bounded AndroidRuntime/ReactNativeJS/ActivityManager error-log read returned no matching lines. Cause of the app disappearance remains unknown; no crash diagnosis is asserted. Reopened the same authorized URI, waited for schedule XML to settle, then made the second derived-bounds focus tap. The second hierarchy confirmed dev.translationtest.rn Search sessions focused=true. No settings/focus archaeology or JS injection.
Two query workflows completed without corrective input retries: IOnic -> clear, then zzz-no-such-session -> clear. Each string was entered once and each clear was executed once. Exact command history is retained; this is not a claim that there were only two individual input commands.
06:53:37.389: input text IOnic exited 0; current XML showed exact app EditText.text=IOnic and filtered Ionic rows.
06:53:46.343: symbolic KEYCODE_MOVE_END exited 0, followed by five symbolic KEYCODE_DEL (Android Backspace, 67), exit 0. XML restored Breakfast/All at list top.
06:54:27.121: input text zzz-no-such-session exited 0; XML showed the exact query, All selected, exact no-match message and no live session rows.
06:54:43.423: KEYCODE_MOVE_END, then one DEL per current query character, both exited 0. XML restored the unfiltered schedule. The Favorites and All buttons were tapped using their fresh XML bounds; both exited 0 and subsequent XML confirmed selected mode.
Historical six keyevents 123 were MOVE_END, not deletion; those historical commands were not replayed. No settings/IME changes, rebuild or install.

Empty-query XML caveat
This device exposes an empty EditText's hint as text="Search sessions", hint="Search sessions", including while focused. Raw XML is preserved unchanged. The index retains the raw attributes and explicitly records normalized query="". Empty query is supported by exact prior text, MOVE_END plus DEL count, restored Breakfast/All, then the exact Favorites empty message. It is not claimed that raw EditText.text was an empty XML attribute. Independent pixel inspection remains necessary.

Fresh captures, exactly one screencap/pull and contemporaneous XML each
05 RN03-05-ionic-cleared-restored: 06:54:22.563–06:54:27.056, query empty, All, Breakfast restored.
06 RN03-06-search-no-match: 06:54:38.862–06:54:43.361, query zzz-no-such-session, All, No sessions match your search or filters., no live rows.
07 RN03-07-favorites-empty: 06:55:02.162–06:55:07.098, query empty, Favorites, No favorite sessions., no live rows.
08 RN03-08-all-sessions-restored: 06:55:21.693–06:55:25.387, query empty, All, Breakfast restored.
All screencap, PNG pull, contemporaneous XML dump/pull commands exited 0. Native Windows C:/ host destinations were used. PNGs passed signature/chunk-boundary/zlib decompression checks, 1080x2400. Image 05 and 08 hashes coincide because the restored static state is identical; separate live screencap/pull commands prove their independent acquisition. No image was copied or retimestamped.
Capture index contains only these four fresh captures, with computed and rechecked SHA256 hashes. Original 01–04 remain at r2-native-recovery; they were neither copied nor relabeled fresh.

Verification and preservation
Pinned Node executed recovery.mjs baseline, recovery.mjs verify, and verify-captures.mjs. All exited 0. verify-captures.mjs reported captureCount=4, screencapCount=4, restartCount=1, preservation count=493, changed=[]. Hash recheck covered pre-existing evidence, all original PNG/XML, tracked and untracked source/tests, submissions/reviews and user changes. IDEA.md was excluded from reads/hashing and untouched. The two pre-existing modified app files and other untracked files remain intact. No Git staging/commit/push; coordinator owns whole-repository/index snapshot verification.

Runtime: tools/qwen-supervisor/.runs/sol-native-20261024-r3/
Proof records: commands.jsonl, preservation-baseline.json, preservation-check.json, restart-attempt.json, emulator-launch.json, emulator.stdout.log, emulator.stderr.log, boot-result.json, capture-verification.json. Helpers and intermediate XML are runtime-only. No helper/download outside runtime.
One initial inline PowerShell discovery was blocked by the headless guard and did not execute; recovery used runtime .ps1 files with -File, no approval/config change. No inline node -e or python -c.

Pending
Independent actual pixel inspection of existing 01–04 and fresh 05–08, including tutorial visibility. Every new tutorialStatus remains unknown; XML silence is not pixel evidence. Full RN03-r2 packet, formal manifest/tool verification, and independent Sol/high review remain PENDING. No approval, acceptance PASS, RN04 continuation or formal review dispatch. No app/test/dependency changes, installs or commits.
