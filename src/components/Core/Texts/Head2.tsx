import { useMemo } from 'react';
import { DefaultText, getColorClasses } from '../../CommonTypes';

export const Head2 = ({
  className,
  switchTheme = false,
  children,
}: DefaultText) => {
  const computedClasses = useMemo(() => {
    const colorsClass = getColorClasses(switchTheme);

    return [colorsClass].join(' ');
  }, [switchTheme]);
  return (
    <h2
      className={`${className} ${computedClasses} font-Kanit font-medium text-3xl`}
    >
      {children}
    </h2>
  );
};
