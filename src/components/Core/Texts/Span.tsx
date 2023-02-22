import { DefaultText } from '../../CommonTypes';

export const Span = ({ className, children }: DefaultText) => {
  return (
    <span
      className={`${className} font-Kanit text-black dark:text-white font-thin`}
    >
      {children}
    </span>
  );
};
