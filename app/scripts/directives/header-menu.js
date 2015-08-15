'use strict';

angular.module('angularApisApp')
  .directive('headerMenu', [function () {
    return {
      restrict: 'E',
      replace:true,
      // scope:{},
      templateUrl: 'views/header-menu.html',
      controller: function ($scope, $state) {
      	$scope.changeState = function () {
      		console.log($state);
      	};
      }
      };
    }
  ]);
