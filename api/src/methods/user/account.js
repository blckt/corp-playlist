const bcrypt = require('bcrypt');
const saltRounds = 10;
function hashPassword(plainTextPassword) {
    return new Promise((resolve, reject) => {
        if (plainTextPassword.length > 72) {
            reject(new Error([ 'Password must be at most 72 characters long.' ]));
        }
        bcrypt.hash(plainTextPassword, saltRounds, function(err, hash) {
            if (err) return reject(err)
            resolve(hash);
        });
    });
}

function verifyPassword(password, hashedPassowrd) {
    return bcrypt.compareSync(password, hashedPassowrd, (err, res) => {
    });

}
module.exports = {
    /**
     * Returns the hash of a plain text password.
     * @param {String} plainTextPassword (at most length 72)
     * @return {String} hash of length 60
     */
    hashPassword,
    verifyPassword,
};
