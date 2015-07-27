
'use strict';

/**
 * @ngdoc function
 * @name angularApisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApisApp
 */
angular.module('angularApisApp')
  .controller('redditListCtrl', ['$scope', 'RedditInfiniteScroll', function ($scope, RedditInfiniteScroll) {
    

  	$scope.reddit = new RedditInfiniteScroll();


  }]);
