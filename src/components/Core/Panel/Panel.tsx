type TypePanel = {
  children?: JSX.Element;
};
export const Panel = ({ children = undefined, ...props }: TypePanel) => {
  return (
    <div
      {...props}
      className={`justify-between w-full p-12 rounded-[50px] bg-opacity-40 bg-slate-300 dark:bg-slate-700 dark:bg-opacity-40`}
    >
      {children}
    </div>
  );
};
