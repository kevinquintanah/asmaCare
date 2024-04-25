// services/diagnosticoService.js
const diagnosticoRepository = require('../repositories/diagnosticoRepository');

const saveDiagnostico = async (idUsuario, fecha, predictIA, resultPac, dictamen) => {
    return diagnosticoRepository.saveDiagnostico(idUsuario, fecha, predictIA, resultPac, dictamen);
};

module.exports = { saveDiagnostico };