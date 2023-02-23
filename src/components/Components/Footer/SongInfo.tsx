import { ButtonPlayer } from '../../Core/Buttons/ButtonPlayer';
import { SearchInput } from '../../Core/Inputs/SearchInput';

export type TypeSongInfo = {
  _id: string;
  name: string;
  duration: string;
  active: boolean;
  trackUrl: string;
};

export const SongInfo = ({ ...props }) => {
  return (
    <div {...props} className={`flex justify-between w-full`}>
      <SearchInput />
      <ButtonPlayer icon={'gear'} size={'large'} />
    </div>
  );
};
