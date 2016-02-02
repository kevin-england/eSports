var express = require('express');
var featured = express.Router();
var request = require('request');
var bodyParser = require('body-parser');

featured.get('/', function(req, res) {
  request('https://api.twitch.tv/kraken/videos/top?game=Gaming+Talk+Shows&period=month', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var games = JSON.parse(body);
      res.json(games);
    }
  });
});

module.exports = featured;