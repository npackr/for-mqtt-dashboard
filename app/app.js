/*  SIMPLE NODE JS HTTP SERVER

    By      : npackr
    Base on : https://viblo.asia/p/lam-quen-voi-nodejs-xay-dung-web-server-don-gian-YWOZrEe7KQ0
*/

var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var html = fs.readFileSync(__dirname + "/index.html", 'utf8');

  res.end(html);
}).listen(3000);

console.log("Listening on port 3000... ");