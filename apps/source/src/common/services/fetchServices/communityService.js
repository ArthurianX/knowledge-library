angular.module("listingCommunity", ["firebase", "zamolxian.config"])
.factory("listingCommunity", function () {
    return {
        getAll: function () {
            var ref = new Firebase(firebaseURL.link + "/community");
            return ref;
        }
    };
});






