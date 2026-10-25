import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ConferenceProvider } from '@/state/conference-state';

export const unstable_settings = { initialRouteName: 'index' };

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ConferenceProvider>
        <Stack>
          <Stack.Screen name="index" options={{ title: 'Conference' }} />
          <Stack.Screen name="session/[sessionId]" options={{ title: 'Session' }} />
          <Stack.Screen name="filter" options={{ title: 'Filter Sessions', presentation: 'modal' }} />
        </Stack>
      </ConferenceProvider>
    </GestureHandlerRootView>
  );
}
