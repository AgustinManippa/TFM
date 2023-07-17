// Archivo que define las rutas relacionadas con la autenticación de usuarios

const { verifySignUp } = require("../middlewares"); // Importar los middlewares para la verificación de registros
const controller = require("../controllers/auth.controller"); // Importar el controlador de autenticación

module.exports = function(app) {
  // Middleware para permitir los encabezados necesarios en las respuestas
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  // Ruta para el registro de usuarios
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail, // Middleware para verificar duplicados de nombre de usuario o correo electrónico
      verifySignUp.checkRolesExisted // Middleware para verificar la existencia de roles
    ],
    controller.signup
  );

  // Ruta para la autenticación de usuarios
  app.post("/api/auth/signin", controller.signin);

  // Ruta para cerrar sesión de usuario
  app.post("/api/auth/signout", controller.signout);
};