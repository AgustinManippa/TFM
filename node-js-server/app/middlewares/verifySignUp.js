// Archivo que contiene funciones de middleware para verificar los datos de registro

const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

// Middleware para verificar si ya existe un nombre de usuario o correo electrónico en la base de datos
checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Verificar el nombre de usuario
  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }

    // Verificar el correo electrónico
    User.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }

      next();
    });
  });
};

// Middleware para verificar si los roles proporcionados existen en la base de datos
checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`
        });
        return;
      }
    }
  }

  next();
};

// Objeto que contiene las funciones de middleware de verificación de registro
const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};

module.exports = verifySignUp;