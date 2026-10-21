#!/usr/bin/env bash
# RN01 final validation battery (coordinator-ordered exact sequence).
# Node 24.19.0 exact runtime; npm via pinned npm-cli.js; explicit cwd.
set -u
EVID='C:/Users/Gerrit/job-search/POCs/cross-platform-translation-test-app-main/migration/evidence/RN01-r2'
APP='C:/Users/Gerrit/job-search/POCs/cross-platform-translation-test-app-main/migration/react-native'
NPM='C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js'
cd "$APP" || { echo "FATAL cd failed" >&2; exit 90; }

export PATH='/c/Users/Gerrit/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:'"$PATH"
hash -r
NODERES="$(node --version)"
echo "final-battery node version: $NODERES" | tee -a "$EVID/final-exits.txt"
if [ "$NODERES" != "v24.19.0" ]; then
  echo "FATAL: node mismatch ($NODERES)" | tee -a "$EVID/final-exits.txt"
  exit 91
fi
export JAVA_HOME='C:\Program Files\Eclipse Adoptium\jdk-21.0.7.6-hotspot'
export ANDROID_HOME='C:\Users\Gerrit\AppData\Local\Android\Sdk'

step() { # $1=name $2=log $3...=command
  local name="$1" log="$2"; shift 2
  echo "=== [final] $name : $* ==="
  "$@" > "$EVID/$log" 2>&1
  local ec=$?
  echo "$name exit=$ec (log=$log)" >> "$EVID/final-exits.txt"
  if [ $ec -ne 0 ]; then
    echo "STOP: $name failed (exit=$ec)" >> "$EVID/final-exits.txt"
    echo "STOP: $name failed (exit=$ec)" >&2
    exit $ec
  fi
}

echo "=== [final] lockfile hash BEFORE ==="
HB="$(sha256sum package-lock.json)"
echo "lockfile-hash-before $(echo "$HB" | awk '{print $1}')" >> "$EVID/final-exits.txt"
echo "$HB" | tee "$EVID/final-lockfile-hash-before.txt"

step npm-ci final-npm-ci.log node "$NPM" ci
step typecheck final-typecheck.log node "$NPM" run typecheck
step test-1 final-test-1.log node "$NPM" test
step test-2 final-test-2.log node "$NPM" test
step expo-install-check final-expo-install-check.log node "$NPM" exec -- expo install --check
step expo-doctor-v final-expo-doctor.log node "$NPM" exec --yes -- expo-doctor --verbose
step bundle-android final-bundle-android.log node "$NPM" run bundle:android

echo "=== [final] lockfile hash AFTER ==="
HA="$(sha256sum package-lock.json)"
echo "lockfile-hash-after $(echo "$HA" | awk '{print $1}')" >> "$EVID/final-exits.txt"
echo "$HA" | tee "$EVID/final-lockfile-hash-after.txt"
if [ "$HB" = "$HA" ]; then
  echo "lockfile-hash MISMATCH-NONE: identical before/after npm ci" >> "$EVID/final-exits.txt"
  echo "lockfile: IDENTICAL before/after"
else
  echo "lockfile-hash CHANGED (MISMATCH)" >> "$EVID/final-exits.txt"
  echo "lockfile: CHANGED (MISMATCH)" >&2
  exit 92
fi
echo "BATTERY COMPLETE: all steps exit=0" | tee -a "$EVID/final-exits.txt"
