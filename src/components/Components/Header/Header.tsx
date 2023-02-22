import { ButtonPlayer } from '../../Core/Buttons/ButtonPlayer';
import { SimpleIcon } from '../../Core/Commons/SimpleIcon';
import { SearchInput } from '../../Core/Inputs/SearchInput';

export const Header = ({ ...props }) => {
  return (
    <div {...props} className={`flex justify-between w-full`}>
      <SearchInput />
      <ButtonPlayer icon={'gear'} size={'large'} />
    </div>
  );
};
