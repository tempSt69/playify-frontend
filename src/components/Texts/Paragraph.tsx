import { DefaultHead } from '../CommonTypes';

export const Paragraph = ({ className, children }: DefaultHead) => {
  return <p className={`${className} font-Kanit font-light`}>{children}</p>;
};
