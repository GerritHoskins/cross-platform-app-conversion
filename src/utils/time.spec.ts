import { describe, expect, it } from 'vitest';
import { compareTimes, parseTimeToMinutes } from './time';

describe('parseTimeToMinutes', () => {
  it('parses morning and afternoon times', () => {
    expect(parseTimeToMinutes('8:00 am')).toBe(480);
    expect(parseTimeToMinutes('9:15 am')).toBe(555);
    expect(parseTimeToMinutes('1:00 pm')).toBe(780);
    expect(parseTimeToMinutes('3:45 PM')).toBe(945);
  });

  it('handles noon and midnight', () => {
    expect(parseTimeToMinutes('12:00 pm')).toBe(720);
    expect(parseTimeToMinutes('12:30 am')).toBe(30);
  });

  it('returns Infinity for malformed values', () => {
    expect(parseTimeToMinutes('')).toBe(Infinity);
    expect(parseTimeToMinutes('08:00:00')).toBe(Infinity);
    expect(parseTimeToMinutes('13:00 pm')).toBe(Infinity);
    expect(parseTimeToMinutes('9:75 am')).toBe(Infinity);
  });
});

describe('compareTimes', () => {
  it('orders chronologically across noon', () => {
    const times = ['1:00 pm', '12:00 pm', '8:00 am', '10:00 am'];
    expect([...times].sort(compareTimes)).toEqual(['8:00 am', '10:00 am', '12:00 pm', '1:00 pm']);
  });

  it('keeps malformed values last and treats them as equal', () => {
    expect(['bad', '9:00 am', 'worse'].sort(compareTimes)).toEqual(['9:00 am', 'bad', 'worse']);
  });
});
