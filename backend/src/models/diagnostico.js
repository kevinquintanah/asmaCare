// models/diagnostico.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Diagnostico = sequelize.define('Diagnostico', {
    idDiagnostico: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    predictIA: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    resultPac: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dictamen: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Diagnostico;
