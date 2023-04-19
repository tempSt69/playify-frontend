import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8081/',
  realm: 'playify',
  clientId: 'playify-login'
});

export default keycloak;
