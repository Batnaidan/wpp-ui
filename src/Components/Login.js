import React from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';

import GoogleSignIn from './GoogleSignIn';
import EmailSignIn from './EmailSignIn';

export default function Login() {
  return (
    <div className="login-wrapper">
      <GoogleSignIn></GoogleSignIn>
      <hr className="h-line"></hr>
      <EmailSignIn></EmailSignIn>
      <Button
        variant="contained"
        color="primary"
        className="login-button"
        style={{ fontSize: '1em' }}
      >
        CONTINUE
      </Button>
    </div>
  );
}
