
'use strict';

/**
 * @ngdoc function
 * @name angularApisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApisApp
 */
angular.module('angularApisApp')
  .controller('SharedCtrl', ['$scope', '$location', function ($scope, $location) {

    $scope.isActive = function (currentScreen) {
      return currentScreen === $location.path();
    };   


  }]);
