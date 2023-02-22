import { DefaultHead } from '../CommonTypes';

export const Head2 = ({ className, children }: DefaultHead) => {
  return (
    <h2 className={`${className} font-Kanit font-medium text-3xl`}>
      {children}
    </h2>
  );
};
