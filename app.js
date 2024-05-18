const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  console.log('Received data:');
  console.log(req.body);
  res.send('Data received');
});

// 서버 시작
server.listen(port, () => {
  console.log(`Server running at port:${port}/`);
});