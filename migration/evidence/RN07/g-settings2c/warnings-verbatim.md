RN07 G2c bounded PID logcat findings — 2026-10-25T21:02:03.763Z

migration/evidence/RN07/g-settings2c/0060-G03-start-logcat.stdout.log
10-25 20:54:08.832 23186 23186 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 20:54:08.832 23186 23186 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 20:54:09.955 23186 23186 W SoLoader: Initializing SoLoader: 0
10-25 20:54:09.960 23186 23186 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 20:54:09.960 23186 23186 W SoLoader: Previously recorded 0 base apk paths.
10-25 20:54:09.992 23186 23186 W SoLoader: SoLoader initialized: 8
10-25 20:54:11.065 23186 23225 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 20:54:11.107 23186 23186 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 20:54:11.219 23186 23186 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 20:54:11.219 23186 23186 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 20:54:11.257 23186 23186 W HWUI    : Unknown dataspace 0
10-25 20:54:12.536 23186 23186 W HWUI    : Image decoding logging dropped!
10-25 20:54:12.539 23186 23186 W HWUI    : Image decoding logging dropped!
10-25 20:54:12.540 23186 23186 W HWUI    : Image decoding logging dropped!
10-25 20:54:13.717 23186 23186 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@d84c4f8
10-25 20:54:20.279 23186 23186 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 20:54:20.283 23186 23186 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 20:54:20.283 23186 23186 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 20:54:31.972 23186 23186 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 20:54:31.972 23186 23186 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 20:54:31.973 23186 23313 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 20:54:31.973 23186 23313 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 20:54:31.974 23186 23313 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 20:54:31.975 23186 23313 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 20:54:31.992 23186 23186 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 20:54:31.992 23186 23186 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 20:54:31.994 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 20:54:32.060 23186 23248 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 20:54:32.060 23186 23313 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 20:54:32.470 23186 23186 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@ca848eb
10-25 20:54:32.482 23186 23186 W unknown:BridgelessReact: ReactHost{0}.raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: Unhandled SoftException
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: com.facebook.react.bridge.ReactNoCrashSoftException: raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException(ReactHostImpl.kt:906)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException$default(ReactHostImpl.kt:897)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.onWindowFocusChange(ReactHostImpl.kt:679)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at com.facebook.react.ReactDelegate.onWindowFocusChanged(ReactDelegate.kt:226)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at com.facebook.react.ReactActivityDelegate.onWindowFocusChanged(ReactActivityDelegate.java:237)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invokeSuspend(ReactActivityDelegateWrapper.kt:322)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:8)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:4)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$launchLifecycleScopeWithLock$1.invokeSuspend(ReactActivityDelegateWrapper.kt:469)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:34)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at kotlinx.coroutines.internal.DispatchedContinuationKt.resumeCancellableWith(DispatchedContinuation.kt:375)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:26)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at kotlinx.coroutines.CoroutineStart.invoke(CoroutineStart.kt:358)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at kotlinx.coroutines.AbstractCoroutine.start(AbstractCoroutine.kt:134)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch(Builders.common.kt:53)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch(Unknown Source:1)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch$default(Builders.common.kt:44)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch$default(Unknown Source:1)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock(ReactActivityDelegateWrapper.kt:467)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock$default(ReactActivityDelegateWrapper.kt:463)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.onWindowFocusChanged(ReactActivityDelegateWrapper.kt:320)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at com.facebook.react.ReactActivity.onWindowFocusChanged(ReactActivity.java:161)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at androidx.appcompat.view.WindowCallbackWrapper.onWindowFocusChanged(WindowCallbackWrapper.java:124)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at expo.modules.devmenu.detectors.InterceptingWindowCallback.onWindowFocusChanged(Unknown Source:2)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at com.android.internal.policy.DecorView.onWindowFocusChanged(DecorView.java:1818)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at android.view.View.dispatchWindowFocusChanged(View.java:16952)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at android.view.ViewGroup.dispatchWindowFocusChanged(ViewGroup.java:1530)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at android.view.ViewRootImpl.dispatchFocusEvent(ViewRootImpl.java:4873)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at android.view.ViewRootImpl.handleWindowFocusChanged(ViewRootImpl.java:4777)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at android.view.ViewRootImpl.-$$Nest$mhandleWindowFocusChanged(Unknown Source:0)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessageImpl(ViewRootImpl.java:7017)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessage(ViewRootImpl.java:6927)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at android.os.Handler.dispatchMessage(Handler.java:110)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at android.os.Looper.loopOnce(Looper.java:248)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at android.os.Looper.loop(Looper.java:338)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at android.app.ActivityThread.main(ActivityThread.java:9067)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at java.lang.reflect.Method.invoke(Native Method)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:593)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:932)
10-25 20:54:32.556 23186 23315 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 20:54:32.559 23186 23186 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@8a658aa
10-25 20:54:32.560 23186 23313 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 20:54:32.566 23186 23313 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 20:54:33.374 23186 23313 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 20:54:33.374 23186 23313 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 20:54:33.380 23186 23186 W unknown:ReactNative: Packager connection already open, nooping.
10-25 20:54:33.380 23186 23313 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 20:54:33.385 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 20:54:33.390 23186 23186 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 20:54:33.710 23186 23318 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 20:54:33.948 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 20:54:33.953 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 20:54:33.956 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 20:54:33.958 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 20:54:33.965 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 20:54:33.966 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 20:54:33.969 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 20:54:33.972 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 20:54:33.976 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 20:54:33.976 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 20:54:33.978 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 20:54:33.983 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 20:54:33.986 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 20:54:33.988 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 20:54:33.989 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 20:54:33.990 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 20:54:33.990 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 20:54:33.990 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 20:54:33.991 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 20:54:33.994 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 20:54:33.996 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 20:54:33.997 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 20:54:34.000 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 20:54:34.001 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 20:54:34.001 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 20:54:34.006 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 20:54:34.229 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 20:54:34.235 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 20:54:34.239 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 20:54:34.243 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 20:54:34.246 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 20:54:34.249 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 20:54:34.252 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 20:54:34.261 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 20:54:34.264 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 20:54:34.269 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 20:54:34.275 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 20:54:34.281 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 20:54:34.284 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 20:54:34.289 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 20:54:34.291 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 20:54:34.294 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 20:54:34.299 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 20:54:34.302 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 20:54:34.305 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 20:54:34.307 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 20:54:34.368 23186 23319 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 20:54:35.241 23186 23318 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 20:54:35.435 23186 23318 W HWUI    : Image decoding logging dropped!
10-25 20:54:35.435 23186 23318 W HWUI    : Image decoding logging dropped!

migration/evidence/RN07/g-settings2c/0158-G03-G04-end-logcat.stdout.log
10-25 20:54:08.832 23186 23186 W nslationtest.rn: Unexpected CPU variant for x86: x86_64.
10-25 20:54:08.832 23186 23186 W nslationtest.rn: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
10-25 20:54:09.955 23186 23186 W SoLoader: Initializing SoLoader: 0
10-25 20:54:09.960 23186 23186 W SoLoader: Recording new base apk path: /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk
10-25 20:54:09.960 23186 23186 W SoLoader: Previously recorded 0 base apk paths.
10-25 20:54:09.992 23186 23186 W SoLoader: SoLoader initialized: 8
10-25 20:54:11.065 23186 23225 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
10-25 20:54:11.107 23186 23186 E ashmem  : Pinning is deprecated since Android Q. Please use trim or other methods.
10-25 20:54:11.219 23186 23186 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 20:54:11.219 23186 23186 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 20:54:11.257 23186 23186 W HWUI    : Unknown dataspace 0
10-25 20:54:12.536 23186 23186 W HWUI    : Image decoding logging dropped!
10-25 20:54:12.539 23186 23186 W HWUI    : Image decoding logging dropped!
10-25 20:54:12.540 23186 23186 W HWUI    : Image decoding logging dropped!
10-25 20:54:13.717 23186 23186 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@d84c4f8
10-25 20:54:20.279 23186 23186 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSelection()Landroid/view/accessibility/AccessibilityNodeInfo$Selection; (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 20:54:20.283 23186 23186 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 20:54:20.283 23186 23186 E nslationtest.rn: hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->setSelection(Landroid/view/accessibility/AccessibilityNodeInfo$Selection;)V (runtime_flags=0, domain=platform, api=blocked) from /data/app/~~QzUU8DX5y-aUh0kTs-j6DA==/dev.translationtest.rn-pWLduZNiKP3fU-IyrH-F3Q==/base.apk!classes7.dex (domain=app) using linking: denied
10-25 20:54:31.972 23186 23186 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Schedule
10-25 20:54:31.972 23186 23186 W unknown:BridgelessReact: ReactHost{0}.attachSurface(surfaceId = 0)
10-25 20:54:31.973 23186 23313 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask()
10-25 20:54:31.973 23186 23313 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Start
10-25 20:54:31.974 23186 23313 W unknown:BridgelessReact: ReactHost{0}.getJSBundleLoader()
10-25 20:54:31.975 23186 23313 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning()
10-25 20:54:31.992 23186 23186 W WindowOnBackDispatcher: OnBackInvokedCallback is not enabled for the application.
10-25 20:54:31.992 23186 23186 W WindowOnBackDispatcher: Set 'android:enableOnBackInvokedCallback="true"' in the application manifest.
10-25 20:54:31.994 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 20:54:32.060 23186 23248 W unknown:BridgelessReact: ReactHost{0}.isMetroRunning(): Async result = true
10-25 20:54:32.060 23186 23313 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro()
10-25 20:54:32.470 23186 23186 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@ca848eb
10-25 20:54:32.482 23186 23186 W unknown:BridgelessReact: ReactHost{0}.raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: Unhandled SoftException
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: com.facebook.react.bridge.ReactNoCrashSoftException: raiseSoftException(onWindowFocusChange(hasFocus = "true")): Tried to access onWindowFocusChange while context is not ready
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException(ReactHostImpl.kt:906)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.raiseSoftException$default(ReactHostImpl.kt:897)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at com.facebook.react.runtime.ReactHostImpl.onWindowFocusChange(ReactHostImpl.kt:679)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at com.facebook.react.ReactDelegate.onWindowFocusChanged(ReactDelegate.kt:226)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at com.facebook.react.ReactActivityDelegate.onWindowFocusChanged(ReactActivityDelegate.java:237)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invokeSuspend(ReactActivityDelegateWrapper.kt:322)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:8)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$onWindowFocusChanged$1.invoke(Unknown Source:4)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper$launchLifecycleScopeWithLock$1.invokeSuspend(ReactActivityDelegateWrapper.kt:469)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:34)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at kotlinx.coroutines.internal.DispatchedContinuationKt.resumeCancellableWith(DispatchedContinuation.kt:375)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at kotlinx.coroutines.intrinsics.CancellableKt.startCoroutineCancellable(Cancellable.kt:26)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at kotlinx.coroutines.CoroutineStart.invoke(CoroutineStart.kt:358)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at kotlinx.coroutines.AbstractCoroutine.start(AbstractCoroutine.kt:134)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch(Builders.common.kt:53)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch(Unknown Source:1)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt__Builders_commonKt.launch$default(Builders.common.kt:44)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at kotlinx.coroutines.BuildersKt.launch$default(Unknown Source:1)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock(ReactActivityDelegateWrapper.kt:467)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.launchLifecycleScopeWithLock$default(ReactActivityDelegateWrapper.kt:463)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at expo.modules.ReactActivityDelegateWrapper.onWindowFocusChanged(ReactActivityDelegateWrapper.kt:320)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at com.facebook.react.ReactActivity.onWindowFocusChanged(ReactActivity.java:161)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at androidx.appcompat.view.WindowCallbackWrapper.onWindowFocusChanged(WindowCallbackWrapper.java:124)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at expo.modules.devmenu.detectors.InterceptingWindowCallback.onWindowFocusChanged(Unknown Source:2)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at com.android.internal.policy.DecorView.onWindowFocusChanged(DecorView.java:1818)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at android.view.View.dispatchWindowFocusChanged(View.java:16952)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at android.view.ViewGroup.dispatchWindowFocusChanged(ViewGroup.java:1530)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at android.view.ViewRootImpl.dispatchFocusEvent(ViewRootImpl.java:4873)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at android.view.ViewRootImpl.handleWindowFocusChanged(ViewRootImpl.java:4777)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at android.view.ViewRootImpl.-$$Nest$mhandleWindowFocusChanged(Unknown Source:0)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessageImpl(ViewRootImpl.java:7017)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at android.view.ViewRootImpl$ViewRootHandler.handleMessage(ViewRootImpl.java:6927)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at android.os.Handler.dispatchMessage(Handler.java:110)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at android.os.Looper.loopOnce(Looper.java:248)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at android.os.Looper.loop(Looper.java:338)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at android.app.ActivityThread.main(ActivityThread.java:9067)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at java.lang.reflect.Method.invoke(Native Method)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:593)
10-25 20:54:32.485 23186 23186 E unknown:ReactHost: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:932)
10-25 20:54:32.556 23186 23315 W unknown:BridgelessReact: ReactHost{0}.loadJSBundleFromMetro(): Creating BundleLoader
10-25 20:54:32.559 23186 23186 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@8a658aa
10-25 20:54:32.560 23186 23313 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating BridgelessReactContext
10-25 20:54:32.566 23186 23313 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Creating ReactInstance
10-25 20:54:33.374 23186 23313 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Loading JS Bundle
10-25 20:54:33.374 23186 23313 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): DevSupportManager.onNewReactContextCreated()
10-25 20:54:33.380 23186 23186 W unknown:ReactNative: Packager connection already open, nooping.
10-25 20:54:33.380 23186 23313 W unknown:BridgelessReact: ReactHost{0}.startSurface(surfaceId = 0): Execute
10-25 20:54:33.385 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 20:54:33.390 23186 23186 W unknown:BridgelessReact: ReactHost{0}.getOrCreateReactInstanceTask(): Executing ReactInstanceEventListeners
10-25 20:54:33.710 23186 23318 W BridgelessReactContext: [WARNING] Bridgeless doesn't support CatalystInstance. Accessing an API that's not part of the new architecture is not encouraged usage.
10-25 20:54:33.948 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class expo.modules.kotlin.views.GroupViewManagerWrapper
10-25 20:54:33.953 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.uimanager.LayoutShadowNode
10-25 20:54:33.956 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContainerViewManager
10-25 20:54:33.958 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.reanimated.view.REASharedTransitionBoundaryManager
10-25 20:54:33.965 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.host.TabsHostViewManager
10-25 20:54:33.966 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager
10-25 20:54:33.969 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackHeaderSubviewManager
10-25 20:54:33.972 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetHostViewManager
10-25 20:54:33.976 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.scrollviewmarker.ScrollViewMarkerViewManager
10-25 20:54:33.976 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.modals.formsheet.FormSheetContentWrapperViewManager
10-25 20:54:33.978 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenContentWrapperManager
10-25 20:54:33.983 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.screen.StackScreenViewManager
10-25 20:54:33.986 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewManager
10-25 20:54:33.988 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaViewShadowNode
10-25 20:54:33.989 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenViewManager
10-25 20:54:33.990 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.config.StackHeaderConfigViewManager
10-25 20:54:33.990 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.th3rdwave.safeareacontext.SafeAreaProviderManager
10-25 20:54:33.990 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.SearchBarManager
10-25 20:54:33.991 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.host.StackHostViewManager
10-25 20:54:33.994 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenFooterManager
10-25 20:54:33.996 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ModalScreenViewManager
10-25 20:54:33.997 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.safearea.SafeAreaViewManager
10-25 20:54:34.000 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.ScreenStackViewManager
10-25 20:54:34.001 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.stack.header.subview.StackHeaderSubviewViewManager
10-25 20:54:34.001 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class org.reactnative.maskedview.RNCMaskedViewManager
10-25 20:54:34.006 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.rnscreens.gamma.tabs.screen.TabsScreenViewManager
10-25 20:54:34.229 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.debuggingoverlay.DebuggingOverlayManager
10-25 20:54:34.235 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerButtonViewManager
10-25 20:54:34.239 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.safeareaview.ReactSafeAreaViewManager
10-25 20:54:34.243 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.modal.ReactModalHostManager
10-25 20:54:34.246 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerDetectorViewManager
10-25 20:54:34.249 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.progressbar.ReactProgressBarViewManager
10-25 20:54:34.252 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollViewManager
10-25 20:54:34.261 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.image.ReactImageManager
10-25 20:54:34.264 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.ReactTextViewManager
10-25 20:54:34.269 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactHorizontalScrollContainerViewManager
10-25 20:54:34.275 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.unimplementedview.ReactUnimplementedViewManager
10-25 20:54:34.281 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.scroll.ReactScrollViewManager
10-25 20:54:34.284 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.view.ReactViewManager
10-25 20:54:34.289 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.drawer.ReactDrawerLayoutManager
10-25 20:54:34.291 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.switchview.ReactSwitchManager
10-25 20:54:34.294 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.swiperefresh.SwipeRefreshLayoutManager
10-25 20:54:34.299 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.textinput.ReactTextInputManager
10-25 20:54:34.302 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.text.SelectableTextViewManager
10-25 20:54:34.305 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.swmansion.gesturehandler.react.RNGestureHandlerRootViewManager
10-25 20:54:34.307 23186 23318 W unknown:ViewManagerPropertyUpdater: Could not find generated setter for class com.facebook.react.views.virtual.view.ReactVirtualViewManager
10-25 20:54:34.368 23186 23319 W ResourcesManager: Found a null ResourcesImpl, skipped.
10-25 20:54:35.241 23186 23318 W ReactNativeJS: `unstable_settings.initialRouteName` is deprecated. Use `unstable_settings.anchor` instead.
10-25 20:54:35.435 23186 23318 W HWUI    : Image decoding logging dropped!
10-25 20:54:35.435 23186 23318 W HWUI    : Image decoding logging dropped!
10-25 20:55:34.091 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onUserLeaveHint(activity)
10-25 20:55:34.094 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostPause(activity)
10-25 20:55:34.100 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostPause()
10-25 20:57:37.050 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 20:57:37.059 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 20:57:41.722 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onUserLeaveHint(activity)
10-25 20:57:41.724 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostPause(activity)
10-25 20:57:41.724 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostPause()
10-25 20:57:42.023 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 20:57:42.024 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 20:57:49.139 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onUserLeaveHint(activity)
10-25 20:57:49.140 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostPause(activity)
10-25 20:57:49.147 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostPause()
10-25 20:57:49.389 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 20:57:49.390 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 20:57:52.845 23186 23186 W InteractionJankMonitor: Initializing without READ_DEVICE_CONFIG permission. enabled=false, interval=1, missedFrameThreshold=3, frameTimeThreshold=64, package=dev.translationtest.rn
10-25 20:57:56.627 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onUserLeaveHint(activity)
10-25 20:57:56.628 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostPause(activity)
10-25 20:57:56.630 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostPause()
10-25 20:57:56.994 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 20:57:56.995 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 20:57:57.064 23186 23186 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@c99e488
10-25 20:58:11.851 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onUserLeaveHint(activity)
10-25 20:58:11.854 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostPause(activity)
10-25 20:58:11.854 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostPause()
10-25 20:58:12.162 23186 23186 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@c99e488
10-25 20:58:12.455 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 20:58:12.478 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 20:58:12.521 23186 23186 E ImeBackDispatcher: Ime callback not found. Ignoring unregisterReceivedCallback. callbackId: 231330245
10-25 20:58:14.730 23186 23186 W HWUI    : Image decoding logging dropped!
10-25 20:58:14.730 23186 23186 W HWUI    : Image decoding logging dropped!
10-25 20:58:14.731 23186 23186 W HWUI    : Image decoding logging dropped!
10-25 20:58:18.524 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onUserLeaveHint(activity)
10-25 20:58:18.524 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostPause(activity)
10-25 20:58:18.525 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostPause()
10-25 20:58:18.598 23186 23186 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ViewRootImpl$$ExternalSyntheticLambda13@1d8dc95
10-25 20:58:18.955 23186 23186 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@c99e488
10-25 20:58:19.072 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 20:58:19.077 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 20:58:19.092 23186 23186 E ImeBackDispatcher: Ime callback not found. Ignoring unregisterReceivedCallback. callbackId: 231330245
10-25 20:58:19.266 23186 23199 W nslationtest.rn: Cleared Reference was only reachable from finalizer (only reported once)
10-25 20:58:19.856 23186 23186 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@c99e488
10-25 20:58:55.075 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onUserLeaveHint(activity)
10-25 20:58:55.092 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostPause(activity)
10-25 20:58:55.094 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostPause()
10-25 20:58:55.397 23186 23186 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@c99e488
10-25 20:58:55.435 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 20:58:55.568 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 20:58:55.575 23186 23186 E ImeBackDispatcher: Ime callback not found. Ignoring unregisterReceivedCallback. callbackId: 231330245
10-25 20:59:01.665 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onUserLeaveHint(activity)
10-25 20:59:01.666 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostPause(activity)
10-25 20:59:01.669 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostPause()
10-25 20:59:01.940 23186 23186 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@c99e488
10-25 20:59:01.983 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 20:59:01.985 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 20:59:02.072 23186 23186 E ImeBackDispatcher: Ime callback not found. Ignoring unregisterReceivedCallback. callbackId: 231330245
10-25 20:59:08.251 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onUserLeaveHint(activity)
10-25 20:59:08.252 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostPause(activity)
10-25 20:59:08.252 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostPause()
10-25 20:59:08.461 23186 23186 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@c99e488
10-25 20:59:08.516 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 20:59:08.516 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 20:59:08.525 23186 23186 E ImeBackDispatcher: Ime callback not found. Ignoring unregisterReceivedCallback. callbackId: 231330245
10-25 20:59:08.833 23186 23186 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@c99e488
10-25 20:59:14.377 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onUserLeaveHint(activity)
10-25 20:59:14.378 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostPause(activity)
10-25 20:59:14.379 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostPause()
10-25 20:59:14.586 23186 23186 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@c99e488
10-25 20:59:14.751 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 20:59:14.774 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 20:59:14.806 23186 23186 E ImeBackDispatcher: Ime callback not found. Ignoring unregisterReceivedCallback. callbackId: 231330245
10-25 20:59:20.210 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onUserLeaveHint(activity)
10-25 20:59:20.211 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostPause(activity)
10-25 20:59:20.213 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostPause()
10-25 20:59:20.678 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 20:59:20.687 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 20:59:20.732 23186 23186 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@c99e488
10-25 20:59:20.733 23186 23186 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@c99e488
10-25 20:59:25.332 23186 23186 W WindowOnBackDispatcher: sendCancelIfRunning: isInProgress=false callback=android.view.ImeBackAnimationController@c99e488
10-25 20:59:25.698 23186 23186 E ImeBackDispatcher: Ime callback not found. Ignoring unregisterReceivedCallback. callbackId: 231330245
10-25 20:59:26.000 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onUserLeaveHint(activity)
10-25 20:59:26.004 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostPause(activity)
10-25 20:59:26.005 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostPause()
10-25 20:59:26.431 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 20:59:26.435 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 20:59:31.951 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onUserLeaveHint(activity)
10-25 20:59:31.952 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostPause(activity)
10-25 20:59:31.953 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostPause()
10-25 20:59:32.267 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 20:59:32.268 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 20:59:37.212 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onUserLeaveHint(activity)
10-25 20:59:37.217 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostPause(activity)
10-25 20:59:37.225 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostPause()
10-25 20:59:37.796 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 20:59:37.797 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
10-25 20:59:43.648 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onUserLeaveHint(activity)
10-25 20:59:43.648 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostPause(activity)
10-25 20:59:43.650 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostPause()
10-25 20:59:43.963 23186 23186 W unknown:BridgelessReact: ReactHost{0}.onHostResume(activity)
10-25 20:59:43.965 23186 23186 W unknown:BridgelessReact: ReactHost{0}.ReactContext.onHostResume()
