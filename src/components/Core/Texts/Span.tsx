import { TypeDefaultText } from '../../CommonTypes';

export const Span = ({ className, children }: TypeDefaultText) => {
  return (
    <span
      className={`${className} text-black dark:text-white font-Kanit duration-500 font-thin`}
    >
      {children}
    </span>
  );
};
