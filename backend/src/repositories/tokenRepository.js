const Token = require('../models/token');

const saveToken = async (tokenData) => {
    return Token.create(tokenData);
};

const getTokenByUserId = async (userId) => {
    return Token.findOne({ where: { userId } });
};

const updateToken = async (userId, newToken, expirationDate) => {
    const token = await Token.findOne({ where: { userId } });
    if (token) {
        token.token = newToken;
        token.expirationDate = expirationDate;
        await token.save();
    }
};

const deleteToken = async (userId) => {
    const token = await Token.findOne({ where: { userId } });
    if (token) {
        await token.destroy();
    }
};

module.exports = {
    saveToken,
    getTokenByUserId,
    updateToken,
    deleteToken
};

