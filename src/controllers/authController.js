const express = require('express');
const userService = require('../services/authService'); 
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


router.get('/users', async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

