/**
 * Created by ahenning on 3/17/14.
 */
angular.module('zamolxian.about', [
    'ui.router.state',
    'ajoslin.promise-tracker'
])

.config(function config($stateProvider) {
    $stateProvider.state('about', {
        url: '/about',
        view: {
            "main": {
                controller: 'AboutCtrl',
                templateUrl: 'about/about.tpl.html'
            }
        },
        data: { pageTitle: 'About' }
    });
})

.controller("AboutCtrl", function AboutCtrl($scope, promiseTracker) {

});