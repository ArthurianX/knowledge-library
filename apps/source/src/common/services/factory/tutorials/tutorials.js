angular.module('zamolxian.services.factory', [])

// me
.factory('TutorialsService', ['firebase', function (firebase) {
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
}]);