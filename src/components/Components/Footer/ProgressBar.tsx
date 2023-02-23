import { RefObject } from 'react';
import { Span } from '../../Core/Texts/Span';

type TypeProgressBar = {
  hasSong: boolean;
  progressBarRef?: RefObject<HTMLInputElement>;
  audioRef?: RefObject<HTMLAudioElement>;
  duration?: number;
  timeProgress?: number;
};

export const ProgressBar = ({
  hasSong = false,
  progressBarRef,
  audioRef,
  timeProgress,
  duration,
  ...props
}: TypeProgressBar) => {
  const handleProgressChange = () => {
    if (hasSong && audioRef && audioRef.current && progressBarRef) {
      audioRef.current.currentTime = parseInt(progressBarRef.current!.value);
    }
  };

  const formatTime = (time: number): string => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };

  return (
    <div
      {...props}
      className={`flex items-center justify-start w-10/12 rounded-tl-xl h-20 px-4 bg-opacity-40 bg-slate-300 dark:bg-slate-700`}
    >
      {/* {hasSong ? ( */}
      <div className='progress flex gap-3 w-full justify-between items-center'>
        <Span className='time current w-1/12'>{formatTime(timeProgress!)}</Span>
        <input
          type='range'
          ref={progressBarRef}
          defaultValue='15'
          onChange={handleProgressChange}
          className=' w-10/12 bg-slate-400 dark:bg-slate-500 range'
        />
        <Span className='time w-1/12 text-right'>{formatTime(duration!)}</Span>
      </div>
      {/* ) : null} */}
    </div>
  );
};
