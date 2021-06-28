import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import googleLogo from './../Icons/Google__G__Logo.svg';
import Box from '@material-ui/core/Box';

const CLIENT_ID =
  '191957550253-mv33rqsj53dbkdk92r88a53s5tn04hf4.apps.googleusercontent.com';

export default function GoogleSignIn() {
  const [didLoad, setLoad] = useState(false);
  const [userData, setData] = useState(null);

  const handleLogin = async (response) => {
    const res = await fetch('http://localhost:8000/api/auth/google', {
      method: 'POST',
      body: JSON.stringify({
        token: response.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data);
    setData(data);
    setLoad(true);
  };
  const handleLogout = async (response) => {
    setLoad(false);
  };
  return (
    <div>
      {didLoad ? (
        <div>
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText={'Logout'}
            onLogoutSuccess={handleLogout}
          />
          <img src={userData.payload.picture} alt="userpicture"></img>
          <h3>{userData.payload.name}</h3>
          <h3>{userData.payload.email}</h3>
        </div>
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          // isSignedIn={true}
          render={(renderProps) => (
            <Box>
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login-with-button"
              >
                <img
                  src={googleLogo}
                  alt="Google Login"
                  className="login-icon"
                ></img>
                <span className="login-text">Sign in with Google</span>
              </button>
            </Box>
          )}
          buttonText={'Login'}
          onSuccess={handleLogin}
          onFailure={handleLogin}
          cookiePolicy={'single_host_origin'}
        />
      )}
    </div>
  );
}
