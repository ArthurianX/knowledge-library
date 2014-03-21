angular.module('zamolxian.myaccount', ['ionic'])

    .config(function config($stateProvider) {
        $stateProvider
            .state('sidemenu.myaccount', {
                url: '/myaccount',
                views: {
                    'topView': {
                        controller: 'MyAccountCtrl',
                        templateUrl: 'myaccount/myaccount.tpl.html'
                    }
                }
            });
    })

    .controller('MyAccountCtrl', function MyAccountController($scope) {

    })

;

