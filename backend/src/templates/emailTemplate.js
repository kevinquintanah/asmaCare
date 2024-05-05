// emailTemplate.js
function email_template(Datos, token) {
  const html_boletos = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            background-color: #fff;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            color: #333;
            font-size: 24px;
            margin-bottom: 20px;
          }
          .info {
            margin-bottom: 20px;
            color: #666;
          }
          .info p {
            margin: 5px 0;
          }
          .message {
            background-color: #f9f9f9;
            padding: 10px;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>¡Restablece tu contraseña!</h2>
          </div>
          <div class="info">
            <p>Hola ${Datos.nombre}!</p>
            <p>Para restablecer tu contraseña, haz clic en el siguiente enlace:</p>
            <p><a href="http://localhost:3000/reset-password?email=${Datos.email}&token=${token}">Restablecer contraseña</a></p>
          </div>
          <div class="message">
            <p>Recuerda que en AsmaCare siempre pensamos en tu salud. ¡Cuidarte es nuestra prioridad!</p>
          </div>
        </div>
      </body>
    </html>
  `;
  return html_boletos;
}

module.exports = { email_template };
