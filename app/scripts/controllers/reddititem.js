
'use strict';

/**
 * @ngdoc function
 * @name angularApisApp.controller:ReddititemCtrl
 * @description
 * # ReddititemCtrl
 * Controller of the angularApisApp
 */
angular.module('angularApisApp')
  .controller('ReddititemCtrl', ['$scope', 'testService', '$routeParams', function ($scope, testService, $routeParams) {

 
	testService.success(function (data) {
		$scope.item = data.data.children[$routeParams.id];
	});
  	

  }]);
