import { DefaultHead } from '../CommonTypes';

export const Head3 = ({ className, children }: DefaultHead) => {
  return (
    <h3 className={`${className} font-Kanit font-normal text-1xl`}>
      {children}
    </h3>
  );
};
