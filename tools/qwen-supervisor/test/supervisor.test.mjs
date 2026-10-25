import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { runSupervisor, validateConfig, validateCheckpoint, repoPath } from '../supervisor.mjs';
import { createProgress, JsonlTail, watchRun } from '../progress.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const git = (root, ...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
const manifestTool = path.join(git(HERE, 'rev-parse', '--show-toplevel'), 'migration/tools/manifest-hashes.mjs');
function removeTemp(dir, prefix) {
  const target = path.resolve(dir);
  assert.equal(path.dirname(target).toLowerCase(), fs.realpathSync(os.tmpdir()).toLowerCase());
  assert(path.basename(target).startsWith(prefix) && !fs.lstatSync(target).isSymbolicLink());
  fs.rmSync(target, { recursive: true, force: true });
}
function fixture(t, settings = {}) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'qwen-supervisor-test-'));
  t.after(() => removeTemp(root, 'qwen-supervisor-test-'));
  fs.mkdirSync(path.join(root, 'tools/qwen-supervisor'), { recursive: true });
  fs.writeFileSync(path.join(root, 'tools/qwen-supervisor/.gitignore'), '.runs/\n');
  fs.mkdirSync(path.join(root, 'migration/tools'), { recursive: true });
  fs.copyFileSync(manifestTool, path.join(root, 'migration/tools/manifest-hashes.mjs'));
  fs.writeFileSync(path.join(root, 'instructions.md'), 'Bounded test task.');
  fs.writeFileSync(path.join(root, 'protected.txt'), 'preserve');
  fs.writeFileSync(path.join(root, 'IDEA.md'), 'do not expose this note');
  fs.writeFileSync(path.join(root, 'fake-settings.json'), JSON.stringify(settings));
  git(root, 'init', '--initial-branch=migration/slice-1');
  git(root, 'add', '.');
  git(root, '-c', 'user.name=Test', '-c', 'user.email=test@example.invalid', '-c', 'commit.gpgsign=false', 'commit', '-qm', 'fixture');
  const check = { id: 'assert-file', file: process.execPath, args: ['-e', 'require("fs").accessSync("product/result.txt")'], cwd: '.', timeoutSeconds: 10 };
  const config = { version: 1, package: 'TEST', assignment: 'Explicitly implement only the bounded disposable test package.', profile: 'translation-migration', branch: 'migration/slice-1', allowedPaths: ['product/', 'migration/submissions/TEST-r1.json'], readFiles: ['instructions.md'], hermes: { file: process.execPath, args: [path.join(HERE, 'fake-hermes.mjs')] }, phases: ['edit', 'verify'].map(id => ({ id, task: `Complete ${id} only`, budgetSeconds: 30, maxTurns: 5, checks: [check] })) };
  const configPath = path.join(root, 'supervisor-config.json');
  fs.writeFileSync(configPath, JSON.stringify(config));
  return { root, configPath, config, save: () => fs.writeFileSync(configPath, JSON.stringify(config)) };
}
const phases = run => fs.readdirSync(run).filter(p => /^\d\d-/.test(p));
const cp = (run, phase) => JSON.parse(fs.readFileSync(path.join(run, phase, 'checkpoint.json')));

test('two phases automatically use different fresh sessions and stop at the review boundary', async t => {
  const f = fixture(t), head = git(f.root, 'rev-parse', 'HEAD');
  const out = await runSupervisor(f.root, f.configPath);
  assert.equal(out.status, 'READY_FOR_REVIEW');
  const p = phases(out.runDir), a = cp(out.runDir, p[0]), b = cp(out.runDir, p[1]);
  assert.equal(p.length, 2); assert.notEqual(a.sessionId, b.sessionId);
  assert.equal(a.result.status, 'continue'); assert.equal(b.result.status, 'ready_for_review');
  assert.equal(b.receipts.length, 1); assert.equal(b.receipts[0].exitCode, 0);
  assert.equal(git(f.root, 'rev-parse', 'HEAD'), head);
  assert.equal(git(f.root, 'diff', '--cached'), '');
  const secondPrompt = fs.readFileSync(path.join(out.runDir, p[1], 'prompt.txt'), 'utf8');
  assert(secondPrompt.includes('Completed edit')); assert(!secondPrompt.includes('do not expose this note'));
  await assert.rejects(runSupervisor(f.root, f.configPath, { resume: out.runDir }), /Cannot renew state READY_FOR_REVIEW/);
});

test('dry run creates no runtime directory and launches no Hermes process', async t => {
  const f = fixture(t, { crash: true });
  assert.equal((await runSupervisor(f.root, f.configPath, { dryRun: true })).status, 'DRY_RUN');
  assert.equal(fs.existsSync(path.join(f.root, 'tools/qwen-supervisor/.runs')), false);
});

test('pause and resume validate checkpoint before launching a new session', async t => {
  const f = fixture(t);
  const first = await runSupervisor(f.root, f.configPath, { pauseAfter: 1 });
  assert.equal(first.status, 'CHECKPOINTED'); assert.equal(phases(first.runDir).length, 1);
  const second = await runSupervisor(f.root, f.configPath, { resume: first.runDir });
  assert.equal(second.status, 'READY_FOR_REVIEW');
  assert.equal(phases(first.runDir).length, 2);
});

test('resume rejects a stale file checkpoint and never launches the next phase', async t => {
  const f = fixture(t);
  const first = await runSupervisor(f.root, f.configPath, { pauseAfter: 1 });
  fs.writeFileSync(path.join(f.root, 'product/result.txt'), 'tampered');
  await assert.rejects(runSupervisor(f.root, f.configPath, { resume: first.runDir }), /stale/);
  assert.equal(phases(first.runDir).length, 1);
});

test('checkpoint receipt and evidence tampering are rejected', async t => {
  const f = fixture(t), out = await runSupervisor(f.root, f.configPath, { pauseAfter: 1 });
  const original = cp(out.runDir, '01-edit');
  const broken = structuredClone(original); broken.receipts = [];
  assert.throws(() => validateCheckpoint(broken, f.root, f.config), /receipts mismatch/);
  original.evidence[0].sha256 = '0'.repeat(64);
  assert.throws(() => validateCheckpoint(original, f.root, f.config), /evidence stale/);
});

for (const [setting, expected] of [
  ['badRoute', /Routing mismatch/], ['wrongParent', /Wrong\/reused/], ['reuseSession', /Wrong\/reused/],
  ['missingResult', /Missing\/oversized/], ['invalidStream', /Incomplete\/failed/], ['failedResult', /Incomplete\/failed/],
  ['wrongNext', /next phase/], ['outside', /Out-of-scope/], ['indexChange', /index changed/],
  ['staleManifest', /Stale submission hash/], ['omitInventory', /inventory required/], ['crash', /Incomplete\/failed/],
  ['skipPhases', /Cannot skip configured phases/],
]) test(`${setting}: stops instead of renewing`, async t => {
  const f = fixture(t, { [setting]: true });
  await assert.rejects(runSupervisor(f.root, f.configPath), expected);
  const runs = path.join(f.root, 'tools/qwen-supervisor/.runs');
  assert.equal(fs.existsSync(path.join(runs, 'active.lock')), false);
});

test('failed machine-executed check overrides agent success and stops before phase two', async t => {
  const f = fixture(t); f.config.phases[0].checks[0].args = ['-e', 'process.exit(7)']; f.save();
  await assert.rejects(runSupervisor(f.root, f.configPath), /Check failed/);
  const run = fs.readdirSync(path.join(f.root, 'tools/qwen-supervisor/.runs'))[0];
  const runDir = path.join(f.root, 'tools/qwen-supervisor/.runs', run);
  assert.equal(phases(runDir).length, 1);
  const receipt = JSON.parse(fs.readFileSync(path.join(runDir, '01-edit/assert-file.receipt.json')));
  assert.equal(receipt.exitCode, 7);
});

test('blocked work does not run checks or renew', async t => {
  const f = fixture(t, { blocked: true });
  const out = await runSupervisor(f.root, f.configPath);
  assert.equal(out.status, 'BLOCKED'); assert.equal(phases(out.runDir).length, 1);
  assert.equal(fs.existsSync(path.join(out.runDir, '01-edit/assert-file.receipt.json')), false);
});

test('unexpected delegation freezes renewal and cannot be resumed as work', async t => {
  const f = fixture(t, { delegate: true });
  const out = await runSupervisor(f.root, f.configPath);
  assert.equal(out.status, 'REVIEW_PENDING'); assert.equal(phases(out.runDir).length, 1);
  assert.equal(fs.existsSync(path.join(out.runDir, '01-edit/checkpoint.json')), false);
  await assert.rejects(runSupervisor(f.root, f.configPath, { resume: out.runDir }), /Cannot renew state REVIEW_PENDING/);
});

test('existing repository lock prevents a competing runner and is preserved', async t => {
  const f = fixture(t), runs = path.join(f.root, 'tools/qwen-supervisor/.runs');
  fs.mkdirSync(runs); fs.writeFileSync(path.join(runs, 'active.lock'), 'existing lock');
  await assert.rejects(runSupervisor(f.root, f.configPath), /EEXIST/);
  assert.equal(fs.readFileSync(path.join(runs, 'active.lock'), 'utf8'), 'existing lock');
});

test('unsafe paths and supervisor edits cannot be assigned', t => {
  const f = fixture(t);
  for (const p of ['../outside', '/absolute', 'C:/outside', 'IDEA.md', '.git/config', 'product/../../outside', 'node_modules/a', 'product\\a']) {
    assert.throws(() => repoPath(f.root, p, { missing: true }), /path|Path|Protected/);
  }
  f.config.allowedPaths = ['tools/qwen-supervisor/supervisor.mjs'];
  assert.throws(() => validateConfig(f.config, f.root), /supervisor/);
});

test('symlink/junction path cannot escape the repository', t => {
  const f = fixture(t), outside = fs.mkdtempSync(path.join(os.tmpdir(), 'qwen-supervisor-outside-'));
  t.after(() => removeTemp(outside, 'qwen-supervisor-outside-'));
  fs.symlinkSync(outside, path.join(f.root, 'escape'), process.platform === 'win32' ? 'junction' : 'dir');
  assert.throws(() => repoPath(f.root, 'escape/file', { missing: true }), /Symlink/);
});

test('resume refuses a changed configuration', async t => {
  const f = fixture(t), out = await runSupervisor(f.root, f.configPath, { pauseAfter: 1 });
  f.config.phases[1].task = 'A different task'; f.save();
  await assert.rejects(runSupervisor(f.root, f.configPath, { resume: out.runDir }), /Config changed/);
  assert.equal(phases(out.runDir).length, 1);
});

test('a timed-out check cannot generate a checkpoint or launch phase two', async t => {
  const f = fixture(t);
  f.config.phases[0].checks[0].args = ['-e', 'setTimeout(()=>{}, 30000)'];
  f.config.phases[0].checks[0].timeoutSeconds = 1; f.save();
  await assert.rejects(runSupervisor(f.root, f.configPath), /Check failed/);
  const run = fs.readdirSync(path.join(f.root, 'tools/qwen-supervisor/.runs'))[0];
  const runDir = path.join(f.root, 'tools/qwen-supervisor/.runs', run);
  assert.equal(phases(runDir).length, 1);
  assert.equal(fs.existsSync(path.join(runDir, '01-edit/checkpoint.json')), false);
  assert.equal(JSON.parse(fs.readFileSync(path.join(runDir, '01-edit/assert-file.receipt.json'))).timedOut, true);
});

test('live progress reports phases, Qwen activity, machine checks and review stop', async t => {
  const f = fixture(t), messages = [];
  const out = await runSupervisor(f.root, f.configPath, { progressWrite: line => messages.push(line) });
  assert.equal(out.status, 'READY_FOR_REVIEW');
  const text = messages.join('\n');
  assert.match(text, /Phase 1\/2: edit/);
  assert.match(text, /Qwen session .*model qwen3\.8:27b/);
  assert.match(text, /Qwen: Checking scoped files/);
  assert.match(text, /Qwen tool started: read_file/);
  assert.match(text, /Qwen tool finished: read_file/);
  assert.match(text, /Check assert-file: RUNNING/);
  assert.match(text, /Check assert-file: PASS; exit 0/);
  assert.match(text, /Starting fresh-session handoff to verify/);
  assert.match(text, /READY_FOR_REVIEW: stopping/);
  assert(!text.includes('do not expose this note'));
  assert(!text.includes('private-do-not-echo'));
});

test('failed check prints FAIL without reporting checkpoint success', async t => {
  const f = fixture(t), messages = [];
  f.config.phases[0].checks[0].args = ['-e', 'process.exit(7)']; f.save();
  await assert.rejects(runSupervisor(f.root, f.configPath, { progressWrite: line => messages.push(line) }), /Check failed/);
  const text = messages.join('\n');
  assert.match(text, /Check assert-file: FAIL; exit 7/);
  assert.match(text, /FAILED:/);
  assert(!text.includes('Checkpoint validated'));
});

test('progress batches text and shows waiting heartbeat without claiming a stall', () => {
  const messages = []; let now = 0;
  const progress = createProgress({ write: line => messages.push(line), now: () => now, heartbeatMs: 100, timer: false });
  progress.stage('Waiting for Qwen');
  progress.event({ type: 'text', text: 'Hel' }); progress.event({ type: 'text', text: 'lo' });
  assert.equal(messages.length, 1);
  progress.tick(); assert.match(messages.at(-1), /Qwen: Hello/);
  now = 101; progress.tick(); assert.match(messages.at(-1), /Still active: Waiting for Qwen; waiting for output/);
  progress.close(); const count = messages.length;
  now = 300; progress.tick(); assert.equal(messages.length, count);
});

test('JSONL tail handles incomplete UTF-8, partial lines and file truncation', t => {
  const f = fixture(t), file = path.join(f.root, 'tail.jsonl'), bytes = Buffer.from(JSON.stringify({ type: 'text', text: 'café' }) + '\n');
  const cut = bytes.indexOf(Buffer.from('é')) + 1;
  fs.writeFileSync(file, bytes.subarray(0, cut)); const tail = new JsonlTail(file);
  assert.deepEqual(tail.read(), []);
  fs.appendFileSync(file, bytes.subarray(cut)); assert.deepEqual(tail.read(), [{ type: 'text', text: 'café' }]);
  assert.deepEqual(tail.read(), []);
  fs.writeFileSync(file, '{"type":"text","text":"x"}\n');
  assert.deepEqual(tail.read(), [{ type: 'text', text: 'x' }]);
});

test('watch attaches read-only to an existing completed run and shows receipts', async t => {
  const f = fixture(t), run = path.join(f.root, 'existing-run'), phase = path.join(run, '01-existing');
  fs.mkdirSync(phase, { recursive: true });
  fs.writeFileSync(path.join(run, 'state.json'), JSON.stringify({ package: 'RN03', status: 'BLOCKED', phaseIndex: 0 }));
  fs.writeFileSync(path.join(phase, 'stream.jsonl'), JSON.stringify({ type: 'system', subtype: 'init', session_id: 'existing-session', model: 'qwen3.8:27b' }) + '\n');
  fs.writeFileSync(path.join(phase, 'test.receipt.json'), JSON.stringify({ id: 'test', exitCode: 0 }));
  const before = fs.readdirSync(run, { recursive: true }).map(p => [p, fs.statSync(path.join(run, p)).isFile() ? fs.readFileSync(path.join(run, p), 'utf8') : null]);
  const messages = [], out = await watchRun(run, { write: line => messages.push(line) });
  assert.equal(out.status, 'BLOCKED');
  assert.match(messages.join('\n'), /existing-session/);
  assert.match(messages.join('\n'), /check test: PASS/);
  assert.match(messages.join('\n'), /Run stopped: BLOCKED/);
  const after = fs.readdirSync(run, { recursive: true }).map(p => [p, fs.statSync(path.join(run, p)).isFile() ? fs.readFileSync(path.join(run, p), 'utf8') : null]);
  assert.deepEqual(after, before);
});

test('watch follows appended activity and a failed check until terminal state', async t => {
  const f = fixture(t), run = path.join(f.root, 'live-run'), phase = path.join(run, '01-existing');
  fs.mkdirSync(phase, { recursive: true });
  fs.writeFileSync(path.join(run, 'state.json'), JSON.stringify({ package: 'RN03', status: 'RUNNING', phaseIndex: 0 }));
  const messages = [];
  const timer = setTimeout(() => {
    fs.writeFileSync(path.join(phase, 'stream.jsonl'), JSON.stringify({ type: 'tool_use', name: 'read_file' }) + '\n');
    fs.writeFileSync(path.join(phase, 'test.receipt.json'), JSON.stringify({ id: 'test', exitCode: 7 }));
    fs.writeFileSync(path.join(run, 'state.json'), JSON.stringify({ package: 'RN03', status: 'FAILED', phaseIndex: 0, error: 'Check failed' }));
  }, 80);
  t.after(() => clearTimeout(timer));
  const out = await watchRun(run, { write: line => messages.push(line), intervalMs: 10 });
  assert.equal(out.status, 'FAILED');
  assert.match(messages.join('\n'), /tool started: read_file/);
  assert.match(messages.join('\n'), /check test: FAIL \(exit 7\)/);
});

test('stopping a watcher does not change a running session', async t => {
  const f = fixture(t), run = path.join(f.root, 'watch-stop'); fs.mkdirSync(run);
  const state = JSON.stringify({ package: 'RN03', status: 'RUNNING', phaseIndex: 0 });
  fs.writeFileSync(path.join(run, 'state.json'), state);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 40); t.after(() => clearTimeout(timer));
  assert.equal((await watchRun(run, { write() {}, intervalMs: 10, signal: controller.signal })).status, 'WATCH_STOPPED');
  assert.equal(fs.readFileSync(path.join(run, 'state.json'), 'utf8'), state);
});
