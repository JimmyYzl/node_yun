var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html;charset=UTF-8'});
    res.end('Hello World');
});

server.listen(3000);