import { UseFormRegister, FieldValues } from 'react-hook-form';
import { SongFormValues } from '../../Layouts/AddSong';

type TypeSelect = {
  children: JSX.Element;
  name?: 'file' | 'name' | 'artist' | 'duration';
  onChange?: React.ChangeEventHandler;
  register?: UseFormRegister<SongFormValues>;
};
export const Select: React.FC<TypeSelect> = ({
  children,
  register,
  name,
  onChange,
  ...props
}) => {
  return (
    <div className='inline-block relative w-64'>
      <select
        {...(register && register(name!))}
        className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
      >
        {children}
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
        <svg
          className='fill-current h-4 w-4'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
        </svg>
      </div>
    </div>
  );
};
