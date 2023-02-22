import { TypeDefaultText } from '../../CommonTypes';

export const Paragraph = ({ className, children }: TypeDefaultText) => {
  return (
    <p
      className={`${className} font-Kanit text-black dark:text-white font-light`}
    >
      {children}
    </p>
  );
};
