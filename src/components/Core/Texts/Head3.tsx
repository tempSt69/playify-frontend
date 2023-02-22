import { useMemo } from 'react';
import { DefaultText, getColorClasses } from '../../CommonTypes';

export const Head3 = ({
  className,
  switchTheme = false,
  children,
}: DefaultText) => {
  const computedClasses = useMemo(() => {
    const colorsClass = getColorClasses(switchTheme);

    return [colorsClass].join(' ');
  }, [switchTheme]);
  return (
    <h3
      className={`${className} ${computedClasses} font-Kanit font-light text-2xl`}
    >
      {children}
    </h3>
  );
};
