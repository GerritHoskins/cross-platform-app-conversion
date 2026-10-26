Bounded logcat warning/error records; not continuous coverage.

migration/evidence/RN07/g-settings1b/0051-G01-window-entry-logcat.stdout.log
10-25 18:18:06.969 26907 26907 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 18:18:06.969 26907 26907 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 18:18:07.902 26907 26907 W SoLoader: Initializing SoLoader: 0
10-25 18:18:07.913 26907 26907 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 18:18:07.913 26907 26907 W SoLoader: Previously recorded 0 base apk paths.
10-25 18:18:07.947 26907 26907 W SoLoader: SoLoader initialized: 8
10-25 18:18:09.454 26907 26941 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 18:18:09.503 26907 26907 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 18:18:09.746 26907 26907 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:18:09.746 26907 26907 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:18:09.815 26907 26907 W HWUI    : Unknown dataspace 0
10-25 18:18:11.002 26907 26907 W HWUI    : Image decoding logging dropped!
10-25 18:18:11.004 26907 26907 W HWUI    : Image decoding logging dropped!
10-25 18:18:11.006 26907 26907 W HWUI    : Image decoding logging dropped!
10-25 18:18:12.427 26907 26907 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@9e1045b
10-25 18:19:05.004 26907 26907 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:19:05.008 26907 26907 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:19:05.008 26907 26907 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:19:38.658 26907 26907 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 18:19:38.658 26907 26907 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 18:19:38.659 26907 27021 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 18:19:38.659 26907 27021 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 18:19:38.659 26907 27021 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 18:19:38.659 26907 27021 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 18:19:38.684 26907 26907 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:19:38.684 26907 26907 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:19:38.686 26907 26907 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 18:19:38.719 26907 26915 W nslationtest.rn: Suspending all threads took: 8.812ms
10-25 18:19:38.731 26907 26959 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 18:19:38.736 26907 27021 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 18:19:39.115 26907 26907 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@7d91ae2
10-25 18:19:39.195 26907 26907 W unknown:BridgelessReact: ReactHost{0}.raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: Unhandled SoftException
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: com.facebook.react.bridge.ReactNoCrashSoftException: raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException(ReactHostImpl.kt:906)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException$default(ReactHostImpl.kt:897)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.onWindowFocusChange(ReactHostImpl.kt:679)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at com.facebook.react.ReactDelegate.onWindowFocusChanged(ReactDelegate.kt:226)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at com.facebook.react.ReactActivityDelegate.onWindowFocusChanged(ReactActivityDelegate.java:237)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invokeSuspend(ReactActivityDelegateWrapper.kt:322)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:8)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:4)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$launchLifecycleScopeWithLock$1.invokeSuspend(ReactActivityDelegateWrapper.kt:469)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:34)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at kotlinx.coroutines.internal.DispatchedContinuationKt.resumeCancellableWith(DispatchedContinuation.kt:375)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:26)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at kotlinx.coroutines.CoroutineStart.invoke(CoroutineStart.kt:358)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at kotlinx.coroutines.AbstractCoroutine.start(AbstractCoroutine.kt:134)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch(Builders.common.kt:53)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch(Unknown Source:1)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch$default(Builders.common.kt:44)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch$default(Unknown Source:1)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock(ReactActivityDelegateWrapper.kt:467)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock$default(ReactActivityDelegateWrapper.kt:463)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.onWindowFocusChanged(ReactActivityDelegateWrapper.kt:320)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at com.facebook.react.ReactActivity.onWindowFocusChanged(ReactActivity.java:161)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at androidx.appcompat.view.WindowCallbackWrapper.onWindowFocusChanged(WindowCallbackWrapper.java:124)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at expo.modules.devmenu.detectors.InterceptingWindowCallback.onWindowFocusChanged(Unknown Source:2)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at com.android.internal.policy.DecorView.onWindowFocusChanged(DecorView.java:1818)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at android.view.View.dispatchWindowFocusChanged(View.java:16952)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at android.view.ViewGroup.dispatchWindowFocusChanged(ViewGroup.java:1530)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at android.view.ViewRootImpl.dispatchFocusEvent(ViewRootImpl.java:4873)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at android.view.ViewRootImpl.handleWindowFocusChanged(ViewRootImpl.java:4777)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at android.view.ViewRootImpl.-$$Nest$mhandleWindowFocusChanged(Unknown Source:0)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessageImpl(ViewRootImpl.java:7017)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessage(ViewRootImpl.java:6927)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at android.os.Handler.dispatchMessage(Handler.java:110)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at android.os.Looper.loopOnce(Looper.java:248)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at android.os.Looper.loop(Looper.java:338)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at android.app.ActivityThread.main(ActivityThread.java:9067)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at java.lang.reflect.Method.invoke(Native Method)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:593)
10-25 18:19:39.197 26907 26907 E unknown:ReactHost: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:932)
10-25 18:19:39.939 26907 26907 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@f3a47b
10-25 18:19:39.939 26907 27023 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 18:19:39.941 26907 27021 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 18:19:39.952 26907 27021 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 18:19:40.558 26907 27021 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 18:19:40.558 26907 27021 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 18:19:40.563 26907 26907 W unknown:ReactNative: Packager connection already open, nooping.
10-25 18:19:40.563 26907 27021 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 18:19:40.569 26907 26907 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 18:19:40.573 26907 26907 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 18:19:40.866 26907 27040 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 18:19:41.067 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 18:19:41.070 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 18:19:41.071 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 18:19:41.073 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 18:19:41.077 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 18:19:41.078 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 18:19:41.080 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 18:19:41.084 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 18:19:41.087 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 18:19:41.088 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 18:19:41.090 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 18:19:41.092 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 18:19:41.095 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 18:19:41.095 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 18:19:41.096 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 18:19:41.097 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 18:19:41.098 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 18:19:41.098 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 18:19:41.099 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 18:19:41.100 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 18:19:41.101 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 18:19:41.102 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 18:19:41.103 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 18:19:41.103 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 18:19:41.104 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 18:19:41.109 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 18:19:41.332 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 18:19:41.337 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 18:19:41.340 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 18:19:41.344 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 18:19:41.346 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 18:19:41.348 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 18:19:41.352 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 18:19:41.355 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 18:19:41.359 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 18:19:41.361 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 18:19:41.363 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 18:19:41.367 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 18:19:41.370 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 18:19:41.373 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 18:19:41.376 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 18:19:41.379 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 18:19:41.385 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 18:19:41.388 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 18:19:41.390 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 18:19:41.392 26907 27040 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 18:19:41.472 26907 27041 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 18:19:42.524 26907 27040 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 18:19:42.764 26907 27040 W HWUI    : Image decoding logging dropped!
10-25 18:19:42.765 26907 27040 W HWUI    : Image decoding logging dropped!

migration/evidence/RN07/g-settings1b/0087-G02-window-entry-logcat.stdout.log
10-25 18:21:43.832 27490 27490 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 18:21:43.832 27490 27490 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 18:21:44.602 27490 27490 W SoLoader: Initializing SoLoader: 0
10-25 18:21:44.606 27490 27490 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 18:21:44.606 27490 27490 W SoLoader: Previously recorded 0 base apk paths.
10-25 18:21:44.646 27490 27490 W SoLoader: SoLoader initialized: 8
10-25 18:21:45.785 27490 27533 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 18:21:45.835 27490 27490 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 18:21:45.937 27490 27490 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:21:45.937 27490 27490 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:21:45.979 27490 27490 W HWUI    : Unknown dataspace 0
10-25 18:21:47.003 27490 27490 W HWUI    : Image decoding logging dropped!
10-25 18:21:47.006 27490 27490 W HWUI    : Image decoding logging dropped!
10-25 18:21:47.008 27490 27490 W HWUI    : Image decoding logging dropped!
10-25 18:21:48.300 27490 27490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@3a18b37
10-25 18:22:58.578 27490 27490 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:22:58.584 27490 27490 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:22:58.584 27490 27490 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:23:02.543 27490 27490 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 18:23:02.543 27490 27490 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 18:23:02.546 27490 27589 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 18:23:02.546 27490 27589 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 18:23:02.546 27490 27589 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 18:23:02.546 27490 27589 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 18:23:02.578 27490 27490 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:23:02.578 27490 27490 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:23:02.582 27490 27490 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 18:23:02.625 27490 27539 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 18:23:02.626 27490 27589 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 18:23:03.034 27490 27490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@b755ce1
10-25 18:23:03.125 27490 27490 W unknown:BridgelessReact: ReactHost{0}.raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: Unhandled SoftException
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: com.facebook.react.bridge.ReactNoCrashSoftException: raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException(ReactHostImpl.kt:906)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException$default(ReactHostImpl.kt:897)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.onWindowFocusChange(ReactHostImpl.kt:679)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at com.facebook.react.ReactDelegate.onWindowFocusChanged(ReactDelegate.kt:226)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at com.facebook.react.ReactActivityDelegate.onWindowFocusChanged(ReactActivityDelegate.java:237)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invokeSuspend(ReactActivityDelegateWrapper.kt:322)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:8)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:4)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$launchLifecycleScopeWithLock$1.invokeSuspend(ReactActivityDelegateWrapper.kt:469)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:34)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at kotlinx.coroutines.internal.DispatchedContinuationKt.resumeCancellableWith(DispatchedContinuation.kt:375)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:26)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at kotlinx.coroutines.CoroutineStart.invoke(CoroutineStart.kt:358)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at kotlinx.coroutines.AbstractCoroutine.start(AbstractCoroutine.kt:134)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch(Builders.common.kt:53)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch(Unknown Source:1)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch$default(Builders.common.kt:44)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch$default(Unknown Source:1)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock(ReactActivityDelegateWrapper.kt:467)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock$default(ReactActivityDelegateWrapper.kt:463)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.onWindowFocusChanged(ReactActivityDelegateWrapper.kt:320)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at com.facebook.react.ReactActivity.onWindowFocusChanged(ReactActivity.java:161)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at androidx.appcompat.view.WindowCallbackWrapper.onWindowFocusChanged(WindowCallbackWrapper.java:124)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at expo.modules.devmenu.detectors.InterceptingWindowCallback.onWindowFocusChanged(Unknown Source:2)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at com.android.internal.policy.DecorView.onWindowFocusChanged(DecorView.java:1818)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at android.view.View.dispatchWindowFocusChanged(View.java:16952)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at android.view.ViewGroup.dispatchWindowFocusChanged(ViewGroup.java:1530)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at android.view.ViewRootImpl.dispatchFocusEvent(ViewRootImpl.java:4873)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at android.view.ViewRootImpl.handleWindowFocusChanged(ViewRootImpl.java:4777)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at android.view.ViewRootImpl.-$$Nest$mhandleWindowFocusChanged(Unknown Source:0)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessageImpl(ViewRootImpl.java:7017)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessage(ViewRootImpl.java:6927)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at android.os.Handler.dispatchMessage(Handler.java:110)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at android.os.Looper.loopOnce(Looper.java:248)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at android.os.Looper.loop(Looper.java:338)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at android.app.ActivityThread.main(ActivityThread.java:9067)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at java.lang.reflect.Method.invoke(Native Method)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:593)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:932)
10-25 18:23:03.288 27490 27591 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 18:23:03.290 27490 27589 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 18:23:03.291 27490 27490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@f3a47b
10-25 18:23:03.306 27490 27589 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 18:23:04.136 27490 27589 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 18:23:04.137 27490 27589 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 18:23:04.149 27490 27589 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 18:23:04.152 27490 27490 W unknown:ReactNative: Packager connection already open, nooping.
10-25 18:23:04.152 27490 27490 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 18:23:04.169 27490 27490 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 18:23:04.466 27490 27597 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 18:23:04.661 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 18:23:04.666 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 18:23:04.668 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 18:23:04.669 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 18:23:04.686 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 18:23:04.687 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 18:23:04.689 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 18:23:04.691 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 18:23:04.699 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 18:23:04.700 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 18:23:04.702 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 18:23:04.703 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 18:23:04.707 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 18:23:04.708 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 18:23:04.709 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 18:23:04.710 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 18:23:04.711 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 18:23:04.711 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 18:23:04.712 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 18:23:04.715 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 18:23:04.716 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 18:23:04.718 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 18:23:04.721 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 18:23:04.722 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 18:23:04.724 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 18:23:04.726 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 18:23:04.907 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 18:23:04.913 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 18:23:04.916 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 18:23:04.918 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 18:23:04.921 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 18:23:04.924 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 18:23:04.928 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 18:23:04.932 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 18:23:04.935 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 18:23:04.938 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 18:23:04.940 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 18:23:04.944 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 18:23:04.947 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 18:23:04.951 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 18:23:04.955 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 18:23:04.962 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 18:23:04.973 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 18:23:04.978 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 18:23:04.980 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 18:23:04.983 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 18:23:05.042 27490 27598 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 18:23:05.963 27490 27597 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 18:23:06.146 27490 27597 W HWUI    : Image decoding logging dropped!
10-25 18:23:06.146 27490 27597 W HWUI    : Image decoding logging dropped!

migration/evidence/RN07/g-settings1b/0158-G02-window-end-logcat.stdout.log
10-25 18:21:43.832 27490 27490 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 18:21:43.832 27490 27490 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 18:21:44.602 27490 27490 W SoLoader: Initializing SoLoader: 0
10-25 18:21:44.606 27490 27490 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 18:21:44.606 27490 27490 W SoLoader: Previously recorded 0 base apk paths.
10-25 18:21:44.646 27490 27490 W SoLoader: SoLoader initialized: 8
10-25 18:21:45.785 27490 27533 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 18:21:45.835 27490 27490 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 18:21:45.937 27490 27490 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:21:45.937 27490 27490 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:21:45.979 27490 27490 W HWUI    : Unknown dataspace 0
10-25 18:21:47.003 27490 27490 W HWUI    : Image decoding logging dropped!
10-25 18:21:47.006 27490 27490 W HWUI    : Image decoding logging dropped!
10-25 18:21:47.008 27490 27490 W HWUI    : Image decoding logging dropped!
10-25 18:21:48.300 27490 27490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@3a18b37
10-25 18:22:58.578 27490 27490 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:22:58.584 27490 27490 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:22:58.584 27490 27490 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:23:02.543 27490 27490 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 18:23:02.543 27490 27490 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 18:23:02.546 27490 27589 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 18:23:02.546 27490 27589 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 18:23:02.546 27490 27589 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 18:23:02.546 27490 27589 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 18:23:02.578 27490 27490 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:23:02.578 27490 27490 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:23:02.582 27490 27490 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 18:23:02.625 27490 27539 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 18:23:02.626 27490 27589 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 18:23:03.034 27490 27490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@b755ce1
10-25 18:23:03.125 27490 27490 W unknown:BridgelessReact: ReactHost{0}.raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: Unhandled SoftException
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: com.facebook.react.bridge.ReactNoCrashSoftException: raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException(ReactHostImpl.kt:906)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException$default(ReactHostImpl.kt:897)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.onWindowFocusChange(ReactHostImpl.kt:679)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at com.facebook.react.ReactDelegate.onWindowFocusChanged(ReactDelegate.kt:226)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at com.facebook.react.ReactActivityDelegate.onWindowFocusChanged(ReactActivityDelegate.java:237)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invokeSuspend(ReactActivityDelegateWrapper.kt:322)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:8)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:4)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$launchLifecycleScopeWithLock$1.invokeSuspend(ReactActivityDelegateWrapper.kt:469)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:34)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at kotlinx.coroutines.internal.DispatchedContinuationKt.resumeCancellableWith(DispatchedContinuation.kt:375)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:26)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at kotlinx.coroutines.CoroutineStart.invoke(CoroutineStart.kt:358)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at kotlinx.coroutines.AbstractCoroutine.start(AbstractCoroutine.kt:134)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch(Builders.common.kt:53)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch(Unknown Source:1)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch$default(Builders.common.kt:44)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch$default(Unknown Source:1)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock(ReactActivityDelegateWrapper.kt:467)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock$default(ReactActivityDelegateWrapper.kt:463)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.onWindowFocusChanged(ReactActivityDelegateWrapper.kt:320)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at com.facebook.react.ReactActivity.onWindowFocusChanged(ReactActivity.java:161)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at androidx.appcompat.view.WindowCallbackWrapper.onWindowFocusChanged(WindowCallbackWrapper.java:124)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at expo.modules.devmenu.detectors.InterceptingWindowCallback.onWindowFocusChanged(Unknown Source:2)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at com.android.internal.policy.DecorView.onWindowFocusChanged(DecorView.java:1818)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at android.view.View.dispatchWindowFocusChanged(View.java:16952)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at android.view.ViewGroup.dispatchWindowFocusChanged(ViewGroup.java:1530)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at android.view.ViewRootImpl.dispatchFocusEvent(ViewRootImpl.java:4873)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at android.view.ViewRootImpl.handleWindowFocusChanged(ViewRootImpl.java:4777)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at android.view.ViewRootImpl.-$$Nest$mhandleWindowFocusChanged(Unknown Source:0)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessageImpl(ViewRootImpl.java:7017)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessage(ViewRootImpl.java:6927)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at android.os.Handler.dispatchMessage(Handler.java:110)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at android.os.Looper.loopOnce(Looper.java:248)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at android.os.Looper.loop(Looper.java:338)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at android.app.ActivityThread.main(ActivityThread.java:9067)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at java.lang.reflect.Method.invoke(Native Method)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:593)
10-25 18:23:03.128 27490 27490 E unknown:ReactHost: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:932)
10-25 18:23:03.288 27490 27591 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 18:23:03.290 27490 27589 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 18:23:03.291 27490 27490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@f3a47b
10-25 18:23:03.306 27490 27589 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 18:23:04.136 27490 27589 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 18:23:04.137 27490 27589 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 18:23:04.149 27490 27589 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 18:23:04.152 27490 27490 W unknown:ReactNative: Packager connection already open, nooping.
10-25 18:23:04.152 27490 27490 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 18:23:04.169 27490 27490 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 18:23:04.466 27490 27597 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 18:23:04.661 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 18:23:04.666 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 18:23:04.668 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 18:23:04.669 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 18:23:04.686 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 18:23:04.687 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 18:23:04.689 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 18:23:04.691 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 18:23:04.699 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 18:23:04.700 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 18:23:04.702 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 18:23:04.703 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 18:23:04.707 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 18:23:04.708 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 18:23:04.709 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 18:23:04.710 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 18:23:04.711 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 18:23:04.711 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 18:23:04.712 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 18:23:04.715 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 18:23:04.716 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 18:23:04.718 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 18:23:04.721 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 18:23:04.722 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 18:23:04.724 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 18:23:04.726 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 18:23:04.907 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 18:23:04.913 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 18:23:04.916 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 18:23:04.918 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 18:23:04.921 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 18:23:04.924 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 18:23:04.928 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 18:23:04.932 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 18:23:04.935 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 18:23:04.938 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 18:23:04.940 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 18:23:04.944 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 18:23:04.947 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 18:23:04.951 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 18:23:04.955 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 18:23:04.962 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 18:23:04.973 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 18:23:04.978 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 18:23:04.980 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 18:23:04.983 27490 27597 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 18:23:05.042 27490 27598 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 18:23:05.963 27490 27597 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 18:23:06.146 27490 27597 W HWUI    : Image decoding logging dropped!
10-25 18:23:06.146 27490 27597 W HWUI    : Image decoding logging dropped!
10-25 18:23:46.010 27490 27490 W InteractionJankMonitor: Initializing without READ_DEVICE_CONFIG permission. enabled=false, interval=1, missedFrameThreshold=3, frameTimeThreshold=64, package=dev.translationtest.rn
10-25 18:23:53.456 27490 27490 W HWUI    : Image decoding logging dropped!
10-25 18:23:53.457 27490 27490 W HWUI    : Image decoding logging dropped!
10-25 18:23:53.457 27490 27490 W HWUI    : Image decoding logging dropped!
10-25 18:23:57.462 27490 27490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@e7fcec5
10-25 18:24:02.113 27490 27490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@2c8997b
10-25 18:24:14.361 27490 27490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@87d3e6e
10-25 18:24:16.221 27490 27495 W nslationtest.rn: Cleared Reference was only reachable from finalizer (only reported once)
10-25 18:24:39.446 27490 27490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@e990171
10-25 18:24:44.669 27490 27490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@2c8997b
10-25 18:24:44.930 27490 27490 E ImeBackDispatcher: Ime callback not found. Ignoring unregisterReceivedCallback. callbackId: 231330245
10-25 18:24:59.899 27490 27490 W RemoteInputConnectionImpl: requestCursorUpdates on inactive InputConnection
10-25 18:25:03.881 27490 27490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@1b3675d
10-25 18:25:08.212 27490 27490 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@2c8997b

migration/evidence/RN07/g-settings1b/0188-G05.default-window-entry-logcat.stdout.log
10-25 18:26:24.180 28362 28362 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 18:26:24.180 28362 28362 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 18:26:24.938 28362 28362 W SoLoader: Initializing SoLoader: 0
10-25 18:26:24.940 28362 28362 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 18:26:24.940 28362 28362 W SoLoader: Previously recorded 0 base apk paths.
10-25 18:26:24.974 28362 28362 W SoLoader: SoLoader initialized: 8
10-25 18:26:26.002 28362 28390 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 18:26:26.087 28362 28362 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 18:26:26.290 28362 28362 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:26:26.290 28362 28362 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:26:26.326 28362 28362 W HWUI    : Unknown dataspace 0
10-25 18:26:27.579 28362 28362 W HWUI    : Image decoding logging dropped!
10-25 18:26:27.580 28362 28362 W HWUI    : Image decoding logging dropped!
10-25 18:26:27.583 28362 28362 W HWUI    : Image decoding logging dropped!
10-25 18:26:28.850 28362 28362 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@3a18b37
10-25 18:26:31.588 28362 28362 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:26:31.591 28362 28362 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:26:31.591 28362 28362 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:26:39.052 28362 28362 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 18:26:39.052 28362 28362 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 18:26:39.054 28362 28466 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 18:26:39.054 28362 28466 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 18:26:39.055 28362 28466 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 18:26:39.055 28362 28466 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 18:26:39.082 28362 28362 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:26:39.082 28362 28362 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:26:39.083 28362 28362 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 18:26:39.119 28362 28412 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 18:26:39.119 28362 28466 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 18:26:39.528 28362 28362 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@e32ea63
10-25 18:26:39.614 28362 28468 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 18:26:39.616 28362 28466 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 18:26:39.624 28362 28466 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 18:26:39.690 28362 28362 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@bdbbf81
10-25 18:26:40.420 28362 28466 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 18:26:40.421 28362 28466 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 18:26:40.431 28362 28466 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 18:26:40.431 28362 28362 W unknown:ReactNative: Packager connection already open, nooping.
10-25 18:26:40.431 28362 28362 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 18:26:40.438 28362 28362 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 18:26:40.745 28362 28471 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 18:26:40.938 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 18:26:40.941 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 18:26:40.942 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 18:26:40.944 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 18:26:40.948 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 18:26:40.949 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 18:26:40.950 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 18:26:40.952 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 18:26:40.955 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 18:26:40.956 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 18:26:40.957 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 18:26:40.959 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 18:26:40.962 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 18:26:40.963 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 18:26:40.963 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 18:26:40.964 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 18:26:40.964 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 18:26:40.965 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 18:26:40.966 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 18:26:40.967 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 18:26:40.968 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 18:26:40.969 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 18:26:40.970 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 18:26:40.971 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 18:26:40.971 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 18:26:40.973 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 18:26:41.141 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 18:26:41.147 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 18:26:41.151 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 18:26:41.154 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 18:26:41.156 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 18:26:41.159 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 18:26:41.163 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 18:26:41.167 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 18:26:41.171 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 18:26:41.173 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 18:26:41.176 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 18:26:41.180 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 18:26:41.182 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 18:26:41.185 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 18:26:41.188 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 18:26:41.191 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 18:26:41.198 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 18:26:41.204 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 18:26:41.211 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 18:26:41.214 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 18:26:41.311 28362 28472 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 18:26:42.275 28362 28471 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 18:26:42.507 28362 28471 W HWUI    : Image decoding logging dropped!
10-25 18:26:42.508 28362 28471 W HWUI    : Image decoding logging dropped!

migration/evidence/RN07/g-settings1b/0284-G05.default-window-end-logcat.stdout.log
10-25 18:26:24.180 28362 28362 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 18:26:24.180 28362 28362 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 18:26:24.938 28362 28362 W SoLoader: Initializing SoLoader: 0
10-25 18:26:24.940 28362 28362 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 18:26:24.940 28362 28362 W SoLoader: Previously recorded 0 base apk paths.
10-25 18:26:24.974 28362 28362 W SoLoader: SoLoader initialized: 8
10-25 18:26:26.002 28362 28390 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 18:26:26.087 28362 28362 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 18:26:26.290 28362 28362 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:26:26.290 28362 28362 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:26:26.326 28362 28362 W HWUI    : Unknown dataspace 0
10-25 18:26:27.579 28362 28362 W HWUI    : Image decoding logging dropped!
10-25 18:26:27.580 28362 28362 W HWUI    : Image decoding logging dropped!
10-25 18:26:27.583 28362 28362 W HWUI    : Image decoding logging dropped!
10-25 18:26:28.850 28362 28362 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@3a18b37
10-25 18:26:31.588 28362 28362 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:26:31.591 28362 28362 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:26:31.591 28362 28362 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:26:39.052 28362 28362 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 18:26:39.052 28362 28362 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 18:26:39.054 28362 28466 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 18:26:39.054 28362 28466 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 18:26:39.055 28362 28466 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 18:26:39.055 28362 28466 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 18:26:39.082 28362 28362 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:26:39.082 28362 28362 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:26:39.083 28362 28362 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 18:26:39.119 28362 28412 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 18:26:39.119 28362 28466 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 18:26:39.528 28362 28362 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@e32ea63
10-25 18:26:39.614 28362 28468 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 18:26:39.616 28362 28466 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 18:26:39.624 28362 28466 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 18:26:39.690 28362 28362 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@bdbbf81
10-25 18:26:40.420 28362 28466 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 18:26:40.421 28362 28466 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 18:26:40.431 28362 28466 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 18:26:40.431 28362 28362 W unknown:ReactNative: Packager connection already open, nooping.
10-25 18:26:40.431 28362 28362 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 18:26:40.438 28362 28362 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 18:26:40.745 28362 28471 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 18:26:40.938 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 18:26:40.941 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 18:26:40.942 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 18:26:40.944 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 18:26:40.948 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 18:26:40.949 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 18:26:40.950 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 18:26:40.952 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 18:26:40.955 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 18:26:40.956 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 18:26:40.957 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 18:26:40.959 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 18:26:40.962 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 18:26:40.963 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 18:26:40.963 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 18:26:40.964 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 18:26:40.964 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 18:26:40.965 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 18:26:40.966 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 18:26:40.967 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 18:26:40.968 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 18:26:40.969 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 18:26:40.970 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 18:26:40.971 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 18:26:40.971 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 18:26:40.973 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 18:26:41.141 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 18:26:41.147 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 18:26:41.151 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 18:26:41.154 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 18:26:41.156 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 18:26:41.159 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 18:26:41.163 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 18:26:41.167 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 18:26:41.171 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 18:26:41.173 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 18:26:41.176 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 18:26:41.180 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 18:26:41.182 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 18:26:41.185 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 18:26:41.188 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 18:26:41.191 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 18:26:41.198 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 18:26:41.204 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 18:26:41.211 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 18:26:41.214 28362 28471 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 18:26:41.311 28362 28472 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 18:26:42.275 28362 28471 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 18:26:42.507 28362 28471 W HWUI    : Image decoding logging dropped!
10-25 18:26:42.508 28362 28471 W HWUI    : Image decoding logging dropped!
10-25 18:27:57.041 28362 28368 W nslationtest.rn: Cleared Reference was only reachable from finalizer (only reported once)
10-25 18:29:18.709 28362 28362 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@e684582
10-25 18:29:42.645 28362 28362 W InteractionJankMonitor: Initializing without READ_DEVICE_CONFIG permission. enabled=false, interval=1, missedFrameThreshold=3, frameTimeThreshold=64, package=dev.translationtest.rn
10-25 18:29:59.197 28362 28362 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@a66f764

migration/evidence/RN07/g-settings1b/0331-G05.font1-3-window-entry-logcat.stdout.log
10-25 18:30:49.627 29733 29733 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 18:30:49.627 29733 29733 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 18:30:50.407 29733 29733 W SoLoader: Initializing SoLoader: 0
10-25 18:30:50.413 29733 29733 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 18:30:50.413 29733 29733 W SoLoader: Previously recorded 0 base apk paths.
10-25 18:30:50.456 29733 29733 W SoLoader: SoLoader initialized: 8
10-25 18:30:51.678 29733 29763 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 18:30:51.849 29733 29733 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 18:30:52.163 29733 29733 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:30:52.163 29733 29733 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:30:52.213 29733 29733 W HWUI    : Unknown dataspace 0
10-25 18:30:53.561 29733 29733 W HWUI    : Image decoding logging dropped!
10-25 18:30:53.563 29733 29733 W HWUI    : Image decoding logging dropped!
10-25 18:30:53.565 29733 29733 W HWUI    : Image decoding logging dropped!
10-25 18:30:54.815 29733 29733 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@3a18b37
10-25 18:30:58.015 29733 29733 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:30:58.021 29733 29733 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:30:58.021 29733 29733 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:31:04.822 29733 29733 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 18:31:04.823 29733 29733 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 18:31:04.826 29733 29835 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 18:31:04.826 29733 29835 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 18:31:04.827 29733 29835 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 18:31:04.827 29733 29835 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 18:31:04.849 29733 29733 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:31:04.849 29733 29733 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:31:04.851 29733 29733 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 18:31:04.897 29733 29781 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 18:31:04.898 29733 29835 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 18:31:05.366 29733 29733 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@d72032e
10-25 18:31:05.384 29733 29733 W unknown:BridgelessReact: ReactHost{0}.raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: Unhandled SoftException
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: com.facebook.react.bridge.ReactNoCrashSoftException: raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException(ReactHostImpl.kt:906)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException$default(ReactHostImpl.kt:897)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.onWindowFocusChange(ReactHostImpl.kt:679)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at com.facebook.react.ReactDelegate.onWindowFocusChanged(ReactDelegate.kt:226)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at com.facebook.react.ReactActivityDelegate.onWindowFocusChanged(ReactActivityDelegate.java:237)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invokeSuspend(ReactActivityDelegateWrapper.kt:322)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:8)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:4)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$launchLifecycleScopeWithLock$1.invokeSuspend(ReactActivityDelegateWrapper.kt:469)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:34)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at kotlinx.coroutines.internal.DispatchedContinuationKt.resumeCancellableWith(DispatchedContinuation.kt:375)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:26)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at kotlinx.coroutines.CoroutineStart.invoke(CoroutineStart.kt:358)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at kotlinx.coroutines.AbstractCoroutine.start(AbstractCoroutine.kt:134)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch(Builders.common.kt:53)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch(Unknown Source:1)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch$default(Builders.common.kt:44)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch$default(Unknown Source:1)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock(ReactActivityDelegateWrapper.kt:467)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock$default(ReactActivityDelegateWrapper.kt:463)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.onWindowFocusChanged(ReactActivityDelegateWrapper.kt:320)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at com.facebook.react.ReactActivity.onWindowFocusChanged(ReactActivity.java:161)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at androidx.appcompat.view.WindowCallbackWrapper.onWindowFocusChanged(WindowCallbackWrapper.java:124)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at expo.modules.devmenu.detectors.InterceptingWindowCallback.onWindowFocusChanged(Unknown Source:2)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at com.android.internal.policy.DecorView.onWindowFocusChanged(DecorView.java:1818)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at android.view.View.dispatchWindowFocusChanged(View.java:16952)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at android.view.ViewGroup.dispatchWindowFocusChanged(ViewGroup.java:1530)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at android.view.ViewRootImpl.dispatchFocusEvent(ViewRootImpl.java:4873)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at android.view.ViewRootImpl.handleWindowFocusChanged(ViewRootImpl.java:4777)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at android.view.ViewRootImpl.-$$Nest$mhandleWindowFocusChanged(Unknown Source:0)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessageImpl(ViewRootImpl.java:7017)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessage(ViewRootImpl.java:6927)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at android.os.Handler.dispatchMessage(Handler.java:110)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at android.os.Looper.loopOnce(Looper.java:248)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at android.os.Looper.loop(Looper.java:338)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at android.app.ActivityThread.main(ActivityThread.java:9067)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at java.lang.reflect.Method.invoke(Native Method)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:593)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:932)
10-25 18:31:05.415 29733 29837 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 18:31:05.419 29733 29733 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@63f6520
10-25 18:31:05.433 29733 29835 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 18:31:05.438 29733 29835 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 18:31:06.293 29733 29835 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 18:31:06.294 29733 29835 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 18:31:06.298 29733 29733 W unknown:ReactNative: Packager connection already open, nooping.
10-25 18:31:06.299 29733 29835 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 18:31:06.302 29733 29733 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 18:31:06.307 29733 29733 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 18:31:06.590 29733 29843 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 18:31:06.804 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 18:31:06.809 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 18:31:06.812 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 18:31:06.813 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 18:31:06.820 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 18:31:06.822 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 18:31:06.823 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 18:31:06.825 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 18:31:06.828 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 18:31:06.829 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 18:31:06.830 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 18:31:06.832 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 18:31:06.835 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 18:31:06.836 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 18:31:06.837 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 18:31:06.838 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 18:31:06.838 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 18:31:06.839 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 18:31:06.840 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 18:31:06.843 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 18:31:06.846 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 18:31:06.848 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 18:31:06.849 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 18:31:06.851 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 18:31:06.851 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 18:31:06.854 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 18:31:07.028 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 18:31:07.036 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 18:31:07.043 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 18:31:07.048 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 18:31:07.053 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 18:31:07.056 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 18:31:07.061 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 18:31:07.067 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 18:31:07.074 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 18:31:07.076 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 18:31:07.078 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 18:31:07.082 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 18:31:07.085 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 18:31:07.088 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 18:31:07.091 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 18:31:07.093 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 18:31:07.099 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 18:31:07.103 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 18:31:07.105 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 18:31:07.107 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 18:31:07.181 29733 29844 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 18:31:08.281 29733 29843 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 18:31:08.510 29733 29843 W HWUI    : Image decoding logging dropped!
10-25 18:31:08.511 29733 29843 W HWUI    : Image decoding logging dropped!

migration/evidence/RN07/g-settings1b/0435-G05.font1-3-window-end-logcat.stdout.log
10-25 18:30:49.627 29733 29733 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 18:30:49.627 29733 29733 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 18:30:50.407 29733 29733 W SoLoader: Initializing SoLoader: 0
10-25 18:30:50.413 29733 29733 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 18:30:50.413 29733 29733 W SoLoader: Previously recorded 0 base apk paths.
10-25 18:30:50.456 29733 29733 W SoLoader: SoLoader initialized: 8
10-25 18:30:51.678 29733 29763 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 18:30:51.849 29733 29733 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 18:30:52.163 29733 29733 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:30:52.163 29733 29733 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:30:52.213 29733 29733 W HWUI    : Unknown dataspace 0
10-25 18:30:53.561 29733 29733 W HWUI    : Image decoding logging dropped!
10-25 18:30:53.563 29733 29733 W HWUI    : Image decoding logging dropped!
10-25 18:30:53.565 29733 29733 W HWUI    : Image decoding logging dropped!
10-25 18:30:54.815 29733 29733 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@3a18b37
10-25 18:30:58.015 29733 29733 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:30:58.021 29733 29733 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:30:58.021 29733 29733 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:31:04.822 29733 29733 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 18:31:04.823 29733 29733 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 18:31:04.826 29733 29835 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 18:31:04.826 29733 29835 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 18:31:04.827 29733 29835 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 18:31:04.827 29733 29835 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 18:31:04.849 29733 29733 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:31:04.849 29733 29733 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:31:04.851 29733 29733 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 18:31:04.897 29733 29781 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 18:31:04.898 29733 29835 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 18:31:05.366 29733 29733 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@d72032e
10-25 18:31:05.384 29733 29733 W unknown:BridgelessReact: ReactHost{0}.raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: Unhandled SoftException
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: com.facebook.react.bridge.ReactNoCrashSoftException: raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException(ReactHostImpl.kt:906)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException$default(ReactHostImpl.kt:897)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.onWindowFocusChange(ReactHostImpl.kt:679)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at com.facebook.react.ReactDelegate.onWindowFocusChanged(ReactDelegate.kt:226)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at com.facebook.react.ReactActivityDelegate.onWindowFocusChanged(ReactActivityDelegate.java:237)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invokeSuspend(ReactActivityDelegateWrapper.kt:322)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:8)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:4)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$launchLifecycleScopeWithLock$1.invokeSuspend(ReactActivityDelegateWrapper.kt:469)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:34)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at kotlinx.coroutines.internal.DispatchedContinuationKt.resumeCancellableWith(DispatchedContinuation.kt:375)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:26)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at kotlinx.coroutines.CoroutineStart.invoke(CoroutineStart.kt:358)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at kotlinx.coroutines.AbstractCoroutine.start(AbstractCoroutine.kt:134)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch(Builders.common.kt:53)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch(Unknown Source:1)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch$default(Builders.common.kt:44)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch$default(Unknown Source:1)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock(ReactActivityDelegateWrapper.kt:467)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock$default(ReactActivityDelegateWrapper.kt:463)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.onWindowFocusChanged(ReactActivityDelegateWrapper.kt:320)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at com.facebook.react.ReactActivity.onWindowFocusChanged(ReactActivity.java:161)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at androidx.appcompat.view.WindowCallbackWrapper.onWindowFocusChanged(WindowCallbackWrapper.java:124)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at expo.modules.devmenu.detectors.InterceptingWindowCallback.onWindowFocusChanged(Unknown Source:2)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at com.android.internal.policy.DecorView.onWindowFocusChanged(DecorView.java:1818)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at android.view.View.dispatchWindowFocusChanged(View.java:16952)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at android.view.ViewGroup.dispatchWindowFocusChanged(ViewGroup.java:1530)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at android.view.ViewRootImpl.dispatchFocusEvent(ViewRootImpl.java:4873)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at android.view.ViewRootImpl.handleWindowFocusChanged(ViewRootImpl.java:4777)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at android.view.ViewRootImpl.-$$Nest$mhandleWindowFocusChanged(Unknown Source:0)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessageImpl(ViewRootImpl.java:7017)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessage(ViewRootImpl.java:6927)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at android.os.Handler.dispatchMessage(Handler.java:110)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at android.os.Looper.loopOnce(Looper.java:248)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at android.os.Looper.loop(Looper.java:338)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at android.app.ActivityThread.main(ActivityThread.java:9067)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at java.lang.reflect.Method.invoke(Native Method)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:593)
10-25 18:31:05.385 29733 29733 E unknown:ReactHost: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:932)
10-25 18:31:05.415 29733 29837 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 18:31:05.419 29733 29733 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@63f6520
10-25 18:31:05.433 29733 29835 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 18:31:05.438 29733 29835 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 18:31:06.293 29733 29835 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 18:31:06.294 29733 29835 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 18:31:06.298 29733 29733 W unknown:ReactNative: Packager connection already open, nooping.
10-25 18:31:06.299 29733 29835 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 18:31:06.302 29733 29733 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 18:31:06.307 29733 29733 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 18:31:06.590 29733 29843 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 18:31:06.804 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 18:31:06.809 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 18:31:06.812 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 18:31:06.813 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 18:31:06.820 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 18:31:06.822 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 18:31:06.823 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 18:31:06.825 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 18:31:06.828 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 18:31:06.829 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 18:31:06.830 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 18:31:06.832 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 18:31:06.835 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 18:31:06.836 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 18:31:06.837 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 18:31:06.838 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 18:31:06.838 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 18:31:06.839 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 18:31:06.840 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 18:31:06.843 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 18:31:06.846 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 18:31:06.848 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 18:31:06.849 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 18:31:06.851 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 18:31:06.851 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 18:31:06.854 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 18:31:07.028 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 18:31:07.036 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 18:31:07.043 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 18:31:07.048 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 18:31:07.053 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 18:31:07.056 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 18:31:07.061 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 18:31:07.067 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 18:31:07.074 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 18:31:07.076 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 18:31:07.078 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 18:31:07.082 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 18:31:07.085 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 18:31:07.088 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 18:31:07.091 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 18:31:07.093 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 18:31:07.099 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 18:31:07.103 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 18:31:07.105 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 18:31:07.107 29733 29843 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 18:31:07.181 29733 29844 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 18:31:08.281 29733 29843 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 18:31:08.510 29733 29843 W HWUI    : Image decoding logging dropped!
10-25 18:31:08.511 29733 29843 W HWUI    : Image decoding logging dropped!
10-25 18:32:22.967 29733 29739 W nslationtest.rn: Cleared Reference was only reachable from finalizer (only reported once)
10-25 18:34:01.547 29733 29733 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@c7bd61f
10-25 18:34:25.672 29733 29733 W InteractionJankMonitor: Initializing without READ_DEVICE_CONFIG permission. enabled=false, interval=1, missedFrameThreshold=3, frameTimeThreshold=64, package=dev.translationtest.rn
10-25 18:34:41.813 29733 29733 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@33c60d4

migration/evidence/RN07/g-settings1b/0491-G05.font2-0-window-entry-logcat.stdout.log
10-25 18:34:56.604 31211 31211 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 18:34:56.604 31211 31211 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 18:34:57.288 31211 31211 W SoLoader: Initializing SoLoader: 0
10-25 18:34:57.293 31211 31211 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 18:34:57.293 31211 31211 W SoLoader: Previously recorded 0 base apk paths.
10-25 18:34:57.327 31211 31211 W SoLoader: SoLoader initialized: 8
10-25 18:34:58.350 31211 31240 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 18:34:58.402 31211 31211 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 18:34:58.557 31211 31211 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:34:58.557 31211 31211 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:34:58.613 31211 31211 W HWUI    : Unknown dataspace 0
10-25 18:34:59.905 31211 31211 W HWUI    : Image decoding logging dropped!
10-25 18:34:59.907 31211 31211 W HWUI    : Image decoding logging dropped!
10-25 18:34:59.909 31211 31211 W HWUI    : Image decoding logging dropped!
10-25 18:35:01.210 31211 31211 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@3a18b37
10-25 18:35:04.270 31211 31211 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:35:04.275 31211 31211 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:35:04.275 31211 31211 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:35:11.100 31211 31211 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 18:35:11.100 31211 31211 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 18:35:11.101 31211 31318 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 18:35:11.101 31211 31318 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 18:35:11.102 31211 31318 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 18:35:11.102 31211 31318 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 18:35:11.128 31211 31211 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:35:11.128 31211 31211 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:35:11.131 31211 31211 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 18:35:11.196 31211 31312 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 18:35:11.197 31211 31318 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 18:35:11.680 31211 31211 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@aa0d648
10-25 18:35:11.744 31211 31211 W unknown:BridgelessReact: ReactHost{0}.raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: Unhandled SoftException
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: com.facebook.react.bridge.ReactNoCrashSoftException: raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException(ReactHostImpl.kt:906)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException$default(ReactHostImpl.kt:897)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.onWindowFocusChange(ReactHostImpl.kt:679)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at com.facebook.react.ReactDelegate.onWindowFocusChanged(ReactDelegate.kt:226)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at com.facebook.react.ReactActivityDelegate.onWindowFocusChanged(ReactActivityDelegate.java:237)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invokeSuspend(ReactActivityDelegateWrapper.kt:322)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:8)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:4)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$launchLifecycleScopeWithLock$1.invokeSuspend(ReactActivityDelegateWrapper.kt:469)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:34)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at kotlinx.coroutines.internal.DispatchedContinuationKt.resumeCancellableWith(DispatchedContinuation.kt:375)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:26)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at kotlinx.coroutines.CoroutineStart.invoke(CoroutineStart.kt:358)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at kotlinx.coroutines.AbstractCoroutine.start(AbstractCoroutine.kt:134)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch(Builders.common.kt:53)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch(Unknown Source:1)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch$default(Builders.common.kt:44)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch$default(Unknown Source:1)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock(ReactActivityDelegateWrapper.kt:467)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock$default(ReactActivityDelegateWrapper.kt:463)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.onWindowFocusChanged(ReactActivityDelegateWrapper.kt:320)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at com.facebook.react.ReactActivity.onWindowFocusChanged(ReactActivity.java:161)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at androidx.appcompat.view.WindowCallbackWrapper.onWindowFocusChanged(WindowCallbackWrapper.java:124)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at expo.modules.devmenu.detectors.InterceptingWindowCallback.onWindowFocusChanged(Unknown Source:2)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at com.android.internal.policy.DecorView.onWindowFocusChanged(DecorView.java:1818)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at android.view.View.dispatchWindowFocusChanged(View.java:16952)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at android.view.ViewGroup.dispatchWindowFocusChanged(ViewGroup.java:1530)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at android.view.ViewRootImpl.dispatchFocusEvent(ViewRootImpl.java:4873)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at android.view.ViewRootImpl.handleWindowFocusChanged(ViewRootImpl.java:4777)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at android.view.ViewRootImpl.-$$Nest$mhandleWindowFocusChanged(Unknown Source:0)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessageImpl(ViewRootImpl.java:7017)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessage(ViewRootImpl.java:6927)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at android.os.Handler.dispatchMessage(Handler.java:110)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at android.os.Looper.loopOnce(Looper.java:248)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at android.os.Looper.loop(Looper.java:338)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at android.app.ActivityThread.main(ActivityThread.java:9067)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at java.lang.reflect.Method.invoke(Native Method)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:593)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:932)
10-25 18:35:11.771 31211 31320 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 18:35:11.772 31211 31318 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 18:35:11.798 31211 31318 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 18:35:11.856 31211 31211 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@2f1ee6f
10-25 18:35:12.616 31211 31318 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 18:35:12.616 31211 31318 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 18:35:12.620 31211 31211 W unknown:ReactNative: Packager connection already open, nooping.
10-25 18:35:12.621 31211 31211 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 18:35:12.622 31211 31318 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 18:35:12.623 31211 31211 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 18:35:12.886 31211 31324 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 18:35:13.068 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 18:35:13.072 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 18:35:13.073 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 18:35:13.075 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 18:35:13.079 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 18:35:13.079 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 18:35:13.081 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 18:35:13.083 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 18:35:13.087 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 18:35:13.088 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 18:35:13.090 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 18:35:13.091 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 18:35:13.094 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 18:35:13.095 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 18:35:13.096 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 18:35:13.096 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 18:35:13.097 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 18:35:13.097 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 18:35:13.098 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 18:35:13.100 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 18:35:13.100 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 18:35:13.101 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 18:35:13.102 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 18:35:13.103 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 18:35:13.103 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 18:35:13.106 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 18:35:13.298 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 18:35:13.304 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 18:35:13.307 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 18:35:13.311 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 18:35:13.314 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 18:35:13.316 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 18:35:13.320 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 18:35:13.327 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 18:35:13.331 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 18:35:13.334 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 18:35:13.336 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 18:35:13.342 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 18:35:13.344 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 18:35:13.351 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 18:35:13.355 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 18:35:13.360 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 18:35:13.365 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 18:35:13.368 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 18:35:13.372 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 18:35:13.375 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 18:35:13.447 31211 31325 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 18:35:14.379 31211 31324 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 18:35:14.582 31211 31324 W HWUI    : Image decoding logging dropped!
10-25 18:35:14.583 31211 31324 W HWUI    : Image decoding logging dropped!

migration/evidence/RN07/g-settings1b/0599-G05.font2-0-window-end-logcat.stdout.log
10-25 18:34:56.604 31211 31211 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 18:34:56.604 31211 31211 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 18:34:57.288 31211 31211 W SoLoader: Initializing SoLoader: 0
10-25 18:34:57.293 31211 31211 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 18:34:57.293 31211 31211 W SoLoader: Previously recorded 0 base apk paths.
10-25 18:34:57.327 31211 31211 W SoLoader: SoLoader initialized: 8
10-25 18:34:58.350 31211 31240 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 18:34:58.402 31211 31211 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 18:34:58.557 31211 31211 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:34:58.557 31211 31211 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:34:58.613 31211 31211 W HWUI    : Unknown dataspace 0
10-25 18:34:59.905 31211 31211 W HWUI    : Image decoding logging dropped!
10-25 18:34:59.907 31211 31211 W HWUI    : Image decoding logging dropped!
10-25 18:34:59.909 31211 31211 W HWUI    : Image decoding logging dropped!
10-25 18:35:01.210 31211 31211 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@3a18b37
10-25 18:35:04.270 31211 31211 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:35:04.275 31211 31211 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:35:04.275 31211 31211 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:35:11.100 31211 31211 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 18:35:11.100 31211 31211 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 18:35:11.101 31211 31318 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 18:35:11.101 31211 31318 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 18:35:11.102 31211 31318 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 18:35:11.102 31211 31318 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 18:35:11.128 31211 31211 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:35:11.128 31211 31211 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:35:11.131 31211 31211 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 18:35:11.196 31211 31312 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 18:35:11.197 31211 31318 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 18:35:11.680 31211 31211 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@aa0d648
10-25 18:35:11.744 31211 31211 W unknown:BridgelessReact: ReactHost{0}.raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: Unhandled SoftException
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: com.facebook.react.bridge.ReactNoCrashSoftException: raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException(ReactHostImpl.kt:906)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException$default(ReactHostImpl.kt:897)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.onWindowFocusChange(ReactHostImpl.kt:679)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at com.facebook.react.ReactDelegate.onWindowFocusChanged(ReactDelegate.kt:226)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at com.facebook.react.ReactActivityDelegate.onWindowFocusChanged(ReactActivityDelegate.java:237)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invokeSuspend(ReactActivityDelegateWrapper.kt:322)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:8)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:4)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$launchLifecycleScopeWithLock$1.invokeSuspend(ReactActivityDelegateWrapper.kt:469)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:34)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at kotlinx.coroutines.internal.DispatchedContinuationKt.resumeCancellableWith(DispatchedContinuation.kt:375)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:26)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at kotlinx.coroutines.CoroutineStart.invoke(CoroutineStart.kt:358)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at kotlinx.coroutines.AbstractCoroutine.start(AbstractCoroutine.kt:134)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch(Builders.common.kt:53)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch(Unknown Source:1)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch$default(Builders.common.kt:44)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch$default(Unknown Source:1)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock(ReactActivityDelegateWrapper.kt:467)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock$default(ReactActivityDelegateWrapper.kt:463)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.onWindowFocusChanged(ReactActivityDelegateWrapper.kt:320)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at com.facebook.react.ReactActivity.onWindowFocusChanged(ReactActivity.java:161)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at androidx.appcompat.view.WindowCallbackWrapper.onWindowFocusChanged(WindowCallbackWrapper.java:124)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at expo.modules.devmenu.detectors.InterceptingWindowCallback.onWindowFocusChanged(Unknown Source:2)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at com.android.internal.policy.DecorView.onWindowFocusChanged(DecorView.java:1818)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at android.view.View.dispatchWindowFocusChanged(View.java:16952)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at android.view.ViewGroup.dispatchWindowFocusChanged(ViewGroup.java:1530)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at android.view.ViewRootImpl.dispatchFocusEvent(ViewRootImpl.java:4873)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at android.view.ViewRootImpl.handleWindowFocusChanged(ViewRootImpl.java:4777)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at android.view.ViewRootImpl.-$$Nest$mhandleWindowFocusChanged(Unknown Source:0)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessageImpl(ViewRootImpl.java:7017)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessage(ViewRootImpl.java:6927)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at android.os.Handler.dispatchMessage(Handler.java:110)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at android.os.Looper.loopOnce(Looper.java:248)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at android.os.Looper.loop(Looper.java:338)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at android.app.ActivityThread.main(ActivityThread.java:9067)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at java.lang.reflect.Method.invoke(Native Method)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:593)
10-25 18:35:11.757 31211 31211 E unknown:ReactHost: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:932)
10-25 18:35:11.771 31211 31320 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 18:35:11.772 31211 31318 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 18:35:11.798 31211 31318 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 18:35:11.856 31211 31211 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@2f1ee6f
10-25 18:35:12.616 31211 31318 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 18:35:12.616 31211 31318 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 18:35:12.620 31211 31211 W unknown:ReactNative: Packager connection already open, nooping.
10-25 18:35:12.621 31211 31211 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 18:35:12.622 31211 31318 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 18:35:12.623 31211 31211 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 18:35:12.886 31211 31324 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 18:35:13.068 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 18:35:13.072 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 18:35:13.073 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 18:35:13.075 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 18:35:13.079 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 18:35:13.079 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 18:35:13.081 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 18:35:13.083 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 18:35:13.087 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 18:35:13.088 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 18:35:13.090 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 18:35:13.091 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 18:35:13.094 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 18:35:13.095 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 18:35:13.096 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 18:35:13.096 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 18:35:13.097 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 18:35:13.097 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 18:35:13.098 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 18:35:13.100 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 18:35:13.100 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 18:35:13.101 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 18:35:13.102 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 18:35:13.103 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 18:35:13.103 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 18:35:13.106 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 18:35:13.298 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 18:35:13.304 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 18:35:13.307 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 18:35:13.311 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 18:35:13.314 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 18:35:13.316 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 18:35:13.320 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 18:35:13.327 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 18:35:13.331 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 18:35:13.334 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 18:35:13.336 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 18:35:13.342 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 18:35:13.344 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 18:35:13.351 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 18:35:13.355 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 18:35:13.360 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 18:35:13.365 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 18:35:13.368 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 18:35:13.372 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 18:35:13.375 31211 31324 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 18:35:13.447 31211 31325 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 18:35:14.379 31211 31324 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 18:35:14.582 31211 31324 W HWUI    : Image decoding logging dropped!
10-25 18:35:14.583 31211 31324 W HWUI    : Image decoding logging dropped!
10-25 18:36:48.102 31211 31217 W nslationtest.rn: Cleared Reference was only reachable from finalizer (only reported once)
10-25 18:38:15.438 31211 31211 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@9b21918
10-25 18:38:39.311 31211 31211 W InteractionJankMonitor: Initializing without READ_DEVICE_CONFIG permission. enabled=false, interval=1, missedFrameThreshold=3, frameTimeThreshold=64, package=dev.translationtest.rn
10-25 18:38:55.413 31211 31211 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@88ffdcd

migration/evidence/RN07/g-settings1b/0655-G06.density480-window-entry-logcat.stdout.log
10-25 18:39:20.375   307   307 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 18:39:20.375   307   307 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 18:39:21.361   307   307 W SoLoader: Initializing SoLoader: 0
10-25 18:39:21.364   307   307 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 18:39:21.364   307   307 W SoLoader: Previously recorded 0 base apk paths.
10-25 18:39:21.419   307   307 W SoLoader: SoLoader initialized: 8
10-25 18:39:24.351   307   451 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 18:39:24.434   307   307 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 18:39:24.768   307   307 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:39:24.768   307   307 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:39:24.815   307   307 W HWUI    : Unknown dataspace 0
10-25 18:39:26.418   307   307 W HWUI    : Image decoding logging dropped!
10-25 18:39:26.420   307   307 W HWUI    : Image decoding logging dropped!
10-25 18:39:26.422   307   307 W HWUI    : Image decoding logging dropped!
10-25 18:39:27.780   307   307 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@3a18b37
10-25 18:39:29.141   307   307 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:39:29.148   307   307 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:39:29.148   307   307 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:39:36.441   307   307 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 18:39:36.441   307   307 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 18:39:36.443   307   708 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 18:39:36.444   307   708 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 18:39:36.444   307   708 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 18:39:36.444   307   708 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 18:39:36.465   307   307 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:39:36.465   307   307 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:39:36.466   307   307 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 18:39:36.512   307   461 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 18:39:36.512   307   708 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 18:39:36.903   307   307 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@b755ce1
10-25 18:39:36.997   307   746 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 18:39:36.999   307   708 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 18:39:37.003   307   708 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 18:39:37.102   307   307 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@659028b
10-25 18:39:37.937   307   708 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 18:39:37.937   307   708 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 18:39:37.948   307   307 W unknown:ReactNative: Packager connection already open, nooping.
10-25 18:39:37.948   307   708 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 18:39:37.957   307   307 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 18:39:37.969   307   307 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 18:39:38.287   307   754 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 18:39:38.467   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 18:39:38.470   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 18:39:38.471   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 18:39:38.473   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 18:39:38.477   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 18:39:38.478   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 18:39:38.479   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 18:39:38.482   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 18:39:38.485   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 18:39:38.486   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 18:39:38.487   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 18:39:38.489   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 18:39:38.492   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 18:39:38.493   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 18:39:38.493   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 18:39:38.494   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 18:39:38.495   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 18:39:38.495   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 18:39:38.496   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 18:39:38.497   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 18:39:38.498   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 18:39:38.499   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 18:39:38.501   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 18:39:38.502   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 18:39:38.502   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 18:39:38.505   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 18:39:38.725   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 18:39:38.731   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 18:39:38.734   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 18:39:38.737   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 18:39:38.739   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 18:39:38.742   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 18:39:38.746   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 18:39:38.750   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 18:39:38.754   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 18:39:38.759   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 18:39:38.763   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 18:39:38.771   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 18:39:38.774   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 18:39:38.778   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 18:39:38.781   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 18:39:38.783   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 18:39:38.788   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 18:39:38.793   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 18:39:38.795   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 18:39:38.798   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 18:39:38.872   307   761 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 18:39:39.879   307   754 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 18:39:40.128   307   754 W HWUI    : Image decoding logging dropped!
10-25 18:39:40.128   307   754 W HWUI    : Image decoding logging dropped!

migration/evidence/RN07/g-settings1b/0759-G06.density480-window-end-logcat.stdout.log
10-25 18:39:20.375   307   307 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 18:39:20.375   307   307 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 18:39:21.361   307   307 W SoLoader: Initializing SoLoader: 0
10-25 18:39:21.364   307   307 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 18:39:21.364   307   307 W SoLoader: Previously recorded 0 base apk paths.
10-25 18:39:21.419   307   307 W SoLoader: SoLoader initialized: 8
10-25 18:39:24.351   307   451 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 18:39:24.434   307   307 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 18:39:24.768   307   307 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:39:24.768   307   307 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:39:24.815   307   307 W HWUI    : Unknown dataspace 0
10-25 18:39:26.418   307   307 W HWUI    : Image decoding logging dropped!
10-25 18:39:26.420   307   307 W HWUI    : Image decoding logging dropped!
10-25 18:39:26.422   307   307 W HWUI    : Image decoding logging dropped!
10-25 18:39:27.780   307   307 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@3a18b37
10-25 18:39:29.141   307   307 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:39:29.148   307   307 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:39:29.148   307   307 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:39:36.441   307   307 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 18:39:36.441   307   307 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 18:39:36.443   307   708 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 18:39:36.444   307   708 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 18:39:36.444   307   708 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 18:39:36.444   307   708 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 18:39:36.465   307   307 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:39:36.465   307   307 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:39:36.466   307   307 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 18:39:36.512   307   461 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 18:39:36.512   307   708 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 18:39:36.903   307   307 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@b755ce1
10-25 18:39:36.997   307   746 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 18:39:36.999   307   708 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 18:39:37.003   307   708 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 18:39:37.102   307   307 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@659028b
10-25 18:39:37.937   307   708 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 18:39:37.937   307   708 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 18:39:37.948   307   307 W unknown:ReactNative: Packager connection already open, nooping.
10-25 18:39:37.948   307   708 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 18:39:37.957   307   307 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 18:39:37.969   307   307 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 18:39:38.287   307   754 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 18:39:38.467   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 18:39:38.470   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 18:39:38.471   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 18:39:38.473   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 18:39:38.477   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 18:39:38.478   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 18:39:38.479   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 18:39:38.482   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 18:39:38.485   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 18:39:38.486   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 18:39:38.487   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 18:39:38.489   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 18:39:38.492   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 18:39:38.493   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 18:39:38.493   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 18:39:38.494   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 18:39:38.495   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 18:39:38.495   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 18:39:38.496   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 18:39:38.497   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 18:39:38.498   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 18:39:38.499   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 18:39:38.501   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 18:39:38.502   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 18:39:38.502   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 18:39:38.505   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 18:39:38.725   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 18:39:38.731   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 18:39:38.734   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 18:39:38.737   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 18:39:38.739   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 18:39:38.742   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 18:39:38.746   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 18:39:38.750   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 18:39:38.754   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 18:39:38.759   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 18:39:38.763   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 18:39:38.771   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 18:39:38.774   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 18:39:38.778   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 18:39:38.781   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 18:39:38.783   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 18:39:38.788   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 18:39:38.793   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 18:39:38.795   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 18:39:38.798   307   754 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 18:39:38.872   307   761 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 18:39:39.879   307   754 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 18:39:40.128   307   754 W HWUI    : Image decoding logging dropped!
10-25 18:39:40.128   307   754 W HWUI    : Image decoding logging dropped!
10-25 18:40:54.739   307   314 W nslationtest.rn: Cleared Reference was only reachable from finalizer (only reported once)
10-25 18:42:32.814   307   307 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@5e357d4
10-25 18:42:56.713   307   307 W InteractionJankMonitor: Initializing without READ_DEVICE_CONFIG permission. enabled=false, interval=1, missedFrameThreshold=3, frameTimeThreshold=64, package=dev.translationtest.rn
10-25 18:43:12.663   307   307 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@2dd77c2

migration/evidence/RN07/g-settings1b/0821-G07.dark-window-entry-logcat.stdout.log
10-25 18:43:28.108  3371  3371 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 18:43:28.108  3371  3371 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 18:43:29.076  3371  3371 W SoLoader: Initializing SoLoader: 0
10-25 18:43:29.080  3371  3371 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 18:43:29.080  3371  3371 W SoLoader: Previously recorded 0 base apk paths.
10-25 18:43:29.118  3371  3371 W SoLoader: SoLoader initialized: 8
10-25 18:43:30.472  3371  3474 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 18:43:30.626  3371  3371 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 18:43:30.893  3371  3371 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:43:30.893  3371  3371 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:43:30.956  3371  3371 W HWUI    : Unknown dataspace 0
10-25 18:43:32.269  3371  3371 W HWUI    : Image decoding logging dropped!
10-25 18:43:32.274  3371  3371 W HWUI    : Image decoding logging dropped!
10-25 18:43:32.276  3371  3371 W HWUI    : Image decoding logging dropped!
10-25 18:43:33.571  3371  3371 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@2be1036
10-25 18:43:36.804  3371  3371 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:43:36.808  3371  3371 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:43:36.808  3371  3371 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:43:43.976  3371  3371 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 18:43:43.976  3371  3371 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 18:43:43.977  3371  3579 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 18:43:43.977  3371  3579 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 18:43:43.978  3371  3579 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 18:43:43.978  3371  3579 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 18:43:43.997  3371  3371 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:43:43.997  3371  3371 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:43:43.998  3371  3371 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 18:43:44.034  3371  3497 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 18:43:44.035  3371  3579 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 18:43:44.423  3371  3371 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@39c21a9
10-25 18:43:44.562  3371  3371 W unknown:BridgelessReact: ReactHost{0}.raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: Unhandled SoftException
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: com.facebook.react.bridge.ReactNoCrashSoftException: raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException(ReactHostImpl.kt:906)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException$default(ReactHostImpl.kt:897)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.onWindowFocusChange(ReactHostImpl.kt:679)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at com.facebook.react.ReactDelegate.onWindowFocusChanged(ReactDelegate.kt:226)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at com.facebook.react.ReactActivityDelegate.onWindowFocusChanged(ReactActivityDelegate.java:237)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invokeSuspend(ReactActivityDelegateWrapper.kt:322)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:8)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:4)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$launchLifecycleScopeWithLock$1.invokeSuspend(ReactActivityDelegateWrapper.kt:469)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:34)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at kotlinx.coroutines.internal.DispatchedContinuationKt.resumeCancellableWith(DispatchedContinuation.kt:375)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:26)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at kotlinx.coroutines.CoroutineStart.invoke(CoroutineStart.kt:358)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at kotlinx.coroutines.AbstractCoroutine.start(AbstractCoroutine.kt:134)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch(Builders.common.kt:53)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch(Unknown Source:1)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch$default(Builders.common.kt:44)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch$default(Unknown Source:1)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock(ReactActivityDelegateWrapper.kt:467)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock$default(ReactActivityDelegateWrapper.kt:463)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.onWindowFocusChanged(ReactActivityDelegateWrapper.kt:320)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at com.facebook.react.ReactActivity.onWindowFocusChanged(ReactActivity.java:161)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at androidx.appcompat.view.WindowCallbackWrapper.onWindowFocusChanged(WindowCallbackWrapper.java:124)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at expo.modules.devmenu.detectors.InterceptingWindowCallback.onWindowFocusChanged(Unknown Source:2)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at com.android.internal.policy.DecorView.onWindowFocusChanged(DecorView.java:1818)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at android.view.View.dispatchWindowFocusChanged(View.java:16952)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at android.view.ViewGroup.dispatchWindowFocusChanged(ViewGroup.java:1530)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at android.view.ViewRootImpl.dispatchFocusEvent(ViewRootImpl.java:4873)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at android.view.ViewRootImpl.handleWindowFocusChanged(ViewRootImpl.java:4777)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at android.view.ViewRootImpl.-$$Nest$mhandleWindowFocusChanged(Unknown Source:0)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessageImpl(ViewRootImpl.java:7017)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessage(ViewRootImpl.java:6927)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at android.os.Handler.dispatchMessage(Handler.java:110)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at android.os.Looper.loopOnce(Looper.java:248)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at android.os.Looper.loop(Looper.java:338)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at android.app.ActivityThread.main(ActivityThread.java:9067)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at java.lang.reflect.Method.invoke(Native Method)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:593)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:932)
10-25 18:43:44.704  3371  3581 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 18:43:44.706  3371  3579 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 18:43:44.714  3371  3371 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@4251fe4
10-25 18:43:44.720  3371  3579 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 18:43:45.569  3371  3579 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 18:43:45.570  3371  3579 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 18:43:45.580  3371  3371 W unknown:ReactNative: Packager connection already open, nooping.
10-25 18:43:45.580  3371  3579 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 18:43:45.590  3371  3371 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 18:43:45.598  3371  3371 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 18:43:45.885  3371  3587 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 18:43:46.098  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 18:43:46.104  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 18:43:46.106  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 18:43:46.107  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 18:43:46.114  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 18:43:46.115  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 18:43:46.117  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 18:43:46.120  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 18:43:46.127  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 18:43:46.127  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 18:43:46.131  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 18:43:46.137  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 18:43:46.140  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 18:43:46.141  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 18:43:46.142  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 18:43:46.142  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 18:43:46.143  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 18:43:46.143  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 18:43:46.144  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 18:43:46.146  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 18:43:46.146  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 18:43:46.147  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 18:43:46.148  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 18:43:46.149  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 18:43:46.149  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 18:43:46.151  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 18:43:46.337  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 18:43:46.342  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 18:43:46.346  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 18:43:46.348  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 18:43:46.350  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 18:43:46.353  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 18:43:46.356  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 18:43:46.360  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 18:43:46.364  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 18:43:46.366  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 18:43:46.368  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 18:43:46.373  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 18:43:46.375  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 18:43:46.378  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 18:43:46.382  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 18:43:46.384  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 18:43:46.389  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 18:43:46.392  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 18:43:46.394  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 18:43:46.397  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 18:43:46.461  3371  3588 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 18:43:47.329  3371  3587 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 18:43:47.525  3371  3587 W HWUI    : Image decoding logging dropped!
10-25 18:43:47.526  3371  3587 W HWUI    : Image decoding logging dropped!

migration/evidence/RN07/g-settings1b/0917-G07.dark-window-end-logcat.stdout.log
10-25 18:43:28.108  3371  3371 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 18:43:28.108  3371  3371 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 18:43:29.076  3371  3371 W SoLoader: Initializing SoLoader: 0
10-25 18:43:29.080  3371  3371 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 18:43:29.080  3371  3371 W SoLoader: Previously recorded 0 base apk paths.
10-25 18:43:29.118  3371  3371 W SoLoader: SoLoader initialized: 8
10-25 18:43:30.472  3371  3474 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 18:43:30.626  3371  3371 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 18:43:30.893  3371  3371 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:43:30.893  3371  3371 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:43:30.956  3371  3371 W HWUI    : Unknown dataspace 0
10-25 18:43:32.269  3371  3371 W HWUI    : Image decoding logging dropped!
10-25 18:43:32.274  3371  3371 W HWUI    : Image decoding logging dropped!
10-25 18:43:32.276  3371  3371 W HWUI    : Image decoding logging dropped!
10-25 18:43:33.571  3371  3371 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@2be1036
10-25 18:43:36.804  3371  3371 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:43:36.808  3371  3371 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:43:36.808  3371  3371 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:43:43.976  3371  3371 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 18:43:43.976  3371  3371 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 18:43:43.977  3371  3579 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 18:43:43.977  3371  3579 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 18:43:43.978  3371  3579 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 18:43:43.978  3371  3579 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 18:43:43.997  3371  3371 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:43:43.997  3371  3371 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:43:43.998  3371  3371 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 18:43:44.034  3371  3497 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 18:43:44.035  3371  3579 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 18:43:44.423  3371  3371 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@39c21a9
10-25 18:43:44.562  3371  3371 W unknown:BridgelessReact: ReactHost{0}.raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: Unhandled SoftException
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: com.facebook.react.bridge.ReactNoCrashSoftException: raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException(ReactHostImpl.kt:906)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException$default(ReactHostImpl.kt:897)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.onWindowFocusChange(ReactHostImpl.kt:679)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at com.facebook.react.ReactDelegate.onWindowFocusChanged(ReactDelegate.kt:226)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at com.facebook.react.ReactActivityDelegate.onWindowFocusChanged(ReactActivityDelegate.java:237)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invokeSuspend(ReactActivityDelegateWrapper.kt:322)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:8)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:4)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$launchLifecycleScopeWithLock$1.invokeSuspend(ReactActivityDelegateWrapper.kt:469)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:34)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at kotlinx.coroutines.internal.DispatchedContinuationKt.resumeCancellableWith(DispatchedContinuation.kt:375)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:26)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at kotlinx.coroutines.CoroutineStart.invoke(CoroutineStart.kt:358)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at kotlinx.coroutines.AbstractCoroutine.start(AbstractCoroutine.kt:134)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch(Builders.common.kt:53)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch(Unknown Source:1)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch$default(Builders.common.kt:44)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch$default(Unknown Source:1)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock(ReactActivityDelegateWrapper.kt:467)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock$default(ReactActivityDelegateWrapper.kt:463)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.onWindowFocusChanged(ReactActivityDelegateWrapper.kt:320)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at com.facebook.react.ReactActivity.onWindowFocusChanged(ReactActivity.java:161)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at androidx.appcompat.view.WindowCallbackWrapper.onWindowFocusChanged(WindowCallbackWrapper.java:124)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at expo.modules.devmenu.detectors.InterceptingWindowCallback.onWindowFocusChanged(Unknown Source:2)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at com.android.internal.policy.DecorView.onWindowFocusChanged(DecorView.java:1818)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at android.view.View.dispatchWindowFocusChanged(View.java:16952)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at android.view.ViewGroup.dispatchWindowFocusChanged(ViewGroup.java:1530)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at android.view.ViewRootImpl.dispatchFocusEvent(ViewRootImpl.java:4873)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at android.view.ViewRootImpl.handleWindowFocusChanged(ViewRootImpl.java:4777)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at android.view.ViewRootImpl.-$$Nest$mhandleWindowFocusChanged(Unknown Source:0)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessageImpl(ViewRootImpl.java:7017)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessage(ViewRootImpl.java:6927)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at android.os.Handler.dispatchMessage(Handler.java:110)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at android.os.Looper.loopOnce(Looper.java:248)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at android.os.Looper.loop(Looper.java:338)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at android.app.ActivityThread.main(ActivityThread.java:9067)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at java.lang.reflect.Method.invoke(Native Method)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:593)
10-25 18:43:44.563  3371  3371 E unknown:ReactHost: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:932)
10-25 18:43:44.704  3371  3581 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 18:43:44.706  3371  3579 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 18:43:44.714  3371  3371 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@4251fe4
10-25 18:43:44.720  3371  3579 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 18:43:45.569  3371  3579 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 18:43:45.570  3371  3579 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 18:43:45.580  3371  3371 W unknown:ReactNative: Packager connection already open, nooping.
10-25 18:43:45.580  3371  3579 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 18:43:45.590  3371  3371 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 18:43:45.598  3371  3371 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 18:43:45.885  3371  3587 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 18:43:46.098  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 18:43:46.104  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 18:43:46.106  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 18:43:46.107  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 18:43:46.114  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 18:43:46.115  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 18:43:46.117  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 18:43:46.120  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 18:43:46.127  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 18:43:46.127  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 18:43:46.131  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 18:43:46.137  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 18:43:46.140  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 18:43:46.141  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 18:43:46.142  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 18:43:46.142  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 18:43:46.143  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 18:43:46.143  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 18:43:46.144  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 18:43:46.146  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 18:43:46.146  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 18:43:46.147  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 18:43:46.148  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 18:43:46.149  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 18:43:46.149  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 18:43:46.151  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 18:43:46.337  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 18:43:46.342  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 18:43:46.346  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 18:43:46.348  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 18:43:46.350  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 18:43:46.353  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 18:43:46.356  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 18:43:46.360  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 18:43:46.364  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 18:43:46.366  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 18:43:46.368  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 18:43:46.373  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 18:43:46.375  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 18:43:46.378  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 18:43:46.382  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 18:43:46.384  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 18:43:46.389  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 18:43:46.392  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 18:43:46.394  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 18:43:46.397  3371  3587 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 18:43:46.461  3371  3588 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 18:43:47.329  3371  3587 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 18:43:47.525  3371  3587 W HWUI    : Image decoding logging dropped!
10-25 18:43:47.526  3371  3587 W HWUI    : Image decoding logging dropped!
10-25 18:44:49.768  3371  3399 W nslationtest.rn: Cleared Reference was only reachable from finalizer (only reported once)
10-25 18:46:31.843  3371  3371 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@6f4d961
10-25 18:46:55.918  3371  3371 W InteractionJankMonitor: Initializing without READ_DEVICE_CONFIG permission. enabled=false, interval=1, missedFrameThreshold=3, frameTimeThreshold=64, package=dev.translationtest.rn
10-25 18:47:12.402  3371  3371 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@d97f329

migration/evidence/RN07/g-settings1b/0959-G08-window-entry-logcat.stdout.log
10-25 18:48:07.727  5456  5456 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 18:48:07.727  5456  5456 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 18:48:08.918  5456  5456 W SoLoader: Initializing SoLoader: 0
10-25 18:48:08.923  5456  5456 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 18:48:08.923  5456  5456 W SoLoader: Previously recorded 0 base apk paths.
10-25 18:48:08.962  5456  5456 W SoLoader: SoLoader initialized: 8
10-25 18:48:10.144  5456  5497 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 18:48:10.236  5456  5456 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 18:48:10.434  5456  5456 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:48:10.434  5456  5456 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:48:10.456  5456  5456 W HWUI    : Unknown dataspace 0
10-25 18:48:11.604  5456  5456 W HWUI    : Image decoding logging dropped!
10-25 18:48:11.607  5456  5456 W HWUI    : Image decoding logging dropped!
10-25 18:48:11.609  5456  5456 W HWUI    : Image decoding logging dropped!
10-25 18:48:13.048  5456  5456 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@2be1036
10-25 18:48:15.634  5456  5456 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:48:15.637  5456  5456 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:48:15.637  5456  5456 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:48:22.775  5456  5456 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 18:48:22.775  5456  5456 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 18:48:22.779  5456  5560 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 18:48:22.779  5456  5560 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 18:48:22.779  5456  5560 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 18:48:22.779  5456  5560 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 18:48:22.805  5456  5456 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:48:22.805  5456  5456 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:48:22.806  5456  5456 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 18:48:22.857  5456  5555 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 18:48:22.858  5456  5560 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 18:48:23.201  5456  5456 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@aa0d648
10-25 18:48:23.283  5456  5456 W unknown:BridgelessReact: ReactHost{0}.raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: Unhandled SoftException
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: com.facebook.react.bridge.ReactNoCrashSoftException: raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException(ReactHostImpl.kt:906)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException$default(ReactHostImpl.kt:897)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.onWindowFocusChange(ReactHostImpl.kt:679)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at com.facebook.react.ReactDelegate.onWindowFocusChanged(ReactDelegate.kt:226)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at com.facebook.react.ReactActivityDelegate.onWindowFocusChanged(ReactActivityDelegate.java:237)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invokeSuspend(ReactActivityDelegateWrapper.kt:322)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:8)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:4)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$launchLifecycleScopeWithLock$1.invokeSuspend(ReactActivityDelegateWrapper.kt:469)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:34)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at kotlinx.coroutines.internal.DispatchedContinuationKt.resumeCancellableWith(DispatchedContinuation.kt:375)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:26)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at kotlinx.coroutines.CoroutineStart.invoke(CoroutineStart.kt:358)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at kotlinx.coroutines.AbstractCoroutine.start(AbstractCoroutine.kt:134)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch(Builders.common.kt:53)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch(Unknown Source:1)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch$default(Builders.common.kt:44)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch$default(Unknown Source:1)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock(ReactActivityDelegateWrapper.kt:467)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock$default(ReactActivityDelegateWrapper.kt:463)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.onWindowFocusChanged(ReactActivityDelegateWrapper.kt:320)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at com.facebook.react.ReactActivity.onWindowFocusChanged(ReactActivity.java:161)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at androidx.appcompat.view.WindowCallbackWrapper.onWindowFocusChanged(WindowCallbackWrapper.java:124)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at expo.modules.devmenu.detectors.InterceptingWindowCallback.onWindowFocusChanged(Unknown Source:2)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at com.android.internal.policy.DecorView.onWindowFocusChanged(DecorView.java:1818)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at android.view.View.dispatchWindowFocusChanged(View.java:16952)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at android.view.ViewGroup.dispatchWindowFocusChanged(ViewGroup.java:1530)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at android.view.ViewRootImpl.dispatchFocusEvent(ViewRootImpl.java:4873)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at android.view.ViewRootImpl.handleWindowFocusChanged(ViewRootImpl.java:4777)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at android.view.ViewRootImpl.-$$Nest$mhandleWindowFocusChanged(Unknown Source:0)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessageImpl(ViewRootImpl.java:7017)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessage(ViewRootImpl.java:6927)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at android.os.Handler.dispatchMessage(Handler.java:110)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at android.os.Looper.loopOnce(Looper.java:248)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at android.os.Looper.loop(Looper.java:338)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at android.app.ActivityThread.main(ActivityThread.java:9067)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at java.lang.reflect.Method.invoke(Native Method)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:593)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:932)
10-25 18:48:23.429  5456  5562 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 18:48:23.433  5456  5560 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 18:48:23.437  5456  5456 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@2f1ee6f
10-25 18:48:23.443  5456  5560 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 18:48:24.316  5456  5560 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 18:48:24.317  5456  5560 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 18:48:24.326  5456  5456 W unknown:ReactNative: Packager connection already open, nooping.
10-25 18:48:24.326  5456  5456 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 18:48:24.326  5456  5560 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 18:48:24.328  5456  5456 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 18:48:24.632  5456  5568 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 18:48:24.837  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 18:48:24.839  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 18:48:24.841  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 18:48:24.843  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 18:48:24.847  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 18:48:24.847  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 18:48:24.849  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 18:48:24.851  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 18:48:24.855  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 18:48:24.856  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 18:48:24.856  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 18:48:24.859  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 18:48:24.862  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 18:48:24.863  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 18:48:24.864  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 18:48:24.865  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 18:48:24.865  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 18:48:24.865  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 18:48:24.866  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 18:48:24.867  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 18:48:24.868  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 18:48:24.869  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 18:48:24.870  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 18:48:24.871  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 18:48:24.871  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 18:48:24.873  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 18:48:25.094  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 18:48:25.101  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 18:48:25.106  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 18:48:25.109  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 18:48:25.112  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 18:48:25.114  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 18:48:25.118  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 18:48:25.129  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 18:48:25.137  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 18:48:25.140  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 18:48:25.145  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 18:48:25.151  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 18:48:25.154  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 18:48:25.157  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 18:48:25.160  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 18:48:25.163  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 18:48:25.168  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 18:48:25.171  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 18:48:25.173  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 18:48:25.177  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 18:48:25.234  5456  5569 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 18:48:26.120  5456  5568 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 18:48:26.342  5456  5568 W HWUI    : Image decoding logging dropped!
10-25 18:48:26.342  5456  5568 W HWUI    : Image decoding logging dropped!

migration/evidence/RN07/g-settings1b/1054-G08-window-end-logcat.stdout.log
10-25 18:48:07.727  5456  5456 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 18:48:07.727  5456  5456 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 18:48:08.918  5456  5456 W SoLoader: Initializing SoLoader: 0
10-25 18:48:08.923  5456  5456 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 18:48:08.923  5456  5456 W SoLoader: Previously recorded 0 base apk paths.
10-25 18:48:08.962  5456  5456 W SoLoader: SoLoader initialized: 8
10-25 18:48:10.144  5456  5497 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 18:48:10.236  5456  5456 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 18:48:10.434  5456  5456 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:48:10.434  5456  5456 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:48:10.456  5456  5456 W HWUI    : Unknown dataspace 0
10-25 18:48:11.604  5456  5456 W HWUI    : Image decoding logging dropped!
10-25 18:48:11.607  5456  5456 W HWUI    : Image decoding logging dropped!
10-25 18:48:11.609  5456  5456 W HWUI    : Image decoding logging dropped!
10-25 18:48:13.048  5456  5456 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@2be1036
10-25 18:48:15.634  5456  5456 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:48:15.637  5456  5456 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:48:15.637  5456  5456 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:48:22.775  5456  5456 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 18:48:22.775  5456  5456 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 18:48:22.779  5456  5560 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 18:48:22.779  5456  5560 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 18:48:22.779  5456  5560 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 18:48:22.779  5456  5560 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 18:48:22.805  5456  5456 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:48:22.805  5456  5456 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:48:22.806  5456  5456 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 18:48:22.857  5456  5555 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 18:48:22.858  5456  5560 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 18:48:23.201  5456  5456 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@aa0d648
10-25 18:48:23.283  5456  5456 W unknown:BridgelessReact: ReactHost{0}.raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: Unhandled SoftException
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: com.facebook.react.bridge.ReactNoCrashSoftException: raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException(ReactHostImpl.kt:906)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException$default(ReactHostImpl.kt:897)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.onWindowFocusChange(ReactHostImpl.kt:679)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at com.facebook.react.ReactDelegate.onWindowFocusChanged(ReactDelegate.kt:226)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at com.facebook.react.ReactActivityDelegate.onWindowFocusChanged(ReactActivityDelegate.java:237)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invokeSuspend(ReactActivityDelegateWrapper.kt:322)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:8)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:4)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$launchLifecycleScopeWithLock$1.invokeSuspend(ReactActivityDelegateWrapper.kt:469)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:34)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at kotlinx.coroutines.internal.DispatchedContinuationKt.resumeCancellableWith(DispatchedContinuation.kt:375)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:26)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at kotlinx.coroutines.CoroutineStart.invoke(CoroutineStart.kt:358)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at kotlinx.coroutines.AbstractCoroutine.start(AbstractCoroutine.kt:134)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch(Builders.common.kt:53)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch(Unknown Source:1)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch$default(Builders.common.kt:44)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch$default(Unknown Source:1)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock(ReactActivityDelegateWrapper.kt:467)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock$default(ReactActivityDelegateWrapper.kt:463)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.onWindowFocusChanged(ReactActivityDelegateWrapper.kt:320)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at com.facebook.react.ReactActivity.onWindowFocusChanged(ReactActivity.java:161)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at androidx.appcompat.view.WindowCallbackWrapper.onWindowFocusChanged(WindowCallbackWrapper.java:124)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at expo.modules.devmenu.detectors.InterceptingWindowCallback.onWindowFocusChanged(Unknown Source:2)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at com.android.internal.policy.DecorView.onWindowFocusChanged(DecorView.java:1818)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at android.view.View.dispatchWindowFocusChanged(View.java:16952)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at android.view.ViewGroup.dispatchWindowFocusChanged(ViewGroup.java:1530)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at android.view.ViewRootImpl.dispatchFocusEvent(ViewRootImpl.java:4873)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at android.view.ViewRootImpl.handleWindowFocusChanged(ViewRootImpl.java:4777)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at android.view.ViewRootImpl.-$$Nest$mhandleWindowFocusChanged(Unknown Source:0)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessageImpl(ViewRootImpl.java:7017)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessage(ViewRootImpl.java:6927)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at android.os.Handler.dispatchMessage(Handler.java:110)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at android.os.Looper.loopOnce(Looper.java:248)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at android.os.Looper.loop(Looper.java:338)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at android.app.ActivityThread.main(ActivityThread.java:9067)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at java.lang.reflect.Method.invoke(Native Method)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:593)
10-25 18:48:23.288  5456  5456 E unknown:ReactHost: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:932)
10-25 18:48:23.429  5456  5562 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 18:48:23.433  5456  5560 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 18:48:23.437  5456  5456 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@2f1ee6f
10-25 18:48:23.443  5456  5560 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 18:48:24.316  5456  5560 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 18:48:24.317  5456  5560 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 18:48:24.326  5456  5456 W unknown:ReactNative: Packager connection already open, nooping.
10-25 18:48:24.326  5456  5456 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 18:48:24.326  5456  5560 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 18:48:24.328  5456  5456 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 18:48:24.632  5456  5568 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 18:48:24.837  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 18:48:24.839  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 18:48:24.841  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 18:48:24.843  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 18:48:24.847  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 18:48:24.847  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 18:48:24.849  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 18:48:24.851  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 18:48:24.855  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 18:48:24.856  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 18:48:24.856  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 18:48:24.859  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 18:48:24.862  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 18:48:24.863  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 18:48:24.864  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 18:48:24.865  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 18:48:24.865  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 18:48:24.865  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 18:48:24.866  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 18:48:24.867  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 18:48:24.868  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 18:48:24.869  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 18:48:24.870  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 18:48:24.871  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 18:48:24.871  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 18:48:24.873  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 18:48:25.094  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 18:48:25.101  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 18:48:25.106  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 18:48:25.109  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 18:48:25.112  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 18:48:25.114  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 18:48:25.118  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 18:48:25.129  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 18:48:25.137  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 18:48:25.140  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 18:48:25.145  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 18:48:25.151  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 18:48:25.154  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 18:48:25.157  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 18:48:25.160  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 18:48:25.163  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 18:48:25.168  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 18:48:25.171  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 18:48:25.173  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 18:48:25.177  5456  5568 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 18:48:25.234  5456  5569 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 18:48:26.120  5456  5568 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 18:48:26.342  5456  5568 W HWUI    : Image decoding logging dropped!
10-25 18:48:26.342  5456  5568 W HWUI    : Image decoding logging dropped!
10-25 18:49:08.930  5456  5456 W InteractionJankMonitor: Initializing without READ_DEVICE_CONFIG permission. enabled=false, interval=1, missedFrameThreshold=3, frameTimeThreshold=64, package=dev.translationtest.rn
10-25 18:49:25.381  5456  5456 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@76ef7eb
10-25 18:49:39.130  5456  5461 W nslationtest.rn: Cleared Reference was only reachable from finalizer (only reported once)

migration/evidence/RN07/g-settings1b/1084-G08.full-list-window-entry-logcat.stdout.log
10-25 18:53:14.003  7074  7074 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 18:53:14.003  7074  7074 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 18:53:14.672  7074  7074 W SoLoader: Initializing SoLoader: 0
10-25 18:53:14.677  7074  7074 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 18:53:14.677  7074  7074 W SoLoader: Previously recorded 0 base apk paths.
10-25 18:53:14.717  7074  7074 W SoLoader: SoLoader initialized: 8
10-25 18:53:15.775  7074  7103 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 18:53:15.890  7074  7074 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 18:53:16.173  7074  7074 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:53:16.173  7074  7074 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:53:16.230  7074  7074 W HWUI    : Unknown dataspace 0
10-25 18:53:17.561  7074  7074 W HWUI    : Image decoding logging dropped!
10-25 18:53:17.563  7074  7074 W HWUI    : Image decoding logging dropped!
10-25 18:53:17.567  7074  7074 W HWUI    : Image decoding logging dropped!
10-25 18:53:18.816  7074  7074 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@55b9dd1
10-25 18:53:21.965  7074  7074 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:53:21.970  7074  7074 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:53:21.970  7074  7074 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:53:28.949  7074  7074 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 18:53:28.950  7074  7074 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 18:53:28.950  7074  7209 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 18:53:28.951  7074  7209 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 18:53:28.951  7074  7209 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 18:53:28.951  7074  7209 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 18:53:28.974  7074  7074 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:53:28.974  7074  7074 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:53:28.975  7074  7074 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 18:53:29.036  7074  7144 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 18:53:29.036  7074  7209 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 18:53:29.448  7074  7074 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@d181130
10-25 18:53:29.558  7074  7074 W unknown:BridgelessReact: ReactHost{0}.raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: Unhandled SoftException
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: com.facebook.react.bridge.ReactNoCrashSoftException: raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException(ReactHostImpl.kt:906)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException$default(ReactHostImpl.kt:897)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.onWindowFocusChange(ReactHostImpl.kt:679)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at com.facebook.react.ReactDelegate.onWindowFocusChanged(ReactDelegate.kt:226)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at com.facebook.react.ReactActivityDelegate.onWindowFocusChanged(ReactActivityDelegate.java:237)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invokeSuspend(ReactActivityDelegateWrapper.kt:322)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:8)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:4)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$launchLifecycleScopeWithLock$1.invokeSuspend(ReactActivityDelegateWrapper.kt:469)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:34)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at kotlinx.coroutines.internal.DispatchedContinuationKt.resumeCancellableWith(DispatchedContinuation.kt:375)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:26)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at kotlinx.coroutines.CoroutineStart.invoke(CoroutineStart.kt:358)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at kotlinx.coroutines.AbstractCoroutine.start(AbstractCoroutine.kt:134)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch(Builders.common.kt:53)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch(Unknown Source:1)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch$default(Builders.common.kt:44)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch$default(Unknown Source:1)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock(ReactActivityDelegateWrapper.kt:467)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock$default(ReactActivityDelegateWrapper.kt:463)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.onWindowFocusChanged(ReactActivityDelegateWrapper.kt:320)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at com.facebook.react.ReactActivity.onWindowFocusChanged(ReactActivity.java:161)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at androidx.appcompat.view.WindowCallbackWrapper.onWindowFocusChanged(WindowCallbackWrapper.java:124)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at expo.modules.devmenu.detectors.InterceptingWindowCallback.onWindowFocusChanged(Unknown Source:2)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at com.android.internal.policy.DecorView.onWindowFocusChanged(DecorView.java:1818)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at android.view.View.dispatchWindowFocusChanged(View.java:16952)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at android.view.ViewGroup.dispatchWindowFocusChanged(ViewGroup.java:1530)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at android.view.ViewRootImpl.dispatchFocusEvent(ViewRootImpl.java:4873)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at android.view.ViewRootImpl.handleWindowFocusChanged(ViewRootImpl.java:4777)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at android.view.ViewRootImpl.-$$Nest$mhandleWindowFocusChanged(Unknown Source:0)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessageImpl(ViewRootImpl.java:7017)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessage(ViewRootImpl.java:6927)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at android.os.Handler.dispatchMessage(Handler.java:110)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at android.os.Looper.loopOnce(Looper.java:248)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at android.os.Looper.loop(Looper.java:338)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at android.app.ActivityThread.main(ActivityThread.java:9067)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at java.lang.reflect.Method.invoke(Native Method)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:593)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:932)
10-25 18:53:29.619  7074  7211 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 18:53:29.628  7074  7209 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 18:53:29.631  7074  7074 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@b032413
10-25 18:53:29.639  7074  7209 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 18:53:30.421  7074  7209 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 18:53:30.422  7074  7209 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 18:53:30.426  7074  7074 W unknown:ReactNative: Packager connection already open, nooping.
10-25 18:53:30.427  7074  7209 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 18:53:30.427  7074  7074 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 18:53:30.435  7074  7074 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 18:53:30.709  7074  7217 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 18:53:30.911  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 18:53:30.914  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 18:53:30.916  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 18:53:30.918  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 18:53:30.921  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 18:53:30.922  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 18:53:30.923  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 18:53:30.925  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 18:53:30.929  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 18:53:30.930  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 18:53:30.931  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 18:53:30.933  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 18:53:30.937  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 18:53:30.938  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 18:53:30.939  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 18:53:30.940  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 18:53:30.941  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 18:53:30.941  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 18:53:30.942  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 18:53:30.945  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 18:53:30.946  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 18:53:30.946  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 18:53:30.948  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 18:53:30.949  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 18:53:30.950  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 18:53:30.952  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 18:53:31.160  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 18:53:31.166  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 18:53:31.170  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 18:53:31.174  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 18:53:31.178  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 18:53:31.180  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 18:53:31.185  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 18:53:31.189  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 18:53:31.193  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 18:53:31.196  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 18:53:31.199  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 18:53:31.202  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 18:53:31.204  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 18:53:31.207  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 18:53:31.212  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 18:53:31.215  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 18:53:31.219  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 18:53:31.222  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 18:53:31.224  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 18:53:31.227  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 18:53:31.283  7074  7218 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 18:53:32.264  7074  7217 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 18:53:32.465  7074  7217 W HWUI    : Image decoding logging dropped!
10-25 18:53:32.466  7074  7217 W HWUI    : Image decoding logging dropped!

migration/evidence/RN07/g-settings1b/1114-G08.full-list-window-end-logcat.stdout.log
10-25 18:53:14.003  7074  7074 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 18:53:14.003  7074  7074 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 18:53:14.672  7074  7074 W SoLoader: Initializing SoLoader: 0
10-25 18:53:14.677  7074  7074 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 18:53:14.677  7074  7074 W SoLoader: Previously recorded 0 base apk paths.
10-25 18:53:14.717  7074  7074 W SoLoader: SoLoader initialized: 8
10-25 18:53:15.775  7074  7103 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 18:53:15.890  7074  7074 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 18:53:16.173  7074  7074 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:53:16.173  7074  7074 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:53:16.230  7074  7074 W HWUI    : Unknown dataspace 0
10-25 18:53:17.561  7074  7074 W HWUI    : Image decoding logging dropped!
10-25 18:53:17.563  7074  7074 W HWUI    : Image decoding logging dropped!
10-25 18:53:17.567  7074  7074 W HWUI    : Image decoding logging dropped!
10-25 18:53:18.816  7074  7074 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@55b9dd1
10-25 18:53:21.965  7074  7074 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:53:21.970  7074  7074 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:53:21.970  7074  7074 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:53:28.949  7074  7074 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 18:53:28.950  7074  7074 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 18:53:28.950  7074  7209 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 18:53:28.951  7074  7209 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 18:53:28.951  7074  7209 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 18:53:28.951  7074  7209 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 18:53:28.974  7074  7074 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:53:28.974  7074  7074 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:53:28.975  7074  7074 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 18:53:29.036  7074  7144 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 18:53:29.036  7074  7209 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 18:53:29.448  7074  7074 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@d181130
10-25 18:53:29.558  7074  7074 W unknown:BridgelessReact: ReactHost{0}.raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: Unhandled SoftException
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: com.facebook.react.bridge.ReactNoCrashSoftException: raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException(ReactHostImpl.kt:906)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException$default(ReactHostImpl.kt:897)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.onWindowFocusChange(ReactHostImpl.kt:679)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at com.facebook.react.ReactDelegate.onWindowFocusChanged(ReactDelegate.kt:226)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at com.facebook.react.ReactActivityDelegate.onWindowFocusChanged(ReactActivityDelegate.java:237)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invokeSuspend(ReactActivityDelegateWrapper.kt:322)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:8)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:4)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$launchLifecycleScopeWithLock$1.invokeSuspend(ReactActivityDelegateWrapper.kt:469)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:34)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at kotlinx.coroutines.internal.DispatchedContinuationKt.resumeCancellableWith(DispatchedContinuation.kt:375)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:26)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at kotlinx.coroutines.CoroutineStart.invoke(CoroutineStart.kt:358)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at kotlinx.coroutines.AbstractCoroutine.start(AbstractCoroutine.kt:134)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch(Builders.common.kt:53)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch(Unknown Source:1)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch$default(Builders.common.kt:44)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch$default(Unknown Source:1)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock(ReactActivityDelegateWrapper.kt:467)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock$default(ReactActivityDelegateWrapper.kt:463)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.onWindowFocusChanged(ReactActivityDelegateWrapper.kt:320)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at com.facebook.react.ReactActivity.onWindowFocusChanged(ReactActivity.java:161)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at androidx.appcompat.view.WindowCallbackWrapper.onWindowFocusChanged(WindowCallbackWrapper.java:124)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at expo.modules.devmenu.detectors.InterceptingWindowCallback.onWindowFocusChanged(Unknown Source:2)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at com.android.internal.policy.DecorView.onWindowFocusChanged(DecorView.java:1818)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at android.view.View.dispatchWindowFocusChanged(View.java:16952)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at android.view.ViewGroup.dispatchWindowFocusChanged(ViewGroup.java:1530)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at android.view.ViewRootImpl.dispatchFocusEvent(ViewRootImpl.java:4873)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at android.view.ViewRootImpl.handleWindowFocusChanged(ViewRootImpl.java:4777)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at android.view.ViewRootImpl.-$$Nest$mhandleWindowFocusChanged(Unknown Source:0)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessageImpl(ViewRootImpl.java:7017)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessage(ViewRootImpl.java:6927)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at android.os.Handler.dispatchMessage(Handler.java:110)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at android.os.Looper.loopOnce(Looper.java:248)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at android.os.Looper.loop(Looper.java:338)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at android.app.ActivityThread.main(ActivityThread.java:9067)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at java.lang.reflect.Method.invoke(Native Method)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:593)
10-25 18:53:29.563  7074  7074 E unknown:ReactHost: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:932)
10-25 18:53:29.619  7074  7211 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 18:53:29.628  7074  7209 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 18:53:29.631  7074  7074 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@b032413
10-25 18:53:29.639  7074  7209 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 18:53:30.421  7074  7209 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 18:53:30.422  7074  7209 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 18:53:30.426  7074  7074 W unknown:ReactNative: Packager connection already open, nooping.
10-25 18:53:30.427  7074  7209 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 18:53:30.427  7074  7074 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 18:53:30.435  7074  7074 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 18:53:30.709  7074  7217 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 18:53:30.911  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 18:53:30.914  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 18:53:30.916  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 18:53:30.918  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 18:53:30.921  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 18:53:30.922  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 18:53:30.923  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 18:53:30.925  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 18:53:30.929  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 18:53:30.930  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 18:53:30.931  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 18:53:30.933  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 18:53:30.937  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 18:53:30.938  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 18:53:30.939  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 18:53:30.940  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 18:53:30.941  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 18:53:30.941  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 18:53:30.942  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 18:53:30.945  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 18:53:30.946  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 18:53:30.946  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 18:53:30.948  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 18:53:30.949  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 18:53:30.950  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 18:53:30.952  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 18:53:31.160  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 18:53:31.166  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 18:53:31.170  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 18:53:31.174  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 18:53:31.178  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 18:53:31.180  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 18:53:31.185  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 18:53:31.189  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 18:53:31.193  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 18:53:31.196  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 18:53:31.199  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 18:53:31.202  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 18:53:31.204  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 18:53:31.207  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 18:53:31.212  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 18:53:31.215  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 18:53:31.219  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 18:53:31.222  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 18:53:31.224  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 18:53:31.227  7074  7217 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 18:53:31.283  7074  7218 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 18:53:32.264  7074  7217 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 18:53:32.465  7074  7217 W HWUI    : Image decoding logging dropped!
10-25 18:53:32.466  7074  7217 W HWUI    : Image decoding logging dropped!
10-25 18:54:40.574  7074  7080 W nslationtest.rn: Cleared Reference was only reachable from finalizer (only reported once)

migration/evidence/RN07/g-settings1b/1144-G09-window-entry-logcat.stdout.log
10-25 18:55:07.359  7776  7776 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 18:55:07.359  7776  7776 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 18:55:08.510  7776  7776 W SoLoader: Initializing SoLoader: 0
10-25 18:55:08.514  7776  7776 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 18:55:08.514  7776  7776 W SoLoader: Previously recorded 0 base apk paths.
10-25 18:55:08.547  7776  7776 W SoLoader: SoLoader initialized: 8
10-25 18:55:09.710  7776  7817 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 18:55:09.754  7776  7776 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 18:55:09.854  7776  7776 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:55:09.854  7776  7776 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:55:09.886  7776  7776 W HWUI    : Unknown dataspace 0
10-25 18:55:10.882  7776  7776 W HWUI    : Image decoding logging dropped!
10-25 18:55:10.884  7776  7776 W HWUI    : Image decoding logging dropped!
10-25 18:55:10.886  7776  7776 W HWUI    : Image decoding logging dropped!
10-25 18:55:12.199  7776  7776 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@2be1036
10-25 18:55:15.085  7776  7776 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:55:15.088  7776  7776 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:55:15.088  7776  7776 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:55:22.188  7776  7776 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 18:55:22.188  7776  7776 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 18:55:22.190  7776  7879 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 18:55:22.190  7776  7879 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 18:55:22.190  7776  7879 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 18:55:22.190  7776  7879 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 18:55:22.222  7776  7776 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:55:22.222  7776  7776 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:55:22.223  7776  7776 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 18:55:22.288  7776  7826 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 18:55:22.288  7776  7879 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 18:55:22.659  7776  7776 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@aa0d648
10-25 18:55:22.723  7776  7776 W unknown:BridgelessReact: ReactHost{0}.raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: Unhandled SoftException
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: com.facebook.react.bridge.ReactNoCrashSoftException: raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException(ReactHostImpl.kt:906)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException$default(ReactHostImpl.kt:897)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.onWindowFocusChange(ReactHostImpl.kt:679)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at com.facebook.react.ReactDelegate.onWindowFocusChanged(ReactDelegate.kt:226)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at com.facebook.react.ReactActivityDelegate.onWindowFocusChanged(ReactActivityDelegate.java:237)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invokeSuspend(ReactActivityDelegateWrapper.kt:322)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:8)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:4)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$launchLifecycleScopeWithLock$1.invokeSuspend(ReactActivityDelegateWrapper.kt:469)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:34)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at kotlinx.coroutines.internal.DispatchedContinuationKt.resumeCancellableWith(DispatchedContinuation.kt:375)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:26)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at kotlinx.coroutines.CoroutineStart.invoke(CoroutineStart.kt:358)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at kotlinx.coroutines.AbstractCoroutine.start(AbstractCoroutine.kt:134)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch(Builders.common.kt:53)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch(Unknown Source:1)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch$default(Builders.common.kt:44)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch$default(Unknown Source:1)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock(ReactActivityDelegateWrapper.kt:467)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock$default(ReactActivityDelegateWrapper.kt:463)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.onWindowFocusChanged(ReactActivityDelegateWrapper.kt:320)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at com.facebook.react.ReactActivity.onWindowFocusChanged(ReactActivity.java:161)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at androidx.appcompat.view.WindowCallbackWrapper.onWindowFocusChanged(WindowCallbackWrapper.java:124)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at expo.modules.devmenu.detectors.InterceptingWindowCallback.onWindowFocusChanged(Unknown Source:2)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at com.android.internal.policy.DecorView.onWindowFocusChanged(DecorView.java:1818)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at android.view.View.dispatchWindowFocusChanged(View.java:16952)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at android.view.ViewGroup.dispatchWindowFocusChanged(ViewGroup.java:1530)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at android.view.ViewRootImpl.dispatchFocusEvent(ViewRootImpl.java:4873)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at android.view.ViewRootImpl.handleWindowFocusChanged(ViewRootImpl.java:4777)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at android.view.ViewRootImpl.-$$Nest$mhandleWindowFocusChanged(Unknown Source:0)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessageImpl(ViewRootImpl.java:7017)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessage(ViewRootImpl.java:6927)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at android.os.Handler.dispatchMessage(Handler.java:110)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at android.os.Looper.loopOnce(Looper.java:248)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at android.os.Looper.loop(Looper.java:338)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at android.app.ActivityThread.main(ActivityThread.java:9067)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at java.lang.reflect.Method.invoke(Native Method)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:593)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:932)
10-25 18:55:22.777  7776  7881 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 18:55:22.788  7776  7879 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 18:55:22.801  7776  7879 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 18:55:22.818  7776  7776 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@82877c
10-25 18:55:23.651  7776  7879 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 18:55:23.652  7776  7879 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 18:55:23.660  7776  7776 W unknown:ReactNative: Packager connection already open, nooping.
10-25 18:55:23.660  7776  7879 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 18:55:23.661  7776  7776 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 18:55:23.665  7776  7776 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 18:55:23.903  7776  7884 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 18:55:24.086  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 18:55:24.089  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 18:55:24.090  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 18:55:24.092  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 18:55:24.096  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 18:55:24.097  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 18:55:24.098  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 18:55:24.100  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 18:55:24.103  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 18:55:24.104  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 18:55:24.105  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 18:55:24.106  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 18:55:24.109  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 18:55:24.110  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 18:55:24.110  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 18:55:24.111  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 18:55:24.112  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 18:55:24.112  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 18:55:24.113  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 18:55:24.115  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 18:55:24.115  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 18:55:24.116  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 18:55:24.117  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 18:55:24.118  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 18:55:24.118  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 18:55:24.120  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 18:55:24.323  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 18:55:24.331  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 18:55:24.335  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 18:55:24.338  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 18:55:24.340  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 18:55:24.343  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 18:55:24.347  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 18:55:24.354  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 18:55:24.364  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 18:55:24.367  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 18:55:24.370  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 18:55:24.375  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 18:55:24.377  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 18:55:24.382  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 18:55:24.386  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 18:55:24.393  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 18:55:24.403  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 18:55:24.407  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 18:55:24.410  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 18:55:24.413  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 18:55:24.469  7776  7885 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 18:55:25.158  7776  7884 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 18:55:25.318  7776  7884 W HWUI    : Image decoding logging dropped!
10-25 18:55:25.318  7776  7884 W HWUI    : Image decoding logging dropped!

migration/evidence/RN07/g-settings1b/1253-G09-window-end-logcat.stdout.log
10-25 18:55:07.359  7776  7776 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 18:55:07.359  7776  7776 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 18:55:08.510  7776  7776 W SoLoader: Initializing SoLoader: 0
10-25 18:55:08.514  7776  7776 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 18:55:08.514  7776  7776 W SoLoader: Previously recorded 0 base apk paths.
10-25 18:55:08.547  7776  7776 W SoLoader: SoLoader initialized: 8
10-25 18:55:09.710  7776  7817 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 18:55:09.754  7776  7776 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 18:55:09.854  7776  7776 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:55:09.854  7776  7776 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:55:09.886  7776  7776 W HWUI    : Unknown dataspace 0
10-25 18:55:10.882  7776  7776 W HWUI    : Image decoding logging dropped!
10-25 18:55:10.884  7776  7776 W HWUI    : Image decoding logging dropped!
10-25 18:55:10.886  7776  7776 W HWUI    : Image decoding logging dropped!
10-25 18:55:12.199  7776  7776 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@2be1036
10-25 18:55:15.085  7776  7776 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:55:15.088  7776  7776 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:55:15.088  7776  7776 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 18:55:22.188  7776  7776 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 18:55:22.188  7776  7776 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 18:55:22.190  7776  7879 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 18:55:22.190  7776  7879 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 18:55:22.190  7776  7879 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 18:55:22.190  7776  7879 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 18:55:22.222  7776  7776 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:55:22.222  7776  7776 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:55:22.223  7776  7776 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 18:55:22.288  7776  7826 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 18:55:22.288  7776  7879 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 18:55:22.659  7776  7776 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@aa0d648
10-25 18:55:22.723  7776  7776 W unknown:BridgelessReact: ReactHost{0}.raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: Unhandled SoftException
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: com.facebook.react.bridge.ReactNoCrashSoftException: raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException(ReactHostImpl.kt:906)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException$default(ReactHostImpl.kt:897)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.onWindowFocusChange(ReactHostImpl.kt:679)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at com.facebook.react.ReactDelegate.onWindowFocusChanged(ReactDelegate.kt:226)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at com.facebook.react.ReactActivityDelegate.onWindowFocusChanged(ReactActivityDelegate.java:237)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invokeSuspend(ReactActivityDelegateWrapper.kt:322)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:8)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:4)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$launchLifecycleScopeWithLock$1.invokeSuspend(ReactActivityDelegateWrapper.kt:469)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:34)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at kotlinx.coroutines.internal.DispatchedContinuationKt.resumeCancellableWith(DispatchedContinuation.kt:375)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:26)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at kotlinx.coroutines.CoroutineStart.invoke(CoroutineStart.kt:358)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at kotlinx.coroutines.AbstractCoroutine.start(AbstractCoroutine.kt:134)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch(Builders.common.kt:53)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch(Unknown Source:1)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch$default(Builders.common.kt:44)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch$default(Unknown Source:1)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock(ReactActivityDelegateWrapper.kt:467)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock$default(ReactActivityDelegateWrapper.kt:463)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.onWindowFocusChanged(ReactActivityDelegateWrapper.kt:320)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at com.facebook.react.ReactActivity.onWindowFocusChanged(ReactActivity.java:161)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at androidx.appcompat.view.WindowCallbackWrapper.onWindowFocusChanged(WindowCallbackWrapper.java:124)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at expo.modules.devmenu.detectors.InterceptingWindowCallback.onWindowFocusChanged(Unknown Source:2)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at com.android.internal.policy.DecorView.onWindowFocusChanged(DecorView.java:1818)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at android.view.View.dispatchWindowFocusChanged(View.java:16952)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at android.view.ViewGroup.dispatchWindowFocusChanged(ViewGroup.java:1530)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at android.view.ViewRootImpl.dispatchFocusEvent(ViewRootImpl.java:4873)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at android.view.ViewRootImpl.handleWindowFocusChanged(ViewRootImpl.java:4777)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at android.view.ViewRootImpl.-$$Nest$mhandleWindowFocusChanged(Unknown Source:0)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessageImpl(ViewRootImpl.java:7017)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessage(ViewRootImpl.java:6927)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at android.os.Handler.dispatchMessage(Handler.java:110)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at android.os.Looper.loopOnce(Looper.java:248)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at android.os.Looper.loop(Looper.java:338)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at android.app.ActivityThread.main(ActivityThread.java:9067)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at java.lang.reflect.Method.invoke(Native Method)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:593)
10-25 18:55:22.726  7776  7776 E unknown:ReactHost: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:932)
10-25 18:55:22.777  7776  7881 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 18:55:22.788  7776  7879 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 18:55:22.801  7776  7879 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 18:55:22.818  7776  7776 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@82877c
10-25 18:55:23.651  7776  7879 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 18:55:23.652  7776  7879 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 18:55:23.660  7776  7776 W unknown:ReactNative: Packager connection already open, nooping.
10-25 18:55:23.660  7776  7879 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 18:55:23.661  7776  7776 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 18:55:23.665  7776  7776 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 18:55:23.903  7776  7884 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 18:55:24.086  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 18:55:24.089  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 18:55:24.090  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 18:55:24.092  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 18:55:24.096  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 18:55:24.097  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 18:55:24.098  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 18:55:24.100  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 18:55:24.103  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 18:55:24.104  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 18:55:24.105  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 18:55:24.106  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 18:55:24.109  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 18:55:24.110  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 18:55:24.110  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 18:55:24.111  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 18:55:24.112  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 18:55:24.112  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 18:55:24.113  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 18:55:24.115  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 18:55:24.115  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 18:55:24.116  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 18:55:24.117  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 18:55:24.118  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 18:55:24.118  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 18:55:24.120  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 18:55:24.323  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 18:55:24.331  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 18:55:24.335  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 18:55:24.338  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 18:55:24.340  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 18:55:24.343  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 18:55:24.347  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 18:55:24.354  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 18:55:24.364  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 18:55:24.367  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 18:55:24.370  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 18:55:24.375  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 18:55:24.377  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 18:55:24.382  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 18:55:24.386  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 18:55:24.393  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 18:55:24.403  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 18:55:24.407  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 18:55:24.410  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 18:55:24.413  7776  7884 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 18:55:24.469  7776  7885 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 18:55:25.158  7776  7884 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 18:55:25.318  7776  7884 W HWUI    : Image decoding logging dropped!
10-25 18:55:25.318  7776  7884 W HWUI    : Image decoding logging dropped!
10-25 18:56:12.203  7776  7776 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@c0246e8
10-25 18:56:20.434  7776  7776 W InteractionJankMonitor: Initializing without READ_DEVICE_CONFIG permission. enabled=false, interval=1, missedFrameThreshold=3, frameTimeThreshold=64, package=dev.translationtest.rn
10-25 18:56:36.614  7776  7776 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@55f8e08
10-25 18:56:40.906  7776  7782 W nslationtest.rn: Cleared Reference was only reachable from finalizer (only reported once)
10-25 18:56:48.040  7776  7776 W unknown:BridgelessReact: ReactHost{0}.onUserLeaveHint(activity)
10-25 18:56:48.045  7776  7776 W unknown:BridgelessReact: ReactHost{0}.onHostPause(activity)
10-25 18:56:48.154  7776  7776 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostPause()
10-25 18:56:55.801  7776  7776 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:56:55.801  7776  7776 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:56:55.803  7776  7776 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 18:56:55.806  7776  7776 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 18:57:38.451  7776  7776 W unknown:BridgelessReact: ReactHost{0}.onUserLeaveHint(activity)
10-25 18:57:38.454  7776  7776 W unknown:BridgelessReact: ReactHost{0}.onHostPause(activity)
10-25 18:57:38.458  7776  7776 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostPause()
10-25 18:57:45.699  7776  7776 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:57:45.699  7776  7776 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:57:45.701  7776  7776 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 18:57:45.702  7776  7776 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 18:58:27.329  7776  7776 W unknown:BridgelessReact: ReactHost{0}.onUserLeaveHint(activity)
10-25 18:58:27.330  7776  7776 W unknown:BridgelessReact: ReactHost{0}.onHostPause(activity)
10-25 18:58:27.331  7776  7776 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostPause()
10-25 18:58:34.623  7776  7776 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 18:58:34.623  7776  7776 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 18:58:34.625  7776  7776 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 18:58:34.626  7776  7776 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()

migration/evidence/RN07/g-settings1b/1384-G01-retrospective-end-window.stdout.log
10-25 18:19:41.472 26907 27041 W ResourcesManager: Found a null ResourcesImpl, skipped.
