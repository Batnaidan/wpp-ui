import React, { useState } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';

import Login from './Components/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';

export default function App() {
  const [isLoggedIn, changeLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header />
      <Container maxWidth="sm" style={{ height: 'auto' }}>
        <Login />
      </Container>
      <Footer />
    </div>
  );
}
