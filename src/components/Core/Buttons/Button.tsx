import { useMemo } from 'react';

type TypeButton = {
  size: string;
  primary: boolean;
  label: string;
};

const getSizeClasses = (size: string) => {
  switch (size) {
    case 'small':
      return 'px-4 py-2.5';
    case 'large':
      return 'px-6 py-3';
    default:
      return 'px-5 py-2.5';
  }
};

const getModeClasses = (isPrimary: boolean) =>
  isPrimary
    ? 'text-white bg-black border-black dark:bg-white dark:text-black dark:border-white active:bg-opacity-90 active:bg-neutral-900 dark:active:bg-neutral-200'
    : 'text-black text-black bg-transparent border-black dark:text-white dark:border-white active:bg-neutral-100 dark:active:bg-neutral-600 active:bg-opacity-30';

const BASE_BUTTON_CLASSES =
  'active:scale-90 transition-all duration-100 ease-in-out cursor-pointer rounded-full border-2 font-bold leading-none inline-block';

export const Button = ({
  primary = false,
  size = 'medium',
  label = 'Button',
  ...props
}: TypeButton) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary);
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(' ');
  }, [primary, size]);

  return (
    <button
      type='button'
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
      {...props}
    >
      {label}
    </button>
  );
};
