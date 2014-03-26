describe('AccountCtrl Test', function () {

    var scope;
    var ctrl;

    beforeEach(function () {
        module('zamolxian.my_account');
        inject(function ($rootScope, $controller) {
            scope = $rootScope.$new;
            ctrl = $controller('AccountCtrl', {
                $scope: scope, countryListing: mockCountryListing,
                PhoneService: mockPhoneService
            });
        });
    });

    var mockCountryListing = {
        countryList: [
            {"name": "Afghanistan", "alpha": "AF"},
            {"name": "Ã…land Islands", "alpha": "AX"}
        ]
    };

    var mockPhoneService = {
        isValidPhoneNr: function (phoneNr, countryCode) {
            if (phoneNr.length == 10 && countryCode.length == 2) {
                return true;
            }
            return false;
        }
    };

    it('should return an array of two countries', function () {
        expect(scope.countryList.length).toBe(2);
    });

    it('should return an array of four motives', function () {
        expect(scope.motivesList.length).toBe(4);
    });

    it('should initialize errorList with false or undefinde values', function () {
        var error = false;
        for (var property in scope.errorList) {
            if (scope.errorList.hasOwnProperty(property)) {
                error = error || scope.errorList[property];
            }
        }

        expect(error).not.toBeTruthy();
    });

//    it('should should return true for valid phone number',
//        inject(function ($rootScope, $controller) {
//
//            //Assign false by default to the expected value.
//
//            var valueOutter = false, deferred = q.defer();
//
//            var scope = $rootScope.$new;
//            var ctrl = $controller('AccountCtrl', {
//                $scope: scope, countryListing: mockCountryListing,
//                PhoneService: mockPhoneService
//            });
//
//            var phoneNr = "0744555666";
//            var countryCode = "RO";
//            //var isValid = scope.isValidPhoneNr(phoneNr, countryCode);
//            //expect(isValid).toBeTruthy();
//
//
//            deferred.promise.then(function(value){
//                valueOutter = value;
//            }, function(){console.log('error!');});
//
//            expect(valueOutter).toBeFalsy();
//            deferred.resolve(false);
//            expect(valueOutter).toBeTruthy();
//
//        }));

});