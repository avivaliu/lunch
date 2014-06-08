'use strict'
var express = require('express');
//use busboy to handle file uploading
var handleUpdate = require('./handle-update.js').handleUpdate;
var handleDelete = require('./handle-update.js').handleDelete;

var restaurants = require('./public/data/restaurants.json'); 
var app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.get('/', function(req, res, next){
  res.render('index.html');
});
app.get('/delete', handleDelete);
app.post('/update', handleUpdate);
app.use(express.static(__dirname + '/public'));
app.get('/list', function(req, res, next){
    res.render('list.html', {restaurants:restaurants});
})
app.listen(8050);
