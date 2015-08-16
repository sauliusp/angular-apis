
'use strict';

/**
 * @ngdoc function
 * @name angularApisApp.controller:ReddititemCtrl
 * @description
 * # ReddititemCtrl
 * Controller of the angularApisApp
 */
angular.module('angularApisApp')
  .controller('redditItemCtrl', ['$scope', 'testService', '$stateParams', function ($scope, testService, $stateParams) {

	testService.success(function (data) {
		$scope.item = data.data.children[$stateParams.id];
		console.log($scope.item);
	});
  	

  }]);
