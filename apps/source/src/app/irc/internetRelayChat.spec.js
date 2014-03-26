describe('zamolxian.irc', function () {


    beforeEach(module('zamolxian.irc'));



    it('should have a scope', function () {
        inject(function ($rootScope, $controller) {
            var scope = $rootScope.$new;

            var ctrl = $controller('IrcCtrl', {
                $scope: scope
            });

            expect(scope).toBeTruthy();

        });
    });


});