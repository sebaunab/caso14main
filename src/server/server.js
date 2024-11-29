import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Habilitar CORS para permitir solicitudes desde el frontend
app.use(cors());

// Servir archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de la API
app.get('/api', (req, res) => {
  res.json({ message: '¡Bienvenido a la API de Express!' });
});

// Ruta de inicio (Home)
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
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

// Ruta de Reservar Espacios
app.get('/reservar-espacios', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reservar Espacios</title>
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
        <h2>Reservar Espacios</h2>
        <ul>
          <li><a href="/reservar-espacios/estacionamiento">Estacionamiento</a></li>
          <li><a href="/reservar-espacios/quincho">Quincho</a></li>
          <li><a href="/reservar-espacios/multicancha">Multicancha</a></li>
          <li><a href="/reservar-espacios/sala-eventos">Sala de Eventos</a></li>
        </ul>
      </main>
    </body>
    </html>
  `);
});

// Rutas para los diferentes espacios
app.get('/reservar-espacios/estacionamiento', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reservar Estacionamiento</title>
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
        <h2>Reservar Estacionamiento</h2>
        <p>Formulario para reservar estacionamiento...</p>
      </main>
    </body>
    </html>
  `);
});

app.get('/reservar-espacios/quincho', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reservar Quincho</title>
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
        <h2>Reservar Quincho</h2>
        <p>Formulario para reservar quincho...</p>
      </main>
    </body>
    </html>
  `);
});

app.get('/reservar-espacios/multicancha', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reservar Multicancha</title>
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
        <h2>Reservar Multicancha</h2>
        <p>Formulario para reservar multicancha...</p>
      </main>
    </body>
    </html>
  `);
});

app.get('/reservar-espacios/sala-eventos', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reservar Sala de Eventos</title>
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
        <h2>Reservar Sala de Eventos</h2>
        <p>Formulario para reservar sala de eventos...</p>
      </main>
    </body>
    </html>
  `);
});

app.use(express.static(path.join(__dirname, '../client/build')));

// Servir archivos estáticos de React
app.use(express.static(path.join(__dirname, '../client/build')));

// Redirigir cualquier ruta no encontrada a la aplicación React (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});
