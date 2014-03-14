angular.module("listingModules", ["firebase", "zamolxian.config"])
.factory("listingModules", function () {
    return {
        getAll: function () {
            var ref = new Firebase(firebaseURL.link + "/modules");
            return ref;
        }
    };
});
