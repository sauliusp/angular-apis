
'use strict';

/**
 * @ngdoc overview
 * @name angularApisApp
 * @description
 * # angularApisApp
 *
 * Main module of the application.
 */
angular
  .module('angularApisApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'infinite-scroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/redditList', {
        templateUrl: 'views/redditList.html',
        controller: 'redditListCtrl'
      })
      .when('/redditList/item/:id', {
        templateUrl:'views/redditItem.html',
        controller: 'ReddititemCtrl'
      })
      .otherwise({
        redirectTo: ''
      });
  });
