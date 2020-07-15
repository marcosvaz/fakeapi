require('dotenv').config({
  path: process.env.NODE_ENV === "development" ? ".env" : ".env.prod"
});

var app = require('./config/server');

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'), function(){
  console.log('Server online at: http://localhost:' + app.get('port'));
});