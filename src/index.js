const express = require('express');
const bodyParser = require('body-parser');
const authController = require('./controllers/authController.js');
const sequelize = require('./db/db');

const app = express();

app.use(bodyParser.json());
app.use('/api/auth', authController);

sequelize.sync().then(() => {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
});

