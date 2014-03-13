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

// me
.factory('tutorials', ['firebase', function (firebase) {
    var ref = new Firebase(firebase.dbLocation + "tutorials");
    return {
        getAll: function () {
            var tutorials = [];
            ref.on("child_added", function(snapshot) {
                tutorials.push(snapshot.val());
            });
            return tutorials;
        },
        add: function(tutorial) {
            ref.push(tutorial);
        }
    };
}])

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

//me
.factory('tipstricks', ['firebase', function (firebase) {
    var ref = new Firebase(firebase.dbLocation + "tipstricks");
    return {
        getAll: function () {
            var tipstricks = [];
            ref.on("child_added", function(snapshot) {
                tipstricks.push(snapshot.val());
            });
            return tipstricks;
        },
        add: function(tipstricks) {
            ref.push(tipstricks);
        }
    };
}])

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

// me
.factory('readinglist', ['firebase', function (firebase) {
    var ref = new Firebase(firebase.dbLocation + "readinglist");
    return {
        getAll: function () {
            var readinglist = [];
            ref.on("child_added", function(snapshot) {
                readinglist.push(snapshot.val());
            });
            return readinglist;
        },
        add: function(readinglist) {
            ref.push(readinglist);
        }
    };
}]);