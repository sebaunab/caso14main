// src/pages/LoginPage.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import authService from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Importa el archivo CSS

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await authService.login(email, password);
      if (data.token) {
        navigate('/');
      } else {
        setErrorMessage(data.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      setErrorMessage('Error de conexión');
    }
  };

  return (
    <Container maxWidth="sm" className="login-container"> 
      <Typography variant="h4" align="center" gutterBottom>
        Iniciar sesión
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          fullWidth
          label="Correo electrónico"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Contraseña"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          sx={{ marginTop: 2 }}
        >
          Iniciar sesión
        </Button>
      </form>
      {errorMessage && (
        <Typography color="error" variant="body2">
          {errorMessage}
        </Typography>
      )}
    </Container>
  );
};

export default LoginPage;