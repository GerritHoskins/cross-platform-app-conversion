#!/usr/bin/env node
// Blocks host clipboard data and credentials from entering the repository.
// Usage: node scripts/check-sensitive-data.mjs --staged | --all | <file>...
// Reports file paths and rule names only, never the matched content.
import { execFileSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';

const REDACTED = /redact/i;
const rules = [
  // Gboard clipboard history in `dumpsys input_method` captures (allowed only when redacted).
  // A section is allowed when it holds no clip entries (e.g. `clipItems = null`) or only redaction markers.
  { name: 'clipboard-section', test: (t) => [...t.matchAll(/\[ClipboardExtension[\s\S]*?\[\/ClipboardExtension/g)].some((m) => /ClipItem\{|clipItems\s*=\s*\[\s*[^\]\s]|clipText\s*=\s*[^\s,}]/.test(m[0]) && !REDACTED.test(m[0])) },
  { name: 'clipboard-item', test: (t) => [...t.matchAll(/ClipItem\{[^}]*\}?/g)].some((m) => !REDACTED.test(m[0])) },
  { name: 'github-token', test: (t) => /\bgh[pousr]_[A-Za-z0-9]{30,}/.test(t) },
  { name: 'openai-key', test: (t) => /\bsk-(proj-)?[A-Za-z0-9_-]{20,}/.test(t) },
  { name: 'aws-key', test: (t) => /\bAKIA[0-9A-Z]{16}\b/.test(t) },
  { name: 'private-key', test: (t) => /-----BEGIN [A-Z ]*PRIVATE KEY-----/.test(t) },
];
const BINARY = /\.(png|jpe?g|gif|webp|ico|ttf|woff2?|apk|aab|jar|zip|gz|keystore)$/i;
const SELF = 'scripts/check-sensitive-data.mjs';

const git = (args) => execFileSync('git', args, { encoding: 'utf8', maxBuffer: 1 << 30 });
const args = process.argv.slice(2);
let files;
let read = (f) => readFileSync(f);
if (args[0] === '--staged') {
  files = git(['diff', '--cached', '--name-only', '--diff-filter=ACMR', '-z']).split('\0').filter(Boolean);
  read = (f) => execFileSync('git', ['show', `:${f}`], { maxBuffer: 1 << 30 });
} else if (args[0] === '--all') {
  files = git(['ls-files', '-z']).split('\0').filter(Boolean);
} else {
  files = args;
}

const findings = [];
for (const f of files) {
  if (BINARY.test(f) || f === SELF || (args[0] !== '--staged' && !existsSync(f))) continue;
  const text = read(f).toString('utf8');
  for (const r of rules) if (r.test(text)) findings.push(`${f}: ${r.name}`);
}
if (findings.length) {
  console.error('Sensitive data check failed (content not shown):');
  for (const l of findings) console.error('  ' + l);
  console.error('Redact clipboard sections ([ClipboardExtension ...]) and remove credentials before committing.');
  process.exit(1);
}
console.log(`Sensitive data check passed (${files.length} files).`);
