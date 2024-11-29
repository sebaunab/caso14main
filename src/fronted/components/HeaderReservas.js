// src/components/HeaderReservas.js
import React from 'react';
import PropTypes from 'prop-types';
import './HeaderReservas.css';

const HeaderReservas = ({ title }) => {
  return (
    <header className="header-reservas">
      <h1>{title}</h1>
    </header>
  );
};

HeaderReservas.propTypes = {
  title: PropTypes.string,
};

HeaderReservas.defaultProps = {
  title: 'Reserva tu espacio',
};

export default HeaderReservas;