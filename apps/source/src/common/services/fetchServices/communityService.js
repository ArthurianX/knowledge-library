angular.module("listingCommunity", ["firebase", "zamolxian.config"])
.factory("listingCommunity", function ($firebase) {
    return {
        getAll: function () {
            var ref = new Firebase(firebaseURL.link + "/community");
            return ref;
        }
    };
});






