const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); 

  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>CI/CD Pipeline Demo with GitHub Runner</title>
        <style>
            body {
                margin: 0;
                font-family: Arial, Helvetica, sans-serif;
                background: #f4f6f9;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }

            .card {
                background: white;
                width: 550px;
                padding: 35px;
                border-radius: 12px;
                box-shadow: 0 8px 20px rgba(0,0,0,0.15);
                text-align: center;
            }

            h1 {
                color: #2c3e50;
                margin-bottom: 10px;
            }

            h2 {
                color: #27ae60;
                margin-bottom: 20px;
            }

            p {
                color: #555;
                font-size: 17px;
                margin: 10px 0;
            }

            .status {
                display: inline-block;
                margin-top: 20px;
                padding: 10px 18px;
                background: #28a745;
                color: white;
                border-radius: 20px;
                font-weight: bold;
            }

            footer {
                margin-top: 30px;
                color: #777;
                font-size: 14px;
            }
        </style>
    </head>

    <body>

        <div class="card">
            <h1>🚀 CI/CD Pipeline Demo</h1>

            <h2>Deployment Successful!</h2>

            <p><strong>Repository:</strong> My-First-CD-Project</p>

            <p><strong>Branch:</strong> feature/cicd-test</p>

            <p><strong>Platform:</strong> GitHub Actions (Self-Hosted Runner)</p>

            <div class="status">
                ✅ Application Online
            </div>

	    <hr style="margin:30px 0; border:none; border-top:1px solid #ddd;">

<div style="
    background:#e3f2fd;
    border-left:5px solid #1976d2;
    padding:15px;
    border-radius:8px;
    margin-top:20px;">

    <h3 style="margin-top:0;">✨ New Feature</h3>

    <p>
        Added a deployment information panel from the
        <strong>feature</strong> branch.
    </p>

</div>

            <footer>
                Automatically deployed using GitHub Actions & Docker ( This added at 3:30 PM IST with schedule Trigger)
            </footer>

        </div>

    </body>
    </html>
    `);

}).listen(80);

console.log("Server is running on port 80...");
