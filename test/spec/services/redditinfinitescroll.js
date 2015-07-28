'use strict';

describe('Service: redditInfiniteScroll', function () {

  // load the service's module
  beforeEach(module('angularApisApp'));

  // instantiate service
  var redditInfiniteScroll;
  beforeEach(inject(function (_redditInfiniteScroll_) {
    redditInfiniteScroll = _redditInfiniteScroll_;
  }));

  it('should do something', function () {
    expect(!!redditInfiniteScroll).toBe(true);
  });

});
