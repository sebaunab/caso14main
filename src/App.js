import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './fronted/components/Navbar'; 
import ReservarEspacios from './pages/ReservarEspacios';
import Estacionamiento from './pages/Estacionamiento';
import Quincho from './pages/Quincho';
import Multicancha from './pages/Multicancha';
import SalaEventos from './pages/SalaEventos';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PrivateRoute from './components/PrivateRoute'; 
import './App.css';

// Componente Layout: diseño envolvente para todas las páginas
function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

// Componente principal App
const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api') 
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>Bienvenido a Mi Aplicación</h1>
        <p>{message}</p> 

        <Routes>
          {/* Ruta privada (HomePage) protegida por PrivateRoute */}
          <Route
            path="/"
            element={
              <PrivateRoute> 
                <Layout>
                  <HomePage />
                </Layout>
              </PrivateRoute>
            }
          />

          {/* Rutas públicas */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Rutas de la aplicación (anidadas en Layout) */}
          <Route path="/reservar-espacios" element={<Layout><ReservarEspacios /></Layout>} />
          <Route path="/reservar-espacios/estacionamiento" element={<Layout><Estacionamiento /></Layout>} />
          <Route path="/reservar-espacios/quincho" element={<Layout><Quincho /></Layout>} />
          <Route path="/reservar-espacios/multicancha" element={<Layout><Multicancha /></Layout>} />
          <Route path="/reservar-espacios/sala-eventos" element={<Layout><SalaEventos /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;