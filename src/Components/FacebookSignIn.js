import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import facebookLogo from './../Icons/Facebook_f_logo_.svg';

export default function FacebookSignIn() {
  const componentClicked = (res) => {
    console.log('data', res);
  };
  const handleLogin = (res) => {
    console.log(res);
  };
  return (
    <div>
      <FacebookLogin
        appId="755241145162221"
        autoLoad={true}
        fields="name, email, picture"
        onClick={componentClicked}
        callback={handleLogin}
        render={(renderProps) => (
          <button onClick={renderProps.onClick} className="login-with-button">
            <img
              src={facebookLogo}
              alt="Facebook Login"
              className="login-icon"
            ></img>
            <span className="login-text">Sign in with Facebook</span>
          </button>
        )}
      />
      {/* <Box>
        <button onClick={handleLogin} className="login-with-button">
          <img
            src={facebookLogo}
            alt="Facebook Login"
            className="login-icon"
          ></img>
          <span className="login-text">Sign in with Facebook</span>
        </button>
      </Box> */}
    </div>
  );
}
