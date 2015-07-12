
'use strict';

/**
 * @ngdoc function
 * @name angularApisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApisApp
 */
angular.module('angularApisApp')
  .controller('redditListCtrl', ['$scope', 'testService', function ($scope, testService) {
    

  	$scope.reddits = testService.success(function (data) {
  		$scope.redditData = data;
      $scope.reddits = $scope.redditData.data.children;
  		console.log($scope.reddits);
  	});

  }]);
