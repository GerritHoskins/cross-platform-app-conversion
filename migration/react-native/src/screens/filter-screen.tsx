import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { selectTrackOptions, useConference, type TrackOption } from '../state/conference-state';

export default function FilterScreen() {
  const { state, dispatch, retry } = useConference();
  const [draft, setDraft] = useState<TrackOption[] | null>(null);
  const dark = useColorScheme() === 'dark';
  const colors = dark
    ? { background: '#101014', surface: '#1c1c22', text: '#f2f2f5', border: '#3a3a44', accent: '#9fd3b4' }
    : { background: '#f5f5f7', surface: '#ffffff', text: '#111114', border: '#d9d9de', accent: '#4e6e5e' };

  useEffect(() => {
    if (state.status === 'ready' && state.conference !== null && state.selection !== null) {
      // Initialize once per mounted route, never resync over an edited draft.
      setDraft((current) => current ?? selectTrackOptions(state));
    }
  }, [state]);

  const ready = state.status === 'ready' && draft !== null;
  const selectAll = (checked: boolean) => {
    setDraft((current) => current?.map((option) => ({ ...option, checked })) ?? null);
  };
  const done = () => {
    if (!ready) return;
    dispatch({ type: 'setSelectedTracks', selectedTracks: draft.filter(({ checked }) => checked).map(({ name }) => name) });
    router.back();
  };

  function button(label: string, onPress: () => void, disabled = !ready) {
    return (
      <Pressable
        key={label}
        accessibilityRole="button"
        accessibilityLabel={label}
        accessibilityState={{ disabled }}
        disabled={disabled}
        onPress={onPress}
        style={({ pressed }) => [styles.button, { borderColor: colors.accent, backgroundColor: colors.surface, opacity: disabled ? 0.5 : pressed ? 0.85 : 1 }]}
      >
        <Text style={{ color: colors.accent, fontWeight: '600' }}>{label}</Text>
      </Pressable>
    );
  }

  return (
    <View style={[styles.screen, { backgroundColor: colors.background }]}>
      <Text accessibilityRole="header" style={[styles.heading, { color: colors.text }]}>Tracks</Text>
      <View style={styles.controls}>
        {button('Reset', () => selectAll(false))}
        {button('Deselect All', () => selectAll(false))}
        {button('Select All', () => selectAll(true))}
        {button('Done', done)}
      </View>
      {state.status === 'idle' || state.status === 'loading' ? (
        <View accessible accessibilityRole="progressbar" accessibilityLabel="Loading sessions" style={styles.status}>
          <ActivityIndicator color={colors.accent} />
          <Text style={{ color: colors.text }}>Loading sessions…</Text>
        </View>
      ) : null}
      {state.status === 'error' ? (
        <View accessibilityRole="alert" style={styles.status}>
          <Text style={{ color: colors.text, fontWeight: '600' }}>Unable to load sessions.</Text>
          {state.error ? <Text style={{ color: colors.text }}>{state.error}</Text> : null}
          {button('Retry', retry, false)}
        </View>
      ) : null}
      {ready ? (
        <ScrollView contentContainerStyle={styles.tracks}>
          {draft.map(({ name, checked }) => (
            <Pressable
              key={name}
              accessibilityRole="checkbox"
              accessibilityLabel={name}
              accessibilityState={{ checked }}
              onPress={() => setDraft((current) => current!.map((option) => option.name === name ? { ...option, checked: !option.checked } : option))}
              style={({ pressed }) => [styles.track, { borderColor: colors.border, backgroundColor: colors.surface, opacity: pressed ? 0.85 : 1 }]}
            >
              <Text accessible={false} style={[styles.indicator, { color: colors.accent }]}>{checked ? '☑' : '☐'}</Text>
              <Text style={[styles.label, { color: colors.text }]}>{name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16, gap: 12 },
  heading: { fontSize: 24, fontWeight: '700' },
  controls: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  button: { paddingVertical: 12, paddingHorizontal: 16, minHeight: 48, borderWidth: 1, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  status: { alignItems: 'center', gap: 10, paddingVertical: 24 },
  tracks: { gap: 8, paddingBottom: 16 },
  track: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 12, minHeight: 48, borderWidth: 1, borderRadius: 8 },
  indicator: { fontSize: 24 },
  label: { flex: 1, fontSize: 16 },
});
