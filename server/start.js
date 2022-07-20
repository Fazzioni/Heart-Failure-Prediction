const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Olá, estamos trabalhando nisso!');
}
 
const server = http.createServer(requestListener);
server.listen(process.argv[2]);