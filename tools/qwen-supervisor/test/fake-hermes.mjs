// Test double, never used by the production/example configuration.
import fs from 'node:fs';
import path from 'node:path';
import { createHash, randomUUID } from 'node:crypto';
import { execFileSync } from 'node:child_process';
const args = process.argv.slice(2);
const root = process.cwd();
const settings = JSON.parse(fs.readFileSync(path.join(root, 'fake-settings.json')));
const route = { 'model.default': 'qwen3.8:27b', 'model.provider': 'ollama-launch', fallback_providers: [], 'delegation.provider': 'openai-codex', 'delegation.model': settings.badRoute ? 'wrong-model' : 'gpt-6.1-sol', 'delegation.reasoning_effort': 'high', 'delegation.fallback_providers': [] };
if (args.includes('config')) {
  console.log(JSON.stringify(route[args.at(-1)]));
  process.exit(0);
}
if (args.includes('--resume') || args.includes('--continue') || args.includes('--yolo')) throw new Error('Unsafe session flags');
if (settings.crash) process.exit(1);
const queryFile = args[args.indexOf('--query-file') + 1];
const prompt = fs.readFileSync(queryFile, 'utf8');
const phase = /current phase: ([a-z-]+)\./.exec(prompt)[1];
const session = settings.reuseSession ? 'same-session' : randomUUID();
const emit = event => console.log(JSON.stringify(event));
emit({ type: 'system', subtype: 'init', session_id: session, model: settings.wrongParent ? 'other' : 'qwen3.8:27b' });
emit({ type: 'text', text: 'Checking scoped files.\n' });
emit({ type: 'tool_use', name: 'read_file', input: { path: 'private-do-not-echo' } });
emit({ type: 'tool_result', name: 'read_file', duration_ms: 12, is_error: false, output: 'private-do-not-echo' });
if (settings.delegate) emit({ type: 'tool_use', name: 'delegate_task', input: {} });
if (settings.invalidStream) console.log('non-JSON noise');
if (settings.missingResult) {
  emit({ type: 'result', session_id: session, exit_code: 0 }); process.exit(0);
}
fs.mkdirSync(path.join(root, 'product'), { recursive: true });
fs.writeFileSync(path.join(root, 'product/result.txt'), phase);
if (settings.outside) fs.writeFileSync(path.join(root, 'protected.txt'), 'unauthorized');
if (settings.indexChange) execFileSync('git', ['add', 'product/result.txt'], { cwd: root });
const state = { version: 1, package: 'TEST', phase, status: settings.blocked ? 'blocked' : phase === 'edit' ? 'continue' : 'ready_for_review', summary: `Completed ${phase}`, evidence: ['product/result.txt'], unresolved: settings.blocked ? ['Need coordinator'] : [], nextPhase: !settings.blocked && phase === 'edit' ? 'verify' : null };
if (settings.skipPhases) { state.status = 'ready_for_review'; state.nextPhase = null; }
if (state.status === 'ready_for_review') {
  fs.mkdirSync(path.join(root, 'migration/submissions'), { recursive: true });
  state.submission = 'migration/submissions/TEST-r1.json';
  const hash = createHash('sha256').update(fs.readFileSync(path.join(root, 'product/result.txt'))).digest('hex');
  fs.writeFileSync(path.join(root, state.submission), JSON.stringify({ package: 'TEST', revision: 1, head: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(), branch: 'migration/slice-1', files: settings.omitInventory ? [] : [{ path: 'product/result.txt', sha256: settings.staleManifest ? '0'.repeat(64) : hash }] }));
}
if (settings.wrongNext) state.nextPhase = 'unassigned-package';
fs.writeFileSync(path.join(path.dirname(queryFile), 'result.json'), JSON.stringify(state));
emit({ type: 'result', session_id: session, exit_code: settings.failedResult ? 1 : 0, tokens: { input: 9999999 } });
