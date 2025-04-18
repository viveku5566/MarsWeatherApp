import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

jest.mock('react-redux', () => ({
  Provider: ({ children }: any) => children,
}));

jest.mock('styled-components/native', () => ({
  ThemeProvider: ({ children }: any) => children,
}));

jest.mock('../src/screens/HomeScreen', () => () => <></>);

describe('App component', () => {
  it('renders without crashing', () => {
    const { toJSON } = render(<App />);
    expect(toJSON()).toBeTruthy();
  });
});
