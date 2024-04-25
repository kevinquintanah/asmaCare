// repositories/sintomaRepository.js
const Sintoma = require('../models/sintoma.js');

const saveSintoma = async (clave, descripcion) => {
    return Sintoma.create({ clave, descripcion });
};
