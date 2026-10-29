# NS07 F5 analysis — F5-G07-LIVE (software only)

Observer: Hermes GPT-6.1 Sol high (software).

Entry gate passed before the first migration write: entry-gate.json and the five entry command receipts. Branch/HEAD/index/raw --untracked-files=all porcelain were captured, the complete status was checked against the allowlist, and the NativeScript diff byte-equaled f-fix2/fix.diff. Candidate 3 was recorded before rebuilding: 117669928 bytes, SHA-256 0d4c089755b895d09c80fd406aa6c671947691b6124ad9e399d9ff3025cca50e. preservation-entry.json records the entry file hashes. No device interaction occurs in F5.

## Installed-source findings and exact flag-write order

Unless otherwise stated, paths below are relative to migration/nativescript/node_modules/@nativescript/core/. Native widgets ship as widgets-release.aar, not Java source. Its installed classes were inspected with javap -c -p -l, preserving original source line tables. References to Utils.java and AndroidX source below are those line-table locations; corresponding bounded bytecode logs are in this directory. No node_modules patch was made.

A dependency report for this actual Android project resolves activity 1.8.1, core 1.13.0 and appcompat 1.7.0 (android-runtime-dependencies.stdout.log:49-54,174,210). Initial inspection of newer cached artifacts is retained but is NOT the basis of this analysis; only resolved-* bytecode is applicable. An absent Api28 class and an initial invalid binary extraction produced failed javap receipts; both were synchronous completed failures, not orphaned children.

### Configuration observation (before either window-specific refresh)

1. native-window/native-window.android.js:27-46 registers Activity ComponentCallbacks2; its onConfigurationChanged calls _setSystemAppearance at :41. Conversion of uiMode is :142-151.
2. native-window/native-window-common.js:242-253 updates CSS and synchronously notifies systemAppearanceChanged. Application installed its primary-window listener in application/application-common.js:443-445, forwarding to setSystemAppearance at :488-490. The Application-context ComponentCallbacks is a second entry, application/application.android.js:331-333,414-421; its primaryWindow.systemAppearance() read can itself observe and emit the change (native-window-common.js:138-148). These are observation paths, not status-flag writes.
3. application/application.android.js:423-430 calls super.setSystemAppearance first. application/application-common.js:749-761 emits the Application event synchronously, BEFORE the Android override refreshes edge-to-edge. F3 enqueues a View.post from this event. Equal values suppress the common event; edgeToEdgeAppearance separately suppresses redundant activity refreshes.

There is no source-guaranteed global total order between the application-context callback, the Activity's callback and the DialogFragment callback. Claiming a universal callback chronology or a measured on-device write trace here would be incorrect. The following are the exact ordered writes within each window's refresh chain, and their relation to F3/F5; the modal and activity chains may interleave.

### (a) Activity Window, Schedule or SessionDetail in its Frame

A0. Prior cold/navigation style: ui/core/view/index.android.js:1084-1105 obtains page.getClosestWindow() and writes APPEARANCE_LIGHT_STATUS_BARS with that same mask for 'dark'. This is the desired dark-icon bit, not a dark background. Page attributes are unchanged.

A1. After the Application event, application/application.android.js:428-430 calls refreshEdgeToEdge(activity). utils/native-helper-for-android.js:279-298,349-402 synchronously forwards existing colours/defaults into org.nativescript.widgets.Utils.enableEdgeToEdge. No JS post/delay/insets callback is installed here.

A2. Widgets Utils.java:195 (line table in widgets-utils-bytecode-r2.stdout.log:345-373) synchronously calls AndroidX EdgeToEdge.enable with automatic SystemBarStyle. Resolved EdgeToEdge.kt:75-89 selects EdgeToEdgeApi29 on API >=29; it uses the ACTIVITY getWindow(), not a modal window. Resolved EdgeToEdgeApi29.setUp, EdgeToEdge.kt:288-296 (resolved-androidx-activity-EdgeToEdgeApi29.stdout.log:29-89), changes fit/colours/contrast then calls setAppearanceLightStatusBars(!statusBarIsDark).

A3. That call writes the legacy LIGHT_STATUS_BAR decor bit first, then the modern appearance bit, synchronously: resolved WindowInsetsControllerCompat.java:672-689 (resolved-androidx-core-view-WindowInsetsControllerCompat-Impl30.stdout.log:145-181). If system theme is light: :674 setSystemUiFlag(8192), then :677 setSystemBarsAppearance(8,8). If dark: :682 unsetSystemUiFlag(8192), then :685 setSystemBarsAppearance(0,8). The following navigation-bar setter only masks navigation's bit (16), not status's bit (8). No scheduled status write, config listener, or insets/layout listener is installed by these methods.

A4 (F3). The earlier Application handler's View.post later calls page.updateStatusBarStyle('dark'), ui/core/view/index.android.js:1105 writes (8,8). Posting establishes queue order, NOT a window-traversal/configuration completion boundary. In the inspected NativeScript/AndroidX refresh alone, all writes are synchronous, so it would be wrong to invent an extra posted core write as the explanation for F4.

A5 (F5). The loaded Page's OnPreDraw listener reads THIS Page's closest Window controller and, only if bit 8 is absent, directly invokes the same core dark-style setter at :1105. It runs at the window traversal's pre-draw boundary, after config/insets/layout for that traversal, not after an arbitrary elapsed delay. It remains registered until Page unload, so a later configuration delivery/traversal cannot permanently outlive a one-shot callback. Already-correct frames cause no write.

### (b) TrackFilter's full-screen Dialog Window

B0. Schedule opens TrackFilter with fullscreen:true (Schedule.vue:59-63). TrackFilter's root is a Frame containing a Page (TrackFilter.vue:40-42). ui/core/view/index.android.js:170-184 stores _dialogFragment on the modal owner, i.e. that Frame. getClosestWindow at :1148-1158 examines Page.parent, finds that Frame's fragment and returns dialog.getWindow(). Therefore F3's Page setter ALREADY targets the dialog correctly here; there is no evidence of an activity/dialog target bug in that setter.

B1. Dialog creation calls enableEdgeToEdge(activity, dialog.getWindow()) at ui/core/view/index.android.js:182-184. Page load subsequently applies the existing dark Page style (core :1105). This is the cold path, not an additional live-switch write.

B2. For each changed nightMode, DialogFragment.onConfigurationChanged first calls super at ui/core/view/index.android.js:231-233, guards fullscreen/changed nightMode at :234-241, then calls Utils.android.enableEdgeToEdge(activity, DIALOG window) at :242-245. This path is independent of the Application event.

B3. utils/native-helper-for-android.js:357-360,395-397 selects the explicit-window overload. Installed widgets Utils.java:98-134 (widgets-utils-bytecode-r2.stdout.log:39-177) first copies the ACTIVITY Window's entire LayoutParams into the DIALOG Window at :99-104 (preserving only the dialog's type, so this can copy appearance/legacy attributes too), then sets decor-fit/colours, reads resource uiMode, obtains the explicit dialog's controller, and :130 calls setAppearanceLightStatusBars(!useDarkMode). Thus the attribute-copy write precedes the legacy/modern status-specific writes in this overload. The same resolved WindowInsetsControllerCompat.java order applies: light mode legacy set at :674 then modern (8,8) at :677; dark mode legacy clear at :682 then modern (0,8) at :685. Navigation's separate bit follows. This overload does NOT call EdgeToEdge.enable on the activity and does NOT post work or install an insets/config callback. The fragment itself is the later configuration-triggered refresh source.

B4 (F3). The Application event's single Page.post writes dark to the dialog at core :1105. Its order relative to the independent fragment configuration path is not specified by the Application event. The activity may also refresh underneath the dialog using A1-A3; correcting only one of these Windows cannot guarantee the other one after modal close.

B5 (F5). TrackFilter's per-Page pre-draw listener uses getClosestWindow() on every traversal: the explicit DIALOG window, exactly as B3. The underlying loaded Schedule also maintains its OWN activity-window invariant. When the modal closes, its Page listener is removed and Schedule's activity Window is already covered. No permanent process listener, no change to core/fragment/window callbacks, no replacement of core's insets listener.

## Why a traversal boundary, not a longer post/delay

Android sources installed locally are API35, not the API36 device's implementation; this distinction is explicit. They corroborate the platform callback contract rather than prove a pixel outcome on API36:
- C:/Users/Gerrit/AppData/Local/Android/Sdk/sources/android-35/android/view/ViewRootImpl.java:3659-3663 performs pending configuration inside traversal, :3695-3698 dispatches insets, :4169 dispatches OnPreDraw only later. :6362-6368 dispatches view configuration and forces another relayout if a config arrives after an earlier traversal.
- android/view/ViewTreeObserver.java:155-166 defines OnPreDraw after views have been measured/framed; :698-705 adds and :715-722 removes the listener. The observer can be merged/replaced on attach, so unload removes from the saved observer if alive, otherwise the Page's current observer.
- android/view/InsetsController.java:1870-1881 distinguishes explicit appearance from resource appearance; DecorView.java:2131-2139 does not itself add a delayed status write. NativeScript LayoutBase's insets handling schedules inset application but does not write status appearance (installed layout-base-bytecode.stdout.log).

The inspected sources do NOT explain exactly why Schedule->light and detail->light failed while the reverse succeeded, or why modal->dark failed while modal->light succeeded. In fact the theme-dependent refresh would naturally clear dark-icon appearance on entering dark mode, not on returning to light. F4 establishes the observed failure; software inspection establishes that F3 has no traversal completion guarantee, not a deterministic explanation for that direction split. No unsupported diagnosis of a particular extra native callback is claimed.

Chosen change: replace the three Application-event/single-post subscriptions with a per-loaded-Page OnPreDraw observer and conditional dark-style repair. Register only on Android API30+ where this modern flag and F1 mapping apply. Retain Page identity/isLoaded guards, remove observer on unloaded, keep F1 cold/navigation attributes. No queued callbacks, timers, frame retries, fallback, polling loop or larger/repeated delay. The listener observes actual drawing; it makes no write when the bit is already right. This persistent per-Page traversal invariant is necessary because no single event in the inspected sources jointly follows BOTH independent window-configuration paths. No bounded next-frame fallback is used.

Why smallest: three small lifecycle blocks and removal of the now-unused Application imports; no state extraction, new production module, dependency, native subclass, fragment monkeypatch, global theme override, insets listener replacement or layout/style change. All F1/F3 accessible states, wrapping controls, automation IDs and measured swipe-strip logic remain byte-identical outside these blocks/imports.

## F6 verification procedure (not performed here)

Install/hash candidate 4. On each of Schedule, SessionDetail and already-open TrackFilter, alternate night yes/no for at least five complete cycles (ten switches per page) without navigation/reopen between a switch and its captures. Record before/after XML and page/window identity, foreground Activity identity and PID; same PID alone does not prove no recreation. Capture a full-resolution frame as soon as the changed configuration has rendered, another at about 0.5 s and another at 3 s; timing is observation, not a product timer. Clock AND all status icons must be dark on the white background in every settled frame. Retain switch timestamps and any transient frames; coordinator grades full-resolution status bars, not XML or contact-sheet inference.

For the modal case, keep TrackFilter open through both directions, record the focused dialog Window separately from the underlying activity Window, inspect the modal's status-bar pixels, then close with Done and separately Close, capturing the exposed Schedule before opening again. This distinguishes correction of the dialog from correction only of the activity. Compare requested status appearance (LIGHT_STATUS_BARS set, mask 8) on BOTH windows if available in bounded window evidence; pixel proof while dialog owns focus plus immediately after dismissal is mandatory. Do not count a navigation-triggered repair as live-switch success.

Spot-check cold light/dark launches, dark detail toolbar Back and SearchBar own clear (XML-bound app taps may be inside the edge zone; gestures may not), F1/F3 G05 layout/accessibility at default and 2.0 and the specified regression subset. Check modal open/close after all switches and check departed Pages do not reassert styles. Software mocks/typecheck/build cannot establish Android scheduling or visual acceptance; F6 and coordinator pixel inspection remain unresolved by design.
