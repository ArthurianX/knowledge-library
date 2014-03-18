angular.module("zalmoxian.providers", ["zamolxian.config","firebase"])

    .provider("listingProvider", function() {

        function ListingService($firebase) {

            var firebaseLink = "https://zalmoxian.firebaseio.com/";

            //users = $firebase(new Firebase(URL + '/' + ID));

            var docsref = $firebase(new Firebase(firebaseLink + "/docs"));
            var comsref = $firebase(new Firebase(firebaseLink + "/community"));
            var modref = $firebase(new Firebase(firebaseLink + "/modules"));

            var rawList = [];
            rawList["community"] = comsref;
            rawList["modules"] = modref;
            rawList["documentation"] = docsref;

            function getList (flags) {
                return rawList;
            }

            function getDocs (flags) {
                return docsref;
            }

            function getModules (flag) {
                return modref;
            }

            function getCommunity (flag) {
                return comsref;
            }

            this.getAll = function(flags) {
                return rawList;
            };
        }

        this.$get = function (flags, $firebase) {

            return new ListingService($firebase);

        };
    });