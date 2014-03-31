/**
 * End to end testing with protractor.
 */
describe('CountryService Test', function() {

    var countryListing;

    beforeEach(function() {
    });

    it('should go to home page by default', function() {
        browser.get('http://zamolxian.client');
        expect(browser.getCurrentUrl()).toMatch(/\/home/);
    });
});