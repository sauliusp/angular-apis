
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
    'ngSanitize',
    'ngTouch',
    'infinite-scroll',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        data: {
          name: "saulius's hub"
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        data: {
          name: "about"
        }
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        data: {
          name: "contact"
        }
      })
      .state('reddit-list', {
        url: '/reddit-list',
        templateUrl: 'views/reddit-list.html',
        controller: 'redditListCtrl',
        data: {
          name: "reddit example"
        }
      })
      .state('reddit-item', {
        url: '/reddit-item/:id',
        templateUrl: 'views/reddit-item.html',
        controller: 'redditItemCtrl'
      });

  });
