const User = require('../models/user');

const saveUser = async (userData) => {
	return User.create(userData);
};

const getUserByEmailAndPassword = async (email, contraseña) => {
	return User.findOne({ where: { email, contraseña }});
};

const getAllUsers = async () => {
	return User.findAll();
};

	module.exports = { saveUser, getUserByEmailAndPassword, getAllUsers };
