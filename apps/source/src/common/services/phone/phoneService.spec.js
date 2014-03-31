describe('PhoneService Test', function() {

    var PhoneService;
    var httpBackend;
    var scope;

    beforeEach(function() {
        module('zamolxian.phone-service');
        inject(function(_PhoneService_, $httpBackend, $rootScope) {
            PhoneService = _PhoneService_;
            httpBackend = $httpBackend;
            scope = $rootScope.$new;
        });
    });

    it('should have an "isValidPhoneNr" function', function() {
        expect(PhoneService.isValidPhoneNr).toBeDefined();
    });

//    it('should return true for a valid phone nr', function() {
//        var phoneNr = '0744555666';
//        var valid;
//        //scope.$apply(function() {
//        scope.$apply(function() {
//            PhoneService.isValidPhoneNr(phoneNr, 'RO').then(function(data){
//                valid = data;
//            });
//        });
//        //});
//        expect(valid).toBe(true);
//    });
});