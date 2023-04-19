import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { ButtonPlayer } from '../../Core/Buttons/ButtonPlayer';
import { useKeycloak } from '@react-keycloak/web';

export const Header = ({ ...props }) => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const { keycloak } = useKeycloak();

  return (
    <div
      {...props}
      className={`flex justify-end items-start w-full absolute top-0 right-0`}
    >
      <Link to="/">
        <ButtonPlayer icon={'play'} size={'large'} />
      </Link>
      {keycloak.authenticated &&
        keycloak.realmAccess?.roles.includes('admin') && (
          <Link to="/add">
            <ButtonPlayer icon={'gear'} size={'large'} />
          </Link>
        )}
      {!keycloak.authenticated ? (
        <button onClick={() => keycloak.login()}>Login</button>
      ) : (
        <button onClick={() => keycloak.logout()}>Logout</button>
      )}
      <ButtonPlayer
        onClick={switchTheme}
        icon={theme == 'light' ? 'moon' : 'sun'}
        size={'large'}
      />
    </div>
  );
};
