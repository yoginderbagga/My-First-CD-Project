const http = require('http');

// Create a server object
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'}); 
  res.write('<h1> Mentor Checkpoint: My CI/CD Pipeline is Working!</h1>');
  res.write('<h1> Making changes on this file to see if it immediately pushes live with CICD magic!</h1>');
  res.write('<h2>🌿 Feature Branch Deployment Successful!</h2>');
res.write('<p>Branch: feature/cicd-test</p>');
res.write('<p>Deployment Time: 20 July 2026</p>');
  res.write('<h2> Added from the self-hosted runner Hi</h2>');
  res.write('<p>Status: Online</p>');
 res.write('<h2> from Self-hosted again </h2>');
 res.write('<h2> Second update from feature</h2>');
  res.end(); 
}).listen(80); // The server listens on port 80 (standard HTTP)

console.log('Server is running on port 80...');
