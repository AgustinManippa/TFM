const express = require('express');
const MessageController = require('../controllers/message.controller');

module.exports = function(app){
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.get('/api/messages/:username', MessageController.getMessages);

    app.post('/api/messages', MessageController.sendMessage);
  };