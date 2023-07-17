// Archivo que define las rutas relacionadas con los usuarios

const { authJwt } = require("../middlewares"); // Importar los middlewares de autenticación
const controller = require("../controllers/user.controller"); // Importar el controlador de usuarios

module.exports = function(app) {
  // Middleware para permitir los encabezados necesarios en las respuestas
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  // Rutas para acceder a diferentes tipos de contenido según los roles de usuario

  app.get("/api/test/all", controller.allAccess); // Acceso público

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard); // Acceso para usuarios autenticados

  app.get("/api/test/mod", [authJwt.verifyToken, authJwt.isModerator], controller.moderatorBoard); // Acceso para moderadores

  app.get("/api/test/admin", [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard); // Acceso para administradores

  app.get("/api/listusers", controller.listUsers); // Obtener la lista de usuarios

  app.delete("/api/delete/:username", controller.deleteUserByUsername); // Eliminar un usuario por su nombre de usuario
};