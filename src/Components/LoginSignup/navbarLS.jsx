import React from 'react';
import App from '../../App';
import Principal from '../../Principal';
import logo from '../assets/2XPRESSNEGROLOGO.png';
import '../navbar4login.css';

const navbarLS = () => {
  return (
    <div className="navbarLS">
      <div className="left-section">
        <a href="LogoPagina" className="logopagina">
          <img src={logo} alt="logopagina" className="logoimagen" />
        </a>
      </div>
      <div className="center-section" style={{marginLeft: '-335px'}}>
        {/* Agrega el estilo para quitar el subrayado y el margen izquierdo */}
        <a href="../" style={{ textDecoration: 'none',  }}>
          <h1>2XPRESS</h1>
        </a>
      </div>
      <div className="right-section">
      </div>
    </div>
  );
};

export default navbarLS;