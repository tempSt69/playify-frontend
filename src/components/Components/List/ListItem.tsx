import { useContext } from 'react';
import { MusicPlayerContext } from '../../../contexts/MusicPlayerContext';
import { Song } from '../../../services/types/Song';
import { formatTime } from '../../../utils/FormatTime';
import { ButtonPlayer } from '../../Core/Buttons/ButtonPlayer';
import { Head3 } from '../../Core/Texts/Head3';
import { Span } from '../../Core/Texts/Span';

export type TypeListItem = {
  item: Song & { active: boolean };
};
const getWrapperClasses = (active: boolean) =>
  active
    ? 'bg-black dark:bg-white dark:border-transparent'
    : 'bg-transparent border-transparent hover:border-black dark:hover:border-white';
const getInnerClasses = (active: boolean) =>
  active ? 'text-white dark:text-black' : 'text-black dark:text-white';

export const ListItem = ({ item, ...props }: TypeListItem) => {
  const innerClasses = getInnerClasses(item.active);
  const { playing, pause, play, selectSong } = useContext(MusicPlayerContext);

  return (
    <div
      className={`duration my-2 border-2 cursor-pointer border-transparent flex w-full items-center px-5 py-3 rounded-3xl transition-all duration-500 ease-in ${getWrapperClasses(
        item.active
      )}`}
      {...props}
      onClick={() => {
        if (!item.active) {
          selectSong!(item);
        }
      }}
    >
      <ButtonPlayer
        border={false}
        icon={item.active && playing ? 'pause' : 'play'}
        onClick={playing ? pause : play}
        size={'medium'}
        switchTheme={item.active}
      />
      <Head3 switchTheme={item.active} className={`ml-5 ${innerClasses}`}>
        {item.name}
      </Head3>
      <Span className={`${innerClasses} ml-auto`}>
        {formatTime(item.duration)}
      </Span>
    </div>
  );
};
