var koa = require('koa');
var app = koa();
var models = require('./models/index.js');


app.use(function *(){
  this.body = 'Hello World';
  console.log('Wololo');
});


app.listen(3000);
