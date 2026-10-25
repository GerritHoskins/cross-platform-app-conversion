#!/usr/bin/env node
// Fill in or verify every SHA-256 in a submission manifest from the files on disk.
// Agents must never type a hash by hand: run this with --write, then without it.
//
// Usage (from the repository root):
//   node migration/tools/manifest-hashes.mjs <manifest.json>            check only; exit 1 on any problem
//   node migration/tools/manifest-hashes.mjs <manifest.json> --write    recompute and save every hash, then check
//   node migration/tools/manifest-hashes.mjs <manifest.json> --compare <other.json>
//                                                                       also list SAME/DIFFERS per shared path (does not affect exit code)
//
// A hash entry is either an object with string `path` and `sha256`, or an object keyed by a
// path (a key containing "/" or ".") whose value has `sha256`. Paths are relative to the cwd.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const args = process.argv.slice(2);
const manifestPath = args[0];
const write = args.includes('--write');
const compareIndex = args.indexOf('--compare');
const comparePath = compareIndex >= 0 ? args[compareIndex + 1] : undefined;

if (!manifestPath || (compareIndex >= 0 && !comparePath)) {
  console.error('usage: node migration/tools/manifest-hashes.mjs <manifest.json> [--write] [--compare <other.json>]');
  process.exit(2);
}

const HEX64 = /^[0-9a-f]{64}$/;
const sha256 = path => createHash('sha256').update(readFileSync(path)).digest('hex');

// Returns [{ path, holder }] where holder.sha256 is the recorded hash.
function collect(node, out = []) {
  if (Array.isArray(node)) {
    node.forEach(item => collect(item, out));
  } else if (node && typeof node === 'object') {
    if (typeof node.path === 'string' && 'sha256' in node) out.push({ path: node.path, holder: node });
    for (const [key, value] of Object.entries(node)) {
      if (value && typeof value === 'object' && !Array.isArray(value) && 'sha256' in value
          && typeof value.path !== 'string' && /[/.]/.test(key)) {
        out.push({ path: key, holder: value });
      }
      collect(value, out);
    }
  }
  return out;
}

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const entries = collect(manifest);

if (write) {
  const missing = entries.filter(e => !existsSync(e.path));
  if (missing.length) {
    missing.forEach(e => console.error(`MISSING ${e.path}`));
    process.exit(1);
  }
  entries.forEach(e => { e.holder.sha256 = sha256(e.path); });
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
  console.log(`wrote ${entries.length} hashes to ${manifestPath}`);
}

let problems = 0;
for (const e of entries) {
  const recorded = e.holder.sha256;
  let status;
  if (typeof recorded !== 'string' || !HEX64.test(recorded)) status = 'INVALID';
  else if (!existsSync(e.path)) status = 'MISSING';
  else status = sha256(e.path) === recorded ? 'OK' : 'MISMATCH';
  if (status !== 'OK') problems++;
  console.log(`${status.padEnd(8)} ${String(recorded).slice(0, 12).padEnd(12)} ${e.path}`);
}

if (comparePath) {
  const other = new Map(collect(JSON.parse(readFileSync(comparePath, 'utf8'))).map(e => [e.path, e.holder.sha256]));
  for (const e of entries) {
    if (!other.has(e.path)) continue;
    // Informational only: a package is expected to differ on the files it changed.
    const same = other.get(e.path) === e.holder.sha256;
    console.log(`${same ? 'SAME' : 'DIFFERS'}     vs ${comparePath}: ${e.path}`);
  }
}

console.log(`${entries.length} hash entries, ${problems} problem(s)`);
process.exit(problems ? 1 : 0);
