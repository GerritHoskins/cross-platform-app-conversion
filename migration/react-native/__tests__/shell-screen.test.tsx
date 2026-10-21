import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { loadConference } from '@/data/load-conference';
import ShellScreen from '@/screens/shell-screen';

describe('loadConference: real core and bundled fixture', () => {
  test('returns the normalized conference with the expected session count', () => {
    const conference = loadConference();
    expect(conference.sessions).toHaveLength(20);
  });

  test('first session matches the fixed contract (not raw JSON)', () => {
    const first = loadConference().sessions[0];
    expect(first.id).toBe(1);
    expect(first.name).toBe('Breakfast');
    expect(first.startMinutes).toBe(480);
    expect(first.endMinutes).toBe(540);
    expect(first.groupTime).toBe('8:00 am');
    expect(first.tracks).toEqual(['Food']);
    expect(first.description).toBe('');
    expect(first.timeStart).toBe('8:00 am');
    expect(first.timeEnd).toBe('9:00 am');
  });

  test('separate calls return independent objects', () => {
    const first = loadConference();
    first.sessions[0].name = 'MUTATED-BY-TEST';

    const second = loadConference();
    expect(second.sessions[0].name).toBe('Breakfast');
  });
});

test('renders the accessible Conference heading and actual diagnostic body', async () => {
  const view = await render(<ShellScreen />);

  const heading = await screen.findByLabelText('Conference');
  expect(heading).toBeTruthy();

  expect(screen.getByText('Sessions: 20')).toBeTruthy();
  expect(screen.getByText('First session: 1 — Breakfast')).toBeTruthy();

  await view.unmount();
});
