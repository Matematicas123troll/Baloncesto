const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Carga las variables de entorno desde el archivo .env

const app = express();
app.use(cors());
app.use(express.json()); // Para leer body en JSON

// Verifica si la variable de entorno MONGO_URI se carga correctamente
console.log("MONGO_URI:", process.env.MONGO_URI); // Esto imprimirá la URI de conexión

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🟢 MongoDB conectado'))
  .catch(err => console.error('🔴 Error Mongo:', err));

// Rutas
app.use('/api/exercises', require('./routes/exerciseRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
