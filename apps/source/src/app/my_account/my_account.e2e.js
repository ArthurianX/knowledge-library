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

    xit('I should be able to enter text in the name input', function() {
        var button = browser.findElement(by.tagName('button'));
        button.click();
        var contactForm =  browser.findElement(by.id('contactFormDiv'));
        expect(contactForm.isDisplayed()).toEqual(true);
        element(by.model('cdFirstName')).sendKeys('Ana Maria');
    });

    /**
     * Testing the email
     */
    xit('I should be able to enter text in the email input', function() {
        var button = browser.findElement(by.tagName('button'));
        button.click();
        var contactForm =  browser.findElement(by.id('contactFormDiv'));
        expect(contactForm.isDisplayed()).toEqual(true);
        element(by.model('cdFirstName')).sendKeys('Ana Maria');
    });

});

describe ("Contact form on the my account page", function () {
    beforeEach(function() {
        browser.get('http://zamolxian.client/my_account');
        var button = browser.findElement(by.tagName('button'));
        button.click();
    });

    /**
     * Testing the first name input
     */

    it('I should be able to enter text in the first name input and not trigger the error', function() {
        element(by.model('cdFirstName')).sendKeys('Oana Maria');
        var errorDiv = browser.findElement(by.css('.bg-danger'));
        //the error block should not be displayed
        expect(errorDiv.isDisplayed()).toBeFalsy();
    });


    /**
     * Testing the last nameinput
     */

    it('I should be able to enter text in the last name input and not trigger the error', function() {
        element(by.model('cdLastName')).sendKeys('Caracaleanu');
        var errorDiv = browser.findElement(by.css('.bg-danger'));
        //the error block should not be displayed
        expect(errorDiv.isDisplayed()).toBeFalsy();
    });


    /**
     * Testing the email
     */
    it('I should be able to enter text in the email input and not trigger the error', function() {
        element(by.model('cdMail')).sendKeys('ocaracaleanu@gmail.com');
        var errorDiv = browser.findElement(by.css('.bg-danger'));
        //the error block should not be displayed
        expect(errorDiv.isDisplayed()).toBeFalsy();
    });


    /**
     * Testing the phone number
     */

    it('I should be able to enter text in the phone number input', function() {
        element(by.model('cdPhone')).sendKeys('0726323789');
        var errorDiv = browser.findElement(by.css('.bg-danger'));
        //the error block should not be displayed
        expect(errorDiv.isDisplayed()).toBeFalsy();
    });

    /**
     * Testing the adress
     */

    it('I should be able to enter the adress.', function() {
        element(by.model('cdAdress')).sendKeys('Observatorului Street Nr 35');
        var errorDiv = browser.findElement(by.css('.bg-danger'));
        //the error block should not be displayed
        expect(errorDiv.isDisplayed()).toBeFalsy();
    });

    /**
     * Testing the city input
     */


    it('I should be able to enter the name of the city.', function() {
        element(by.model('cdCity')).sendKeys('Cluj Napoca');
        var errorDiv = browser.findElement(by.css('.bg-danger'));
        //the error block should not be displayed
        expect(errorDiv.isDisplayed()).toBeFalsy();
    });


    /**
     * Testing the county input
     */

    it('I should be able to enter the name of the county.', function() {
        element(by.model('cdCounty')).sendKeys('Cluj County');
        var errorDiv = browser.findElement(by.css('.bg-danger'));
        //the error block should not be displayed
        expect(errorDiv.isDisplayed()).toBeFalsy();
    });

    /**
     *  Testing the country select
     */

    it('I should be able to select another country from the dropdown list', function() {
        browser.findElement(by.css('select option:nth-child(1)')).click();
        expect(element(by.selectedOption('cdCountry')).getText()).toEqual('Afghanistan');
    });


});