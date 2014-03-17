angular.module("listingDocumentation", ["firebase", "zamolxian.config"])


//First try to integrate firebase
.factory("listing.documentation", function () {
    return {
        getAll: function () {
            var ref = new Firebase(firebaseURL.link + "/docs");
            return ref;
        }
    };
});



