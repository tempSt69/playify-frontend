export type TypeDefaultText = {
  children: string;
  className?: string;
  switchTheme?: boolean;
};

export const invertThemeHelper = (switchTheme: boolean): string => {
  return switchTheme
    ? 'dark:text-black text-white'
    : 'dark:text-white text-black';
};
