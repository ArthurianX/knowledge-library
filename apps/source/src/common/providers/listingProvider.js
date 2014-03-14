angular.module("zalmoxian.providers", ["zamolxian.config", "fetchServices"])

    .provider("listingProvider", function() {

        function DataProvider(flags) {
            var rawList = [];
            rawList["community"] = community.getAll();
            rawList["modules"] = modules.getAll();
            rawList["documentation"] = documentation.getAll();


                return rawList;

        }


        this.$get = function (flags) {
            return new DataProvider(flags);
        };
    });