describe('Zalmoxian Homepage', function() {
    beforeEach(function() {
        browser.get('http://zamolxian.client/home');
        //browser.ignoreSynchronization = true;
    });

    it('should have a title', function() {
        browser.getTitle().then( function(title) {
            expect(title).toBeTruthy();
        });

    });

    it('should load the page body', function() {
        browser.get('http://zamolxian.client/home');
        var element = browser.findElement(by.css('.description'));
        expect(element.isDisplayed()).toBe(true);
        expect(element.getText()).toBeTruthy();
    });

});

/**
 *  The tests for the account page
 */

describe('Zalmoxian My Account Page', function() {
    beforeEach(function() {
        browser.get('http://zamolxian.client/my_account');

    });

    it('should have a title', function() {
        browser.getTitle().then( function(title) {
            expect(title).toBeTruthy();
        });

    });


    /**
     * Separate test for the button to exist so it can stop gracefully if it isn't rendered
     */

    it('there should be a button', function() {
        var button = browser.findElement(by.tagName('button'));
        expect(button.getText()).toBeDefined();
    });

    /**
     * Separate test for the form to be shown
     */

    it('the button being clicked should open the contact form', function() {
        var button = browser.findElement(by.tagName('button'));
        button.click();
        var contactForm =  browser.findElement(by.id('contactFormDiv'));
        expect(contactForm.isDisplayed()).toEqual(true);
    });


    /**
     *  I get the impression that this should be a test within a test
     */

    it('I should be able to enter text in the name input', function() {
        var button = browser.findElement(by.tagName('button'));
        button.click();
        var contactForm =  browser.findElement(by.id('contactFormDiv'));
        expect(contactForm.isDisplayed()).toEqual(true);
        element(by.model('cdFirstName')).sendKeys('Ana Maria');
    });

    /**
     * Testing the email
     */
    it('I should be able to enter text in the email input', function() {
        var button = browser.findElement(by.tagName('button'));
        button.click();
        var contactForm =  browser.findElement(by.id('contactFormDiv'));
        expect(contactForm.isDisplayed()).toEqual(true);
        element(by.model('cdFirstName')).sendKeys('Ana Maria');
    });

});