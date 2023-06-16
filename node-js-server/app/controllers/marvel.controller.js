const axios = require('axios');
var crypto = require('crypto');
const env = require("../enviroment"); 

exports.getCharacters = async (req, res) => {
    const timeStamp = Date.now()
    const hash = crypto.createHash('md5').update(timeStamp+env.privateKey+env.publicKey).digest("hex");
    try {
        const response = await axios.get('https://gateway.marvel.com/v1/public/characters', {
            params: {
                "ts": timeStamp,
                "apikey": env.publicKey,
                "hash": hash
            }
        });
        res.json(response.data.data);
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
    }
};