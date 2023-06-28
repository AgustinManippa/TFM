const controller = require("../controllers/marvel.controller");

module.exports = function(app){
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get('/api/marvel/characters', controller.getCharacters);

  app.get('/api/characters/:characterId', controller.getCharacterById);

  app.get('/api/characters/:characterId/comics', controller.getCharacterComics);

  app.get('/api/characters/:characterId/events', controller.getCharacterEvents);

  app.get('/api/characters/:characterId/series', controller.getCharacterSeries);

  app.get('/api/characters/:characterId/stories', controller.getCharacterStories);
};