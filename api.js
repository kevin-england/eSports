var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
var textParser = bodyParser.text();

router.post('/', textParser, function(req,res) {
  request('https://api.toornament.com/v1/tournaments', function (error, res, body) {
    if (!error && res.statusCode == 200) {
      var description = JSON.parse(body);
       description = JSON.stringify(description.response.docs);
       console.log(description);
       res.send(description);
    }
  });
});

module.exports = router;

//Get Angular connected with this info somehow