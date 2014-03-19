angular.module('zamolxian.providers.factory', ['zamolxian.config', 'firebase'])

.provider('factoryProvider', function() {

        this.$get = function($firebase) {

            return {
                FactoryProvider: function() {
                    var readingListUrl = "https://zamolxian.firebaseio.com/readinglist";
                    var readingListRef = $firebase(new Firebase(readingListUrl));
//                    console.log(readingListUrl + " returned  ");
//                    console.log(readingListRef);
                    var data = [];
                    data["readingList"] = readingListRef;

                    return {
                        readingList : data["readingList"]
                    };
                }
            };
        };
});