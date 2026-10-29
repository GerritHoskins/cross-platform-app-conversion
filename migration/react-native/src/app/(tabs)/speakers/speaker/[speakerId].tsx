import { useLocalSearchParams } from 'expo-router';

import SpeakerDetailScreen from '@/screens/speaker-detail-screen';

export default function SpeakerRoute() {
  const { speakerId } = useLocalSearchParams<{ speakerId?: string | string[] }>();
  return <SpeakerDetailScreen speakerId={speakerId} />;
}
