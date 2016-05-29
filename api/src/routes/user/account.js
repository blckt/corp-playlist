'use strict'

const router = require('koa-router')()

/**
* Creates a new user account
* @param {String} email
* @param {String} password
* @return {undefined}
*/
router.post('/createUser', function * (){
  let email = this.request.body.email
  let password = this.request.body.password

  let hash = yield call.user.account.hashPassword(password)

  yield db.User.create({
      email: email,
      password: hash
    })
})

module.exports = router;
