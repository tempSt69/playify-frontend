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
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from './contexts/ThemeContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import useThemeContext from './hooks/useThemeContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AddSong } from './pages/AddSong';

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
    element: <Main />,
  },
  {
    path: '/add',
    element: <AddSong />,
  },
]);

function App() {
  const queryClient = new QueryClient();

  const { theme, switchTheme } = useThemeContext();

  return (
    <>
      <ThemeContext.Provider value={{ theme, switchTheme: switchTheme }}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
