const express = require('express');
const router = express.Router();
const userService = require('../services/userService.js'); 
const diagnosticoService = require('../services/diagnosticoService.js');
const sintomaService = require('../services/sintomaService.js');
const sintomasPacService = require('../services/sintomasPacService.js');

router.get('/users', async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/diagnostico', async (req, res) => {
    const { idUsuario, fecha, predictIA, resultPac, dictamen } = req.body;
    try {
        // Asegura  que predictIA sea un número entre 0 y 100
        const parsedPredictIA = parseFloat(predictIA);
        if (isNaN(parsedPredictIA) || parsedPredictIA < 0 || parsedPredictIA > 100) {
            throw new Error('El valor de predictIA debe ser un número entre 0 y 100.');
        }

        // Asegura que resultPac sea un valor booleano
        const parsedResultPac = resultPac === '1' || resultPac === 'true' || resultPac === true;

        // Asegúrate de que dictamen sea un valor booleano
        const parsedDictamen = dictamen === '1' || dictamen === 'true' || dictamen === true;

        const newDiagnostico = await diagnosticoService.saveDiagnostico(idUsuario, fecha, parsedPredictIA, parsedResultPac, parsedDictamen);
        res.status(201).json(newDiagnostico);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.post('/sintoma', async (req, res) => {
    const { clave, descripcion } = req.body;
    try {
        const newSintoma = await sintomaService.saveSintoma(clave, descripcion);
        res.status(201).json(newSintoma);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.post('/sintomasPac', async (req, res) => {
    const { idUsuario, idSintoma, idDiagnostico } = req.body;
    try {
        const newSintomasPac = await sintomasPacService.saveSintomasPac(idUsuario, idSintoma, idDiagnostico);
        res.status(201).json(newSintomasPac);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;