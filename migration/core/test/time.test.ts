import test from 'node:test';
import assert from 'node:assert/strict';

import { compareTimes, parseTimeToMinutes } from '@migration/core';

test('parseTimeToMinutes parses morning and afternoon times', () => {
  assert.equal(parseTimeToMinutes('8:00 am'), 480);
  assert.equal(parseTimeToMinutes('9:15 am'), 555);
  assert.equal(parseTimeToMinutes('1:00 pm'), 780);
  assert.equal(parseTimeToMinutes('3:45 PM'), 945);
});

test('parseTimeToMinutes handles noon and midnight', () => {
  assert.equal(parseTimeToMinutes('12:00 pm'), 720);
  assert.equal(parseTimeToMinutes('12:30 am'), 30);
  assert.equal(parseTimeToMinutes('12:00 am'), 0);
});

test('parseTimeToMinutes returns Infinity for malformed values', () => {
  assert.equal(parseTimeToMinutes(''), Infinity);
  assert.equal(parseTimeToMinutes('08:00:00'), Infinity);
  assert.equal(parseTimeToMinutes('13:00 pm'), Infinity);
  assert.equal(parseTimeToMinutes('9:75 am'), Infinity);
});

test('parseTimeToMinutes tolerates surrounding whitespace and mixed case', () => {
  assert.equal(parseTimeToMinutes(' 9:05 PM '), 1265);
});

test('compareTimes orders chronologically across noon', () => {
  const times = ['1:00 pm', '12:00 pm', '8:00 am', '10:00 am'];
  assert.deepStrictEqual([...times].sort(compareTimes), ['8:00 am', '10:00 am', '12:00 pm', '1:00 pm']);
});

test('compareTimes keeps malformed values last and treats them as equal', () => {
  assert.deepStrictEqual(['bad', '9:00 am', 'worse'].sort(compareTimes), ['9:00 am', 'bad', 'worse']);
});
