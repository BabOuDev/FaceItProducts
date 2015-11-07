'use strict';

/**
 * @ngdoc function
 * @name faceitApp.factory:product
 * @description
 * # productFactory
 * Factory for getting the product items.
 */
angular.module('faceitApp')
  .factory('productFactory', function($http){
	var obj = {};
	//Get the products from DummyData.json
	obj.get = function(){
	  return $http.get('dummyData.json') 
	};
	return obj;
  })