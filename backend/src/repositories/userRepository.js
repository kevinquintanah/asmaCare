// repositories/userRepository.js
const User = require('../models/user');

const saveUser = async (userData) => {
    return User.create(userData);
};

const getUserByEmail = async (email) => {
    return User.findOne({ where: { email } });
};

const getUserByEmailAndPassword = async (email, contraseña) => {
    return User.findOne({ where: { email, contraseña } });
};

const getAllUsers = async () => {
    return User.findAll();
};

const saveResetToken = async (email, token, expirationDate) => {
    const user = await User.findOne({ where: { email } });
    if (user) {
        user.resetToken = token;
        user.resetTokenExpiration = expirationDate;
        await user.save();
    }
};

const getResetToken = async (email) => {
    const user = await User.findOne({ where: { email } });
    if (user) {
        return { token: user.resetToken, expirationDate: user.resetTokenExpiration };
    }
    return null;
};

const updatePassword = async (email, newPassword) => {
    const user = await User.findOne({ where: { email } });
    if (user) {
        user.contraseña = newPassword;
        await user.save();
    }
};

const deleteResetToken = async (email) => {
    const user = await User.findOne({ where: { email } });
    if (user) {
        user.resetToken = null;
        user.resetTokenExpiration = null;
        await user.save();
    }
};

module.exports = {
    saveUser,
    getUserByEmail,
    getUserByEmailAndPassword,
    getAllUsers,
    saveResetToken,
    getResetToken,
    updatePassword,
    deleteResetToken
};
