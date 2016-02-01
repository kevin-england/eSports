var express = require('express');
var app = express();
var featured = require('./routes/featured.js');
var search = require('./routes/search.js');

app.use('/featured', featured);

app.use('/search', search);

app.use('/', express.static('public')); 

app.get('/featured', function(req, res){
  var games = [];
  res.send(games);
})

app.get('/search', function(req, res){
  var games = {};
  res.send(games);
})

var port = process.env.PORT || 3000;
app.listen(port);
console.log('The server is live and brought to you by me');