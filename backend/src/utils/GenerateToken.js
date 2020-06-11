const jwt = require('jsonwebtoken')
const { hash } = require('../configs/auth.json')

function GenerateToken(id) {
    const token = jwt.sign({id}, hash, {
        // expires in one day
        expiresIn: 86400
    })

    return token;
}

module.exports = GenerateToken
