// repositories/sintomasPacRepository.js
const SintomasPac = require('../models/sintomasPac');

const saveSintomasPac = async (idUsuario, idSintoma, idDiagnostico) => {
    return SintomasPac.create({ idUsuario, idSintoma, idDiagnostico });
};

module.exports = { saveSintomasPac };