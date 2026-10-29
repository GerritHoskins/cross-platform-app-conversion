import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

import { stackOptions } from '@/constants/stack-options';

export const unstable_settings = { initialRouteName: 'index' };

export default function ScheduleLayout() {
  return (
    <Stack screenOptions={stackOptions(useColorScheme() === 'dark')}>
      <Stack.Screen name="index" options={{ title: 'Conference' }} />
      <Stack.Screen name="session/[sessionId]" options={{ title: 'Session' }} />
    </Stack>
  );
}
