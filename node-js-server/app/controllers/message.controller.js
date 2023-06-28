const Message = require('../models/message.model');
const User = require('../models/user.model')

//Controlador para enviar un mensaje
exports.sendMessage = async (req, res) => {
  try {
    const { senderUsername, recipientUsername, content } = req.body;
    // Crea un nuevo mensaje en la base de datos

    if (senderUsername === recipientUsername) {
      return res.status(400).json({ error: 'No puedes enviarte un mensaje a ti mismo' });
    }

    const recipientExists = await User.exists({ username: recipientUsername });
    if (!recipientExists) {
      console.log("no existe");
      return res.status(400).json({ error: 'El destinatario no existe' });
      
    }

    const message = await Message.create({ senderUsername, recipientUsername, content });

    console.log(message);
    res.status(201).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const { username } = req.params;
    const { senderName } = req.query;

    let query = { recipientUsername: username };
    if (senderName) {
      query.senderUsername = senderName;
    }

    const messages = await Message.find(query);

    res.status(200).json({ messages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los mensajes' });
  }
};
