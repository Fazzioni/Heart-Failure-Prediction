const { Console } = require('console');
var http = require('http');
const { argv } = require('process');

 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Ola!!');
  res.end();

}).listen( process.argv[2] );

