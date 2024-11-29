import React, { useState } from 'react';

function Quincho() {
  const [fecha, setFecha] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFin, setHoraFin] = useState('');
  const [nombre, setNombre] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [contacto, setContacto] = useState('');
  const [notas, setNotas] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation (add more as needed)
    if (!fecha || !horaInicio || !horaFin || !nombre || !departamento) {
      setMensaje('Por favor, completa todos los campos obligatorios.');
      return;
    }

    // Simulated data sending (replace with actual backend call)
    try {
      const response = await fetch('/api/reservar-quincho', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fecha,
          horaInicio,
          horaFin,
          nombre,
          departamento,
          contacto,
          notas,
        }),
      });

      if (response.ok) {
        setMensaje('Reserva realizada con éxito.');
        // Clear form data after successful submission (optional)
        setFecha('');
        setHoraInicio('');
        setHoraFin('');
        setNombre('');
        setDepartamento('');
        setContacto('');
        setNotas('');
      } else {
        setMensaje('Error al realizar la reserva. Por favor, inténtalo nuevamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMensaje('Ha ocurrido un error inesperado.');
    }
  };

  return (
    <section className="content sau">
      <form id="form-reserva" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fecha">Fecha:</label>
          <input
            type="date"
            id="fecha"
            required
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hora-inicio">Hora de Inicio:</label>
          <input
            type="time"
            id="hora-inicio"
            required
            value={horaInicio}
            onChange={(e) => setHoraInicio(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hora-fin">Hora de Fin:</label>
          <input
            type="time"
            id="hora-fin"
            required
            value={horaFin}
            onChange={(e) => setHoraFin(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="departamento">Departamento:</label>
          <input
            type="text"
            id="departamento"
            required
            value={departamento}
            onChange={(e) => setDepartamento(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contacto">Contacto:</label>
          <input
            type="tel"
            id="contacto"
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="notas">Notas:</label>
          <textarea id="notas" value={notas} onChange={(e) => setNotas(e.target.value)} />
        </div>
        <button type="submit" className="btn">
          Reservar
        </button>
        <div id="mensaje">{mensaje}</div>
      </form>
    </section>
  );
}

export default Quincho;