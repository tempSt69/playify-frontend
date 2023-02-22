export type DefaultText = {
  children: string;
  className?: string;
  switchTheme?: boolean;
};

export const getColorClasses = (switchTheme: boolean): string => {
  return switchTheme
    ? 'dark:text-black text-white'
    : 'dark:text-white text-black';
};
