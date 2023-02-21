import { useMemo } from 'react';

const getSizeClasses = (size: string) => {
  switch (size) {
    case 'small': {
      return 'px-4 py-2.5';
    }
    case 'large': {
      return 'px-6 py-3';
    }
    default: {
      return 'px-5 py-2.5';
    }
  }
};

const getModeClasses = (isPrimary: boolean) =>
  isPrimary ? 'dark:border-white' : 'dark:border-white';

const BASE_BUTTON_CLASSES = 'cursor-pointer rounded-full border-2 inline-block';

/**
 * Primary UI component for user interaction
 */
export const IconButton = ({
  primary = false,
  size = 'medium',
  icon = 'play',
  ...props
}) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary);
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(' ');
  }, [primary, size]);

  return (
    <button
      type='button'
      className={`${BASE_BUTTON_CLASSES} ${computedClasses} rounded-full `}
      {...props}
    >
      {icon}
    </button>
  );
};
