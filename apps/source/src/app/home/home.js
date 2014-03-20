angular.module('zamolxian.home', ['ionic'])

    .config(function config($stateProvider) {
        $stateProvider
            .state('tab.home', {
                url: '/home',
                    /*controller: 'HomeCtrl',
                    templateUrl: 'home/home.tpl.html'*/
                views: {
                    'home-tab': {
                        controller: 'HomeCtrl',
                        templateUrl: 'home/home.tpl.html'
                    }
                }
            });
    })



    .controller('HomeCtrl', function HomeController($scope) {

    })

;

