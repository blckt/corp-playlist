module.exports = function * (next) {
    if (!this.user) {
        if (401 === err.status) {
            this.status = 401;
            this.set('WWW-Authenticate', 'Basic');
            this.body = 'cant haz that';
        } else {
            throw err;
        }
    }
    yield next;
};
