'use strict';

/**
 * @ngdoc controller
 * @name faceitApp.controller:AboutController
 * @description
 * # AboutController
 * Controller of the faceitApp
 */
angular.module('faceitApp')
  .controller('AboutController', function ($scope, $rootScope) {
	  
	// menu activation handling
	$rootScope.currentLocation = 'about';
	
	// me!
    $scope.me = 'ROYER-ADNOT Remy';
  });
