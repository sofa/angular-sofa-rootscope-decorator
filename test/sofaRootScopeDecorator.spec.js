'use strict';

describe('sofa.rootScopeDecorator', function () {

    var $rootScope;

    beforeEach(module('sofa.rootScopeDecorator'));

    beforeEach(inject(function (_$rootScope_) {
        $rootScope = _$rootScope_;
    }));

    it('should run tests', function () {
        expect(true).toBe(true);
    });
});
