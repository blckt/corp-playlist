const jwt = require('jsonwebtoken');
const config = require('../config/default.json');


const options = {
    expiresIn: 172800000 * 7,
    algorithm : 'HS256',

};
function signToken(payload) {
    return jwt.sign(payload, config.secret, options);
}

function verifyToken(token) {
    try {
        return { verified: true, data: jwt.verify(token, config.secret) };
    } catch (e) {
        return { verified: false, error: e };
    }
}

module.exports = {
    signToken,
    verifyToken,
}
