'use strict';

/**
 * @ngdoc function
 * @name angularApisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApisApp
 */
angular.module('angularApisApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    
  
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
