import { useLocalSearchParams } from 'expo-router';

import SessionDetailScreen from '@/screens/session-detail-screen';

export default function SessionRoute() {
  const { sessionId } = useLocalSearchParams<{ sessionId?: string | string[] }>();
  const value = (Array.isArray(sessionId) ? sessionId[0] : sessionId) ?? '';
  return <SessionDetailScreen sessionId={value} />;
}
