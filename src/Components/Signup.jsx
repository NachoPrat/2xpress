import React, { useState } from 'react';
import './LoginSignup.css';
import profile from './assets/profile.png'
import correo from './assets/correo.png';
import password from './assets/contraseña.png';
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
        <form>
        <div className="input">
         <img src={profile} alt="" />
          <input type="user" placeholder="Create a new user" />
        </div>
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