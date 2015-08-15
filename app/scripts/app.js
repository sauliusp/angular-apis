
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

    $urlRouterProvider.otherwise('home');
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        name: "saulius's hub"
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        name: 'about'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        name: 'contact'
      })
      .state('reddit-list', {
        url: '/reddit-list',
        templateUrl: 'views/reddit-list.html',
        controller: 'redditListCtrl',
        name: 'reddit example'
      });

  });
