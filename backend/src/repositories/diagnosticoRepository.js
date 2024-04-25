const Diagnostico = require('../models/diagnostico.js');

const saveDiagnostico = async (idUsuario, fecha, predictIA, resultPac, dictamen) => {
    return Diagnostico.create({ idUsuario, fecha, predictIA, resultPac, dictamen });
};
