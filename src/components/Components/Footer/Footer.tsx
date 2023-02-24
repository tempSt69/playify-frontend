import { useContext } from 'react';
import { MusicPlayerContext } from '../../../contexts/MusicPlayerContext';
import { ProgressBar } from './ProgressBar';
import { SongInfo } from './SongInfo';

export const Footer = ({ ...props }) => {
  const { playing, song, audioRef, progressBarRef, timeProgress } =
    useContext(MusicPlayerContext);

  return (
    <div
      {...props}
      className={`flex gap-5 items-end justify-between w-full h-1/6`}
    >
      <SongInfo
        selectedSong={{ cover: song?.artist.cover!, name: song?.name! }}
      />
      <ProgressBar
        hasSong={playing}
        audioRef={audioRef}
        progressBarRef={progressBarRef}
        timeProgress={timeProgress}
        duration={song?.duration}
      />
    </div>
  );
};
