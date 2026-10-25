import { StyleSheet, Text, View, useColorScheme } from 'react-native';

import { loadConference } from '../data/load-conference';

const PALETTES = {
  light: {
    background: '#F9FAFB',
    heading: '#111827',
    body: '#374151',
  },
  dark: {
    background: '#111827',
    heading: '#F9FAFB',
    body: '#D1D5DB',
  },
} as const;

export default function ShellScreen() {
  const scheme = useColorScheme() ?? 'light';
  const palette = PALETTES[scheme];
  const conference = loadConference();
  const first = conference.sessions[0];

  return (
    <View style={[styles.root, { backgroundColor: palette.background }]}>
      <Text
        accessibilityRole="header"
        accessibilityLabel="Conference"
        style={[styles.heading, { color: palette.heading }]}
      >
        Conference
      </Text>
      <Text style={[styles.body, { color: palette.body }]}>
        Sessions: {conference.sessions.length}
      </Text>
      <Text style={[styles.body, { color: palette.body }]}>
        First session: {first.id} — {first.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  heading: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  body: {
    fontSize: 16,
    textAlign: 'center',
  },
});
