angular.module('zamolxian.modules_updates', [
        'ui.router.state',
        'ajoslin.promise-tracker'
    ])

    .config(function config($stateProvider) {
        $stateProvider.state('modules_updates', {
            url: '/modules_updates',
            views: {
                "main": {
                    controller: 'ModulesCtrl',
                    templateUrl: 'modules_updates/modules_updates.tpl.html'
                }
            },
            data: { pageTitle: 'Modules and Updates' }
        });
    })

    .controller("ModulesCtrl", function AccountCtrl($scope, promiseTracker) {

    });