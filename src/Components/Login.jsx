import React, { useState } from 'react';
import './LoginSignup.css';
import correo from './assets/correo.png';
import password from './assets/contraseña.png';
import NavBarLS from './navbarLS';

const Login = () => {
  const [action, setAction] = useState('Login');

  return (
    <div>
    <NavBarLS></NavBarLS>
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <form>
        <div className="input">
          <img src={correo} alt="" />
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="input">
        <img src={password} alt="" />
          <input type="password" placeholder="Enter your password" />
        </div>
        </form>
      </div>
      <div className="submit-container">
        <div className="no-account">
          <a href="/SignUp" className="signup-link">
            No tienes una cuenta?
          </a>
        </div>
        <button className="action-button">{action}</button>
      </div>
    </div>
    </div>
  );
};

export default Login;