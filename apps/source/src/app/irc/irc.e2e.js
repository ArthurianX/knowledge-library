describe("irc Module", function () {

    beforeEach(function () {
        browser.get('http://zamolxian.client/irc',10000);
    });

    it('should have a title', function () {
        expect(browser.getTitle()).toEqual("http://zamolxian.client/irc");
    });

    it('should have a well', function () {
        var ele = browser.findElement(by.css('.well'));
    });

    it('should be able to navigate using the menu', function () {
        var communityLink =  element.all(by.css('.tab-label')).get(3);
        communityLink.click();
        expect(browser.getTitle()).toEqual("http://zamolxian.client/community");
    })

})