/**
 * @file Archivo que exporta los modelos de la base de datos y la lista de roles disponibles.
 * @module models
 */

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

/**
 * Objeto para almacenar los modelos de la base de datos.
 * @namespace db
 * @property {Object} mongoose - Instancia de mongoose.
 * @property {mongoose.Model} user - Modelo de usuario.
 * @property {mongoose.Model} role - Modelo de rol.
 * @property {string[]} ROLES - Lista de roles disponibles.
 */
const db = {};

db.mongoose = mongoose;

// Importar los modelos
/**
 * Modelo de usuario.
 * @type {mongoose.Model}
 */
db.user = require("./user.model");

/**
 * Modelo de rol.
 * @type {mongoose.Model}
 */
db.role = require("./role.model");

/**
 * Lista de roles disponibles.
 * @type {string[]}
 */
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;