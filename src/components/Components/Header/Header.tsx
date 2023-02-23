import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { ButtonPlayer } from '../../Core/Buttons/ButtonPlayer';
export const Header = ({ ...props }) => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <div
      {...props}
      className={`flex justify-end items-start w-full absolute top-0 right-0`}
    >
      <ButtonPlayer icon={'gear'} size={'large'} />
      <ButtonPlayer
        onClick={switchTheme}
        icon={theme == 'light' ? 'moon' : 'sun'}
        size={'large'}
      />
    </div>
  );
};
