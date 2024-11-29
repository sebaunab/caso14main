import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from './LoginPage';

describe('LoginPage - Interacción de usuario', () => {
  test('debe cambiar el valor del campo de correo electrónico cuando el usuario lo escribe', () => {
    render(<LoginPage />);

    const emailInput = screen.getByPlaceholderText('Correo electrónico');
    userEvent.type(emailInput, 'test@mail.com');

    expect(emailInput.value).toBe('test@mail.com');
  });

  test('debe cambiar el valor del campo de contraseña cuando el usuario lo escribe', () => {
    render(<LoginPage />);

    const passwordInput = screen.getByPlaceholderText('Contraseña');
    userEvent.type(passwordInput, 'password123');

    expect(passwordInput.value).toBe('password123');
  });
});
