'use strict'

const router = require('koa-router')()
const db = require('../../models/index.js')
let call = require(libsPath + 'method-caller.js')()

console.log("router call: ", call)

router.get('/', function * (next) {
    this.body = 'router test get'
    console.log('GET user/account/')
    yield next
});

router.post('/', function* (next) {
    this.body = 'router test post';
    console.log(this.request.body)
    console.log('POST user/account/')
});

module.exports = router;
