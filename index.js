'use strict'
var express = require('express');
var fs = require('fs');
//use busboy to handle file uploading
var Busboy = require('busboy');
var storage = require('./storage.js');
var app = express();
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res, next){
  res.render('index.html');
});
app.post('/update', handleUpdate);
app.use(express.static(__dirname + '/public'));
app.listen(8050);

var canteens = storage.load();
function handleUpdate(req, res) {
    //var bbParser = new busboy({headers: req.headers});
    //console.log(bbParser);
    var busboy = new Busboy({ headers: req.headers });
    var newCanteen = {};
    busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated) {
        //new canteen name and picture name from val
        newCanteen.name = val;
    });
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
        var localFilePath = __dirname + '/public/data/upload/' + filename;
        file.pipe(fs.createWriteStream(localFilePath));
        newCanteen.picture = filename;
    });    
    busboy.on('finish', function() {
        canteens.push(newCanteen);
        storage.save(canteens);
        //console.log('Done parsing form!');
        res.writeHead(303, { Connection: 'close', Location: '/' });
        res.end();
    });
    req.pipe(busboy);
}