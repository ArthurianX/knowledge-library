angular.module('zamolxian.services', [])

.factory('documentation', function ($http, $q) {
    return {
        getAll: function () {
            // client id
            // client secret

            return $q.all([
                $http.get(/* url */)
            ]).then(function (results) {
                // process results
                return results;
            });
        }
    };
})

.factory('tutorials', function ($http, $q) {
    return {
        getAll: function () {
            // client id
            // client secret

            return $q.all([
                    $http.get(/* url */)
                ]).then(function (results) {
                // process results
                return results;
            });
        }
    };
})

.factory('community', function ($http, $q) {
    return {
        getAll: function () {
            // client id
            // client secret

            return $q.all([
                    $http.get(/* url */)
                ]).then(function (results) {
                // process results
                return results;
            });
        }
    };
})

.factory('tipstricks', function ($http, $q) {
    return {
        getAll: function () {
            // client id
            // client secret

            return $q.all([
                    $http.get(/* url */)
                ]).then(function (results) {
                // process results
                return results;
            });
        }
    };
})

.factory('modulesupdates', function ($http, $q) {
    return {
        getAll: function () {
            // client id
            // client secret

            return $q.all([
                    $http.get(/* url */)
                ]).then(function (results) {
                // process results
                return results;
            });
        }
    };
})

.factory('readinglist', function ($http, $q) {
    return {
        getAll: function () {
            // client id
            // client secret

            return $q.all([
                    $http.get(/* url */)
                ]).then(function (results) {
                // process results
                return results;
            });
        }
    };
});