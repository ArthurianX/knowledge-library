var zalModule = angular.module("zalModule", []);

zalModule.provide("fireBaseConn", function () {

})

zalModule.factory("tutorials", function ($http, $q) {
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

zalModule.factory("documentation", function ($htpp, $q) {
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
    }
});

zalModule.factory("community", function ($htpp, $q) {
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
    }
});

zalModule.factory("tipstricks", function ($htpp, $q) {
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
    }
});

zalModule.factory("modules", function ($htpp, $q) {
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
    }
});

zalModule.factory("reading", function ($htpp, $q) {
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
    }
});