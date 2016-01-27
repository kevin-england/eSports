var app = angular.module('share', ['secret']);

app.controller('mainController', ['theService', 'secretService',
  function(theService, secretService) {
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

var secret = angular.module('secret', []);

secret.factory('secretService', function() {
  var subText = 'This is the secret data that will only be displayed on the mainController';
  return {
    show: function() {
      return subText;
    }
  }  
})