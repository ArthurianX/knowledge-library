angular.module('zamolxian.my_account', [
        'ui.router.state',
        'ajoslin.promise-tracker'
    ])

    .config(function config($stateProvider) {
        $stateProvider.state('my_account', {
            url: '/my_account',
            views: {
                "main": {
                    controller: 'AccountCtrl',
                    templateUrl: 'my_account/my_account.tpl.html'
                }
            },
            data: { pageTitle: 'Account' }
        });
    })

    .controller("AccountCtrl", function AccountCtrl($scope, promiseTracker) {

    });
