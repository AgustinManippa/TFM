/**
 * @file Archivo que define el modelo de datos para los mensajes.
 * @module MessageModel
 */

const mongoose = require('mongoose');

/**
 * Definición del modelo de mensaje utilizando Mongoose.
 * @typedef {Object} MessageModel
 * @property {string} senderUsername - Nombre de usuario del remitente.
 * @property {string} recipientUsername - Nombre de usuario del destinatario.
 * @property {string} content - Contenido del mensaje.
 * @property {Date} createdAt - Fecha de creación del mensaje.
 */

/**
 * Modelo de mensaje.
 * @type {mongoose.Model<MessageModel>}
 */
const Message = mongoose.model(
  "Message",
  new mongoose.Schema({
    senderUsername: String,
    recipientUsername: String,
    content: String,
    createdAt: Date
  })
);

module.exports = Message;