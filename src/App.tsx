import { Main } from './pages/Main';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlay,
  faPause,
  faBackwardStep,
  faForwardStep,
  faShuffle,
  faMagnifyingGlass,
  faGear,
  faMoon,
  faSun
} from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from './contexts/ThemeContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import useThemeContext from './hooks/useThemeContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AddSong } from './pages/AddSong';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './auth/Keycloak';
import { PrivateRoute } from './utils/PrivateRoute';
import React from 'react';

library.add(
  faPlay,
  faPause,
  faBackwardStep,
  faForwardStep,
  faShuffle,
  faMagnifyingGlass,
  faGear,
  faMoon,
  faSun
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/add',
    element: (
      <PrivateRoute>
        <AddSong />
      </PrivateRoute>
    )
  }
]);

function App() {
  const queryClient = new QueryClient();

  const { theme, switchTheme } = useThemeContext();

  return (
    <>
      <ReactKeycloakProvider
        authClient={keycloak}
        initOptions={{
          onLoad: 'check-sso'
        }}
        onTokens={(tokens) => {
          if (tokens && tokens.token && tokens.refreshToken) {
            localStorage.setItem('token', tokens.token);
            localStorage.setItem('refresh', tokens.refreshToken);
          } else {
            localStorage.removeItem('token');
            localStorage.removeItem('refresh');
          }
        }}
      >
        <React.StrictMode>
          <ThemeContext.Provider value={{ theme, switchTheme: switchTheme }}>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
            </QueryClientProvider>
          </ThemeContext.Provider>
        </React.StrictMode>
      </ReactKeycloakProvider>
    </>
  );
}

export default App;
