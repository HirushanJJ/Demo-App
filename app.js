const http = require('http');
const os = require('os');

const PORT = 3000;
const VERSION = process.env.VERSION || '1.0.0';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: 'Hello from Kubernetes with Flux!',
    version: VERSION,
    hostname: os.hostname(),
    timestamp: new Date().toISOString()
  }, null, 2));
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, version ${VERSION}`);
});
