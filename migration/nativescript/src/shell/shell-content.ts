import { loadConference } from '../data/load-conference';

const conference = loadConference();
const firstSession = conference.sessions[0];

export const shellContent = {
  title: 'Conference',
  body: `Sessions: ${conference.sessions.length}\nFirst session: ${firstSession.id} — ${firstSession.name}`,
} as const;
