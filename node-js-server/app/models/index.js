// Archivo que exporta los modelos de la base de datos y la lista de roles disponibles

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Objeto para almacenar los modelos de la base de datos
const db = {};

db.mongoose = mongoose;

// Importar los modelos
db.user = require("./user.model"); // Modelo de usuario
db.role = require("./role.model"); // Modelo de rol

// Lista de roles disponibles
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;