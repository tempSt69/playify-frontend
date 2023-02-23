import { RefObject } from 'react';

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
      className={`flex items-center justify-start w-9/12 rounded-tl-xl h-20 px-4 bg-opacity-40 bg-slate-300 dark:bg-slate-700`}
    >
      {/* {hasSong ? ( */}
      <div className='progress flex gap-3 w-full items-center'>
        <span className='font-Kanit font-light time current w-1/12'>
          {formatTime(timeProgress!)}
        </span>
        <input
          type='range'
          ref={progressBarRef}
          defaultValue='15'
          onChange={handleProgressChange}
          className=' w-10/12 bg-slate-400 dark:bg-slate-600 range'
        />
        <span className='font-Kanit font-light time w-1/12'>
          {formatTime(duration!)}
        </span>
      </div>
      {/* ) : null} */}
    </div>
  );
};
