# NS07 F10 — F10-FILTER-RECREATE (software only)

Observer: Hermes GPT-6.1 Sol high (software).
Gate passed before migration writes. entry-gate.json records branch/HEAD/index,
34,881 raw porcelain entries, exact F7 diff and candidate 5 size/hash. All earlier
records, all six redactions, NS07.md and the checklist are immutable. Root
package-lock.json is status-only; IDEA.md contents are never read or hashed.

## Confirmed cause: two different symptoms

Paths abbreviated vue/ and core/ below mean migration/nativescript/node_modules/
nativescript-vue/ and @nativescript/core/. Exact inventories and bounded excerpts
are in installed-source-inventory.json / installed-source-excerpts.txt.

1. Opening: Schedule.vue:95-100 calls imported $showModal, with no local guard.
   vue/dist/plugins/modals.js:27-47 has a module-global modalStack (not a
   per-Schedule stack). The target defaults to the top modal's nativeView before
   Application.getRootView(). :92-117 creates a new Vue app/view, supplies a
   closeCallback and calls modalTarget.showModal; :149-157 mounts/pushes it.
   vue/dist/runtimeHelpers.js:21-62 shares the root app context/store but creates
   a distinct modal app; nativeView is its root Frame, not TrackFilter's Page.
   The promise remains pending and the app stays mounted until closeCallback.
   isResolved at modals.js:95-109 makes callback/unmount/resolve once-only.
   :127-147 removes stack entries for explicit close or failed presentation.
   There is NO activity-recreation subscription or modal-stack reset here.

2. Core opening: core/ui/core/view/view-common.js:323-332 calls the modal's
   _showNativeModalView. :349-412 pushes _rootModalViews, sets parent._modal,
   this._modalParent, context/options and _closeModalCallback. The callback clears
   those links, removes the core stack entry, calls the platform hide, the Vue
   callback and teardown. closeModal():334-344 uses this callback or walks parent.
   Android index.android.js:849-890 creates a DialogFragment, saves options in
   modalMap (owner DOM id -> options), sets _dialogFragment, then shows it with
   the parent's root FragmentManager and a NUMERIC DOM-id string tag.

3. Font change: manifest App_Resources/Android/src/main/AndroidManifest.xml:28
   omits fontScale (uiMode is handled). Android can relaunch the activity without
   killing the JS process. core/ui/frame/activity.android.js:29-40 delegates
   save/stop/destroy. frame/index.android.js:716-725 saves the root DOM id and
   navigation state; :757-793 unloads on stop and tears down native UI on destroy.
   DialogFragment onDismiss, view/index.android.js:248-260, deliberately skips
   BOTH removeModal and dismissCallback when the host isChangingConfigurations.
   Its onDestroy:262-275 unloads and tears down its owner's native UI, but does
   NOT call closeModal or clear either JS modal stack or _modalParent.

4. Why the modal vanishes: frame/index.android.js:657-685 lets Android restore
   fragments, then removes every restored fragment whose tag does NOT start
   with 'fragment'. The modal tag is numeric, so this includes the dialog; there
   is no corresponding re-presentation or Vue close in this activity path.
   DialogFragment onCreate:158-165 has a separate saved-state dismissal if its
   modal options are missing; in this same-process path the map is still there.
   Neither path reconstitutes the filter as a navigated page.

5. Why Schedule returns with the same JS state: frame/index.android.js:689-693
   recovers the old root Frame from activityRootViewsMap's WeakRef by DOM id;
   :904-955 reuses and sets up that root against the replacement activity.
   _disposeBackstackEntry in frame-common.js:202-206 tears down resolvedPage's
   UI WITHOUT nulling the Page; _removeEntry:184-200 is the different navigation
   removal path that does null it. Android Frame retains _currentEntry across
   disposeNativeView (:411-440), rebuilding its fragment (:130-176). Thus the
   normal same-process/reachable-root recreation uses the SAME Schedule JS Page,
   not a new Schedule component/store. Native Android views/Activity are new.
   Process-death/new-root fallback is different and does not retain the Vue stack.

6. Later tap: vue's default target is still the old modal Frame. Its native UI
   and _context were nulled by view-base/index.js:829-870; it was not reloaded,
   so view/index.android.js:593-596 never refreshes its manager caches.
   _getRootFragmentManager():524-528 can return no manager for this detached
   target. Showing a new DialogFragment through that target fails. This is NOT
   a Schedule guard silently refusing a second open. The installed Android
   View.showModal has no 'already shown' guard on this path; the background-only
   defer at :853-859 waits for parent loaded, and Vue's :121-124 post-check only
   catches a missing _modalParent, not a usable native host. Common state is set
   BEFORE the native .show, and failed-show cleanup in Vue cannot close the OLD
   entry. Passing an explicit target alone would leave that stale entry alive.

Crucial correction to 'no error patterns': F9-FS-filter-recovery-window-logcat.txt:
169-184 DOES contain a D-priority 'Unhandled promise rejection' and a Java
NullPointerException in _showNativeModalView -> showModal -> openModal ->
$showModal -> openFilter. The message says FragmentTransaction.add was called on
a null reference. The six historical A06 patterns did not match this spelling,
and the historical PASS stays immutable. The actual failure is not silent at
runtime; Schedule's non-awaited $showModal promise escapes the tap handler.
F9-FS-filter-1.3-window-old-logcat.txt:80-106 records window replacement and IME
showing without those errors. All six saved PID 4956 windows were read bounded;
f9-filter-evidence.json records their original counts and every named filter XML.
The baseline XML is the modal; 1.3/2.0/restored/after-nav are Schedule; recovery tap
is an enabled Button at [817,422][1048,674], centre (933,548), not a missed target.
No JS object census or exact native GC timing is inferred from those captures.

## Chosen minimal component fix

TrackFilter alone owns a per-mounted-modal activityStopped listener, registered
onMounted and removed onUnmounted. A Frame loaded event retains ONLY its JS Frame
identity. At activityStopped, if that Frame's CURRENT _context is the event's
activity and isChangingConfigurations() is true, call frame.closeModal() with NO
result. Do not retain a Java Activity/Window/observer/manager across callbacks.

This runs at the old activity's stop boundary, before dialog destruction can
orphan its owner. core/application/application.android.js:204-227 emits the event
from the Android lifecycle callback; frame/index.android.js:757-765 calls native
super stop before the root unload. onDestroy/teardown occurs later. Installed
API35 framework source corroborates the platform contract (not inspection of the
API36 device): ActivityThread.java:6192 sets mChangingConfigurations before
handleRelaunchActivityInner; :6263-6279 pauses/stops before destroying. Activity.java:
7249-7259 explicitly documents isChangingConfigurations for cleanup in onStop.

The modal CLOSES CLEANLY and the draft is DISCARDED, not restored. Calling the
existing core close API clears _rootModalViews, parent._modal/_modalParent and
_closeModalCallback synchronously, then calls Vue's existing once-only callback,
which removes modalStack, unmounts this instance (removing the activity listener)
and resolves the pending promise. applyFilterResult (src/state/track-filter.ts:
15-17) ignores undefined, so no draft commits. The next tap creates a fresh modal
app/draft from store.getters.trackOptions. Done still supplies checked names;
Close/Back still supply no result; no callback replacement or manual private-state
assignment is introduced. Foreign activities and ordinary background stop do
nothing. Repeated stop/close notification is idempotent through existing cleanup.

Native modalMap detail: removeModal is ONLY in native onDismiss's non-config
branch. If onDismiss runs while changing configurations, that internal map entry
can remain even for an explicit close. This library retention is not claimed
fixed. It does not drive Vue's target choice: closed owners have no common modal
links/callback and are unmounted; future modal DOM ids are new. Restored numeric
fragments are removed by core's recreation path. We do not reach into this
unexported map, fake configuration state, or patch core. F11 must check for stray
restored dialog flashes/errors as well as one-tap reopen; software proves callback
and stack cleanup, not the complete Android restoration timing.

Only TrackFilter.vue changes relative to F7. Schedule and SessionDetail and all
F1/F3/F5/F7 status lifecycle code, templates/style/radio/swipe/favorites/search
remain byte-identical. New lifecycle is separate from the three identical status
blocks; no reason exists to duplicate modal-only code into non-modal components.
No state extraction/dependency/config change or product test switch is needed.

Rejected: add fontScale to manifest configChanges (outside permission; bypasses
recreation rather than cleaning a legitimate lifecycle transition); re-show the
old modal (core explicitly removes its restored fragment, and native owner is
torn down); clear parent._modal only (leaves Vue stack/promise/app); force explicit
target only (leaks old callback/draft); close on every unloaded (also fires during
ordinary background/navigation and risks reentrant unload); wait for activity
Destroyed or next tap (native fragment/Activity may already be disposed); timers,
catch-and-ignore, node_modules patches. Stop-boundary close uses existing cleanup
while the owning host is still available, so configChanges is not required.

## F11 device verification — required, NOT performed here

Install/hash candidate 6. Without a cold launch between each change and reopen,
open filter at 1.0, change to 1.3 while OPEN, capture Schedule after clean close,
tap Filter ONCE using fresh XML, verify Filter Sessions + switches match store.
Done returns; reopen/Close returns; reopen still works. Repeat with filter open
at 1.3 -> 2.0, then open at 2.0 -> 1.0 (restore), and directly 1.0 -> 2.0 -> 1.0;
repeat the sequence to catch accumulated stale stack entries. Retain PID/activity/
window identities; PID survival is not Activity survival. No cold relaunch may
mask failure. Grade any unexpected restored dialog/flash or lost tap explicitly.

Repeat all transitions with an UNCOMMITTED changed draft (toggle one track and
Deselect All/Select All variants): recreation discards it, Schedule selection is
unchanged, reopened switches match STORE not abandoned draft. Then commit a known
subset with Done, reopen and verify it; change draft and Close to discard; reopen
and confirm the committed subset. Each open has one effective close/apply only;
no duplicate state change, stale modal, pending tap or need for extra navigation.
Test ordinary HOME/resume separately if approved: non-config stop must not invoke
the new cancellation. Exercise normal Done, toolbar Close and hardware Back under
approved rules, then reopen each. Do not claim a native callback census from XML.

Keep bounded logs spanning stop/recreate/reopen BEFORE process reset. In addition
to previous A06 patterns, scan case-insensitively for 'Unhandled promise rejection',
'NullPointerException', 'FragmentTransaction', 'Could not show modal', 'not attached',
'FragmentManager has been destroyed', 'Can not perform this action', Java object-ID/
cleared-reference errors, native event/app errorHandler warnings, dead observers,
FATAL EXCEPTION and Fatal signal. Preserve warnings verbatim. Coordinator inspects
all frames and keyboard privacy. Run short Schedule/detail font transitions;
G07 live both directions on each page/window and after modal dismiss; G05 one
checked mode and large-text swipe strip; own search/clear, modes, detail Back,
favorite add/already-added/remove and swipe. Restore/read back all settings.
