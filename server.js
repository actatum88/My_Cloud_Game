// You can't `require` things in the browser, there are modules installed for you to import
// this is node.js code, you are not running node.js
const http = require("http");

const host = '127.0.0.1';
const port = 8000;

const fs = require('fs');
const path = require('path');

const requestListener = function(req, res) {
  let filePath = '.' + req.url;
  if (filePath == '/') {
    filePath = '/Linux/Ubuntu/home/actatum/My_Cloud_Game/';
  }

  const extname = path.extname(filePath);
  let contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
    case '.wav':
      contentType = 'audio/wav';
      break;
  }

  fs.readFile(filePath, function(error, content) {
    if (error) {
      if (error.code == 'ENOENT') {
        res.writeHead(404);
        res.end('404 Not Found');
      } else {
        res.writeHead(500);
        res.end('500 Internal Server Error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
};


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://127.0.0.1:8000`);
});
