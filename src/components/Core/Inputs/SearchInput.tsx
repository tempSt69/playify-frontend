import { SimpleIcon } from '../Commons/SimpleIcon';
import { TextInput } from './TextInput';

type SearchInput = {
  placeholder?: string;
  onChange?: React.ChangeEventHandler;
};
export const SearchInput = ({
  placeholder = 'Seach input',
  onChange = undefined,
  ...props
}: SearchInput) => {
  return (
    <label
      {...props}
      className='relative text-gray-400 focus-within:text-gray-600 block px-7'
    >
      <TextInput onChange={onChange} placeholder={placeholder}>
        <SimpleIcon
          size={'small'}
          icon={'magnifying-glass'}
          className={`text-gray-500`}
        />
      </TextInput>
    </label>
  );
};
