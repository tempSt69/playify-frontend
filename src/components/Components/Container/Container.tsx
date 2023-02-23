type ContainerType = {
  children: JSX.Element[] | JSX.Element;
};
export const Container = ({ children, ...props }: ContainerType) => {
  return (
    <div {...props} className={`w-10/12 h-5/6 mx-auto`}>
      {children}
    </div>
  );
};
