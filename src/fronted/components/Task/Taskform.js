import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import taskService from "../services/task.service";

const TaskForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Para editar una tarea específica.
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const fetchTask = async () => {
    if (id) {
      try {
        const response = await taskService.getTaskById(id);
        setTask(response.data);
      } catch (error) {
        console.error("Error al obtener la tarea:", error.response?.data?.message || error.message);
      }
    }
  };

  useEffect(() => {
    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await taskService.updateTask(id, task);
        alert("Tarea actualizada con éxito.");
      } else {
        await taskService.createTask(task);
        alert("Tarea creada con éxito.");
      }
      navigate("/tasks"); // Redirige a la lista de tareas.
    } catch (error) {
      console.error("Error al guardar la tarea:", error.response?.data?.message || error.message);
    }
  };

  return (
    <div>
      <h2>{id ? "Editar Tarea" : "Crear Tarea"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{id ? "Actualizar" : "Crear"}</button>
      </form>
    </div>
  );
};

export default TaskForm;
