import type { Session, SessionGroup } from '@migration/core';

export type ScheduleRow =
  | { kind: 'header'; key: string; groupTime: string }
  | { kind: 'session'; key: string; session: Session };

export function toScheduleRows(groups: readonly SessionGroup[]): ScheduleRow[] {
  return groups.flatMap((group): ScheduleRow[] => [
    { kind: 'header', key: `h:${group.groupTime}`, groupTime: group.groupTime },
    ...group.sessions.map((session): ScheduleRow => ({ kind: 'session', key: `s:${session.id}`, session })),
  ]);
}
