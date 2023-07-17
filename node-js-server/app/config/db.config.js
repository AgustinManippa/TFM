// Archivo de configuración para la conexión a la base de datos

module.exports = {
  HOST: "127.0.0.1", // Dirección IP del servidor de la base de datos (localhost en este caso)
  PORT: 27017, // Puerto utilizado para la conexión a la base de datos (puerto por defecto para MongoDB)
  DB: "agustinTFM_db" // Nombre de la base de datos a la que se realizará la conexión
};

// Asi es con JSDoc
// /**
//  * Archivo de configuración para la conexión a la base de datos
//  * @module db.config
//  */

// /**
//  * Objeto de configuración para la conexión a la base de datos
//  * @typedef {Object} DbConfig
//  * @property {string} HOST - Dirección IP del servidor de la base de datos
//  * @property {number} PORT - Puerto utilizado para la conexión a la base de datos
//  * @property {string} DB - Nombre de la base de datos a la que se realizará la conexión
//  */

// /**
//  * Configuración para la conexión a la base de datos
//  * @type {DbConfig}
//  */
// module.exports = {
//   HOST: "127.0.0.1",
//   PORT: 27017,
//   DB: "agustinTFM_db"
// };