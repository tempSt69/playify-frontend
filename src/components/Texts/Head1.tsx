export const Head1 = ({ text = 'First title', ...props }) => {
  return <h1 {...props}>{text}</h1>;
};
