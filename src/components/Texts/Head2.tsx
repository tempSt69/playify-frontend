export const Head2 = ({ text = 'Second title', ...props }) => {
  return <h2 {...props}>{text}</h2>;
};
