/**
 * Created by ahenning on 3/17/14.
 */
angular.module('zamolxian.home-second', [
    'ui.router.state',
    'ajoslin.promise-tracker'
])

.config(function config($stateProvider) {
    $stateProvider.state('home-second', {
        url: '/home-second',
        views: {
            "main": {
                controller: 'HomeSecondCtrl',
                templateUrl: 'home/home-second.tpl.html'
            }
        },
        data: { pageTitle: 'Home - Logged in' }
    });
})

.controller("HomeSecondCtrl", function HomeSecondCtrl($scope, promiseTracker) {

});