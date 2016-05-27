'use strict'

const router = require('koa-router')()
const db = require('../../models/index.js')
require(libsPath + 'method-caller.js')()

router.get('/', function * (){
  let user = yield call.user.account.createUser
  console.log(user)
})

module.exports = router;
