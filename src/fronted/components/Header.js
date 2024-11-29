import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <header className="content header">
      <h2 className="title">Sistema de Gestión Condominio</h2>
      <p>EspacioAdmin ofrece una solución integral para la gestión y administración de condominios, permitiendo una administración clara, ordenada y altamente transparente para toda la comunidad.</p>
      <div className="btn-home">
      <Link to="/reservar-espacios" className="btn">Reservar Espacio</Link>
      </div>
    </header>
  );
}

export default Header;