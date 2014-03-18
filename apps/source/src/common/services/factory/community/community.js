angular.module('zamolxian.services.factory', [])

.factory('CommunityService', function ($http, $q) {
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