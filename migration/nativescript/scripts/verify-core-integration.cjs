'use strict';

// Read-only NS02 integration verification. Paths are independent of the caller's cwd.
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const { createRequire } = require('node:module');

const target = path.resolve(__dirname, '..');
const root = path.resolve(target, '../..');
const sibling = path.join(root, 'migration/core');
const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const sha256 = (file) => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');

function inventory(dir, prefix = '') {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const relative = path.posix.join(prefix, entry.name);
    return entry.isDirectory()
      ? inventory(path.join(dir, entry.name), relative)
      : [{ path: relative, sha256: sha256(path.join(dir, entry.name)) }];
  }).sort((a, b) => a.path.localeCompare(b.path));
}

function verify() {
  const source = path.join(root, 'public/data/data.json');
  const bundled = path.join(target, 'src/data/conference.json');
  const reference = readJson(path.join(root, 'migration/reference/expected-cases.json'));
  assert.equal(typeof reference.sourceDataSha256, 'string');
  assert.equal(typeof reference.normalizedSessionCount, 'number');
  const sourceSha256 = sha256(source);
  const bundledSha256 = sha256(bundled);
  console.log(JSON.stringify({ source, bundled, sourceSha256, bundledSha256, referenceSha256: reference.sourceDataSha256 }, null, 2));
  assert.equal(sourceSha256, reference.sourceDataSha256, 'source fixture differs from reference');
  assert.equal(bundledSha256, reference.sourceDataSha256, 'bundled fixture differs from reference');
  console.log('PASS fixture raw-byte SHA-256 agreement');

  const targetManifest = path.join(target, 'package.json');
  assert.equal(readJson(targetManifest).dependencies['@migration/core'], 'file:../core');
  const targetRequire = createRequire(targetManifest);
  const resolvedEntry = targetRequire.resolve('@migration/core');
  const realEntry = fs.realpathSync(resolvedEntry);
  console.log(`resolved public entry: ${resolvedEntry}`);
  console.log(`real public entry: ${realEntry}`);
  assert.equal(path.basename(resolvedEntry), 'index.js', 'public entry must be compiled index.js');
  assert.equal(path.basename(path.dirname(resolvedEntry)), 'dist', 'public entry must be under dist');
  const resolvedRoot = path.dirname(path.dirname(resolvedEntry));
  const resolvedPackage = readJson(path.join(resolvedRoot, 'package.json'));
  const siblingPackage = readJson(path.join(sibling, 'package.json'));
  for (const field of ['name', 'version', 'main', 'types', 'exports']) {
    assert.deepEqual(resolvedPackage[field], siblingPackage[field], `core manifest ${field} differs`);
  }
  assert.equal(resolvedPackage.name, '@migration/core');
  assert.equal(resolvedPackage.main, 'dist/index.js');
  assert.equal(resolvedPackage.types, 'dist/index.d.ts');
  assert.equal(resolvedPackage.exports['.'].require, './dist/index.js');
  assert.equal(resolvedPackage.exports['.'].default, './dist/index.js');
  assert.equal(resolvedPackage.exports['.'].types, './dist/index.d.ts');
  assert.ok(fs.statSync(path.join(resolvedRoot, resolvedPackage.types)).isFile(), 'compiled declarations missing');

  const installedPath = path.join(target, 'node_modules/@migration/core');
  const installedRealPath = fs.realpathSync(installedPath);
  const symlink = fs.lstatSync(installedPath).isSymbolicLink();
  console.log(`installed package path: ${installedPath}`);
  console.log(`installed real path: ${installedRealPath}`);
  console.log(symlink
    ? `install is a symlink/junction to ${fs.readlinkSync(installedPath)} (not an independent copy)`
    : 'install is not a symlink/junction');
  assert.equal(installedRealPath, fs.realpathSync(resolvedRoot), 'installed and publicly resolved package roots differ');
  const siblingInventory = inventory(path.join(sibling, 'dist'));
  const installedInventory = inventory(path.join(installedPath, 'dist'));
  const resolvedInventory = inventory(path.join(resolvedRoot, 'dist'));
  assert.ok(siblingInventory.length > 0, 'sibling compiled dist is empty');
  assert.deepEqual(installedInventory, siblingInventory, 'installed dist inventory or byte hashes differ');
  assert.deepEqual(resolvedInventory, siblingInventory, 'resolved dist inventory or byte hashes differ');
  console.log(JSON.stringify({ siblingDistInventory: siblingInventory }, null, 2));
  console.log(`PASS installed/resolved/sibling dist inventory and SHA-256: ${siblingInventory.length} files`);

  const { normalizeConference } = targetRequire('@migration/core');
  assert.equal(typeof normalizeConference, 'function');
  const conference = normalizeConference(readJson(bundled));
  assert.equal(conference.sessions.length, reference.normalizedSessionCount);
  const first = conference.sessions[0];
  const expected = {
    id: 1,
    name: 'Breakfast',
    timeStart: '8:00 am',
    timeEnd: '9:00 am',
    startMinutes: 480,
    endMinutes: 540,
    groupTime: '8:00 am',
    tracks: ['Food'],
    description: '',
  };
  for (const [field, value] of Object.entries(expected)) {
    assert.deepEqual(first[field], value, `first session ${field} differs`);
  }
  console.log(JSON.stringify({ normalizedSessionCount: conference.sessions.length, firstSession: first }, null, 2));
  console.log('RESULT: all public compiled-core and bundled-fixture checks passed (no build or device claim)');
}

try {
  verify();
} catch (error) {
  console.error(`FAIL: ${error.stack || error}`);
  process.exitCode = 1;
}
