describe('AccountCtrl', function () {


    beforeEach(module('zamolxian.my_account'));


    var mockCountryService = {

        //console:log("hello")
        //countryList: {"name": "Zimbabwe", "cca2": "ZW", "callingCode": ["263"]}

         checkPhone: function (countryName, phoneNumber) {
         if (phoneNumber.length == 10 && countryName.length > 2) {
         return true;
         }
         return false;
         }
    };


    it('should have a scope', function () {
        inject(function ($rootScope, $controller) {
            var scope = $rootScope.$new;

            var ctrl = $controller('AccountCtrl', {
                $scope: scope
            });

            expect(scope).toBeTruthy();

        });
    });


    it('should have a default Username', function () {
        inject(function ($rootScope, $controller) {
            var scope = $rootScope.$new;

            var ctrl = $controller('AccountCtrl', {
                $scope: scope
            });

            expect(scope.userName).toBeTruthy();

        });
    });

    it('should be able to call the check phone from the the country service', function () {
        inject(function ($rootScope, $controller) {
            var scope = $rootScope.$new;


            var ctrl = $controller('AccountCtrl', {
                $scope: scope,
                //countryListing: mockCountryService
            });
            //console.log(mockCountryService.checkPhone("RO","0726323789"));
            expect(mockCountryService.checkPhone("RO","0726323789")).toBeDefined();

        });
    });
});


