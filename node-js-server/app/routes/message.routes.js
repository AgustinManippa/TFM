// Archivo que define las rutas relacionadas con los mensajes

const express = require('express');
const MessageController = require('../controllers/message.controller'); // Importar el controlador de mensajes

module.exports = function(app) {
  // Middleware para permitir los encabezados necesarios en las respuestas
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  // Rutas para obtener y enviar mensajes

  app.get('/api/messages/:username', MessageController.getMessages); // Obtener mensajes de un usuario específico

  app.post('/api/messages', MessageController.sendMessage); // Enviar un mensaje

};