export const Cover = ({ src = 'First title', ...props }) => {
  return <img src={src} {...props} />;
};
