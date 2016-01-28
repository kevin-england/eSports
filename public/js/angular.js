var app = angular.module('share', []);

app.controller('mainController', ['theService', 'nextService',
  function(theService, nextService) {
    vm = this;
    vm.data = 'This will be displayed as the main data';
    vm.service = theService.show();
    vm.secret = secretService.show();
  }]);

app.factory('theService', function() {
  var subText = 'This is the service data';
  return {
    show: function() {
      return subText;
    }
  }  
})

app.factory('nextService', function($http) { 
  var getGames = function() { 
    return $http({
      method: 'GET',
      url: '/featured'
    });
  }
  return {
    movies: getGames
  }
});