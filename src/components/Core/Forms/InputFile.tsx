import { UseFormRegister, FieldValues } from 'react-hook-form';
import classNames from 'classnames';

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
        className='mb-2 inline-block text-neutral-700 dark:text-neutral-200'
        htmlFor='file_input'
      >
        Upload file
      </label>
      <input
        {...(register && register(name!))}
        onChange={onChange}
        className={classNames(
          'relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-1.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:bg-white focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:bg-transparent dark:text-neutral-200 dark:focus:bg-transparent'
        )}
        id='file_input'
        type='file'
        {...props}
      />
    </div>
  );
};
