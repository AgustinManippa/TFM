// Archivo que define el modelo de datos para los roles

const mongoose = require("mongoose");

// Definición del modelo de rol utilizando Mongoose
const Role = mongoose.model(
  "Role",
  new mongoose.Schema({
    name: String // Nombre del rol
  })
);

module.exports = Role;