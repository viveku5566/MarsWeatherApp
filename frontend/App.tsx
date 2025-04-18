import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { store } from './src/app/store';
import { theme } from './src/styles/theme';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HomeScreen />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
