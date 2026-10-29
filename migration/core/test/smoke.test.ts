import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';

import { CORE_PACKAGE_NAME, CORE_API_VERSION } from '@migration/core';

test('public package exports are correct', () => {
  assert.equal(CORE_PACKAGE_NAME, '@migration/core');
  assert.equal(CORE_API_VERSION, 2);
});

test('self-reference resolves to the built dist entrypoint', () => {
  const resolved = require.resolve('@migration/core');
  const expectedTail = `dist${path.sep}index.js`;
  assert.ok(
    resolved.endsWith(expectedTail),
    `expected "${resolved}" to end with "${expectedTail}"`,
  );
});
