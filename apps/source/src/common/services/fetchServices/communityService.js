angular.module("zalmoxian.services", ["firebase", "zamolxian.config"])
.factory("community", function () {
    return {
        getAll: function () {
            var ref = new Firebase(firebaseURL.link + "/community");
            return ref;
        }
    };
});






