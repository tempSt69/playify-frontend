import { ProgressBar } from './ProgressBar';
import { SongInfo } from './SongInfo';

export const Footer = ({ ...props }) => {
  return (
    <div
      {...props}
      className={`flex gap-5 items-center justify-between w-full`}
    >
      <SongInfo selectedSong={null} />
      <ProgressBar hasSong={false} />
    </div>
  );
};
