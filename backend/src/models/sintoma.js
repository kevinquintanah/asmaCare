// models/sintoma.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Sintoma = sequelize.define('Sintoma', {
    idSintoma: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    clave: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Sintoma;
