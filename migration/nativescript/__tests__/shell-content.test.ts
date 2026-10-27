import { expect, test } from 'vitest';
import { shellContent } from '../src/shell/shell-content';

test('provides the conference shell title and normalized diagnostic body', () => {
  expect(shellContent).toEqual({
    title: 'Conference',
    body: 'Sessions: 20\nFirst session: 1 — Breakfast',
  });
});
