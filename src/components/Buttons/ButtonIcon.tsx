import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { useMemo } from 'react';

const getSizeClasses = (size: string): string => {
  switch (size) {
    case 'small':
      return 'h-2 w-2 px-1 py-1';
    case 'large':
      return 'h-5 w-5 px-4 py-4';
    case 'medium':
    default:
      return 'h-3 w-3 px-2 py-2';
  }
};
type TypeIconButton = {
  size: string;
  icon: IconName;
};
export const ButtonIcon = ({ size, icon, ...props }: TypeIconButton) => {
  const computedClasses = useMemo(() => {
    const sizeClass = getSizeClasses(size);
    return [sizeClass].join(' ');
  }, [size]);
  return (
    <button type='button' {...props}>
      <FontAwesomeIcon
        className={
          'h-3 w-3 px-2 py-2 cursor-pointer bg-transparent inline-block border-2 rounded-full ' +
          'border-black text-black ' +
          'dark:border-white dark:text-white ' +
          computedClasses
        }
        icon={['fas', icon]}
      />
    </button>
  );
};
