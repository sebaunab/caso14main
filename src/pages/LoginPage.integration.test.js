import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from './LoginPage';
import authService from '../services/auth.service';

jest.mock('../services/auth.service'); // Mockeamos el servicio de autenticación

describe('LoginPage - Integración', () => {
  test('debe realizar el login y redirigir después de una respuesta exitosa', async () => {
    authService.login.mockResolvedValueOnce({ token: 'fake_token' });

    render(<LoginPage />);
    
    fireEvent.change(screen.getByPlaceholderText('Correo electrónico'), { target: { value: 'user@mail.com' } });
    fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: 'correctpassword' } });
    fireEvent.click(screen.getByText('Iniciar sesión'));

    await waitFor(() => {
      expect(window.location.pathname).toBe('/');  // Verifica si la redirección fue exitosa
    });
  });
});
