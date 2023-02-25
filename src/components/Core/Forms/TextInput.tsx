import { UseFormRegister, FieldValues } from 'react-hook-form';

type TextInput = {
  type?: string;
  name?: string;
  placeholder?: string;
  icon?: any;
  children?: JSX.Element;
  onChange?: React.ChangeEventHandler;
  register?: UseFormRegister<FieldValues>;
};
export const TextInput: React.FC<TextInput> = ({
  type = 'text',
  name,
  placeholder,
  icon,
  children,
  onChange,
  register,
  ...props
}) => {
  return (
    <div className='relative text-lg bg-transparent w-full'>
      <div className='flex items-center py-2 w-full'>
        {children}
        <input
          onChange={onChange}
          className='font-Kanit font-light w-full text-gray-500 placeholder-gray-500 bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none'
          type={type}
          placeholder={placeholder}
          {...props}
          {...(register && register(name!))}
        />
      </div>
    </div>
  );
};
