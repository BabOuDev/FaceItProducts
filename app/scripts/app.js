'use strict';

/**
 * @ngdoc overview
 * @name faceitApp
 * @description
 * # faceitApp
 *
 * Main module of the application.
 */
angular
  .module('faceitApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
	'app.directives.product'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: ''
      });
  });
