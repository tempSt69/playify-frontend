type Head1 = {
  children: string;
  className?: string;
};
export const Head1 = ({ className, children }: Head1) => {
  return (
    <h1 className={`${className} font-Kanit font-bold text-6xl`}>{children}</h1>
  );
};
