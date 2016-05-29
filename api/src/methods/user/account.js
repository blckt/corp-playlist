'use strict'

const co = require('co')
const bcrypt = require('bcrypt')
const saltRounds = 10;


module.exports = {

 /**
 * Returns the hash of a plain text password.
 * @param {String} plainTextPassword (at most length 72)
 * @return {String} hash of length 60
 */
  hashPassword: function (plainTextPassword) {
    return new Promise((resolve, reject) => {
      if (plainTextPassword.length > 72){
        reject(new Error(["Password must be at most 72 characters long."]))
      }
      bcrypt.hash(plainTextPassword, saltRounds, function(err, hash) {
        if (err) return reject (err)
        resolve(hash)
      })
    })
  }
}
