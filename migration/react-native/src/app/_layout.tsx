import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { stackOptions } from '@/constants/stack-options';
import { ConferenceProvider } from '@/state/conference-state';

export const unstable_settings = { initialRouteName: '(tabs)' };

export default function RootLayout() {
  const dark = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ConferenceProvider>
        <StatusBar style="auto" />
        <Stack screenOptions={stackOptions(dark)}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="filter" options={{ title: 'Filter Sessions', presentation: 'modal' }} />
        </Stack>
      </ConferenceProvider>
    </GestureHandlerRootView>
  );
}
