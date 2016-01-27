var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
var textParser = bodyParser.text();

//Get Angular connected with this info somehow

router.get('/', function(req, res) {
  request('https://api.toornament.com/v1/tournaments', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var tournaments = JSON.parse(body);
      res.json(tournaments);
    }
  });
});

module.exports = router;