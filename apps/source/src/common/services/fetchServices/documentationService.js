angular.module("listingDocumentation", ["firebase", "zamolxian.config"])


//First try to integrate firebase
//.factory("listing.documentation", function ($firebase) {
//    return {
//        getAll: function () {
//            var ref = new Firebase(firebaseURL.link + "/docs");
//            return ref;
//        }
//    };
//});

.provider("documentationProvider", function () {
        this.ref = new Firebase(firebaseURL.link + "/docs");
        this.getAll = function () {
            return this.ref;
        };

        $get = function () {
            var self = this;
            var service = {
                getAll :  self.getAll()
            };

            return service;
        };
    });



