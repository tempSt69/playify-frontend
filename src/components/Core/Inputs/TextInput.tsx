type TextInput = {
  placeholder?: string;
  icon?: any;
  children: JSX.Element;
};
export const TextInput = ({
  placeholder,
  icon,
  children,
  ...props
}: TextInput) => {
  return (
    <div className='relative text-lg bg-transparent w-full'>
      <div className='flex items-center py-2 w-full'>
        {children}
        <input
          className='w-full text-gray-500 placeholder-gray-500 bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none'
          type='text'
          placeholder={placeholder}
          {...props}
        />
      </div>
    </div>
  );
};
