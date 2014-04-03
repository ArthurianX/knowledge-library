angular.module("zalmoxian.interceptorCountry", [])
    .factory('myCountryInterceptor', function ($q) {
        return {
            request: function (config) {
                console.log('Querring the country service');
                return config || $q.when(config);
            }
        };
    });