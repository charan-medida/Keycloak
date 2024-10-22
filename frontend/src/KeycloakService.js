import Keycloak from 'keycloak-js';

let keycloak;

const initKeycloak = (onAuthenticated) => {

    if(!keycloak)
    {
        keycloak = new Keycloak({
            url:'http://localhost:8080/',
            realm:'realmename',
            clientId:'React-keycloak'
        });

        keycloak.init({ onLoad : 'login-required' })
            .then(authenticated => {
                if(authenticated)
                    onAuthenticated();
                else
                    console.warn('Not authenticated');
            })
            .catch(error => {
                console.error('Failed to initialize Keycloak',error);
            })
    }
    else
        onAuthenticated();
};

export { initKeycloak, keycloak };
