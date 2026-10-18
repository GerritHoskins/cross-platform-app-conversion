const TIME_PATTERN = /^\s*(\d{1,2}):(\d{2})\s*(am|pm)\s*$/i;

/**
 * Converts a 12-hour display time such as "8:00 am" or "12:30 PM" to minutes
 * after midnight. Unparsable values return Infinity so they sort last instead
 * of producing NaN comparisons.
 */
export const parseTimeToMinutes = (time: string): number => {
  const match = TIME_PATTERN.exec(time);
  if (!match) return Number.POSITIVE_INFINITY;

  const hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  if (hours < 1 || hours > 12 || minutes > 59) return Number.POSITIVE_INFINITY;

  const isPm = match[3].toLowerCase() === 'pm';
  return ((hours % 12) + (isPm ? 12 : 0)) * 60 + minutes;
};

export const compareTimes = (a: string, b: string): number => {
  const diff = parseTimeToMinutes(a) - parseTimeToMinutes(b);
  return Number.isNaN(diff) ? 0 : diff;
};
