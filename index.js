'use strict'
var express = require('express');
var handleUpdate = require('./handle-update.js').handle;
var restaurants = require('./public/data/restaurants.json'); 
var app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.get('/', function(req, res, next){
  res.render('index.html');
});
app.post('/update', handleUpdate);
app.use(express.static(__dirname + '/public'));
app.get('/list', function(req, res, next){
    res.render('list.html', {restaurants:restaurants});
})
app.listen(8050);
