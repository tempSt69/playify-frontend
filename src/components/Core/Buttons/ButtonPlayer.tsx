import { IconName } from '@fortawesome/fontawesome-svg-core';
import React, { useMemo } from 'react';
import { SimpleIcon } from '../Commons/SimpleIcon';

type TypeIconButton = {
  size: 'small' | 'medium' | 'large' | 'xlarge';
  icon: IconName;
  border?: boolean;
  refresh?: boolean;
  switchTheme?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
};

const getSizeClasses = (size: string): string => {
  switch (size) {
    case 'small':
      return 'h-2 w-2 px-1 py-1';
    case 'large':
      return 'h-5 w-5 px-4 py-4';
    case 'xlarge':
      return 'h-7 w-7 px-6 py-6';
    case 'medium':
    default:
      return 'h-4 w-4 px-2 py-2';
  }
};

const getBorderClasses = (border: boolean): string => {
  return border ? 'border-black border-2 dark:border-white' : '';
};

const getDisabledClasses = (disabled: boolean): string => {
  return disabled ? 'cursor-default pointer-events-none' : 'cursor-pointer';
};

export const ButtonPlayer: React.FC<TypeIconButton> = ({
  size,
  icon,
  border = false,
  refresh = false,
  disabled = false,
  onClick = undefined,
  ...props
}) => {
  const computedClasses = useMemo(() => {
    const sizeClass = getSizeClasses(size);
    const borderClass = getBorderClasses(border);
    const disabledClass = getDisabledClasses(disabled);

    return [sizeClass, borderClass, disabledClass].join(' ');
  }, [size, border, disabled]);
  return (
    <button type='button' {...props} onClick={onClick}>
      <SimpleIcon
        icon={icon}
        className={`dark:text-white text-black bg-transparent inline-block rounded-full active:scale-90 active:bg-opacity-30 active:bg-neutral-100 dark:active:bg-neutral-600 dark:active:bg-opacity-30 transition-all duration-100 ease-in-out ${computedClasses}`}
      />
    </button>
  );
};
