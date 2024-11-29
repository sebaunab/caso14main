// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import authService from '../services/auth.service';

// Crear contexto
const AuthContext = createContext();

// Proveedor de contexto
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(authService.getCurrentUser());

  const login = async (email, password) => {
    const userData = await authService.login(email, password);
    setCurrentUser(userData);
  };

  const logout = () => {
    authService.logout();
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acceder al contexto
export const useAuth = () => useContext(AuthContext);
