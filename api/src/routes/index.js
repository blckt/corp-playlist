const jwt = require('../libs/jwtValidation')
const mount = require('koa-mount')

// routes/
const userAccount = require('./user/account')
// validation
function * validateUser (next) {
  const user = jwt.verifyToken(this.headers.authorization)
  if (user.verified) {
    this.user = user.data
    yield  (db.User.findById(user.data.id).then(result => {
      this.user = result
    }), next)
  } else {
    yield next
  }
}
module.exports = function (app) {
  app.use(validateUser)
  app.use(mount('/user/account', userAccount.middleware()));
  app.use(mount('/lectures', require('./lectures').middleware()));
  //  app.use(require('../errors/UnAuthHandler'))

}
