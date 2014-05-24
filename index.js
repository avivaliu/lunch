'use strict'
var express = require('express');
var app = express();
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.get('/', function(){
  res.render('index.html');
});
app.use(express.static())