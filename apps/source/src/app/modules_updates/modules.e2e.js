describe("Modules and Updates page", function () {
    beforeEach(function() {
        browser.get('http://zamolxian.client/modules_updates');
    });

    it('should have a title', function () {
        expect(browser.getTitle()).toBeTruthy();
    })

    it('should change it s list based on user input', function () {
        element(by.model('querry.module')).sendKeys('angular');
        expect(element.all(by.css('.card-zalmoxis')).count()).toEqual(1);
    })

    it('should have by default a list of 4 modules', function () {
        expect(element.all(by.css('.card-zalmoxis')).count()).toEqual(4);
    })
})