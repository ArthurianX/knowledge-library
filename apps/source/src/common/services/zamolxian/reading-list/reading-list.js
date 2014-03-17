angular.module('zamolxian.services', [])

// me
.factory('ReadingListService', ['firebase', function (firebase) {
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