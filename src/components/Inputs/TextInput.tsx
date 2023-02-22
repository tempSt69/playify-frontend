export const TextInput = ({ placeholder = 'My input', ...props }) => {
  return <input placeholder={placeholder} {...props} />;
};
