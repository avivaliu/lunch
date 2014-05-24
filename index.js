'use strict'
var express = require('express');
var app = express();
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.get('/', function(req, res, next){
  res.render('index.html');
});
app.use(express.static(__dirname + '/public'));
app.listen(8050);