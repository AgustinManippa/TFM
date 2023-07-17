// Archivo que define las rutas relacionadas con los datos de Marvel

const controller = require("../controllers/marvel.controller"); // Importar el controlador de Marvel

module.exports = function(app) {
  // Middleware para permitir los encabezados necesarios en las respuestas
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  // Rutas para obtener los datos de Marvel

  app.get('/api/marvel/characters', controller.getCharacters); // Obtener los personajes de Marvel

  app.get('/api/marvel/comics', controller.getComics); // Obtener los cómics de Marvel

  app.get('/api/marvel/series', controller.getSeries); // Obtener las series de Marvel

  app.get('/api/characters/:characterId', controller.getCharacterById); // Obtener un personaje específico por su ID

  app.get('/api/characters/:characterId/comics', controller.getCharacterComics); // Obtener los cómics de un personaje específico

  app.get('/api/characters/:characterId/events', controller.getCharacterEvents); // Obtener los eventos de un personaje específico

  app.get('/api/characters/:characterId/series', controller.getCharacterSeries); // Obtener las series de un personaje específico

  app.get('/api/characters/:characterId/stories', controller.getCharacterStories); // Obtener las historias de un personaje específico
};