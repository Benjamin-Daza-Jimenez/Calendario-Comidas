// app.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // para leer JSON

// GET
app.get('/api/saludo', (req, res) => {
  res.send('¡Hola desde el backend!');
});

// POST
app.post('/api/saludo', (req, res) => {
  const nombre = req.body.nombre;
  res.send(`Hola, ${nombre}`);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});