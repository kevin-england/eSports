var express = require('express');
var app = express();
var featured = require('./public/routes/featured.js');

app.use('/featured', featured);

app.use('/', express.static('public')); 

app.get('/featured', function(req, res){
  var games = [];
  res.send(games);
})

var port = process.env.PORT || 3000;
app.listen(port);
console.log('The server is live and brought to you by me');