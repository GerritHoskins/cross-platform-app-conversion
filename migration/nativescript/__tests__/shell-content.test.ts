import { expect, test } from 'vitest';
import { shellContent } from '../src/shell/shell-content';

test('provides the conference shell title and welcome body', () => {
  expect(shellContent).toEqual({
    title: 'Conference',
    body: 'Welcome to the conference app.',
  });
});
