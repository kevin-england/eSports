var app = angular.module('share', []);

app.controller('mainController', function($http) { 
  var getGames = function() { 
    return $http({
      method: 'GET',
      url: '/featured'
    });
  }
  return {
    games: getGames
  }
  vm = this;
  vm.data = games();
});