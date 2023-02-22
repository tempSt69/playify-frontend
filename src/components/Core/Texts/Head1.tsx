import { DefaultText } from '../../CommonTypes';

export const Head1 = ({ className, children }: DefaultText) => {
  return (
    <h1
      className={`${className} font-Kanit text-black dark:text-white font-bold text-6xl`}
    >
      {children}
    </h1>
  );
};
