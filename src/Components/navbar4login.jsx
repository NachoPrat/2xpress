import React from 'react';
import logo from './assets/2XPRESSNEGROLOGO.png';
import './navbar4login.css';

const navbar4login = () => {
  return (
    <div className="navbarLogin">
      <div className="left-section">
        <a href="LogoPagina" className="logopagina">
          <img src={logo} alt="logopagina" className="logoimagen" />
        </a>
      </div>
      <div className="center-section">
        <h1>2XPRESS</h1>
      </div>
      <div className="right-section">
        <div className="button-container">
          <a href="/Login" className="login-button">
            Log in
          </a>
          <a href="/SignUp" className="signup-button">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default navbar4login;