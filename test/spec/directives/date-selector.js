'use strict';

describe('Directive: dateSelector', function () {

  // load the directive's module
  beforeEach(module('bookingsAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<date-selector></date-selector>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dateSelector directive');
  }));
});
