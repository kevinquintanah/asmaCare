const sintomaRepository = require('../repositories/sintomaRepository');

const saveSintoma = async (clave, descripcion) => {
    return sintomaRepository.saveSintoma(clave, descripcion);
};

module.exports = { saveSintoma };