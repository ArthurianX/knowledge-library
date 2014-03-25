describe('AccountCtrl', function() {
    var $scope, $location, $rootScope, createController;

    beforeEach(inject(function($injector) {
        $location = $injector.get('$location');
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();

        var $controller = $injector.get('$controller');

        createController = function() {
            return $controller('AccountCtrl', {
                '$scope': $scope
            });
        };
    }));

    it('should have a scope', function() {
//        var controller = createController();
//        $location.path('/about');
//        expect($location.path()).toBe('/about');
//        expect($scope.isActive('/about')).toBe(true);
//        expect($scope.isActive('/contact')).toBe(false);
          expect($scope).toBeTruthy();
    });

    it('should have a default username', function() {
        var controller = createController();
        expect(controller.scope.userName).toBeTruthy();
    });
});