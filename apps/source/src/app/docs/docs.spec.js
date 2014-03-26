describe('zamolxian.docs', function () {


    beforeEach(module('zamolxian.docs'));



    it('should have a scope', function () {
        inject(function ($rootScope, $controller) {
            var scope = $rootScope.$new;

            var ctrl = $controller('DocsCtrl', {
                $scope: scope
            });

            expect(scope).toBeTruthy();

        });
    });


});