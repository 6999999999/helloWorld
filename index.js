const http = require('http');
require('dotenv').config();

const port = process.env.PORT;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end('Hello, Worlddd!\n');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});