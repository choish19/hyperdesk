const fs = require('fs');
const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// SSL 인증서와 키 파일 로드
const privateKey = fs.readFileSync('./server.key', 'utf8');
const certificate = fs.readFileSync('./server.crt', 'utf8');
const credentials = { key: privateKey, cert: certificate };

// body-parser 미들웨어 사용하여 JSON 요청 본문 파싱
app.use(bodyParser.text({ type: 'text/plain' }));

// POST 요청을 처리하는 라우트 정의
app.post('/', (req, res) => {
    const receivedData = req.body;
    console.log('Received data:');
    console.log(receivedData);
    
    res.status(200).send('Data received successfully');
});

// HTTPS 서버 시작
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
    console.log(`HTTPS Server is listening on port ${port}`);
});
