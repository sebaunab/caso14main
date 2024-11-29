import express from 'express';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById("root"));

const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Mi Aplicación</title>
      <link rel="stylesheet" href="/styles.css"> 
    </head>
    <body>
      <header>
        <h1>Mi Aplicación</h1>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/reservar-espacios">Reservar Espacios</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Bienvenido a mi aplicación</h2>
        <p>Esta es la página principal.</p>
      </main>
    </body>
    </html>
  `);
});

// ... (resto de las rutas) ...

export default router;