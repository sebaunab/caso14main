import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Asegúrate de que la ruta sea correcta

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/reservar-espacios">Reservar Espacios</Link>
        </li>
        {/* Puedes añadir más elementos de menú aquí */}
      </ul>
    </nav>
  );
}

export default Navbar;