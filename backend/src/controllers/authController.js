// authController.js
const express = require('express');
const userService = require('../services/userService.js');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { nombre, genero, email, contraseña, edad } = req.body;
    try {
        const newUser = await userService.registerUser(nombre, genero, email, contraseña, edad);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, contraseña } = req.body;
    try {
        const user = await userService.login(email, contraseña);
        res.json(user);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
});

router.post('/request-reset-password', async (req, res) => {
    const { email } = req.body;
    try {
        await userService.requestResetPassword(email);
        res.status(200).json({ message: 'Se ha enviado un correo electrónico con instrucciones para restablecer tu contraseña.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.post('/reset-password', async (req, res) => {
    const { email, newPassword, token } = req.body;
    try {
        await userService.resetPassword(email, newPassword, token);
        res.status(200).json({ message: 'Contraseña restablecida correctamente. Ahora puedes iniciar sesión.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/users', verifyToken, async (req, res) => {
    // Solo se llega a esta ruta si el token es válido
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios' });
    }
});

module.exports = router;
