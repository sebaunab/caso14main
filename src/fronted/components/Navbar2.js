import React from 'react';
import './Navbar2.css';

const Navbar2 = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/reservas">Reservas</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar2;
