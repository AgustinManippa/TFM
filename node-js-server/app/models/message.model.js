const mongoose = require('mongoose');

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

