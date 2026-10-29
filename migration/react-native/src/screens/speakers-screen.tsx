import { sessionsForSpeaker, sortSpeakers } from '@migration/core';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { useConference } from '../state/conference-state';

const PALETTES = {
  light: { background: '#f5f5f7', surface: '#ffffff', text: '#111114', subtle: '#5c5c66', border: '#d9d9de', accent: '#4e6e5e', accentSoft: '#e4eee9' },
  dark: { background: '#101014', surface: '#1c1c22', text: '#f2f2f5', subtle: '#a7a7b2', border: '#3a3a44', accent: '#9fd3b4', accentSoft: '#24352c' },
};

export default function SpeakersScreen() {
  const { state, speakerProfiles, retry } = useConference();
  const palette = PALETTES[useColorScheme() ?? 'light'];

  return (
    <View style={[styles.screen, { backgroundColor: palette.background }]}>
      {state.status === 'idle' || state.status === 'loading' ? (
        <View accessible accessibilityRole="progressbar" accessibilityLabel="Loading sessions" style={styles.status}>
          <ActivityIndicator color={palette.accent} />
          <Text style={{ color: palette.text }}>Loading sessions…</Text>
        </View>
      ) : null}
      {state.status === 'error' ? (
        <View accessibilityRole="alert" style={styles.status}>
          <Text style={{ color: palette.text, fontWeight: '600' }}>Unable to load sessions.</Text>
          {state.error ? <Text style={{ color: palette.subtle }}>{state.error}</Text> : null}
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Retry"
            onPress={retry}
            style={[styles.retryButton, { borderColor: palette.accent, backgroundColor: palette.accentSoft }]}
          >
            <Text style={{ color: palette.accent, fontWeight: '600' }}>Retry</Text>
          </Pressable>
        </View>
      ) : null}
      {state.status === 'ready' && state.conference !== null ? (
        <ScrollView contentContainerStyle={styles.list}>
          {sortSpeakers(speakerProfiles).map((speaker) => (
            <View key={speaker.id} testID={`speaker-${speaker.id}`} style={[styles.card, { backgroundColor: palette.surface, borderColor: palette.border }]}>
              <View style={styles.header}>
                <Text accessibilityRole="header" style={[styles.name, { color: palette.text }]}>{speaker.name}</Text>
                <Text style={{ color: palette.subtle }}>{speaker.title}</Text>
              </View>
              {sessionsForSpeaker(state.conference!.sessions, speaker.id).map((session) => (
                <View key={session.id} testID={`speaker-${speaker.id}-session-${session.id}`} style={[styles.row, { borderColor: palette.border }]}>
                  <Text style={[styles.rowText, { color: palette.text }]}>{session.name}</Text>
                </View>
              ))}
              <View testID={`speaker-${speaker.id}-about`} style={[styles.row, { borderColor: palette.border }]}>
                <Text style={[styles.rowText, { color: palette.text }]}>About {speaker.name}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  list: { padding: 16, gap: 12 },
  card: { borderWidth: 1, borderRadius: 12, overflow: 'hidden' },
  header: { padding: 16, gap: 4 },
  name: { fontSize: 20, fontWeight: '600' },
  row: { padding: 16, borderTopWidth: 1 },
  rowText: { fontSize: 16 },
  status: { alignItems: 'center', gap: 10, paddingVertical: 24, paddingHorizontal: 16 },
  retryButton: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8, borderWidth: 1 },
});
