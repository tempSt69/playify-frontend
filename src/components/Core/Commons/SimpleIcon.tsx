import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { useMemo } from 'react';

type TypeSimpleIcon = {
  icon: IconName;
  className?: string;
  size?: string;
};

const getSizeClasses = (size?: string): SizeProp | undefined => {
  if (!size) {
    return undefined;
  }
  switch (size) {
    case 'small':
      return '1x';
    case 'large':
      return '3x';
    case 'medium':
    default:
      return '2x';
  }
};
export const SimpleIcon: React.FC<TypeSimpleIcon> = ({
  size,
  icon,
  className,
  ...props
}) => {
  const computedClasses = useMemo(() => {
    return [className].join(' ');
  }, [className]);
  return (
    <FontAwesomeIcon
      icon={['fas', icon]}
      className={computedClasses}
      size={getSizeClasses(size)}
      {...props}
    />
  );
};
