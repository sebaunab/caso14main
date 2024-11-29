import React from "react";
import { NavLink } from "react-router-dom";
import "./ReservaOpciones.css"; // Asegúrate de que la ruta sea correcta

function ReservaOpciones() {
  return (
    <nav className="reserva-opciones">
      <ul>
        <li>
          <NavLink
            to="/reservar-espacios/estacionamiento"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Estacionamiento
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reservar-espacios/quincho"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Quincho
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reservar-espacios/multicancha"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Multicancha
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reservar-espacios/sala-eventos"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Sala de Eventos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default ReservaOpciones;