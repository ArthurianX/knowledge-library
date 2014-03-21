angular.module('zamolxian.community', ['ionic'])

    .config(function config($stateProvider) {
        $stateProvider
            .state('sidemenu.community', {
                url: '/community',
                views: {
                    'topView': {
                        controller: 'CommunityCtrl',
                        templateUrl: 'community/community.tpl.html'
                    }
                }
            });
    })

    .controller('CommunityCtrl', function CommunityController($scope) {

    })

;

