import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '419129597749-5p5lqfrlidlsrgamv3v5476k9vskgq0e.apps.googleusercontent.com';

function Login() {
    const onSuccess = (res) => {
        console.log('[Login Success] currentuser: ', res.profileObj)
    };

    const onFailure = (res) => {
        console.log('[Login Failure] res:', res)
    };

    return (
    <div>
        <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single-host-origin'}
            isSignedIn={true}
            />
    </div>
    );
}

export default Login;
