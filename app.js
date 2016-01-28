var express = require('express');
var app = express();
var featured = require('./public/routes/featured.js');

app.use('/featured', featured);

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