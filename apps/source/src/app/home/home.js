angular.module('zamolxian.home', ['ionic'])

    .config(function config($stateProvider) {
        $stateProvider
            .state('sidemenu.home', {
                url: '/home',
                views: {
                    'topView': {
                        controller: 'HomeCtrl',
                        templateUrl: 'home/home.tpl.html'
                    }
                }
            });
    })

    .controller('HomeCtrl', function HomeController($scope) {

    })

;

