var app = angular.module('share', []);

app.controller('mainController', function($http) {
  var vm = this;
  vm.results = 'Search Results:';
  vm.update = function() {
    console.log('update')
    $http({
      method: 'GET',
      url: '/search/' + vm.search
    })
    .success(function(data) { 
      vm.games = data.streams 
    });
  }
});


app.controller('nextController', function($http) {
  var vm = this;
  vm.results = 'Featured Channels:';
  $http({
     method: 'GET',
     url: '/featured'
  }).success(function(data) { vm.games = data.featured });
});