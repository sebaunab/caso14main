import authService from './auth.service';

global.fetch = jest.fn(); // Mockeamos la función fetch global

describe('authService', () => {
  test('debe registrar un nuevo usuario correctamente', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ message: 'Registro exitoso' }),
    });

    const response = await authService.register('username', 'user@mail.com', 'password123');
    expect(response.message).toBe('Registro exitoso');
  });

  test('debe iniciar sesión correctamente', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ token: 'fake_token' }),
    });

    const response = await authService.login('user@mail.com', 'password123');
    expect(response.token).toBe('fake_token');
  });

  test('debe manejar errores de inicio de sesión', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      json: () => Promise.resolve({ message: 'Credenciales incorrectas' }),
    });

    const response = await authService.login('incorrect@mail.com', 'wrongpassword');
    expect(response.message).toBe('Credenciales incorrectas');
  });

  test('debe cerrar sesión correctamente', () => {
    // Simula el almacenamiento en localStorage
    localStorage.setItem('user', JSON.stringify({ token: 'fake_token' }));
    authService.logout();
    expect(localStorage.getItem('user')).toBeNull();
  });
});
