import { TypeDefaultText } from '../../CommonTypes';

export const Span = ({ className, children }: TypeDefaultText) => {
  return (
    <span
      className={`${className} font-Kanit text-black dark:text-white duration-500 font-thin`}
    >
      {children}
    </span>
  );
};
