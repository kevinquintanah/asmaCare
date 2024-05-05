// tokenController.js
const tokenService = require('../services/tokenService');
const emailService = require('../services/emailService');

const createToken = async (req, res) => {
    try {
        const { userId, token, expirationDate } = req.body;
        await tokenService.createToken(userId, token, expirationDate);
        await emailService.sendTokenEmail(userId, token);
        res.status(201).json({ message: 'Token created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create token' });
    }
};

const getToken = async (req, res) => {
    try {
        const { userId } = req.params;
        const token = await tokenService.getToken(userId);
        if (token) {
            res.status(200).json({ token });
        } else {
            res.status(404).json({ message: 'Token not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to get token' });
    }
};

const deleteToken = async (req, res) => {
    try {
        const { userId } = req.params;
        await tokenService.deleteToken(userId);
        res.status(200).json({ message: 'Token deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete token' });
    }
};

module.exports = {
    createToken,
    getToken,
    deleteToken
};
