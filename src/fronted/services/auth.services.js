// src/services/auth.service.js
const API_URL = 'http://localhost:5000/api/auth'; // Cambia la URL según la configuración de tu backend

// Registrar un nuevo usuario
const register = async (username, email, password) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });

    if (!response.ok) {
      const errorData = await response.json(); // Intenta obtener información de error del servidor
      const errorMessage = errorData.message || 'Error en el registro'; 
      throw new Error(errorMessage); 
    }

    return await response.json();
  } catch (error) {
    console.error('Error al registrar:', error);
    throw error; // Vuelve a lanzar el error para que el componente que llama pueda gestionarlo
  }
};

// Iniciar sesión
const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      const errorData = await response.json(); // Intenta obtener información de error del servidor
      const errorMessage = errorData.message || 'Error al iniciar sesión'; 
      throw new Error(errorMessage); 
    }

    const data = await response.json();

    if (data.token) {
      // Guardamos el token de autenticación en localStorage 
      localStorage.setItem('user', JSON.stringify(data)); 
    }

    return data;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error; 
  }
};

// Cerrar sesión
const logout = () => {
  localStorage.removeItem('user'); 
};

// Obtener el usuario actual
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user')); 
};

export default {
  register,
  login,
  logout,
  getCurrentUser
};