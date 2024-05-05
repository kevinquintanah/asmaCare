// Importa las dependencias necesarias
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authController = require('./controllers/authController.js');
const sequelize = require('./db/db');
const userController = require('./controllers/userController');


// Crea una instancia de Express
const app = express();

// Middleware para permitir solicitudes CORS desde el frontend
app.use(cors({
  origin: 'http://localhost:3000', // Cambia esto por el origen de tu frontend en producción
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
}));

// Middleware para parsear el body de las solicitudes en formato JSON
app.use(bodyParser.json());

// Define las rutas de tu aplicación
app.use('/api/auth', authController);
app.use('/api/user', userController);

// Middleware para habilitar preflight OPTIONS para todas las rutas
app.options('*', cors());

// Agrega la ruta '/request-reset-password'
app.post('/request-reset-password', async (req, res) => {
    // Lógica para enviar el correo de restablecimiento de contraseña
    res.status(200).json({ message: 'Se ha enviado un correo electrónico con instrucciones para restablecer tu contraseña.' });
});

// Sincroniza las definiciones de modelos con la base de datos y levanta el servidor
sequelize.sync().then(() => {
  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
});
