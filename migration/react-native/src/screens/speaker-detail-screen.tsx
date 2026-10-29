import { findSpeakerByRouteId } from '@migration/core';
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { speakerPhoto } from '../data/speaker-photos';
import { useConference } from '../state/conference-state';

const PALETTES = {
  light: { background: '#f5f5f7', text: '#111114', subtle: '#5c5c66', accent: '#4e6e5e' },
  dark: { background: '#101014', text: '#f2f2f5', subtle: '#a7a7b2', accent: '#9fd3b4' },
};

export default function SpeakerDetailScreen({ speakerId }: { speakerId: string | string[] | undefined }) {
  const { state, speakerProfiles, retry } = useConference();
  const palette = PALETTES[useColorScheme() ?? 'light'];
  const result = state.status === 'ready' ? findSpeakerByRouteId(speakerProfiles, speakerId) : undefined;
  const speaker = result?.status === 'found' ? result.speaker : undefined;
  const photo = speaker ? speakerPhoto(speaker.profilePic) : undefined;

  return (
    <ScrollView style={{ backgroundColor: palette.background }} contentContainerStyle={styles.content}>
      {state.status === 'idle' || state.status === 'loading' ? (
        <View accessible accessibilityRole="progressbar" accessibilityLabel="Loading sessions" style={styles.status}>
          <ActivityIndicator color={palette.accent} />
          <Text style={{ color: palette.text }}>Loading sessions…</Text>
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
        speaker ? (
          <View style={styles.profile}>
            {photo !== undefined ? <Image source={photo} accessible accessibilityRole="image" accessibilityLabel={`Profile photo of ${speaker.name}`} style={styles.photo} /> : null}
            <Text accessibilityRole="header" style={[styles.heading, { color: palette.text }]}>{speaker.name}</Text>
            <Text style={{ color: palette.subtle }}>{speaker.title}</Text>
            <Text style={[styles.biography, { color: palette.text }]}>{speaker.about}</Text>
          </View>
        ) : (
          <View style={styles.profile}>
            <Text accessibilityRole="header" style={[styles.heading, { color: palette.text }]}>Speaker not found.</Text>
            <Text style={{ color: palette.subtle }}>Return to Speakers and choose a speaker.</Text>
          </View>
        )
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 12 },
  status: { alignItems: 'center', gap: 10, paddingVertical: 24 },
  profile: { gap: 12 },
  photo: { width: '100%', maxWidth: 360, aspectRatio: 1, borderRadius: 12, resizeMode: 'cover', alignSelf: 'center' },
  heading: { fontSize: 24, fontWeight: '700' },
  biography: { fontSize: 16, lineHeight: 24 },
  button: { padding: 12, borderRadius: 8, borderWidth: 1 },
});
