import { DefaultText } from '../../CommonTypes';

export const Head2 = ({ className, children }: DefaultText) => {
  return (
    <h2
      className={`${className} font-Kanit text-black dark:text-white font-medium text-3xl`}
    >
      {children}
    </h2>
  );
};
