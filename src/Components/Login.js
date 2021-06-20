import React, { useState } from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';

import GoogleSignIn from './GoogleSignIn';
import EmailSignIn from './EmailSignIn';

export default function Login() {
  const [didClickContinue, changeClickContinue] = useState(false);

  const handleContinueClick = () => {
    changeClickContinue(true);
  };

  return (
    <div className="login-wrapper">
      {didClickContinue ? (
        <div>hello</div>
      ) : (
        <div>
          {' '}
          <GoogleSignIn></GoogleSignIn>
          <hr className="h-line"></hr>
          <EmailSignIn></EmailSignIn>
          <Button
            variant="contained"
            color="primary"
            className="login-button"
            style={{ fontSize: '1em', backgroundColor: 'hsl(33, 94%, 51%)' }}
            onClick={handleContinueClick}
          >
            CONTINUE
          </Button>
        </div>
      )}
    </div>
  );
}
