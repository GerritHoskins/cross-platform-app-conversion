import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { validateTutorial, validateAppQuery, validateCaptureIndex, CAPTURE_NAMES } from '../capture-validator.mjs';

test('absent tutorial does not require invented dismissal', () => {
  assert.equal(validateTutorial({ tutorialStatus: 'absent', tutorialDismissed: false, tutorialEvidence: 'Direct observation: no tutorial appeared.' }), null);
});
test('dismissed tutorial requires a real recorded dismissal', () => {
  assert.equal(validateTutorial({ tutorialStatus: 'dismissed', tutorialDismissed: true, tutorialEvidence: 'Normal Cancel control used.' }), null);
  assert.throws(() => validateTutorial({ tutorialStatus: 'dismissed', tutorialDismissed: false, tutorialEvidence: 'Not dismissed' }));
});
test('unknown visibility remains an explicit pending pixel warning', () => {
  assert.match(validateTutorial({ tutorialStatus: 'unknown', tutorialEvidence: 'XML does not expose the keyboard overlay.' }), /UNKNOWN.*coordinator/);
});
test('visible, contradictory and legacy boolean-only tutorial claims fail', () => {
  for (const v of [
    { tutorialStatus: 'visible', tutorialEvidence: 'Overlay covers app.' },
    { tutorialStatus: 'absent', tutorialDismissed: true, tutorialEvidence: 'Contradictory' },
    { tutorialDismissed: true },
    { tutorialStatus: 'absent', tutorialEvidence: '' },
  ]) assert.throws(() => validateTutorial(v));
});
const field = (text, pkg = 'dev.translationtest.rn') => `<node text="${text}" class="android.widget.EditText" package="${pkg}" content-desc="Search sessions" hint="Search sessions" />`;
test('query is read from the app field, not the tutorial input or focus flag', () => {
  validateAppQuery(field('IOnic'), 'IOnic');
  validateAppQuery(field('Search sessions'), '');
  assert.throws(() => validateAppQuery(field('Search sessions') + field('IOnic', 'keyboard.tutorial'), 'IOnic'), /query mismatch/);
  assert.throws(() => validateAppQuery(field('IOnic', 'keyboard.tutorial'), 'IOnic'), /Exactly one/);
});

function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'qwen-capture-validator-'));
  t.after(() => {
    assert.equal(path.dirname(path.resolve(root)).toLowerCase(), fs.realpathSync(os.tmpdir()).toLowerCase());
    assert(path.basename(root).startsWith('qwen-capture-validator-') && !fs.lstatSync(root).isSymbolicLink());
    fs.rmSync(root, { recursive: true, force: true });
  });
  const base = 'migration/evidence/RN03/new-captures', head = 'a'.repeat(40);
  const put = (relative, content) => { const full = path.join(root, relative); fs.mkdirSync(path.dirname(full), { recursive: true }); fs.writeFileSync(full, content); };
  put('migration/evidence/RN03/old-capture.png', 'protected original');
  const captures = CAPTURE_NAMES.map(name => {
    const query = name.includes('search-ionic') ? 'IOnic' : name === 'RN03-06-search-no-match' ? 'zzz-no-such-session' : '';
    const c = { name, image: `${base}/${name}.png`, uiXml: `${base}/${name}.xml`, query, focusVerified: true, tutorialStatus: 'absent', tutorialDismissed: false, tutorialEvidence: 'Synthetic test fixture only.' };
    put(c.image, Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), Buffer.alloc(1100)]));
    put(c.uiXml, field(query || 'Search sessions') + (name.includes('no-match') ? '<node text="No sessions match your search or filters." />' : name.includes('favorites-empty') ? '<node text="No favorite sessions." />' : ''));
    return c;
  });
  for (const file of ['src/state/conference-state.tsx', 'src/screens/schedule-screen.tsx', 'src/app/_layout.tsx', 'src/app/index.tsx', '__tests__/conference-state.test.ts', '__tests__/schedule-screen.test.tsx']) put('migration/react-native/' + file, 'synthetic source');
  const data = { package: 'RN03', revision: 2, head, device: { appId: 'dev.translationtest.rn', avd: 'RN01_API36' }, captures };
  const save = () => put(base + '/capture-index.json', JSON.stringify(data)); save();
  return { root, base, data, save, options: { head, started: 0, write: true } };
}
test('write/check round trip computes hashes without touching original capture', t => {
  const f = fixture(t), first = validateCaptureIndex(f.root, f.base, f.options);
  assert.equal(first.pixelInspection, 'PENDING'); assert.equal(first.captures, 8);
  const second = validateCaptureIndex(f.root, f.base, { ...f.options, write: false });
  assert.equal(second.status, 'STRUCTURAL_CHECKS_PASSED');
  assert.equal(fs.readFileSync(path.join(f.root, 'migration/evidence/RN03/old-capture.png'), 'utf8'), 'protected original');
});
test('unknown tutorial state never becomes pixel approval', t => {
  const f = fixture(t); f.data.captures[0].tutorialStatus = 'unknown'; f.save();
  const result = validateCaptureIndex(f.root, f.base, f.options);
  assert.equal(result.pixelInspection, 'PENDING'); assert.equal(result.warnings.length, 1);
});
test('stale pair and wrong query are rejected before hashes are written', t => {
  const f = fixture(t);
  assert.throws(() => validateCaptureIndex(f.root, f.base, { ...f.options, started: Date.now() + 10000 }), /Stale capture/);
  f.data.captures[1].query = ''; f.save();
  assert.throws(() => validateCaptureIndex(f.root, f.base, f.options), /Wrong scenario query/);
});
test('changed screenshot or source cannot pass a later check', t => {
  const f = fixture(t); validateCaptureIndex(f.root, f.base, f.options);
  fs.appendFileSync(path.join(f.root, f.data.captures[0].image), 'changed');
  assert.throws(() => validateCaptureIndex(f.root, f.base, { ...f.options, write: false }), /Stale imageSha256/);
});
