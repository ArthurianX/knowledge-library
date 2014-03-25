describe('HomeController Test', function() {
    beforeEach(module('zamolxian.home'));

    var mockProvider = {
        data: {
            readingList: [{
                "date" : "date today",
                "rating" : 10,
                "link_to_tutorial" : "link/stuff",
                "source" : "src",
                "comments" : "comm",
                "title" : "default",
                "priority" : 3,
                "content" : "default",
                "tags" : "default, tags"
            }, {
                "date" : "date tomorrow",
                "rating" : 10,
                "link_to_tutorial" : "link/stuff",
                "source" : "src",
                "comments" : "comm",
                "title" : "default",
                "priority" : 3,
                "content" : "default",
                "tags" : "default, tags"
            }]
        },
        FactoryProvider: function() {
            return this.data;
        }
    };

    it('should return a readinglist array of two elements',
        inject(function($rootScope, $controller) {

            var scope = $rootScope.$new();
            var ctrl = $controller('HomeCtrl', {
                $scope: scope, factoryProvider: mockProvider
            });

            expect(scope.data.readingList.length).toBe(2);
    }));
});
