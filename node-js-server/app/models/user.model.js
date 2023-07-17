// Archivo que define el modelo de datos para los usuarios

const mongoose = require("mongoose");

// Definición del modelo de usuario utilizando Mongoose
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String, // Nombre de usuario
    email: String, // Correo electrónico
    password: String, // Contraseña
    roles: [ // Roles asignados al usuario
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;