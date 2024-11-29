import React from 'react';

function Formulario({
  tipoReserva,
  onTipoReservaChange,
  fecha,
  onFechaChange,
  // ... other form props
  onSubmit,
}) {
  return (
    <form id="form-reserva" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="tipo-reserva">Tipo de Reserva:</label>
        <select id="tipo-reserva" value={tipoReserva} onChange={(e) => onTipoReservaChange(e.target.value)}>
          <option value="Quincho">Quincho</option>
        </select>
      </div>
      {/* ... other form fields with similar structure */}
      <button type="submit" className="btn">
        Reservar
      </button>
      <div id="mensaje"></div>
    </form>
  );
}

export default Formulario;