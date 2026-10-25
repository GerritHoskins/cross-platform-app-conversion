type MockProps = import('react').ComponentProps<typeof import('react-native-gesture-handler/ReanimatedSwipeable').default>;
type MockMethods = import('react-native-gesture-handler/ReanimatedSwipeable').SwipeableMethods;
type MockSharedValue = Parameters<NonNullable<MockProps['renderRightActions']>>[0];

jest.mock('react-native-gesture-handler/ReanimatedSwipeable', () => {
  const React = require('react') as typeof import('react');
  const { View } = require('react-native') as typeof import('react-native');

  // Wiring-only double: tests explicitly drive callbacks; no gesture or app logic.
  const SwipeableDouble = React.forwardRef<MockMethods, MockProps>((props, ref) => {
    const methods = React.useRef<MockMethods>({
      close: jest.fn(),
      openLeft: jest.fn(),
      openRight: jest.fn(),
      reset: jest.fn(),
    }).current;
    React.useImperativeHandle(ref, () => methods, [methods]);
    const forwarded = {
      testID: props.testID,
      onSwipeableWillOpen: props.onSwipeableWillOpen,
      onSwipeableClose: props.onSwipeableClose,
    };
    return React.createElement(
      View,
      forwarded,
      props.children,
      props.renderRightActions?.({ value: 0 } as MockSharedValue, { value: 0 } as MockSharedValue, methods),
    );
  });
  SwipeableDouble.displayName = 'SwipeableDouble';
  return { __esModule: true, default: SwipeableDouble };
});

import 'react-native-gesture-handler/jestSetup';
