NS01 B2 capture notes

Observer: Hermes GPT-6.1 Sol high (device actions); pixels pending coordinator

B-launch.png is the first cold-launch assertion frame. Its UI XML was not obtained: initial unforced adb shell dumps returned two null-root errors, then only the dump-success message. All raw outputs/receipts are retained. Polling took 20942 ms, exceeding the 20000 ms observation window by 942 ms because an in-flight dump completed after the deadline. This case is BLOCKED, not PASS and not an assertion of a product failure.

B-launch-diagnostic.png is a later, separate diagnostic frame. A single -t did not allocate a PTY because stdin was nonterminal; adb explicitly requested multiple -t flags. No XML returned, and no claim is made for this frame. These first two PNGs remain incomplete pairs; do not pair them retrospectively with B-relaunch.xml.

B-relaunch.png and B-relaunch.xml are the second cold launch using adb shell -tt uiautomator dump --compressed /dev/tty. After one transient null-root response, the shell XML appeared in 6460 ms across 2 polls. XML has title Conference and body Welcome to the conference app. under dev.translationtest.ns, and no detected error/crash dialog. PID 4385; first-launch PID 4161. PNG/XML signatures and hashes checked; pixels and clipboard/privacy inspection remain pending coordinator for every distinct PNG.

All screenshots use adb exec-out screencap -p. No input fields, taps, Back/Home keys, input_method dumps or settings writes were used. App left running; post-capture reads did not navigate away.
