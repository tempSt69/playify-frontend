import { RefObject } from 'react';
import { formatTime } from '../../../utils/FormatTime';
import { Span } from '../../Core/Texts/Span';

type TypeProgressBar = {
  hasSong: boolean;
  progressBarRef?: RefObject<HTMLInputElement>;
  audioRef?: RefObject<HTMLAudioElement>;
  duration?: number;
  timeProgress?: number;
};

export const ProgressBar: React.FC<TypeProgressBar> = ({
  hasSong = false,
  progressBarRef,
  audioRef,
  timeProgress,
  duration,
  ...props
}) => {
  const handleProgressChange = () => {
    if (hasSong && audioRef && audioRef.current && progressBarRef) {
      audioRef.current.currentTime = parseInt(progressBarRef.current!.value);
    }
  };

  return (
    <div
      {...props}
      className={`flex items-center justify-start w-10/12 rounded-tl-xl h-20 px-4 bg-opacity-40 bg-slate-300 dark:bg-slate-700 dark:bg-opacity-40`}
    >
      {/* {hasSong ? ( */}
      <div className='progress flex gap-3 w-full justify-between items-center'>
        <Span className='time  current w-1/12'>
          {formatTime(timeProgress!)}
        </Span>
        <input
          type='range'
          ref={progressBarRef}
          defaultValue='0'
          min={0}
          max={duration}
          onChange={handleProgressChange}
          className=' w-10/12 bg-slate-400 dark:bg-slate-500 range'
        />
        <Span className='time w-1/12 text-right'>{formatTime(duration!)}</Span>
      </div>
      {/* ) : null} */}
    </div>
  );
};
