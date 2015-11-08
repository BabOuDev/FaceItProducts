'use strict';

describe('Directive: Product', function () {

  // load the controller's module
  beforeEach(module('app.directives.product'));

  var controller, compile, scope, rootscope, http, httpBackend, elem, compiledElem;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $http, $injector, $compile) {
	controller = $controller;
	rootscope = $rootScope;
	compile = $compile;
    scope = $rootScope.$new();
	http = $http;
	
	httpBackend = $injector.get('$httpBackend');
    httpBackend.whenGET('views/templates/product.html').respond(200, '');
	
	elem = angular.element('<product></product>');
	compiledElem = compile(elem)(scope);
	scope.$digest();
  }));

  it('should execute directive to build a product item', function () {
	expect(compiledElem.hasClass('ng-scope')).toBe(true);
  });
  
 
});
