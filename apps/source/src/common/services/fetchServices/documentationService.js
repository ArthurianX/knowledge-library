angular.module("zalmoxian.services", ["firebase", "zamolxian.config"])


//First try to integrate firebase
.factory("documentationService", function () {
    return {
        getAll: function () {
            var ref = new Firebase(firebaseURL.link + "/docs");
            return ref;
        }
    };
});



