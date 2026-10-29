# NS07 F1 analysis (software only)

Observer: Hermes GPT-6.1 Sol high (software).
Scope: G05-1, G05-2, G07-1 only. No device/emulator commands or visual acceptance. Entry gate passed before any migration write; entry hashes and raw porcelain are retained alongside receipts.

## F1-G05-1 — mode labels

Failure: coordinator pixel inspection lines 15-16 records mid-word breaks and clipped second lines at font scale 2.0. Schedule.vue entry lines 110-123 put both SegmentedBar tabs in the star column beside Filter. Installed @nativescript/core/ui/segmented-bar/index.android.js lines 166-180 constructs Android TabHost/TabWidget; lines 206-213 use platform tab indicators via setIndicator(title), not a NativeScript textWrap/auto-height Button. Lines 87-100 access/update the indicator's title TextView; they do not replace the native indicator's constrained layout. Lines 117-122 set scaled text size. Do not misattribute lines 60-61's single-line setting to the visible title: that TextView is hidden tab content.

Chosen change: replace only the two-tab control with two vertically arranged, full-column native Buttons, textWrap=true, explicit padding and minimum (not fixed) height. Keep All sessions / Favorite sessions visible text and accessible labels, previous gray/blue colors, disabled-while-not-ready behavior, and the same setMode store commit (conference-store.ts lines 75-76). Each Button remains separately reachable, has its native button role (ui/button/button-common.js lines 5-8), and binds accessibilityState to selected for the selected mode (disabled when not ready). application/application.android.js lines 1123-1140 maps the button role's selected state to AccessibilityNodeInfo.setSelected. No text shrink, scaling cap, abbreviation, fixed height, new state logic or route.

Why smallest: the platform tab indicator offers no declarative auto-height/wrapping contract here. Giving each existing label the available column width and native multi-line measurement avoids native-tab internals and font-scale listeners. Filter stays in its column; only the defective mode control changes.

## F1-G05-2 — ordinary row action button

Failure: the coordinator records Favorite text outside its outline at scale 2.0. Schedule.vue entry lines 185-193 give the auto-column Button only a margin, with no explicit text padding/wrap policy. Button uses android.widget.Button (ui/button/index.android.js lines 48-59); its explicit padding setter includes border widths and calls native setPadding (lines 98-104). Text size is Android-scaled via ui/text-base/index.android.js lines 344-354. This is an inset/intrinsic-size presentation defect, not favorite state logic.

Chosen change: textWrap=true plus padding=8,16 on this ordinary row Button only, keeping its auto column and unfixed dimensions. Native text can request the padded width/height; the star-width session column yields/wraps. ui/button/button-common.js lines 10-17 maps textWrap=true to whiteSpace=normal; ui/text-base/index.android.js lines 301-311 disables single-line/ellipsis for normal wrapping. No assumed hard-coded scale or pixel width.

Why smallest: two declarative sizing attributes; no IDs, labels, callbacks or row layout changes. In particular the swipe-action Button, A1 collapse binding, accessibilityHidden, 96 dp strip, translation, swipe reducer and row tap paths remain byte-identical.

## F1-G07-1 — status bar on light pages

Failure: page content is intentionally white but system dark-mode status icons are light (coordinator lines 18). None of Schedule, SessionDetail, TrackFilter sets a status style at entry; Home is only a Frame and needs no change.

Installed API: ui/core/view/view-common.js lines 866-874 exposes statusBarStyle, inherited by Page; lines 131-134 reapplies it when loaded, including back navigation. ui/core/view/index.android.js lines 1081-1106 applies the native setter to the closest window. On this acceptance target (API 36; API >=30 branch), value light explicitly clears APPEARANCE_LIGHT_STATUS_BARS (light icons), while dark takes the other branch and sets that flag (dark icons). Therefore dark, NOT light, is required. Note that installed lines 1116-1129 implement a different legacy API 23-29 mapping; this run does not claim those Android versions.

Page background API: ui/page/page-common.js lines 41-46 exposes androidStatusBarBackground, lines 184-190 registers its Color converter; ui/page/index.android.js lines 73-78 calls closestWindow.setStatusBarColor. Modern edge-to-edge behavior can leave the page itself behind the bar; pages already stay white.

Chosen change: Page-level statusBarStyle=dark and androidStatusBarBackground=#ffffff on all three actual Pages, including TrackFilter's modal Frame/Page. The explicit icon policy is independent of system appearance and is restored on Page load; no system-dark CSS, global theme/config change or scheme-dependent page colors. F2 must validate cold launch and live light/dark changes (including navigation/modal transitions). There is no device proof here.

Why smallest: two Page attributes at each of the three actual window/page surfaces, no lifecycle listener or duplicated Android window code.

## RN07 intent only

Read migration/handoffs/RN07.md lines 72-79: F-3 allows scaled text measurement rather than fixed height; F-4 controls native header/status appearance explicitly. Its React Native hooks/Expo implementation is not applicable and is not copied. NS07 retains light pages per the approved F1 decision.

## Verification boundary

Run the prescribed software checks, two JSON-reported target test runs, packaged-bundle inspection and candidate-2 APK hash. No state logic is moved, so no state/test files are changed and the expected baseline remains 7 files / 115 tests. Static contract checks supplement but cannot establish pixel readability, live system-mode rendering or TalkBack behavior; these remain F2/coordinator work.
