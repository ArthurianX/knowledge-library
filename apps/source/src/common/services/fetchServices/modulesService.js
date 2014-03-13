angular.module("zalmoxian.services", ["firebase", "zamolxian.config"])
.factory("modules", function () {
    return {
        getAll: function () {
            var ref = new Firebase(firebaseURL.link + "/modules");
            return ref;
        }
    };
});
