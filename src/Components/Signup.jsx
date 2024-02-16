import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from './../firebase'; // Asegúrate de que la ruta a firebase.js sea correcta
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './LoginSignup.css';
import correo from './assets/correo.png';
import NavBarLS from './navbarLS';

const Signup = () => {
  const [action, setAction] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirigir a la página de tareas después del registro
      navigate('/tasks');
    } catch (error) {
      console.error("Error al crear la cuenta: ", error.message);
      // Aquí puedes manejar el error, como mostrar un mensaje al usuario
    }
  };

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
        <div className="input" onSubmit={handleSubmit}>
          <input 
              type="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Usuario"
              required
          />
        </div>
        <div className="label">Enter your email</div>
        <div className="input">
          <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required 
          />
        </div>
        <div className="label">Enter your password</div>
        <div className="input">
          <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              required
          />
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


