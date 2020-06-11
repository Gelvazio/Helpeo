const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const config = dotenv.config();

// token expira em 24 horas que é 1 dia
const sign = payload => jwt.sign(payload, process.env.SECRET, {
    expiresIn: 86400
});
const verify = token => jwt.verify(token, process.env.SECRET);

//module.exports = jwt;