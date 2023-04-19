import { useKeycloak } from '@react-keycloak/web';
import { ReactElement } from 'react';
import { redirect, useNavigate } from 'react-router';

type PrivateRouteType = {
  children: ReactElement;
};

export const PrivateRoute: React.FC<PrivateRouteType> = ({ children }) => {
  const { keycloak } = useKeycloak();
  let navigate = useNavigate();

  if (keycloak.authenticated && keycloak.realmAccess?.roles.includes('admin')) {
    return children;
  }
  navigate('/');
  return null;
};
