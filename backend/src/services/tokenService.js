const Token = require('../models/token');
const tokenRepository = require('../repositories/tokenRepository');

const createToken = async (userId, token, expirationDate) => {
    return tokenRepository.saveToken({ userId, token, expirationDate });
};


const getToken = async (userId) => {
    return tokenRepository.getTokenByUserId(userId);
};

const deleteToken = async (userId) => {
    return tokenRepository.deleteToken(userId);
};

module.exports = {
    createToken,
    getToken,
    deleteToken
};
 