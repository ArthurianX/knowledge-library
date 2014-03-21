angular.module('zamolxian.tips', ['ionic'])

    .config(function config($stateProvider) {
        $stateProvider
            .state('sidemenu.tips', {
                url: '/tips',
                views: {
                    'topView': {
                        controller: 'TipsCtrl',
                        templateUrl: 'tips/tips.tpl.html'
                    }
                }
            });
    })

    .controller('TipsCtrl', function TipsController($scope) {

    })

;

