// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/app/old-dashboard"));
var port = process.env.PORT || 7070;
var hostname = '127.0.0.1';

app.listen(port, hostname, () => {
   console.log(`Old dashboard server running at http://${hostname}:${port}/`);
 });