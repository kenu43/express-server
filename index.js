// index.js

// Importar las dependencias necesarias
const express = require('express');
const morgan = require('morgan');

// Crear una instancia de la aplicación Express
const app = express();

// Configurar Morgan para registrar las solicitudes HTTP
app.use(morgan('combined'));

// Definir una ruta de ejemplo
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Definir otra ruta de ejemplo
app.get('/about', (req, res) => {
  res.send('About page');
});

// Definir el puerto en el que el servidor escuchará las solicitudes
const PORT = process.env.PORT || 3000;

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
