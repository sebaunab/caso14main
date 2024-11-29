import React, { useState } from "react";

function Estacionamiento() {
  const [fecha, setFecha] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFin, setHoraFin] = useState("");
  const [nombre, setNombre] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [contacto, setContacto] = useState("");
  const [notas, setNotas] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Limpiar errores previos

    // Validación más completa
    if (!fecha) {
      setError("Por favor, selecciona una fecha.");
      return;
    }
    if (!horaInicio) {
      setError("Por favor, selecciona una hora de inicio.");
      return;
    }
    if (!horaFin) {
      setError("Por favor, selecciona una hora de fin.");
      return;
    }
    if (horaInicio >= horaFin) {
      setError("La hora de inicio debe ser anterior a la hora de fin.");
      return;
    }
    if (!nombre) {
      setError("Por favor, ingresa tu nombre completo.");
      return;
    }
    if (!departamento) {
      setError("Por favor, ingresa tu departamento.");
      return;
    }
    if (!contacto) {
      setError("Por favor, ingresa tu teléfono de contacto.");
      return;
    }

    try {
      const response = await fetch("/api/reservas/estacionamiento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        setMensaje("Reserva de estacionamiento realizada con éxito.");

        // Limpiar formulario después del envío exitoso
        setFecha("");
        setHoraInicio("");
        setHoraFin("");
        setNombre("");
        setDepartamento("");
        setContacto("");
        setNotas("");
      } else {
        // Manejo de errores del servidor
        const errorData = await response.json();
        setError(errorData.message || "Error al realizar la reserva.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Ha ocurrido un error inesperado.");
    }
  };

  return (
    <section className="content sau">
      <h2>Reserva de Estacionamiento</h2>
      <form id="form-reserva" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fecha">Fecha:*</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="horaInicio">Hora de inicio:*</label>
          <input
            type="time"
            id="horaInicio"
            name="horaInicio"
            value={horaInicio}
            onChange={(e) => setHoraInicio(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="horaFin">Hora de fin:*</label>
          <input
            type="time"
            id="horaFin"
            name="horaFin"
            value={horaFin}
            onChange={(e) => setHoraFin(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="nombre">Nombre completo:*</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="departamento">Departamento:*</label>
          <input
            type="text"
            id="departamento"
            name="departamento"
            value={departamento}
            onChange={(e) => setDepartamento(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="contacto">Teléfono de contacto:</label>
          <input
            type="tel"
            id="contacto"
            name="contacto"
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="notas">Notas adicionales:</label>
          <textarea
            id="notas"
            name="notas"
            value={notas}
            onChange={(e) => setNotas(e.target.value)}
          />
        </div>

        {mensaje && <p className="success">{mensaje}</p>}
        {error && <p className="error">{error}</p>}

        <button type="submit">Reservar</button>
      </form>
    </section>
  );
}

export default Estacionamiento;