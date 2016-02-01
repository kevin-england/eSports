var express = require('express');
var search = express.Router();
var request = require('request');
var bodyParser = require('body-parser');

search.get('/', function(req, res) {
  request('https://api.toornament.com/v1/tournaments{}?api_key=ERsQmUvqo_G8J-PbiGuUkKEsnGsg5P9roJ6fB7aCsoE', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var games = JSON.parse(body);
      res.json(games);
    }
  });
});

module.exports = search;