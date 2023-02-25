type ContainerType = {
  children: JSX.Element[] | JSX.Element;
};
export const Container: React.FC<ContainerType> = ({ children, ...props }) => {
  return (
    <div {...props} className={`w-10/12 h-5/6 mx-auto`}>
      {children}
    </div>
  );
};
