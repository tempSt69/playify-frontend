import { DefaultText } from '../CommonTypes';

export const Paragraph = ({ className, children }: DefaultText) => {
  return <p className={`${className} font-Kanit font-light`}>{children}</p>;
};
