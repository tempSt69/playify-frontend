import { TextInput } from './TextInput';

export const SearchInput = ({ placeholder = 'Seach input', ...props }) => {
  return <TextInput placeholder={placeholder} {...props} />;
};
