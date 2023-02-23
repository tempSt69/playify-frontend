type Cover = {
  src: string;
  lowOpacity?: boolean;
  size?: string;
};

const getSizeClasses = (size: string) => {
  switch (size) {
    case 'small':
      return 'rounded-[10px]';
    case 'medium':
      return 'rounded-[25px]';
    case 'large':
    default:
      return 'rounded-[50px]';
  }
};

const getOpacityClass = (lowOpacity: boolean) => {
  return lowOpacity ? 'opacity-30' : null;
};

export const Cover = ({
  src,
  lowOpacity = false,
  size = 'large',
  ...props
}: Cover) => {
  return (
    <div
      className={`${getSizeClasses(size)} ${getOpacityClass(
        lowOpacity
      )} border-radius h-full aspect-square bg-no-repeat bg-cover`}
      style={{ backgroundImage: `url(${src})` }}
      {...props}
    ></div>
  );
};
