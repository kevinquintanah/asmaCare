const nodemailer = require("nodemailer");
const { email_template } = require('../templates/emailTemplate'); // Asegúrate de que el nombre de la función coincida con el export en emailTemplate.js

// Función para validar un correo electrónico
function validarCorreoElectronico(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

async function enviarEmail(Destinatario, Datos) {
    try {
        if (!validarCorreoElectronico(Destinatario)) {
            throw new Error('Dirección de correo electrónico no válida');
        }

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "kevinherreraq12@gmail.com",
                pass: "12ke3456",
            },
        });

        const html_template = email_template(Datos, imagen_boleto_path);

        const msg = {
            to: Destinatario,
            from: 'kevinherreraq12@gmail.com',
            subject: 'Token',
            html: html_template,
        };

        transporter.sendMail(msg, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Correo electrónico enviado: " + info.response);
            }
        });

        return 'Correo electrónico enviado correctamente';
    } catch (error) {
        throw new Error('Error al enviar el correo electrónico: ' + error.message);
    }
}

module.exports = { enviarEmail };
