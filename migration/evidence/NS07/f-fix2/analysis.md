# NS07 F3 analysis — software only

Observer: Hermes GPT-6.1 Sol high (software).
Entry gate: entry-gate.json; branch/HEAD/index/raw porcelain captured and evaluated before this directory was created. The NativeScript diff byte-equaled F1; candidate 2 was recorded before rebuilding. No device commands, visual inspection or accessibility-service confirmation in F3.

## F3-A11Y — G05 mode state

F2 XML and coordinator Phase F2 establish both mode Buttons selected=true after switching, and Favorite sessions enabled=false just after cold launch despite working touch input. F1 Schedule.vue:111,123 binds undefined for the unselected ready mode after previously binding disabled or selected.

Installed-source chain (paths below relative to migration/nativescript/node_modules/):
- nativescript-vue/dist/renderer/patchProp.js:45-51 forwards native properties to patchAttr; renderer/modules/attrs.js:18-26 sends null to removeAttribute, everything else (including undefined) to setAttribute.
- nativescript-vue/dist/dom/index.js:4 imports set-value; :118-131 passes writes and original-value restoration through setValue. set-value/index.js:107-125 deletes a property for undefined rather than assigning it. A prototype accessor is not invoked by deleting an absent own property. Null removal can also restore an undefined original value through this same deletion path. Thus this is not merely a Vue patch being skipped: its write reaches a deletion instead of the NativeScript setter, leaving the previous style/accessibility state intact.
- @nativescript/core/accessibility/accessibility-properties.js:57-68 registers the role/state CssProperties with enum conversion. accessibility/accessibility-common.js:296 and :322-328 define radioButton, checked, unchecked, disabled and selected (no unselected/normal enum).
- @nativescript/core/application/application.android.js:1082-1087 maps the role; :1123-1140 sets checkable/checked explicitly for radioButton, while the default Button role sets enabled from state!=disabled and selected from state==selected. ui/core/view/index.android.js:961-986 forwards defined state updates to accessibility refresh.

Chosen change: keep native Buttons, visible labels, accessibilityLabel, dimensions, colours and setMode commits; give the two mode Buttons the radioButton accessibility role and always bind checked or unchecked from the same mode predicate. Keep isEnabled=ready, so native enabled reflects readiness; the radio delegate no longer overrides it using a stale disabled state. Exactly one checked mode is exposed after readiness, in both directions. For the same undefined-reset flaw in the existing SessionDetail favorite Button, replace only its undefined branch with the supported unchecked value; its existing Button role still derives selected=false and enabled=true in that branch. No favorite semantics or other styling changes.

Why smallest: declarative defined enum values; no native delegate override, imperative accessibility mutation, store changes or custom controls. The detail sibling is a one-token correction of the same defect class in an already-required fix file.

F4: after a cold launch reaches ready, dump XML for All -> Favorite -> All -> Favorite (also empty Favorite and populated Favorite). Both mode nodes must have enabled=true, checkable=true, class android.widget.RadioButton; checked=true only on the mode whose dataset/colour is active, checked=false on the other. Read checked, not selected, as the mode signal. Both must remain touch-operable. Repeat at 1.0/1.3/2.0. On detail, toggle favorite on/off and confirm its selected attribute resets. Actual speech/focus still requires the existing manual TalkBack follow-up.

## F3-G07-LIVE — G07-1 live appearance

F1 Page attributes fix cold load/navigation but not a live switch (coordinator Phase F2:409). Installed sources:
- @nativescript/core/native-window/native-window.android.js:27-46 observes the activity configuration; :142-151 converts uiMode to appearance. application/application-common.js:443-445,488-490 forwards the primary-window appearance; :749-761 emits Application.systemAppearanceChangedEvent synchronously after updating CSS.
- application/application.android.js:414-431 calls super.setSystemAppearance(value), which emits that event, THEN refreshEdgeToEdge(activity). Its comment states uiMode is handled and the activity survives. App_Resources/Android/src/main/AndroidManifest.xml:28 confirms uiMode in configChanges. A night-mode switch does not recreate the activity/load the Page in this setup (also corroborated by F2's retained PID).
- utils/native-helper-for-android.js:279-298,349-402 refreshes native edge-to-edge system bars using system appearance, overwriting the page's icon choice. The full-screen modal additionally calls enableEdgeToEdge(activity, window) in its DialogFragment.onConfigurationChanged (ui/core/view/index.android.js:231-246).
- ui/core/view/view-common.js:131-135 reapplies statusBarStyle on load only; :866-874 proxies the property. ui/page/index.android.js:41-51 calls super on load; it has no live appearance reapply. ui/core/view/index.android.js:1081-1106 exposes updateStatusBarStyle and maps dark to APPEARANCE_LIGHT_STATUS_BARS on API>=30 (dark icons). Simply assigning the same property value does not force the native setter.

Chosen change: each of Schedule, SessionDetail and TrackFilter registers one Application.systemAppearanceChangedEvent handler on its Page loaded event and removes it on unloaded. The handler posts a callback on that Page's native Android view, then directly invokes page.updateStatusBarStyle('dark') if the identical Page is still loaded. Posting is essential: a synchronous event handler would run BEFORE core refreshEdgeToEdge, and modal configuration handling must also finish first. No timers, global theme override or navigation dependency. Keep both F1 Page attributes unchanged for cold load/back navigation and white pages. No Home change: it owns only a Frame.

Why smallest: per-page lifecycle subscription and the existing core method, without dependency/config/core patch, duplicated raw window API flags or a process-wide permanent listener. Unload removes the listener; queued callbacks guard against departed Pages.

F4: on each of Schedule, detail and the open full-screen TrackFilter modal, switch night on AND off without navigating or reopening; settle the UI queue, capture the same screen, and inspect clock/icons directly in full-resolution pixels. They must stay dark and readable. Check same PID/no recreation, then cold dark launch, light launch, back navigation, modal Close/reopen/Done and dialogs for regression. XML alone does not show icon colour.

## F3-G05-3 — scaled swipe strip

F1 Schedule.vue:175 fixes the strip at 96 dp and :182 translates content by -96; F2 measurements record 252 px at every font scale and coordinator Phase F2:406 observes Favorite spilling beyond it at 2.0. Installed core ui/button/index.android.js:48-59 creates an Android Button; ui/text-base/index.android.js:301-324 controls wrapping and native single-line/ellipsis; ui/button/index.android.js:98-103 applies padding. Text size scales natively; a fixed width cannot follow it. ui/core/view/index.d.ts:907-909 documents getActualSize() in dp, the same unit used for translateX.

Chosen change: let the swipe Button measure its single-line text with width auto, minWidth=96 and padding=8,16, rather than constraining it to 96. On loaded/layoutChanged, record its positive actual width per session; translate the open row by that width (96 fallback until first layout). All rows use the unchanged label function. Native remeasurement follows font changes; storing per-row widths also avoids assuming different rows/recycled views have the same measured width. Explicit textWrap=false prevents a mid-word break. At default scale the existing label's padded intrinsic width is below the 96 minimum; F4 must verify it remains 96 dp. No fixed font-scale multiplier or text shrinking.

Keep automationText swipe-action-<id>, accessibilityHidden=true, visibility visible only for the open row/collapse otherwise, label function, tap handler, swipe gestures and the entire column-1 Button unchanged. No state/reducer logic moved.

F4: at 1.0/1.3/2.0 reveal a fully visible row, compare the closed and settled-open session-<id> XML right edges; their displacement is the strip width in px (the strip itself is deliberately accessibility-hidden). Divide by the recorded display density to get dp. At 1.0 expect 96 dp, at 2.0 permit growth and inspect the entire Favorite and Remove labels/padding in pixels. The content right edge must meet the strip left edge with no overlap or gap. Repeat after switching modes, scrolling/recycling rows, closing/reopening and changing font scale. Confirm hidden/closed strips stay collapsed and absent from XML; perform the unchanged action and row tap/gesture regression. Software measurements/mocks cannot establish pixel fit.

## Verification boundary

Run all prescribed commands with pinned Node and sanitized child environments. Parse target counts only from the two Vitest JSON reports. Capture cumulative/F3-only diffs, candidate 3 and packaged-bundle evidence, final tracked/protected hashes and empty-index/whitespace checks. Additional software-only probes exercise installed patch semantics and component handler/binding contracts; they are not device proof. F4/coordinator pixel inspection remains required for every visual/accessibility acceptance claim.
