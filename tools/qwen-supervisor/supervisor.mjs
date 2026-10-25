#!/usr/bin/env node
// Dependency-free, fail-closed phase runner. It is an orchestrator, not a sandbox.
import { spawn, execFileSync } from 'node:child_process';
import { createHash, randomUUID } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync, mkdirSync, realpathSync, lstatSync, unlinkSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createProgress, watchRun } from './progress.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const digest = value => createHash('sha256').update(value).digest('hex');
const json = file => JSON.parse(readFileSync(file, 'utf8'));
const assert = (ok, message) => { if (!ok) throw new Error(message); };
const MAX_RESULT = 16_384;
const ROUTE = { 'model.default': 'qwen3.8:27b', 'model.provider': 'ollama-launch', 'fallback_providers': [], 'delegation.provider': 'openai-codex', 'delegation.model': 'gpt-6.1-sol', 'delegation.reasoning_effort': 'high', 'delegation.fallback_providers': [] };
const atomic = (file, value) => {
  // Single-writer lock and immutable phase directories prevent competing writers.
  writeFileSync(file, JSON.stringify(value, null, 2) + '\n', { flag: 'wx' });
};
const git = (root, args) => execFileSync('git', args, { cwd: root, encoding: 'utf8', windowsHide: true }).trimEnd();

export function repoPath(root, relative, { missing = false } = {}) {
  assert(typeof relative === 'string' && relative.length > 0 && relative.length <= 1024 && !relative.includes('\\') && !relative.includes('\0'), 'Use bounded relative forward-slash paths');
  const parts = relative.replace(/\/$/, '').split('/');
  assert(!path.isAbsolute(relative) && !/^[a-z]:/i.test(relative) && parts.every(p => p && p !== '.' && p !== '..' && !p.includes(':')), `Unsafe path: ${relative}`);
  assert(!parts.some(p => ['.git', 'node_modules'].includes(p.toLowerCase())) && relative.toLowerCase() !== 'idea.md', `Protected path: ${relative}`);
  let current = root;
  for (const part of parts) {
    current = path.join(current, part);
    if (existsSync(current)) assert(!lstatSync(current).isSymbolicLink(), `Symlink/junction disallowed: ${relative}`);
    else assert(missing, `Missing path: ${relative}`);
  }
  return current;
}

export function snapshot(root) {
  const files = git(root, ['ls-files', '-z', '--cached', '--others', '--exclude-standard']).split('\0').filter(Boolean);
  const out = {};
  for (const file of [...new Set(files)].sort()) {
    if (file.startsWith('tools/qwen-supervisor/.runs/')) continue;
    const full = path.join(root, file);
    if (!existsSync(full)) out[file] = null;
    else {
      assert(!lstatSync(full).isSymbolicLink(), `Snapshot refuses symlink: ${file}`);
      out[file] = digest(readFileSync(full)); // IDEA is hashed only, never included in prompts/logs.
    }
  }
  return out;
}

const matches = (file, allow) => allow.some(p => p.endsWith('/') ? file.startsWith(p) : file === p);
export function changed(before, after) {
  return [...new Set([...Object.keys(before), ...Object.keys(after)])].sort().filter(p => before[p] !== after[p]);
}

export function validateConfig(config, root) {
  assert(config.version === 1 && /^[A-Z][A-Z0-9]{1,15}$/.test(config.package), 'Invalid config version/package');
  assert(typeof config.assignment === 'string' && config.assignment.length >= 10 && !config.assignment.includes('REPLACE'), 'An explicit assignment is required');
  assert(config.profile === 'translation-migration' && typeof config.branch === 'string', 'Dedicated profile and branch required');
  assert(Array.isArray(config.allowedPaths) && config.allowedPaths.length > 0, 'Explicit allowedPaths required');
  for (const p of config.allowedPaths) {
    repoPath(root, p, { missing: true });
    assert(!p.startsWith('tools/qwen-supervisor/'), 'Agent may not edit supervisor or its runtime directory');
  }
  assert(Array.isArray(config.readFiles) && config.readFiles.length <= 12, 'At most 12 bounded initial reads');
  for (const file of config.readFiles) assert(lstatSync(repoPath(root, file)).isFile(), 'Initial reads must be files');
  assert(Array.isArray(config.phases) && config.phases.length > 0 && config.phases.length <= 8, 'Declare 1–8 bounded phases');
  const ids = new Set();
  for (const phase of config.phases) {
    assert(/^[a-z][a-z0-9-]{0,39}$/.test(phase.id) && !ids.has(phase.id), 'Unique phase IDs required'); ids.add(phase.id);
    assert(typeof phase.task === 'string' && phase.task.length <= 4000, 'Phase task must be bounded');
    assert(Number.isInteger(phase.maxTurns) && phase.maxTurns >= 1 && phase.maxTurns <= 30, 'maxTurns must be 1–30');
    assert(Number.isInteger(phase.budgetSeconds) && phase.budgetSeconds >= 30 && phase.budgetSeconds <= 1200, 'budgetSeconds must be 30–1200');
    assert(Array.isArray(phase.checks) && phase.checks.length <= 12, 'Explicit checks array required');
    for (const check of phase.checks) {
      assert(/^[a-z][a-z0-9-]{0,39}$/.test(check.id) && typeof check.file === 'string', 'Invalid check command');
      assert(Array.isArray(check.args) && check.args.every(a => typeof a === 'string'), 'Check args must be an array of strings');
      assert(check.cwd === '.' || repoPath(root, check.cwd), 'Invalid check cwd');
      assert(Number.isInteger(check.timeoutSeconds) && check.timeoutSeconds >= 1 && check.timeoutSeconds <= 1200, 'Check timeout required');
    }
    assert(new Set(phase.checks.map(c => c.id)).size === phase.checks.length, 'Duplicate check IDs');
  }
  if (config.hermes) assert(typeof config.hermes.file === 'string' && Array.isArray(config.hermes.args) && config.hermes.args.every(a => typeof a === 'string'), 'Invalid Hermes command');
  return config;
}

export function validateResult(result, config, index, root) {
  const phase = config.phases[index];
  assert(result.version === 1 && result.package === config.package && result.phase === phase.id, 'Wrong result identity');
  assert(['continue', 'ready_for_review', 'blocked'].includes(result.status), 'Invalid result status');
  assert(typeof result.summary === 'string' && result.summary.length > 0 && result.summary.length <= 3000, 'Bounded summary required');
  assert(Array.isArray(result.unresolved) && result.unresolved.length <= 10 && result.unresolved.every(s => typeof s === 'string' && s.length <= 500), 'Invalid unresolved findings');
  assert(Array.isArray(result.evidence) && result.evidence.length <= 30, 'Bounded evidence list required');
  for (const file of result.evidence) repoPath(root, file);
  const next = config.phases[index + 1]?.id ?? null;
  assert(result.nextPhase === (result.status === 'continue' ? next : null), 'Agent cannot select its own next phase');
  if (result.status === 'continue') assert(next !== null, 'Last phase must stop for review or blocker');
  if (result.status === 'ready_for_review') {
    assert(index === config.phases.length - 1, 'Cannot skip configured phases to request review');
    assert(result.unresolved.length === 0, 'Unresolved findings cannot be ready for review');
  }
  return result;
}

export function verifySubmission(root, config, result, delta) {
  assert(typeof result.submission === 'string' && new RegExp(`^migration/submissions/${config.package}-r[1-9][0-9]*\\.json$`).test(result.submission), 'Ready state requires a revisioned package submission');
  const full = repoPath(root, result.submission);
  const manifest = json(full);
  assert(manifest.package === config.package && Number.isInteger(manifest.revision) && manifest.revision >= 1 && result.submission.endsWith(`-r${manifest.revision}.json`), 'Submission identity mismatch');
  assert(manifest.head === git(root, ['rev-parse', 'HEAD']) && manifest.branch === config.branch, 'Submission baseline mismatch');
  assert(Array.isArray(manifest.files) && manifest.files.length > 0, 'Submission deliverable inventory required');
  const paths = new Set();
  for (const item of manifest.files) {
    assert(!paths.has(item.path) && item.path !== result.submission, 'Duplicate/self hash in submission'); paths.add(item.path);
    assert(/^[a-f0-9]{64}$/.test(item.sha256) && digest(readFileSync(repoPath(root, item.path))) === item.sha256, `Stale submission hash: ${item.path}`);
  }
  assert(delta.every(p => p === result.submission || paths.has(p)), 'Submission omits changed deliverables');
  return manifest;
}

export function validateCheckpoint(cp, root, config, previousHash = null) {
  assert(cp.version === 1 && cp.package === config.package && cp.configHash === digest(JSON.stringify(config)), 'Checkpoint config mismatch');
  assert(cp.previousHash === previousHash, 'Checkpoint chain mismatch');
  assert(cp.head === git(root, ['rev-parse', 'HEAD']) && cp.branch === git(root, ['branch', '--show-current']), 'Checkpoint Git baseline is stale');
  assert(cp.indexHash === digest(git(root, ['diff', '--cached', '--binary'])), 'Checkpoint index is stale');
  assert(JSON.stringify(cp.files) === JSON.stringify(snapshot(root)), 'Checkpoint file inventory/hashes are stale');
  assert(Number.isInteger(cp.phaseIndex) && cp.phaseIndex >= 0 && cp.phaseIndex < config.phases.length, 'Invalid checkpoint phase');
  assert(cp.sessionId && Array.isArray(cp.receipts) && cp.receipts.every(r => r.exitCode === 0 && !r.timedOut && !r.interrupted), 'Invalid checkpoint session/checks');
  const expected = config.phases[cp.phaseIndex].checks;
  assert(cp.receipts.length === expected.length && expected.every((c, i) => cp.receipts[i].id === c.id && cp.receipts[i].file === c.file && JSON.stringify(cp.receipts[i].args) === JSON.stringify(c.args) && cp.receipts[i].cwd === c.cwd), 'Checkpoint check receipts mismatch');
  assert(Array.isArray(cp.evidence) && cp.evidence.every(e => digest(readFileSync(repoPath(root, e.path))) === e.sha256), 'Checkpoint evidence stale');
  validateResult(cp.result, config, cp.phaseIndex, root);
  return cp;
}

async function execute(file, args, { cwd, timeoutSeconds, onLine = () => {}, stdoutFile, stderrFile }) {
  const child = spawn(file, args, { cwd, shell: false, windowsHide: true, stdio: ['ignore', 'pipe', 'pipe'] });
  child.stdout.setEncoding('utf8');
  child.stderr.setEncoding('utf8');
  let stdout = '', stderr = '', partial = '', timedOut = false, interrupted = false;
  const append = (destination, data) => { if (destination) writeFileSync(destination, data, { flag: 'a' }); };
  child.stdout.on('data', chunk => {
    append(stdoutFile, chunk); stdout = (stdout + chunk).slice(-262144); partial += chunk.toString();
    if (partial.length > 1_048_576) { interrupted = true; child.kill(); return; }
    let newline;
    while ((newline = partial.indexOf('\n')) >= 0) { const line = partial.slice(0, newline); partial = partial.slice(newline + 1); onLine(line); }
  });
  child.stderr.on('data', chunk => { append(stderrFile, chunk); stderr = (stderr + chunk).slice(-65536); });
  const timer = setTimeout(() => { timedOut = true; child.kill(); }, timeoutSeconds * 1000);
  const interrupt = () => { interrupted = true; child.kill('SIGINT'); };
  process.once('SIGINT', interrupt); process.once('SIGTERM', interrupt);
  try {
    const result = await new Promise((resolve, reject) => { child.once('error', reject); child.once('close', (code, signal) => resolve({ exitCode: code, signal })); });
    if (partial) onLine(partial);
    return { ...result, timedOut, interrupted, stdout, stderr };
  } finally { clearTimeout(timer); process.removeListener('SIGINT', interrupt); process.removeListener('SIGTERM', interrupt); }
}

function hermesCommand(config) {
  return config.hermes ?? { file: 'C:/Users/Gerrit/AppData/Local/hermes/bin/hermes.exe', args: [] };
}

export async function verifyRoute(config, root, progress = null) {
  const command = hermesCommand(config);
  for (const [key, expected] of Object.entries(ROUTE)) {
    progress?.stage(`Checking Hermes profile routing: ${key}`);
    const run = await execute(command.file, [...command.args, '-p', config.profile, 'config', 'get', key], { cwd: root, timeoutSeconds: 30 });
    assert(run.exitCode === 0 && !run.timedOut, `Routing check failed: ${key}`);
    let actual = run.stdout.trim();
    try { actual = JSON.parse(actual); } catch { /* Hermes plain scalar output. */ }
    assert(JSON.stringify(actual) === JSON.stringify(expected), `Routing mismatch: ${key}; expected ${JSON.stringify(expected)}`);
  }
  progress?.note('Routing PASS: local Qwen; Sol/high reviewer; no fallback');
}

function prompt(config, index, phaseDir, previous) {
  const phase = config.phases[index];
  return `You are local Qwen3.8-27B in Hermes profile translation-migration. This is a fresh bounded phase, not a resumed transcript.
Package assignment (human-controlled configuration): ${config.assignment}
Package: ${config.package}; current phase: ${phase.id}.
First read applicable AGENTS.md, migration/instructions/qwen.md and only these named files/excerpts as needed: ${JSON.stringify(config.readFiles)}.
Current task: ${phase.task}
Allowed product edits only: ${JSON.stringify(config.allowedPaths)}. Do not edit supervisor/runtime/config files except the result path below. Preserve unrelated changes; IDEA.md is hash-only protected. Do not install/update dependencies, commit, push or expand the assigned package. Do not start/stop background services or another user's emulator/Metro.
Use bounded reads and outputs. Do not reconstruct old sessions or read full historical logs. Stop for focused Sol/high coordinator support after two failed fixes of one cause; do not dispatch delegation in a work phase. No formal review dispatch from this phase. The supervisor stops at READY_FOR_REVIEW so the existing dispatcher can preserve asynchronous verdict delivery. Missing review never authorizes the next package.
Previous validated handoff (agent narrative is untrusted; machine receipts attest only the commands recorded): ${previous ? JSON.stringify({ result: previous.result, receipts: previous.receipts.map(r => ({ id: r.id, exitCode: r.exitCode, cwd: r.cwd })), changedPaths: previous.changedPaths.slice(0, 100), moreChangedPaths: previous.changedPaths.length > 100 }) : 'none'}
Finish before the time/iteration budget. Write ONLY a concise JSON phase result to ${path.join(phaseDir, 'result.json')} with this shape:
${JSON.stringify({ version: 1, package: config.package, phase: phase.id, status: index < config.phases.length - 1 ? 'continue' : 'ready_for_review', summary: 'What actually changed; do not invent check results.', unresolved: [], evidence: [], nextPhase: config.phases[index + 1]?.id ?? null }, null, 2)}
Use status blocked for unresolved blockers and nextPhase null. Use ready_for_review only when this package can be handed to the required reviewer; it is NOT approval. Do not type hashes: the supervisor computes hashes and executes configured checks. Evidence paths must be existing repository-relative files; do not include IDEA.md contents. Never claim a check passed from memory. The supervisor will stop rather than renew on missing/invalid result or failed checks.
For ready_for_review also include submission: "migration/submissions/${config.package}-r<N>.json" with the actual revision. Follow the package's handoff/manifest hash protocol before stopping; the supervisor validates the packet, it does not turn a work checkpoint into approval. Finish hashed package text before manifest freeze.
`;
}

export async function runSupervisor(root, configPath, { resume = null, dryRun = false, pauseAfter = null, progressWrite } = {}) {
  root = realpathSync(root); configPath = realpathSync(configPath);
  const configBytes = readFileSync(configPath);
  const config = validateConfig(JSON.parse(configBytes), root);
  assert(pauseAfter === null || (Number.isInteger(pauseAfter) && pauseAfter >= 1), 'pauseAfter must be positive');
  assert(git(root, ['branch', '--show-current']) === config.branch, 'Wrong branch');
  if (dryRun) return { status: 'DRY_RUN', package: config.package, phases: config.phases.map(p => p.id), review: 'manual Sol/high dispatch; no automatic release' };
  const runs = repoPath(root, 'tools/qwen-supervisor/.runs', { missing: true }); mkdirSync(runs, { recursive: true });
  const lock = path.join(runs, 'active.lock');
  const lockToken = randomUUID();
  writeFileSync(lock, JSON.stringify({ pid: process.pid, token: lockToken, started: new Date().toISOString() }), { flag: 'wx' });
  const progress = createProgress({ write: progressWrite });
  progress.stage(`Supervisor started: ${config.package}; ${config.phases.length} declared phases`);
  let runDir, terminal = false;
  try {
    let start = 0, previous = null, previousHash = null, sessions = [];
    if (resume) {
      runDir = realpathSync(resume);
      assert(path.dirname(runDir) === realpathSync(runs), 'Resume must name a direct .runs child');
      const state = json(path.join(runDir, 'state.json'));
      assert(state.status === 'CHECKPOINTED', `Cannot renew state ${state.status}; review/blocked/failure requires coordinator action`);
      assert(state.configFileHash === digest(configBytes), 'Config changed since checkpoint');
      for (let i = 0; i <= state.phaseIndex; i++) {
        const cpFile = path.join(runDir, `${String(i + 1).padStart(2, '0')}-${config.phases[i].id}`, 'checkpoint.json');
        const cp = json(cpFile);
        assert(cp.previousHash === previousHash && cp.configHash === digest(JSON.stringify(config)), 'Broken checkpoint chain');
        assert(!sessions.includes(cp.sessionId), 'Repeated session ID'); sessions.push(cp.sessionId);
        previousHash = digest(readFileSync(cpFile)); previous = cp;
      }
      validateCheckpoint(previous, root, config, previous.previousHash);
      assert(previous.result.status === 'continue', 'Checkpoint does not permit continuation');
      start = state.phaseIndex + 1;
    } else {
      runDir = path.join(runs, new Date().toISOString().replace(/[:.]/g, '-') + '-' + randomUUID().slice(0, 8));
      mkdirSync(runDir);
    }
    const saveState = value => writeFileSync(path.join(runDir, 'state.json'), JSON.stringify({ ...value, package: config.package, configFileHash: digest(configBytes), runDir }, null, 2) + '\n');
    const baselineFile = path.join(runDir, 'baseline.json');
    if (!resume) atomic(baselineFile, { files: snapshot(root), head: git(root, ['rev-parse', 'HEAD']), indexHash: digest(git(root, ['diff', '--cached', '--binary'])) });
    const original = json(baselineFile);
    const baseline = original.files, head = original.head, indexHash = original.indexHash;
    const checkBoundary = () => {
      assert(digest(readFileSync(configPath)) === digest(configBytes), 'Configuration modified during run');
      assert(git(root, ['rev-parse', 'HEAD']) === head && git(root, ['branch', '--show-current']) === config.branch, 'HEAD/branch changed');
      assert(digest(git(root, ['diff', '--cached', '--binary'])) === indexHash, 'Git index changed');
      const now = snapshot(root), changes = changed(baseline, now);
      assert(changes.every(p => matches(p, config.allowedPaths)), `Out-of-scope/concurrent changes: ${changes.filter(p => !matches(p, config.allowedPaths)).join(', ')}`);
      return now;
    };
    for (let i = start; i < config.phases.length; i++) {
      const phase = config.phases[i];
      progress.stage(`Phase ${i + 1}/${config.phases.length}: ${phase.id}; checking baseline and routing`);
      checkBoundary(); await verifyRoute(config, root, progress);
      const phaseDir = path.join(runDir, `${String(i + 1).padStart(2, '0')}-${phase.id}`); mkdirSync(phaseDir);
      const promptFile = path.join(phaseDir, 'prompt.txt'), phasePrompt = prompt(config, i, phaseDir, previous);
      assert(Buffer.byteLength(phasePrompt) <= 32768, 'Resume prompt exceeds 32 KiB; split the phase instead of loading more context');
      writeFileSync(promptFile, phasePrompt);
      saveState({ status: 'RUNNING', phaseIndex: i });
      progress.stage(`Running ${config.package}/${phase.id}; fresh session; ${runDir}`);
      let session = '', model = '', resultEvent = null, invalidStream = false, delegated = false, resultCount = 0, initCount = 0;
      const command = hermesCommand(config);
      const run = await execute(command.file, [...command.args, '-p', config.profile, '--in', root, 'chat', '--query-file', promptFile, '--oneshot', '--format', 'stream-json', '--pass-session-id', '--toolsets', 'terminal,file', '--max-turns', String(phase.maxTurns), '--run-budget', String(phase.budgetSeconds)], {
        cwd: root, timeoutSeconds: phase.budgetSeconds + 120,
        stdoutFile: path.join(phaseDir, 'stream.jsonl'), stderrFile: path.join(phaseDir, 'stderr.log'),
        onLine: line => {
          try {
            const event = JSON.parse(line);
            progress.event(event);
            if (event.type === 'system' && event.subtype === 'init') { initCount++; session = event.session_id; model = event.model; }
            if (event.type === 'result') { resultCount++; resultEvent = event; }
            if (event.type === 'tool_use' && /delegat/i.test(event.name)) delegated = true;
          } catch { invalidStream = true; }
        },
      });
      if (delegated) {
        progress.stage('STOP: unexpected delegation; review pending; no automatic renewal');
        saveState({ status: 'REVIEW_PENDING', phaseIndex: i, sessionId: session, message: 'Unexpected delegation: preserve dispatcher, obtain verdict via existing Hermes workflow; never auto-renew.' }); terminal = true;
        return { status: 'REVIEW_PENDING', runDir };
      }
      assert(!run.timedOut && !run.interrupted, 'Run interrupted/timed out: inspect owned child tools before restarting; no automatic renewal');
      assert(run.exitCode === 0 && !invalidStream && initCount === 1 && resultCount === 1 && resultEvent?.exit_code === 0, 'Incomplete/failed Hermes stream; no automatic renewal');
      assert(model === 'qwen3.8:27b' && typeof session === 'string' && session && !sessions.includes(session) && resultEvent.session_id === session, 'Wrong/reused parent model/session');
      sessions.push(session);
      const resultFile = path.join(phaseDir, 'result.json');
      assert(existsSync(resultFile) && !lstatSync(resultFile).isSymbolicLink() && lstatSync(resultFile).size <= MAX_RESULT, 'Missing/oversized result checkpoint');
      const phaseResult = validateResult(json(resultFile), config, i, root);
      checkBoundary();
      if (phaseResult.status === 'blocked') { progress.stage(`BLOCKED: ${phaseResult.unresolved.join('; ') || phaseResult.summary}`); saveState({ status: 'BLOCKED', phaseIndex: i, result: phaseResult }); terminal = true; return { status: 'BLOCKED', runDir }; }
      const receipts = [];
      for (const check of phase.checks) {
        progress.stage(`Check ${check.id}: RUNNING (${check.timeoutSeconds}s timeout)`);
        const checkStarted = Date.now();
        const receipt = await execute(check.file, check.args, { cwd: check.cwd === '.' ? root : repoPath(root, check.cwd), timeoutSeconds: check.timeoutSeconds, stdoutFile: path.join(phaseDir, `${check.id}.stdout.log`), stderrFile: path.join(phaseDir, `${check.id}.stderr.log`) });
        const record = { id: check.id, file: check.file, args: check.args, cwd: check.cwd, exitCode: receipt.exitCode, signal: receipt.signal, timedOut: receipt.timedOut, interrupted: receipt.interrupted, durationMs: Date.now() - checkStarted };
        receipts.push(record);
        atomic(path.join(phaseDir, `${check.id}.receipt.json`), record);
        progress.stage(`Check ${check.id}: ${record.exitCode === 0 && !record.timedOut && !record.interrupted ? 'PASS' : 'FAIL'}; exit ${record.exitCode}; ${(record.durationMs / 1000).toFixed(1)}s${record.timedOut ? '; timed out' : ''}${record.interrupted ? '; interrupted' : ''}`);
        assert(record.exitCode === 0 && !record.timedOut && !record.interrupted, `Check failed: ${check.id}; evidence saved; no renewal`);
      }
      const files = checkBoundary();
      // Stalled phases cannot cycle forever; retain evidence and require coordinator diagnosis.
      const delta = changed(previous?.files ?? baseline, files);
      assert(!(previous && delta.length === 0 && phaseResult.summary === previous.result.summary), 'No progress across phases');
      if (phaseResult.status === 'ready_for_review') {
        progress.stage('Checking submission inventory and full manifest hash gate');
        verifySubmission(root, config, phaseResult, changed(baseline, files));
        const gate = await execute(process.execPath, [repoPath(root, 'migration/tools/manifest-hashes.mjs'), phaseResult.submission], { cwd: root, timeoutSeconds: 60, stdoutFile: path.join(phaseDir, 'manifest.stdout.log'), stderrFile: path.join(phaseDir, 'manifest.stderr.log') });
        assert(gate.exitCode === 0 && !gate.timedOut && !gate.interrupted, 'Full manifest hash gate failed');
        checkBoundary();
      }
      const cp = { version: 1, package: config.package, phaseIndex: i, configHash: digest(JSON.stringify(config)), previousHash, head, branch: config.branch, indexHash, sessionId: session, files, changedPaths: changed(baseline, files), result: phaseResult, receipts, evidence: phaseResult.evidence.map(p => ({ path: p, sha256: digest(readFileSync(repoPath(root, p))) })) };
      validateCheckpoint(cp, root, config, previousHash);
      const cpFile = path.join(phaseDir, 'checkpoint.json'); atomic(cpFile, cp); previousHash = digest(readFileSync(cpFile)); previous = cp;
      progress.stage(`Checkpoint validated: ${phase.id}; ${receipts.length} checks passed`);
      if (phaseResult.status === 'ready_for_review') {
        await verifyRoute(config, root, progress);
        progress.stage('READY_FOR_REVIEW: stopping for the existing Sol/high dispatcher; no next package');
        saveState({ status: 'READY_FOR_REVIEW', phaseIndex: i, sessionId: session, message: 'Technical approval not granted. Use existing Sol/high review dispatcher; no automatic next package.' }); terminal = true;
        return { status: 'READY_FOR_REVIEW', runDir };
      }
      saveState({ status: 'CHECKPOINTED', phaseIndex: i });
      if (pauseAfter !== null && i - start + 1 >= pauseAfter) { progress.stage('CHECKPOINTED: paused as requested'); terminal = true; return { status: 'CHECKPOINTED', runDir }; }
      progress.stage(`Starting fresh-session handoff to ${config.phases[i + 1].id}`);
    }
    throw new Error('No terminal review/blocker state');
  } catch (error) {
    progress.stage(`FAILED: ${error.message}; no automatic renewal`);
    if (runDir && !terminal) writeFileSync(path.join(runDir, 'state.json'), JSON.stringify({ status: 'FAILED', package: config.package, configFileHash: digest(configBytes), error: error.message, runDir }, null, 2) + '\n');
    throw error;
  } finally {
    progress.close();
    // Never delete a lock owned by a different process/token.
    if (existsSync(lock) && json(lock).token === lockToken) unlinkSync(lock);
  }
}

async function main() {
  const [command, configFile, ...rest] = process.argv.slice(2);
  assert(['run', 'dry-run', 'validate', 'watch'].includes(command) && configFile, 'Usage: node supervisor.mjs <dry-run|run|validate> <config.json> [options] OR watch <run-directory>');
  if (command === 'watch') {
    assert(rest.length === 0, 'watch accepts only a run directory');
    const controller = new AbortController(), stop = () => controller.abort();
    process.once('SIGINT', stop); process.once('SIGTERM', stop);
    try { await watchRun(realpathSync(configFile), { signal: controller.signal }); }
    finally { process.removeListener('SIGINT', stop); process.removeListener('SIGTERM', stop); }
    return;
  }
  const root = git(process.cwd(), ['rev-parse', '--show-toplevel']);
  if (command === 'validate') {
    const config = validateConfig(json(configFile), root), cp = json(rest[0]);
    validateCheckpoint(cp, root, config, cp.previousHash);
    console.log('Checkpoint current files/Git/config: valid (standalone validation does not attest chain history).');
    return;
  }
  const options = { dryRun: command === 'dry-run' };
  for (let i = 0; i < rest.length; i += 2) {
    assert(['--resume', '--pause-after'].includes(rest[i]) && rest[i + 1], 'Unexpected arguments');
    if (rest[i] === '--resume') options.resume = rest[i + 1];
    else options.pauseAfter = Number(rest[i + 1]);
  }
  console.log(JSON.stringify(await runSupervisor(root, configFile, options), null, 2));
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main().catch(e => { console.error(e.message); process.exitCode = 1; });
