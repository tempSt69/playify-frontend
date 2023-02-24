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

function App() {
  const queryClient = new QueryClient();

  const { theme, switchTheme } = useThemeContext();

  return (
    <>
      <ThemeContext.Provider value={{ theme, switchTheme: switchTheme }}>
        <QueryClientProvider client={queryClient}>
          <Main />
        </QueryClientProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
