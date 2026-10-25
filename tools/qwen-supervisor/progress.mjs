import { existsSync, readFileSync, readdirSync, statSync, openSync, readSync, closeSync } from 'node:fs';
import path from 'node:path';
import { StringDecoder } from 'node:string_decoder';

const clean = value => String(value ?? '').replace(/\x1b\[[0-?]*[ -/]*[@-~]/g, '').replace(/[\x00-\x1f\x7f]/g, ' ').replace(/\s+/g, ' ').trim();
const preview = value => { const s = clean(value); return s.length > 240 ? s.slice(0, 240) + '…' : s; };

export function createProgress({ write = line => console.log(line), now = () => Date.now(), heartbeatMs = 15000, timer = true } = {}) {
  let label = 'Starting', lastShown = now(), buffered = '', closed = false;
  const note = message => {
    if (closed) return;
    const time = new Date(now()).toLocaleTimeString('en-GB', { timeZone: 'Europe/Berlin' });
    write(`[${time}] ${clean(message)}`); lastShown = now();
  };
  const flush = () => { if (buffered.trim()) note(`Qwen: ${preview(buffered)}`); buffered = ''; };
  const tick = () => {
    if (closed) return;
    if (buffered.trim()) flush();
    else if (now() - lastShown >= heartbeatMs) note(`Still active: ${label}; waiting for output`);
  };
  const interval = timer ? setInterval(tick, 1500) : null;
  interval?.unref();
  const stage = message => { flush(); label = message; note(message); };
  const event = value => {
    if (value.type === 'system' && value.subtype === 'init') stage(`Qwen session ${value.session_id}; model ${value.model}`);
    else if (value.type === 'text') {
      buffered += String(value.text ?? '');
      if (buffered.length >= 1000 || buffered.includes('\n')) flush();
    } else if (value.type === 'tool_use') stage(`Qwen tool started: ${value.name ?? 'unknown'}`);
    else if (value.type === 'tool_result') stage(`Qwen tool ${value.is_error ? 'FAILED' : 'finished'}: ${value.name ?? 'unknown'}${Number.isFinite(value.duration_ms) ? ` (${value.duration_ms} ms)` : ''}`);
    else if (value.type === 'result') { flush(); stage(`Qwen turn ended: exit ${value.exit_code}; validating phase result next`); }
  };
  return { note, stage, event, tick, flush, close() { flush(); closed = true; if (interval) clearInterval(interval); } };
}

// Incremental, UTF-8-safe reader. Never writes to the watched directory.
export class JsonlTail {
  constructor(file) { this.file = file; this.offset = 0; this.partial = ''; this.decoder = new StringDecoder('utf8'); }
  read() {
    if (!existsSync(this.file)) return [];
    const size = statSync(this.file).size;
    if (size < this.offset) { this.offset = 0; this.partial = ''; this.decoder = new StringDecoder('utf8'); }
    const events = [], fd = openSync(this.file, 'r');
    try {
      while (this.offset < size) {
        const buffer = Buffer.alloc(Math.min(32768, size - this.offset));
        const count = readSync(fd, buffer, 0, buffer.length, this.offset);
        if (!count) break;
        this.offset += count; this.partial += this.decoder.write(buffer.subarray(0, count));
        let end;
        while ((end = this.partial.indexOf('\n')) >= 0) {
          const line = this.partial.slice(0, end); this.partial = this.partial.slice(end + 1);
          try { if (line.trim()) events.push(JSON.parse(line)); } catch { events.push({ type: 'watch_warning', message: 'Skipping malformed JSONL line' }); }
        }
        if (this.partial.length > 1_048_576) { this.partial = ''; events.push({ type: 'watch_warning', message: 'Oversized partial JSONL line skipped' }); }
      }
    } finally { closeSync(fd); }
    return events;
  }
}

const terminal = new Set(['BLOCKED', 'FAILED', 'READY_FOR_REVIEW', 'REVIEW_PENDING']);
export async function watchRun(runDir, { write, intervalMs = 750, signal, heartbeatMs } = {}) {
  const progress = createProgress({ write, heartbeatMs });
  const tails = new Map(), seenReceipts = new Set();
  let lastState = '';
  progress.stage(`Watching ${runDir}; read-only; Ctrl+C stops this watcher only`);
  try {
    while (!signal?.aborted) {
      let state;
      try { state = JSON.parse(readFileSync(path.join(runDir, 'state.json'), 'utf8')); } catch { /* Atomicity is not assumed for an active state file. */ }
      if (state) {
        const key = `${state.status}:${state.phaseIndex}`;
        if (key !== lastState) { progress.stage(`${state.package ?? 'Package'} state ${state.status}; phase ${Number.isInteger(state.phaseIndex) ? state.phaseIndex + 1 : '?'}`); lastState = key; }
        for (const folder of readdirSync(runDir, { withFileTypes: true }).filter(e => e.isDirectory() && /^\d\d-/.test(e.name)).sort((a, b) => a.name.localeCompare(b.name))) {
          const dir = path.join(runDir, folder.name);
          if (!tails.has(dir)) tails.set(dir, new JsonlTail(path.join(dir, 'stream.jsonl')));
          for (const event of tails.get(dir).read()) {
            if (event.type === 'watch_warning') progress.note(event.message);
            else progress.event(event);
          }
          for (const file of readdirSync(dir).filter(f => f.endsWith('.receipt.json')).sort()) {
            const full = path.join(dir, file);
            if (seenReceipts.has(full)) continue;
            try {
              const receipt = JSON.parse(readFileSync(full, 'utf8'));
              progress.note(`${folder.name} check ${receipt.id}: ${receipt.exitCode === 0 && !receipt.timedOut && !receipt.interrupted ? 'PASS' : 'FAIL'} (exit ${receipt.exitCode}${receipt.timedOut ? ', timed out' : ''}${receipt.interrupted ? ', interrupted' : ''})`);
              seenReceipts.add(full);
            } catch { /* Retry an incomplete receipt on the next read. */ }
          }
        }
        if (terminal.has(state.status)) { progress.stage(`Run stopped: ${state.status}${state.error ? `; ${preview(state.error)}` : ''}`); return state; }
      }
      await new Promise(resolve => {
        const done = () => { clearTimeout(timer); signal?.removeEventListener('abort', done); resolve(); };
        const timer = setTimeout(done, intervalMs); signal?.addEventListener('abort', done, { once: true });
      });
    }
    return { status: 'WATCH_STOPPED' };
  } finally { progress.close(); }
}
