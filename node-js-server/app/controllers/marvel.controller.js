const axios = require('axios');
var crypto = require('crypto');
const env = require("../enviroment"); 

exports.getCharacters = async (req, res) => {
  const timeStamp = Date.now();
  const hash = crypto
    .createHash('md5')
    .update(timeStamp + env.privateKey + env.publicKey)
    .digest('hex');

    const limit = parseInt(req.query.limit, 10);
    const offset = parseInt(req.query.offset, 10);

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
    const response = await axios.get('https://gateway.marvel.com/v1/public/characters', {
      params: {
        ts: timeStamp,
        apikey: env.publicKey,
        hash: hash,
        limit: limit,
        offset: offset,
      },
    });
    res.json(response.data.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

const getMarvelData = async (url) => {
  const timeStamp = Date.now();
  const hash = crypto
    .createHash('md5')
    .update(timeStamp + env.privateKey + env.publicKey)
    .digest('hex');

  try {
    const response = await axios.get(url, {
      params: {
        ts: timeStamp,
        apikey: env.publicKey,
        hash: hash,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred');
  }
};

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