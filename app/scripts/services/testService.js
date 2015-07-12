'use strict';

angular.module('angularApisApp')
	.factory('testService', ['$http', function($http) { 
	  return $http.get('http://api.reddit.com') 
	            .success(function(data) { 
	              return data; 
	            }) 
	            .error(function(err) { 
	              return err; 
	            }); 
	}]);