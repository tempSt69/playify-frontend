export const span = ({ text = 'Small text', ...props }) => {
  return <span {...props}>{text}</span>;
};
