global.libsPath = __dirname + '/libs/';

const koa = require('koa');
const app = koa();
const db = require('./models/index.js');
const bodyParser = require('koa-bodyparser');

/* === Mount Routes === */
require(libsPath + 'route-mounter.js')(app);

/* === Creates tables if they don't already exist === */
db.sequelize.sync()

app.use(bodyParser());

app.use(function *(next){
  this.body = 'Hello World';
  console.log('Wololo');
  yield next;
});


app.listen(3000);
