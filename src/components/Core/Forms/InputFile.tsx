import { UseFormRegister, FieldValues } from 'react-hook-form';

type TypeInputFile = {
  onChange?: React.ChangeEventHandler;
  register?: UseFormRegister<FieldValues>;
  name?: string;
};
export const InputFile: React.FC<TypeInputFile> = ({
  onChange,
  register,
  name,
  ...props
}) => {
  return (
    <div>
      <label
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        htmlFor='file_input'
      >
        Upload file
      </label>
      <input
        {...(register && register(name!))}
        onChange={onChange}
        className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
        id='file_input'
        type='file'
      />
    </div>
  );
};
