// models/sintomasPac.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const SintomasPac = sequelize.define('SintomasPac', {
    idSintomaPac: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idSintoma: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idDiagnostico: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = SintomasPac;