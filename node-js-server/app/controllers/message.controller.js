const Message = require('../models/message.model');

//Controlador para enviar un mensaje
exports.sendMessage = async (req, res) => {
  try {
    const { senderUsername, recipientUsername, content } = req.body;
    // Crea un nuevo mensaje en la base de datos
    const message = await Message.create({ senderUsername, recipientUsername, content });

    console.log(message);
    res.status(201).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
};


// // Controlador para obtener los mensajes de un usuario específico
// exports.getMessages = async (req, res) => {
//   try {
//     const { Username } = req.params;

//     // Busca los mensajes donde el usuario es el remitente o el destinatario
//     const messages = await Message.find({
//       $or: [{ senderUsername: Username }, { recipientUsername: Username }],
//     });

//     res.status(200).json({ messages });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error al obtener los mensajes' });
//   }
// };

// Controlador para obtener los mensajes donde el usuario actual es el destinatario
exports.getMessages = async (req, res) => {
  try {
    const { username } = req.params;

    // Busca los mensajes donde el usuario actual es el destinatario
    const messages = await Message.find({ recipientUsername: username });

    res.status(200).json({ messages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los mensajes' });
  }
};
