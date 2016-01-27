var express = require('express');
var app = express();
var router = require('./api.js');

app.use('/router', router);

app.use('/', express.static('public')); 

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/default.js', function(req, res) {
  res.sendFile(__dirname + '/default.js');
});

app.get('/default.css', function(req, res) {
  res.sendFile(__dirname + '/default.css');
});

app.listen(1337);
console.log('The server is live and brought to you by me');