/**
 * Created by ahenning on 3/17/14.
 */
angular.module('zamolxian.settings', [
    'ui.router.state',
    'ajoslin.promise-tracker'
])

.config(function config($stateProvider) {
    $stateProvider.state('settings', {
        url: '/settings',
        views: {
            "main": {
                controller: 'SettingsCtrl',
                templateUrl: 'settings/settings.tpl.html'
            }
        },
        data: { pageTitle: 'Settings' }
    });
})

.controller("SettingsCtrl", function SettingsCtrl($scope, promiseTracker) {

});