import { DefaultText } from '../../CommonTypes';

export const Paragraph = ({ className, children }: DefaultText) => {
  return (
    <p
      className={`${className} font-Kanit text-black dark:text-white font-light`}
    >
      {children}
    </p>
  );
};
