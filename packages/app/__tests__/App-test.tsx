import 'react-native';

import App from '../src/app/App';
/**
 * @format
 */
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native-splash-screen', () => {
  return {
    hide: jest.fn(),
    show: jest.fn(),
  };
});

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

describe('App', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });
});
