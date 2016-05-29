global.libsPath = __dirname + '/libs/';

global.db = require('./models/index.js');
require(libsPath + 'method-caller.js')()

const koa = require('koa');
const app = koa();
const bodyParser = require('koa-bodyparser');
const cors = require('kcors');

/* === Mount Routes === */
require(libsPath + 'route-mounter.js')(app);

/* === Creates tables if they don't already exist === */
db.sequelize.sync()

app.use(bodyParser());
app.use(cors());

app.listen(3000);
