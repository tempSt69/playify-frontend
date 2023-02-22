import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { useMemo } from 'react';

type TypeIconButton = {
  size: string;
  icon: IconName;
  border: boolean;
};

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

const getBorderClass = (border: boolean): string => {
  return border ? 'border-black border-2 dark:border-white' : '';
};
export const ButtonPlayer = ({
  size,
  icon,
  border,
  ...props
}: TypeIconButton) => {
  const computedClasses = useMemo(() => {
    const sizeClass = getSizeClasses(size);
    const borderClass = getBorderClass(border);
    return [sizeClass, borderClass].join(' ');
  }, [size]);
  return (
    <button type='button' {...props}>
      <FontAwesomeIcon
        className={`h-3 w-3 px-2 py-2 cursor-pointer bg-transparent inline-block rounded-full dark:text-white text-black active:scale-90 active:bg-opacity-30 active:bg-neutral-100 dark:active:bg-neutral-600 dark:active:bg-opacity-30 transition-all duration-100 ease-in-out ${computedClasses}`}
        icon={['fas', icon]}
      />
    </button>
  );
};
