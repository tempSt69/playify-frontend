export const Paragraph = ({ text = 'My paragraph', ...props }) => {
  return <p {...props}>{text}</p>;
};
