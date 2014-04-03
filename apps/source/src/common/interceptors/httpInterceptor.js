angular.module("zalmoxian.interceptors", [])
    .factory('myHttpInterceptor', function ($q) {
        return {
            request: function (config) {
                console.log('Http Request started');
                return config || $q.when(config);
            }
        };
    });