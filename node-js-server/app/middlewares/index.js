// Archivo que exporta los middlewares para la autenticación y verificación de registros

const authJwt = require("./authJwt"); // Middleware para la autenticación basada en JSON Web Tokens (JWT)
const verifySignUp = require("./verifySignUp"); // Middleware para verificar los datos de registro

module.exports = {
  authJwt,
  verifySignUp
};