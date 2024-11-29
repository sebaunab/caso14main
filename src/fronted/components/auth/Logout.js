import React from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <button onClick={handleLogout}>
      Cerrar Sesión
    </button>
  );
};

export default Logout;
