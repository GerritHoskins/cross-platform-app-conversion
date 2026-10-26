RN07 B2 bounded logcat W/E records, verbatim
Recorded 2026-10-25T17:49:35.367Z
No pixel or zero-exception claim. Overlapping windows can repeat records.

migration/evidence/RN07/b-device2/0031-D-window-start-logcat.stdout.log
10-25 17:13:39.490 18655 18655 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 17:13:39.490 18655 18655 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 17:13:40.350 18655 18655 W SoLoader: Initializing SoLoader: 0
10-25 17:13:40.355 18655 18655 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 17:13:40.355 18655 18655 W SoLoader: Previously recorded 0 base apk paths.
10-25 17:13:40.404 18655 18655 W SoLoader: SoLoader initialized: 8
10-25 17:13:41.560 18655 18682 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 17:13:41.612 18655 18655 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 17:13:41.769 18655 18655 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 17:13:41.769 18655 18655 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 17:13:41.809 18655 18655 W HWUI    : Unknown dataspace 0
10-25 17:13:43.046 18655 18655 W HWUI    : Image decoding logging dropped!
10-25 17:13:43.049 18655 18655 W HWUI    : Image decoding logging dropped!
10-25 17:13:43.051 18655 18655 W HWUI    : Image decoding logging dropped!
10-25 17:13:44.369 18655 18655 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@2be1036
10-25 17:13:47.659 18655 18655 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 17:13:47.663 18655 18655 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 17:13:47.663 18655 18655 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 17:14:01.270 18655 18655 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 17:14:01.270 18655 18655 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 17:14:01.271 18655 18746 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 17:14:01.271 18655 18746 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 17:14:01.272 18655 18746 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 17:14:01.272 18655 18746 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 17:14:01.292 18655 18655 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 17:14:01.292 18655 18655 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 17:14:01.293 18655 18655 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 17:14:01.350 18655 18691 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 17:14:01.350 18655 18746 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 17:14:01.692 18655 18655 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@ca848eb
10-25 17:14:01.758 18655 18655 W unknown:BridgelessReact: ReactHost{0}.raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: Unhandled SoftException
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: com.facebook.react.bridge.ReactNoCrashSoftException: raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException(ReactHostImpl.kt:906)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException$default(ReactHostImpl.kt:897)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.onWindowFocusChange(ReactHostImpl.kt:679)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at com.facebook.react.ReactDelegate.onWindowFocusChanged(ReactDelegate.kt:226)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at com.facebook.react.ReactActivityDelegate.onWindowFocusChanged(ReactActivityDelegate.java:237)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invokeSuspend(ReactActivityDelegateWrapper.kt:322)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:8)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:4)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$launchLifecycleScopeWithLock$1.invokeSuspend(ReactActivityDelegateWrapper.kt:469)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:34)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at kotlinx.coroutines.internal.DispatchedContinuationKt.resumeCancellableWith(DispatchedContinuation.kt:375)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:26)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at kotlinx.coroutines.CoroutineStart.invoke(CoroutineStart.kt:358)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at kotlinx.coroutines.AbstractCoroutine.start(AbstractCoroutine.kt:134)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch(Builders.common.kt:53)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch(Unknown Source:1)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch$default(Builders.common.kt:44)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch$default(Unknown Source:1)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock(ReactActivityDelegateWrapper.kt:467)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock$default(ReactActivityDelegateWrapper.kt:463)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.onWindowFocusChanged(ReactActivityDelegateWrapper.kt:320)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at com.facebook.react.ReactActivity.onWindowFocusChanged(ReactActivity.java:161)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at androidx.appcompat.view.WindowCallbackWrapper.onWindowFocusChanged(WindowCallbackWrapper.java:124)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at expo.modules.devmenu.detectors.InterceptingWindowCallback.onWindowFocusChanged(Unknown Source:2)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at com.android.internal.policy.DecorView.onWindowFocusChanged(DecorView.java:1818)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at android.view.View.dispatchWindowFocusChanged(View.java:16952)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at android.view.ViewGroup.dispatchWindowFocusChanged(ViewGroup.java:1530)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at android.view.ViewRootImpl.dispatchFocusEvent(ViewRootImpl.java:4873)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at android.view.ViewRootImpl.handleWindowFocusChanged(ViewRootImpl.java:4777)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at android.view.ViewRootImpl.-$$Nest$mhandleWindowFocusChanged(Unknown Source:0)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessageImpl(ViewRootImpl.java:7017)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessage(ViewRootImpl.java:6927)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at android.os.Handler.dispatchMessage(Handler.java:110)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at android.os.Looper.loopOnce(Looper.java:248)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at android.os.Looper.loop(Looper.java:338)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at android.app.ActivityThread.main(ActivityThread.java:9067)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at java.lang.reflect.Method.invoke(Native Method)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:593)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:932)
10-25 17:14:02.583 18655 18655 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@c019d4e
10-25 17:14:02.584 18655 18748 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 17:14:02.585 18655 18746 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 17:14:02.592 18655 18746 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 17:14:03.347 18655 18746 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 17:14:03.347 18655 18746 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 17:14:03.357 18655 18655 W unknown:ReactNative: Packager connection already open, nooping.
10-25 17:14:03.357 18655 18746 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 17:14:03.364 18655 18655 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 17:14:03.367 18655 18655 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 17:14:03.804 18655 18765 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 17:14:04.045 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 17:14:04.049 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 17:14:04.051 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 17:14:04.054 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 17:14:04.059 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 17:14:04.060 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 17:14:04.062 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 17:14:04.064 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 17:14:04.068 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 17:14:04.068 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 17:14:04.069 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 17:14:04.072 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 17:14:04.079 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 17:14:04.080 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 17:14:04.081 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 17:14:04.081 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 17:14:04.082 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 17:14:04.082 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 17:14:04.083 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 17:14:04.085 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 17:14:04.086 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 17:14:04.087 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 17:14:04.088 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 17:14:04.089 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 17:14:04.090 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 17:14:04.095 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 17:14:04.350 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 17:14:04.362 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 17:14:04.370 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 17:14:04.375 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 17:14:04.379 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 17:14:04.387 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 17:14:04.396 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 17:14:04.403 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 17:14:04.410 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 17:14:04.413 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 17:14:04.416 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 17:14:04.421 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 17:14:04.424 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 17:14:04.429 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 17:14:04.434 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 17:14:04.439 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 17:14:04.446 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 17:14:04.450 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 17:14:04.452 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 17:14:04.457 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 17:14:04.549 18655 18766 W ResourcesManager: Found a null ResourcesImpl, skipped.

migration/evidence/RN07/b-device2/0172-D-window-end-logcat.stdout.log
10-25 17:13:39.490 18655 18655 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 17:13:39.490 18655 18655 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 17:13:40.350 18655 18655 W SoLoader: Initializing SoLoader: 0
10-25 17:13:40.355 18655 18655 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 17:13:40.355 18655 18655 W SoLoader: Previously recorded 0 base apk paths.
10-25 17:13:40.404 18655 18655 W SoLoader: SoLoader initialized: 8
10-25 17:13:41.560 18655 18682 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 17:13:41.612 18655 18655 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 17:13:41.769 18655 18655 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 17:13:41.769 18655 18655 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 17:13:41.809 18655 18655 W HWUI    : Unknown dataspace 0
10-25 17:13:43.046 18655 18655 W HWUI    : Image decoding logging dropped!
10-25 17:13:43.049 18655 18655 W HWUI    : Image decoding logging dropped!
10-25 17:13:43.051 18655 18655 W HWUI    : Image decoding logging dropped!
10-25 17:13:44.369 18655 18655 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@2be1036
10-25 17:13:47.659 18655 18655 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 17:13:47.663 18655 18655 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 17:13:47.663 18655 18655 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 17:14:01.270 18655 18655 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 17:14:01.270 18655 18655 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 17:14:01.271 18655 18746 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 17:14:01.271 18655 18746 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 17:14:01.272 18655 18746 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 17:14:01.272 18655 18746 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 17:14:01.292 18655 18655 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 17:14:01.292 18655 18655 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 17:14:01.293 18655 18655 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 17:14:01.350 18655 18691 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 17:14:01.350 18655 18746 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 17:14:01.692 18655 18655 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@ca848eb
10-25 17:14:01.758 18655 18655 W unknown:BridgelessReact: ReactHost{0}.raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: Unhandled SoftException
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: com.facebook.react.bridge.ReactNoCrashSoftException: raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException(ReactHostImpl.kt:906)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException$default(ReactHostImpl.kt:897)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.onWindowFocusChange(ReactHostImpl.kt:679)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at com.facebook.react.ReactDelegate.onWindowFocusChanged(ReactDelegate.kt:226)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at com.facebook.react.ReactActivityDelegate.onWindowFocusChanged(ReactActivityDelegate.java:237)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invokeSuspend(ReactActivityDelegateWrapper.kt:322)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:8)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:4)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$launchLifecycleScopeWithLock$1.invokeSuspend(ReactActivityDelegateWrapper.kt:469)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:34)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at kotlinx.coroutines.internal.DispatchedContinuationKt.resumeCancellableWith(DispatchedContinuation.kt:375)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:26)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at kotlinx.coroutines.CoroutineStart.invoke(CoroutineStart.kt:358)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at kotlinx.coroutines.AbstractCoroutine.start(AbstractCoroutine.kt:134)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch(Builders.common.kt:53)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch(Unknown Source:1)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch$default(Builders.common.kt:44)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch$default(Unknown Source:1)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock(ReactActivityDelegateWrapper.kt:467)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock$default(ReactActivityDelegateWrapper.kt:463)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.onWindowFocusChanged(ReactActivityDelegateWrapper.kt:320)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at com.facebook.react.ReactActivity.onWindowFocusChanged(ReactActivity.java:161)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at androidx.appcompat.view.WindowCallbackWrapper.onWindowFocusChanged(WindowCallbackWrapper.java:124)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at expo.modules.devmenu.detectors.InterceptingWindowCallback.onWindowFocusChanged(Unknown Source:2)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at com.android.internal.policy.DecorView.onWindowFocusChanged(DecorView.java:1818)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at android.view.View.dispatchWindowFocusChanged(View.java:16952)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at android.view.ViewGroup.dispatchWindowFocusChanged(ViewGroup.java:1530)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at android.view.ViewRootImpl.dispatchFocusEvent(ViewRootImpl.java:4873)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at android.view.ViewRootImpl.handleWindowFocusChanged(ViewRootImpl.java:4777)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at android.view.ViewRootImpl.-$$Nest$mhandleWindowFocusChanged(Unknown Source:0)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessageImpl(ViewRootImpl.java:7017)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessage(ViewRootImpl.java:6927)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at android.os.Handler.dispatchMessage(Handler.java:110)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at android.os.Looper.loopOnce(Looper.java:248)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at android.os.Looper.loop(Looper.java:338)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at android.app.ActivityThread.main(ActivityThread.java:9067)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at java.lang.reflect.Method.invoke(Native Method)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:593)
10-25 17:14:01.762 18655 18655 E unknown:ReactHost: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:932)
10-25 17:14:02.583 18655 18655 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@c019d4e
10-25 17:14:02.584 18655 18748 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 17:14:02.585 18655 18746 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 17:14:02.592 18655 18746 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 17:14:03.347 18655 18746 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 17:14:03.347 18655 18746 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 17:14:03.357 18655 18655 W unknown:ReactNative: Packager connection already open, nooping.
10-25 17:14:03.357 18655 18746 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 17:14:03.364 18655 18655 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 17:14:03.367 18655 18655 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 17:14:03.804 18655 18765 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 17:14:04.045 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 17:14:04.049 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 17:14:04.051 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 17:14:04.054 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 17:14:04.059 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 17:14:04.060 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 17:14:04.062 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 17:14:04.064 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 17:14:04.068 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 17:14:04.068 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 17:14:04.069 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 17:14:04.072 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 17:14:04.079 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 17:14:04.080 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 17:14:04.081 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 17:14:04.081 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 17:14:04.082 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 17:14:04.082 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 17:14:04.083 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 17:14:04.085 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 17:14:04.086 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 17:14:04.087 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 17:14:04.088 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 17:14:04.089 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 17:14:04.090 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 17:14:04.095 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 17:14:04.350 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 17:14:04.362 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 17:14:04.370 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 17:14:04.375 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 17:14:04.379 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 17:14:04.387 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 17:14:04.396 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 17:14:04.403 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 17:14:04.410 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 17:14:04.413 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 17:14:04.416 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 17:14:04.421 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 17:14:04.424 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 17:14:04.429 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 17:14:04.434 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 17:14:04.439 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 17:14:04.446 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 17:14:04.450 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 17:14:04.452 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 17:14:04.457 18655 18765 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 17:14:04.549 18655 18766 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 17:14:05.372 18655 18677 W okhttp.OkHttpClient: A connection to http://10.5.0.2:8082/ was leaked. Did you forget to close a response body? To see where this was allocated, set the OkHttpClient logger level to FINE: Logger.getLogger(OkHttpClient.class.getName()).setLevel(Level.FINE);
10-25 17:14:06.320 18655 18765 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 17:14:06.652 18655 18765 W HWUI    : Image decoding logging dropped!
10-25 17:14:06.656 18655 18765 W HWUI    : Image decoding logging dropped!
10-25 17:15:41.375 18655 18661 W nslationtest.rn: Cleared Reference was only reachable from finalizer (only reported once)
10-25 17:16:09.050 18655 18655 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@e930e8d
10-25 17:17:12.911 18655 18655 W InteractionJankMonitor: Initializing without READ_DEVICE_CONFIG permission. enabled=false, interval=1, missedFrameThreshold=3, frameTimeThreshold=64, package=dev.translationtest.rn
10-25 17:17:56.580 18655 18655 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@2e9f848
10-25 17:19:43.319 18655 18655 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 17:19:43.319 18655 18655 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 17:19:43.341 18655 18655 W unknown:BridgelessReact: ReactHost{0}.onHostPause(activity)
10-25 17:19:43.347 18655 18655 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostPause()
10-25 17:19:44.668 18655 18655 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@2a69ec8
10-25 17:19:44.704 18655 18655 W unknown:BridgelessReact: ReactHost{0}.stopSurface(surfaceId = 1): Schedule
10-25 17:19:44.704 18655 18655 W unknown:BridgelessReact: ReactHost{0}.detachSurface(surfaceId = 1)
10-25 17:19:44.704 18655 18746 W unknown:BridgelessReact: ReactHost{0}.stopSurface(surfaceId = 1): Execute
10-25 17:19:44.707 18655 18655 W unknown:BridgelessReact: ReactHost{0}.onHostDestroy(activity)
10-25 17:19:44.711 18655 18655 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostDestroy()
10-25 17:19:44.777 18655 18746 E unknown:SurfaceMountingManager: Stopping surface [1]
10-25 17:19:44.965 18655 18655 E unknown:ReactNative: Tried to remove non-existent frame callback
10-25 17:19:44.970 18655 18655 E unknown:SurfaceMountingManager: Surface [1] was stopped on SurfaceMountingManager.

migration/evidence/RN07/b-device2/0185-E-window-start-logcat.stdout.log
10-25 17:19:49.357 20181 20181 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 17:19:49.357 20181 20181 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 17:19:50.180 20181 20181 W SoLoader: Initializing SoLoader: 0
10-25 17:19:50.184 20181 20181 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 17:19:50.184 20181 20181 W SoLoader: Previously recorded 0 base apk paths.
10-25 17:19:50.221 20181 20181 W SoLoader: SoLoader initialized: 8
10-25 17:19:51.411 20181 20213 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 17:19:51.515 20181 20181 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 17:19:51.623 20181 20181 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 17:19:51.623 20181 20181 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 17:19:51.645 20181 20181 W HWUI    : Unknown dataspace 0
10-25 17:19:52.610 20181 20181 W HWUI    : Image decoding logging dropped!
10-25 17:19:52.612 20181 20181 W HWUI    : Image decoding logging dropped!
10-25 17:19:52.614 20181 20181 W HWUI    : Image decoding logging dropped!
10-25 17:19:53.866 20181 20181 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@2be1036
10-25 17:19:56.538 20181 20181 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 17:19:56.542 20181 20181 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 17:19:56.542 20181 20181 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 17:20:27.053 20181 20181 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 17:20:27.053 20181 20181 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 17:20:27.055 20181 20283 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 17:20:27.055 20181 20283 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 17:20:27.055 20181 20283 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 17:20:27.055 20181 20283 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 17:20:27.084 20181 20181 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 17:20:27.084 20181 20181 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 17:20:27.085 20181 20181 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 17:20:27.145 20181 20221 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 17:20:27.146 20181 20283 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 17:20:27.522 20181 20181 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@39c21a9
10-25 17:20:27.591 20181 20285 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 17:20:27.593 20181 20283 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 17:20:27.601 20181 20283 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 17:20:27.672 20181 20181 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@659028b
10-25 17:20:28.492 20181 20283 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 17:20:28.493 20181 20283 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 17:20:28.501 20181 20181 W unknown:ReactNative: Packager connection already open, nooping.
10-25 17:20:28.502 20181 20283 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 17:20:28.507 20181 20181 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 17:20:28.524 20181 20181 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 17:20:28.827 20181 20288 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 17:20:29.027 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 17:20:29.031 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 17:20:29.033 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 17:20:29.035 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 17:20:29.038 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 17:20:29.038 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 17:20:29.040 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 17:20:29.042 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 17:20:29.046 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 17:20:29.047 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 17:20:29.047 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 17:20:29.049 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 17:20:29.051 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 17:20:29.052 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 17:20:29.053 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 17:20:29.054 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 17:20:29.055 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 17:20:29.055 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 17:20:29.056 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 17:20:29.057 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 17:20:29.058 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 17:20:29.059 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 17:20:29.059 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 17:20:29.061 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 17:20:29.062 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 17:20:29.065 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 17:20:29.260 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 17:20:29.265 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 17:20:29.268 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 17:20:29.272 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 17:20:29.275 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 17:20:29.277 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 17:20:29.280 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 17:20:29.285 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 17:20:29.289 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 17:20:29.291 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 17:20:29.293 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 17:20:29.299 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 17:20:29.302 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 17:20:29.307 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 17:20:29.312 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 17:20:29.319 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 17:20:29.326 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 17:20:29.329 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 17:20:29.332 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 17:20:29.337 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 17:20:29.397 20181 20289 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 17:20:30.477 20181 20288 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 17:20:30.673 20181 20288 W HWUI    : Image decoding logging dropped!
10-25 17:20:30.673 20181 20288 W HWUI    : Image decoding logging dropped!

migration/evidence/RN07/b-device2/0446-E-window-end-logcat.stdout.log
10-25 17:19:49.357 20181 20181 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 17:19:49.357 20181 20181 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 17:19:50.180 20181 20181 W SoLoader: Initializing SoLoader: 0
10-25 17:19:50.184 20181 20181 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 17:19:50.184 20181 20181 W SoLoader: Previously recorded 0 base apk paths.
10-25 17:19:50.221 20181 20181 W SoLoader: SoLoader initialized: 8
10-25 17:19:51.411 20181 20213 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 17:19:51.515 20181 20181 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 17:19:51.623 20181 20181 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 17:19:51.623 20181 20181 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 17:19:51.645 20181 20181 W HWUI    : Unknown dataspace 0
10-25 17:19:52.610 20181 20181 W HWUI    : Image decoding logging dropped!
10-25 17:19:52.612 20181 20181 W HWUI    : Image decoding logging dropped!
10-25 17:19:52.614 20181 20181 W HWUI    : Image decoding logging dropped!
10-25 17:19:53.866 20181 20181 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@2be1036
10-25 17:19:56.538 20181 20181 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 17:19:56.542 20181 20181 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 17:19:56.542 20181 20181 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 17:20:27.053 20181 20181 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 17:20:27.053 20181 20181 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 17:20:27.055 20181 20283 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 17:20:27.055 20181 20283 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 17:20:27.055 20181 20283 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 17:20:27.055 20181 20283 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 17:20:27.084 20181 20181 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 17:20:27.084 20181 20181 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 17:20:27.085 20181 20181 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 17:20:27.145 20181 20221 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 17:20:27.146 20181 20283 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 17:20:27.522 20181 20181 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@39c21a9
10-25 17:20:27.591 20181 20285 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 17:20:27.593 20181 20283 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 17:20:27.601 20181 20283 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 17:20:27.672 20181 20181 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@659028b
10-25 17:20:28.492 20181 20283 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 17:20:28.493 20181 20283 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 17:20:28.501 20181 20181 W unknown:ReactNative: Packager connection already open, nooping.
10-25 17:20:28.502 20181 20283 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 17:20:28.507 20181 20181 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 17:20:28.524 20181 20181 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 17:20:28.827 20181 20288 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 17:20:29.027 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 17:20:29.031 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 17:20:29.033 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 17:20:29.035 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 17:20:29.038 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 17:20:29.038 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 17:20:29.040 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 17:20:29.042 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 17:20:29.046 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 17:20:29.047 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 17:20:29.047 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 17:20:29.049 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 17:20:29.051 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 17:20:29.052 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 17:20:29.053 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 17:20:29.054 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 17:20:29.055 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 17:20:29.055 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 17:20:29.056 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 17:20:29.057 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 17:20:29.058 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 17:20:29.059 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 17:20:29.059 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 17:20:29.061 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 17:20:29.062 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 17:20:29.065 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 17:20:29.260 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 17:20:29.265 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 17:20:29.268 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 17:20:29.272 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 17:20:29.275 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 17:20:29.277 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 17:20:29.280 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 17:20:29.285 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 17:20:29.289 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 17:20:29.291 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 17:20:29.293 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 17:20:29.299 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 17:20:29.302 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 17:20:29.307 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 17:20:29.312 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 17:20:29.319 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 17:20:29.326 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 17:20:29.329 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 17:20:29.332 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 17:20:29.337 20181 20288 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 17:20:29.397 20181 20289 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 17:20:30.477 20181 20288 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 17:20:30.673 20181 20288 W HWUI    : Image decoding logging dropped!
10-25 17:20:30.673 20181 20288 W HWUI    : Image decoding logging dropped!
10-25 17:21:54.543 20181 20181 W InteractionJankMonitor: Initializing without READ_DEVICE_CONFIG permission. enabled=false, interval=1, missedFrameThreshold=3, frameTimeThreshold=64, package=dev.translationtest.rn
10-25 17:22:10.055 20181 20181 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@be0f65f
10-25 17:22:10.174 20181 20186 W nslationtest.rn: Cleared Reference was only reachable from finalizer (only reported once)
10-25 17:23:25.092 20181 20181 W HWUI    : Image decoding logging dropped!
10-25 17:23:25.093 20181 20181 W HWUI    : Image decoding logging dropped!
10-25 17:23:25.095 20181 20181 W HWUI    : Image decoding logging dropped!
10-25 17:23:25.119 20181 20181 W RemoteInputConnectionImpl: requestCursorUpdates on inactive InputConnection
10-25 17:23:29.100 20181 20181 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@f138f35
10-25 17:23:41.211 20181 20181 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@be0f65f

migration/evidence/RN07/b-device2/0459-F-window-start-logcat.stdout.log
10-25 17:29:42.015 23023 23023 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 17:29:42.015 23023 23023 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 17:29:42.760 23023 23023 W SoLoader: Initializing SoLoader: 0
10-25 17:29:42.762 23023 23023 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 17:29:42.762 23023 23023 W SoLoader: Previously recorded 0 base apk paths.
10-25 17:29:42.794 23023 23023 W SoLoader: SoLoader initialized: 8
10-25 17:29:43.849 23023 23049 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 17:29:43.906 23023 23023 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 17:29:44.076 23023 23023 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 17:29:44.076 23023 23023 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 17:29:44.117 23023 23023 W HWUI    : Unknown dataspace 0
10-25 17:29:45.303 23023 23023 W HWUI    : Image decoding logging dropped!
10-25 17:29:45.306 23023 23023 W HWUI    : Image decoding logging dropped!
10-25 17:29:45.308 23023 23023 W HWUI    : Image decoding logging dropped!
10-25 17:29:46.559 23023 23023 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@100e76a
10-25 17:29:49.129 23023 23023 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 17:29:49.133 23023 23023 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 17:29:49.133 23023 23023 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 17:30:06.556 23023 23023 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 17:30:06.556 23023 23023 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 17:30:06.557 23023 23115 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 17:30:06.557 23023 23115 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 17:30:06.558 23023 23115 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 17:30:06.559 23023 23115 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 17:30:06.584 23023 23023 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 17:30:06.584 23023 23023 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 17:30:06.585 23023 23023 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 17:30:06.600 23023 23057 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 17:30:06.600 23023 23115 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 17:30:07.013 23023 23023 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@a178ecf
10-25 17:30:07.074 23023 23023 W unknown:BridgelessReact: ReactHost{0}.raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: Unhandled SoftException
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: com.facebook.react.bridge.ReactNoCrashSoftException: raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException(ReactHostImpl.kt:906)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException$default(ReactHostImpl.kt:897)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.onWindowFocusChange(ReactHostImpl.kt:679)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at com.facebook.react.ReactDelegate.onWindowFocusChanged(ReactDelegate.kt:226)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at com.facebook.react.ReactActivityDelegate.onWindowFocusChanged(ReactActivityDelegate.java:237)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invokeSuspend(ReactActivityDelegateWrapper.kt:322)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:8)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:4)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$launchLifecycleScopeWithLock$1.invokeSuspend(ReactActivityDelegateWrapper.kt:469)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:34)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at kotlinx.coroutines.internal.DispatchedContinuationKt.resumeCancellableWith(DispatchedContinuation.kt:375)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:26)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at kotlinx.coroutines.CoroutineStart.invoke(CoroutineStart.kt:358)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at kotlinx.coroutines.AbstractCoroutine.start(AbstractCoroutine.kt:134)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch(Builders.common.kt:53)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch(Unknown Source:1)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch$default(Builders.common.kt:44)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch$default(Unknown Source:1)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock(ReactActivityDelegateWrapper.kt:467)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock$default(ReactActivityDelegateWrapper.kt:463)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.onWindowFocusChanged(ReactActivityDelegateWrapper.kt:320)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at com.facebook.react.ReactActivity.onWindowFocusChanged(ReactActivity.java:161)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at androidx.appcompat.view.WindowCallbackWrapper.onWindowFocusChanged(WindowCallbackWrapper.java:124)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at expo.modules.devmenu.detectors.InterceptingWindowCallback.onWindowFocusChanged(Unknown Source:2)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at com.android.internal.policy.DecorView.onWindowFocusChanged(DecorView.java:1818)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at android.view.View.dispatchWindowFocusChanged(View.java:16952)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at android.view.ViewGroup.dispatchWindowFocusChanged(ViewGroup.java:1530)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at android.view.ViewRootImpl.dispatchFocusEvent(ViewRootImpl.java:4873)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at android.view.ViewRootImpl.handleWindowFocusChanged(ViewRootImpl.java:4777)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at android.view.ViewRootImpl.-$$Nest$mhandleWindowFocusChanged(Unknown Source:0)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessageImpl(ViewRootImpl.java:7017)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessage(ViewRootImpl.java:6927)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at android.os.Handler.dispatchMessage(Handler.java:110)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at android.os.Looper.loopOnce(Looper.java:248)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at android.os.Looper.loop(Looper.java:338)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at android.app.ActivityThread.main(ActivityThread.java:9067)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at java.lang.reflect.Method.invoke(Native Method)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:593)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:932)
10-25 17:30:07.088 23023 23117 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 17:30:07.092 23023 23115 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 17:30:07.099 23023 23023 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@2c3a805
10-25 17:30:07.106 23023 23115 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 17:30:07.862 23023 23115 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 17:30:07.862 23023 23115 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 17:30:07.868 23023 23023 W unknown:ReactNative: Packager connection already open, nooping.
10-25 17:30:07.868 23023 23023 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 17:30:07.870 23023 23115 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 17:30:07.875 23023 23023 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 17:30:08.149 23023 23120 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 17:30:08.327 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 17:30:08.330 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 17:30:08.331 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 17:30:08.333 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 17:30:08.336 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 17:30:08.337 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 17:30:08.338 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 17:30:08.340 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 17:30:08.345 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 17:30:08.345 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 17:30:08.346 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 17:30:08.349 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 17:30:08.354 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 17:30:08.355 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 17:30:08.356 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 17:30:08.356 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 17:30:08.357 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 17:30:08.357 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 17:30:08.358 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 17:30:08.361 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 17:30:08.361 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 17:30:08.362 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 17:30:08.363 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 17:30:08.365 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 17:30:08.365 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 17:30:08.367 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 17:30:08.538 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 17:30:08.546 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 17:30:08.550 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 17:30:08.554 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 17:30:08.557 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 17:30:08.559 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 17:30:08.562 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 17:30:08.566 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 17:30:08.570 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 17:30:08.572 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 17:30:08.574 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 17:30:08.578 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 17:30:08.580 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 17:30:08.583 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 17:30:08.586 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 17:30:08.589 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 17:30:08.594 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 17:30:08.597 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 17:30:08.599 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 17:30:08.602 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 17:30:08.657 23023 23121 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 17:30:09.533 23023 23120 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 17:30:09.787 23023 23120 W HWUI    : Image decoding logging dropped!
10-25 17:30:09.788 23023 23120 W HWUI    : Image decoding logging dropped!

migration/evidence/RN07/b-device2/0803-F-window-end-logcat.stdout.log
10-25 17:29:42.015 23023 23023 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 17:29:42.015 23023 23023 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 17:29:42.760 23023 23023 W SoLoader: Initializing SoLoader: 0
10-25 17:29:42.762 23023 23023 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 17:29:42.762 23023 23023 W SoLoader: Previously recorded 0 base apk paths.
10-25 17:29:42.794 23023 23023 W SoLoader: SoLoader initialized: 8
10-25 17:29:43.849 23023 23049 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 17:29:43.906 23023 23023 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 17:29:44.076 23023 23023 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 17:29:44.076 23023 23023 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 17:29:44.117 23023 23023 W HWUI    : Unknown dataspace 0
10-25 17:29:45.303 23023 23023 W HWUI    : Image decoding logging dropped!
10-25 17:29:45.306 23023 23023 W HWUI    : Image decoding logging dropped!
10-25 17:29:45.308 23023 23023 W HWUI    : Image decoding logging dropped!
10-25 17:29:46.559 23023 23023 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@100e76a
10-25 17:29:49.129 23023 23023 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 17:29:49.133 23023 23023 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 17:29:49.133 23023 23023 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 17:30:06.556 23023 23023 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 17:30:06.556 23023 23023 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 17:30:06.557 23023 23115 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 17:30:06.557 23023 23115 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 17:30:06.558 23023 23115 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 17:30:06.559 23023 23115 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 17:30:06.584 23023 23023 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 17:30:06.584 23023 23023 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 17:30:06.585 23023 23023 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 17:30:06.600 23023 23057 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 17:30:06.600 23023 23115 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 17:30:07.013 23023 23023 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@a178ecf
10-25 17:30:07.074 23023 23023 W unknown:BridgelessReact: ReactHost{0}.raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: Unhandled SoftException
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: com.facebook.react.bridge.ReactNoCrashSoftException: raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException(ReactHostImpl.kt:906)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException$default(ReactHostImpl.kt:897)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.onWindowFocusChange(ReactHostImpl.kt:679)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at com.facebook.react.ReactDelegate.onWindowFocusChanged(ReactDelegate.kt:226)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at com.facebook.react.ReactActivityDelegate.onWindowFocusChanged(ReactActivityDelegate.java:237)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invokeSuspend(ReactActivityDelegateWrapper.kt:322)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:8)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:4)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$launchLifecycleScopeWithLock$1.invokeSuspend(ReactActivityDelegateWrapper.kt:469)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:34)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at kotlinx.coroutines.internal.DispatchedContinuationKt.resumeCancellableWith(DispatchedContinuation.kt:375)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:26)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at kotlinx.coroutines.CoroutineStart.invoke(CoroutineStart.kt:358)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at kotlinx.coroutines.AbstractCoroutine.start(AbstractCoroutine.kt:134)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch(Builders.common.kt:53)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch(Unknown Source:1)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch$default(Builders.common.kt:44)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch$default(Unknown Source:1)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock(ReactActivityDelegateWrapper.kt:467)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock$default(ReactActivityDelegateWrapper.kt:463)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.onWindowFocusChanged(ReactActivityDelegateWrapper.kt:320)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at com.facebook.react.ReactActivity.onWindowFocusChanged(ReactActivity.java:161)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at androidx.appcompat.view.WindowCallbackWrapper.onWindowFocusChanged(WindowCallbackWrapper.java:124)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at expo.modules.devmenu.detectors.InterceptingWindowCallback.onWindowFocusChanged(Unknown Source:2)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at com.android.internal.policy.DecorView.onWindowFocusChanged(DecorView.java:1818)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at android.view.View.dispatchWindowFocusChanged(View.java:16952)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at android.view.ViewGroup.dispatchWindowFocusChanged(ViewGroup.java:1530)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at android.view.ViewRootImpl.dispatchFocusEvent(ViewRootImpl.java:4873)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at android.view.ViewRootImpl.handleWindowFocusChanged(ViewRootImpl.java:4777)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at android.view.ViewRootImpl.-$$Nest$mhandleWindowFocusChanged(Unknown Source:0)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessageImpl(ViewRootImpl.java:7017)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessage(ViewRootImpl.java:6927)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at android.os.Handler.dispatchMessage(Handler.java:110)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at android.os.Looper.loopOnce(Looper.java:248)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at android.os.Looper.loop(Looper.java:338)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at android.app.ActivityThread.main(ActivityThread.java:9067)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at java.lang.reflect.Method.invoke(Native Method)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:593)
10-25 17:30:07.087 23023 23023 E unknown:ReactHost: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:932)
10-25 17:30:07.088 23023 23117 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 17:30:07.092 23023 23115 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 17:30:07.099 23023 23023 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@2c3a805
10-25 17:30:07.106 23023 23115 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 17:30:07.862 23023 23115 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 17:30:07.862 23023 23115 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 17:30:07.868 23023 23023 W unknown:ReactNative: Packager connection already open, nooping.
10-25 17:30:07.868 23023 23023 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 17:30:07.870 23023 23115 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 17:30:07.875 23023 23023 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 17:30:08.149 23023 23120 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 17:30:08.327 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 17:30:08.330 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 17:30:08.331 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 17:30:08.333 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 17:30:08.336 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 17:30:08.337 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 17:30:08.338 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 17:30:08.340 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 17:30:08.345 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 17:30:08.345 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 17:30:08.346 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 17:30:08.349 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 17:30:08.354 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 17:30:08.355 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 17:30:08.356 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 17:30:08.356 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 17:30:08.357 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 17:30:08.357 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 17:30:08.358 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 17:30:08.361 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 17:30:08.361 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 17:30:08.362 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 17:30:08.363 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 17:30:08.365 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 17:30:08.365 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 17:30:08.367 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 17:30:08.538 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 17:30:08.546 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 17:30:08.550 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 17:30:08.554 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 17:30:08.557 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 17:30:08.559 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 17:30:08.562 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 17:30:08.566 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 17:30:08.570 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 17:30:08.572 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 17:30:08.574 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 17:30:08.578 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 17:30:08.580 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 17:30:08.583 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 17:30:08.586 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 17:30:08.589 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 17:30:08.594 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 17:30:08.597 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 17:30:08.599 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 17:30:08.602 23023 23120 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 17:30:08.657 23023 23121 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 17:30:09.533 23023 23120 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 17:30:09.787 23023 23120 W HWUI    : Image decoding logging dropped!
10-25 17:30:09.788 23023 23120 W HWUI    : Image decoding logging dropped!
10-25 17:31:20.827 23023 23028 W nslationtest.rn: Cleared Reference was only reachable from finalizer (only reported once)
10-25 17:31:31.155 23023 23023 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@d80f366
10-25 17:32:10.644 23023 23023 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@9656232
10-25 17:32:56.261 23023 23023 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@2421ff6
10-25 17:33:35.546 23023 23023 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@9a680f6
10-25 17:34:06.978 23023 23023 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@750dec1
10-25 17:34:37.145 23023 23023 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@1e3b481
10-25 17:35:57.095 23023 23023 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@f58869
10-25 17:36:13.094 23023 23023 W unknown:ReactNative: Can't cancel already finished gesture. Is a child View trying to start a gesture from an UP/CANCEL event?
10-25 17:38:13.463 23023 23023 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@7f864d6
10-25 17:39:57.461 23023 23023 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@f97e068
10-25 17:40:12.945 23023 23023 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@3d83528
10-25 17:40:36.261 23023 23023 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@3a6d55e
10-25 17:40:59.444 23023 23023 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@779102a
10-25 17:41:30.661 23023 23023 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@83dd14b
10-25 17:42:01.811 23023 23023 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@ba5288
10-25 17:42:25.095 23023 23023 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@eef109a
10-25 17:42:40.564 23023 23023 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@1f3e75a
