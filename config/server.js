var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

consign()
  .include('app/routes')
  .into(app);

module.exports = app;