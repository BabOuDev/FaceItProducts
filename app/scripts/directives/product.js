'use strict';

/**
 * @ngdoc function
 * @name faceitApp.directives:product
 * @description
 * # Product
 * Directive for the product items.
 */
angular.module('app.directives.product', [] )
	.directive('product', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/templates/product.html',
			scope:false,
			controller: function($scope){
				
				//Edit a product
				$scope.editProduct = function (i) {
					$scope.editIndex = i;
					if( !$scope.isEditing ){
					  $scope.isEditing = true;
					}else{
					  $scope.isEditing = false;
					}
				};
				
				//Remove a product for a given index
				$scope.removeProduct = function (i) {
				  $scope.products.splice(i, 1);
				};
			}
		};
	});