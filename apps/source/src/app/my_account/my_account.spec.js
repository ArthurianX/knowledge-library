describe('AccountCtrl', function () {

    var rootScope;
    var scope;
    var ctrl;

    //beforeEach(module('zamolxian.my_account'));


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

    beforeEach(function () {
        module('zamolxian.my_account');
        inject(function ($rootScope, $controller) {
            rootScope = $rootScope;
            scope = rootScope.$new;

            ctrl = $controller("AccountCtrl", {
                $scope: scope, countryListing: mockCountryService,
                PhoneService: mockPhoneService
            });
        });
    });


    var mockCountryService = {

        //console:log("hello")
//        countryList: {"name": "Zimbabwe", "cca2": "ZW", "callingCode": ["263"]}

        checkPhone: function (countryName, phoneNumber) {
            if (phoneNumber.length == 10 && countryName.length > 2) {
                return true;
            }
            return false;
        }
    };


    it('should have a scope', function () {
        expect(scope).toBeDefined();
    });


    it('should have a default Username', function () {
        expect(scope.userName).toEqual("George Bora");
    });

    it('should be able to call the old service', function () {
        expect(mockCountryService.checkPhone("RO", "0726323789")).toBeDefined();
    });

    it("should be able to call the new promised based service", inject(function ($q) {




        var numarDeTelefon = "0123456789";
        var codDeTara = "RO";

        // defer a private instance of $q
        var deferred = $q.defer();

        // set what defer resolves (what the then() function returns)
        deferred.resolve(numarDeTelefon.length == 10);

        // set spy in mockPhoneService on isValidPhoneNr, set what the then() method should return
        spyOn(mockPhoneService, 'isValidPhoneNr').andReturn(deferred.promise);

        /*//This works but it's stupid
        scope.isValidPhoneNr = function (phoneNr, countryCode) {
            if (phoneNr.length == 10 && countryCode.length == 2) {
                return true;
            } else {
                return false;
            }
        };

        // Interesting it seems that when I insert the whole object it fails but when I inject the sole method it works
        // thus the problem is with delivering the ser
        var mockPhoneService2 = {
            isValidPhoneNr: function (phoneNr, countryCode) {
                if (phoneNr.length == 10 && countryCode.length == 2) {
                    return true;
                } else {
                    return false;
                }
            }
        };

        scope.PhoneService = mockPhoneService2;*/


        // call isValidPhoneNr function (even tough it's not called in the actual controller)
        scope.mockPhoneService.isValidPhoneNr(numarDeTelefon, codDeTara);

        // use scope.$apply to bind async events
        // A bit costly imho
        rootScope.$apply();

        // check if there is no phone error (number is valid)
        expect(scope.errorList["phone"]).toBeFalsy();
    }));
});


