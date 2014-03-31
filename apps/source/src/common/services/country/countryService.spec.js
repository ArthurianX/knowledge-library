describe('CountryService Test', function() {

    var countryListing;

    beforeEach(function() {
        module('listingCountry');
        inject(function(_countryListing_) {
            countryListing = _countryListing_;
        });
    });

    it('should return a list of at least one element', function() {
        var list = countryListing.countryList;
        expect(list.length > 0).toBeTruthy();
    });

    it('should return a list containing only countries with name', function() {
        var list = countryListing.countryList;
        var ok = true;
        for (var i in list) {
           ok = ok && list[i].hasOwnProperty('name');
        }
        expect(ok).toBeTruthy();
    });

    it('should return a list containing only countries with alpha code, except the first one', function() {
        var list = countryListing.countryList;
        var ok = true;
        for (var i in list) {
            if (i > 0) {
                ok = ok && list[i].hasOwnProperty('alpha');
            }
        }
        expect(ok).toBeTruthy();
    });
});