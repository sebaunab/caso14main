// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Verifica si el usuario está autenticado (por ejemplo, si hay un token en localStorage)
  const isAuthenticated = localStorage.getItem('token');

  // Si no está autenticado, redirige al login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Si está autenticado, renderiza los hijos (contenido protegido)
  return children;
};

export default PrivateRoute;
