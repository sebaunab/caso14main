// Functionalities.js
import React from 'react';
import '../App.css'; // Importa el CSS si es necesario

function toggleBox(box) {
    box.classList.toggle('active');
}

function Functionalities() {
    return (
        <section className="content sau" id="funcionalidades">
            <h2 className="title">Funcionalidades</h2>
            <div className="box-container">
                <div className="box" onClick={(e) => toggleBox(e.currentTarget)}>
                    <h3>Notificación de Gastos Comunes</h3>
                    <p>Sistema de notificación automática de los gastos comunes del condominio a cada usuario residente.</p>
                </div>
                <div className="box" onClick={(e) => toggleBox(e.currentTarget)}>
                    <h3>Portal de Información</h3>
                    <p>Portal donde cada residente puede consultar sus gastos comunes y gestionar sus pagos.</p>
                </div>
                <div className="box" onClick={(e) => toggleBox(e.currentTarget)}>
                    <h3>Reserva de Espacios Comunes</h3>
                    <p>Sistema para la reserva de estacionamientos, quinchos, multicanchas y sala de eventos, con gestión de pagos asociados.</p>
                </div>
                <div className="box" onClick={(e) => toggleBox(e.currentTarget)}>
                    <h3>Sistema de Pagos</h3>
                    <p>Sistema integrado para realizar el pago de gastos comunes, con aplicación automática de multas por retraso.</p>
                </div>
            </div>
        </section>
    );
}

export default Functionalities;