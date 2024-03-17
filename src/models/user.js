const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const User = sequelize.define('User', {
	nombre: {
		type: DataTypes.STRING,
		allowNull: false
	},
	  genero: {
                type: DataTypes.STRING,
                allowNull: false
        },
  email: {
                type: DataTypes.STRING,
                allowNull: false
        },
  contraseña: {
                type: DataTypes.STRING,
                allowNull: false
        },
  edad: {
                type: DataTypes.INTEGER,
                allowNull: false
        },
});

module.exports = User;
