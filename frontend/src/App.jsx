import { RouterProvider } from 'react-router-dom';

// project import
import router from 'routes';
import ThemeCustomization from 'themes';

import axios from 'axios';
import ScrollTop from 'components/ScrollTop';
import { useEffect, useState } from 'react';
import { initKeycloak, keycloak } from './KeycloakService';
// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function App() {

    const [userRole, setUserRole] = useState([]);
    const [tokenStatus, setTokenStatus] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        initKeycloak(() => {
            console.log('User is authenticated');
            if (keycloak.token) {
                console.log('Access Token:', keycloak.token);
                const roles = keycloak.realmAccess?.roles || [];
                const user = keycloak.tokenParsed?.preferred_username || 'Unknown User';
                setUsername(user);
                console.log('Username:', user);
                setUserRole(roles);
            } else {
                console.log('Access Token is not available yet.');
            }
            if(keycloak.token)
            {
                axios.post('http://localhost:8081/api/verify-token', {}, {
                    headers: {
                        'Authorization': `Bearer ${keycloak.token}`
                    }
                })
                .then(response => {
                    setTokenStatus(response.data);
                    console.log("Token is valid")
                })
                .catch(error => {
                    console.error('Token verification failed:', error);
                    console.log("TOken is invalid");
                    setTokenStatus('Token is invalid or expired');
                });
            }
            
        });
    }, []);


    return (
        <ThemeCustomization>
        <ScrollTop>
            <RouterProvider router={router} />
        </ScrollTop>
        </ThemeCustomization>
    );
}
