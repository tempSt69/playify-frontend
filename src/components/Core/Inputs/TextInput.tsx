type TextInput = {
  placeholder?: string;
  icon?: any;
  children: JSX.Element;
  onChange?: React.ChangeEventHandler;
};
export const TextInput = ({
  placeholder,
  icon,
  children,
  onChange = undefined,
  ...props
}: TextInput) => {
  return (
    <div className='relative text-lg bg-transparent w-full'>
      <div className='flex items-center py-2 w-full'>
        {children}
        <input
          onChange={onChange}
          className='font-Kanit font-light w-full text-gray-500 placeholder-gray-500 bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none'
          type='text'
          placeholder={placeholder}
          {...props}
        />
      </div>
    </div>
  );
};
