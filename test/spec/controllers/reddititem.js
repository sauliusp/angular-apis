'use strict';

describe('Controller: ReddititemCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApisApp'));

  var ReddititemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReddititemCtrl = $controller('ReddititemCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
