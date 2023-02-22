import { useMemo } from 'react';
import { ButtonPlayer } from '../Core/Buttons/ButtonPlayer';
import { Head3 } from '../Core/Texts/Head3';
import { Span } from '../Core/Texts/Span';

export type TypeListItem = {
  _id: string;
  name: string;
  duration: string;
  active: boolean;
  trackUrl: string;
};
const getWrapperClasses = (active: boolean) =>
  active
    ? 'bg-black dark:bg-white dark:border-transparent'
    : 'bg-transparent border-transparent hover:border-black dark:hover:border-white';
const getInnerClasses = (active: boolean) =>
  active ? 'text-white dark:text-black' : 'text-black dark:text-white';

export const ListItem = ({
  _id,
  name,
  duration,
  active = false,
  ...props
}: TypeListItem) => {
  const innerClasses = getInnerClasses(active);
  return (
    <div
      className={`duration my-2 border-2 cursor-pointer border-transparent flex w-full items-center px-5 py-3 rounded-3xl transition-all duration-500 ease-in ${getWrapperClasses(
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
        {name}
      </Head3>
      <Span className={`${innerClasses} ml-auto`}>{duration}</Span>
    </div>
  );
};
