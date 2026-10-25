import { Stack } from 'expo-router';

import { ConferenceProvider } from '@/state/conference-state';

export default function RootLayout() {
  return (
    <ConferenceProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Conference' }} />
      </Stack>
    </ConferenceProvider>
  );
}
