angular.module('zamolxian.docs', [
        'ui.router.state',
        'ajoslin.promise-tracker',
        'zalmoxian-auth-service'
    ])

    .config(function config($stateProvider) {
        $stateProvider.state('docs', {
            url: '/docs',
            views: {
                "main": {
                    controller: 'DocsCtrl',
                    templateUrl: 'docs/docs.tpl.html'
                }
            },
            data: { pageTitle: 'Docs' }
        });
    })

    .controller("DocsCtrl", function AccountCtrl($scope, promiseTracker, zalAuthService) {
        zalAuthService.bounceLogin();
    });