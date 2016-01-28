var express = require('express');
var featured = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
var textParser = bodyParser.text();

//Get Angular connected with this info somehow

featured.get('/', function(req, res) {
  var keyword = req.body;
  request('https://na.api.pvp.net/observer-mode/rest/featured?api_key=0532b884-44d9-41f2-8b2f-a8b0b30a7e78', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var games = JSON.parse(body);
      res.json(games);
      console.log(games)
    }
  });
});

module.exports = featured;