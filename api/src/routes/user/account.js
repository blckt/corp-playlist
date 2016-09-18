const router = require('koa-router')();
const jwt = require('../../libs/jwtValidation');
/**
 * Creates a new user account
 * @param {String} email
 * @param {String} password
 * @return {undefined}
 */
router.post('/createUser', function* () {
  const email = this.request.body.email;
  const password = this.request.body.password;
  const hash = yield call.user.account.hashPassword(password);

  try {
    console.log(this.user);
    yield db.User.findOrCreate({ where: {
        email,
        password: hash,
    } }).spread((result, created) => {
      db.Roles.findAll({ where: {
          $or: [{ RoleName: 'USER' }, { RoleName: 'ADMIN' }],
      } }).then(role => {
        result.addRole(role);
      });
      this.body = { result: 'ok', token: jwt.signToken(result.dataValues) };
    });
  } catch (e) {
    this.body = { result: 'fail', error: e.message };
  }
});
router.post('/login', function* () {
  const email = this.request.body.email;
  const password = this.request.body.password;
  yield db.User.findOne({ where: { email } }).then(user => {
    if (user) {
      call.user.account.verifyPassword(password, user.dataValues.password) ?
        this.body = { result: 'ok', token: jwt.signToken(user.dataValues) } :
        this.body = { result: 'fail', error: 'Wrong email or password' };
    } else {
      this.body = { result: 'fail', error: 'Wrong email or password' };
    }
  });
});

router.get('/verifyToken', function* () {
  yield this.body = { varified: jwt.verifyToken(this.header.authorization).verified };
});

module.exports = router;
