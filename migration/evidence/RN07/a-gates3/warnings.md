RN07 a-gates3 — A06 software warning disclosure

Scope: existing a-gates2 typecheck and both target Jest stdout/stderr logs, their JSON console records, and this session Android JS export stdout/stderr. No tests rerun. Original historical bytes remain untouched; this run authored text and captured text logs use LF (CRLF normalized only in new logs).

Sources examined (exact files and inclusive line ranges; empty files explicitly marked):
  migration/evidence/RN07/a-gates2/a03-typecheck.stdout.log:1-4
  migration/evidence/RN07/a-gates2/a03-typecheck.stderr.log:empty (0 lines)
  migration/evidence/RN07/a-gates2/a03-jest1.stdout.log:1-4
  migration/evidence/RN07/a-gates2/a03-jest1.stderr.log:1-7
  migration/evidence/RN07/a-gates2/a03-jest2.stdout.log:1-4
  migration/evidence/RN07/a-gates2/a03-jest2.stderr.log:1-7
  migration/evidence/RN07/a-gates3/a04-export.stdout.log:1-34
  migration/evidence/RN07/a-gates3/a04-export.stderr.log:empty (0 lines)
  migration/evidence/RN07/a-gates2/jest1.json:1 and migration/evidence/RN07/a-gates2/jest2.json:1 (testResults[].console records)

Verbatim diagnostic lines (each prefixed by its source citation):
  No matching warning/deprecation/error/exception diagnostic lines were present in these acquired outputs under the recorded scan pattern. This is a bounded scan finding, not a claim of zero warnings or zero exceptions.

Verbatim matching Jest console messages:
  No matching console records were present in the two existing Jest JSON files.

Export observation: migration/evidence/RN07/a-gates3/a04-export.stdout.log:5-9 records Expo Router root selection, React Compiler, export-owned Metro bundling and successful bundling; :28-34 records the Android bundle and successful export. migration/evidence/RN07/a-gates3/a04-export.stderr.log is empty. The known initialRouteName deprecation was not printed in this acquired export; no warning text is invented or imported from another run.

Observed software effect: existing typecheck and both Jest commands exited 0; this export exited 0 and its immediately paired inventory contains all generated artifacts. No device/interactive Metro window was acquired. The transient bundler invoked by the authorized export is not a queried, stopped or restarted shared development server.

A06 software collection PASS (limited to acquired software output). A06 device/Metro interaction part NOT RUN, phase B. No claim about fatal crashes, red error screens, unhandled JS errors or dev-server health during device use.
