const http = require('http');

// Create a server object
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'}); 
  res.write('<h1>🚀 Mentor Checkpoint: My CI/CD Pipeline is Working!</h1>');
  res.write('<p>Status: Online</p>');
  res.end(); 
}).listen(80); // The server listens on port 80 (standard HTTP)

console.log('Server is running on port 80...');