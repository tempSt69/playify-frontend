import { createContext } from 'react';

export type ThemeContextType = {
  theme: 'light' | 'dark';
  switchTheme?(): void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  switchTheme: undefined,
});
