// tokenRoutes.js
const express = require('express');
const router = express.Router();
const tokenController = require('../controllers/tokenController');

// Endpoint para crear un token y enviarlo por correo electrónico
router.post('/', tokenController.createToken);

// Endpoint para obtener un token para un usuario específico
router.get('/:userId', tokenController.getToken);

// Endpoint para eliminar un token para un usuario específico
router.delete('/:userId', tokenController.deleteToken);

module.exports = router;
