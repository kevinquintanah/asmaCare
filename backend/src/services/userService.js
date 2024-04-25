const userRepository = require('../repositories/userRepository');
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');

// services/userService.js

const registerUser = async (nombre, genero, email, contraseña, edad) => {
    const existingUser = await userRepository.getUserByEmail(email);
    if (existingUser) {
        throw new Error('Ya existe un usuario con ese correo electrónico');
    }

    const newUser = await userRepository.saveUser({ nombre, genero, email, contraseña, edad });
    return newUser;
};

const login = async (email, contraseña) => {
    const user = await userRepository.getUserByEmailAndPassword(email, contraseña);
    if (!user) {
        throw new Error('Correo electrónico o contraseña incorrectos');
    }

    return user;
};

const getAllUsers = async () => {
    try {
        const users = await userRepository.getAllUsers();
        return users;
    } catch (error) {
        throw new Error('Error al obtener usuarios');
    }
};



const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
        user: 'kevinquintanah12@outlook.com', // Cambia esto a tu dirección de correo electrónico
        pass: 'QUHK040628' // Cambia esto a tu contraseña
    }
});

// Función para solicitar restablecimiento de contraseña
const requestResetPassword = async (email) => {
    const user = await userRepository.getUserByEmail(email);
    if (!user) {
        throw new Error('No existe ningún usuario con ese correo electrónico');
    }

    const token = uuidv4();
    const expirationDate = new Date(Date.now() + 3600000); // 1 hora de expiración
    await userRepository.saveResetToken(email, token, expirationDate);

    try {
        await transporter.sendMail({
            from: 'kevinquintanah12@outlook.com',
            to: email,
            subject: 'Recuperación de contraseña',
            text: `Hola ${user.nombre}, para restablecer tu contraseña visita este enlace: http://localhost:3000/reset-password?token=${token}`,
        });
        return { success: true, message: 'Correo electrónico enviado correctamente', email, token, expirationDate };
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        return { success: false, message: 'Error al enviar el correo electrónico. Por favor, inténtalo de nuevo.' };
    }
};

// Función para restablecer la contraseña
const resetPassword = async (email, newPassword, token) => {
    const user = await userRepository.getUserByEmail(email);
    if (!user) {
        throw new Error('No existe ningún usuario con ese correo electrónico');
    }

    const savedToken = await userRepository.getResetToken(email);
    if (!savedToken || savedToken.token !== token || savedToken.expirationDate < new Date()) {
        throw new Error('El token de restablecimiento de contraseña es inválido o ha expirado');
    }

    await userRepository.updatePassword(email, newPassword);
    await userRepository.deleteResetToken(email);
};

module.exports = { registerUser, login, requestResetPassword, resetPassword, getAllUsers };
