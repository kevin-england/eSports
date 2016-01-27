var express = require('express');
var app = express();
var router = require('./api.js');

app.get('/query', router);

app.use('/', express.static('public')); 

app.listen(1337);
console.log('The server is live and brought to you by me');