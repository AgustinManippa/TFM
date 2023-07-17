// Controlador de usuarios (user controller):

const User = require('../models/user.model');
const Role = require('../models/role.model');

// Ruta pública
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

// Ruta para usuarios
exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

// Ruta para administradores
exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

// Ruta para moderadores
exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

// Obtener todos los usuarios
exports.listUsers = async (req, res) => {
  try {
    // Buscar todos los usuarios en la base de datos y obtener los roles correspondientes
    const users = await User.find().populate({
      path: 'roles',
      select: 'name'
    });

    // Formatear los datos de los usuarios para enviarlos como respuesta
    const formattedUsers = users.map(user => {
      return {
        username: user.username,
        email: user.email,
        roles: user.roles.map(role => role.name) // Obtener los nombres de los roles
      };
    });

    res.json(formattedUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

// Eliminar un usuario por su nombre de usuario
exports.deleteUserByUsername = async (req, res) => {
  try {
    const { username } = req.params;

    // Buscar y eliminar el usuario en la base de datos
    const deletedUser = await User.findOneAndDelete({ username });

    if (!deletedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
};