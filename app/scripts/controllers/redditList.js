
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
    

  	testService.success(function (data) {
      	$scope.reddits = data.data.children;
  	});

  }]);
