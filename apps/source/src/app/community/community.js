angular.module('zamolxian.community', [
        'ui.router.state',
        'ajoslin.promise-tracker'
    ])



    .config(function config($stateProvider) {
        $stateProvider.state('community', {
            url: '/community',
            views: {
                "main": {
                    controller: 'CommunityCtrl',
                    templateUrl: 'community/community.tpl.html'
                }
            },
            data: { pageTitle: 'Community' }
        });
    })

    .controller("CommunityCtrl", function AccountCtrl($scope, promiseTracker) {

    });