'use strict'

const co = require('co')

module.exports = {
  createUser: function * () {
    if (false) {
      return reject(new Error("we fucked up"))
    }
    return "user created"
  }
}
