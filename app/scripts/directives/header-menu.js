'use strict';

angular.module('angularApisApp')
  .directive('headerMenu', [function () {
    return {
      restrict: 'E',
      replace:true,
      templateUrl: 'views/header-menu.html',
      controller: function ($scope, $state) {
      	$scope.stateName = null;
      	$scope.$on('$stateChangeSuccess', function () {
      		$scope.stateName = $state.current.data.name;
      	});
      }
      };
    }
  ]);
