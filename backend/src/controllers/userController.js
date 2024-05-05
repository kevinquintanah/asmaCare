// userController.js
const express = require('express');
const router = express.Router();
const userService = require('../services/userService');
const verifyToken = require('../middleware/verifyToken');

// Ruta protegida, requiere autenticación
router.get('/profile', verifyToken, async (req, res) => {
    try {
        // Obtener el usuario a partir del token en req.user
        const user = req.user;
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el perfil del usuario' });
    }
});

// Ruta protegida, requiere autenticación
router.put('/profile', verifyToken, async (req, res) => {
    try {
        // Obtener el usuario a partir del token en req.user
        const user = req.user;
        // Actualizar el perfil del usuario con los datos de req.body
        // Por ejemplo, userService.updateUserProfile(user.id, req.body);
        res.json({ message: 'Perfil actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el perfil del usuario' });
    }
});

module.exports = router;
