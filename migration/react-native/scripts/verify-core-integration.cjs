#!/usr/bin/env node
'use strict';

/**
 * RN02 read-only verification of the shared-core + bundled-fixture integration.
 *
 * Works from any cwd (all paths resolve from __dirname). Node built-ins only.
 * Terminating; exits nonzero with a useful message on any mismatch.
 * It never builds, installs, mutates files, and claims nothing about Metro.
 */

const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const { createRequire } = require('node:module');

const TARGET_DIR = path.resolve(__dirname, '..');
const REPO_ROOT = path.resolve(TARGET_DIR, '..', '..');
const SOURCE_FIXTURE = path.join(REPO_ROOT, 'public', 'data', 'data.json');
const BUNDLED_FIXTURE = path.join(TARGET_DIR, 'src', 'data', 'conference.json');
const REFERENCE_CASES = path.join(REPO_ROOT, 'migration', 'reference', 'expected-cases.json');
const SIBLING_CORE_DIR = path.join(REPO_ROOT, 'migration', 'core');

let failures = 0;

function check(label, ok, detail) {
  const status = ok ? 'PASS' : 'FAIL';
  const suffix = detail !== undefined ? ` — ${detail}` : '';
  console.log(`${status}  ${label}${suffix}`);
  if (!ok) failures += 1;
}

function sha256File(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
}

function listFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(full));
    else out.push(full);
  }
  return out.sort();
}

function fail(msg) {
  console.error(`FATAL  ${msg}`);
  process.exit(1);
}

console.log(`target project:      ${TARGET_DIR}`);
console.log(`source fixture:      ${SOURCE_FIXTURE}`);
console.log(`bundled fixture:     ${BUNDLED_FIXTURE}`);
console.log(`reference cases:     ${REFERENCE_CASES}`);
console.log(`sibling core:        ${SIBLING_CORE_DIR}`);
console.log('');

// --- 1. Fixture integrity: raw-byte SHA-256 of source, bundled, reference ---
for (const file of [SOURCE_FIXTURE, BUNDLED_FIXTURE, REFERENCE_CASES, path.join(SIBLING_CORE_DIR, 'package.json')]) {
  if (!fs.existsSync(file)) fail(`required input missing: ${file}`);
}

const reference = JSON.parse(fs.readFileSync(REFERENCE_CASES, 'utf8'));
if (typeof reference.sourceDataSha256 !== 'string' || typeof reference.normalizedSessionCount !== 'number') {
  fail('migration/reference/expected-cases.json is missing sourceDataSha256 or normalizedSessionCount');
}

const sourceSha = sha256File(SOURCE_FIXTURE);
const bundledSha = sha256File(BUNDLED_FIXTURE);
check('source fixture SHA-256 matches reference sourceDataSha256', sourceSha === reference.sourceDataSha256, `${sourceSha} === ${reference.sourceDataSha256}`);
check('bundled fixture SHA-256 matches reference sourceDataSha256 (raw bytes)', bundledSha === reference.sourceDataSha256, `${bundledSha} === ${reference.sourceDataSha256}`);
check('source and bundled fixture byte hashes agree', sourceSha === bundledSha);
console.log(`reference normalizedSessionCount: ${reference.normalizedSessionCount}`);
console.log('');

// --- 2. Resolve @migration/core from the target project context ---
const targetPackage = JSON.parse(fs.readFileSync(path.join(TARGET_DIR, 'package.json'), 'utf8'));
const depSpec = (targetPackage.dependencies || {})['@migration/core'];
check('target dependency spec is file:../core', depSpec === 'file:../core', `spec=${JSON.stringify(depSpec)}`);

const targetRequire = createRequire(path.join(TARGET_DIR, 'package.json'));
let resolvedEntry;
try {
  resolvedEntry = targetRequire.resolve('@migration/core');
} catch (err) {
  fail(`could not resolve @migration/core from the target project: ${err.message}`);
}
const realEntry = fs.realpathSync(resolvedEntry);
console.log(`resolved entry:      ${resolvedEntry}`);
console.log(`real entry path:     ${realEntry}`);
check('resolved entry is compiled dist/index.js', path.basename(resolvedEntry) === 'index.js' && path.basename(path.dirname(resolvedEntry)) === 'dist');

// --- 3. Package root, manifest agreement, declarations, dist inventory and hashes ---
const resolvedRoot = path.dirname(path.dirname(resolvedEntry));
const realRoot = path.dirname(path.dirname(realEntry));
const isSiblingLink = fs.realpathSync(resolvedRoot) === fs.realpathSync(SIBLING_CORE_DIR);
console.log(`resolved package root: ${resolvedRoot}`);
console.log(linkNote(isSiblingLink));
function linkNote(linked) {
  return linked
    ? 'install is a link resolving to the sibling core (reported as such, not an independent copy)'
    : 'install resolves to a location other than the sibling core (independent copy?)';
}

const resolvedPkg = JSON.parse(fs.readFileSync(path.join(resolvedRoot, 'package.json'), 'utf8'));
const siblingPkg = JSON.parse(fs.readFileSync(path.join(SIBLING_CORE_DIR, 'package.json'), 'utf8'));
check('main matches sibling core', resolvedPkg.main === siblingPkg.main, `${JSON.stringify(resolvedPkg.main)} === ${JSON.stringify(siblingPkg.main)}`);
check('types matches sibling core', resolvedPkg.types === siblingPkg.types, `${JSON.stringify(resolvedPkg.types)} === ${JSON.stringify(siblingPkg.types)}`);
check('exports matches sibling core', JSON.stringify(resolvedPkg.exports) === JSON.stringify(siblingPkg.exports));
const declarations = path.join(resolvedRoot, 'dist', 'index.d.ts');
check('declarations exist (dist/index.d.ts)', fs.existsSync(declarations), declarations);

const resolvedDist = path.join(resolvedRoot, 'dist');
const siblingDist = path.join(SIBLING_CORE_DIR, 'dist');
const resolvedFiles = listFiles(resolvedDist).map((f) => path.relative(resolvedDist, f));
const siblingFiles = listFiles(siblingDist).map((f) => path.relative(siblingDist, f));
check(
  'dist file inventory matches sibling dist (relative paths)',
  JSON.stringify(resolvedFiles) === JSON.stringify(siblingFiles),
  `${resolvedFiles.length} file(s) vs ${siblingFiles.length}`
);
if (JSON.stringify(resolvedFiles) === JSON.stringify(siblingFiles)) {
  let mismatched = 0;
  for (const rel of resolvedFiles) {
    const a = crypto.createHash('sha256').update(fs.readFileSync(path.join(resolvedDist, rel))).digest('hex');
    const b = crypto.createHash('sha256').update(fs.readFileSync(path.join(siblingDist, rel))).digest('hex');
    if (a !== b) {
      mismatched += 1;
      console.log(`  hash mismatch: ${rel} resolved=${a} sibling=${b}`);
    }
  }
  check('dist byte hashes match sibling dist', mismatched === 0, `${resolvedFiles.length}/${resolvedFiles.length} identical`);
}
console.log('');

// --- 4. Load the resolved public module and normalize the bundled fixture ---
let core;
try {
  core = targetRequire(resolvedEntry);
} catch (err) {
  fail(`could not load the resolved core module: ${err.message}`);
}
if (typeof core.normalizeConference !== 'function') fail('resolved module does not export normalizeConference as a function');

const fixture = JSON.parse(fs.readFileSync(BUNDLED_FIXTURE, 'utf8'));
let conference;
try {
  conference = core.normalizeConference(fixture);
} catch (err) {
  fail(`normalizeConference threw on the bundled fixture: ${err.message}`);
}

const count = Array.isArray(conference.sessions) ? conference.sessions.length : -1;
check('normalized session count matches reference normalizedSessionCount', count === reference.normalizedSessionCount, `${count} === ${reference.normalizedSessionCount}`);

const first = conference.sessions[0];
check('first session id is numeric 1', first && first.id === 1, JSON.stringify(first && first.id));
check('first session name is Breakfast', Boolean(first) && first.name === 'Breakfast');
check('first session startMinutes is 480', Boolean(first) && first.startMinutes === 480, String(first && first.startMinutes));
check('first session endMinutes is 540', Boolean(first) && first.endMinutes === 540, String(first && first.endMinutes));
check('first session groupTime is 8:00 am', Boolean(first) && first.groupTime === '8:00 am', JSON.stringify(first && first.groupTime));
check('first session tracks are ["Food"]', Boolean(first) && Array.isArray(first.tracks) && first.tracks.length === 1 && first.tracks[0] === 'Food', JSON.stringify(first && first.tracks));
check('first session description is empty', Boolean(first) && first.description === '', JSON.stringify(first && first.description));
check('first session keeps original timeStart string', Boolean(first) && first.timeStart === '8:00 am', JSON.stringify(first && first.timeStart));
check('first session keeps original timeEnd string', Boolean(first) && first.timeEnd === '9:00 am', JSON.stringify(first && first.timeEnd));

console.log('');
if (failures > 0) {
  console.error(`RESULT: ${failures} check(s) FAILED`);
  process.exit(1);
}
console.log('RESULT: all checks passed');
