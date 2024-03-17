const userRepository = require('../repositories/userRepository');

const registerUser = async (nombre, genero, email, contraseña, edad) => {
    const newUser = await userRepository.saveUser({ nombre, genero, email, contraseña, edad });
    return newUser;
};

const login = async (email, contraseña) => {
    const user = await userRepository.getUserByEmailAndPassword(email, contraseña);
    if (!user) {
        throw new Error('Credenciales incorrectas');
    }
    return user;
};

const getAllUsers = async () => {
    const users = await userRepository.getAllUsers();
    return users;
};

module.exports = { registerUser, login, getAllUsers };

