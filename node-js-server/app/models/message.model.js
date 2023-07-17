// Archivo que define el modelo de datos para los mensajes

const mongoose = require('mongoose');

// Definición del modelo de mensaje utilizando Mongoose
const Message = mongoose.model(
  "Message",
  new mongoose.Schema({
    senderUsername: String, // Nombre de usuario del remitente
    recipientUsername: String, // Nombre de usuario del destinatario
    content: String, // Contenido del mensaje
    createdAt: Date // Fecha de creación del mensaje
  })
);

module.exports = Message;