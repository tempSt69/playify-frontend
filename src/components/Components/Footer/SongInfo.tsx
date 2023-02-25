import { Cover } from '../../Core/Media/Cover';
import { Head3 } from '../../Core/Texts/Head3';
import { Paragraph } from '../../Core/Texts/Paragraph';
import { Span } from '../../Core/Texts/Span';

type SongBasics = {
  cover: string;
  name: string;
};

export type TypeSongInfo = {
  selectedSong: SongBasics | null;
};

export const SongInfo: React.FC<TypeSongInfo> = ({
  selectedSong = null,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`flex items-center justify-start w-2/12 rounded-tr-xl h-20 bg-opacity-40 bg-slate-300 dark:bg-slate-700 dark:bg-opacity-40`}
    >
      {selectedSong ? (
        <>
          <div className='w-3/12 p-2'>
            <Cover src={selectedSong.cover} size={'small'} />
          </div>
          <Paragraph className='w-9/12 pl-1'>{selectedSong.name}</Paragraph>
        </>
      ) : null}
    </div>
  );
};
