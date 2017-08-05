const http = require('http');

const hostname='127.0.0.1';
const port='3003'

const server = http.createServer((req, res) => {
    res.statuscode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World from Lair');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})