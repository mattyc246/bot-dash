import React from 'react';
import { Provider } from 'react-redux';

import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';

import { store } from './store';

import Routers from './services/routers';

const App = () => {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <NotificationsProvider>
          <Provider store={store}>
            <Routers />
          </Provider>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
