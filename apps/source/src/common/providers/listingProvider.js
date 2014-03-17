angular.module("zalmoxian.providers", ["zamolxian.config", "listingDocumentation","listingCommunity","listingModules"])

    .provider("listingProvider", function() {

        this.rawList = [];
        this.rawList["community"] = community.getAll();
        this.rawList["modules"] = modules.getAll();
        this.rawList["documentation"] = documentation.getAll();
        this.getAll = function(flags) {
            return this.rawList;
        };

//        function DataProvider(flags) {
//            var rawList = [];
//            rawList["community"] = community.getAll();
//            rawList["modules"] = modules.getAll();
//            rawList["documentation"] = documentation.getAll();
//
//
//                return rawList;
//
//        }


        this.$get = function (flags) {
            var self = this;
            var service = {
                getList : this.getAll(flags)
            };

            return service;
        };
    });