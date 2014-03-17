angular.module('zamolxian.irc', [
    'ui.router.state',
    'ajoslin.promise-tracker'
    //'ui.bootstrap'
])


.config(function config($stateProvider) {
        $stateProvider.state('irc', {
            url: '/irc',
            views: {
                "main": {
                    controller: 'IrcCtrl',
                    templateUrl: 'irc/irc.tpl.html'
                }
            },
            data: { pageTitle: 'Irc' }
        });
    })

.controller("IrcCtrl", function IrcCtrl ($scope, promiseTracker) {
        console.log("IRC controller has been loaded");
    });