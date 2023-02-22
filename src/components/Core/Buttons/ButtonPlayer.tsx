import { IconName } from '@fortawesome/fontawesome-svg-core';
import { useMemo } from 'react';
import { getColorClasses } from '../../CommonTypes';
import { SimpleIcon } from '../Commons/SimpleIcon';

type TypeIconButton = {
  size: string;
  icon: IconName;
  border: boolean;
  refresh?: boolean;
  switchTheme?: boolean;
  disabled?: boolean;
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

const getBorderClasses = (border: boolean): string => {
  return border ? 'border-black border-2 dark:border-white' : '';
};

const getDisabledClasses = (disabled: boolean): string => {
  return disabled ? 'cursor-default pointer-events-none' : 'cursor-pointer';
};

export const ButtonPlayer = ({
  size,
  icon,
  border,
  refresh = false,
  switchTheme = false,
  disabled = false,
  ...props
}: TypeIconButton) => {
  const computedClasses = useMemo(() => {
    const sizeClass = getSizeClasses(size);
    const borderClass = getBorderClasses(border);
    const disabledClass = getDisabledClasses(disabled);
    const colorsClass = getColorClasses(switchTheme);

    return [sizeClass, borderClass, disabledClass, colorsClass].join(' ');
  }, [switchTheme, size, border, disabled]);
  return (
    <button type='button' {...props}>
      <SimpleIcon
        icon={icon}
        className={`bg-transparent inline-block rounded-full active:scale-90 active:bg-opacity-30 active:bg-neutral-100 dark:active:bg-neutral-600 dark:active:bg-opacity-30 transition-all duration-100 ease-in-out ${computedClasses}`}
      />
    </button>
  );
};
