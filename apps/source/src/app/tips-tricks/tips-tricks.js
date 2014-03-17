/**
 * Created by ahenning on 3/17/14.
 */
angular.module('zamolxian.tips-tricks', [
    'ui.router.state',
    'ajoslin.promise-tracker'
])

.config(function config($stateProvider) {
    $stateProvider.state('tips-tricks', {
        url: '/tips-tricks',
        view: {
            "main": {
                controller: 'TipsTricksCtrl',
                templateUrl: 'tips-tricks/tips-tricks.tpl.html'
            }
        },
        data: { pageTitle: 'Tips & Tricks' }
    });
})

.controller("TipsTricksCtrl", function TipsTricksCtrl($scope, promiseTracker) {

});