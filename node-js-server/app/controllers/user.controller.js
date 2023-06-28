const { user } = require('../models');
const User = require('../models/user.model');
const Role = require('../models/role.model');

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.listUsers = async (req, res) => {
  try {
    const users = await User.find().populate({
      path: 'roles',
      select: 'name'
    });
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

exports.deleteUserByUsername = async (req, res) => {
  try {
    const { username } = req.params;
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

