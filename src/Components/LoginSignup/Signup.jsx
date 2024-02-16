import React, { useState } from 'react';
import './LoginSignup.css';
import correo from '../assets/correo.png';
import NavBarLS from './navbarLS';


const Signup = () => {
  const [action, setAction] = useState('Sign Up');

  return (
    <div>
    <NavBarLS></NavBarLS>
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="label">Create a new user</div>
        <div className="input">
          <input type="user" placeholder="" />
        </div>
        <div className="label">Enter your email</div>
        <div className="input">
          <input type="email" placeholder="" />
        </div>
        <div className="label">Enter your password</div>
        <div className="input">
          <input type="password" placeholder="" />
        </div>
      </div>
      <div className="submit-container">
        <div className="no-account">
          <a href="/Login" className="login-link">
          ¿Ya tienes una cuenta?
          </a>
        </div>
        <button className="action-button">{action}</button>
      </div>
    </div>
    </div>
  );
};

export default Signup;