import { DefaultText } from '../CommonTypes';

export const Head1 = ({ className, children }: DefaultText) => {
  return (
    <h1 className={`${className} font-Kanit font-bold text-6xl`}>{children}</h1>
  );
};
