import React from "react";
import { useNavigate } from "react-router-dom";
import TaskList from "../components/Tasks/TaskList";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Gestión de Tareas</h1>
      <button onClick={() => navigate("/tasks/new")}>Crear Nueva Tarea</button>
      <TaskList />
    </div>
  );
};

export default HomePage;
