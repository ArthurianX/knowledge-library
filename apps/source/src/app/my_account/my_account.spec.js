describe('AccountCtrl Test', function () {

    var rootScope;
    var scope;
    var ctrl;

    /**
     * Before each test run the contained functions:
     * load zamolxian.my_account module
     * inject properties in variables
     */
    beforeEach(function () {
        module('zamolxian.my_account');
        inject(function ($rootScope, $controller) {
            rootScope = $rootScope;
            scope = $rootScope.$new;

            ctrl = $controller('AccountCtrl', {
                $scope: scope, countryListing: mockCountryListing,
                PhoneService: mockPhoneService
            });
        });
    });

    /**
     * Mock Phone Service
     * @type {{isValidPhoneNr: mock phone number validation function}}
     */
    var mockPhoneService = {
        isValidPhoneNr: function (phoneNr, countryCode) {
            if (phoneNr.length == 10 && countryCode.length == 2) {
                return true;
            } else {
                return false;
            }
        }
    };

    /**
     * Mock Country Listing Service
     * @type {{countryList: an array containing country objects}}
     */
    var mockCountryListing = {
        countryList: [
            {"name": "Afghanistan", "alpha": "AF"},
            {"name": "Ã…land Islands", "alpha": "AX"}
        ]
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

    it('should should return true (false phone error) for valid phone number', inject(function ($q) {

        // correct phone number (lenght == 10)
        // only checks length of phone number, no country code checking
        var phoneNr = "0744555666";
        var countryCode = "RO";

        // defer a private instance of $q
        var deferred = $q.defer();

        // set what defer resolves (what the then() function returns)
        deferred.resolve(phoneNr.length == 10);

        // set spy in mockPhoneService on isValidPhoneNr, set what the then() method should return
        spyOn(mockPhoneService, 'isValidPhoneNr').andReturn(deferred.promise);

        // call isValidPhoneNr function
        scope.isValidPhoneNr(phoneNr, countryCode);

        // use scope.$apply to bind async events
        rootScope.$apply();

        // check if there is no phone error (number is valid)
        expect(scope.errorList.phone).toBeFalsy();
    }));

    it('should should return false (true phone error) for valid phone number', inject(function ($q) {

        // correct phone number (lenght != 10)
        var phoneNr = "07445552668";
        var countryCode = "RO";

        // defer a private instance of $q
        var deferred = $q.defer();

        // set what defer resolves (what the then() function returns)
        // only checks length of phone number, no country code checking
        deferred.resolve(phoneNr.length == 10);

        // set spy in mockPhoneService on isValidPhoneNr, set what the then() method should return
        spyOn(mockPhoneService, 'isValidPhoneNr').andReturn(deferred.promise);

        // call isValidPhoneNr function
        scope.isValidPhoneNr(phoneNr, countryCode);

        // use scope.$apply to bind async events
        rootScope.$apply();

        // check if there is a phone error (number is not valid)
        expect(scope.errorList.phone).toBeTruthy();
    }));
});