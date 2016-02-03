var express = require('express');
var search = express.Router();
var request = require('request');
var bodyParser = require('body-parser');

var options = {
  url: 'https://api.twitch.tv/kraken/search/channels?q=starcraft',
  method: 'GET',
  headers: {
    Accept: 'application/vnd.twitchtv.v3+json'
  }
};

search.get('/', function(req, res) {
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var games = JSON.parse(body);
      res.json(games);
    }
  });
});

module.exports = search;