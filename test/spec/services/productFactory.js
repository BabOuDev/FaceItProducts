'use strict';

describe('Service: ProductFactory', function () {

  // load the controller's module
  beforeEach(module('faceitApp'));

  var MainController, productFactory, 
    controller, scope, http, httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $http, $injector) {
	controller = $controller;
    scope = $rootScope.$new();
	http = $http;
	productFactory = $injector.get('productFactory');

	httpBackend = $injector.get('$httpBackend');
    httpBackend.whenGET('dummyData.json').respond(200, '');
	
    MainController = controller('MainController', {
      $scope: scope,
	  productFactory: productFactory
    });
  }));

  it('should have no products to start', function () {
    expect(scope.products.length).toBe(0);
  });
  
  it('should retrieve 10 product item from dummyData', function () {
    productFactory.get().success(function(data){
	  expect(data.length).toBe(10);
	});
  });
  

  
});
