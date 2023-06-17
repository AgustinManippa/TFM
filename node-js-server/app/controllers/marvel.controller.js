const axios = require('axios');
var crypto = require('crypto');
const env = require("../enviroment"); 

exports.getCharacters = async (req, res) => {
    const timeStamp = Date.now()
    const hash = crypto.createHash('md5').update(timeStamp+env.privateKey+env.publicKey).digest("hex");
    // Obtén el valor del parámetro 'limit' de la solicitud y conviértelo a un número
    const limit = Number(req.query.limit);

    // Verificar si limit es mayor que 0
  // Verificar si limit es un número entero mayor que 0
  if (Number.isNaN(limit) || !Number.isInteger(limit) || limit <= 0) {
    return res.status(409).json({ error: 'Debes proporcionar un límite entero mayor que 0.' });
  }
    try {
        const response = await axios.get('https://gateway.marvel.com/v1/public/characters', {
            params: {
                "ts": timeStamp,
                "apikey": env.publicKey,
                "hash": hash,
                "limit": req.query.limit // Obtén el valor del parámetro 'limit' de la solicitud

            }
        });
        res.json(response.data.data);
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
    }
};