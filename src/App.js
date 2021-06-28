import React, { useState } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';

import Login from './Components/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';

export default function App() {
  const [isLoggedIn, changeLoggedIn] = useState(false);
  const handleLoggedIn = () => {
    changeLoggedIn(!isLoggedIn);
  };
  return (
    <div className="App">
      <Header />
      <Container>
        <Login />
      </Container>
      <Footer />
    </div>
  );
}
