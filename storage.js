var fs = require('fs');
var filePath = './public/data/restaurants.json';


function save(canteens) {
    fs.writeFileSync(filePath, JSON.stringify(canteens));
    return 0;
}

function load() {
    return require(filePath);
}

exports.save = save;
exports.load = load;