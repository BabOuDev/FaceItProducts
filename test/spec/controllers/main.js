'use strict';

describe('Controller: MainController', function () {

  // load the controller's module
  beforeEach(module('faceitApp'));

  var MainController, productFactory, 
    controller, factory, compile, scope, http, body, el, simpleHtml;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $http, $injector) {
	controller = $controller;
    scope = $rootScope.$new();
	http = $http;
	productFactory = $injector.get('productFactory');

    MainController = controller('MainController', {
      $scope: scope,
	  productFactory: productFactory
    });
  }));

  it('should have no products to start', function () {
    expect(scope.products.length).toBe(0);
  });
  
  it('should add a product to the list', function () {
    scope.product = {name:'This is an adding Test', price:40, description:'This is a description'};
    scope.addProduct();
    expect(scope.products.length).toBe(1);
  });
  
  it('should not add if no name and price specified', function () {
    scope.product = {};
    scope.addProduct();
    expect(scope.products.length).toBe(0);
  });
  
});
