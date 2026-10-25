import type { Session, SessionGroup } from './types';

// Behavior is from migration/reference/contract.md, "Grouping and ordering" (lines 37-40),
// mirroring src/views/SessionList.vue:269-291 (groupedByStartTime):
// copy, stable-sort by start time, group by groupTime in first-occurrence order;
// each group's sessions keep the sorted order; empty input gives [].
// Per the C03 work package the sort key is startMinutes; for a normalized session
// startMinutes is parseTimeToMinutes(timeStart) and C02 guarantees it is finite, so the
// order is identical to the source's compareTimes(a.timeStart, b.timeStart) sort.
export function groupSessions(sessions: readonly Session[]): SessionGroup[] {
  const sorted = [...sessions].sort((a, b) => a.startMinutes - b.startMinutes);
  const groups = new Map<string, Session[]>();
  for (const session of sorted) {
    const group = groups.get(session.groupTime);
    if (group === undefined) {
      groups.set(session.groupTime, [session]);
    } else {
      group.push(session);
    }
  }
  // A Map keeps insertion order, so entries() is in first-occurrence order.
  return Array.from(groups.entries(), ([groupTime, members]) => ({
    groupTime,
    sessions: members,
  }));
}
