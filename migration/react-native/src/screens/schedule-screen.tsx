import {
  ActivityIndicator,
  Pressable,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import type { ScheduleMode, Session, SessionGroup } from '@migration/core';

import { useConference } from '../state/conference-state';

interface Palette {
  background: string;
  surface: string;
  text: string;
  subtle: string;
  border: string;
  accent: string;
  accentSoft: string;
}

const PALETTES: Record<'light' | 'dark', Palette> = {
  light: {
    background: '#f5f5f7',
    surface: '#ffffff',
    text: '#111114',
    subtle: '#5c5c66',
    border: '#d9d9de',
    accent: '#4e6e5e',
    accentSoft: '#e4eee9',
  },
  dark: {
    background: '#101014',
    surface: '#1c1c22',
    text: '#f2f2f5',
    subtle: '#a7a7b2',
    border: '#3a3a44',
    accent: '#9fd3b4',
    accentSoft: '#24352c',
  },
};

function ModeButton({
  label,
  mode,
  active,
  disabled,
  palette,
  onPress,
}: {
  label: string;
  mode: ScheduleMode;
  active: boolean;
  disabled: boolean;
  palette: Palette;
  onPress: (mode: ScheduleMode) => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ selected: active, disabled }}
      disabled={disabled}
      testID={`mode-${mode}`}
      onPress={() => onPress(mode)}
      style={({ pressed }) => [
        styles.modeButton,
        {
          borderColor: active ? palette.accent : palette.border,
          backgroundColor: active ? palette.accentSoft : palette.surface,
          opacity: disabled ? 0.5 : pressed ? 0.85 : 1,
        },
      ]}
    >
      <Text style={[styles.modeButtonLabel, { color: active ? palette.accent : palette.text }]}>
        {label}
      </Text>
    </Pressable>
  );
}

function Row({ session, palette }: { session: Session; palette: Palette }) {
  return (
    <View testID={`session-${session.id}`} style={[styles.row, { backgroundColor: palette.surface, borderColor: palette.border }]}>
      <Text
        accessibilityRole="header"
        style={[styles.sessionName, { color: palette.text }]}
      >
        {session.name}
      </Text>
      <Text style={[styles.meta, { color: palette.subtle }]}>
        {session.timeStart}–{session.timeEnd} · {session.location}
      </Text>
      <Text style={[styles.meta, { color: palette.subtle }]}>{session.tracks.join(', ')}</Text>
    </View>
  );
}

export default function ScheduleScreen() {
  const { state, dispatch, retry, groups } = useConference();
  const scheme = useColorScheme() ?? 'light';
  const palette = PALETTES[scheme];

  const ready = state.status === 'ready';
  const selection = state.selection;
  const searchText = selection?.searchText ?? '';
  const activeMode: ScheduleMode = selection?.mode ?? 'all';
  const favoritesCount = selection?.favoriteIds.length ?? 0;

  const handleSearch = (nextSearchText: string) => {
    dispatch({ type: 'setSearchText', searchText: nextSearchText });
  };

  const handleMode = (mode: ScheduleMode) => {
    dispatch({ type: 'setMode', mode });
  };

  const sections: Array<{ key: string; title: string; data: Session[] }> = groups.map(
    (group: SessionGroup) => ({ key: group.groupTime, title: group.groupTime, data: group.sessions }),
  );

  const emptyMessage =
    ready && groups.length === 0
      ? activeMode === 'favorites' && favoritesCount === 0
        ? 'No favorite sessions.'
        : 'No sessions match your search or filters.'
      : null;

  return (
    <View style={[styles.screen, { backgroundColor: palette.background }]}>
      <Text accessibilityRole="header" style={[styles.heading, { color: palette.text }]}>
        Conference
      </Text>

      <View style={[styles.controls, { borderColor: palette.border }]}>
        <TextInput
          accessibilityRole="search"
          accessibilityLabel="Search sessions"
          accessibilityState={{ disabled: !ready }}
          editable={ready}
          value={searchText}
          onChangeText={handleSearch}
          placeholder="Search sessions"
          placeholderTextColor={palette.subtle}
          returnKeyType="search"
          style={[
            styles.input,
            { color: palette.text, borderColor: palette.border, backgroundColor: palette.surface },
          ]}
        />
        <View style={styles.modeRow}>
          <ModeButton
            label="All sessions"
            mode="all"
            active={activeMode === 'all'}
            disabled={!ready}
            palette={palette}
            onPress={handleMode}
          />
          <ModeButton
            label="Favorite sessions"
            mode="favorites"
            active={activeMode === 'favorites'}
            disabled={!ready}
            palette={palette}
            onPress={handleMode}
          />
        </View>
      </View>

      {state.status === 'idle' || state.status === 'loading' ? (
        <View accessibilityRole="progressbar" accessibilityLabel="Loading sessions" style={styles.statusBlock}>
          <ActivityIndicator color={palette.accent} />
          <Text style={{ color: palette.text }}>Loading sessions…</Text>
        </View>
      ) : null}

      {state.status === 'error' ? (
        <View accessibilityRole="alert" style={styles.statusBlock}>
          <Text style={{ color: palette.text, fontWeight: '600' }}>Unable to load sessions.</Text>
          {state.error ? <Text style={{ color: palette.subtle }}>{state.error}</Text> : null}
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Retry"
            onPress={retry}
            style={[
              styles.retryButton,
              { borderColor: palette.accent, backgroundColor: palette.accentSoft },
            ]}
          >
            <Text style={{ color: palette.accent, fontWeight: '600' }}>Retry</Text>
          </Pressable>
        </View>
      ) : null}

      {ready ? (
        emptyMessage !== null ? (
          <Text style={[styles.emptyMessage, { color: palette.subtle }]}>{emptyMessage}</Text>
        ) : (
          <SectionList
            accessibilityRole="list"
            sections={sections}
            keyExtractor={(item: Session) => String(item.id)}
            stickySectionHeadersEnabled={false}
            renderItem={({ item }: { item: Session }) => <Row session={item} palette={palette} />}
            renderSectionHeader={({ section }: { section: { key: string; title: string; data: Session[] } }) => (
              <Text style={[styles.sectionHeader, { color: palette.accent }]}>{section.title}</Text>
            )}
            contentContainerStyle={styles.list}
          />
        )
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
  },
  controls: {
    gap: 10,
    padding: 12,
    borderRadius: 12,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  input: {
    height: 42,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  modeRow: {
    flexDirection: 'row',
    gap: 8,
  },
  modeButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  modeButtonLabel: {
    fontSize: 15,
    fontWeight: '600',
  },
  statusBlock: {
    alignItems: 'center',
    gap: 10,
    paddingVertical: 24,
  },
  retryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  emptyMessage: {
    fontSize: 16,
    paddingVertical: 12,
  },
  list: {
    gap: 8,
  },
  row: {
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 12,
    gap: 4,
  },
  sessionName: {
    fontSize: 17,
    fontWeight: '600',
  },
  meta: {
    fontSize: 14,
  },
  sectionHeader: {
    fontSize: 15,
    fontWeight: '700',
    marginTop: 8,
    marginBottom: 4,
  },
});
