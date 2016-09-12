const jwt = require('../libs/jwtValidation');
const mount = require('koa-mount')

// routes/
const playlist = require('./playlist');
const userAccount = require('./user/account');
// validation
function* validateUser (next) {
    const user = jwt.verifyToken(this.headers.authorization);
    if (user.verified) {
        this.user = user.data;
    }
    yield next;
}
module.exports = function(app) {
    app.use(mount('/user/account', userAccount.middleware()))
    app.use(validateUser);
  //  app.use(require('../errors/UnAuthHandler'));
    app.use(mount('/playlist', playlist.middleware()));

}
