const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcryptjs');

const registerUser = async (nombre, genero, email, contraseña, edad) => {
    const existingUser = await userRepository.getUserByEmail(email);
    if (existingUser) {
        throw new Error('Ya existe un usuario con ese correo electrónico');
    }

    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const newUser = await userRepository.saveUser({ nombre, genero, email, contraseña: hashedPassword, edad });

    const token = jwt.sign({ id: newUser.id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { user: newUser, token };
};

const login = async (email, contraseña) => {
    const user = await userRepository.getUserByEmail(email);
    if (!user) {
        throw new Error('Correo electrónico o contraseña incorrectos');
    }

    const isValidPassword = await bcrypt.compare(contraseña, user.contraseña);
    if (!isValidPassword) {
        throw new Error('Correo electrónico o contraseña incorrectos');
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
};

const getAllUsers = async () => {
    try {
        const users = await userRepository.getAllUsers();
        return users;
    } catch (error) {
        throw new Error('Error al obtener usuarios');
    }
};

const requestResetPassword = async (email) => {
    // Implementación de la función requestResetPassword
};

const resetPassword = async (email, newPassword, token) => {
    // Implementación de la función resetPassword
};

module.exports = { registerUser, login, getAllUsers, requestResetPassword, resetPassword };
