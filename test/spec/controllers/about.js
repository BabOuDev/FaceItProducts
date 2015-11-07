'use strict';

describe('Controller: AboutController', function () {

  // load the controller's module
  beforeEach(module('faceitApp'));

  var AboutController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutController = $controller('AboutController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should be the good person who writed the code', function () {
    expect(scope.me).toBe('ROYER-ADNOT Remy');
  });
});
