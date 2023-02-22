import { useMemo } from 'react';
import { TypeDefaultText, invertThemeHelper } from '../../CommonTypes';

export const Head2 = ({
  className,
  switchTheme = false,
  children,
}: TypeDefaultText) => {
  const computedClasses = useMemo(() => {
    const colorsClass = invertThemeHelper(switchTheme);

    return [colorsClass].join(' ');
  }, [switchTheme]);
  return (
    <h2
      className={`${className} ${computedClasses} duration-500 font-Kanit font-medium text-3xl`}
    >
      {children}
    </h2>
  );
};
