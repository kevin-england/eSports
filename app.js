var express = require('express');
var app = express();

app.use('/', express.static('public')); 

app.listen(1337);
console.log('The server is live and brought to you by me');