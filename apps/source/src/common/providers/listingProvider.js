angular.module("zalmoxian.providers", ["zamolxian.config", "firebase"])

    .provider("listingProvider", function () {

        return {
            $get : function ListingService($firebase) {

            return {
                ListingService: function () {

                    var firebaseLink = "https://zalmoxian.firebaseio.com";

                    var docsref = $firebase(new Firebase(firebaseLink + "/docs"));
                    var comsref = $firebase(new Firebase(firebaseLink + "/community"));
                    var modref = $firebase(new Firebase(firebaseLink + "/modules"));

                    var rawList = [];
                    rawList["community"] = comsref;
                    rawList["modules"] = modref;
                    rawList["documentation"] = docsref;

                    function getList(flags) {
                        return rawList;
                    }

                    function getDocs(flags) {
                        return docsref;
                    }

                    function getModules(flag) {
                        return modref;
                    }

                    function getCommunity(flag) {
                        return comsref;
                    }

                    function listAlert ( subj) {
                        alert("I am an alert" + subj);
                    }

                    //return listAlert;
                    return {
                        commnunityList : rawList["community"],
                        modulesList    : rawList["modules"],
                        docList        : rawList["documentation"],
                        fullList       : rawList,
                        getCom : function getCommunity(flag) {
                            return comsref;
                        }
                    };

                }
            };

        }};
    });