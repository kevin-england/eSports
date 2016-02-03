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
  }).success(function(data) { vm.games = data.channels });
});

app.controller('nextController', function($http) {
  var vm = this;
  vm.results = 'Featured Channels:';
  $http({
     method: 'GET',
     url: '/featured'
  }).success(function(data) { vm.games = data.featured });
});