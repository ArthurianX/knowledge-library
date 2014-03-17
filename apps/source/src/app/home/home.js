/**
 * Created by ahenning on 3/17/14.
 */
angular.module('zamolxian.home', [
    'ui.router.state',
    'ajoslin.promise-tracker'
])

.config(function config($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        views: {
            "main": {
                controller: 'HomeCtrl',
                templateUrl: 'home/home.tpl.html'
            }
        },
        data: { pageTitle: 'Home' }
    });
})

.controller("HomeCtrl", function HomeCtrl($scope, promiseTracker) {

});