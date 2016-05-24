var router = require('koa-router')();

router.get('/', function* () {
    this.body = 'router test get';
    console.log('GET user/account/')
});

router.post('/', function* () {
    this.body = 'router test post';
    console.log('POST user/account/')
});

module.exports = router;
