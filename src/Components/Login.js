import React, { useState } from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import FacebookSignIn from './FacebookSignIn';
import GoogleSignIn from './GoogleSignIn';
import EmailSignIn from './EmailSignIn';
import HirerForm from './HirerForm';

export default function Login() {
  const [userInput, changeInput] = useState({
    userType: '',
    lastName: '',
    firstName: '',
    email: '',
    password: '',
    picture: '',
    showPassword: false,
    registerNo: '',
    phone: '',
    emergencyPhone: '',
    office: '',
    subOffice: '',
    bagHoroo: '',
    horoolol: '',
    hothon: '',
    bair: '',
    orts: '',
    toot: '',
    didAgreedTOS: false,
  });

  const handleChange = (prop) => (event) => {
    console.log(prop, event.target.value);
    changeInput({ ...userInput, [prop]: event.target.value });
  };

  const [whatClick, changeClick] = useState('');

  const handleContinueClick = () => {
    changeClick('email');
  };
  const handleClickSignup = () => {
    changeClick('signup');
  };
  switch (whatClick) {
    case 'email':
      return (
        <div className="login-wrapper">
          <EmailSignIn
            userInput={userInput}
            handleChange={handleChange}
            changeInput={changeInput}
          />
        </div>
      );
    case 'signup':
      return (
        <div className="register-wrapper">
          <HirerForm userInput={userInput} handleChange={handleChange} />
        </div>
      );
    default:
      return (
        <div className="login-wrapper">
          <div className="login-container">
            <FacebookSignIn />
            <GoogleSignIn
              userInput={userInput}
              changeInput={changeInput}
              handleClickSignup={handleClickSignup}
            />
            <hr className="h-line"></hr>
            <TextField
              value={userInput.email}
              label="Email"
              fullWidth
              onChange={handleChange('email')}
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              className="login-button"
              style={{ fontSize: '1em', backgroundColor: '#e76f51' }}
              onClick={handleContinueClick}
            >
              CONTINUE
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="login-button"
              style={{ fontSize: '1em', backgroundColor: 'green' }}
              onClick={handleClickSignup}
            >
              SIGNUP
            </Button>
          </div>
        </div>
      );
  }
}
