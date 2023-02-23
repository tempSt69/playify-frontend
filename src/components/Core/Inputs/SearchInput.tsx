import { SimpleIcon } from '../Commons/SimpleIcon';
import { TextInput } from './TextInput';

type SearchInput = {
  placeholder?: string;
};
export const SearchInput = ({
  placeholder = 'Seach input',
  ...props
}: SearchInput) => {
  return (
    <label
      {...props}
      className='relative text-gray-400 focus-within:text-gray-600 block px-7'
    >
      <TextInput placeholder={placeholder}>
        <SimpleIcon
          size={'small'}
          icon={'magnifying-glass'}
          className={`text-gray-500`}
        />
      </TextInput>
    </label>
  );
};
