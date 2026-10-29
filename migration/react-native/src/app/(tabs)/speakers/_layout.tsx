import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

import { stackOptions } from '@/constants/stack-options';

export const unstable_settings = { initialRouteName: 'index' };

export default function SpeakersLayout() {
  return (
    <Stack screenOptions={stackOptions(useColorScheme() === 'dark')}>
      <Stack.Screen name="index" options={{ title: 'Speakers' }} />
      <Stack.Screen name="speaker/[speakerId]" options={{ title: 'Speaker' }} />
      <Stack.Screen name="session/[sessionId]" options={{ title: 'Session' }} />
    </Stack>
  );
}
