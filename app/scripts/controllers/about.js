'use strict';

/**
 * @ngdoc function
 * @name angularApisApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularApisApp
 */
angular.module('angularApisApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
