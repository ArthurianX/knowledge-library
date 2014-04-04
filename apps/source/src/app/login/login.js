angular.module('zamolxian.login', [
    'ui.router.state'
])


    .config(function config($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            views: {
                "main": {
                    controller: 'LoginCtrl',
                    templateUrl: 'login/login.tpl.html'
                }
            },
            data: { pageTitle: 'Irc' }
        });
    })

    .controller("LoginCtrl", function LoginCtrl ($scope,$http,$state) {
        $scope.loginUser = function () {
            var userToken = {};
            userToken.userName = $scope.loginUserName;
            userToken.secret = 123;

            localStorage.setItem('userToken', JSON.stringify(userToken));
            $state.go('home');
        };

    });
