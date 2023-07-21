/**
 * @file Archivo que define el modelo de datos para los usuarios.
 * @module UserModel
 */

const mongoose = require("mongoose");

/**
 * Definición del modelo de usuario utilizando Mongoose.
 * @typedef {Object} UserModel
 * @property {string} username - Nombre de usuario.
 * @property {string} email - Correo electrónico.
 * @property {string} password - Contraseña.
 * @property {mongoose.Types.ObjectId[]} roles - Roles asignados al usuario.
 */

/**
 * Modelo de usuario.
 * @type {mongoose.Model<UserModel>}
 */
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;