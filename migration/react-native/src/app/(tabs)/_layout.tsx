import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

export const unstable_settings = { initialRouteName: '(schedule)' };

export default function TabsLayout() {
  const dark = useColorScheme() === 'dark';

  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarIcon: () => null,
      tabBarIconStyle: { display: 'none' },
      tabBarStyle: { backgroundColor: dark ? '#1c1c22' : '#ffffff' },
      tabBarActiveTintColor: dark ? '#9fd3b4' : '#4e6e5e',
      tabBarInactiveTintColor: dark ? '#a7a7b2' : '#5c5c66',
    }}>
      <Tabs.Screen name="(schedule)" options={{ title: 'Schedule', tabBarAccessibilityLabel: 'Schedule' }} />
      <Tabs.Screen name="speakers" options={{ title: 'Speakers', tabBarAccessibilityLabel: 'Speakers' }} />
    </Tabs>
  );
}
