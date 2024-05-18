const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    // 데이터 수신 중 이벤트 핸들러
    req.on('data', chunk => {
      body += chunk.toString(); // 데이터를 문자열로 변환하여 누적
    });

    // 데이터 수신 완료 이벤트 핸들러
    req.on('end', () => {
      console.log('Received data:');
      console.log(body);

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('Data received');
    });
  } else {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Only POST method is supported');
  }
});

// 서버 시작
server.listen(port, () => {
  console.log(`Server running at port:${port}/`);
});
