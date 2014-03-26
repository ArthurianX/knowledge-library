describe('ModulesCtrl', function () {


    beforeEach(module('zamolxian.modules_updates'));

    var listingProvider = {};

    it('should have a scope', function () {
        inject(function ($rootScope, $controller) {
            var scope = $rootScope.$new;

            var ctrl = $controller('ModulesCtrl', {
                $scope: scope,
                listingProvider: listingProvider
            });

            expect(scope).toBeTruthy();

        });
    });


});