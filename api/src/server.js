global.libsPath = `${__dirname}/libs/`

global.db = require('./models/index.js');

require(libsPath + 'method-caller.js')()

const koa = require('koa');

const app = koa();
const bodyParser = require('koa-bodyparser');
const cors = require('kcors');
const logger = require('koa-logger');
/* === Mount Routes === */
// require(libsPath + 'route-mounter.js')(app);
app.use(function *(next) {
    try {
        yield next;
    } catch (err) {
        this.status = err.status || 500;
        this.body = err.message;
        this.app.emit('error', err, this);
    }
});
app.use(bodyParser());
app.use(cors());
app.use(logger());
require('./routes')(app);
/* === Creates tables if they don't already exist === */
db.sequelize.sync({ force: false }).then(() => {
    app.listen(3000);
});
