import { useEffect, useState } from 'react';
import { ThemeContextType } from '../contexts/ThemeContext';

export default function useThemeContext(): ThemeContextType {
  const [themeContext, setTheme] = useState<ThemeContextType>({
    theme:
      localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark'
        ? 'dark'
        : 'light',
  });

  useEffect(() => {
    window.document.documentElement.setAttribute(
      'data-mode',
      themeContext.theme
    );
  }, [themeContext]);

  const switchTheme = () => {
    localStorage.setItem(
      'theme',
      themeContext.theme == 'dark' ? 'light' : 'dark'
    );
    setTheme({ theme: themeContext.theme == 'dark' ? 'light' : 'dark' });
  };

  return { switchTheme, theme: themeContext.theme };
}
