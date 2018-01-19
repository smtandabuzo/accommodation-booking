'use strict';

describe('Controller: DateSelectorCtrl', function () {

  // load the controller's module
  beforeEach(module('bookingsAppApp'));

  var DateSelectorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DateSelectorCtrl = $controller('DateSelectorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DateSelectorCtrl.awesomeThings.length).toBe(3);
  });
});
