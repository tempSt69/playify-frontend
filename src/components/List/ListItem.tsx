import { useMemo } from 'react';
import { ButtonPlayer } from '../Core/Buttons/ButtonPlayer';
import { Head3 } from '../Core/Texts/Head3';
import { Span } from '../Core/Texts/Span';

type ListItem = {
  text: string;
  duration: string;
  active: boolean;
};
const getWrapperClasses = (active: boolean) =>
  active
    ? 'bg-black dark:bg-white dark:border-white'
    : 'bg-transparent border-transparent hover:border-black dark:hover:border-white';
const getInnerClasses = (active: boolean) =>
  active ? 'text-white dark:text-black' : 'text-black dark:text-white';

export const ListItem = ({
  text,
  duration,
  active = false,
  ...props
}: ListItem) => {
  const innerClasses = getInnerClasses(active);
  return (
    <div
      className={`border-2 cursor-pointer border-transparent flex w-full items-center px-5 py-3 rounded-3xl transition-colors duration-200 ease-in-out ${getWrapperClasses(
        active
      )}`}
      {...props}
    >
      <ButtonPlayer
        border={false}
        icon={active ? 'pause' : 'play'}
        size={'medium'}
        switchTheme={active}
      />
      <Head3 switchTheme={active} className={`ml-5 ${innerClasses}`}>
        {text}
      </Head3>
      <Span className={`${innerClasses} ml-auto`}>{duration}</Span>
    </div>
  );
};
