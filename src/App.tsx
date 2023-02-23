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
import { ThemeContext, ThemeContextType } from './contexts/ThemeContext';
import { useEffect, useState } from 'react';

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
  const [themeContext, setTheme] = useState<ThemeContextType>({
    theme: 'light',
  });

  useEffect(() => {
    window.document.documentElement.setAttribute(
      'data-mode',
      themeContext.theme
    );
    console.log('effect theme', themeContext.theme);
  }, [themeContext]);

  const switchTheme = () => {
    setTheme({ theme: themeContext.theme == 'dark' ? 'light' : 'dark' });
  };

  return (
    <ThemeContext.Provider
      value={{ theme: themeContext.theme, switchTheme: switchTheme }}
    >
      <Main />
    </ThemeContext.Provider>
  );
}

export default App;
