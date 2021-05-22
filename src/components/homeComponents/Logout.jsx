import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '419129597749-5p5lqfrlidlsrgamv3v5476k9vskgq0e.apps.googleusercontent.com'

function LogOut(){
    const onSuccess = () =>{
        console.log('Logged out successfully');
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
                ></GoogleLogout>
        </div>
    );
}

export default LogOut;
