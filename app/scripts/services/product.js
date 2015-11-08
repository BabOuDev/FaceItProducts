'use strict';

/**
 * @ngdoc service
 * @name faceitApp.factory:productFactory
 * @description
 * # productFactory
 * Factory for getting the product items from dummyData.json.
 */
angular.module('faceitApp')
  .factory('productFactory', function($http){
	var obj = {};
	//Get the products from DummyData.json
	obj.get = function(){
	  return $http.get('dummyData.json');
	};
	return obj;
  });