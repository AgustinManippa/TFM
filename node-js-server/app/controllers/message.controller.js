// Controlador de mensajes (message controller):

const Message = require('../models/message.model');
const User = require('../models/user.model')

// Enviar un mensaje
exports.sendMessage = async (req, res) => {
  try {
    const { senderUsername, recipientUsername, content } = req.body;

    if (senderUsername === recipientUsername) {
      return res.status(400).json({ error: 'No puedes enviarte un mensaje a ti mismo' });
    }

    // Comprobar si el destinatario existe en la base de datos
    const recipientExists = await User.exists({ username: recipientUsername });
    if (!recipientExists) {
      return res.status(400).json({ error: 'El destinatario no existe' });
    }

    // Crear un nuevo mensaje en la base de datos
    const message = await Message.create({ senderUsername, recipientUsername, content });

    res.status(201).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
};

// Obtener mensajes
exports.getMessages = async (req, res) => {
  try {
    const { username } = req.params;
    const { senderName } = req.query;

    let query = { recipientUsername: username };
    if (senderName) {
      query.senderUsername = senderName;
    }

    // Buscar los mensajes en la base de datos según el destinatario y el remitente (opcional)
    const messages = await Message.find(query);

    res.status(200).json({ messages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los mensajes' });
  }
};