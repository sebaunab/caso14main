import React, { useState } from 'react';

function Estacionamiento() {
  // ... (código para el estado del formulario)

  const handleSubmit = async (event) => {
    // ... (código para manejar el envío del formulario)
  };

  return (
    <section className="content sau">
      <h2>Reserva de Estacionamiento</h2>
      <form id="form-reserva" onSubmit={handleSubmit}>
        <label htmlFor="fecha">Fecha:*</label>
        <input type="date" id="fecha" name="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} required />

        {/* ... (otros campos del formulario) */}

        <button type="submit">Reservar</button>

        {mensaje && <p>{mensaje}</p>}
      </form>
    </section>
  );
}

export default Estacionamiento;