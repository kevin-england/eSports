var express = require('express');
var search = express.Router();
var request = require('request');
var bodyParser = require('body-parser');

search.get('/', function(req, res) {
  request('https://api.twitch.tv/kraken/search/streams?q=starcraft', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var games = JSON.parse(body);
      res.json(games);
    }
  });
});

module.exports = search;