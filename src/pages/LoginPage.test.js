import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from './LoginPage';
import authService from '../services/auth.service'; // Mocks el servicio de autenticación

jest.mock('../services/auth.service'); // Mockeamos authService para evitar llamadas reales a la API

describe('LoginPage', () => {
  test('debe renderizar los campos de email y contraseña', () => {
    render(<LoginPage />);
    
    // Verifica si los campos están presentes en el documento
    expect(screen.getByPlaceholderText('Correo electrónico')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Contraseña')).toBeInTheDocument();
  });

  test('debe mostrar un mensaje de error si las credenciales son incorrectas', async () => {
    // Mockea la respuesta del servicio para simular un error
    authService.login.mockResolvedValueOnce({ message: 'Credenciales incorrectas' });

    render(<LoginPage />);
    
    fireEvent.change(screen.getByPlaceholderText('Correo electrónico'), { target: { value: 'incorrect@mail.com' } });
    fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: 'wrongpassword' } });
    fireEvent.click(screen.getByText('Iniciar sesión'));
    
    await waitFor(() => {
      expect(screen.getByText('Credenciales incorrectas')).toBeInTheDocument();
    });
  });

  test('debe redirigir al usuario después de un inicio de sesión exitoso', async () => {
    // Mockea una respuesta exitosa con un token
    authService.login.mockResolvedValueOnce({ token: 'fake_token' });

    render(<LoginPage />);
    
    fireEvent.change(screen.getByPlaceholderText('Correo electrónico'), { target: { value: 'user@mail.com' } });
    fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: 'correctpassword' } });
    fireEvent.click(screen.getByText('Iniciar sesión'));
    
    await waitFor(() => {
      expect(window.location.pathname).toBe('/');  // Verifica si redirige a la página principal
    });
  });
});
