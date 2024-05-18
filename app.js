const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  if(req.url === '/request') {
    var time = new Date()
    let string = 'Receive request : ' + time
    res.end(string);
    console.log(string)
  } else {
    res.end('Hello World');
  }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});