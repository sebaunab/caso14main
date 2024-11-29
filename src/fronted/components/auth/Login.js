import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";

const LoginPage = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("El nombre de usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  });

  const handleLogin = async (values) => {
    try {
      const data = await authService.login(values.username, values.password);
      if (data.token) {
        // Guardamos el token en el localStorage
        localStorage.setItem("token", data.token);
        // Redirigimos al usuario a la página principal
        navigate("/");
      } else {
        // Si no se obtiene el token, mostramos el mensaje de error
        alert(data.message || "Error al iniciar sesión");
      }
    } catch (error) {
      // Manejamos los errores de la API
      console.error("Error al iniciar sesión:", error);
      alert("Error de conexión. Intenta nuevamente.");
    }
  };

  return (
    <div>
      <h2>Inicio de Sesión</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="username">Nombre de usuario:</label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" />
            </div>
            <div>
              <label htmlFor="password">Contraseña:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Iniciar Sesión
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
