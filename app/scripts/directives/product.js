'use strict';

/**
 * @ngdoc directive
 * @name faceitApp.directives:product
 * @restrict E
 * @description
 * # Product
 * Directive for the product items. This directive show/edit/remove a product item.
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