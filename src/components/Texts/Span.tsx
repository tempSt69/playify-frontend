import { DefaultText } from '../CommonTypes';

export const Span = ({ className, children }: DefaultText) => {
  return (
    <span className={`${className} font-Kanit font-thin`}>{children}</span>
  );
};
