const sintomasPacRepository = require('../repositories/sintomasPacRepository');

const saveSintomasPac = async (idUsuario, idSintoma, idDiagnostico) => {
    return sintomasPacRepository.saveSintomasPac(idUsuario, idSintoma, idDiagnostico);
};

module.exports = { saveSintomasPac };