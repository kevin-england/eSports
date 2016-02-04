var express = require('express');
var search = express.Router();
var request = require('request');
var bodyParser = require('body-parser');


search.get('/:keyword', function(req, res) {
  var keyword = req.params.keyword;
  var options = {
    url: 'https://api.twitch.tv/kraken/streams?game=' + keyword,
    method: 'GET',
    headers: {
      Accept: 'application/vnd.twitchtv.v3+json'
    }
  };
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var games = JSON.parse(body);
      res.json(games);
    }
  });
});

module.exports = search;