/**
 * Created by ahenning on 3/17/14.
 */
angular.module('zamolxian.tutorials', [
    'ui.router.state',
    'ajoslin.promise-tracker'
])

.config(function config($stateProvider) {
    $stateProvider.state('tutorials', {
        url: '/tutorials',
        views: {
            "main": {
                controller: 'TutorialsCtrl',
                templateUrl: 'tutorials/tutorials.tpl.html'
            }
        },
        data: { pageTitle: 'Tutorials' }
    });
})

.controller("TutorialsCtrl", function TutorialsCtrl($scope, promiseTracker) {

});