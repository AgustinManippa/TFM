/**
 * @file Archivo que define el modelo de datos para los roles.
 * @module RoleModel
 */

const mongoose = require("mongoose");

/**
 * Definición del modelo de rol utilizando Mongoose.
 * @typedef {Object} RoleModel
 * @property {string} name - Nombre del rol.
 */

/**
 * Modelo de rol.
 * @type {mongoose.Model<RoleModel>}
 */
const Role = mongoose.model(
  "Role",
  new mongoose.Schema({
    name: String
  })
);

module.exports = Role;