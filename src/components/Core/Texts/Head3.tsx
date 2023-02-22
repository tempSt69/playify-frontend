import { useMemo } from 'react';
import { TypeDefaultText, invertThemeHelper } from '../../CommonTypes';

export const Head3 = ({
  className,
  switchTheme = false,
  children,
}: TypeDefaultText) => {
  const computedClasses = useMemo(() => {
    const colorsClass = invertThemeHelper(switchTheme);

    return [colorsClass].join(' ');
  }, [switchTheme]);
  return (
    <h3
      className={`${className} ${computedClasses} duration-500 font-Kanit font-light text-2xl`}
    >
      {children}
    </h3>
  );
};
