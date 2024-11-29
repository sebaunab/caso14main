// src/services/task.service.js
const API_URL = 'http://localhost:5000/api/tasks'; // Cambia la URL según la configuración de tu backend

// Crear una nueva tarea
const createTask = async (title, description) => {
  try {
    const response = await fetch(`${API_URL}/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description })
    });

    if (!response.ok) {
      const errorData = await response.json(); // Intenta obtener información de error del servidor
      const errorMessage = errorData.message || 'Error al crear la tarea'; 
      throw new Error(errorMessage); 
    }

    return await response.json();
  } catch (error) {
    console.error('Error al crear tarea:', error);
    throw error; 
  }
};

// Obtener todas las tareas
const getAllTasks = async () => {
  try {
    const response = await fetch(`${API_URL}`);

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.message || 'Error al obtener las tareas'; 
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error('Error al obtener tareas:', error);
    throw error;
  }
};

// Obtener una tarea por ID
const getTaskById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.message || 'Error al obtener la tarea'; 
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error('Error al obtener tarea por ID:', error);
    throw error;
  }
};

// Actualizar una tarea
const updateTask = async (id, title, description) => {
  try {
    const response = await fetch(`${API_URL}/update/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description })
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.message || 'Error al actualizar la tarea'; 
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error('Error al actualizar tarea:', error);
    throw error;
  }
};

// Eliminar una tarea
const deleteTask = async (id) => {
  try {
    const response = await fetch(`${API_URL}/delete/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.message || 'Error al eliminar la tarea'; 
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error('Error al eliminar tarea:', error);
    throw error;
  }
};

export default {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
};