const router = require('koa-router')()
/**
 * Creates a new user account
 * @param {String} email
 * @param {String} password
 * @return {undefined}
 */
router.get('/',function*(){
    if(this.user.id){
        this.body='verified';
    }
})

module.exports = router
