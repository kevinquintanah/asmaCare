const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const User = require('./user');

const Token = sequelize.define('Token', {
    token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    expirationDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

Token.belongsTo(User, { foreignKey: 'userId' });

module.exports = Token;
