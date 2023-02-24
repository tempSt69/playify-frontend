import { TypeDefaultText } from '../../CommonTypes';

export const Head3 = ({ className, children }: TypeDefaultText) => {
  return (
    <h3
      className={`${className} text-black dark:text-white duration-500 font-Kanit font-light text-2xl`}
    >
      {children}
    </h3>
  );
};
