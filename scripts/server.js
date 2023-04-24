// You can't `require` things in the browser, there are modules installed for you to import
// this is node.js code, you are not running node.js
const http = require("http");

const host = '127.0.0.1';
const port = 8000;

const requestListener = function (req, res) {
   res.writeHead(200);
   res.end("My first server!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://127.0.0.1:8080`);
});
