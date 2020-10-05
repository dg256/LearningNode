var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res) {
    var q = url.parse(req.url);

    var fileName = (q.pathname == "/") ? "./index.html" : "." + q.pathname + ".html";


    fs.readFile(fileName, function(err, data) {
        if (err) {

            return fs.readFile("./404.html", function(err1, data1) {
                res.writeHead(404, { 'Content-Type': 'text/html' })
                res.write(data1);
                return res.end();
            })

        }

        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write(data);
        return res.end();
    });

}).listen(8080);