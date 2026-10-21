import React from 'react';
import { render, screen } from '@testing-library/react-native';

import ShellScreen from '@/screens/shell-screen';

test('renders the accessible Conference heading and welcome body', async () => {
  const view = await render(<ShellScreen />);

  const heading = await screen.findByLabelText('Conference');
  expect(heading).toBeTruthy();

  expect(
    screen.getByText('Welcome to the conference app.'),
  ).toBeTruthy();

  await view.unmount();
});
