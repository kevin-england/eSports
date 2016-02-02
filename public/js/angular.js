var app = angular.module('share', []);

app.controller('mainController', function($http) {
  var vm = this;
  vm.results = 'Search Results:';
  $http({
     method: 'GET',
     url: '/search'
     /*search: {
      term: document.getElementById('submit').value;
     }*/
  }).success(function(data) { vm.games = data.streams });
});

app.controller('nextController', function($http) {
  var vm = this;
  vm.results = 'Featured Channels:';
  $http({
     method: 'GET',
     url: '/featured'
     /*search: {
      term: document.getElementById('submit').value;
     }*/
  }).success(function(data) { vm.games = data.videos });
});