import { Cover } from '../../Core/Media/Cover';
import { Head3 } from '../../Core/Texts/Head3';

type Song = {
  cover: string;
  name: string;
};

export type TypeSongInfo = {
  selectedSong: Song | null;
};

export const SongInfo = ({ selectedSong = null, ...props }: TypeSongInfo) => {
  return (
    <div
      {...props}
      className={`flex items-center justify-start w-3/12 rounded-tr-xl h-20 bg-opacity-40 bg-slate-300 dark:bg-slate-700`}
    >
      {selectedSong ? (
        <>
          <div className='w-3/12 p-2'>
            <Cover src={selectedSong.cover} size={'small'} />
          </div>
          <Head3 className='w-9/12 pl-1'>{selectedSong.name}</Head3>
        </>
      ) : null}
    </div>
  );
};