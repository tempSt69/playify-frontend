import { TypeDefaultText } from '../../CommonTypes';

export const Head2 = ({ className, children }: TypeDefaultText) => {
  return (
    <h2
      className={`${className} text-black dark:text-white duration-500 font-Kanit font-medium text-3xl`}
    >
      {children}
    </h2>
  );
};
