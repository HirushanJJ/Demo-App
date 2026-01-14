const http = require('http');
const os = require('os');

const PORT = 3000;
const VERSION = process.env.VERSION || '2.0.0';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: 'Hello from Kubernetes with Flux - UPDATED!',
    version: VERSION,
    hostname: os.hostname(),
    timestamp: new Date().toISOString(),
    newFeature: 'Auto-deployment working!'
  }, null, 2));
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, version ${VERSION}`);
});
