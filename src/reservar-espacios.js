// src/pages/reservar-espacios.js
import React from 'react';
import Navbar from '../components/Navbar';
import HeaderReservas from '../components/HeaderReservas';
import BotonesReservas from '../components/BotonesReservas';
import Contact from '../components/Contact';

function ReservarEspacios() {
    return (
        <div>
            <Navbar />
            <HeaderReservas />
            <BotonesReservas />
            <Contact />
        </div>
    );
}

export default ReservarEspacios;