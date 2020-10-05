var fs = require('fs');
var rs = fs.createReadStream('file/appendFile.txt');
rs.on('open', function() {
    console.log('The file is open');
});