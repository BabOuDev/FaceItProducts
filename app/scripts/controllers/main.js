'use strict';

/**
 * @ngdoc function
 * @name faceitApp.controller:MainController
 * @description
 * # MainController
 * Controller of the faceitApp
 */
angular.module('faceitApp')
  .controller('MainController', function ($scope, productFactory, $rootScope) {
	
	// menu activation handling
	$rootScope.currentLocation = 'home';
	
	// var declaration
	$scope.currency = '£';
	$scope.products = [];
	$scope.isEditing = false;
	$scope.editIndex = -1;
	
	// Get products from factory
	productFactory.get().success(function(data){
		$scope.products = data;
	});
	
	
	// Add a new product
	$scope.addProduct = function () {
		// Checking if product have a name and price
		if(!$scope.product || !$scope.product.name || !$scope.product.price){
		  alert('You must enter at least a Name and Price for this product.')
		  return;
		}
		$scope.products.push($scope.product);
		$scope.product = '';
	};
	
  });
