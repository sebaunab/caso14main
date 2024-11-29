import React, { useState } from 'react';

function SalaEventos() {
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

    if (!fecha || !horaInicio || !horaFin || !nombre || !departamento) {
      setMensaje('Por favor, completa todos los campos obligatorios.');
      return;
    }

    try {
      const response = await fetch('/api/reservar-sala-eventos', {
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
        setMensaje('Reserva de sala de eventos realizada con éxito.');
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
        {/* El mismo formulario que en Multicancha.js */}
      </form>
    </section>
  );
}

export default SalaEventos;
