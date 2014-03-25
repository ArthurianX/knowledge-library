describe('AccountCtrl Test', function() {
   beforeEach(module('zamolxian.my_account'));

    var mockCountryListing = {
        countryList: [
            {"name": "Afghanistan", "alpha": "AF"},
            {"name": "Ã…land Islands", "alpha": "AX"}
        ]
    };

    var mockPhoneService = {
        isValidPhoneNr: function(phoneNr, countryCode) {
            if (phoneNr.length == 10 && countryCode.length == 2) {
                return true;
            }
            return false;
        }
    };

    it('should return an array of two countries',
        inject(function($rootScope, $controller) {
            var scope = $rootScope.$new;
            var ctrl = $controller('AccountCtrl', {
                $scope: scope, countryListing: mockCountryListing,
                PhoneService: mockPhoneService
            });

            expect(scope.countryList.length).toBe(2);
        }));

    it('should return an array of four motives',
        inject(function($rootScope, $controller) {
            var scope = $rootScope.$new;
            var ctrl = $controller('AccountCtrl', {
                $scope: scope, countryListing: mockCountryListing,
                PhoneService: mockPhoneService
            });

            expect(scope.motivesList.length).toBe(4);
        }));

    it('should initialize errorList with false or undefinde values',
        inject(function($rootScope, $controller) {
            var scope = $rootScope.$new;
            var ctrl = $controller('AccountCtrl', {
                $scope: scope, countryListing: mockCountryListing,
                PhoneService: mockPhoneService
            });

            var error = false;
            for (var property in scope.errorList) {
                if (scope.errorList.hasOwnProperty(property)) {
                    error = error || scope.errorList[property];
                }
            }

            expect(error).not.toBeTruthy();
        }));
});