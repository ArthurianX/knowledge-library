/**
 * End to end testing with protractor.
 */
describe('AccountCtrl e2e test', function() {

    beforeEach(function() {
    });

    it('should go to home page by default', function() {
        browser.get('http://zamolxian.client');
        expect(browser.getCurrentUrl()).toMatch(/\/home/);
    });

    it('should go to the My Account page with the correct url', function() {
        browser.get('http://zamolxian.client/my_account');
        expect(browser.getCurrentUrl()).toMatch(/\my_account/);
    });

    it('should go back to the home page if there is no route for url', function() {
        browser.get('http://zamolxian.client/wrong_url_here');
        expect(browser.getCurrentUrl()).toMatch(/\home/);
    });

    it('it should display contact form after clicking the button', function() {
        browser.get('http://zamolxian.client/my_account');
        element(by.css('.btn-primary')).click();
        var elem = element.all(by.css('.well')).get(2);
        expect(elem.isDisplayed()).toEqual(true);
    });
});