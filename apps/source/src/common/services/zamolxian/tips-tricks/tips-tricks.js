angular.module('zamolxian.services', [])

//me
.factory('TipsTricksService', ['firebase', function (firebase) {
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
}]);