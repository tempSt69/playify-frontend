import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { ButtonPlayer } from '../../Core/Buttons/ButtonPlayer';

export const Header = ({ ...props }) => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <div
      {...props}
      className={`flex justify-end items-start w-full absolute top-0 right-0`}
    >
      <Link to='/'>
        <ButtonPlayer icon={'play'} size={'medium'} />
      </Link>
      <Link to='/add'>
        <ButtonPlayer icon={'gear'} size={'medium'} />
      </Link>
      <ButtonPlayer
        onClick={switchTheme}
        icon={theme == 'light' ? 'moon' : 'sun'}
        size={'medium'}
      />
    </div>
  );
};
