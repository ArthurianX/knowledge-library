angular.module('zamolxian.provider', ['zamolxian.services'])

.provider('$zamolxian', ['TutorialsService', 'TipsTricksService', 'ReadingListService',
        function(tutorials, tipstricks, readinglist) {

    // constructor
    function ZamolxianProvider(flag) {
        // use flag or other user settings parameters
    }

    // gets all the data from services
    this.getAll = function() {
        var result = {};
        result['tutorials'] = tutorials.getAll();
        result['readinglist'] = readinglist.getAll();
        result['tipstricks'] = tipstricks.getAll();
        return result;
    };

    // instantiation
    this.$get = function(flag) {
        ZamolxianProvider(flag);
    }
}]);
