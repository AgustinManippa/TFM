// Controlador de Marvel (marvel controller):

const axios = require('axios');
var crypto = require('crypto');
const path = require('path');
const dotenv = require('dotenv'); // Módulo para cargar variables de entorno desde el archivo .env


// Configurar dotenv para cargar las variables de entorno desde el archivo .env
// Aquí utilizamos path.join() para obtener la ruta completa al archivo .env
// que está ubicado en la carpeta raíz del proyecto (un nivel más arriba del directorio donde se encuentra este archivo de controlador).
// Una vez que se configuran las variables de entorno, podremos acceder a ellas mediante process.env.
dotenv.config({ path: path.join(__dirname, '../.env') });

// Función auxiliar para realizar una solicitud a la API de Marvel
const makeMarvelRequest = async (url, req, res) => {
  // Generar la información necesaria para la autenticación en la API de Marvel
  const timeStamp = Date.now();
  const hash = crypto
    .createHash('md5')
    .update(timeStamp + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY)
    .digest('hex');

  // Obtener los parámetros limit y offset de la solicitud
  const limit = parseInt(req.query.limit, 10);
  const offset = parseInt(req.query.offset, 10);

  // Validar los parámetros limit y offset
  if (
    Number.isNaN(limit) ||
    !Number.isInteger(limit) ||
    limit <= 0 ||
    Number.isNaN(offset) ||
    !Number.isInteger(offset) ||
    offset < 0
  ) {
    return res.status(409).json({
      error: 'Debes proporcionar un límite entero mayor que 0 y un offset entero mayor o igual a 0.',
    });
  }

  try {
    // Realizar la solicitud a la API de Marvel utilizando axios
    const response = await axios.get(url, {
      params: {
        ts: timeStamp,
        apikey: process.env.PUBLIC_KEY,
        hash: hash,
        limit: limit,
        offset: offset,
      },
    });
    // Enviar la respuesta con los datos obtenidos de la API de Marvel
    res.json(response.data.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Obtener personajes de Marvel
exports.getCharacters = async (req, res) => {
  const url = 'https://gateway.marvel.com/v1/public/characters';
  await makeMarvelRequest(url, req, res);
};

// Obtener cómics de Marvel
exports.getComics = async (req, res) => {
  const url = 'https://gateway.marvel.com/v1/public/comics';
  await makeMarvelRequest(url, req, res);
};

// Obtener series de Marvel
exports.getSeries = async (req, res) => {
  const url = 'https://gateway.marvel.com/v1/public/series';
  await makeMarvelRequest(url, req, res);
};

// Función auxiliar para obtener datos de Marvel según una URL específica
const getMarvelData = async (url) => {
  // Generar la información necesaria para la autenticación en la API de Marvel
  const timeStamp = Date.now();
  const hash = crypto
    .createHash('md5')
    .update(timeStamp + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY)
    .digest('hex');

  try {
    // Realizar la solicitud a la API de Marvel utilizando axios
    const response = await axios.get(url, {
      params: {
        ts: timeStamp,
        apikey: process.env.PUBLIC_KEY,
        hash: hash,
      },
    });
    // Devolver los datos obtenidos de la API de Marvel
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred');
  }
};

// Obtener un personaje de Marvel por su ID
exports.getCharacterById = async (req, res) => {
  const characterId = req.params.characterId;
  const url = `https://gateway.marvel.com/v1/public/characters/${characterId}`;

  try {
    const data = await getMarvelData(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Obtener cómics de un personaje de Marvel
exports.getCharacterComics = async (req, res) => {
  const characterId = req.params.characterId;
  const url = `https://gateway.marvel.com/v1/public/characters/${characterId}/comics`;

  try {
    const data = await getMarvelData(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Obtener eventos de un personaje de Marvel
exports.getCharacterEvents = async (req, res) => {
  const characterId = req.params.characterId;
  const url = `https://gateway.marvel.com/v1/public/characters/${characterId}/events`;

  try {
    const data = await getMarvelData(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Obtener series de un personaje de Marvel
exports.getCharacterSeries = async (req, res) => {
  const characterId = req.params.characterId;
  const url = `https://gateway.marvel.com/v1/public/characters/${characterId}/series`;

  try {
    const data = await getMarvelData(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Obtener historias de un personaje de Marvel
exports.getCharacterStories = async (req, res) => {
  const characterId = req.params.characterId;
  const url = `https://gateway.marvel.com/v1/public/characters/${characterId}/stories`;

  try {
    const data = await getMarvelData(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};