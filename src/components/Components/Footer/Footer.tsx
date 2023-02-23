import { ProgressBar } from './ProgressBar';
import { SongInfo } from './SongInfo';

export const Footer = ({ ...props }) => {
  return (
    <div
      {...props}
      className={`flex gap-5 items-end justify-between w-full h-1/6`}
    >
      <SongInfo selectedSong={null} />
      <ProgressBar hasSong={false} />
    </div>
  );
};
