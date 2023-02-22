import { useMemo } from 'react';
import { ButtonPlayer } from '../Core/Buttons/ButtonPlayer';

const BASE_CLASSES =
  'active:scale-90 transition-all duration-100 ease-in-out cursor-pointer rounded-full border-2 font-bold leading-none inline-block';

/**
 * Primary UI component for user interaction
 */
export const ListItem = ({
  size = 'medium',
  label = 'Button',
  duration = '3:04',
  ...props
}) => {
  return (
    <div className={`${BASE_CLASSES}`} {...props}>
      <ButtonPlayer border={false} icon={'play'} size={'small'} />
      <h3>{label}</h3>
    </div>
  );
};
