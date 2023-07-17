// Controlador de autenticación (auth controller):

const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

// Registro de un nuevo usuario
exports.signup = (req, res) => {
  // Crear un nuevo objeto User con los datos proporcionados en la solicitud
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      // Si se proporcionan roles en la solicitud, encontrar los roles correspondientes en la base de datos
      Role.find(
        {
          name: { $in: req.body.roles },
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          // Asignar los roles al usuario
          user.roles = roles.map((role) => role._id);
          user.save((err) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "User was registered successfully!" });
          });
        }
      );
    } else {
      // Si no se proporcionan roles, asignar el rol "user" por defecto al usuario
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "User was registered successfully!" });
        });
      });
    }
  });
};

// Inicio de sesión de un usuario existente
exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      // Verificar la contraseña proporcionada con la contraseña almacenada en la base de datos
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({ message: "Invalid Password!" });
      }

      // Generar un token de acceso utilizando JWT
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 horas
      });

      var authorities = [];

      // Obtener los roles del usuario y agregarlos al array de autoridades
      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }

      // Almacenar el token en la sesión
      req.session.token = token;

      // Enviar la respuesta con los datos del usuario y el token de acceso
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
      });
    });
};

// Cierre de sesión del usuario
exports.signout = async (req, res) => {
  try {
    // Eliminar la sesión almacenada
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    this.next(err);
  }
};