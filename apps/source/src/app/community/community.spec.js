describe('zamolxian.community', function () {


    beforeEach(module('zamolxian.community'));



    it('should have a scope', function () {
        inject(function ($rootScope, $controller) {
            var scope = $rootScope.$new;

            var ctrl = $controller("CommunityCtrl", {
                $scope: scope
            });

            expect(scope).toBeTruthy();

        });
    });


});