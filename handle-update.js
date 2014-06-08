var fs = require('fs');
var Busboy = require('busboy');
var storage = require('./storage.js');
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

function handleDelete(req, res){
    var deleteTarget = req.query.name;
    for (i = 0;i < canteens.length; i++){
        if (canteens[i].name == deleteTarget){
            canteens.splice(i, 1);
            break;
        }
    }
    storage.save(canteens);
    res.writeHead(303, { Connection: 'close', Location: '/list' });
    res.end();
}

exports.handleUpdate = handleUpdate;
exports.handleDelete = handleDelete;