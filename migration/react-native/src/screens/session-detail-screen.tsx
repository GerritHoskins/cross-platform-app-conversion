import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { selectIsFavorite, selectSessionById, useConference } from '../state/conference-state';

const PALETTES = {
  light: { background: '#f5f5f7', text: '#111114', subtle: '#5c5c66', accent: '#4e6e5e', border: '#d9d9de' },
  dark: { background: '#101014', text: '#f2f2f5', subtle: '#a7a7b2', accent: '#9fd3b4', border: '#3a3a44' },
};

const PLACEHOLDERS = ['Share', 'Watch', 'Add to Calendar', 'Mark as Unwatched', 'Download Video', 'Leave Feedback'];

export default function SessionDetailScreen({ sessionId }: { sessionId: string }) {
  const { state, dispatch, retry } = useConference();
  const palette = PALETTES[useColorScheme() ?? 'light'];
  // Deliberately reject partial parseInt matches, signs, whitespace and non-ASCII digits.
  const session = sessionId.length > 0 && !/[^0-9]/.test(sessionId)
    ? selectSessionById(state, Number(sessionId))
    : undefined;
  const favorite = session !== undefined && selectIsFavorite(state, session.id);

  const toggleFavorite = () => {
    if (session === undefined) return;
    dispatch({ type: favorite ? 'favoriteRemoved' : 'favoriteAdded', sessionId: session.id });
  };

  return (
    <ScrollView style={{ backgroundColor: palette.background }} contentContainerStyle={styles.content}>
      {state.status === 'idle' || state.status === 'loading' ? (
        <View accessible accessibilityRole="progressbar" accessibilityLabel="Loading session" style={styles.status}>
          <ActivityIndicator color={palette.accent} />
          <Text style={{ color: palette.text }}>Loading session…</Text>
        </View>
      ) : null}

      {state.status === 'error' ? (
        <View accessibilityRole="alert" style={styles.status}>
          <Text style={{ color: palette.text }}>Unable to load sessions.</Text>
          {state.error ? <Text style={{ color: palette.subtle }}>{state.error}</Text> : null}
          <Pressable accessibilityRole="button" accessibilityLabel="Retry" onPress={retry} style={[styles.button, { borderColor: palette.accent }]}>
            <Text style={{ color: palette.accent }}>Retry</Text>
          </Pressable>
        </View>
      ) : null}

      {state.status === 'ready' ? (
        session ? (
          <View style={styles.session}>
            <Text accessibilityRole="header" style={[styles.heading, { color: palette.text }]}>{session.name}</Text>
            <Text style={{ color: palette.accent }}>{session.tracks.join(', ')}</Text>
            {session.description ? <Text style={[styles.description, { color: palette.text }]}>{session.description}</Text> : null}
            <Text style={{ color: palette.subtle }}>{session.timeStart} – {session.timeEnd}</Text>
            <Text style={{ color: palette.subtle }}>{session.location}</Text>
          </View>
        ) : <Text style={{ color: palette.text }}>Session not found.</Text>
      ) : null}

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={favorite ? 'Remove from favorites' : 'Add to favorites'}
        accessibilityState={{ selected: favorite, disabled: session === undefined }}
        disabled={session === undefined}
        onPress={toggleFavorite}
        style={[styles.button, { borderColor: palette.accent, opacity: session === undefined ? 0.5 : 1 }]}
      >
        <Text style={{ color: palette.accent }}>{favorite ? '★ Remove from favorites' : '☆ Add to favorites'}</Text>
      </Pressable>

      {PLACEHOLDERS.map((label) => (
        <Pressable
          key={label}
          accessibilityRole="button"
          accessibilityLabel={label}
          accessibilityState={{ disabled: true }}
          disabled
          style={[styles.button, { borderColor: palette.border }]}
        >
          <Text style={{ color: palette.subtle }}>{label}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 12 },
  status: { alignItems: 'center', gap: 10, paddingVertical: 24 },
  session: { gap: 12 },
  heading: { fontSize: 24, fontWeight: '700' },
  description: { fontSize: 16, lineHeight: 24 },
  button: { padding: 12, borderRadius: 8, borderWidth: 1 },
});
