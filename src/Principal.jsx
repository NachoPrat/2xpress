
import React from 'react';
import NavBar from './Components/navbar4login';
import './style.css'
//import './Principal.css'; 

const Principal = () => {
  return (

    <div>
      <NavBar></NavBar>
      <div className="container-anim">
        <h1>Bienvenido a 2XPRESS</h1>
        <h2>Relajate, expresate, dejate fluir y deja que te escuchen</h2>
      </div>
    </div>

  );
};

export default Principal;