
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import './LoginSignup.css';
import correo from './assets/correo.png';
import password from './assets/contraseña.png';
import NavBarLS from './navbarLS';

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/homechat");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setErr(true);
    }
  };

  return (
    <div>
      <NavBarLS></NavBarLS>
      <div className="acontainer">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <form onSubmit={handleSubmit}>
            <div className="input">
              <img src={correo} alt="" />
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="input">
              <img src={password} alt="" />
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className="submit-container">
              <div className="no-account">
                <Link to="/SignUp" className="signup-link">No tienes una cuenta?</Link>
              </div>
              <button type="submit" className="action-button">Login</button>
            </div>
          </form>
          {err && <div>Something went wrong</div>}
        </div>
      </div>
    </div>
  );
};

export default Login;