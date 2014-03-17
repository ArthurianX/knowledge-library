/**
 * Created by ahenning on 3/17/14.
 */
angular.module('zamolxian.reading-list', [
    'ui.router.state',
    'ajoslin.promise-tracker'
])

.config(function config($stateProvider) {
    $stateProvider.state('reading-list', {
        url: '/reading-list',
        view: {
            "main": {
                controller: 'ReadingListCtrl',
                templateUrl: 'reading-list/reading-list.tpl.html'
            }
        },
        data: { pageTitle: 'Reading List' }
    });
})

.controller("ReadingListCtrl", function ReadingListCtrl($scope, promiseTracker) {

});