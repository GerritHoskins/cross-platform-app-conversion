#!/usr/bin/env node
// Structural/provenance checks only. Pixel inspection remains a separate review gate.
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { repoPath } from './supervisor.mjs';

export const CAPTURE_NAMES = ['RN03-01-initial-schedule', 'RN03-02-search-ionic-top', 'RN03-03-search-ionic-scrolled', 'RN03-04-search-ionic-bottom', 'RN03-05-ionic-cleared-restored', 'RN03-06-search-no-match', 'RN03-07-favorites-empty', 'RN03-08-all-sessions-restored'];
const SOURCES = ['src/state/conference-state.tsx', 'src/screens/schedule-screen.tsx', 'src/app/_layout.tsx', 'src/app/index.tsx', '__tests__/conference-state.test.ts', '__tests__/schedule-screen.test.tsx'].map(p => 'migration/react-native/' + p);
export function validateTutorial(capture) {
  assert(['absent', 'dismissed', 'unknown', 'visible'].includes(capture.tutorialStatus), 'Explicit tutorialStatus required: absent/dismissed/unknown/visible');
  assert.equal(typeof capture.tutorialEvidence, 'string', 'Describe actual tutorial evidence');
  assert(capture.tutorialEvidence.trim().length > 0, 'Tutorial evidence cannot be empty');
  assert.notEqual(capture.tutorialStatus, 'visible', 'Visible tutorial obstructs capture; stop instead of claiming a valid state');
  if (capture.tutorialStatus === 'absent') assert(capture.tutorialDismissed !== true, 'Absent tutorial was not dismissed');
  if (capture.tutorialStatus === 'dismissed') assert(capture.tutorialDismissed === true, 'Dismissed status requires actual normal-UI dismissal');
  return capture.tutorialStatus === 'unknown' ? 'Tutorial visibility UNKNOWN; XML silence is not pixel evidence; coordinator inspection required.' : null;
}

const decode = value => value.replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
export function validateAppQuery(xml, query) {
  assert.equal(typeof query, 'string', 'Capture query must be explicit');
  const fields = [...xml.matchAll(/<node\b([^>]*?)\/?\s*>/g)].map(m => Object.fromEntries([...m[1].matchAll(/([\w:-]+)="([^"]*)"/g)].map(a => [a[1], decode(a[2])]))).filter(a => a.class === 'android.widget.EditText' && a.package === 'dev.translationtest.rn' && (a['content-desc'] === 'Search sessions' || a.hint === 'Search sessions'));
  assert.equal(fields.length, 1, 'Exactly one app search field required; tutorial fields do not qualify');
  const field = fields[0], text = field.text ?? '';
  assert(query === '' ? text === '' || (text === 'Search sessions' && field.hint === 'Search sessions') : text === query, `App query mismatch: expected ${JSON.stringify(query)}, got ${JSON.stringify(text)}`);
}

export function validateCaptureIndex(root, base, { write = false, started, head } = {}) {
  const indexPath = repoPath(root, base + '/capture-index.json'), data = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
  assert.equal(data.package, 'RN03'); assert.equal(data.revision, 2);
  assert.equal(data.device.appId, 'dev.translationtest.rn'); assert.equal(data.device.avd, 'RN01_API36');
  assert.equal(data.head, head ?? execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim());
  assert.deepEqual(data.captures.map(c => c.name), CAPTURE_NAMES);
  const startMs = started ?? Date.parse(JSON.parse(fs.readFileSync(repoPath(root, 'tools/qwen-supervisor/.runs/active.lock'), 'utf8')).started);
  assert(Number.isFinite(startMs), 'Valid run start required');
  const hash = p => createHash('sha256').update(fs.readFileSync(repoPath(root, p))).digest('hex');
  const warnings = [];
  for (const capture of data.captures) {
    assert.equal(capture.image, base + '/' + capture.name + '.png');
    assert.equal(capture.uiXml, base + '/' + capture.name + '.xml');
    const warning = validateTutorial(capture); if (warning) warnings.push(capture.name + ': ' + warning);
    assert.equal(capture.focusVerified, true, 'Field identity/query must have been checked before capture');
    const png = repoPath(root, capture.image), xmlPath = repoPath(root, capture.uiXml), bytes = fs.readFileSync(png);
    assert(bytes.length > 1000 && bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])), 'Invalid PNG');
    assert(fs.statSync(png).mtimeMs >= startMs && fs.statSync(xmlPath).mtimeMs >= startMs, 'Stale capture pair');
    const xml = fs.readFileSync(xmlPath, 'utf8');
    const expectedQuery = capture.name.includes('search-ionic') ? 'IOnic' : capture.name === 'RN03-06-search-no-match' ? 'zzz-no-such-session' : '';
    assert.equal(capture.query, expectedQuery, 'Wrong scenario query');
    validateAppQuery(xml, capture.query);
    if (capture.name === 'RN03-06-search-no-match') assert(xml.includes('No sessions match your search or filters.') && !/resource-id="session-\d+"/.test(xml), 'No-match app state not corroborated');
    if (capture.name === 'RN03-07-favorites-empty') assert(xml.includes('No favorite sessions.'), 'Favorite empty app state not corroborated');
    const values = { imageSha256: hash(capture.image), uiXmlSha256: hash(capture.uiXml) };
    for (const [key, value] of Object.entries(values)) {
      if (write) capture[key] = value;
      else assert.equal(capture[key], value, `Stale ${key}`);
    }
  }
  const sources = SOURCES.map(p => ({ path: p, sha256: hash(p) }));
  if (write) data.sourceFiles = sources; else assert.deepEqual(data.sourceFiles, sources, 'Source changed after capture');
  if (write) fs.writeFileSync(indexPath, JSON.stringify(data, null, 2) + '\n');
  return { status: 'STRUCTURAL_CHECKS_PASSED', pixelInspection: 'PENDING', warnings, captures: data.captures.length };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const [base, option] = process.argv.slice(2);
    assert(base && (!option || option === '--write'), 'Usage: node capture-validator.mjs <relative-capture-directory> [--write]');
    const root = execFileSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' }).trim();
    console.log(JSON.stringify(validateCaptureIndex(root, base, { write: option === '--write' }), null, 2));
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
