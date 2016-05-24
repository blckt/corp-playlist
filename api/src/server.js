global.libsPath = __dirname + '/libs/';

const koa = require('koa');
const app = koa();
const models = require('./models/index.js');

// === Mount Routes ===
require(libsPath + 'route-mounter.js')(app);

app.use(function *(next){
  this.body = 'Hello World';
  console.log('Wololo');
  yield next;
});


app.listen(3000);
