import { DefaultHead } from '../CommonTypes';

export const Span = ({ className, children }: DefaultHead) => {
  return (
    <span className={`${className} font-Kanit font-thin`}>{children}</span>
  );
};
