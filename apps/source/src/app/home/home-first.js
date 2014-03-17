/**
 * Created by ahenning on 3/17/14.
 */
angular.module('zamolxian.home-first', [
    'ui.router.state',
    'ajoslin.promise-tracker'
])

.config(function config($stateProvider) {
    $stateProvider.state('home-first', {
        url: '/home-first',
        view: {
            "main": {
                controller: 'HomeFirstCtrl',
                templateUrl: 'home/home-first.tpl.html'
            }
        },
        data: { pageTitle: 'Home' }
    });
})

.controller("HomeFirstCtrl", function HomeFirstCtrl($scope, promiseTracker) {

});