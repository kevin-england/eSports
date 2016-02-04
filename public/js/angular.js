var app = angular.module('share', []);

app.controller('mainController', function($http) {
  var vm = this;
  vm.results = 'Search Results:';
  /* vm.update = function($http) {
  method: 'GET',
  url: '/featured'
  }).success(function(data) { vm.games = data.streams });
});
  games.update().then(function(response) {
    vm.show = response.data;
  });*/
  $http({
     method: 'GET',
     url: '/search'
  }).success(function(data) { vm.games = data.streams });
});

app.controller('nextController', function($http) {
  var vm = this;
  vm.results = 'Featured Channels:';
  $http({
     method: 'GET',
     url: '/featured'
  }).success(function(data) { vm.games = data.featured });
});